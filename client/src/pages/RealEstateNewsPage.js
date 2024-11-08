// RealEstateNewsPage.js
import React from 'react';
import styled from 'styled-components';

const articles = [
  { id: 1, title: 'הדירות החדשות בת"א מגיעות במחירים מפתיעים', link: 'https://www.calcalist.co.il/real-estate/article/r1ens4yzke' },
  { id: 2, title: 'שוק הנדל"ן בתנודתיות: מה צופן העתיד?', link: 'https://www.calcalist.co.il/investing/article/rjegyri70' },
  { id: 3, title: 'תחזיות כלכליות לשוק הדיור בישראל', link: 'https://www.calcalist.co.il/investing/article/hyb8hnokje' },
  { id: 4, title: 'ירידות מחירים משמעותיות: האם מדובר במגמה?', link: 'https://www.globes.co.il/news/article.aspx?did=1001493211' },
  { id: 5, title: 'משקיעים ותיקים משנים גישה בשוק', link: 'https://www.calcalist.co.il/article/r1hoki1w1e' },
  { id: 6, title: 'דעות חדשות על שוק הנדל"ן בשנה הקרובה', link: 'https://www.ynet.co.il/economy/article/sjxfcy7dr' },
  { id: 7, title: 'ההשפעות הכלכליות של מגמת העליות בהשקעות נדל"ן', link: 'https://www.israelhayom.co.il/business/article/16446438' }
];

const RealEstateNewsPage = () => (
  <PageContainer>
    <Title>חדשות נדל"ן בישראל</Title>
    <Subtitle>כתבות ומאמרים עדכניים בנושא נדל"ן והשקעות בישראל</Subtitle>
    <ArticleList>
      {articles.map((article) => (
        <ArticleCard key={article.id}>
          <ArticleTitle href={article.link} target="_blank" rel="noopener noreferrer">
            {article.title}
          </ArticleTitle>
          <ReadMore href={article.link} target="_blank" rel="noopener noreferrer">
            קרא עוד
          </ReadMore>
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const ArticleCard = styled.div`
  background: #f7f9fc;
  border-radius: 10px;
  padding: 20px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArticleTitle = styled.a`
  font-size: 1.1rem;
  font-weight: bold;
  color: #1b263b;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #fcbf49;
  }
`;

const ReadMore = styled.a`
  font-size: 0.9rem;
  color: #fcbf49;
  text-decoration: underline;
  transition: color 0.2s;

  &:hover {
    color: #e0a500;
  }
`;

export default RealEstateNewsPage;
