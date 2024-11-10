// Services.js
import React from 'react';
import ServiceList from '../components/ServiceList';
import services from '../data/servicesData';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div>
      <h2>השירותים שלנו</h2>
      <ServiceList services={services} onCardClick={handleServiceClick} />
    </div>
  );
};

export default Services;
