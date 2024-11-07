import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import articles from '../data/articlesData'; // Import articles data

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Current index for article carousel
  const navigate = useNavigate();

  const handleArticleClick = (id) => {
    navigate(`/article/${id}`);
  };

  const handleViewAllArticlesClick = () => {
    navigate('/articles'); // Navigate to All Articles page
  };

  const visibleArticles = articles.slice(currentIndex, currentIndex + 3);

  // Handle navigation within the carousel
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < articles.length ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : articles.length - 3
    );
  };

  const handleConsultationClick = () => {
    navigate('/contact'); // Navigate to Contact Us page
  };


  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(true);
  };
  return (
  <HomeContainer>
    {/* Hero Section */}
    <HeroSection>
      <HeroText>
        <h1>Welcome to Mortgage Consultancy</h1>
        <p>Your trusted partner in navigating mortgage financing and achieving financial peace of mind.</p>
        <HeroButton onClick={handleConsultationClick}>Get Your Free Consultation</HeroButton>
      </HeroText>
    </HeroSection>

    {/* About Us Section */}
    <AboutSection>
      <h2>About Us</h2>
      <p>
        With years of experience in the mortgage industry, we provide tailored advice to help you make informed financial
        decisions. Our personalized service, in-depth knowledge, and commitment to your goals make us the right partner
        in your mortgage journey.
      </p>
    </AboutSection>

    {/* Services Section */}
    <ServicesSection>
      <h2>Our Services</h2>
      <ServiceCards>
        <ServiceCard>
          <ServiceImage src="https://mashkantaguru.co.il/wp-content/uploads/2019/03/mashkanta-hol-430x330.jpg" alt="Mortgage Planning" />
          <h3>Mortgage Planning</h3>
          <p>Detailed planning to align your mortgage with your financial goals.</p>
        </ServiceCard>
        <ServiceCard>
          <ServiceImage src="https://www.hon.co.il/wp-content/uploads/2016/03/mortgage-351x480.jpg" alt="Loan Refinancing" />
          <h3>Loan Refinancing</h3>
          <p>Discover opportunities to lower your interest rates and improve terms.</p>
        </ServiceCard>
        <ServiceCard>
          <ServiceImage src="https://www.hon.co.il/wp-content/uploads/2011/11/%D7%9E%D7%93%D7%A8%D7%99%D7%9A%D7%99-%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA-55x55-1.jpg" alt="Debt Consolidation" />
          <h3>Debt Consolidation</h3>
          <p>Effective strategies to simplify your finances and manage debt.</p>
        </ServiceCard>
      </ServiceCards>
    </ServicesSection>

    {/* Testimonials Section */}
    <TestimonialsSection>
      <h2>What Our Clients Say</h2>
      <TestimonialCard>
        <p>"The team at Mortgage Consultancy made the entire mortgage process so smooth and stress-free. Highly
        recommended!"</p>
        <h4>- Alex R.</h4>
      </TestimonialCard>
      <TestimonialCard>
        <p>"Professional, knowledgeable, and truly dedicated to client success. Thank you for everything!"</p>
        <h4>- Lisa K.</h4>
      </TestimonialCard>
    </TestimonialsSection>

    {/* Articles Section */}
    <ArticlesSection>
        <h2>Latest Articles</h2>
        <ArticleCarousel>
          <Arrow onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Arrow>
          <ArticleGrid>
            {visibleArticles.map((article) => (
              <ArticleCard key={article.id} onClick={() => handleArticleClick(article.id)}>
                <ArticleImage src={article.image} alt={article.title} />
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </ArticleCard>
            ))}
          </ArticleGrid>
          <Arrow onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Arrow>
        </ArticleCarousel>
        <ViewAllLink onClick={handleViewAllArticlesClick}>View All Articles</ViewAllLink>
      </ArticlesSection>

    {/* Call to Action Section */}
    <CTASection>
      <h2>Ready to take control of your mortgage?</h2>
      <CTAButton onClick={handleConsultationClick}>Book Your Free Consultation</CTAButton>
    </CTASection>



    <ContactContainer>
        <h1>Contact Us</h1>

        {/* Contact Icons Section */}
        <IconsContainer>
          <IconLink href="tel:+972508857282" color="#25D366">
            <FontAwesomeIcon icon={faPhone} />
          </IconLink>
          <IconLink href="mailto:contact@premiumconsult.com" color="#DB4437">
            <FontAwesomeIcon icon={faEnvelope} />
          </IconLink>
          <IconLink href="https://wa.me/972508857282" target="_blank" rel="noopener noreferrer" color="#25D366">
            <FontAwesomeIcon icon={faWhatsapp} />
          </IconLink>
          <IconLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" color="#4267B2">
            <FontAwesomeIcon icon={faFacebook} />
          </IconLink>
        </IconsContainer>

        {/* Message or Contact Form */}
        {!showForm ? (
          <MessageContainer onClick={handleFormToggle}>
            Leave Details
          </MessageContainer>
        ) : (
          <FormContainer>
            <h2>Send Us Your Details</h2>
            <ContactForm>
              <InlineFields>
                <FormLabel>
                  Name
                  <FormInput type="text" placeholder="Your Name" required />
                </FormLabel>
                <FormLabel>
                  Phone Number
                  <FormInput type="tel" placeholder="Your Phone Number" required />
                </FormLabel>
              </InlineFields>
              <SubmitButton type="submit">Submit</SubmitButton>
            </ContactForm>
          </FormContainer>
        )}
      </ContactContainer>
  </HomeContainer>
)
  };



