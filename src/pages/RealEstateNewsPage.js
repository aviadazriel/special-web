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
                <img
                  src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEXPIifPISf////SMjbNAA7MAADtt7jOGB/NDhfZW1/jkJL229zPHiXNAxHOGSD339/MAAf99PTcbnHxy8vRKzHrsbH11tfYVVjpqqvhhoj++fnffoD87+/xxMbRKS/kk5XWS0/UQETaZGfed3nnoKLuvLzwxsfVRUrmm50pxmKCAAAEr0lEQVR4nO3Z6WKqOhiF4UKliZbgVOehdrDt/V/hEZQQMlgcTuvqXu+vU/HDPBtF8Nzd/fHuf3sB/3sU4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiZwmjvxGF+FGIH4X4UYgfhfhRiB+F+FGIH4X4UYgfhfhRiB+F+FGIH4X4UYgfhfhRiB+F+P2kME32ZSdN9fZD4txX/UFhuh4XPW5OIcrhfmhwLvEnhU/xvskpQjXfDy3kmS9L4RW7caFsFUnjv9XhNdOWmzx8apR+RFXCTWI9eycWzi6UqAnf7CHhHZLpmUL5/pC3ne1UcrYt/pgu8leJ0mj/Z62vdpK/lBjpR0ZCC1fWk7eTTCycnUzfit2XwqE9NBC+oYW0z0gNhUl3/zrbVhS1toeVxv22yk+Rsa9x/q8pq7/nSgudBkKNPA8vJ7ISOnWkmnoenudrukD4kAsfqv21xe4Y+lfQVWkkq+X1jwt9i43jl+xkYbGmKwqXvaAwHrUuFnZ76enCfv2zeKFwt7igMBbppcL4VZwujGfymsKpCgvb4mLhuzpDuGpdKtwae3tohYUD2VzoO9PE+TtdhYZ2wsDQsHehUAyeO52ZfkAL3zuHnvXC03UkZlp417HTTxSvz7UNs2UpFPbMTAsze6h7JWEkpJTJ0BFuWrJIRXrhUZpKLdx9eVgl1ROFtWV8EKrgUEdGmbVleC1hXs8Vlhdj+t1Y3A6YQjtpPrGWIbTrVUJ7y80Js8R8YkNhahzDWxeql/HpQrleoQizpDxlOFchYWGaLPTQ7MaF6r48gLvunRsCv1Cmq2rIvQe7JWGWlF8UeePaioLC1DjqxfXirQgX/WVe13hTSfMAxv0n5xD6hPJuaAzNN+7vNr8kLG9TjYOh3oylxh9Pnt+YXKFsm0Pje88t/28JnbKNeQD3t8qO8NES1u5C5wPv0FWEo6TMFX6Wm8RxoXk5ucoOx0Im9exjKJ+rofE6MHQN4fKxrO8Iu3rbcWGiP4R9fSzkczVdNLeE1eX+/C041L+C0OnovUVAWO5rK/WHKXhvUQp75ffEcF0NBe6ezhL2PoLCqBW6gwv8tl0KV8aHKbRYfeFSCj8aDNW/RBsK5Zt/Z4Vw69+0TLxA96x1ZLH6i6QUrnrfD9WvBRoKg2/T3TKzT/+mQeA3XPN3u28WO9IeLfx+aFj/l20qTJ+WIWGkFr4tX4FDeILQuNhpLnwU9W+SpsLd3ebU93krlqlehs7rvLpXVaVw6Vms50yznBmfufK77uObof6X/VXZWBilKvlsO30W+8sSMTEfnURH/n9fNjFHDzt3d/2SmO/ybLN/1Dx7eYecm7TmwvxlMmFXrjKtbcp8lxzVbuqj+3l7x/YuDkPZ8SHP2fskIWQU4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4vdPC/9gFOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4vcPCP8Dn3io93GcrPQAAAAASUVORK5CYII="}
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
  align-self: center;
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
