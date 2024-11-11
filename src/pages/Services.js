// Services.js
import React from 'react';
import ServiceList from '../components/ServiceList';
import services from '../data/servicesData';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div>
      <Title>השירותים שלנו</Title>
      <ServiceList services={services} onCardClick={handleServiceClick} />
    </div>
  );
};

export default Services;


const Title = styled.h2`
  font-size: 2rem;
  color: #0d1b2a;
  text-align: center;
  margin-bottom: 20px;
`;