import React, { useContext } from 'react';
import styled from 'styled-components';
import img from '../image/fast-food.svg';
import userImg from '../image/user.svg';
import { Context } from './Functions/context';

const HeaderStyle = styled.header`
  padding: 11px 25px 18px 15px;
  background-color: #299B01;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
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

const Button = styled.button`
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
  const { auth: { authentication, logIn, logOut } } = useContext(Context);

  return (
    <HeaderStyle>
      <Container>
        <Logo href="#">
          <img src={img} alt="logotype" />
          <Span>MRDonald’s</Span>
        </Logo>
        {authentication
          ? <Button onClick={logOut} type="button">
            выйти
          </Button>
          : <Button onClick={logIn} type="button">
            войти
          </Button>}
      </Container>
    </HeaderStyle>
  );
};

export default Header;