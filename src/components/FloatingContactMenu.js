import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const FloatingContactMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer>
      <MenuItems isOpen={isOpen}>
        <MenuItem color="rgb(7 111 46)">
          <a href="tel:+972508857282" title="Call">
            <FontAwesomeIcon icon={faPhone}  />
          </a>
        </MenuItem>
        <MenuItem color="#DB4437">
          <a href="mailto:contact@premiumconsult.com" title="Email">
            <FontAwesomeIcon icon={faEnvelope}  />
          </a>
        </MenuItem>
        <MenuItem color="#25D366">
          <a
            href="https://wa.me/972508857282"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp}  />
          </a>
        </MenuItem>
        <MenuItem color="#4267B2" >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook}  />
          </a>
        </MenuItem>
      </MenuItems>
      <ToggleButton onClick={toggleMenu} >
        <FontAwesomeIcon icon={isOpen ? faTimesCircle : faCommentDots}  />
      </ToggleButton>
    </MenuContainer>
  );
};

// Styled Components
const MenuContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: move; /* Show that the component is draggable */
`;

const ToggleButton = styled.button`
  background: rgb(18 65 115 / 87%);

  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    background: #0056b3;
    transform: scale(1.1);
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column-reverse;
  gap: 10px;
  margin-bottom: 10px; /* Ensure spacing between toggle and icons */
`;

const MenuItem = styled.li`
  background: ${({ color }) => color};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  a {
    color: white;
    font-size: 1.5rem;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
`;

export default FloatingContactMenu;
