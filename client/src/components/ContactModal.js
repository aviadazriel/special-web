// ContactModal.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h1>Contact Us</h1>

        {/* Contact Icons Section */}
        <IconsContainer>
          <IconLink href="tel:+972508857282" color="#25D366">
            <FontAwesomeIcon icon={faPhone} />
          </IconLink>
          <IconLink href="mailto:contact@premiumconsult.com" color="#DB4437">
            <FontAwesomeIcon icon={faEnvelope} />
          </IconLink>
          <IconLink href="https://wa.me/972508857282" target="_blank" rel="noopener noreferrer" color="#25D366">
            <FontAwesomeIcon icon={faWhatsapp} />
          </IconLink>
          <IconLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" color="#4267B2">
            <FontAwesomeIcon icon={faFacebook} />
          </IconLink>
        </IconsContainer>

        {/* Contact Form Section */}
        <FormContainer>
          <h2>Send Us a Message</h2>
         
          <ContactForm>
          <InlineFields>
            <FormLabel>
              Name
              <FormInput type="text" placeholder="Your Name" required />
            </FormLabel>
            <FormLabel>
        Phone Number
        <FormInput type="tel" placeholder="Your Phone Number" required />
      </FormLabel>
      </InlineFields>
            <SubmitButton type="submit">Submit</SubmitButton>
          </ContactForm>
        </FormContainer>
      </ModalContainer>
    </Overlay>
  );
};

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 40px 20px;
  width: 90%;
  max-width: 600px;
  border-radius: 10px;
  position: relative;
  text-align: center;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  font-weight: bold;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 40px;
`;

const IconLink = styled.a`
  color: ${({ color }) => color};
  font-size: 3rem;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.2);
    color: ${({ color }) => color};
  }
`;

const FormContainer = styled.div`
  width: 100%;
  text-align: left;

  h2 {
    font-size: 1.8rem;
    color: #1b263b;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;






const InlineFields = styled.div`
  display: flex;
  gap: 20px; /* Adjust spacing as needed */
  width: 100%;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1; /* Makes both fields take equal space */
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  width: 100%;

  &:focus {
    border-color: #fcbf49;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #fcbf49;
  color: #0d1b2a;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0a500;
  }
`;




export default ContactModal;
