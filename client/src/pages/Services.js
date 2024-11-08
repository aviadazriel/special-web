import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard';
import services from '../data/servicesData'; // Import services data

const Services = () => (
  <Container>
    {services.map(service => (
      <ServiceCard
        key={service.id}
        title={service.title}
        description={service.description}
        image={service.image}
      />
    ))}
  </Container>
);

export default Services;

// Styled Components
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;
