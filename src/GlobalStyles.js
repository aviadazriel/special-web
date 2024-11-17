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

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
    background-color: #ffffff;
  }
  
  thead {
    background-color: #f7f7f7;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    font-size: 14px;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #e9e9e9;
  }
  
  @media screen and (max-width: 768px) {
    th, td {
      padding: 6px;
      font-size: 12px;
    }
  }
  
  @media screen and (max-width: 200px) {
    table, thead, tbody, th, td, tr {
      display: block;
      width: 100%;
    }
  
    thead tr {
      display: none;
    }
  
    tr {
      margin-bottom: 10px;
    }
  
    td {
      text-align: right;
      padding-left: 50%;
      position: relative;
    }
  
    td:before {
      content: attr(data-label);
      position: absolute;
      left: 10px;
      font-weight: bold;
    }
  }
`;





export default GlobalStyles;
