import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__copyright'>
          <p className='footer__year'>&copy;&thinsp;2021</p>
          <nav className='footer__links'>
            <a href='https://praktikum.yandex.ru/' className='footer__link' rel='noreferrer' target='_blank'>Яндекс.Практикум</a>
            <a href='https://github.com/Tea-Cup-Git/' className='footer__link' rel='noreferrer' target='_blank'>Github</a>
            <a href='https://ru-ru.facebook.com/' className='footer__link' rel='noreferrer' target='_blank'>Facebook</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;