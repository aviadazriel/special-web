import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import articles from '../data/articlesData';

const Articles = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <ArticlesContainer>
      <Header>
        <Logo src={`${process.env.PUBLIC_URL}/MAIN_LOGO.png`} alt="Company Logo" />
        <TitleSection>
          <PageHeader>הבלוג שלנו</PageHeader>
          <PageSubHeader>תובנות וטיפים שיעזרו לך לנווט את מסע המשכנתא</PageSubHeader>
        </TitleSection>
      </Header>
      
      <IntroParagraph>
        עם ניסיון וידע עשיר בתחום המשכנתאות והפיננסים, יצרנו את דף המאמרים הזה
        כדי לספק לך את כל מה שאתה צריך לדעת על משכנתאות, אסטרטגיות חיסכון ותכנון פיננסי.
        מאמרים אלו נכתבו מתוך שאיפה לשתף ידע מקיף ולסייע לך לקבל את ההחלטות הפיננסיות הטובות ביותר.
      </IntroParagraph>

      <ArticlesGrid>
        {articles.map((article) => (
          <ArticleCard key={article.id} onClick={() => handleCardClick(article.id)}>
            <HoverImage src={article.image} alt={article.title} />
            <ArticleContent>
              <ArticleDate>{article.date}</ArticleDate>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleDescription>{article.description}</ArticleDescription>
            </ArticleContent>
          </ArticleCard>
        ))}
      </ArticlesGrid>
    </ArticlesContainer>
  );
};

// Styled Components
const ArticlesContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 40px 20px;
  background-color: #f9fbfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 20px 10px;
    gap: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const Logo = styled.img`
  max-height: 200px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-height: 150px;
  }
`;

const TitleSection = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const PageHeader = styled.h1`
  font-size: 2.5rem;
  color: #1a2c3d;
  font-weight: bold;
  margin: 0;
  direction: rtl; 
  text-align: right;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const PageSubHeader = styled.p`
  font-size: 1.2rem;
  color: #444;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const IntroParagraph = styled.p`
  font-size: 1.2rem;
  color: #4a4a4a;
  text-align: center;
  line-height: 1.6;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const HoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;
const ArticleCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  padding: 20px;
  border-left: 3px solid #fcbf49;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  &:hover ${HoverImage} {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;


const ArticleContent = styled.div`
  padding: 15px;
  text-align: right;
  direction: rtl;
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ArticleDate = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin: 0 0 10px 0;
  text-align: right;
  direction: rtl;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ArticleTitle = styled.h2`
  font-size: 1.4rem;
  color: #1a2c3d;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: right;
  direction: rtl;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ArticleDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.4;
  text-align: right;
  direction: rtl;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export default Articles;
