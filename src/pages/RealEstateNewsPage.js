import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import news from '../data/newsData';

const RealEstateNewsPage = () => (
    <PageContainer>
      <Title>חדשות נדל"ן בישראל</Title>
      <Subtitle>כתבות ומאמרים עדכניים בנושא נדל"ן והשקעות בישראל</Subtitle>
      <ArticleList>
        {news.map((article) => (
          <ArticleCard key={article.id}>
            <ImageContainer>
              <ArticleImage src={article.imageUrl} alt="Article" />
            </ImageContainer>
            <Content>
              <SourceIcon>
                <FontAwesomeIcon icon={faNewspaper} />
              </SourceIcon>
              <ArticleTitle>{article.title}</ArticleTitle>
              <Description>{article.description}</Description>
              <PublishDate>תאריך פרסום: {new Date(article.publishDate).toLocaleDateString('he-IL')}</PublishDate>
              <ReadMore href={article.link} target="_blank" rel="noopener noreferrer">
                קרא עוד
              </ReadMore>
            </Content>
          </ArticleCard>
        ))}
      </ArticleList>
    </PageContainer>
  );
  
// Styled Components
const PageContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  text-align: center;
  color: #1b263b;
  direction: rtl;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #0d1b2a;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #4f5d75;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const ArticleList = styled.div`
  display: grid;
  gap: 30px;
  align-items: stretch; /* Ensures all cards have the same height */

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ArticleCard = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  gap: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;
  min-height: 250px; /* Ensures consistent height for all cards */
  justify-content: flex-start;
  text-align: right;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: auto; /* Removes height limit on mobile */
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const ArticleImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const SourceIcon = styled.div`
  font-size: 1.2rem;
  color: #fcbf49;
  margin-bottom: 5px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #1b263b;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #4f5d75;
  margin: 5px 0 10px;
  
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    -webkit-line-clamp: unset;
    display: block;
    white-space: normal;
  }
`;

const PublishDate = styled.p`
  font-size: 0.8rem;
  color: #999;
  margin: 5px 0;
`;

const ReadMore = styled.a`
  align-self: flex-start;
  display: inline-block;
  background-color: #fcbf49;
  color: #0d1b2a;
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 20px;
  text-decoration: none;
  transition: background-color 0.3s;
  font-size: 0.9rem;

  &:hover {
    background-color: #f0a500;
  }

  @media (max-width: 600px) {
    padding: 6px 12px;
  }
`;

export default RealEstateNewsPage;
