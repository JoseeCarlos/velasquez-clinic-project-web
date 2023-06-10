import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-image: url("../assets/seption.jpg");
  background-size: cover;
  background-position: center;
  height: 550px;
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const DoctorName = styled.h2`
  font-size: 36px;
    font-weight: 700;
    font-family: "Regular 700", serif;
    color: #fff;
    margin-bottom: 20px;
`;

const Sentence = styled.p`
  font-size: 18px;
    font-weight: 600;
    font-family: "Regular 700", serif;
    color: #ffffff;
    margin-bottom: 30px;
`;

const RightSide = styled.div`
 flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DoctorImage = styled.img`
  background-size: cover;
    width: 300px;
    height: 480px;
    padding: 20px;
  
`;

const FirstSection = () => {
  return (
    <SectionContainer>
      <LeftSide>
        <DoctorName>Dr. John Doe</DoctorName>
        <Sentence>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
          aliquam tincidunt.
        </Sentence>
      </LeftSide>
      <RightSide>
        <DoctorImage src="../assets/per.png" alt="Doctor's photo" />
      </RightSide>
    </SectionContainer>
  );
};

export default FirstSection;
