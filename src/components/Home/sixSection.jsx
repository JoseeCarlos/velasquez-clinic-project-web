import React, { useState } from "react";
import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa";

const SixSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  background-color: #f8f8f8;
`;

const Title = styled.h2`
  font-size: 3em;
  font-weight: 700;
  color: #f9a13c;
  text-align: center;
`;

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

const TestimonialIcon = styled(FaQuoteLeft)`
  font-size: 48px;
  color: #f9a13c;
  margin-bottom: 10px;
`;

const TestimonialText = styled.p`
  font-size: 1.5em;
  font-weight: 700;
  color: #000;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 700px;
`;

const UserName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #f9a13c;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #d88c1a;
  }
`;

const testimonials = [
  {
    id: 1,
    text: "Successful businesses know the importance of building and maintaining good working relationships, whether it is with partners, employees, business or trade organizations, the government, media representatives, vendors, consumers, or the community at large. A business must carefully balance the benefits of these interpersonal relationships and should never allow these relationships to blind their judgment.",
    name: "John Doe",
  },
  {
    id: 2,
    text: "Successful businesses know the importance of building and maintaining good working relationships, whether it is with partners, employees, business or trade organizations, the government, media representatives, vendors, consumers, or the community at large. A business must carefully balance the benefits of these interpersonal relationships and should never allow these relationships to blind their judgment.",
    name: "Jane Smith",
  },
  {
    id: 3,
    text: "Successful businesses know the importance of building and maintaining good working relationships, whether it is with partners, employees, business or trade organizations, the government, media representatives, vendors, consumers, or the community at large. A business must carefully balance the benefits of these interpersonal relationships and should never allow these relationships to blind their judgment.",
    name: "David Johnson",
  },
];

const SixSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const previousTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) =>
      prevTestimonial === 0 ? testimonials.length - 1 : prevTestimonial - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) =>
      prevTestimonial === testimonials.length - 1 ? 0 : prevTestimonial + 1
    );
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <SixSectionContainer>
      <Title>Testimonios</Title>
      <TestimonialContainer>
        <TestimonialIcon />
        <TestimonialText>{testimonial.text}</TestimonialText>
        <UserName>- {testimonial.name}</UserName>
      </TestimonialContainer>
      <ButtonContainer>
        <Button onClick={previousTestimonial}>Anterior</Button>
        <Button onClick={nextTestimonial}>Siguiente</Button>
      </ButtonContainer>
    </SixSectionContainer>
  );
};

export default SixSection;
