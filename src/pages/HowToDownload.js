import React, { useState } from "react";
import styled from "styled-components";

// נתוני הבנקים (דוגמה) - ניתן להתאים ללוגואים/הנחיות אמיתיות
const banksData = [
  {
    id: "hapoalim",
    name: "בנק הפועלים",
    logo: "https://bizmax.co.il/wp-content/uploads/2020/12/%D7%91%D7%A0%D7%A7-%D7%94%D7%A4%D7%95%D7%A2%D7%9C%D7%99%D7%9D-PNG.png",
    steps: [
      "היכנסו לאתר בנק הפועלים והתחברו לחשבון האישי שלכם.",
      "בחרו בתפריט 'משכנתאות'.",
      "איתרו את האפשרות 'דוח יתרות לסילוק' ולחצו על הורדה.",
      "שמרו את הקובץ בפורמט PDF והעלו אותו לאתר."
    ],
  },
  {
    id: "leumi",
    name: "בנק לאומי",
    logo: "https://hb2.bankleumi.co.il/staticcontent/gate-keeper/imgs/logo.png",
    steps: [
      "היכנסו לאתר בנק לאומי והתחברו למערכת הבנקאות המקוונת.",
      "לחצו על 'משכנתא שלי' או 'הלוואות'.",
      "חפשו את האפשרות 'דוח יתרות לסילוק' והורידו את הקובץ.",
      "שמרו את הדוח בפורמט PDF והעלו אותו באתר."
    ],
  },
  {
    id: "discount",
    name: "בנק דיסקונט",
    logo: "https://upload.wikimedia.org/wikipedia/he/thumb/7/7e/DiscountBank.svg/1200px-DiscountBank.svg.png",
    steps: [
      "היכנסו לאתר בנק דיסקונט והתחברו לחשבונכם.",
      "עברו לקטגוריית 'הלוואות ומשכנתאות'.",
      "בחרו ב'יתרות לסילוק' או 'סילוק הלוואה' והורידו את הקובץ.",
      "שמרו כ-PDF והעלו לאתר."
    ],
  },
  {
    id: "mizrahi",
    name: "בנק מזרחי טפחות",
    logo: "https://www.mizrahi-tefahot.co.il/mizmedia/1096/logo.svg",
    steps: [
      "היכנסו לאתר מזרחי טפחות והתחברו לחשבון.",
      "לחצו על 'חשבונות המשכנתא שלי'.",
      "חפשו את 'דוח יתרות לסילוק' והורידו את הקובץ.",
      "שמרו בפורמט PDF והעלו בטופס באתר."
    ],
  },
  {
    id: "fibi",
    name: "הבינלאומי הראשון",
    logo: "https://upload.wikimedia.org/wikipedia/he/5/51/%D7%94%D7%91%D7%A0%D7%A7_%D7%94%D7%91%D7%99%D7%A0%D7%9C%D7%90%D7%95%D7%9E%D7%99.svg",
    steps: [
      "היכנסו לאתר הבינלאומי והתחברו לחשבון האישי.",
      "עברו ל'משכנתאות והלוואות'.",
      "אתרו את 'דוח יתרות לסילוק' ולחצו להורדה.",
      "שמרו את הקובץ והעלו אותו לאתר."
    ],
  },
  {
    id: "yahav",
    name: "בנק יהב",
    logo: "https://www.yoter.co.il/wp-content/uploads/2018/12/%D7%9C%D7%95%D7%92%D7%95-%D7%94%D7%9B%D7%99-%D7%9E%D7%A9%D7%AA%D7%9C%D7%9D.jpeg",
    steps: [
      "היכנסו לאתר בנק יהב והתחברו לאזור האישי.",
      "לחצו על 'משכנתאות או הלוואות'.",
      "בחרו ב'יתרות לסילוק' והורידו את הקובץ.",
      "שמרו בפורמט PDF והעלו אותו למערכת."
    ],
  },
];

const HowToDownload = () => {
  const [selectedBank, setSelectedBank] = useState(null);

  // פונקציה לסגירת המודאל
  const closeModal = () => {
    setSelectedBank(null);
  };

  return (
    <PageWrapper>
      <Title>איך להוריד דו"ח יתרות לסילוק?</Title>
      <Subtitle>
        בחרו את הבנק שלכם כדי לקבל הסבר מפורט כיצד להוריד את דו"ח היתרות לסילוק.
      </Subtitle>

      <BanksGrid>
        {banksData.map((bank) => (
          <BankCard key={bank.id} onClick={() => setSelectedBank(bank)}>
            <LogoWrapper>
              <Logo src={bank.logo} alt={bank.name} />
            </LogoWrapper>
          </BankCard>
        ))}
      </BanksGrid>

      {/* אם יש בנק שנבחר - נפתח מודאל */}
      {selectedBank && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalTitle>הוראות להורדת דו"ח יתרות לסילוק</ModalTitle>
            <BankHeader>בנק {selectedBank.name}</BankHeader>
            <InstructionsList>
              {selectedBank.steps.map((step, index) => (
                <StepItem key={index}>
                  {index + 1}. {step}
                </StepItem>
              ))}
            </InstructionsList>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
};

export default HowToDownload;

// ------------------- סגנונות (Styled Components) -------------------

const PageWrapper = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
  font-family: "Alef", sans-serif; /* דוגמה לפונט בעברית */
  direction: rtl;
  box-sizing: border-box; /* חשוב לרספונסיביות טובה */
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 0.5em;
  color: #2c3e50;

  @media (max-width: 600px) {
    font-size: 1.8em;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 2em;

  @media (max-width: 600px) {
    font-size: 1.1em;
  }
`;

/** הגדרת הגריד - עד 3 עמודות, במובייל 2 עמודות */
const BanksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    /* ניתן להחליט אם רוצים להישאר על 2 עמודות גם במובייל צר מאוד */
    grid-template-columns: 1fr 1fr;
  }
`;

const BankCard = styled.div`
  background-color: #f9f9f9;
  border: 2px solid #eee;
  border-radius: 8px;
  cursor: pointer;
  padding: 20px 10px;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    padding: 15px 8px;
  }
`;

const LogoWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

/* =============== רכיבי ה-Modal (חלון קופץ) =============== */

/**
 * שכבת הרקע של המודאל (מאפילה על המסך)
 */
const ModalOverlay = styled.div`
  position: fixed; 
  top: 0; 
  right: 0; 
  bottom: 0; 
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999; /* לוודא שהמודאל מעל הכל */
`;

/**
 * תוכן המודאל עצמו
 */
const ModalContent = styled.div`
  background: #ffffff;
  width: 90%;
  max-width: 500px;
  padding: 30px;
  border-radius: 10px;
  position: relative; 
  text-align: right;
`;

/**
 * כפתור לסגירת המודאל (X)
 */
const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px; 
  left: 10px; 
  cursor: pointer;
  color: #aaa;

  &:hover {
    color: #333;
  }
`;

/**
 * כותרות המודאל
 */
const ModalTitle = styled.h2`
  margin: 0 0 10px 0;
  color: #2c3e50;
  text-align: center; /* ליישור מרכזי */
`;

const BankHeader = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

/**
 * רשימת ההוראות
 */
const InstructionsList = styled.ol`
  padding-right: 20px;
  color: #555;
  line-height: 1.5;
`;

const StepItem = styled.li`
  margin-bottom: 8px;
  font-size: 1em;
`;
