import React from 'react';
import styled from 'styled-components';
import ArticleCard from '../components/ArticleCard';

const ArticlePage = () => (
  <PageContainer>
    <h1>Latest Articles</h1>
    <ArticleGrid>
      <ArticleCard
        title="Understanding Mortgage Basics"
        summary="An in-depth look at mortgage basics to help you make informed decisions."
        image="https://example.com/path-to-article-image1.jpg"
      />
      <ArticleCard
        title="Refinancing: Is It Right for You?"
        summary="Learn about the pros and cons of refinancing your mortgage."
        image="https://example.com/path-to-article-image2.jpg"
      />
      <ArticleCard
        title="Debt Management Strategies"
        summary="Effective debt consolidation and management strategies."
        image="https://example.com/path-to-article-image3.jpg"
      />
      <ArticleCard
        title="First-Time Homebuyer Tips"
        summary="Key advice for first-time homebuyers entering the market."
        image="https://example.com/path-to-article-image4.jpg"
      />
      {/* Add more ArticleCards as needed */}
    </ArticleGrid>
  </PageContainer>
);

// Styled Components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #0d1b2a;
    margin-bottom: 20px;
  }
`;

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export default ArticlePage;
