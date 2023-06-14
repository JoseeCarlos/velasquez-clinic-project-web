import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const UserCardContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  width: 300px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 16px;
  z-index: 1;
`;

const UserCardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 12px;
`;

const UserCardItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 12px;
  }

  span {
    font-size: 14px;
    color: #333;
  }
`;

const LogoutButton = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

const UserCard = ({ isOpen, position, onLogout, setUserCardOpen }) => {
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
        console.log('holaaa');
      
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <UserCardContainer
          ref={ref}
          style={{
            top: `${position.top + 45}px`,
            right: `${window.innerWidth - position.right}px`,
          }}
        >
          <UserCardTitle>Perfil de usuario</UserCardTitle>
          <UserCardItem>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/imageLogo.png?alt=media&token=074b4e9d-93dd-4363-9c8b-54c380c1b41a"
              alt="Profile Picture"
            />
            <span>Micaela carballo</span>
          </UserCardItem>
          <UserCardItem>
            <span>Correo: carballo@gmail.com</span>
          </UserCardItem>
          <UserCardItem>
            <span>Informacion 2</span>
          </UserCardItem>
          <LogoutButton onClick={onLogout}>Cerrar sesión</LogoutButton>
        </UserCardContainer>
      )}
    </>
  );
};

export default UserCard;
