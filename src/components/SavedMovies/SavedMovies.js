import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies({ loggedIn, location }) {
  return (
    <>
    <Header
      loggedIn={loggedIn}
      location={location}
    />
    <section className="movies">
      <SearchForm />
      <MoviesCardList
        location={location}
      />
    </section>
    <Footer />
    </>
  );
}

export default SavedMovies;