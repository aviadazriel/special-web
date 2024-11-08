// RealEstateNewsPage.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import news from '../data/newsData'; // Import articles data


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
`;

const Title = styled.h1`
font-size: 2.5rem;
color: #0d1b2a;
margin-bottom: 10px;
`;

const Subtitle = styled.p`
font-size: 1.2rem;
color: #4f5d75;
margin-bottom: 30px;
`;

const ArticleList = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 30px;
align-items: start;

@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
`;
const Description = styled.p`
font-size: 0.9rem;
color: #4f5d75;
margin: 5px 0 10px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
transition: white-space 0.3s;
overflow: visible;
  white-space: normal;
`;
const ArticleCard = styled.div`
background: #ffffff;
border-radius: 15px;
padding: 20px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
display: flex;
align-items: flex-start;
gap: 20px;
position: relative;
transition: transform 0.3s, box-shadow 0.3s;
height: 220px;
overflow: hidden;

&:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  height: auto; /* Expands height on hover to show full description */
}

&:hover ${Description} {
  overflow: visible;
  white-space: normal;
}
`;

const ImageContainer = styled.div`
flex-shrink: 0;
`;

const ArticleImage = styled.img`
width: 120px;
height: 120px;
border-radius: 10px;
object-fit: cover;
`;

const Content = styled.div`
text-align: left;
flex-grow: 1;
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
`;



const PublishDate = styled.p`
font-size: 0.8rem;
color: #999;
margin: 5px 0;
`;

const ReadMore = styled.a`
display: inline-block;
background-color: #fcbf49;
color: #0d1b2a;
padding: 8px 16px;
font-weight: bold;
border-radius: 20px;
text-decoration: none;
transition: background-color 0.3s;
align-self: flex-start;
margin-top: auto;

&:hover {
  background-color: #f0a500;
}
`;

export default RealEstateNewsPage;