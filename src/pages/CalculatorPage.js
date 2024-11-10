// CalculatorPage.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faPercentage, faChartPie, faBalanceScale } from '@fortawesome/free-solid-svg-icons';

const CalculatorPage = () => {
  const [selectedCalculator, setSelectedCalculator] = useState(null);

  useEffect(() => {
    let jQueryScript, script1, script2;

    if (selectedCalculator) {
      // Load jQuery first
      jQueryScript = document.createElement('script');
      jQueryScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
      jQueryScript.async = true;
      document.body.appendChild(jQueryScript);

      // Define the iframe resizer script
      script1 = document.createElement('script');
      script1.src = "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.3/iframeResizer.contentWindow.min.js";
      script1.async = true;

      // Define the calculator script for both calculators
      script2 = document.createElement('script');
      script2.src = "https://www.snpv.co.il/media/js/external_calculators.js";
      script2.async = true;

      // Load the iframe resizer and calculator script after jQuery
      jQueryScript.onload = () => {
        document.body.appendChild(script1);
        document.body.appendChild(script2);
      };
    }

    // Cleanup function to remove the scripts safely
    return () => {
      if (jQueryScript && jQueryScript.parentNode) jQueryScript.parentNode.removeChild(jQueryScript);
      if (script1 && script1.parentNode) script1.parentNode.removeChild(script1);
      if (script2 && script2.parentNode) script2.parentNode.removeChild(script2);
    };
  }, [selectedCalculator]);

  const calculators = [
    {
      id: 'calculator1',
      title: 'מחשבון זכאות',
      description: 'בדוק את זכאות המשכנתא שלך במהירות ובקלות.',
      icon: faCalculator,
      dataType: 'eVNvV0tudC96Ry81V3RQNm4zeHZHdz09'
    },
    {
      id: 'calculator2',
      title: 'בניית תמהיל',
      description: 'בנה תמהיל הלוואה מתאים לפי צרכיך האישיים.',
      icon: faChartPie,
      dataType: 'T0lTTUxoYzZoR05hanhCR1JKck94dz09'
    },
    {
      id: 'calculator3',
      title: 'חישוב ריביות',
      description: 'חשב את הריביות והתשלומים שלך.',
      icon: faPercentage,
      dataType: 'dummyDataType3' // Replace with actual data-type if available
    },
    {
      id: 'calculator4',
      title: 'חישוב יכולת החזר',
      description: 'בדוק את יכולת ההחזר שלך בהתאם להכנסה.',
      icon: faBalanceScale,
      dataType: 'dummyDataType4' // Replace with actual data-type if available
    }
  ];

  const handleCalculatorSelect = (calculatorId) => {
    const calculator = calculators.find((calc) => calc.id === calculatorId);
    setSelectedCalculator(calculator);
  };

  return (
    <CalculatorContainer>
      <h1>בחר מחשבון</h1>
      <SelectionContainer>
        {calculators.map((calc) => (
          <CalculatorCard key={calc.id} onClick={() => handleCalculatorSelect(calc.id)}>
            <FontAwesomeIcon icon={calc.icon} size="3x" />
            <CardTitle>{calc.title}</CardTitle>
            <CardDescription>{calc.description}</CardDescription>
          </CalculatorCard>
        ))}
      </SelectionContainer>

      {/* Render selected calculator */}
      {selectedCalculator && (
        <CalculatorWrapper id="snpv_calc" data-type={selectedCalculator.dataType}>
          {/* Calculator content will load here based on the chosen calculator */}
        </CalculatorWrapper>
      )}
    </CalculatorContainer>
  );
};

// Styled Components
const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #1b263b;
    margin-bottom: 40px;
  }
`;

const SelectionContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CalculatorCard = styled.div`
  background: #f7f9fc;
  padding: 20px;
  width: 240px;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &:hover {
    transform: translateY(-5px);
    background-color: #eaeff5;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #0d1b2a;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #333;
`;

const CalculatorWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;

export default CalculatorPage;
