// import React from "react";
// import styled from "styled-components";
// import { FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

// const Container = styled.div`
//   width: 100%;
//   padding: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const CardGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: repeat(auto, 1fr);
//   justify-items: center;
//   align-content: center;
//   padding: 10px 0;
//   gap: 10px;
//   position: relative;
// `;

// const CardContainer = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   overflow: hidden;

//   &:hover .card-title {
//     transform: translateY(0);
//   }

//   &:hover .card-hidden-content {
//     transform: scaleY(1);
//   }
// `;

// const CardImage = styled.img`
//   height: 100%;
//   width: auto;
//   object-fit: cover;
// `;

// const CardOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.4);
// `;

// const CardInfoContainer = styled.div`
//   position: absolute;
//   bottom: 0;
//   color: white;
// `;

// const CardTitle = styled.span`
//   position: absolute;
//   transition: transform 0.3s;
//   transform: translateY(100%);
//   color: white;
// `;

// const CardHiddenContainer = styled.div`
//   transform: scaleY(0);
//   transition: transform 0.3s ease;
//   transform-origin: bottom;
//   margin: 0;
//   padding: 10px;
//   background-color: rgba(0, 0, 0, 0.8);
//   width: 600px;
//   height: 500px;
// `;

// const CardHiddenContent = styled.p`
 
//   margin: 0;
//   padding: 10px;
//   background-color: rgba(0, 0, 0, 0.8);
//   color: white;
// `;

// const FourSection = () => {
//   const professionals = [
//     {
//       name: "John Doe",
//       speciality: "Dentist",
//       image: "assets/doc.jpg",
//       facebook: "https://www.facebook.com/",
//       twitter: "https://www.twitter.com/",
//       instagram: "https://www.instagram.com/",
//     },
//     {
//       name: "Jane Smith",
//       speciality: "Orthodontist",
//       image: "assets/doc.jpg",
//       facebook: "https://www.facebook.com/",
//       twitter: "https://www.twitter.com/",
//       instagram: "https://www.instagram.com/",
//     },
//     {
//       name: "Jane Smith",
//       speciality: "Orthodontist",
//       image: "assets/doc.jpg",
//       facebook: "https://www.facebook.com/",
//       twitter: "https://www.twitter.com/",
//       instagram: "https://www.instagram.com/",
//     },
    
//   ];

//   return (
//     <Container>
//       <CardGrid>
//         {professionals.map((professional, index) => (
//           <CardContainer key={index}>
//             <CardImage src={professional.image} alt="" />
//             <CardOverlay />
//             <CardInfoContainer>
//               {/* <CardTitle className="card-title">{professional.name}</CardTitle> */}
              
//               <CardHiddenContainer className="card-hidden-content" >

//                 <CardHiddenContent>
//                 {professional.name}
//               </CardHiddenContent>
//               <CardHiddenContent>
//                 {professional.speciality}
//               </CardHiddenContent>
//               <FaInstagram/>
//               <FaTwitter/>
//               <FaWhatsapp/>
//               </CardHiddenContainer>
//             </CardInfoContainer>
//           </CardContainer>
//         ))}
//       </CardGrid>
//     </Container>
//   );
// };

// export default FourSection;

import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  grid-template-columns: repeat(4, 1fr);
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
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
    {
      name: "Jane Smith",
      speciality: "Orthodontist",
      image: "assets/doc.jpg",
      facebook: "https://www.facebook.com/",
      twitter: "https://www.twitter.com/",
      instagram: "https://www.instagram.com/",
    },
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
              <SocialIcon
                href={professional.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </SocialIcon>
              <SocialIcon
                href={professional.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </SocialIcon>
              <SocialIcon
                href={professional.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
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