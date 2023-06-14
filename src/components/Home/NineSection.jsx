import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const NineSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftSection = styled.div`
  flex: 40%;
  width: 100%;
  height: 550px;
  background-color: #f9a13c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const RightSection = styled.div`
  flex: 60%;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  
`;

const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
`;

const PhoneNumber = styled.p`
  font-size: 18px;
  width: 400px;
`;

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
 background-color: #f8793c;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 200px;

  &:hover {
    background-color: #61282d;
  }
`;

const NineSection = () => {
  return (
   <Container>
     <NineSectionContainer>
      <LeftSection>
        <Title>Información de Contacto</Title>
        <PhoneNumber>Si tiene alguna duda, sugerencia o preguntas, comuníquese con nosotros enviando los datos que a continuación se le solicita y les haremos llegar una respuesta a su consulta respecto a los servicios que ofrecemos</PhoneNumber>
      </LeftSection>
      <RightSection>
      <Card>
          <FormContainer>
            <FormField>
              <Label htmlFor="name">Nombre</Label>
              <Input type="text" id="name" name="name" required />
            </FormField>
            <FormField>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" required />
            </FormField>
            <FormField>
              <Label htmlFor="message">Mensaje</Label>
              <TextArea id="message" name="message" required></TextArea>
            </FormField>
            <SubmitButton type="submit">Enviar</SubmitButton>
          </FormContainer>
        </Card>
      </RightSection>
    </NineSectionContainer>
   </Container>
  );
};

export default NineSection;
