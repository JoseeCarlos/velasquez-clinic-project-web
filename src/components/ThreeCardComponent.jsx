import React from 'react';
import styled from 'styled-components';
import { Chart } from 'primereact/chart';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 20px;
`;

const Card = styled.div`
  width: 30%;
  
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

const ChartContainer = styled.div`
  height: 300px;
  margin-top: 20px;
`;

const ThreeCardComponent = () => {
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
        <CardTitle>Card 1</CardTitle>
        <ChartContainer>
          <Chart type="line" data={chartData} />
        </ChartContainer>
      </Card>
      <Card>
        <CardTitle>Card 2</CardTitle>
        <ChartContainer>
          <Chart type="bar" data={chartData} />
        </ChartContainer>
      </Card>
      <Card>
        <CardTitle>Card 3</CardTitle>
        <ChartContainer>
          <Chart type="bar" data={chartData} />
        </ChartContainer>
      </Card>
    </Container>
  );
};

export default ThreeCardComponent;
