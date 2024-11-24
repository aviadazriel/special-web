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
        .catch((error) => console.error('Error loading service content:', error));
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

// Styled components with styles from the provided CSS
const ServiceDetailContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  text-align: left;
  direction: rtl;
  font-size: 18px;
  line-height: 1.6;
  color: #434242;
  background: linear-gradient(180deg, #fff 0%, #d1d1d1 100%);
  box-shadow: 6px 6px 9px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 42px; /* --wp--preset--font-size--huge */
  color: #0d1b2a;
  margin-bottom: 20px;
  text-align: right;
`;

const Description = styled.p`
  font-size: 16px; /* --wp--preset--font-size--normal */
  line-height: 1.8;
  color: #7a7a7a; /* --e-global-color-text */
  text-align: right;
`;

const Content = styled.div`
  font-size: 16px; /* --wp--preset--font-size--normal */
  line-height: 1.8;
  color: #7a7a7a;
   text-align: right;

  h1 {
    color: #19508bed; /* Vivid orange for h1 */
    font-size: 42px; /* --wp--preset--font-size--huge */
    margin-bottom: 15px;
  }

  h2 {
    color: #19508bed; /* Vivid green-cyan for h2 */
    font-size: 36px; /* --wp--preset--font-size--large */
    margin-bottom: 15px;
  }

  h3 {
    color: #19508bed; /* Vivid cyan-blue for h3 */
    font-size: 32px;
    margin-bottom: 10px;
  }

  ul {
    list-style: disc inside;
    margin: 10px 0;
  }

  ul li {
    margin-bottom: 10px;
    font-size: 16px;
  }

  .call-to-action {
    margin-top: 30px;
    padding: 20px;
    background-color: #f7f9fc;
    text-align: center;
    border-radius: 8px;

    a.cta-button {
      display: inline-block;
      margin-top: 10px;
      padding: 10px 20px;
      background-color: #61ce70; /* --e-global-color-accent */
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-size: 20px; /* --wp--preset--font-size--medium */
    }

    a.cta-button:hover {
      background-color: #45a045;
    }
  }
`;

const Loader = styled.div`
  text-align: center;
  font-size: 20px; /* --wp--preset--font-size--medium */
  color: #888;
  margin: 20px 0;
`;

export default ServiceDetail;
