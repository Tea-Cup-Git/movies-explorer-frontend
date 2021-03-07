import React from 'react';
import './MoviesCard.css';

function MoviesCard({ title, duration, image, isLiked, location }) {

  let buttonClassName;

  if (location.pathname === '/movies') {
    buttonClassName = 'moviesCard__button moviesCard__button_type_like';
  } else {
    buttonClassName = 'moviesCard__button moviesCard__button_type_delete';
  }

  if (location.pathname === '/movies' && isLiked === true) {
    buttonClassName = 'moviesCard__button moviesCard__button_type_like moviesCard__button_type_like_active';
  }

  return (
    <div className='moviesCard'>
      <div className='moviesCard__container'>
        <h2 className='moviesCard__title'>{title}</h2>
        <p className='moviesCard__duration'>{duration}</p>
        <button className={buttonClassName} />
      </div>
      <div className='moviesCard__imageContainer'>
        <img className='moviesCard__image' src={image} alt={title} />
      </div>
    </div>
  )
}

export default MoviesCard;