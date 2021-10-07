import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  max-height: 400px;
  padding: 20px 52px 43px 37px;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: Pacifico;
  font-size: 30px;
`;

const ButtonWrap = styled.button`
  display: flex;
  justify-content: center;
`;

const ModelItem = ({ openItem, setOpenItem }) => {

  const closeModal = (e) => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  if (!openItem) return null;

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Wrapper>
          <Inner>
            <span>{openItem.name}</span>
            <span>
              {openItem.price.toLocaleString('ru-RU',
                { style: 'currency', currency: 'rub' })}
            </span>
          </Inner>
          <ButtonWrap>
            <Button>Добавить</Button>
          </ButtonWrap>
        </Wrapper>
      </Modal>
    </Overlay>
  );
};

export default ModelItem;