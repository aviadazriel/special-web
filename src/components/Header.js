import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContactModal from './ContactModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <LogoContainer>
          <Link to="/">
            <Logo src={`${process.env.PUBLIC_URL}/MAIN_LOGO.png`} alt="Company Logo" />
          </Link>
        </LogoContainer>

        <MobileMenuIcon onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </MobileMenuIcon>

        <NavLinks isOpen={isMobileMenuOpen}>
          <StyledLink to="/" onClick={() => setIsMobileMenuOpen(false)}>יעוץ משכנתא</StyledLink>
          <StyledLink to="/articles" onClick={() => setIsMobileMenuOpen(false)}>מאמרים</StyledLink>
          <StyledLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>שירותים</StyledLink>
          <StyledLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>אודות</StyledLink>
          <StyledLink to="/real-estate-news" onClick={() => setIsMobileMenuOpen(false)}>כתבות בנושא נדל"ן</StyledLink>
          <StyledLink to="/calculator" onClick={() => setIsMobileMenuOpen(false)}>מחשבון משכנתא</StyledLink>
        </NavLinks>

        <CTAButton onClick={() => setIsModalOpen(true)}>צור קשר</CTAButton>
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
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 15px 0;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  direction: rtl;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const LogoContainer = styled.div`
  order: 2;
  transition: transform 0.3s;

  &:hover {
    transform: rotate(-5deg) scale(1.05);
  }
`;

const Logo = styled.img`
  height: 70px;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
  flex-shrink: 0;
  margin-left: 10px;

  @media (max-width: 768px) {
    display: block;
    order: 1;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  order: 1;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    background: linear-gradient(135deg, #0d1b2a, #1b263b);
    padding: 20px 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  font-weight: 600;
  color: #ffffff;
  font-size: 1.1rem;
  position: relative;
  padding: 8px 0;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #fcbf49;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 3px;
    background-color: #fcbf49;
    border-radius: 5px;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover:before {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 10px 0;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #fcbf49, #f0a500);
  color: #0d1b2a;
  font-weight: 700;
  padding: 12px 25px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: background 0.3s, box-shadow 0.3s, transform 0.2s;

  &:hover {
    background: linear-gradient(135deg, #f0a500, #fcbf49);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.9rem;
  }
`;

export default Header;
