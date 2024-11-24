import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        'service_57fj4n9', 
        'template_i1vru3k', 
        formData,
        'wFi9VAP5cqkrjZKFw'
      )
      .then(
        () => {
          alert('ההודעה נשלחה בהצלחה!');
          setFormData({ name: '', email: '', phone: '', message: '' });
          setIsSending(false);
        },
        (error) => {
          alert('שליחת ההודעה נכשלה. נסה שוב מאוחר יותר.');
          console.error('Error:', error);
          setIsSending(false);
        }
      );
  };

  return (
    <ContactContainer>
      <h1>יצירת קשר</h1>

      {/* Contact Icons Section */}
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

      {/* Contact Form Section */}
      <FormContainer>
        <h2>השארת פרטים</h2>
        <ContactForm onSubmit={handleSubmit}>
          <FormLabel>
            שם מלא
            <FormInput
              name="name"
              type="text"
              placeholder="הכנס את שמך המלא"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormLabel>
          <TwoColumns>
            <FormLabel>
              טלפון
              <FormInput
                name="phone"
                type="tel"
                placeholder="הכנס את מספר הטלפון שלך"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormLabel>
            <FormLabel>
              אימייל
              <FormInput
                name="email"
                type="email"
                placeholder="הכנס את כתובת האימייל שלך"
                value={formData.email}
                onChange={handleChange}
              />
            </FormLabel>
          </TwoColumns>
          <FormLabel>
            הודעה
            <FormTextarea
              name="message"
              placeholder="אנא כתוב את הודעתך כאן (אופציונלי)"
              value={formData.message}
              onChange={handleChange}
            />
          </FormLabel>
          <SubmitButton type="submit" disabled={isSending}>
            {isSending ? 'שולח...' : 'שלח הודעה'}
          </SubmitButton>
        </ContactForm>
      </FormContainer>
    </ContactContainer>
  );
};

// Styled Components
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 900px;
  margin: auto;
  text-align: center;
  background: linear-gradient(180deg, #ffffff, #f3f4f6);
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.8rem;
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
  max-width: 600px;
`;

const IconLink = styled.a`
  color: ${({ color }) => color};
  font-size: 4rem;
  transition: transform 0.3s, color 0.3s;
  text-decoration: none;

  &:hover {
    transform: scale(1.3);
    color: ${({ color }) => color};
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: right;

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

const TwoColumns = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const FormLabel = styled.label`
  font-size: 1.2rem;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const FormInput = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  width: 100%;

  &:focus {
    border-color: #fcbf49;
    outline: none;
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
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
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0a500;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

export default ContactUs;
