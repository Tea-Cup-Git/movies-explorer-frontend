import React from 'react';
import Form from '../Form/Form';
import './Profile.css';

function Profile({ location }) {
  return (
    <section className='profile'>
      <Form
        formName='profile'
        title={'Привет, Виталий!'}
        buttonTitle={'Редактировать'}
        text=''
        linkTitle='Выйти из аккаунта'
        location={location}
      >
        <fieldset className='profile__fieldset'>
          <label className='profile__input-label'>Имя</label>
          <input 
            id='name-input'
            className='profile__input'
            type='text'
            name='name'
            pattern='^[a-zA-Z]+$'
            value='Виталий'
            disabled />
          <span id='name-input-error' className='profile__input-error'></span>
        </fieldset>
        <fieldset className='profile__fieldset'>
          <label className='profile__input-label'>Почта</label>
          <input
            id='name-input'
            className='profile__input'
            type='email'
            name='email'
            pattern='^[a-zA-Z]+$'
            value='pochta@yandex.ru'
            disabled />
          <span id='name-input-error' className='profile__input-error'></span>
        </fieldset>
      </Form>
    </section>
  );
}

export default Profile;