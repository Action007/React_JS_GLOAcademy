import React, { useContext } from 'react';
import styled from 'styled-components';
import bannerImg from '../image/banner.jpg';
import ContentItems from './ContentItems';
import Order from './Order/Order';
import { UseFetch } from './Hooks/UseFetch';
import { Context } from './Functions/context';

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

const Load = styled.div`
  margin-top: 40px;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-family: Pacifico;
  font-size: 32px;
`;

const Error = styled.div`
margin-top: 40px;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 32px;
  color: red;
`;

const Content = ({ orders, auth, orderConfirm }) => {

  const { openItem: { setOpenItem } } = useContext(Context);
  const res = UseFetch();
  const dbMenu = res.response;

  return (
    <Main>
      <Order
        {...orders}
        setOpenItem={setOpenItem}
        {...auth}
        {...orderConfirm}
      />
      {dbMenu
        ? <Section>
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
        : res.error
          ? <Error>Error</Error>
          : <Load>Loading...</Load>
      }
    </Main>
  );
};

export default Content;