import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  FaUserMd,
  FaUser,
  FaCalendarAlt,
  FaClipboard,
  FaClipboardCheck,
  FaHome,
  FaNewspaper,
} from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { MdEvent } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import logo from "../assets/images/login-logo.png";
import { Divider } from "primereact/divider";

const ContenedorMenu = styled.div`
  position: sticky;
  height: 100%;
  width: auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
`;

const Logo = styled.div`
  max-height: 20%;
`;

const ImgContenedor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 100%;
`;

const LogoImg = styled.img`
  max-width: 100%;
  height: 100%;
  image-rendering: crisp-edges;
`;

const LogoDivider = styled.hr`
  height: 5px;
  width: 100%;
  background-color: #61282d;
`;

const BotonMenu = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 101px;
  right: -18px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 2px solid #61282d;
  background-color: white;
  color: #000;
  cursor: pointer;
  transition: all 500ms;
  z-index: 2;

  &.rotar-boton {
    transform: initial;
  }

  &.normal {
    transform: rotate(180deg);
  }
`;

const Enlace = styled(NavLink)`
  height: 3.2rem;
  display: flex;
  color: #61282d;
  gap: 1rem;
  align-items: center;
  position: relative;
  transition: all 300ms ease;
  text-decoration: none;

  i {
    font-size: 1.2rem;
    margin-left: 1.5rem;
    transition: margin-left 300ms ease;
  }

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    flex: 1;
    flex-basis: 0;
  }

  &:last-child {
    position: absolute;
    bottom: 2rem;
    width: 100%;
  }

  &.active {
    background-color: #f9a13c;
    color: white;

    i {
      margin-left: 0;
    }

    &::before {
      content: "";
      width: 15px;
      height: 100%;
      background-color: #61282d;
    }
  }

  &:hover {
    color: #61282d;

    i {
      margin-left: 3rem;
    }
  }

  &.active:hover i {
    margin-left: 1rem;
  }
`;

const ScrollableContainer = styled.div`
  overflow-y: auto;
  
`;

const Menu = ({ menuAbierto, setMenuAbierto }) => {
  const ModMenuAbierto = () => {
    setMenuAbierto(!menuAbierto);
  };

  const paginas = [
    { label: "Inicio", icon: FaHome, to: "/admin/" },
    { label: "Lista de Usuarios", icon: FaUser, to: "/admin/listaUsuarios" },
    { label: "Citas", icon: FaCalendarAlt, to: "/admin/citas" },
    { label: "Calendario de citas", icon: MdEvent , to: "/admin/citas_pendientes" },
    { label: "Reportes", icon: TiDocumentText , to: "/admin/reportes" },
    { label: "Lista de doctores", icon: FaUserMd, to: "/admin/doctor" },
    { label: "Asignaciones", icon: AiOutlineUsergroupAdd, to: "/admin/asignaciones" },
    { label: "Noticias", icon: FaNewspaper, to: "/admin/noticias" },
    { label: "Editar Perfil", icon: AiOutlineEdit, to: "/admin/editar_perfil" },
    { label: "Configuraciones", icon: FiSettings, to: "/admin/configuraciones" },
    
    
    
  ];

  return (
    <ContenedorMenu estaAbierto={menuAbierto}>
      <BotonMenu
        className={`boton-menu ${menuAbierto ? "rotar-boton" : "normal"}`}
        onClick={ModMenuAbierto}
      >
        <i className="pi pi-angle-left"></i>
      </BotonMenu>
      <Logo>
        <ImgContenedor>
          <LogoImg src={logo} alt="Logo Camebol" />
          <LogoDivider />
        </ImgContenedor>
      </Logo>
      <Divider />
      <ScrollableContainer>
      {paginas.map(({ label, icon: Icono, to }) => (
        <Enlace
          key={label}
          to={to}
          activeClassName="active"
          isActive={(match) => {
            if (!match) {
              return false;
            }
            return match.isExact;
          }}
        >
          <i className="pi">
            <Icono size={25} />
          </i>
          {menuAbierto && <span>{label}</span>}
        </Enlace>
      ))}
      </ScrollableContainer>
      
    </ContenedorMenu>
  );
};

export default Menu;
