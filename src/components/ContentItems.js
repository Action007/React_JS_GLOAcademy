import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 70px;
`;

const Li = styled.li`
  position: relative;
  font-size: 30px;
  max-width: 400px;
  width: 100%;
  min-height: 155px;
  padding: 10px 15px;
  margin: 0 10px 30px;
  overflow: hidden;
  cursor: pointer;
  color: #fff;
  z-index: 1;
  
  &:hover::after{
    transform: scale(1.2);
  }
  
  &::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform .3s ease;
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const Name = styled.span`
  position: relative;
  display: block;
  z-index: 3;
`;


const Price = styled.span`
  position: relative;
  display: block;
  z-index: 3;
`;

const ContentItems = ({ items, setOpenItem }) => {
  return (
    <Ul>
      {items.map(item => (
        <Li
          key={item.id}
          img={item.img}
          onClick={() => setOpenItem(item)}>
          <Name>{item.name}</Name>
          <Price>
            {item.price.toLocaleString('ru-RU',
              { style: 'currency', currency: 'rub' })}
          </Price>
        </Li>
      ))}
    </Ul>
  );
};

export default ContentItems;