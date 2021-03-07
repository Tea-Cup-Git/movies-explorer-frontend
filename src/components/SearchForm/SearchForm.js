import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css';

function SearchForm() {
  return (
    <>
      <form className="searchForm">
        <fieldset className="searchForm__container">
          <input className="searchForm__input" type="search" placeholder="Фильм"></input>
          <button className="searchForm__button" type="submit">Найти</button>
        </fieldset>
        <FilterCheckbox />
      </form>
    </>
  )
}

export default SearchForm;