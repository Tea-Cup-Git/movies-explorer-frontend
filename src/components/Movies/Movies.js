import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies({location}) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList
        location={location}
      />
    </section>
  );
}

export default Movies;