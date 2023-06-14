import React from "react";
import styled from "styled-components";
import { FaBell } from "react-icons/fa";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import NotificationCard from "./NotificationCard";

const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f9a13c;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 18px;
  color: #fff;
  margin-right: 1rem;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  background-color: #f2f2f2;
  padding: 8px;
  width: 300px;
  height: 50px;
  margin-right: 10px;
`;

const SearchIcon = styled.i`
  margin-right: 8px;
  color: #888;
`;

const SearchBar = styled.input`
  border: none;
  background-color: transparent;
  color: #333;
  font-size: 16px;
  outline: none;
  width: 100%;

  &:focus {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0) !important;
  }
`;

const ProfilePicture = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 20px;
`;

const TopBar = ({ title }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationPosition, setNotificationPosition] = useState(null);
  const [userCardOpen, setUserCardOpen] = useState(false);
  const [userCardPosition, setUserCardPosition] = useState(null);

  const handleProfileClick = (event) => {
    setUserCardOpen(!userCardOpen);
    setUserCardPosition(event.currentTarget.getBoundingClientRect());
  };

  const handleNotificationsClick = (event) => {
    setShowNotifications(!showNotifications);
    setNotificationPosition(event.currentTarget.getBoundingClientRect());
  };

  const cantidadNotificaciones = 10;
  return (
    <TopBarContainer>
      <LeftSection>
        <Title>{title}</Title>
      </LeftSection>
      <RightSection>
        <SearchBarContainer>
          <SearchIcon className="pi pi-search" />
          <SearchBar
            type="text"
            placeholder="Buscar"
            id="search-bar"
            className="search-bar"
          />
        </SearchBarContainer>
        <div style={{ position: "relative" }}>
          <FaBell
            size={25}
            color="#61282d"
            onClick={handleNotificationsClick}
          />
          <span
            style={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              backgroundColor: "white",
              color: "#61282d",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
              fontWeight: "bold",
              
            }}
          >
            {cantidadNotificaciones}
          </span>
        </div>
        <ProfilePicture
          src="https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/imageLogo.png?alt=media&token=074b4e9d-93dd-4363-9c8b-54c380c1b41a"
          alt="Profile"
          onClick={handleProfileClick}
        />
      </RightSection>
      <UserCard isOpen={userCardOpen} position={userCardPosition} setUserCardOpen={setUserCardOpen} />
      <NotificationCard
        isOpen={showNotifications}
        position={notificationPosition}
      />
    </TopBarContainer>
  );
};

export default TopBar;
