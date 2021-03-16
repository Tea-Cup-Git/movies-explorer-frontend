import React from 'react';
import './MoviesCard.css';
import defaultImage from '../../images/no-image.jpg';
import { timeConversion } from '../../utils/helpers'

function MoviesCard({ movie, savedMoviesIds, location, onLike, onDislike }) {
  const {
    country, director, year, description, image, nameRU, nameEN, duration, trailerLink, thumbnail, movieId
  } = movie;
  const durationConversed = timeConversion(duration);
  const [isLiked, setIsLiked] = React.useState(false);


  React.useEffect(() => {
    if (savedMoviesIds && savedMoviesIds.includes(movieId)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [savedMoviesIds, movieId]);

  let buttonClassName;
  if (location.pathname === '/movies') {
    buttonClassName = `moviesCard__button moviesCard__button_type_like ${isLiked ? 'moviesCard__button_type_like_active' :  ''}`;
  } else {
    buttonClassName = 'moviesCard__button moviesCard__button_type_delete';
  }

  function handleClick() {
    window.open(trailerLink);
  }

  const handleLike = () => {
    onLike({
      country: country || 'Не указано',
      director: director || 'Не указано',
      duration: duration || 0,
      year: year || 'Не указано',
      description: description || 'Не указано',
      image: image || defaultImage,
      trailer: trailerLink,
      thumbnail: thumbnail || defaultImage,
      nameRU: nameRU || 'Не указано',
      nameEN: nameEN || 'Не указано',
      movieId
    });
  };

  function handleDislike() {
    onDislike({ movieId });
  };

  return (
    <div className='moviesCard'>
      <div className='moviesCard__container'>
        <h2 className='moviesCard__title'>{nameRU}</h2>
        <p className='moviesCard__duration'>{durationConversed}</p>
        <button className={buttonClassName} onClick={!isLiked ? handleLike : handleDislike} />
      </div>
      <div className='moviesCard__imageContainer'>
        <img
          className='moviesCard__image'
          src={image ? image : defaultImage}
          alt={nameRU}
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default MoviesCard;