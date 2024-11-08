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
        כדי לספק לך את כל מה שאתה צריך לדעת על משכנתאות, אסטרטגיות חיסכון, ותכנון פיננסי.
        מאמרים אלו נכתבו מתוך שאיפה לשתף ידע מקיף ולסייע לך לקבל את ההחלטות הפיננסיות הטובות ביותר.
      </IntroParagraph>

      <ArticlesGrid>
        {articles.map((article) => (
          <ArticleCard key={article.id} onClick={() => handleCardClick(article.id)}>
            <ImageWrapper>
              <ArticleImage src={article.image} alt={article.title} />
            </ImageWrapper>
            <ArticleContent>
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
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  justify-content: center;
`;

const Logo = styled.img`
  max-height: 200px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const TitleSection = styled.div`
  text-align: left;
`;

const PageHeader = styled.h1`
  font-size: 2.5rem;
  color: #1a2c3d;
  font-weight: bold;
  margin: 0;
`;

const PageSubHeader = styled.p`
  font-size: 1.2rem;
  color: #444;
  margin-top: 10px;
`;

const IntroParagraph = styled.p`
  font-size: 1.2rem;
  color: #4a4a4a;
  text-align: center;
  line-height: 1.6;
  max-width: 800px;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const ArticleCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  height: 180px;
  overflow: hidden;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;

  ${ArticleCard}:hover & {
    transform: scale(1.05);
  }
`;

const ArticleContent = styled.div`
  padding: 15px;
  text-align: left;
`;

const ArticleTitle = styled.h2`
  font-size: 1.4rem;
  color: #1a2c3d;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ArticleDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.4;
`;

export default Articles;
