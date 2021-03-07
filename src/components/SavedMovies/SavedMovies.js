import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies({location}) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList
        location={location}
      />
    </section>
  );
}

export default SavedMovies;