import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies({ loggedIn, location, handleSearch, movies, savedMoviesIds, onLike, onDislike }) {
  return (
    <>
    <Header
      loggedIn={loggedIn}
      location={location}
    />
    <section className='movies'>
      <SearchForm handleSearch={handleSearch} />
      <MoviesCardList
        location={location}
        movies={movies}
        savedMoviesIds={savedMoviesIds}
        onLike={onLike}
        onDislike={onDislike}
      />
    </section>
    <Footer />
    </>
  );
}

export default Movies;