import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQSection = ({ faqData }) => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(index === openQuestionIndex ? null : index);
  };

  return (
    <FAQContainer>
      <Header>
        <h2>שאלות ותשובות</h2>
        <img src={`${process.env.PUBLIC_URL}/a.svg`} alt="FAQ Icon" />
      </Header>
      <FAQList>
        {faqData.map((item, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleQuestion(index)}>
              <span>{item.question}</span>
              <IconContainer>
                <FontAwesomeIcon icon={openQuestionIndex === index ? faMinus : faPlus} />
              </IconContainer>
            </Question>
            {openQuestionIndex === index && (
              <Answer>{item.answer}
                
              </Answer>
            )}
          </FAQItem>
        ))}
      </FAQList>
    </FAQContainer>
  );
};

// Styled Components
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;

  h2 {
      font-size: 2rem;
  color: #1b263b;
  }

  img {
    width: 40px;
    height: 100%;
    margin-bottom: 20px;
  }
`;

const FAQContainer = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 40px auto;
  padding: 10px;
  text-align: right;

  h2 {
  
    margin-bottom: 20px;
    text-align: center;
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const FAQItem = styled.div`
  background: #f7f9fc;
  border-radius: 10px;
  padding: 15px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #eef3fa;
  }
`;

const Question = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #0d1b2a;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled.div`
  font-size: 1.2rem;
  transition: transform 0.3s;
  color: #5571db;

  &:hover {
    transform: scale(1.2);
  }
`;

const Answer = styled.ul`
  font-size: 0.9rem;
  color: #333;
  margin-top: 8px;
  line-height: 1.4;
  padding-left: 4px;
  list-style-position: inside;
   white-space: pre-wrap; /* Maintains multi-line formatting */

  li {
    margin-bottom: 10px;
  }
`;

export default FAQSection;
