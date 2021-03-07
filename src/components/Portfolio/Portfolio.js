import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow-pic.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='main__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__ul'>
          <li className='portfolio__li'>
            <a className='portfolio__link' href='https://github.com/Tea-Cup-Git/how-to-learn' rel='noreferrer' target='_blank'>Статичный сайт</a>
            <img src={arrow} alt='>' />
          </li>
          <li className='portfolio__li'>
            <a className='portfolio__link' href='https://github.com/Tea-Cup-Git/russian-travel' rel='noreferrer' target='_blank'>Адаптивный сайт</a>
            <img src={arrow} alt='>' />
          </li>
          <li className='portfolio__li'>
            <a className='portfolio__link' href='https://github.com/Tea-Cup-Git/react-mesto-api-full' rel='noreferrer' target='_blank'>Одностраничное приложение</a>
            <img src={arrow} alt='>' />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;