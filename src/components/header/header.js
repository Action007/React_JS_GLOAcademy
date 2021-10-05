import React from 'react';
import styled from 'styled-components';
import img from '../../image/fast-food.svg';
import userImg from '../../image/user.svg';

const HeaderStyle = styled.header`
  padding: 11px 25px 18px 15px;
  background-color: #299B01;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  margin-left: 17px;
  font-family: Pacifico;
  font-size: 24px;
  color: #fff;
`;

const Button = styled.a`
  position: relative;
  padding-top: 35px;
  font-family: Roboto;
  color: #fff;

  &::before {
    position: absolute;
    content: '';
    background-image: url(${userImg});
    width: 32px;
    height: 32px;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    background-repeat: no-repeat;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Logo href="#">
        <img src={img} alt="logotype" />
        <Span>MRDonald’s</Span>
      </Logo>
      <Button href="#">войти</Button>
    </HeaderStyle>
  );
};

export default Header;