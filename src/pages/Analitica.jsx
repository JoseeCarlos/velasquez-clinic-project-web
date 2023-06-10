import React from 'react';
import styled from 'styled-components';
import { Chart } from 'primereact/chart';
import ThreeCardComponent from '../components/ThreeCardComponent';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;

`;

const ReportScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const Card = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  margin-top: 1rem;
  box-shadow: 0 5px 25px rgba(0, 0, 0, .2);;
  transition: all 300ms ease;

  &:hover {
    box-shadow: none;
  }
  
`;

const LargeReportContainer = styled(Card)`
  width: 60%;
  height: auto;
  margin-right: 10px;
`;

const SmallReportsContainer = styled(Card)`
  width: 30%;
  height: auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SmallReportCard = styled(Card)`
  height:100% 
`;

const FirstSmallReportCard = styled(SmallReportCard)`
  
`;


export function Analitica() {
  const largeReportData = {
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

  const smallReportData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <Container>
    <ThreeCardComponent></ThreeCardComponent>

    <ReportScreenContainer>
      <LargeReportContainer>
        <h2>Large Report</h2>
        <Chart type="line" data={largeReportData}  />
      </LargeReportContainer>
      <SmallReportsContainer>
        <FirstSmallReportCard>
        <h2>Small Report 2</h2>
          <Chart type="pie" data={smallReportData} />
        </FirstSmallReportCard>
      </SmallReportsContainer>
    </ReportScreenContainer>
    <ReportScreenContainer>
      <LargeReportContainer>
        <h2>Large Report</h2>
        <Chart type="line" data={largeReportData}  />
      </LargeReportContainer>
      <SmallReportsContainer>
        <FirstSmallReportCard>
        <h2>Small Report 2</h2>
          <Chart type="pie" data={smallReportData} />
        </FirstSmallReportCard>
      </SmallReportsContainer>
    </ReportScreenContainer>
    <ThreeCardComponent></ThreeCardComponent>
    </Container>
    
    
    
    
  );
};


