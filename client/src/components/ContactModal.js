// ContactModal.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

const ContactModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show the "Thank You" message instead of closing the modal
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        {isSubmitted ? (
          <ThankYouMessage>
            <FontAwesomeIcon icon={faCheckCircle} size="3x" color="#25D366" />
            <h2>Thank You!</h2>
            <p>We will contact you soon.</p>
          </ThankYouMessage>
        ) : (
          <>
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

            <FormContainer>
              <h2>Send Us a Message</h2>
              <ContactForm onSubmit={handleSubmit}>
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
                <MessageLabel>
                  Message
                  <MessageTextarea placeholder="Your Message" />
                </MessageLabel>
                <SubmitButton type="submit">Submit</SubmitButton>
              </ContactForm>
            </FormContainer>
          </>
        )}
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
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 40px 30px;
  width: 90%;
  max-width: 550px;
  border-radius: 20px;
  position: relative;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.span`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 1.8rem;
  cursor: pointer;
  color: #888;
  transition: color 0.3s;

  &:hover {
    color: #f44336;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0 20px;
`;

const IconLink = styled.a`
  background-color: ${({ color }) => color};
  color: white;
  font-size: 2rem;
  padding: 15px;
  border-radius: 50%;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }
`;

const FormContainer = styled.div`
  width: 100%;
  margin-top: 30px;

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
  gap: 15px;
  align-items: center;
`;

const InlineFields = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const FormInput = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  width: 100%;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #fcbf49;
    outline: none;
  }
`;

const MessageLabel = styled.label`
  width: 100%;
  font-size: 1rem;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MessageTextarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  resize: vertical;
  height: 80px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled.button`
  background-color: #fcbf49;
  color: #0d1b2a;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 15px;

  &:hover {
    background-color: #f0a500;
    transform: scale(1.05);
  }
`;

const ThankYouMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  color: #1b263b;

  h2 {
    font-size: 1.8rem;
    color: #1b263b;
  }

  p {
    font-size: 1rem;
    color: #333;
  }
`;

export default ContactModal;
