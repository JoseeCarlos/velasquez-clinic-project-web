import React from 'react';
import styled from 'styled-components';
import { Chart } from 'primereact/chart';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

const Card = styled.div`
  width: 25%;
  
  background-color: #ffffff;
  padding: 20px;
  margin: 10px;
  text-align: center;
  border-radius: 15px;
  margin-top: 1rem;
  box-shadow: 0 5px 25px rgba(0, 0, 0, .2);;
  transition: all 300ms ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h2`
  font-size: 18px;
  color: #333333;
`;

const Value = styled.p`
  font-size: 54px;
  font-weight: bold;
`;

const CardsReportUser = () => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [50, 60, 70, 80, 90],
        fill: false,
        borderColor: '#42A5F5',
      },
    ],
  };

  return (
    <Container>
      <Card>
        <CardTitle>Pacientes Atendidos</CardTitle>
        <Value>20</Value>
        
      </Card>
      <Card>
        <CardTitle>Pacientes con Reserva</CardTitle>
        <Value>15</Value>
        
      </Card>
      <Card>
        <CardTitle>Citas Pendientes</CardTitle>
        <Value>10</Value>
        
      </Card>
    </Container>
  );
};

export default CardsReportUser;
