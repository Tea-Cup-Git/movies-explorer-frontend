import React from 'react';
import Form from '../Form/Form';
import './Login.css';

function Login({ location }) {
  return (
    <section className='login'>
      <Form
        title='Рады видеть!'
        buttonTitle='Войти'
        text='Ещё не зарегистрированы?&ensp;'
        linkTitle='Регистрация'
        location={location}
      >
        <label className='form__input-label' for='email-input'>E-mail</label>
        <input id='email-input' className='form__input form__input_type_email' type='email' name='email' />
        <span id='email-input-error' className='form__input-error'></span>
        <label className='form__input-label' for='password-input'>Пароль</label>
        <input id='password-input' className='form__input form__input_type_password' type='password' name='password' />
        <span id='password-input-error' className='form__input-error'>Что-то пошло не так...</span>
      </Form>
    </section>
  );
}

export default Login;