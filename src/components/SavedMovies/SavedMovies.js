import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies({ loggedIn, location, handleSearch, movies, savedMoviesIds, onDislike }) {
  return (
    <>
    <Header
      loggedIn={loggedIn}
      location={location}
    />
    <section className="movies">
      <SearchForm handleSearch={handleSearch} />
      <MoviesCardList
        location={location}
        movies={movies}
        handleSearch={handleSearch}
        savedMoviesIds={savedMoviesIds}
        onDislike={onDislike}
      />
    </section>
    <Footer />
    </>
  );
}

export default SavedMovies;