import React from "react";
import styled from "styled-components";

const FourSectionContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  justify-items: center;
  align-content: space-around;
  padding: 10px 0;
  gap: 10px;
  position: relative;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const Name = styled.h3`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const Speciality = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: #888;
`;

const SocialIcons = styled.div`
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  margin-right: 5px;
  color: #888;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #555;
  }
`;

const FourSection = () => {
  const professionals = [
    {
      name: "John Doe",
      speciality: "Dentist",
      image: "assets/doc.jpg",
      facebook: "https://www.facebook.com/",
      twitter: "https://www.twitter.com/",
      instagram: "https://www.instagram.com/",
    },
    {
      name: "Jane Smith",
      speciality: "Orthodontist",
      image: "assets/doc.jpg",
      facebook: "https://www.facebook.com/",
      twitter: "https://www.twitter.com/",
      instagram: "https://www.instagram.com/",
    },
    {
        name: "Jane Smith",
        speciality: "Orthodontist",
        image: "assets/doc.jpg",
        facebook: "https://www.facebook.com/",
        twitter: "https://www.twitter.com/",
        instagram: "https://www.instagram.com/",
      },
      
    // Agregar más profesionales aquí...
  ];

  return (
    <FourSectionContainer>
      <CardGrid>
        {professionals.map((professional, index) => (
          <Card key={index}>
            <Image src={professional.image} alt={professional.name} />
            <Name>{professional.name}</Name>
            <Speciality>{professional.speciality}</Speciality>
            <SocialIcons>
              <SocialIcon href={professional.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </SocialIcon>
              <SocialIcon href={professional.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </SocialIcon>
              <SocialIcon href={professional.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </SocialIcon>
            </SocialIcons>
          </Card>
        ))}
      </CardGrid>
    </FourSectionContainer>
  );
};

export default FourSection;
