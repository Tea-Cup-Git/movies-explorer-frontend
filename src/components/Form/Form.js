import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import headerLogo from '../../images/logo.svg'

function Form({ formName, title, buttonTitle, text, linkTitle, onSubmit, isLoading, location, ...props }) {
  let linkPath;
  if (linkTitle === 'Войти') {
    linkPath = '/signin';
  } else {
    linkPath = '/signup'
  }
  if (location.pathname === '/profile') {
    linkPath = '/'
  }

  return (
    <div className='form'>
      <Link to={'/'}>
        <img className={location.pathname === '/profile' ? 'form__icon_hidden' : 'form__icon'} src={headerLogo} alt='Movies-Explorer' />
      </Link>
      <form className='form__container' onSubmit={onSubmit} noValidate>
        <h1 className='form__title'>{title}</h1>
        {props.children}
        <div className='form__footer'>
          <button 
            className={`form__button form__button_${formName}`}
            type='submit'>{isLoading === true ? 'Загрузка...' : buttonTitle}
          </button>
          <p className='form__text'>{text}
            <Link 
              to={linkPath}
              className={`form__link form__link_${formName}`}>{linkTitle}</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Form;