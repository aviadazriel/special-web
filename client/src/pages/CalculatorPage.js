// CalculatorPage.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

  // Define data-type attribute based on the selected calculator
  const calculatorDataType = selectedCalculator === 'calculator1' 
    ? 'eVNvV0tudC96Ry81V3RQNm4zeHZHdz09' 
    : selectedCalculator === 'calculator2'
    ? 'T0lTTUxoYzZoR05hanhCR1JKck94dz09'
    : null;


  // Handles setting the selected calculator type
  const handleCalculatorSelect = (calculatorType) => {
    setSelectedCalculator(calculatorType);
  };

  return (
    <CalculatorContainer>

      {/* Calculator Selection Menu */}
      <SelectionContainer>
        <button onClick={() => handleCalculatorSelect('calculator1')}>מחשבון זכאות</button>
        <button onClick={() => handleCalculatorSelect('calculator2')}>בניית תמהיל</button>
      </SelectionContainer>

      {/* Render selected calculator */}
      {selectedCalculator && (
        <CalculatorWrapper id="snpv_calc" data-type={calculatorDataType}>
          {/* Calculator content will load here based on the chosen calculator */}
        </CalculatorWrapper>
      )}
    </CalculatorContainer>
  );
};

// Styled Components for styling the calculator container
const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const SelectionContainer = styled.div`
  margin-bottom: 20px;

  button {
    background-color: #fcbf49;
    color: #0d1b2a;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    margin: 0 10px;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: #f0a500;
    }
  }
`;

const CalculatorWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;

export default CalculatorPage;
