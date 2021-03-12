import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import headerLogo from '../../images/logo.svg'

function Form({ formName, formTitle, buttonTitle, text, linkTitle, formError, isValid, onSubmit, dirty, onExit, ...props }) {
  
  let linkPath;
  if (linkTitle === 'Войти') {
    linkPath = '/signin';
  } else if (linkTitle === 'Регистрация') {
    linkPath = '/signup'
  }
  if (buttonTitle === 'Редактировать') {
    linkPath = '/profile';
  }

  return (
    <div className='form'>
      <Link to={'/'}>
        <img className={buttonTitle === 'Редактировать' ? 'form__icon_hidden' : 'form__icon'} src={headerLogo} alt='Movies-Explorer' />
      </Link>
      <form className='form__container' onSubmit={onSubmit} noValidate>
        <h1 className='form__title'>{formTitle}</h1>
        {props.children}
        <div className='form__footer'>
          <p className='form__error'>{formError}</p>
          <button 
            id='submitButton'
            className={`form__button form__button_${formName}`}
            type='submit'
            disabled={!isValid || !dirty}
          >
            {buttonTitle}
          </button>
          <p className='form__text'>{text}
          <button 
            className={'form__button_transparent'}
            onClick={linkPath === '/profile' ? onExit : undefined}
          >
            <Link 
              to={linkPath}
              className={`form__link form__link_${formName}`}>{linkTitle}
            </Link>
          </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Form;