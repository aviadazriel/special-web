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
          <StyledLink to="/real-estate-news" onClick={() => setIsMobileMenuOpen(false)}>כתבות</StyledLink>
          <StyledLink to="/calculator" onClick={() => setIsMobileMenuOpen(false)}>מחשבונים</StyledLink>
          <CTAButton onClick={() => setIsModalOpen(true)}>צור קשר</CTAButton>
        </NavLinks>
      </Nav>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </HeaderContainer>
  );
};

// Styled Components
const HeaderContainer = styled.header`
  background: #f8f8f8;
  padding: 15px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  direction: rtl;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Logo = styled.img`
  height: 50px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    color: #333;
    cursor: pointer;
    position: absolute;
    left: 10px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center; /* יישור אנכי */
  justify-content: flex-end;
  flex: 2;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    background: #ffffff;
    width: 100%;
    padding: 20px 0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    gap: 10px;
  }
`;


const StyledLink = styled(Link)`
  color: #333;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #555;
  }

  &:after {
    content: '';
    display: block;
    height: 2px;
    background: #333;
    transition: width 0.3s ease;
    width: 0;
    margin-top: 5px;
  }

  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 0;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #333, #555);
  color: white;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: bold;
  border: 1px solid #333;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease;
  margin-left: 10px; /* מרווח משמאל */
  align-self: center; /* יישור אנכי ספציפי */
  
  &:hover {
    background: linear-gradient(135deg, #555, #333);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 8px;
    margin-top: 10px;
    margin-left: 0; /* התאמה למרכזיות בתפריט נייד */
  }
`;


export default Header;
