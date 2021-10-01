/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ name }) => {
  return (
    <button className="btn main-btn">
      <span>{name}</span>
    </button>
  );
};


export default Button;