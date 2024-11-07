// ArticleDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import articles from '../data/articlesData'; // Import articles data

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));
  const navigate = useNavigate();

  if (!article) return <p>Article not found.</p>;

  return (
    <ArticleDetailContainer>
      <BackButton onClick={() => navigate(-1)}>← Back to Articles</BackButton>
      <Image src={article.image} alt={article.title} />
      <Title>{article.title}</Title>
      <Description>{article.description}</Description>
      <Content>{article.content}</Content>
    </ArticleDetailContainer>
  );
};

// Styled components for ArticleDetail (as before)

// Styled components for ArticleDetail
const ArticleDetailContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  text-align: left;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #007BFF;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #1b263b;
  margin-bottom: 20px;
`;


const Description = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
`;
const Content = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
`;

export default ArticleDetail;