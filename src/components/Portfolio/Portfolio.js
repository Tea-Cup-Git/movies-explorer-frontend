import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow-pic.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__ul">
          <li className="portfolio__li">
            <a className="portfolio__link" href="#">Статичный сайт</a>
            <img src={arrow} alt=">" />
          </li>
          <li className="portfolio__li">
            <a className="portfolio__link" href="#">Адаптивный сайт</a>
            <img src={arrow} alt=">" />
          </li>
          <li className="portfolio__li">
            <a className="portfolio__link" href="#">Одностраничное приложение</a>
            <img src={arrow} alt=">" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;