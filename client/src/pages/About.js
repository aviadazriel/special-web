// AboutUs.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ContactModal from '../components/ContactModal'; // Make sure this path matches the location of your ContactModal component

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AboutContainer>
      {/* Our Story Section */}
      <Section>
        <StoryImage src={`${process.env.PUBLIC_URL}/MAIN_LOGO.png`} alt="Our Story" />
        <TextContainer>
          <h2>Our Story</h2>
          <p>
            Mortgage Consultancy was founded on a simple belief: navigating mortgage financing shouldn't be stressful.
            With over a decade of experience, we’ve helped countless individuals and families make informed financial
            decisions, turning dreams of homeownership into reality. We pride ourselves on our personalized approach
            and unwavering commitment to our clients’ goals.
          </p>
        </TextContainer>
      </Section>

      {/* Our Values Section */}
      <ValuesSection>
        <h2>Our Values</h2>
        <ValuesGrid>
          <ValueCard>
            <h3>Integrity</h3>
            <p>We prioritize transparency and honesty in every interaction, ensuring you feel confident and informed.</p>
          </ValueCard>
          <ValueCard>
            <h3>Dedication</h3>
            <p>Your success is our success. We go the extra mile to find solutions that fit your unique needs.</p>
          </ValueCard>
          <ValueCard>
            <h3>Expertise</h3>
            <p>With years of industry knowledge, we guide you through the mortgage process with clarity and confidence.</p>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>

      {/* Meet the Team Section */}
      <TeamSection>
        <h2>Meet the Team</h2>
        <TeamGrid>
          <TeamMember>
            <MemberImage src="https://cdnstorage.sendbig.com/unreal/female.webp" alt="Alisa Cohen" />
            <h3>Jane Doe</h3>
            <p>Senior Mortgage Advisor</p>
          </TeamMember>
          <TeamMember>
            <MemberImage src="https://www.zmo.ai/wp-content/uploads/2023/03/Feishu20230309-195534-300x300.png" alt="Jonathan Yuval" />
            <h3>John Smith</h3>
            <p>Financial Consultant</p>
          </TeamMember>
          <TeamMember>
            <MemberImage src="https://www.showmetech.com.br/wp-content/uploads//2024/03/imagem_2024-03-25_145108781.png.webp" alt="Team Member 3" />
            <h3>Mary Johnson</h3>
            <p>Client Success Manager</p>
          </TeamMember>
        </TeamGrid>
      </TeamSection>

      {/* Why Choose Us Section */}
      <CTASection>
        <h2>Why Choose Us?</h2>
        <p>
          At Mortgage Consultancy, we don’t just provide services; we build partnerships. Our team is dedicated to your
          success, offering personalized advice, unmatched industry knowledge, and an unwavering commitment to help you
          achieve your financial dreams. When you choose us, you're choosing a partner who truly cares.
        </p>
        <CTAButton onClick={handleOpenModal}>Get in Touch with Us</CTAButton>
      </CTASection>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </AboutContainer>
  );
};

// Styled Components
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  margin: 40px 0;
  text-align: left;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const StoryImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  flex: 1;

  h2 {
    font-size: 2rem;
    color: #1b263b;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
  }
`;

const ValuesSection = styled.section`
  text-align: center;
  margin: 40px 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const ValuesGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ValueCard = styled.div`
  background: #f7f9fc;
  border-radius: 10px;
  padding: 20px;
  max-width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  h3 {
    color: #0d1b2a;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    color: #333;
    font-size: 1rem;
  }
`;

const TeamSection = styled.section`
  text-align: center;
  margin: 40px 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const TeamGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const TeamMember = styled.div`
  text-align: center;
  max-width: 200px;
`;

const MemberImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const CTASection = styled.section`
  background-color: #1b263b;
  color: white;
  text-align: center;
  padding: 40px 20px;
  border-radius: 10px;
  margin: 40px 0;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    margin: 10px 0 20px;
    color: #e0e0e0;
  }
`;

const CTAButton = styled.button`
  background-color: #fcbf49;
  color: #0d1b2a;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0a500;
  }
`;

export default AboutUs;