const HeroSection = styled.section`
  background: linear-gradient(135deg, #1b263b, #0d1b2a);
  color: white;
  width: 100%;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroText = styled.div`
  max-width: 800px;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    margin-top: 10px;
  }
`;

const HeroButton = styled.button`
  background-color: #fcbf49;
  color: #0d1b2a;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0a500;
  }
`;

const AboutSection = styled.section`
  max-width: 800px;
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #333;
    line-height: 1.6;
  }
`;

const ServicesSection = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const ServiceCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const ServiceCard = styled.div`
  background: #f7f9fc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex: 1 1 30%;
  max-width: 30%;
  text-align: center;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const TestimonialsSection = styled.section`
  max-width: 800px;
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const TestimonialCard = styled.div`
  background: #ffffff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  p {
    font-size: 1rem;
    color: #333;
    font-style: italic;
  }

  h4 {
    font-size: 1rem;
    color: #0d1b2a;
    margin-top: 10px;
  }
`;

const ArticlesSection = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const ArticleCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ArticleGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const Arrow = styled.div`
  cursor: pointer;
  font-size: 2rem;
  color: #0d1b2a;
  transition: color 0.3s;

  &:hover {
    color: #fcbf49;
  }
`;

const ArticleCard = styled.div`
  background: #f7f9fc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  cursor: pointer;

  h3 {
    font-size: 1.2rem;
    margin: 10px 0;
    color: #1b263b;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ViewAllLink = styled.button`
  background: none;
  border: none;
  color: #0d1b2a;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s;

  &:hover {
    color: #fcbf49;
  }
`;





const CTASection = styled.section`
  background: #1b263b;
  color: white;
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const CTAButton = styled.button`
  background-color: #fcbf49;
  color: #0d1b2a;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0a500;
  }
`;


// Styled Components for the Contact Section















// Styled Components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 800px;
  margin: auto;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #1b263b;
    margin-bottom: 20px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 40px;
  width: 100%;
  max-width: 400px;
`;

const IconLink = styled.a`
  color: ${({ color }) => color};
  font-size: 3rem;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.2);
    color: ${({ color }) => color};
  }
`;

const MessageContainer = styled.div`
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  padding: 15px 25px;
  border: 2px solid #fcbf49;
  border-radius: 30px;
  font-weight: bold;
  background-color: #fdf4e3;
  max-width: 300px;
  margin-top: 20px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  text-align: center;

  &:hover {
    background-color: #fcbf49;
    color: #fff;
    transform: scale(1.05);
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: left;
  margin-top: 20px;

  h2 {
    font-size: 2rem;
    color: #1b263b;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InlineFields = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  width: 100%;

  &:focus {
    border-color: #fcbf49;
    outline: none;
  }
`;
const SubmitButton = styled.button`
  background-color: #fcbf49;
  color: #0d1b2a;
  padding: 10px 30px;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  align-self: center;

  &:hover {
    background-color: #f0a500;
    transform: scale(1.05);
  }
`;

export default Home;
