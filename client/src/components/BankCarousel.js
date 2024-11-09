import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import banks from '../data/bankData';


const BankCarousel = () => {
    

      const [startIndex, setStartIndex] = useState(0);

      // Show 5 logos at a time
      const visibleLogosCount = 5;
    
      useEffect(() => {
        const interval = setInterval(() => {
          setStartIndex((prevIndex) => (prevIndex + 1) % banks.length);
        }, 3000); // Change logos every 3 seconds
    
        return () => clearInterval(interval);
      }, [banks.length]);
    
      // Get the current visible logos based on startIndex
      const visibleLogos = [
        ...banks.slice(startIndex, startIndex + visibleLogosCount),
        ...banks.slice(0, Math.max(0, startIndex + visibleLogosCount - banks.length)),
      ];
    
      return (
        <CarouselSection>
          <CarouselWrapper>
            {visibleLogos.map((bank, index) => (
              <a key={index} href={bank.url} target="_blank" rel="noopener noreferrer">
                <BankLogo src={bank.img} alt={bank.alt} />
              </a>
            ))}
          </CarouselWrapper>
        </CarouselSection>
      );
    };
    
    const CarouselSection = styled.section`
      width: 100%;
      text-align: center;
      padding: 40px 0;
    
      h3 {
        font-size: 1.5rem;
        margin-bottom: 20px;
        color: #1b263b;
      }
    `;
    
    const CarouselWrapper = styled.div`
      display: flex;
      justify-content: center;
      gap: 20px;
      overflow: hidden;
      width: 100%;
    `;
    
    const BankLogo = styled.img`
      width: 120px;
      height: auto;
      flex-shrink: 0;
      transition: transform 0.3s;
    
      &:hover {
        transform: scale(1.1);
      }
    `;
    
    export default BankCarousel;