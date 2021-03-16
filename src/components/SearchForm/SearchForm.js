import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css';

function SearchForm({ handleSearch }) {

  const [value, setValue] = React.useState('');
  const checked = React.useRef();

  function handleChange(evt) {
    setValue(evt.target.value);
  }

  function handleCheckboxChange() {
    handleSearch(value, checked.current.checked);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    if (value !== '') {
      handleSearch(value, checked.current.checked);
    }
  }

  return (
    <>
      <form className='searchForm' onSubmit={handleSubmit} noValidate>
        <fieldset className='searchForm__container'>
          <input
            className='searchForm__input'
            type='text'
            name='request'
            placeholder='Фильм'
            value={value}
            required
            onChange={handleChange}
          />
          <button className='searchForm__button' type='submit' disabled={!value}>Найти</button>
        </fieldset>
        <FilterCheckbox checked={checked} onChange={handleCheckboxChange} />
      </form>
    </>
  )
}

export default SearchForm;