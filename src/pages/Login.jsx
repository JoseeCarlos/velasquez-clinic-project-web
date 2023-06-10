import React from "react";
import styled from "styled-components";
import { RiUserFill, RiLockPasswordFill } from "react-icons/ri";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftSide = styled.div`
  flex: 1;
  background-color: #f9a13c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  text-align: center;
`;

const LeftSideImage = styled.img`
  width: 350px;
  height: 350px;
  object-fit: contain;
  margin-bottom: 20px;
`;

const LeftSideText = styled.h1`
  margin-bottom: 20px;
  font-size: 34px;
  margin: 0 20px;
  width: 450px;
  font-family: 'Dancing Script', cursive;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background-color: white;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  border: 2;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  padding-left: 40px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 40px;
  outline: none;
  color: #000;
  font-size: 18px;
  height: 50px;
  box-sizing: border-box;

  &:hover {
    border-color: #aaa !important;
  }
  &:focus {
    border-color: #000 !important;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #61282d;
  border-radius: 40px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  text-align: center;
  width: 100%;
  &:hover {
    background-color: #555;
  }
`;

const ForgotPasswordLink = styled.a`
  margin-top: 10px;
  color: #333;
  text-decoration: underline;
  cursor: pointer;
`;

const RememberMeLabel = styled.label`
  margin-top: 10px;
`;

const RememberMeCheckbox = styled.input`
  margin-right: 5px;
`;

const EyeIcon = styled(FiEye)`
  cursor: pointer;
`;

const EyeOffIcon = styled(FiEyeOff)`
  cursor: pointer;
`;

const rotatingTexts = [
  "La medicina es la única profesión universal que en todas partes siguelos mismos métodos, actúa con los mismos objetivos y busca los mismosfines.",
  "Los mejores médicos del mundo son: el doctor dieta, el doctor reposo y el doctor alegría.",
  "Los médicos como la cerveza, mejor cuanto más viejos.",
];

const Login = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % rotatingTexts.length
      );
    }, 3000); // Change text every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <LoginContainer>
      <LeftSide>
        <LeftSideText>{rotatingTexts[currentTextIndex]}</LeftSideText>
      </LeftSide>
      <RightSide>
        <Card>
          <LoginForm>
            <Title>Iniciar sesión</Title>
            <Image
              src="assets/login-logo.png"
              alt="Imagen de inicio de sesión"
            />
            <InputContainer>
              <Input type="text" placeholder="Correo" />
            </InputContainer>
            <InputContainer>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
              />
              <IconWrapper>
                {showPassword ? (
                  <EyeOffIcon onClick={() => setShowPassword(false)} />
                ) : (
                  <EyeIcon onClick={() => setShowPassword(true)} />
                )}
              </IconWrapper>
            </InputContainer>
            <RememberMeLabel>
              <RememberMeCheckbox type="checkbox" />
              Recordar sesión
            </RememberMeLabel>
            <Button
              type="submit"
              onClick={() => {
                navigate("/admin");
              }}
            >
              Iniciar sesión
            </Button>
            <ForgotPasswordLink>¿Olvidaste la contraseña?</ForgotPasswordLink>
          </LoginForm>
        </Card>
      </RightSide>
    </LoginContainer>
  );
};

export default Login;
