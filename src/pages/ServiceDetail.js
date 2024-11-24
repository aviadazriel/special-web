import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import servicesData from '../data/servicesData';
import CallToAction from '../components/CallToAction';

const ServiceDetail = () => {
  const { id } = useParams();
  const serviceMeta = servicesData.find((service) => service.id === parseInt(id, 10));
  const [serviceContent, setServiceContent] = useState(null);

  useEffect(() => {
    if (serviceMeta) {
      import(`../data/serviceContent/${id}.js`)
        .then((module) => setServiceContent(module.default))
        .catch((error) => console.error('Error loading service content:', error));
    }
  }, [id, serviceMeta]);

  if (!serviceMeta) return <p>שירות לא נמצא.</p>;

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
        <Loader>טוען תוכן...</Loader>
      )}
      <ContactButtonContainer>
        <CallToAction />
      </ContactButtonContainer>
    </ServiceDetailContainer>
  );
};

// רכיבי עיצוב מעודכנים
const ServiceDetailContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  direction: rtl;
  font-family: 'Assistant', sans-serif;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #0d1b2a;
  margin-bottom: 15px;
  text-align: right;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555555;
  text-align: right;
  margin-bottom: 20px;
`;

const Content = styled.div`
  font-size: 18px;
  line-height: 1.8;
  color: #333333;
  text-align: right;

  h1, h2, h3 {
    margin-bottom: 15px;
    color: #19508bed;
    font-size: 1.5rem;
  }

  ul {
    list-style: disc inside;
    margin: 10px 0;
  }

  ul li {
    margin-bottom: 10px;
  }

  .call-to-action {
    margin-top: 30px;
    padding: 20px;
    background-color: #f7f9fc;
    text-align: center;
    border-radius: 8px;
  }
`;

const Loader = styled.div`
  text-align: center;
  font-size: 20px;
  color: #888888;
`;

const ContactButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export default ServiceDetail;
