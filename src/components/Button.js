import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  padding: 20px 80px 20px 73px;
  background-color: #299B01;
  font-size: 21px;
  color: #fff;
  transition: all 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: #fff;
    background-color: #1e5809;
  }
  &:disabled {
    background-color: #299b0175;
  }
`;

const Button = ({ children, ...props }) => {
  return (
    <Btn {...props}>{children}</Btn>
  );
};

export default Button;