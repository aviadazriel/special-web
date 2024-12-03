import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import servicesData from '../data/servicesData';
import CallToAction from '../components/CallToAction';
import { Link } from 'react-router-dom';

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

  if (!serviceMeta) return <NotFound>שירות לא נמצא.</NotFound>;

  const sanitizedContent = serviceContent
    ? DOMPurify.sanitize(serviceContent.content)
    : null;

  return (
    <>
      <Breadcrumb serviceName={serviceMeta.title} />
      <ServiceDetailContainer>
      <ImageWrapper>
    <Image src={serviceMeta.image} alt={serviceMeta.title} />
  </ImageWrapper>

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
    </>
  );
};

// Breadcrumb Component
const Breadcrumb = ({ serviceName }) => (
  <BreadcrumbContainer>
    <BreadcrumbContent>
      <StyledLink to="/">ייעוץ משכנתאות</StyledLink>
      <Arrow>›</Arrow>
      <StyledLink to="/services">שירותים</StyledLink>
      <Arrow>›</Arrow>
      <CurrentService>{serviceName}</CurrentService>
    </BreadcrumbContent>
  </BreadcrumbContainer>
);

// Styled Components
const BreadcrumbContainer = styled.div`
  background: #f4f6f8;
  padding: 15px 25px;
  color: #2c3e50;
  border-bottom: 2px solid #dcdfe6;
`;

const BreadcrumbContent = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Arrow = styled.span`
  color: #95a5a6;
`;

const StyledLink = styled(Link)`
  color: #3498db;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CurrentService = styled.span`
  font-weight: bold;
  color: #34495e;
`;

const ServiceDetailContainer = styled.div`
  max-width: 900px;
  margin: 30px auto;
  padding: 20px;
  font-family: 'Assistant', sans-serif;
  background: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: inherit;
  border-radius: 12px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555555;
  text-align: center;
`;

const Content = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #333333;
  text-align: right;

  h1, h2, h3 {
    margin-bottom: 15px;
    color: #19508b;
  }

  ul {
    list-style: disc inside;
    margin: 10px 0;
  }

  ul li {
    margin-bottom: 8px;
  }
`;

const Loader = styled.div`
  text-align: center;
  font-size: 18px;
  color: #888888;
  margin-top: 20px;
`;

const ContactButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const NotFound = styled.div`
  text-align: center;
  font-size: 20px;
  color: #e74c3c;
  margin: 50px;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* יחס גובה-רוחב 16:9 */
  overflow: hidden;
  border-radius: 12px;
  background: #f4f4f4; /* צבע רקע במידה ואין תמונה */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;
export default ServiceDetail;
