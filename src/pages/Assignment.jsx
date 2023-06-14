import React from 'react';
import styled from 'styled-components';

const Assignment = () => {
  const data = [
    {
      doctor: 'Dr. Juan Pérez',
      sala: 'Sala 1',
      fechaInicio: '10/06/2023',
      fechaFin: '15/06/2023',
      horaInicio: '09:00 AM',
      horaFin: '12:00 PM'
    },
    {
      doctor: 'Dra. Ana Gómez',
      sala: 'Sala 2',
      fechaInicio: '12/06/2023',
      fechaFin: '18/06/2023',
      horaInicio: '10:00 AM',
      horaFin: '02:00 PM'
    },
    {
      doctor: 'Dr. Pedro Rodríguez',
      sala: 'Sala 3',
      fechaInicio: '14/06/2023',
      fechaFin: '20/06/2023',
      horaInicio: '08:00 AM',
      horaFin: '11:00 AM'
    },
    {
      doctor: 'Dr. Roberto Martínez',
      sala: 'Sala de Cirugía',
      fechaInicio: '16/06/2023',
      fechaFin: '22/06/2023',
      horaInicio: '01:00 PM',
      horaFin: '05:00 PM'
    },
  ];

  // Agrupa las asignaciones por salas
  const groupedData = data.reduce((groups, item) => {
    if (!groups[item.sala]) {
      groups[item.sala] = [];
    }
    groups[item.sala].push(item);
    return groups;
  }, {});

  return (
    <Container>
      <Title>Horarios del Doctor</Title>
      {Object.entries(groupedData).map(([sala, assignments]) => (
        <SalaGroup key={sala}>
          <SalaTitle>{sala}</SalaTitle>
          {assignments.map((item, index) => (
            <Event key={index}>
              <DoctorName>{item.doctor}</DoctorName>
              <DateTime>
                {item.fechaInicio} - {item.fechaFin}
              </DateTime>
              <Time>
                {item.horaInicio} - {item.horaFin}
              </Time>
            </Event>
          ))}
        </SalaGroup>
      ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  overflow-y: auto;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const SalaGroup = styled.div`
  margin-bottom: 40px;
`;

const SalaTitle = styled.h3`
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Event = styled.div`
  background-color: #fff;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

const DoctorName = styled.h4`
  color: #333;
  font-size: 16px;
  margin-bottom: 5px;
`;

const DateTime = styled.p`
  color: #666;
  font-size: 14px;`;

const Time = styled.p`
color: #666;
font-size: 14px;
`;

export default Assignment;
