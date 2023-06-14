import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-left: 20px;
  font-family: "Montserrat", sans-serif;
`;

const Section = ({ title }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
    </SectionContainer>
  );
};

export default Section;