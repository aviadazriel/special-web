// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    direction: rtl;
    text-align: right;
    font-family: 'Alef', sans-serif; /* Use a font suitable for Hebrew */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @media (max-width: 400px) {
      display: flex;
    }

    
  }
`;



export default GlobalStyles;
