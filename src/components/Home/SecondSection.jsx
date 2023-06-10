import React from "react";
import styled from "styled-components";

const SecondSectionContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  align-content: space-around;
  padding: 10px 0;
  gap: 10px;
  position: relative;
`;

const SecondSectionCard = styled.div`
  width: 450px;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const SecondSectionCardLeft = styled.div`
  width: 100%;
  height: 70%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecondSectionImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
`;

const SecondSectionCardRight = styled.div`
  width: 100%;
  height: 30%;
  background-color: #f9a13c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const SecondSectionTitle = styled.h1`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  margin: 10px;
`;

const SecondSectionDescription = styled.p`
  font-family: "Raleway";
  font-style: normal;
  color: #fff;
  text-align: center;
  font-weight: 400;
  font-size: 15px;
  margin: 10px;
`;

const SecondSection = () => {
  return (
    <SecondSectionContainer>
      <SecondSectionCard>
        <SecondSectionCardLeft>
          <SecondSectionImg src="assets/odoin1.jpg" alt="Odontología General" />
        </SecondSectionCardLeft>
        <SecondSectionCardRight>
          <SecondSectionTitle>ODONTOLOGÍA GENERAL</SecondSectionTitle>
          <SecondSectionDescription>
            Nos encargamos del diagnóstico y corrección de la mal posición de
            los dientes.
          </SecondSectionDescription>
        </SecondSectionCardRight>
      </SecondSectionCard>
      <SecondSectionCard>
        <SecondSectionCardLeft>
          <SecondSectionImg
            src="assets/odoin2.jpg"
            alt="Odontología Infantil"
          />
        </SecondSectionCardLeft>
        <SecondSectionCardRight>
          <SecondSectionTitle>ODONTOLOGÍA INFANTIL</SecondSectionTitle>
          <SecondSectionDescription>
            Tomamos las medidas oportunas y necesarias anticipándonos a
            problemas bucodentales que puedan surgir.
          </SecondSectionDescription>
        </SecondSectionCardRight>
      </SecondSectionCard>
      <SecondSectionCard>
        <SecondSectionCardLeft>
          <SecondSectionImg src="assets/odobla.jpg" alt="Blanqueamiento" />
        </SecondSectionCardLeft>
        <SecondSectionCardRight>
          <SecondSectionTitle>BLANQUEAMIENTO</SecondSectionTitle>
          <SecondSectionDescription>
            Es un procedimiento que consiste en aplicar una solución especial
            para el caso sobre la superficie de los dientes.
          </SecondSectionDescription>
        </SecondSectionCardRight>
      </SecondSectionCard>
    </SecondSectionContainer>
  );
};

export default SecondSection;
