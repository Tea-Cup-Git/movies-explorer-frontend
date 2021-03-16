import React from 'react';
import { Route, Switch, useLocation, Redirect, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import './App.css';

import * as mainApi from '../../utils/mainApi';
import * as moviesApi from '../../utils/moviesApi';
import { getToken, setToken } from '../../utils/token';
import { searchByKeyword, moviesConversion } from '../../utils/helpers';

function App() {

  const location = useLocation();
  const history = useHistory();

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [authError, setAuthError] = React.useState(false);
  const [regError, setRegError] = React.useState(false);
  const [editError, setEditError] = React.useState(false);
  const [editSuccess, setEditSuccess] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedMoviesIds, setSavedMoviesIds] = React.useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);
  const [isFetched, setIsFetched] = React.useState(false);

  function fetchMovies() {
    setIsLoading(true);
    moviesApi.getMovies()
      .then((movies) => {
        const conversedMovies = moviesConversion(movies, 'https://api.nomoreparties.co');
        localStorage.setItem('movies', JSON.stringify(conversedMovies));
      })
      .catch((err) => {
        console.error(err);
      })
      .then(() => {
        setIsLoading(false);
        setIsFetched(true)
      })
  }

  function handleSearch(keyword, isIncludesShort) {
    let movies = localStorage.getItem('movies');
    if (!isFetched) {
      fetchMovies();
    } else {
      movies = JSON.parse(movies);
      const filteredMovies = searchByKeyword(movies, keyword, isIncludesShort);
      setFoundMovies(filteredMovies);
      localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
    }
  }

  function handleSavedMoviesSearch(keyword, isIncludesShort) {
    const filteredSavedMovies = searchByKeyword(savedMovies, keyword, isIncludesShort);
    setFoundSavedMovies(filteredSavedMovies);
  }

  function saveMovie(movie) {
    const token = getToken();
    mainApi.addMovie(token, movie)
      .then((savedMovie) => {
        setSavedMovies([...savedMovies, savedMovie]);
        setSavedMoviesIds([...savedMoviesIds, (savedMovie.movieId)]);
        setFoundSavedMovies([...savedMovies, savedMovie]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function removeMovie(movie) {
    const token = getToken();
    mainApi.deleteMovie(token, movie)
      .then((removedMovie) => {
        const filteredMovies = savedMovies.filter((movie) => movie.movieId !== removedMovie.movieId);
        const filteredMoviesIds = savedMoviesIds.filter((id) => id !== removedMovie.movieId);
        
        setSavedMovies(filteredMovies);
        setSavedMoviesIds(filteredMoviesIds);
        setFoundSavedMovies(filteredMovies);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  React.useEffect(() => {
    if (loggedIn) {
    const token = getToken();
    mainApi.getMovies(token)
      .then((movie) => {
        setSavedMovies(movie);
        setSavedMoviesIds(movie.map((movie) => movie.movieId));
        setFoundSavedMovies(movie);
      })
      .catch((err) => {
        console.error(err);
      });
    }
  }, [loggedIn])

  React.useEffect(() => {
    const localSearchedMovies = localStorage.getItem('searchedMovies');

    if (loggedIn && localSearchedMovies) {
      setFoundMovies(JSON.parse(localSearchedMovies));
    }
  }, [loggedIn]);

  React.useEffect(() => {
    const token = getToken();
    mainApi.getUser(token)
      .then((res) => {
        if (!res) return Promise.reject('Unauthorized');

        setCurrentUser(res);
        setLoggedIn(true);
        location.pathname === '/movies' && history.push('/movies');
        location.pathname === '/saved-movies' && history.push('/saved-movies');
        location.pathname === '/profile' && history.push('/profile');
      })
      .catch((err) => {
        setLoggedIn(false);
        location.pathname === '/movies' && history.push('/');
        location.pathname === '/saved-movies' && history.push('/');
        location.pathname === '/profile' && history.push('/');
        console.error(err);
      });
  }, []);

  // Регистрация
  function handleRegister(name, email, password) {
    mainApi.register(name, email, password)
      .then(() => {
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.error(err);
        setRegError(true);
      });
  }

  // Авторизация
  function handleLogin(email, password) {
    mainApi.authorize(email, password)
      .then((data) => {
        setToken(data.token);
        mainApi.getUser(data.token)
          .then((res) => {
            setCurrentUser(res);
          })
          .catch((err) => {
            console.log(err);
            setAuthError(true);
          });
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.error(err);
        setAuthError(true);
      });
  };

  // Редактировать профиль
  function handleEditProfile(name, email) {
    const token = getToken();
    mainApi.setUser( name, email, token )
    .then(() => {
      document.getElementById('submitButton').disabled = true;
      setEditSuccess(true);
    })
    .catch((err) => {
      console.error(err);
      setEditError(true);
    });
  }

  // Выйти из аккаунта
  const handleSignOut = () => {
    mainApi.signOut()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        setIsFetched(false);
        history.push('/');
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <main className='app'>
        <Switch>
          <Route exact path='/'>
            <Header
              loggedIn={loggedIn}
              location={location}
            />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            location={location}
            isLoading={isLoading}
            handleSearch={handleSearch}
            movies={foundMovies}
            savedMoviesIds={savedMoviesIds}
            onLike={saveMovie}
            onDislike={removeMovie}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            location={location}
            handleSearch={handleSavedMoviesSearch}
            movies={foundSavedMovies}
            savedMoviesIds={savedMoviesIds}
            onDislike={removeMovie}
          />
          <ProtectedRoute
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            handleEditProfile={handleEditProfile}
            editError={editError}
            editSuccess={editSuccess}
            onExit={handleSignOut}
          />
          <Route path='/signup'>
            {!loggedIn
              ? <Register
                  handleRegister={handleRegister}
                  regError={regError}
                />
              : <Redirect to='/movies' />
            }
          </Route>
          <Route path='/signin'>
            {!loggedIn
              ? <Login
                  handleLogin={handleLogin}
                  authError={authError}
                />
              : <Redirect to='/movies' />
            }
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </CurrentUserContext.Provider>
  );
}

export default App;
