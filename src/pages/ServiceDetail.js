import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import servicesData from '../data/servicesData';

const ServiceDetail = () => {
  const { id } = useParams();
  const serviceMeta = servicesData.find((service) => service.id === parseInt(id, 10));
  const [serviceContent, setServiceContent] = useState(null);

  useEffect(() => {
    if (serviceMeta) {
      import(`../data/serviceContent/${id}.js`)
        .then((module) => setServiceContent(module.default))
        .catch((error) => console.error("Error loading service content:", error));
    }
  }, [id, serviceMeta]);

  if (!serviceMeta) return <p>Service not found.</p>;

  const sanitizedContent = serviceContent
    ? DOMPurify.sanitize(serviceContent.content)
    : null;


      

  return (
    <ServiceDetailContainer>
      <Image src={serviceMeta.image} alt={serviceMeta.title} />
      <Title>{serviceMeta.title}</Title>
      <Description>{serviceMeta.description}</Description>
      {serviceContent ? (
        <Content dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
      ) : (
        <Loader>Loading content...</Loader>
      )}
    </ServiceDetailContainer>
  );
};

// Styled components
const ServiceDetailContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  text-align: left;
  direction: rtl;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #1b263b;
  margin-bottom: 20px;
  text-align: right;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
  text-align: right;
`;

const Content = styled.div`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
  text-align: right;
`;

const Loader = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #888;
  margin: 20px 0;
`;







export default ServiceDetail;
