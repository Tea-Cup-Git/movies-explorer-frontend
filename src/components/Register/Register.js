import React from 'react';
import Form from '../Form/Form';
import './Register.css';

function Register(location) {
  return (
    <section className='register'>
      <Form
        title='Добро пожаловать!'
        buttonTitle='Зарегистрироваться'
        text='Уже зарегистрированы?&ensp;'
        linkTitle='Войти'
        location={location}
      >
        <label className='form__input-label'>Имя</label>
        <input id='name-input' className='form__input' type='text' name='name' pattern='^[a-zA-Z]+$' />
        <span id='name-input-error' className='form__input-error'></span>
        <label className='form__input-label'>E-mail</label>
        <input id='email-input' className='form__input' type='email' name='email' />
        <span id='email-input-error' className='form__input-error'></span>
        <label className='form__input-label'>Пароль</label>
        <input id='password-input' className='form__input' type='password' name='password' />
        <span id='password-input-error' className='form__input-error'>Что-то пошло не так...</span>
      </Form>
    </section>
  );
}

export default Register;