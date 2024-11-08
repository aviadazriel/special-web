import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContactModal from './ContactModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <HeaderContainer>
      <Nav>
        <CTAButton onClick={() => setIsModalOpen(true)}>צור קשר</CTAButton>
        
        <NavLinks>
        <StyledLink to="/">יעוץ משכנתא</StyledLink>
        <StyledLink to="/articles">מאמרים</StyledLink>
          
          <StyledLink to="/services">שירותים</StyledLink>
          <StyledLink to="/about">אודות</StyledLink>

          <Link to="/real-estate-news">כתבות בנושא נדל"ן</Link>
          <Link to="/calculator">מחשבון משכנתא</Link>
          
        </NavLinks>

        <LogoContainer>
          <Link to="/">
            <Logo src={`${process.env.PUBLIC_URL}/MAIN_LOGO.png`} alt="Company Logo" />
          </Link>
        </LogoContainer>
      </Nav>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </HeaderContainer>
  );
};

// Styled Components
const HeaderContainer = styled.header`
  width: 100%;
  background: linear-gradient(135deg, #0d1b2a, #1b263b);
  color: white;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 10px 0;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  direction: rtl; /* RTL layout */
`;

const LogoContainer = styled.div`
  order: 2; /* Moves logo to the right */
`;

const Logo = styled.img`
  height: 100px;
  cursor: pointer;
  border-radius: 10px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 25px;
  order: 1; /* Moves navigation links to the left */
`;

const StyledLink = styled(Link)`
  font-weight: 600;
  color: #ffffff;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #fcbf49;
  }
`;

const CTAButton = styled.button`
  background-color: #fcbf49;
  color: #0d1b2a;
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #f0a500;
    transform: scale(1.05);
  }
`;

export default Header;
