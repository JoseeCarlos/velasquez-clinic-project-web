import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #f9a13c;
  color: #fff;
  padding: 40px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FooterLogo = styled.img`
  width: 150px;
  height: auto;
  margin-right: 20px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const FooterLink = styled.a`
  color: #fff;
  margin-right: 20px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #61282d;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 30px;
  margin-right: 10px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #61282d;
  }
`;

const FooterText = styled.p`
  margin-top: 20px;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo src="../assets/logo-white.png" alt="Logo" />
        <FooterLinks>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Services</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinks>
        <SocialIcons>
          <SocialIcon href="#">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="#">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="#">
            <FaInstagram />
          </SocialIcon>
        </SocialIcons>
      </FooterContent>
      <FooterText>&copy; 2023 Clinica velasquez. Todos los derechos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
