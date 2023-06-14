import React from "react";
import styled from "styled-components";
import { FaBell, FaCalendarPlus } from 'react-icons/fa';
import { RiAlarmWarningFill, RiCalendarEventFill } from 'react-icons/ri';
import { format, isToday, isYesterday } from 'date-fns';
import { es } from 'date-fns/locale';

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
  justify-content: space-between;
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
    padding: 10px;
  }

  .notification-date {
    // Estilos de la fecha de la notificación
    font-size: 12px;
    color: #999;
    text-transform: capitalize;
  }

  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }
`;

const ContainerIcon = styled.div`
  padding: 8px 16px;
  background-color: ${props => props.bgColor || '#f9a13c'};
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 15px;

  &:hover {
    background-color: ${props => props.hoverColor || '#61282d'};
  }
`;

const NotificationCard = ({ isOpen, position }) => {

  const notifications = [
    {
      id: 1,
      message: "Recuerda que tienes una cita programada para mañana a las 10:00 AM.",
      icon: <RiAlarmWarningFill />,
      iconColor: "#ff0000",
      iconHoverColor: "#990000",
      date: "2023-06-15"
    },
    {
      id: 2,
      message: "Has recibido a un nuevo paciente. Su nombre es Juan Pérez.",
      icon: <RiCalendarEventFill />,
      iconColor: "#1fa11f",
      iconHoverColor: "#c0cfc8",
      date: "2023-06-14"
    },
    {
      id: 2,
      message: "Has recibido a un nuevo paciente. Su nombre es Juan Pérez.",
      icon: <RiCalendarEventFill />,
      iconColor: "#1fa11f",
      iconHoverColor: "#c0cfc8",
      date: "2023-06-13"
    },
    // Agrega más objetos de notificación según sea necesario
  ];

  const getFormattedDate = (date) => {
    if (isToday(date)) {
      return 'Hoy';
    } else if (isYesterday(date)) {
      return 'Ayer';
    } else {
      return format(date, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es });
    }
  };

  return (
    <>
      {isOpen && (
        <NotificationCardContainer
          style={{
            top: `${position.top + 45}px`,
            right: `${window.innerWidth - position.right}px`,
          }}
        >
          <NotificationTitle>Notificaciones</NotificationTitle>
          {notifications.map(notification => (
            <NotificationItem key={notification.id}>
              <ContainerIcon bgColor={notification.iconColor} hoverColor={notification.iconHoverColor}>
                {notification.icon}
              </ContainerIcon>
              <span>{notification.message}</span>
              <span className="notification-date">
                {getFormattedDate(new Date(notification.date))}
              </span>
            </NotificationItem>
          ))}
        </NotificationCardContainer>
      )}
    </>
  );
};

export default NotificationCard;