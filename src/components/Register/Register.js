import React from 'react';
import Form from '../Form/Form';
import { Formik } from 'formik';
import * as yup from 'yup';
import './Register.css';

function Register({ handleRegister, regError }) {

  const registerValidation = yup.object().shape({
    name: yup.string()
    .min(2, 'Имя должно содержать не менее 2 символов')
    .max(30, 'Имя должно содержать не более 30 символов')
    .matches(
      '[a-zA-Z- ]+$',
      'Имя может содержать только латинские буквы, пробел и дефис'
    )
    .required('Пожалуйста, введите имя'),
    email: yup.string()
      .email('E-mail введен некорректно')
      .required('Пожалуйста, введите E-mail'),
    password: yup.string()
      .min(6, 'Пароль должен содержать не менее 6 символов')
      .required('Пожалуйста, введите пароль')
  });
  
  return (
    <section className='register'>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: ''
        }}
        validateOnBlur
        onSubmit={(values) => {
          handleRegister(values.name, values.email, values.password);
          values.name = '';
          values.email = '';
          values.password = '';
        }}
        validationSchema = {registerValidation}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <Form
            formTitle='Добро пожаловать!'
            buttonTitle='Зарегистрироваться'
            text='Уже зарегистрированы?'
            linkTitle='Войти'
            onError={regError ? 'Что-то пошло не так.. Возможно пользователь с такой почтой уже существует' : ''}
            isValid={isValid}
            onSubmit={handleSubmit}
            dirty={dirty}
          >
            <label className='form__input-label'>Имя</label>
            <input
              className='form__input'
              type='text'
              name='name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className='form__input-error'>{touched.name && errors.name}</span>
            <label className='form__input-label'>E-mail</label>
            <input
              className='form__input'
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className='form__input-error'>{touched.email && errors.email}</span>
            <label className='form__input-label'>Пароль</label>
            <input
              className='form__input'
              type='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className='form__input-error'>{touched.password && errors.password}</span>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default Register;