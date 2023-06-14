import React, { useState } from 'react';
import styled from 'styled-components';

// Estilos del componente
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  padding: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 800px;

  border-radius: 8px;
  border: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  background-color: #ffffff;
  padding: 20px;
  margin: 10px;
  text-align: center;
  border-radius: 15px;
  margin-top: 1rem;
  box-shadow: 0 5px 25px rgba(0, 0, 0, .2);;
  transition: all 300ms ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 32px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #f9a13c;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #61282d;
  }
`;

const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
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
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #61282d;
  }
`;

const RecommendationsContainer = styled.div`
  flex: 1;
  padding: 32px;
`;

const RecommendationTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const RecommendationItem = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
`;

const UserProfileEdit = () => {
  const [profileImage, setProfileImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar los cambios del perfil del usuario
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const imageUrl = profileImage === "" ? 'https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/imageLogo.png?alt=media&token=074b4e9d-93dd-4363-9c8b-54c380c1b41a' : profileImage;

  return (
    <Container>
      <ContentContainer>
        <FormContainer>
          <Title>Edita tu perfil</Title>
          <Form onSubmit={handleSubmit}>
            <ProfileImageContainer>
              <ProfileImage src={imageUrl} alt="Profile" />
              <ImageInputLabel htmlFor="image">Cambiar imagen de perfil</ImageInputLabel>
              <ImageInput type="file" id="image" onChange={handleImageChange}/>
            </ProfileImageContainer>

            <Label htmlFor="name">Nombre</Label>
            <Input type="text" id="name" />

            <Label htmlFor="apellidos">Apellidos</Label>
            <Input type="text" id="apellidos" />
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" />

            <Label htmlFor="password">Contraseña</Label>
            <Input type="password" id="password" />

            <Button type="submit">Guardar cambios</Button>
          </Form>
        </FormContainer>
        <RecommendationsContainer>
          <RecommendationTitle>Recomendaciones</RecommendationTitle>
          <RecommendationItem>¡Asegúrate de utilizar una contraseña segura!</RecommendationItem>
          <RecommendationItem>No compartas tu información personal con personas desconocidas.</RecommendationItem>
          <RecommendationItem>Actualiza tu foto de perfil regularmente para mantener tu perfil actualizado.</RecommendationItem>
          <RecommendationItem>No olvides guardar los cambios después de editar tu perfil.</RecommendationItem>
        </RecommendationsContainer>
      </ContentContainer>
    </Container>
  );
};

export default UserProfileEdit;
