import React, { useState } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import styled, { css } from 'styled-components';

/* IMPORTACIONES DE LOS COMPONENTES */
import TopBar from './TopBar';
import Menu from './MenuAdministrador';
/* --- FIN DE LAS IMPORTACIONES DE LOS COMPONENTES --- */

/* IMPORTACION DE LAS RUTAS */
import { Rutas } from '../routers/routes';

/* IMPORTACION DE ESTILOS */
import PrimeReact from 'primereact/api';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

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

  return (
    <Body>
        <Container activo={menuAbierto}>
          <Menu menuAbierto={menuAbierto} setMenuAbierto={setMenuAbierto} />
          <Content>
            <TopBar />
            <Rutas />
          </Content>
        </Container>
    </Body>
  );
};

export default Administrador;
