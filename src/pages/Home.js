import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ServiceList from '../components/ServiceList';
import BankCarousel from '../components/BankCarousel';

import articles from '../data/articlesData';
import services from '../data/servicesData';
const testimonials = [
  {
    id: 1,
    text: "הצוות בייעוץ המשכנתאות הפך את תהליך המשכנתא לכל כך חלק וחף מלחצים. מומלץ בחום!",
    author: "אלכס ר.",
    source: "Google",
  },
  {
    id: 2,
    text: "מקצועיים, ידענים ומחויבים להצלחת הלקוח. תודה על הכל!",
    author: "ליסה ק.",
    source: "Facebook",
  },
  {
    id: 3,
    text: "שירות נהדר! הם עזרו לי למצוא את אפשרויות המימון הטובות ביותר בקלות.",
    author: "ג'ון ד.",
    source: "Google",
  },
];

const Home = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [fadeTransition, setFadeTransition] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => navigate(`/services/${serviceId}`);
  const handleArticleClick = (id) => navigate(`/article/${id}`);
  const handleViewAllArticlesClick = () => navigate('/articles');
  const handleConsultationClick = () => navigate('/contact');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeTransition(false);
      setTimeout(() => {
        setCurrentTestimonialIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setFadeTransition(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentTestimonialIndex];
  const visibleArticles = articles.slice(currentIndex, currentIndex + 3);

  const handleNext = () => setCurrentIndex((prevIndex) =>
    prevIndex + 3 < articles.length ? prevIndex + 1 : 0
  );

  const handlePrev = () => setCurrentIndex((prevIndex) =>
    prevIndex > 0 ? prevIndex - 1 : articles.length - 3
  );

  return (
    // {`${process.env.PUBLIC_URL}/family.webp`}
   <HomeContainer>
  


      <HeroSection>
        <Overlay />
        <HeroText>
          <h1>ברוכים הבאים לייעוץ משכנתאות</h1>
          <p>השותף המהימן שלך בניווט מימון המשכנתא והשגת רוגע פיננסי.</p>
          <HeroButton onClick={handleConsultationClick}>קבל ייעוץ חינם</HeroButton>
        </HeroText>
      </HeroSection>

      <AboutSection>
        <h2>אודותינו</h2>
        <p>עם שנים של ניסיון בתחום המשכנתאות, אנו מספקים ייעוץ מותאם אישית כדי לעזור לך לקבל החלטות פיננסיות נכונות.</p>
      </AboutSection>

      <ServicesSection>
        <h2>השירותים שלנו</h2>
        <ServiceList services={services} onCardClick={handleServiceClick} />
      </ServicesSection>

      <TestimonialsSection>
        <h2>מה הלקוחות שלנו אומרים</h2>
        <TestimonialCard fadeTransition={fadeTransition}>
          <PlatformIcon source={currentTestimonial.source}>
            <FontAwesomeIcon icon={currentTestimonial.source === "Google" ? faGoogle : faFacebook} />
          </PlatformIcon>
          <p>"{currentTestimonial.text}"</p>
          <Author>{currentTestimonial.author}</Author>
          <Source>חוות דעת מ- {currentTestimonial.source}</Source>
        </TestimonialCard>
      </TestimonialsSection>

      <ArticlesSection>
        <h2>מאמרים אחרונים</h2>
        <ArticleCarousel>
          <Arrow onClick={handleNext}><FontAwesomeIcon icon={faChevronRight} /></Arrow>
          <ArticleGrid>
            {visibleArticles.map((article) => (
              <ArticleCard key={article.id} onClick={() => handleArticleClick(article.id)}>
                <ArticleImage src={article.image} alt={article.title} />
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </ArticleCard>
            ))}
          </ArticleGrid>
          <Arrow onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft} /></Arrow>
        </ArticleCarousel>
        <ViewAllLink onClick={handleViewAllArticlesClick}>צפה בכל המאמרים</ViewAllLink>
      </ArticlesSection>
      
      <AssociationLogo src="https://hfca.org.il/wp-content/uploads/2021/12/logob@4x-8.png" alt="Association Logo" />
      
      <CarouselSection>
        <h3>גופי מימון</h3>
        <BankCarousel />
      </CarouselSection>

      <CTASection>
        <h2>מוכן לקחת שליטה על המשכנתא שלך?</h2>
        <CTAButton onClick={handleConsultationClick}>קבע פגישה לייעוץ חינם</CTAButton>
        <IconsContainer>
          <IconLink href="tel:+972508857282" color="#4CAF50"><FontAwesomeIcon icon={faPhone} /></IconLink>
          <IconLink href="mailto:contact@premiumconsult.com" color="#DB4437"><FontAwesomeIcon icon={faEnvelope} /></IconLink>
          <IconLink href="https://wa.me/972508857282" target="_blank" rel="noopener noreferrer" color="#4CAF50"><FontAwesomeIcon icon={faWhatsapp} /></IconLink>
          <IconLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" color="#3b5998"><FontAwesomeIcon icon={faFacebook} /></IconLink>
        </IconsContainer>
      </CTASection>
    </HomeContainer>
  );
};


