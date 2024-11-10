// ArticleDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import articles from '../data/articlesData';

const ArticleDetail = () => {
  const { id } = useParams();
  const articleMeta = articles.find((article) => article.id === parseInt(id, 10));
  const [articleContent, setArticleContent] = useState(null);

  useEffect(() => {
    if (articleMeta) {
      import(`../data/articlesContent/${id}.js`)
        .then((module) => setArticleContent(module.default))
        .catch((error) => console.error("Error loading article content:", error));
    }
  }, [id, articleMeta]);

  if (!articleMeta) return <p>Article not found.</p>;

  return (
    <ArticleDetailContainer>
      <Image src={articleMeta.image} alt={articleMeta.title} />
      <Title>{articleMeta.title}</Title>
      <Description>{articleMeta.description}</Description>
      {articleContent ? (
        <Content dangerouslySetInnerHTML={{ __html: articleContent.content }} />
      ) : (
        <p>Loading content...</p>
      )}
    </ArticleDetailContainer>
  );
};

// Styled components
const ArticleDetailContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  text-align: left;
  direction: rtl; /* Set direction to RTL */
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
  text-align: right;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
  text-align: right;
`;

const Content = styled.div`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
  text-align: right;
`;

export default ArticleDetail;
