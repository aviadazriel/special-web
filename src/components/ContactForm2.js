import React from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  return (
    <FormContainer>
      <FormTitle>צור קשר</FormTitle>
      <FormDescription>מלא את הטופס וקבל ייעוץ מקצועי במשכנתאות.</FormDescription>
      <form>
        <FormGroup>
          <Label htmlFor="name">שם מלא</Label>
          <Input type="text" id="name" placeholder="הכנס את שמך המלא" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">טלפון</Label>
          <Input type="tel" id="phone" placeholder="הכנס את מספר הטלפון" required pattern="\d*" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">אימייל</Label>
          <Input type="email" id="email" placeholder="הכנס את כתובת האימייל" />
        </FormGroup>
        <SubmitButton type="submit">שלח</SubmitButton>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  position: fixed;
  top: 120px;
  left: 20px; /* שינוי לצד שמאל */
  width: 300px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    position: static;
    margin: 20px 0;
    width: 100%;
    box-shadow: none;
  }
`;

const FormTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  text-align: right; /* יישור לימין */
`;

const FormDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  text-align: right; /* יישור לימין */
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
  text-align: right; /* יישור לימין */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: right; /* יישור לימין */

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ContactForm;
