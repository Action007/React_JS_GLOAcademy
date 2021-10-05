import React from 'react';
import styled from 'styled-components';
import bannerImg from '../image/banner.jpg';
import ContentItems from './ContentItems';
import dbMenu from './DBMenu';

const Main = styled.main`
  display: flex;
  justify-content: flex-end;
  max-width: 1440px;
  margin: 0 auto;
`;

const Banner = styled.div`
  max-width: 1060px;
  width: 100%;
  height: 210px;
  background-image: url(${bannerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 17px;
`;

const Head = styled.h2`
  font-family: Pacifico;
  font-size: 30px;
  transform: translateX(80px);
  margin-bottom: 10px;
`;

const Content = () => {
  return (
    <Main>
      <section>
        <Banner></Banner>
        <Head>Бургеры</Head>
        <ContentItems items={dbMenu.burger} />
        <Head>Закуски / Напитки</Head>
        <ContentItems items={dbMenu.other} />
      </section>
    </Main>
  );
};

export default Content;