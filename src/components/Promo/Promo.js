import React from 'react';
import './Promo.css';
import promoLogo from '../../images/landing-logo.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="main__container promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className="promo__button">Узнать больше</button>
        <img className="promo__logo" src={promoLogo} alt="Web-планета" />
      </div>
    </section>
  )
}

export default Promo;