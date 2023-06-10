import React, { useState } from "react";
import styled from "styled-components";

const SevenSectionContainer = styled.div`
  padding: 20px;
`;

const TitleContainer =styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

`;

const Title = styled.h2`
  color: #000;
  font-size: 30px;
  font-family: "Open Sans", sans-serif;
  margin: 20px 10px;
  text-align: center;
`;

const Message = styled.p`
  color: #aaa;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  margin: 20px 10px;
  text-align: center;
  width: 600px;
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;

const ImageTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin: 10px;
  font-weight: 700;
`;

const ImageName = styled.span`
  font-size: 14px;
  color: #fff;
  margin: 0 10px 10px;
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
  border-radius: 5px;
`;

const SevenSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPreview = (image) => {
    setSelectedImage(image);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

  const galleryImages = [
    { id: 1, src: "https://lh3.googleusercontent.com/JLjgta5_ag0DFTq97ACAGJkN6DOtgHB_EdO52v-qtwvht0FncIjQyIRed5dEtn-wCpAaAe22GazzpZxCv2Mq8hlilCytIO7yEGUMkqrasi9ehJ_iKBC9Hc00o3Be_1mbivvr-NuD2g=w2400", title: "Sala 1", name: "Clinica velasquez" },
    { id: 2, src: "https://lh3.googleusercontent.com/THvh_w2AzcvOA3WwmKSv0LMkPXs3_tOUlzruk8faqsJao13pXXxSPui7SFDmluBJMvMGKgtcXO30IAHwmMMQQYyKX8yMiFwcDB2qT1nbx5GgAeC3YQyt2S1ry7_t-4G55u5eZUhRAA=w2400", title: "Sala 3", name: "Clinica velasquez" },
    { id: 3, src: "https://lh3.googleusercontent.com/zTiTRZ2E6mKp5dxSSajE1AXkeMur0CxrMyaZoZOz9CN-lSy2adArEmF9VBTalcHU_c29karmLbOzYcH-HT3PNWWV3i4fCH6FgX93LxG2ywiUKfpTB4YXvViEpzXffpjad_giFJaFGA=w2400", title: "Recepcion", name: "Clinica velasquez" },
    { id: 4, src: "https://lh3.googleusercontent.com/yMacVP3JGYxlGHnuRIIBj2obENxGipuyv4E0AzVCpUQlDpz5vDC4PeGrIGVNNmyGzrf_c0v_iptX36MPG8jiO_kQW7ryHZjITKG_FHYacTeaD1-ZjMXmRSFeW6fMJs38jR8V0ggHgA=w2400", title: "Oficina", name: "Clinica velasquez" },
    { id: 5, src: "../assets/te.jpg", title: "Sala de te", name: "Clinica Velasquez" },
    { id: 6, src: "../assets/sala1.jpg", title: "Sala 1", name: "Clinica Velasquez" },
  ];
  
  return (
    <SevenSectionContainer>
        <TitleContainer>
        <Title>Infraestructura</Title>
      <Message>Lo que más deseamos es que cuando usted venga a visitarnos se sienta como en su casa para ello contamos con ambientes acogedores y cálidos para que usted se sienta seguro y confortable ofreciéndoles instalaciones modernas y renovadas continuamente.</Message>
        </TitleContainer>
      
  
      <GalleryContainer>
        {galleryImages.map((image) => (
          <ImageWrapper key={image.id}>
            <Image
              src={image.src}
              alt={image.title}
              onClick={() => openPreview(image.src)}
            />
            <ImageOverlay onClick={() => openPreview(image.src)}>
              <ImageTitle>{image.title}</ImageTitle>
              <ImageName>{image.name}</ImageName>
            </ImageOverlay>
          </ImageWrapper>
        ))}
      </GalleryContainer>
  
      {selectedImage && (
        <PreviewContainer onClick={closePreview}>
          <PreviewImage src={selectedImage} alt="Vista Previa" />
        </PreviewContainer>
      )}
    </SevenSectionContainer>
  );
  };
  
  export default SevenSection;