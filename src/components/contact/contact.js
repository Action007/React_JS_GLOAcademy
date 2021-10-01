import React from 'react';
import Button from '../button/button';
import Input from '../input/input';

const Contact = () => {
  return (
    <section className="contact">
      <div className="wrapper">
        <div className="contact-wrapper">
          <h2 className="contact-title">
            Остались вопросы?
          </h2>
          <div className="contact-description">
            Оставьте номер телефона, и мы перезвоним вам
          </div>
          <form action="../mailer.smart.php" className="contact-form">
            <Input type="text" placeholder="Ваше имя" />
            <Input type="tel" placeholder="Телефон" />
            <Input type="email" placeholder="E-mail" />
            <Button name="Позвоните мне" />
          </form>
          <div className="contact-personal">
            Я даю своё <a href="#">согласие</a> на обработку bona персональных данных.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;