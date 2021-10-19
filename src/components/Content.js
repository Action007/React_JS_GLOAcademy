import React from 'react';
import styled from 'styled-components';
import bannerImg from '../image/banner.jpg';
import ContentItems from './ContentItems';
import Order from './Order/Order';
import dbMenu from './DBMenu';

const Main = styled.main`
  display: flex;
  justify-content: flex-end;
  max-width: 1440px;
  margin: 0 auto;
`;

const Section = styled.section`
  width: 100%;
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

const Content = ({ setOpenItem, orders }) => {
  return (
    <Main>
      <Order {...orders} setOpenItem={setOpenItem} />
      <Section>
        <Banner></Banner>
        <Head>Бургеры</Head>
        <ContentItems
          items={dbMenu.burger}
          setOpenItem={setOpenItem} />
        <Head>Закуски / Напитки</Head>
        <ContentItems
          items={dbMenu.other}
          setOpenItem={setOpenItem} />
      </Section>
    </Main>
  );
};

export default Content;