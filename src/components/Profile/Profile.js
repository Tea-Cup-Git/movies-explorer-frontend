import React from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';

function Profile({ handleEditProfile, editError, editSuccess, onExit, loggedIn, location }) {

  const currentUser = React.useContext(CurrentUserContext);
  
  const editValidation = yup.object().shape({
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
      .required('Пожалуйста, введите E-mail')
  });

  return (
    <>
    <Header
      loggedIn={loggedIn}
      location={location}
    />
    <section className='profile'>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: currentUser.name,
          email: currentUser.email
        }}
        validateOnBlur
        onSubmit={(values) => {
          handleEditProfile(values.name, values.email);
        }}
        validationSchema = {editValidation}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <Form
            formName='profile'
            formTitle={`Привет, ${currentUser.name}!`}
            buttonTitle={'Редактировать'}
            text=''
            linkTitle='Выйти из аккаунта'
            onError={editError ? 'Что-то пошло не так.. Возможно пользователь с такой почтой уже существует' : ''}
            onSuccess={editSuccess ? 'Данные изменены' : ''}
            isValid={isValid}
            onSubmit={handleSubmit}
            dirty={dirty}
            onExit={onExit}
            loggedIn={loggedIn}
          >
            <fieldset className='profile__fieldset'>
              <label className='profile__input-label'>Имя</label>
              <input 
                className='profile__input'
                type='text'
                name='name'
                defaultValue={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </fieldset>
            <span className='form__input-error'>{touched.name && errors.name}</span>
            <fieldset className='profile__fieldset'>
              <label className='profile__input-label'>Почта</label>
              <input
                className='profile__input'
                type='email'
                name='email'
                defaultValue={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </fieldset>
            <span className='form__input-error'>{touched.email && errors.email}</span>
          </Form>
        )}
      </Formik>
    </section>
    </>
  );
}

export default Profile;