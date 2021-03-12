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
import Preloader from '../Preloader/Preloader';
import './App.css';
import * as mainApi from '../../utils/mainApi';
import { getToken, removeToken, setToken } from '../../utils/token';

function App() {

  const location = useLocation();
  const history = useHistory();

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [authError, setAuthError] = React.useState(false);
  const [regError, setRegError] = React.useState(false);
  const [editError, setEditError] = React.useState(false);
  const [editSuccess, setEditSuccess] = React.useState(false);

  // Проверка токена
  React.useEffect(() => {
    const token = getToken();
    mainApi.getUser(token)
      .then((res) => {
        if (!res) return Promise.reject('Unauthorized');
        console.log(res)
        setCurrentUser(res);
        setLoggedIn(true);
        console.log(loggedIn)
        location.pathname === '/movies' && history.push('/movies');
        location.pathname === '/saved-movies' && history.push('/saved-movies');
        location.pathname === '/profile' && history.push('/profile');
      })
      .catch((err) => {
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
        removeToken();
        history.push('/');
        console.log('Ну я пошел..')
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
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            location={location}
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
          <Route exact path='/signup'>
            <Register
              handleRegister={handleRegister}
              regError={regError}
            />
          </Route>
          <Route exact path='/signin'>
            <Login
              handleLogin={handleLogin}
              authError={authError}
            />
          </Route>
          <Route exact path='/404'>
            <NotFound />
          </Route>
        </Switch>
        <Route exact path='/preloader'>
          <Preloader />
        </Route>
      </main>
    </CurrentUserContext.Provider>
  );
}

export default App;
