import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputField
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <InputField
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextAreaField
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <SubmitButton type="submit">Send Message</SubmitButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  }
`;

const InputField = styled.input`
  padding: 15px;
  margin: 12px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
  }
`;

const TextAreaField = styled.textarea`
  padding: 15px;
  margin: 12px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
  }
`;

const SubmitButton = styled.button`
  background-color: #0D1B2A;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #FFD700;
    color: #0D1B2A;
    transform: scale(1.05);
  }
`;

export default ContactForm;
