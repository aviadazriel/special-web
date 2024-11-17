import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ArticlePage from './pages/ArticlePage';
import ArticleDetail from './pages/ArticleDetail';
import ServiceDetail from './pages/ServiceDetail';
import CalculatorPage from './pages/CalculatorPage';
import RealEstateNews from './pages/RealEstateNewsPage'; // Import your new component
import ScrollToTop from './components/ScrollToTop';

import GlobalStyles from './GlobalStyles';


function App() {
  
  return (
    <Router>
      <ScrollToTop />
      <PageWrapper>
      <GlobalStyles />
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles" element={<ArticlePage />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/real-estate-news" element={<RealEstateNews />} />
          </Routes>
        </MainContent>
        <Footer />
      </PageWrapper>
    </Router>
  );
}

// Styles for consistent layout
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #F2F4F5;
`;

const MainContent = styled.main`
  width: 100%;
  max-width: 100%;
  min-height: 80vh;
  padding: 40px 2px;
  flex: 1;

`;

export default App;