const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5), /* Darker at the top */
    rgba(0, 0, 0, 0.2) /* Lighter at the bottom */
  );
  z-index: 1;
`;
const HeroSection = styled.section`
  position: relative;
  background-image: url(${process.env.PUBLIC_URL}/family2.webp);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  width: 100%;
  height: 80vh; /* Adjust height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(0, 0, 0, 0.6), /* Dark at the top */
      rgba(0, 0, 0, 0.3) /* Lighter at the bottom */
    );
    opacity: 0.7; /* Adjust opacity for desired subtlety */
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 60vh;
    padding: 40px 20px;
  }
`;

const HeroText = styled.div`
  position: relative;
  z-index: 2; /* Ensure text is above overlay */
  max-width: 800px;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    color: #ffffff; /* Ensure text is visible */
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.6); /* Subtle shadow for readability */
  }

  p {
    font-size: 1.2rem;
    margin-top: 10px;
    color: #e0e0e0; /* Slightly lighter text for contrast */
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
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

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.9rem;
  }
`;

// Styled Components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;


const AboutSection = styled.section`
  text-align: center;
  max-width: 800px;
  padding: 40px 20px;

  h2 {
    font-size: 1.8rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;
















const CarouselSection = styled.section`
  width: 100%;
  text-align: center;
  padding: 40px 0;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #1b263b;
  }
`;
const AssociationLogo = styled.img`
  width: 120px;
  height: auto;
  margin-top: 15px;
  margin-bottom: 20px;
`;

  const TestimonialsSection = styled.section`
  max-width: 800px;
  padding: 40px 20px;
  text-align: center;
  margin: auto;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const TestimonialCard = styled.div`
  background: #ffffff;
  padding: 30px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px; /* Increase width for better alignment */
  height: 180px; /* Set consistent height */
  overflow: hidden;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.fadeTransition ? 1 : 0)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  p {
    font-size: 1rem;
    color: #333;
    font-style: italic;
    margin: 0 auto;
    max-width: 90%;
  }
`;

const PlatformIcon = styled.div`
  position: absolute;
  top: 15px; /* Adjusted for visibility */
  left: 20px;
  font-size: 1.5rem;
  color: ${({ source }) => (source === "Google" ? "#DB4437" : "#4267B2")};
`;

const Author = styled.h4`
  font-size: 1rem;
  color: #0d1b2a;
  margin-top: 10px;
`;

const Source = styled.span`
  font-size: 0.8rem;
  color: #888;
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
  background: linear-gradient(135deg, #e8effa, #d4dced);
  color: #1b263b;
  padding: 50px 20px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
  width: 90%;
  max-width: 800px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    font-weight: 600;
  }
`;

const CTAButton = styled.button`
  background: #ffb84d;
  color: #1b263b;
  padding: 12px 25px;
  border: none;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;

  &:hover {
    background: #ff9f1a;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;
`;

const IconLink = styled.a`
  background-color: ${({ color }) => color};
  color: white;
  font-size: 1.8rem;
  padding: 12px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;


export default Home;
