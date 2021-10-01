import React from 'react';
import Logo from '../logo/logo';
import Telephone from '../telephone/telephone';

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="header">
          <a href="#">
            <Logo />
          </a>
          <a href="tel:888" className="header-phone"></a>
          <div className="header-phonelink">
            <Telephone />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;