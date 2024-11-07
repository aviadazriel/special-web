import React from 'react';
import styled from 'styled-components';

// List of article images
const imageUrls = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Fl6-95Vpd1uCumsq5zRzziS5i717TxE0DQ&s",
  "https://www.sarit-lari.co.il/wp-content/uploads/2024/04/A-mortgage-for-any-purpose.png",
  "https://www.taxfinance.co.il/wp-content/uploads/2021/11/%D7%94%D7%97%D7%96%D7%A8-%D7%9E%D7%A1-%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90.jpg",
  "https://www.hon.co.il/wp-content/uploads/2011/11/%D7%9E%D7%93%D7%A8%D7%99%D7%9B%D7%99-%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA-55x55-1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg8XUmVrHyyJYi_nX7XhmqVvxuRCZsxYXddg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mstqgQrshWiJkwhS91-GFjZIa8bBmANtZw&s"
];

const getRandomImage = () => {
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
};

// Sample articles with random images
const articles = [
    { title: "Understanding Mortgage Basics", description: "A beginner's guide to mortgages.", image: getRandomImage() },
    { title: "Refinancing Options Explained", description: "Learn about refinancing options.", image: getRandomImage() },
    { title: "Managing Debt Effectively", description: "Tips to manage your debt effectively.", image: getRandomImage() },
    { title: "Top Mortgage Mistakes to Avoid", description: "Common mortgage mistakes.", image: getRandomImage() },
    { title: "Understanding Interest Rates", description: "How interest rates work.", image: getRandomImage() },
    { title: "Should You Refinance Your Mortgage?", description: "Factors to consider for refinancing.", image: getRandomImage() },
    { title: "How to Improve Your Credit Score", description: "Steps to improve your credit score.", image: getRandomImage() },
    { title: "Fixed vs. Variable Rate Mortgages", description: "Pros and cons of different rates.", image: getRandomImage() },
    { title: "Mortgage Pre-Approval", description: "Benefits of mortgage pre-approval.", image: getRandomImage() },
    { title: "How Much Can You Borrow?", description: "Understanding borrowing limits.", image: getRandomImage() },
    { title: "Saving for a Down Payment", description: "Tips for saving for a down payment.", image: getRandomImage() },
    { title: "Home Equity Loans vs. HELOCs", description: "Differences between home loans and HELOCs.", image: getRandomImage() },
    { title: "Understanding Closing Costs", description: "Guide to various closing costs.", image: getRandomImage() },
    { title: "How to Choose the Right Lender", description: "Choosing the right mortgage lender.", image: getRandomImage() },
    { title: "The Importance of Mortgage Insurance", description: "Overview of mortgage insurance.", image: getRandomImage() },
    { title: "Buying a Home with Low Income", description: "Purchasing a home on a budget.", image: getRandomImage() },
    { title: "Understanding Foreclosure", description: "Preventing foreclosure and how it works.", image: getRandomImage() },
    { title: "15-Year vs. 30-Year Mortgage", description: "Choosing a mortgage term.", image: getRandomImage() },
    { title: "The Mortgage Application Process", description: "Step-by-step guide to mortgage applications.", image: getRandomImage() },
    { title: "The Role of Mortgage Brokers", description: "How brokers help find the best mortgage.", image: getRandomImage() }
  ];

const Articles = () => {
  return (
    <ArticlesContainer>
      <Header>
        <Logo src={`${process.env.PUBLIC_URL}/MAIN_LOGO.png`} alt="Company Logo" />
        <TitleSection>
          <PageHeader>Our Blog</PageHeader>
          <PageSubHeader>Insights and tips to help you navigate your mortgage journey</PageSubHeader>
        </TitleSection>
      </Header>
      <ArticlesGrid>
        {articles.map((article, index) => (
          <ArticleCard key={index}>
            <ImageWrapper>
              <ArticleImage src={article.image} alt={article.title} />
            </ImageWrapper>
            <ArticleContent>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleDescription>{article.description}</ArticleDescription>
            </ArticleContent>
          </ArticleCard>
        ))}
      </ArticlesGrid>
    </ArticlesContainer>
  );
};

// Styled Components
const ArticlesContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 40px 20px;
  background-color: #f4f8fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  text-align: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
`;

const TitleSection = styled.div`
  text-align: left;
`;

const PageHeader = styled.h1`
  font-size: 3rem;
  color: #1b263b;
  font-weight: bold;
  margin: 0;
`;

const PageSubHeader = styled.p`
  font-size: 1.4rem;
  color: #555;
  margin-top: 10px;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const ArticleCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;

  ${ArticleCard}:hover & {
    transform: scale(1.05);
  }
`;

const ArticleContent = styled.div`
  padding: 20px;
  text-align: left;
`;

const ArticleTitle = styled.h2`
  font-size: 1.6rem;
  color: #1b263b;
  margin-bottom: 8px;
  font-weight: bold;
`;

const ArticleDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

export default Articles;
