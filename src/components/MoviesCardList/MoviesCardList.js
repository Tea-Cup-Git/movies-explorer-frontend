import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({ location, isLoading, movies, savedMoviesIds, onLike, onDislike }) {

  const [renderCount, setRenderCount] = React.useState(8);
  const renderMoreCount = 4;

  function handleMoreButtonClick() {
    setRenderCount(renderCount + renderMoreCount);
  };

  return (
    <section className='moviesCardList'>
      { isLoading && <Preloader /> }
      { (!isLoading && movies.length === 0) && <p className='moviesCardList__notFound'>Ничего не найдено</p> }
      {
        (!isLoading && movies)
          && <div className='moviesCardList__container'>
            {
              movies.reduce((moviesToRender, movie) => {
                if (moviesToRender.length < renderCount) {
                  moviesToRender.push(
                    <MoviesCard
                      movie={movie}
                      key={movie.movieId}
                      location={location}
                      savedMoviesIds={savedMoviesIds}
                      onLike={onLike}
                      onDislike={onDislike}
                    />,
                  );
                }
                return moviesToRender;
              }, [])
            }
          </div>
      }
      {
        (!isLoading && movies.length > renderCount)
          && <button className='moviesCardList__button' onClick={handleMoreButtonClick}>Ещё</button>
      }
    </section>
  )
}

export default MoviesCardList;