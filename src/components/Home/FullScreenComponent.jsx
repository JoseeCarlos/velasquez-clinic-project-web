import React from 'react';
import styled from 'styled-components';

const FullScreenContainer = styled.div`
  width: 100%;
  height: 400px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url('../assets/FondNoticias.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
    color: #61282d;
    font-size: 45px;
    text-align: center;
    margin: 0;    
    font-weight: bold; 
`;

const DiagonalLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #61282d;
  transform: skewX(-65deg);
  z-index: -1;
`;

const RightDiagonalLine = styled(DiagonalLine)`
  background-color: #f9a13c;
  left: unset;
  right: 0;
  transform: skewX(70deg);
`;

const Content = styled.div`
  z-index: 1;
`;

const FullScreenComponent = () => {
  return (
    <FullScreenContainer>
      <Content>
        <Title>Noticias y Promociones</Title>
      </Content>
    </FullScreenContainer>
  );
};

export default FullScreenComponent;