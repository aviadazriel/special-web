

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import articles from '../data/articlesData'; // Import articles data

const Articles = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <ArticlesContainer>
      <Header>
        <Logo src="https://example.com/your-logo.png" alt="Company Logo" />
        <TitleSection>
          <PageHeader>Our Blog</PageHeader>
          <PageSubHeader>Insights and tips to help you navigate your mortgage journey</PageSubHeader>
        </TitleSection>
      </Header>
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
  background-color: #f4f8fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  text-align: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
`;

const TitleSection = styled.div`
  text-align: left;
`;

const PageHeader = styled.h1`
  font-size: 3rem;
  color: #1b263b;
  font-weight: bold;
  margin: 0;
`;

const PageSubHeader = styled.p`
  font-size: 1.4rem;
  color: #555;
  margin-top: 10px;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const ArticleCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  height: 200px;
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
  padding: 20px;
  text-align: left;
`;

const ArticleTitle = styled.h2`
  font-size: 1.6rem;
  color: #1b263b;
  margin-bottom: 8px;
  font-weight: bold;
`;

const ArticleDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

export default Articles;
