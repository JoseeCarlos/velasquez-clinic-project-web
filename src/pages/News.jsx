import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { FaImage  } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  padding: 5px;
  overflow-y: auto;

`;

const LeftSide = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
`;

const RightSide = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid #61282d;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 10px;
  font-size: 15px;
  &:focus {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0) !important;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Button = styled.button`
  width: auto;
  height: 50px;
  padding: 10px;
  background-color: #f9a13c;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f3b166;
  }
`;

const TitleCard = styled.h4`
  color: #fff;
  text-align: center;
  transition: all 300ms ease;
`;

const FullWidthCardContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 100%;
  overflow-y: auto;
`;

const FullWidthCard = styled.div`
  flex: 1 0 calc(50% - 20px);
  height: auto;
  background-color: white;
  margin: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd9d9;
`;

const ScrollStyles = styled.div`
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const TitleCardImage = styled.h4`
  color: #000;
  text-align: center;
  transition: all 300ms ease;
  padding-bottom: 10px;
`;

const Form = styled.form`
  width: 500px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;

  outline: none;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
`;

const FormButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

const ProfileImage = styled.img`
  width: 85%;
  height: 100%;
  object-fit: cover;

  margin-bottom: 16px;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageInputLabel = styled.label`
  padding: 8px 16px;
  background-color: #f9a13c;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #61282d;
  }
`;

const News = () => {
  const [profileImage, setProfileImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const imageUrl =
    profileImage === ""
      ? "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg?alt=media&token=242d7617-4d3e-42bd-ae67-ec30dcab5357"
      : profileImage;
  return (
    <Container>
      <LeftSide>
        <SearchContainer>
          <AiOutlineSearch size={20} color="#61282d" />
          <SearchInput placeholder="Buscar" />
        </SearchContainer>
        <CardContainer>
          <Button>
            <TitleCard>Todos</TitleCard>
          </Button>
          <Button>
            <TitleCard>Promociones</TitleCard>
          </Button>
          <Button>
            <TitleCard>Noticias</TitleCard>
          </Button>
          <Button>
            <TitleCard>Bloc</TitleCard>
          </Button>
        </CardContainer>
        <ScrollStyles></ScrollStyles>
        <FullWidthCardContainer>
          <FullWidthCard>
            <CardImage
              src={
                "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/CEU_Posgrados_Odontologia.jpeg?alt=media&token=a6f32dbc-b7cb-405f-9722-65e71d9f9e62"
              }
              alt="Image 1"
            />
            <TitleCardImage>
              Control y prevención: claves para la salud periimplantaria y el
              éxito de los implantes
            </TitleCardImage>
          </FullWidthCard>
          <FullWidthCard>
            <CardImage
              src={
                "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Dentistas_deteccion_cancer-oral.jpg?alt=media&token=4ada8136-952d-42e0-a67d-005dc52fd25a"
              }
              alt="Image 1"
            />
            <TitleCardImage>
              El nuevo escáner de laboratorio PS7 de Ivoclar: innovación y
              eficiencia
            </TitleCardImage>
          </FullWidthCard>
          <FullWidthCard>
            <CardImage
              src={
                "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Ivoclar-escaner-PrograScan-PS7.png?alt=media&token=9d33ab3e-9a20-4b58-8485-c626aa188306"
              }
              alt="Image 1"
            />
            <TitleCardImage>
              ¡Tu apuesta por la dirección y gestión clínica tiene premio!
            </TitleCardImage>
          </FullWidthCard>
          <FullWidthCard>
            <CardImage
              src={
                "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Numero-dentistas-Espana.jpg?alt=media&token=b230cd1d-0abf-48fd-903c-5aadaf2157a6"
              }
              alt="Image 1"
            />
            <TitleCardImage>
              La Odontología de precisión se abre paso en la investigación y
              manejo de las enfermedades periodontales
            </TitleCardImage>
          </FullWidthCard>
          <FullWidthCard>
            <CardImage
              src={
                "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/SEPA_Pandemia_odontologia.jpg?alt=media&token=3934f0f9-421c-44d3-8390-af771cb84529"
              }
              alt="Image 1"
            />
            <TitleCardImage>
              Efectos de los vapeadores en la salud bucodental
            </TitleCardImage>
          </FullWidthCard>
          <FullWidthCard>
            <CardImage
              src={
                "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Tecnologia_Odontologia_SEPA-Sevilla23.jpg?alt=media&token=f66deb30-92ba-4b80-bdbb-f25e295ea150"
              }
              alt="Image 1"
            />
            <TitleCardImage>
              SEPA recoge en un decálogo los derechos fundamentales del paciente
              odontológico
            </TitleCardImage>
          </FullWidthCard>
        </FullWidthCardContainer>
      </LeftSide>
      <RightSide>
        <Form>
          <ProfileImageContainer>
            <ProfileImage src={imageUrl} alt="Profile" />
            <ImageInputLabel htmlFor="image">
              <FaImage/>
            </ImageInputLabel>
            <ImageInput type="file" id="image" onChange={handleImageChange} />
          </ProfileImageContainer>

          <FormLabel>Título:</FormLabel>
          <FormInput type="text" />

          <FormLabel>Contenido:</FormLabel>
          <FormTextarea />

          <FormButton>Crear Noticia</FormButton>
        </Form>
      </RightSide>
    </Container>
  );
};

export default News;
