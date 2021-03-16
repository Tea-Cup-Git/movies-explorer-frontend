import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies({ loggedIn, location, isLoading, handleSearch, movies, savedMoviesIds, onLike, onDislike, isFetched }) {
  return (
    <>
    <Header
      loggedIn={loggedIn}
      location={location}
    />
    <section className='movies'>
      <SearchForm handleSearch={handleSearch} />
      {isFetched
        &&  <MoviesCardList
              location={location}
              isLoading={isLoading}
              movies={movies}
              savedMoviesIds={savedMoviesIds}
              onLike={onLike}
              onDislike={onDislike}
            />
      }
    </section>
    <Footer />
    </>
  );
}

export default Movies;