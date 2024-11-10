import React from 'react';
import styled from 'styled-components';

const ServiceCard = ({ title, description, image }) => (
  <CardContainer>
    <Image src={image} alt={title} />
    <CardContent>
      <h3>{title}</h3>
      <p>{description}</p>
    </CardContent>
  </CardContainer>
);

const CardContainer = styled.div`
  background: #f7f9fc;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;

  h3 {
    color: #0d1b2a;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  p {
    color: #333;
    font-size: 1rem;
  }
`;

export default ServiceCard;
