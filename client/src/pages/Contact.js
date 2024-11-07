import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';

const Contact = () => (
  <ContactWrapper>
    <HeaderWrapper>
      <ContactHeader>Contact Us</ContactHeader>
      <SubHeader>We’re here to help. Reach out and let’s talk about how we can assist you.</SubHeader>
    </HeaderWrapper>
    
    <ContentContainer>
      <ContactForm />
      <ContactInfo>
        <InfoTitle>Reach Us At</InfoTitle>
        <InfoItem>
          <Icon>📞</Icon> +1 (555) 123-4567
        </InfoItem>
        <InfoItem>
          <Icon>📧</Icon> support@premiumconsult.com
        </InfoItem>
        <SocialLinks>
          <SocialLink href="https://facebook.com">🌐 Facebook</SocialLink>
          <SocialLink href="https://twitter.com">🌐 Twitter</SocialLink>
          <SocialLink href="https://linkedin.com">🌐 LinkedIn</SocialLink>
        </SocialLinks>
      </ContactInfo>
    </ContentContainer>
  </ContactWrapper>
);

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #F2F4F5;
`;

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
  max-width: 600px;
`;

const ContactHeader = styled.h2`
  font-size: 2.5rem;
  color: #0D1B2A;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

const SubHeader = styled.p`
  font-size: 1.2rem;
  color: #4A4A4A;
  line-height: 1.6;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 900px;
  align-items: center;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const ContactInfo = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  color: #0D1B2A;
  margin-bottom: 20px;
  font-weight: 600;
`;

const InfoItem = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.span`
  font-size: 1.3rem;
  margin-right: 10px;
  color: #FFD700;
`;

const SocialLinks = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: #0D1B2A;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    color: #FFD700;
    text-decoration: underline;
  }
`;

export default Contact;
