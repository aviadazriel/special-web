import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => (
  <ContactContainer>
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
        <FormLabel>
          Name
          <FormInput type="text" placeholder="Your Name" required />
        </FormLabel>
        <FormLabel>
          Email
          <FormInput type="email" placeholder="Your Email" required />
        </FormLabel>
        <FormLabel>
          Message
          <FormTextarea placeholder="Your Message" required />
        </FormLabel>
        <SubmitButton type="submit">Submit</SubmitButton>
      </ContactForm>
    </FormContainer>
  </ContactContainer>
);

// Styled Components
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 800px;
  margin: auto;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #1b263b;
    margin-bottom: 20px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 40px;
  width: 100%;
  max-width: 400px;
`;

const IconLink = styled.a`
  color: ${({ color }) => color};
  font-size: 3rem; /* Larger icon size */
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.2);
    color: ${({ color }) => color};
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: left;

  h2 {
    font-size: 2rem;
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

const FormLabel = styled.label`
  font-size: 1rem;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 8px;
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

const FormTextarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  width: 100%;
  resize: vertical;

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

export default ContactUs;
