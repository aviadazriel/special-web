// ServiceList.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceList = ({ services, onCardClick, maxColumns = 3 }) => (
  <Container maxColumns={maxColumns}>
    {services.map((service) => (
      <ServiceCard key={service.id} onClick={() => onCardClick(service.id)}>
        <IconContainer>
          <FontAwesomeIcon icon={service.icon} />
        </IconContainer>
        <ServiceTitle>{service.title}</ServiceTitle>
        <ServiceDescription>{service.description}</ServiceDescription>
      </ServiceCard>
    ))}
  </Container>
);

export default ServiceList;

// Styled Components
const Container = styled.div`
width: 100%;
max-width: 1200px; /* או כל ערך שנראה לך מתאים */
margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
  align-items: stretch;
  justify-content: space-between;

  @media (min-width: 768px) {
    grid-template-columns: repeat(${(props) => props.maxColumns}, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const IconContainer = styled.div`
  font-size: 2rem;
  color: #4e73df;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin: 0;
  font-weight: 500;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 10px;
`;
