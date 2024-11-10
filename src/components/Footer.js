// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      {/* Contact Information */}
      <ContactInfo>
        <ContactItem href="tel:+972508857282">📞 050-885-7282</ContactItem>
        <ContactItem href="mailto:mashkanta.mishtalemet@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> mashkanta.mishtalemet@gmail.com
        </ContactItem>
        <ContactItem href="https://wa.me/972508857282" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </ContactItem>
        <ContactItem href="https://maps.app.goo.gl/UssHw9rgkTQron728" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> חיל האויר 1, ראשון לציון
        </ContactItem>
      </ContactInfo>

      {/* Social Media Links */}
      <SocialLinks>
        <SocialLink href="https://www.facebook.com/mashkanta.experience/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </SocialLink>
        {/* Additional Social Links if needed */}
      </SocialLinks>
    </FooterContent>

    {/* Footer Bottom Text */}
    <FooterBottom>
      <FooterText>&copy; 2024 Mortgage Consultancy. All rights reserved.</FooterText>
    </FooterBottom>
  </FooterContainer>
);

// Styled Components
const FooterContainer = styled.footer`
  width: 100%;
  background-color: #0d1b2a;
  color: #ffffff;
  padding: 40px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 15px;
  }
`;

const ContactItem = styled.a`
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: #fcbf49;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: #3b5998; /* Facebook blue */
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

const FooterBottom = styled.div`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #aaa;
`;

const FooterText = styled.p`
  margin: 0;
`;

export default Footer;
