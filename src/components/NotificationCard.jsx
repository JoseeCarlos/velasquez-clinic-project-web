import React from "react";
import styled from "styled-components";

const NotificationCardContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 70px;
  width: 500px;
  height: 500px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 16px;
  z-index: 1;
`;

const NotificationTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 12px;
`;

const NotificationItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;

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

  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }
`;

const NotificationCard = ({ isOpen, position }) => {
  return (
    <>
      {isOpen && (
        <NotificationCardContainer
          style={{
            top: `${position.top + 45}px`,
            right: `${window.innerWidth - position.right}px`,
          }}
        >
          <NotificationTitle>Notifications</NotificationTitle>
          <NotificationItem>
            <img src="notification-image-1.jpg" alt="Notification 1" />
            <span>Notification 1 </span>
          </NotificationItem>
          <NotificationItem>
            <img src="notification-image-2.jpg" alt="Notification 2" />
            <span>Notification 2 </span>
          </NotificationItem>
        </NotificationCardContainer>
      )}
    </>
  );
};

export default NotificationCard;