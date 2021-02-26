import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg'

function Header() {
  return (
    <header className="header header_dark">
      <div className="header__container">
        <img className="header__logo" src={headerLogo} alt="Лого" />
      </div>
    </header>
  );
}

export default Header;