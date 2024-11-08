// RealEstateNewsPage.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
const articles = [
    {
      id: 1,
      title: 'הדירות החדשות בת"א מגיעות במחירים מפתיעים',
      link: 'https://www.calcalist.co.il/real-estate/article/r1ens4yzke',
      description: 'כתבה מרתקת על מחירי הנדל"ן בתל אביב ושינויים בשוק.',
      imageUrl: 'https://pic1.calcalist.co.il/picserver3/crop_images/2024/11/06/HJ39gGFb1x/HJ39gGFb1x_0_0_2500_1667_0_x-large.jpg', // Replace with actual image if available
      source: 'Calcalist',
      publishDate: '2023-10-01' // Replace with actual publish date if available
    },
    {
      id: 2,
      title: 'שוק הנדל"ן בתנודתיות: מה צופן העתיד?',
      link: 'https://www.calcalist.co.il/investing/article/rjegyri70',
      description: ' לקוחות משלמים 70 אלף שקל בשנה לבנק למשכנתא, ולמרות זאת חייבים אותו הסכום',
      imageUrl: 'https://pic1.calcalist.co.il/picserver3/crop_images/2023/02/27/rkKfzJ5Rj/rkKfzJ5Rj_1_0_1000_668_0_x-large.jpg',
      source: 'Calcalist',
      publishDate: '2023-09-25'
    },
    {
      id: 3,
      title: 'תחזיות כלכליות לשוק הדיור בישראל',
      link: 'https://www.calcalist.co.il/investing/article/hyb8hnokje',
      description: 'שוק הדיור בוער: זינוק של 32% במשכנתאות בספטמבר לעומת הממוצע',
      imageUrl: 'https://pic1.calcalist.co.il/picserver3/crop_images/2024/09/05/HkhdvbPnR/HkhdvbPnR_0_0_2000_1333_0_x-large.jpg',
      source: 'Calcalist',
      publishDate: '2023-09-15'
    },
    {
      id: 4,
      title: 'ירידות מחירים משמעותיות: האם מדובר במגמה?',
      link: 'https://www.globes.co.il/news/article.aspx?did=1001493211',
      description: 'סקירה על הירידות האחרונות במחירי הנדל"ן בארץ.',
      imageUrl: 'https://images.globes.co.il/dynamic/images/source/04price_drop_trend.jpg',
      source: 'Globes',
      publishDate: '2023-09-05'
    },
    {
      id: 5,
      title: 'משקיעים ותיקים משנים גישה בשוק',
      link: 'https://www.calcalist.co.il/article/r1hoki1w1e',
      description: 'מדוע משקיעים ותיקים עוברים לגישות חדשות בתחום ההשקעות.',
      imageUrl: 'https://images.calcalist.co.il/dynamic/images/source/05investor_trends.jpg',
      source: 'Calcalist',
      publishDate: '2023-08-28'
    },
    {
      id: 6,
      title: 'דעות חדשות על שוק הנדל"ן בשנה הקרובה',
      link: 'https://www.ynet.co.il/economy/article/sjxfcy7dr',
      description: 'מומחים חולקים דעותיהם על תחזיות הנדל"ן לשנה הקרובה.',
      imageUrl: 'https://ynet-pic1.yit.co.il/cdn-cgi/image/f=auto,w=740,q=75/picserver5/crop_images/2021/05/11/H1biM2wO00/H1biM2wO00_0_0_1000_665_0_x-large.jpg',
      source: 'Ynet',
      publishDate: '2023-08-20'
    },
    {
      id: 7,
      title: 'ההשפעות הכלכליות של מגמת העליות בהשקעות נדל"ן',
      link: 'https://www.israelhayom.co.il/business/article/16446438',
      description: 'ניתוח על ההשפעות הכלכליות של העלייה בהשקעות נדל"ן.',
      imageUrl: 'https://www.israelhayom.co.il/wp-content/uploads/2024/09/15/15/DSC_4930-960x640.jpg',
      source: 'Israel Hayom',
      publishDate: '2023-08-10'
    }
  ];


const RealEstateNewsPage = () => (
    <PageContainer>
      <Title>חדשות נדל"ן בישראל</Title>
      <Subtitle>כתבות ומאמרים עדכניים בנושא נדל"ן והשקעות בישראל</Subtitle>
      <ArticleList>
        {articles.map((article) => (
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