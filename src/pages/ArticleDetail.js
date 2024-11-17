import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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

  if (!articleMeta) return <ErrorMessage>מאמר לא נמצא</ErrorMessage>;

  // Filter related articles (excluding the current article)
  const relatedArticles =articles.filter((article) => articleMeta.relatedArticles.includes(article.id));

  return (
    <ArticleContainer>
      <ImageContainer>
        <Image src={articleMeta.image} alt={articleMeta.title} />
      </ImageContainer>
      <ContentContainer>
        <Title>{articleMeta.title}</Title>
        <MetaInfo>
          <Date>תאריך פרסום: {articleMeta.date}</Date>
        </MetaInfo>
        <Description>{articleMeta.description}</Description>
        <Divider />
        {articleContent ? (
          <Content dangerouslySetInnerHTML={{ __html: articleContent.content }} />
        ) : (
          <LoadingMessage>טוען תוכן...</LoadingMessage>
        )}
        <Divider />
        <RelatedArticles>
          <RelatedHeader>מאמרים קשורים</RelatedHeader>
          <RelatedGrid>
            {relatedArticles.map((related) => (
              <RelatedCard key={related.id} to={`/article/${related.id}`}>
                <RelatedImage src={related.image} alt={related.title} />
                <RelatedInfo>
                  <RelatedTitle>{related.title}</RelatedTitle>
                  <RelatedDescription>{related.description.slice(0, 60)}...</RelatedDescription>
                </RelatedInfo>
              </RelatedCard>
            ))}
          </RelatedGrid>
        </RelatedArticles>
      </ContentContainer>
    </ArticleContainer>
  );
};

// Styled Components
const ArticleContainer = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 40px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  padding: 20px;
  text-align: right;
  direction: rtl;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: #1a2c3d;
  font-weight: bold;
  margin-bottom: 20px;
`;

const MetaInfo = styled.div`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 20px;
`;

const Date = styled.span``;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 30px;
`;

const Divider = styled.hr`
  margin: 40px 0;
  border: none;
  border-top: 1px solid #eee;
`;

const Content = styled.div`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.8;
  line-height: 1.8;
  text-align: justify;

  h2 {
    font-size: 1.8rem;
    color: #1a2c3d;
    margin: 20px 0;
  }

  h3 {
    font-size: 1.4rem;
    color: #555;
    margin: 15px 0;
  }

  ul {
    padding-left: 20px;
    list-style: disc;
    margin-bottom: 20px;
  }

  li {
    margin-bottom: 10px;
  }
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #888;
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #f00;
`;

const RelatedArticles = styled.div`
  margin-top: 40px;
`;

const RelatedHeader = styled.h3`
  font-size: 1.8rem;
  color: #1a2c3d;
  margin-bottom: 20px;
  font-weight: bold;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const RelatedCard = styled(Link)`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

const RelatedImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const RelatedInfo = styled.div`
  padding: 15px;
  text-align: right;
`;

const RelatedTitle = styled.h4`
  font-size: 1.3rem;
  color: #1a2c3d;
  margin-bottom: 10px;
`;

const RelatedDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;
export default ArticleDetail;
