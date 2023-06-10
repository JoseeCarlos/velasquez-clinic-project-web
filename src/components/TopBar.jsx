import React, { useEffect, useState, useRef } from "react";
import { FaBell } from "react-icons/fa";
import styled from "styled-components";
import UserCard from "./UserCard";
import NotificationCard from "./NotificationCard";

const TopBarContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 2rem;
  display: grid;
  align-items: center;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.09),
    0px 1px 4px rgba(0, 0, 0, 0.09);
  background-color: #f9a13c;
`;

const TopBarPhoto = styled.div`
  margin: 0 0 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.7rem;
  transition: all 600ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.02, 1.02);
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  background-color: #f2f2f2;
  padding: 8px;
  width: 300px;
  height: 50px;
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
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #fff;
  margin-left: 10px;
`;

const TopBar = () => {
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
    <>
      <TopBarContainer>
        {/* <LeftSection>
          <Title>Titulo de la Página</Title>
        </LeftSection> */}

        <TopBarPhoto>
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
              }}
            >
              {cantidadNotificaciones}
            </span>
          </div>
          <ProfilePicture
            src="assets/demo/images/avatar/imageLogo.png"
            alt="Foto de perfil"
            id="foto"
            onClick={handleProfileClick}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </TopBarPhoto>

        {userCardOpen && (
          <UserCard isOpen={userCardOpen} position={userCardPosition}/>
          
        )}
        {showNotifications && (
          <NotificationCard isOpen={showNotifications} position={notificationPosition}/>
        )}
      </TopBarContainer>
    </>
  );
}

export default TopBar;
