import React from "react";
import styled, { css } from "styled-components";
import { format, startOfWeek, addDays, isSameDay, isBefore } from "date-fns";

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: 60px repeat(6, 1fr);
  grid-template-rows: 40px repeat(10, 1fr);
  grid-gap: 1px;
  margin: 25px;
`;

const TimeLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: bold;
  padding-right: 8px;
  background-color: #f5f5f5;
  border: 10px;
  color: #333;
`;

const DayLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 8px;
  background-color: ${(props) => (props.isToday ? "#b3d4fc" : "transparent")};
  color: ${(props) => (props.isToday ? "#333" : "#888")};
`;

const DayName = styled.div`
  margin-bottom: 4px;
`;

const DayDate = styled.div`
  font-size: 12px;
`;

const TimeSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.appointment ? "#fff" : "#f9f9f9")};
  border: 1px solid ${(props) => (props.appointment ? "#61282d" : "#e6e6e6")};

`;

const Appointment = styled.div`
  background-color: ${(props) => (props.isPast ? "#f5c6cb" : "#8bf8ac")};
  border: 2px solid ${(props) => (props.isPast ? "#f2939b" : "#4ae74a")};
  padding: 4px;
  color: #fff;
  font-size: 16px;
`;

const AppointmentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  color: #333131;
  
`;


const CalendarScreen = () => {
    const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    const today = new Date();
    const startDate = startOfWeek(today, { weekStartsOn: 1 });
  
    const appointments = [
      {
        date: new Date(2023, 5, 5, 10, 0),
        title: "Ortodoncia",
        name: "Jose Carlos",
      },
      {
        date: new Date(2023, 5, 6, 14, 30),
        title: "RadioGrafia",
        name: "Peter Calcina",
      },
      {
        date: new Date(2023, 5, 7, 9, 0),
        title: "Ortodoncia",
        name: "Jhoana Gamboa",
      },
      {
        date: new Date(2023, 5, 9, 13, 0),
        title: "Ortodoncia",
        name: "Luis Acero",
      },
    ];
  
    return (
      <CalendarContainer>
        <TimeLabel></TimeLabel>
        {days.map((day, index) => {
          const currentDate = addDays(startDate, index);
          const isToday = isSameDay(currentDate, today);
          return (
            <DayLabel key={day} isToday={isToday}>
              <DayName>{day}</DayName>
              {<DayDate>{format(currentDate, "d MMM")}</DayDate>}
            </DayLabel>
          );
        })}
        {Array.from({ length: 10 }).map((_, hour) => {
          const time = hour + 9;
          return (
            <>
              <TimeLabel>{`${time}:00`}</TimeLabel>
              {days.map((day, index) => {
                const currentDate = addDays(startDate, index);
                const appointment = appointments.find(
                  (apt) =>
                    isSameDay(apt.date, currentDate) &&
                    apt.date.getHours() === time &&
                    time < 18
                );
                const isPast =
                  isBefore(currentDate, today) ||
                  (isSameDay(currentDate, today) && time < today.getHours());
                return (
                  <TimeSlot key={day + hour} appointment={appointment}>
                    {appointment && (
                      <Appointment isPast={isPast}>
                        <AppointmentItem>{appointment.name}</AppointmentItem>
                        <AppointmentItem>{appointment.title}</AppointmentItem>
                      </Appointment>
                    )}
                  </TimeSlot>
                );
              })}
            </>
          );
        })}
      </CalendarContainer>
    );
};

export default CalendarScreen;
