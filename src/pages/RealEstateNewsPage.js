import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import news from '../data/newsData';
let calcalist = "https://play-lh.googleusercontent.com/7MEJ_P39r3Jd99MS8kkMtyPbvWu-jgzSdwAvxKp4EMDmol1KljtEftuGcDbkUorVWa8=w240-h480-rw"
let globes = "data:image/png;base64,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";
let ynet = "data:image/jpeg;base64,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";
let ih = "data:image/png;base64,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";
let walla = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjLO8Ry8POi4HC_-12egC2Ns6vbJISoeWxtND9kCKZEiXfWGNp8L4d3_M15oCzs0DLogw&usqp=CAU";
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
                <img
                  src={article.source === "Globes"
                    ? globes
                    : article.source === "Calcalist"
                    ? calcalist
                    : article.source === "Ynet"
                    ? ynet
                    : article.source === "IH"
                    ? ih
                    : article.source === "Walla"
                    ? walla
                    : calcalist }
                  alt="Source Icon"
                  style={{ width: '24px', height: '24px', borderRadius: '50%', marginRight: '8px' }}
                />
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
     gap: 2px;
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
  display: flex;
      align-items: center;


    @media (max-width: 768px) {
      justify-content: center;
  }

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
  align-self: end;
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
    align-self: center;
  }
`;

export default RealEstateNewsPage;
