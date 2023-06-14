import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";

import TopBar from "./TopBar";
import Menu from "./MenuAdministrador";

import { Rutas } from "../routers/routes";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const Body = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 90px auto;
  transition: all 500ms;

  ${({ activo }) =>
    activo &&
    css`
      grid-template-columns: 235px auto;
    `}
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 12% 88%);
  max-height: 100vh;
`;

const Administrador = () => {
  const [menuAbierto, setMenuAbierto] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname;
  let currentTitle = "";

  switch (currentPath) {
    case "/admin/" || '/admin' :
      currentTitle = "Inicio";
      break;
    case "/admin/listaUsuarios":
      currentTitle = "Lista de Usuarios";
      break;
    case "/admin/citas":
      currentTitle = "Citas";
      break;
    case "/admin/citas_pendientes":
      currentTitle = "Citas Pendientes";
      break;
      case "/admin/reportes":
      currentTitle = "Reportes";
      break;
      case "/admin/doctor":
      currentTitle = "Lista de doctores";
      break;
      case "/admin/asignaciones":
      currentTitle = "Asignacion de doctores";
      break;
      case "/admin/editar_perfil":
      currentTitle = "Pantalla para editar perfil";
      break;
      case "/admin/noticias":
      currentTitle = "Administracion de Noticias";
      break;
  }

  return (
    <Body>
      <Container activo={menuAbierto}>
        <Menu menuAbierto={menuAbierto} setMenuAbierto={setMenuAbierto} />
        <Content>
          <TopBar title={currentTitle} />
          <Rutas />
        </Content>
      </Container>
    </Body>
  );
};

export default Administrador;
