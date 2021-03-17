import React from 'react';
import Form from '../Form/Form';
import { Formik } from 'formik';
import * as yup from 'yup';
import './Login.css';

function Login({ handleLogin, authError }) {

  const loginValidation = yup.object().shape({
    email: yup.string()
      .email('E-mail введен некорректно. Пожалуйста, попробуйте еще раз')
      .required('Пожалуйста, введите E-mail'),
    password: yup.string()
      .typeError('Пароль введен некорректно. Пожалуйста, попробуйте еще раз')
      .min(6, 'Пароль должен содержать не менее 6 символов')
      .required('Пожалуйста, введите пароль')
  });

  return (
    <section className='login'>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validateOnBlur
        onSubmit={(values) => {
          handleLogin(values.email, values.password);
          values.email = '';
          values.password = '';
        }}
        validationSchema = {loginValidation}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <Form
            formTitle='Рады видеть!'
            buttonTitle='Войти'
            text='Ещё не зарегистрированы?'
            linkTitle='Регистрация'
            onError={authError ? 'Неверный логин или пароль' : ''}
            isValid={isValid}
            onSubmit={handleSubmit}
            dirty={dirty}
          >
            <label className='form__input-label'>E-mail</label>
            <input 
              className='form__input form__input_type_email'
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className='form__input-error'>{touched.email && errors.email}</span>
            <label className='form__input-label'>Пароль</label>
            <input
              className='form__input form__input_type_password'
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

export default Login;