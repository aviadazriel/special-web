import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <CallToActionContainer>
      <TextContainer>
        <h3>בואו נעשה את זה ביחד!</h3>
        <p>
          צרו קשר עוד היום וגלו כיצד נוכל לעזור לכם להתמודד עם סירוב למשכנתא ולהשיג את המימון הדרוש
          לכם.
        </p>
      </TextContainer>
      <StyledButton to="/contact">צרו קשר עכשיו</StyledButton>
    </CallToActionContainer>
  );
};

const CallToActionContainer = styled.div`
  margin-top: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #f7f9fc 0%, #eef4fa 100%);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  direction: rtl;
`;

const TextContainer = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 28px;
    color: #0d1b2a;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: #555555;
    line-height: 1.6;
  }
`;

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  background: linear-gradient(90deg, #61ce70 0%, #45a045 100%);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(90deg, #45a045 0%, #388a3a 100%);
    transform: scale(1.05);
  }
`;

export default CallToAction;
