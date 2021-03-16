import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ checked, onChange }) {

  return (
    <>
      <div className='FilterCheckbox'>
        <label className='FilterCheckbox__label'>Короткометражки</label>
        <input
          className='FilterCheckbox__slider'
          type='checkbox'
          id='sliderButton'
          ref={checked}
          onChange={onChange}
          defaultChecked />
      </div>
    </>
  )
}

export default FilterCheckbox;