import React, { useState } from 'react';
import styled from 'styled-components';
import { RiCloseLine } from 'react-icons/ri';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  max-width: 500px;
  width: 100%;
  position: relative;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #657786;
  cursor: pointer;

  &:hover {
    color: #1da1f2;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 200px;
  height: 170px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccd6dd;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #1da1f2;
  }
`;

const SubmitButton = styled.button`
  background-color: #f9a13c;
  color: #fff;
  border: none;
  border-radius: 9999px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  
    &:hover {
        background-color: #61282d;
    }   
`;

const ResetPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Enviar solicitud para restablecer contraseña para: ${email}`);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <RiCloseLine color='#61282d' />
        </CloseButton>
        <LogoContainer>
          <Logo src="assets/login-logo.png" alt="Logo" />
        </LogoContainer>
        <Title>Restablecer contraseña</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">Correo electrónico:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <SubmitButton type="submit">Restablecer</SubmitButton>
</Form>
</ModalContent>
</ModalContainer>
);
};

export default ResetPasswordModal;
