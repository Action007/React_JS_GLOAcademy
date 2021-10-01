import React from 'react';
import Logo from '../logo/logo';
import Telephone from '../telephone/telephone';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <Logo />
        <div className="footer-company">
          <span>© 2020 XXXcompany. Все права защищены.</span>
        </div>
        <a href="tel:888" className="footer-phone"></a>
        <div className="footer-websurfer">
          <span className="footer-websurfer_build">Сделано</span>
          <a href="#">Ваше имя</a>
        </div>
        <div className="footer-phonelink">
          <Telephone />
        </div>
      </div>
    </footer>
  );
};

export default Footer;