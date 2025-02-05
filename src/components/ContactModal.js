import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
const ContactModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  

const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitted(false);

  const formData = {
    name: e.target.name.value,
    phone: e.target.phone.value,
    message: e.target.message.value,
  };

  emailjs
    .send('service_57fj4n9', 'template_i1vru3k', formData, 'wFi9VAP5cqkrjZKFw')
    .then(
      () => {
        setIsSubmitted(true); // Show "Thank You" message
      },
      (error) => {
        console.error('Error:', error);
        alert('שליחת ההודעה נכשלה. נסה שוב מאוחר יותר.');
      }
    );
};


  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        {isSubmitted ? (
          <ThankYouMessage>
            <FontAwesomeIcon icon={faCheckCircle} size="3x" color="#25D366" />
            <h2>תודה!</h2>
            <p>ניצור איתך קשר בקרוב.</p>
          </ThankYouMessage>
        ) : (
          <>
            <IconsContainer>
              <IconLink href="tel:+972508857282" color="#25D366">
                <FontAwesomeIcon icon={faPhone} />
              </IconLink>
              <IconLink href="mailto:mashkanta.mishtalemet@gmail.com" color="#DB4437">
                <FontAwesomeIcon icon={faEnvelope} />
              </IconLink>
              <IconLink href="https://wa.me/972508857282" target="_blank" rel="noopener noreferrer" color="#25D366">
                <FontAwesomeIcon icon={faWhatsapp} />
              </IconLink>
              <IconLink href="https://www.facebook.com/mashkanta.experience" target="_blank" rel="noopener noreferrer" color="#4267B2">
                <FontAwesomeIcon icon={faFacebook} />
              </IconLink>
            </IconsContainer>

            <FormContainer>
              <h2>שלח לנו הודעה</h2>
              <ContactForm onSubmit={handleSubmit}>
                <InlineFields>
                  <FormLabel>
                    שם
                    <FormInput name="name" type="text" placeholder="הכנס את שמך" required />
                  </FormLabel>
                  <FormLabel>
                    מספר טלפון
                    <FormInput name="phone" type="tel" placeholder="הכנס את מספר הטלפון שלך" required />
                  </FormLabel>
                </InlineFields>
                <MessageLabel>
                  הודעה
                  <MessageTextarea name="message" placeholder="הכנס את הודעתך" />
                </MessageLabel>
                <SubmitButton type="submit">שלח</SubmitButton>
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
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 15px;
`;

const ModalContainer = styled.div`
  background: linear-gradient(145deg, #ffffff, #f1f4f8);
  padding: 30px 20px;
  width: 100%;
  max-width: 450px;
  border-radius: 15px;
  position: relative;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  direction: rtl;

  @media (max-width: 450px) {
    padding: 20px 15px;
    max-width: 90%;
    border-radius: 10px;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;

  &:hover {
    color: #f44336;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  gap: 10px;

  @media (max-width: 450px) {
    gap: 5px;
    margin: 15px 0;
  }
`;

const IconLink = styled.a`
  background-color: ${({ color }) => color};
  color: white;
  font-size: 1.5rem;
  padding: 12px;
  border-radius: 50%;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 450px) {
    font-size: 1.2rem;
    padding: 10px;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  h2 {
    font-size: 1.6rem;
    color: #1b263b;
    margin-bottom: 15px;
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 1.4rem;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InlineFields = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const FormLabel = styled.label`
  font-size: 1rem;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`;

const FormInput = styled.input`
  padding: 10px;
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
  gap: 5px;
`;

const MessageTextarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  resize: vertical;
  height: 80px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #fcbf49;
    outline: none;
  }
`;

const SubmitButton = styled.button`

  background: linear-gradient(90deg, #0076d6, #0056a6);
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #f0a500;
    transform: scale(1.05);
  }
`;

const ThankYouMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #1b263b;

  h2 {
    font-size: 1.6rem;
    color: #1b263b;
  }

  p {
    font-size: 0.9rem;
    color: #333;
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 1.4rem;
    }
  }
`;

export default ContactModal;
