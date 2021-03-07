import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <>
      <div className='FilterCheckbox'>
        <label className='FilterCheckbox__label'>Короткометражки</label>
        <input className='FilterCheckbox__slider' type='checkbox' id='sliderButton' defaultChecked />
      </div>
    </>
  )
}

export default FilterCheckbox;