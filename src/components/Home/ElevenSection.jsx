import React from "react";
import styled from "styled-components";
import { FaPhone, FaMapMarker, FaClock } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import MapComponent from "../MapComponent";

const ElevenSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 34px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 26px;
  margin-bottom: 20px;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const LeftSection = styled.div`
  width: 60%;
`;

const RightSection = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  background-color: #f9a13c;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  width: 529px;
  height: 283px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  color: white;
  font-family: "Montserrat", sans-serif;
`;

const CardTitleEs = styled.h3`
  font-size: 14px;
  color: white;
  font-family: "Montserrat", sans-serif;
`;

const CardInfo = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 30px;
  margin-top: 30px;
  color: white;
  font-family: "Montserrat", sans-serif;
  width: 400px;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const HoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HoursTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
`;

const HoursList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const HoursItem = styled.li`
  font-size: 14px;
  margin-bottom: 5px;
  font-family: "Montserrat", sans-serif;
`;

const MapImage = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  box-shadow: 3px 5px 5px #aaa;
`;

const ElevenSection = () => {
  const position = [-17.385, -66.166];
  return (
    <ElevenSectionContainer>
      <Title>Nuestra Ubicacion</Title>
      <Description>Cochabamba</Description>
      <SectionContainer>
        <LeftSection>
          {/* Aquí puedes agregar tu componente de mapa */}
          <MapImage src="../assets/fondoMaps.png" alt="Mapa" />
        </LeftSection>
        <RightSection>
          <Card>
            <CardTitle>M.S.C. Riery Velasquez E.</CardTitle>
            <CardTitleEs>Especialidad Ortodoncia</CardTitleEs>
            <CardTitleEs>Implantologia Oral</CardTitleEs>

            <CardInfo>
              <Icon>
                <IoLogoWhatsapp />
              </Icon>
              77943811
            </CardInfo>
            <CardInfo>
              <Icon>
                <FaMapMarker />
              </Icon>
              Av. Diamante entre calle P. La Vertiente y pasaje P.G. Huayco, una
              cuadra al oeste del colegio 1ro de Mayo
            </CardInfo>
          </Card>
          <HoursContainer>
            <HoursTitle>Horarios de Atención</HoursTitle>
            <HoursList>
              <HoursItem>Lunes: 9:00 AM - 5:00 PM</HoursItem>
              <HoursItem>Martes: 9:00 AM - 5:00 PM</HoursItem>
              <HoursItem>Miércoles: 9:00 AM - 5:00 PM</HoursItem>
              <HoursItem>Jueves: 9:00 AM - 5: </HoursItem>
              <HoursItem>Viernes: 9:00 AM - 5:00 PM</HoursItem>
              <HoursItem>Sábado: 9:00 AM - 12:00 PM</HoursItem>
              <HoursItem>Domingo: Cerrado</HoursItem>
            </HoursList>
          </HoursContainer>
        </RightSection>
      </SectionContainer>
    </ElevenSectionContainer>
  );
};

export default ElevenSection;
