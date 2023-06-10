import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FiveSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

const LeftSection = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const RightSection = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Title = styled.h2`
  margin-right: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const PreviewContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

const PreviewImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  border-radius: 10px;
`;

const FiveSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  const [leftImageIndex, setLeftImageIndex] = useState(0);
  const [rightImages, setRightImages] = useState([
    "../assets/ga_1.jpg",
    "../assets/ga_2.jpg",
    "../assets/ga_7.jpg",
    "../assets/ga_5.jpg",
  ]);

  const openPreview = (image) => {
    setSelectedImage(image);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };


  useEffect(() => {
    // Cambiar la imagen de la sección izquierda cada 5 segundos
    const interval = setInterval(() => {
      setLeftImageIndex((prevIndex) => (prevIndex + 1) % rightImages.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [rightImages.length]);


  return (
    <>
    <Title>Galería</Title>
    <FiveSectionContainer>
      <LeftSection>
        <Image
          src={rightImages[leftImageIndex]}
          alt={`Image ${leftImageIndex + 1}`}
          onClick={()=> openPreview(rightImages[leftImageIndex])}
        />
      </LeftSection>

      <RightSection>
        {rightImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => openPreview(image)}
          />
        ))}
      </RightSection>

      {selectedImage && (
        <PreviewContainer onClick={closePreview}>
          <PreviewImage src={selectedImage} alt="Preview" />
        </PreviewContainer>
      )}
    </FiveSectionContainer>
    </>
    
  );
};

export default FiveSection;