import React from "react";
import styled from "styled-components";

const HowToDownload = () => {
  return (
    <Container>
      <h2>איך להוריד דוח יתרות לסילוק?</h2>
      <p>על מנת להוריד את דוח יתרות לסילוק, יש לבצע את הצעדים הבאים:</p>
      <ol>
        <li>היכנסו לאתר הבנק שלכם.</li>
        <li>עברו לקטגוריית "משכנתאות" או "הלוואות".</li>
        <li>חפשו את האפשרות "דוח יתרות לסילוק" והורידו את הקובץ.</li>
        <li>שמרו את הקובץ בפורמט PDF והעלו אותו בטופס באתר.</li>
      </ol>
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  text-align: right;
`;

export default HowToDownload;
