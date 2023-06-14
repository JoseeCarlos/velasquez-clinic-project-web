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
  
`;

const FiveSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [leftImageIndex, setLeftImageIndex] = useState(0);
  const [rightImages, setRightImages] = useState([
    "../assets/ga_1.jpg",
    "../assets/ga_2.jpg",
    "../assets/ga_7.jpg",
    "../assets/ga_4.jpg",
    "../assets/ga_5.jpg",
    "../assets/ga_3.jpg",
    "../assets/ga_6.jpg",
  ]);

  const openPreview = (image) => {
    setSelectedImage(image);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

  // useEffect(() => {
  //   fetch('your_json_endpoint')
  //     .then(response => response.json())
  //     .then(data => {
  //       setRightImages(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching JSON:', error);
  //     });
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftImageIndex((prevIndex) => (prevIndex + 1) % rightImages.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [rightImages.length]);


  const getRandomImageIndex = () => {
    return Math.floor(Math.random() * rightImages.length);
  };

  return (
    <>
      <FiveSectionContainer>
        <LeftSection>
          <Image
            src={rightImages[leftImageIndex]}
            alt={`Image ${leftImageIndex + 1}`}
            onClick={() => openPreview(rightImages[leftImageIndex])}
          />
        </LeftSection>

        <RightSection>
        {rightImages.slice(0, 4).map((_, index) => (
          <Image
            key={index}
            src={rightImages[getRandomImageIndex()]}
            alt={`Image ${index + 1}`}
            onClick={() => openPreview(rightImages[getRandomImageIndex()])}
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
