import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
`;

const NavbarHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const NavbarImage = styled.div`
  background-image: url(../assets/login-logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  width: 150px;
  height: 100px;
`;

const NavbarUL = styled.ul`
  list-style-type: none;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const NavbarLI = styled.li`
  margin: 0 10px;
`;

const NavbarA = styled.a`
   text-decoration: none;
  color: #555;
  transition: color 0.3s ease-in-out;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
`;

const NavbarButton = styled.button`
 background-color: #f9a13c;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-family: "Montserrat", sans-serif;

  &:hover {
    background-color: #61282d;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <NavbarHeader className="navbar-header">
        <NavbarImage className="navbar-image" />
        <nav>
          <NavbarUL className="navbar-ul">
            <NavbarLI className="navbar-li">
              <NavbarA href="/">Inicio</NavbarA>
            </NavbarLI>
            <NavbarLI className="navbar-li">
              <NavbarA href="#">Sobre Nosotros</NavbarA>
            </NavbarLI>
            <NavbarLI className="navbar-li">
              <NavbarA href="#">Especialidades</NavbarA>
            </NavbarLI>
            <NavbarLI className="navbar-li">
              <NavbarA href="#">Testimonios</NavbarA>
            </NavbarLI>
            <NavbarLI className="navbar-li">
              <NavbarA href="/noticias">Noticias</NavbarA>
            </NavbarLI>
            <NavbarLI className="navbar-li">
              <NavbarButton
                className="navbar-button"
                onClick={() => {
                  navigate("/login");

                }}
              >
                Inicia Sesion
              </NavbarButton>
            </NavbarLI>
          </NavbarUL>
        </nav>
      </NavbarHeader>
    </NavbarContainer>
  );
};

export default Navbar;
