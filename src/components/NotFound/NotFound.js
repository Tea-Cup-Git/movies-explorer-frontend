import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <section className='notFound'>
      <div className='notFound__container'>
        <h1 className='notFound__title'>404</h1>
        <p className='notFound__text'>Страница не найдена</p>
      </div>
      <Link to={'/'} className='form__link'>Назад</Link>
    </section>
  );
}

export default NotFound;