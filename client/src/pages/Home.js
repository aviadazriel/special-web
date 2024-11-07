import React from 'react';
import styled from 'styled-components';

const Home = () => (
  <HomeContainer>
    {/* Hero Section */}
    <HeroSection>
      <HeroText>
        <h1>Welcome to Mortgage Consultancy</h1>
        <p>Your trusted partner in navigating mortgage financing and achieving financial peace of mind.</p>
        <HeroButton>Get Your Free Consultation</HeroButton>
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
      <ArticleGrid>
        <ArticleCard>
          <ArticleImage src="https://example.com/path-to-article-image1.jpg" alt="Mortgage Basics" />
          <h3>Understanding Mortgage Basics</h3>
          <p>An in-depth look at mortgage basics to help you make informed decisions.</p>
        </ArticleCard>
        <ArticleCard>
          <ArticleImage src="https://example.com/path-to-article-image2.jpg" alt="Refinancing" />
          <h3>Refinancing: Is It Right for You?</h3>
          <p>Learn about the pros and cons of refinancing your mortgage.</p>
        </ArticleCard>
        <ArticleCard>
          <ArticleImage src="https://example.com/path-to-article-image3.jpg" alt="Debt Management" />
          <h3>Debt Management Strategies</h3>
          <p>Effective debt consolidation and management strategies.</p>
        </ArticleCard>
      </ArticleGrid>
    </ArticlesSection>

    {/* Call to Action Section */}
    <CTASection>
      <h2>Ready to take control of your mortgage?</h2>
      <CTAButton>Book Your Free Consultation</CTAButton>
    </CTASection>
  </HomeContainer>
);

// Styled Components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

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

const ArticleGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const ArticleCard = styled.div`
  background: #f7f9fc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex: 1 1 30%;
  max-width: 30%;
  text-align: center;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
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

export default Home;
