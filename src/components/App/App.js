import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
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

function App() {

  const location = useLocation();

  return (
    <main className='app'>
      <Switch>
        <Route exact path='/'>
          <Header
            location={location}
          />
          <Main />
          <Footer />
        </Route>
        <Route exact path='/movies'>
          <Header
            location={location}
          />
          <Movies
            location={location}
          />
          <Footer />
        </Route>
        <Route exact path='/saved-movies'>
          <Header
            location={location}
          />
          <SavedMovies
            location={location}
          />
          <Footer />
        </Route>
        <Route exact path='/profile'>
          <Header
            location={location}
          />
          <Profile
            location={location}
          />
        </Route>
        <Route exact path='/signup'>
          <Register
            location={location}
          />
        </Route>
        <Route exact path='/signin'>
          <Login
            location={location}
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
  );
}

export default App;
