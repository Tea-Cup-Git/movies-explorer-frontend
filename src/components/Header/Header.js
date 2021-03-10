import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import headerLogo from '../../images/logo.svg'

function Header({ location }) {
  function closePopup() {
    document.querySelector('.header__popup').classList.remove('header__popup_visible');
  };
  
  function openPopup() {
    document.querySelector('.header__popup').classList.add('header__popup_visible');
  };

  return (
    <header className={`header ${location.pathname === '/' ? 'header_dark' : ''}`}>
      <div className='header__container'>
        <Link to={'/'}>
          <img className='header__logo' src={headerLogo} alt='Movies-Explorer' />
        </Link>
        <button className={location.pathname === '/' ? 'header__navButton_hidden' : 'header__navButton'} onClick={openPopup} />

        <nav className={`header__navBar ${location.pathname === '/' ? 'header__navBar_hidden' : 'header__navBar_light'}`}>
          <Link 
            to={'/movies'}
            className={`header__link header__link_light ${location.pathname === '/movies' ? 'header__link_accented' : ''}`}
          >Фильмы
          </Link>
          <Link 
            to={'/saved-movies'}
            className={`header__link header__link_light ${location.pathname === '/saved-movies' ? 'header__link_accented' : ''}`}
          >Сохраненные фильмы
          </Link>
          <Link to={'/profile'}>
            <button className='header__button header__button_light'>Аккаунт</button>
          </Link>
        </nav>

        <nav className={`header__navBar ${location.pathname === '/' ? 'header__navBar_dark' : 'header__navBar_hidden'}`}>
          <Link to={'/signup'} className='header__link header__link_dark'>Регистрация</Link>
          <Link to={'/signin'}>
            <button className='header__button header__button_dark'>Войти</button>
          </Link>
        </nav>

        <div className='header__popup'>
          <nav className='header__popup__navBar'>
            <Link 
              to={'/'}
              className={`header__popup__link ${location.pathname === '/' ? 'header__popup__link_accented' : ''}`}
              onClick={closePopup}
            >Главная
            </Link>
            <Link 
              to={'/movies'}
              className={`header__popup__link ${location.pathname === '/movies' ? 'header__popup__link_accented' : ''}`}
              onClick={closePopup}
            >Фильмы
            </Link>
            <Link 
              to={'/saved-movies'}
              className={`header__popup__link ${location.pathname === '/saved-movies' ? 'header__popup__link_accented' : ''}`}
              onClick={closePopup}
            >Сохраненные фильмы
            </Link>
            <Link to={'/profile'} onClick={closePopup}>
              <button className='header__button header__button_light header__button_repositioned'>Аккаунт</button>
            </Link>
            <button className='header__popup__closeButton' onClick={closePopup} />
          </nav>
        </div>
        
      </div>
    </header>
  );
}

export default Header;