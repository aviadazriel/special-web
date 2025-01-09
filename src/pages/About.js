// AboutUs.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ContactModal from '../components/ContactModal';
import FAQSection from '../components/FAQSection';

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const faqData = [
    {
      question: "מהי המטרה של משכנתא מניסיון?",
      answer: (
        <div style={{ lineHeight: "1.8", textAlign: "right" }}>
          <ul style={{ padding: "10px 20px", listStyleType: "disc" }}>
            <li>
              <strong>הפיכת התהליך לפשוט ונגיש:</strong> אנו שואפים לסייע ללקוחות להתמודד עם תהליך קבלת המשכנתא בצורה חלקה, ללא בלבולים ועם מינימום בירוקרטיה. המטרה שלנו היא להנגיש את המידע החשוב והדרוש כדי שתוכלו לקבל החלטות מושכלות.
            </li>
            <li>
              <strong>יחס אישי ומקצועי:</strong> אנו מאמינים שכל לקוח הוא ייחודי, ולכן אנו מספקים שירות מותאם אישית. צוות המומחים שלנו מקשיב לצרכים ולחששות שלכם, ומספק ייעוץ מובן וברור, כך שתוכלו להבין את כל האפשרויות השונות.
            </li>
            <li>
              <strong>חיסכון כספי:</strong> בעזרת תמהיל משכנתא חכם, אנו מסייעים ללקוחות לחסוך כסף לאורך זמן. אנו מנתחים את האפשרויות השונות ומסייעים לבחור את המסלול המתאים ביותר, מה שמוביל לריבית נמוכה יותר ותנאים טובים יותר.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "מה היתרונות של עבודה איתכם?",
      answer: (
        <div style={{ lineHeight: "1.8", textAlign: "right"}}>
          <ol style={{ padding: "10px 20px", listStyleType: "decimal" }}>
            <li>
              <strong>ליווי מלא מא' ועד ת':</strong> אנו מספקים תמיכה לאורך כל התהליך, החל מהשלב הראשון של ייעוץ ראשוני, דרך בניית תמהיל המשכנתא, ניהול משא ומתן מול הבנקים, ועד טיפול בכל המסמכים הנדרשים.
            </li>
            <li>
              <strong>זמינות וגמישות:</strong> אנו מבינים שהזמן שלכם חשוב, ולכן אנחנו זמינים גם מעבר לשעות העבודה הרגילות.
            </li>
            <li>
              <strong>עבודה עם כל הבנקים בישראל:</strong> אנו משתפים פעולה עם מגוון רחב של בנקים ואחרים, מה שמאפשר לנו להשיג את התנאים הטובים ביותר עבורכם.
            </li>
          </ol>
        </div>
      ),
    },
    {
      question: "למי מתאים השירות שלכם?",
      answer: (
        <div style={{ lineHeight: "1.8", textAlign: "right" }}>
          <ul style={{ padding: "10px 20px", listStyleType: "disc" }}>
            <li>משפחות צעירות וזוגות בתחילת הדרך.</li>
            <li>רוכשי דירה ראשונה הזקוקים להכוונה וליווי.</li>
            <li>משפרי דיור המעוניינים בנכס גדול יותר.</li>
            <li>לקוחות המעוניינים במחזור משכנתא ולהפחית עלויות.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "איך מתבצע תהליך העבודה?",
      answer: (
        <div style={{ lineHeight: "1.8", textAlign: "right" }}>
          <ol style={{ padding: "10px 20px", listStyleType: "decimal" }}>
            <li>
              <strong>פגישת ייעוץ ראשונית:</strong> בשלב זה, אנו מבצעים סקירה מעמיקה של מצבכם הפיננסי, כולל הכנסות, הוצאות, והתחייבויות קיימות.
            </li>
            <li>
              <strong>בניית תמהיל מותאם אישית:</strong> לאחר שהבנו את המצב שלכם, אנו נוציא תמהיל משכנתא שמותאם ליכולות ההחזר שלכם ולצרכים האישיים.
            </li>
            <li>
              <strong>מו"מ מול הבנקים:</strong> אנו מנהלים משא ומתן עם הבנקים כדי להשיג את התנאים הטובים ביותר.
            </li>
            <li>
              <strong>מעקב וליווי:</strong> אנו נוודא שכל המסמכים מסודרים ושכל התהליך מתנהל לשביעות רצונכם.
            </li>
          </ol>
        </div>
      ),
    },
    {
      question: "למה כדאי לבחור בנו?",
      answer: (
        <div style={{ lineHeight: "1.8", textAlign: "right" }}>
          <ul style={{ padding: "10px 20px", listStyleType: "disc" }}>
            <li>יחס אישי ומותאם אישית לצרכים שלכם, עם שקיפות מלאה בכל שלב.</li>
            <li>מקצועיות בלתי מתפשרת וניסיון בעבודה מול כל הבנקים.</li>
            <li>התמקדות בחיסכון כספי ויציבות כלכלית עבור לקוחותינו.</li>
          </ul>
        </div>
      ),
    },
  ];
  

  return (
    <AboutContainer>
      {/* Our Story Section */}
      <Section>
        <StoryImage src={`${process.env.PUBLIC_URL}/MAIN_LOGO.png`} alt="הסיפור שלנו" />
        <TextContainer>
          <h2>הסיפור שלנו</h2>
          <p>
            משכנתא מניסיון נוסד מתוך אמונה פשוטה: תהליך קבלת משכנתא לא חייב להיות מלחיץ.
            עם ניסיון רב, עזרנו לאינספור אנשים ומשפחות לקבל החלטות פיננסיות מושכלות ולהגשים את חלום הבית. 
            אנו גאים בגישה האישית שלנו ובמחויבות הבלתי מתפשרת למטרות לקוחותינו.
          </p>
        </TextContainer>
      </Section>

      {/* Our Values Section */}
      <ValuesSection>
        <h2>הערכים שלנו</h2>
        <ValuesGrid>
          <ValueCard>
            <h3>יושרה</h3>
            <p>אנו נותנים עדיפות לשקיפות ואמינות בכל אינטראקציה, כדי שתוכלו להרגיש בטוחים ומודעים.</p>
          </ValueCard>
          <ValueCard>
            <h3>מחויבות</h3>
            <p>ההצלחה שלכם היא ההצלחה שלנו. אנו עושים את המרב כדי למצוא פתרונות המותאמים לצרכים הייחודיים שלכם.</p>
          </ValueCard>
          <ValueCard>
            <h3>מקצועיות</h3>
            <p>עם שנים של ניסיון בתחום, אנו מלווים אתכם בתהליך המשכנתא בביטחון ובהירות.</p>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>

      {/* Association Section */}
      <SectionContainer>
        <Logo src="https://hfca.org.il/wp-content/uploads/2021/12/logob@4x-8.png" alt="לוגו התאחדות יועצי המשכנתאות" />
        <AssociationTitle>התאחדות יועצי המשכנתאות בישראל</AssociationTitle>
        <VisionTitle>החזון שלנו</VisionTitle>
        <VisionText>
          בחזון העמותה ידע כל לווה שנמצא בתהליך רכישה של נכס ו/או לוקח החלטות כלכליות חשובות וקריטיות, כי באמצעות
          יועץ משכנתאות <strong>מקצועי</strong> ו<strong>אובייקטיבי</strong> אשר עומד בסף דרישה מקצועי ואתי, יקבל את המידע הדרוש, והייעוץ הנכון לקבלת
          ההחלטות והליווי המקצועי עד להשגת משכנתא מתוכננת היטב ומתאימה לצרכים הפיננסיים.
        </VisionText>

        <AssociationText>
          <p><strong>למה חשוב לעבוד רק עם יועץ משכנתאות רשום?</strong></p>
          <ul>
            <li>היועצים הרשומים בהתאחדות הם אלו אשר עמדו במבחני הקבלה המחמירים ועומדים בסף מקצועי ואתי.</li>
            <li>ההתאחדות מפיקה ומארגנת כנסים, הדרכות והשתלמויות כדי להעמיק ולהרחיב את הידע המקצועי של היועצים.</li>
            <li>חברי ההתאחדות מעודכנים בשינויים הבנקאיים ומקבלים מעטפת של תמיכה ועזרה מקצועית.</li>
            <li>ההתאחדות מייצגת את כלל היועצים מול המוסדות הבנקאיים ופועלת לשיפור תנאי העבודה, כל זאת לטובת הלקוח.</li>
          </ul>
        </AssociationText>
      </SectionContainer>

      {/* Meet the Team Section */}
      <TeamSection>
        <h2>פגשו את הצוות</h2>
        <TeamGrid>
          <TeamMember>
            <MemberImage src={`${process.env.PUBLIC_URL}/images/employees/AVIAD_PIC.jpeg`} alt="אביעד עזריאל" />
            <h3>אביעד עזריאל</h3>
            <p>יועץ משכנתאות בכיר</p>
          </TeamMember>

          <TeamMember>
            <MemberImage src={`${process.env.PUBLIC_URL}/images/employees/SAPIR_PIC.jpeg`} alt="מיכה כהן" />
            <h3>ספיר וקנין</h3>
            <p>יועצת משכנתאות ורואת חשבון</p>
          </TeamMember>
          

          <TeamMember>
            <MemberImage src={`${process.env.PUBLIC_URL}/images/employees/ETIEL_PIC.jpeg`} alt="איתיאל עזריאל" />
            <h3>איתיאל עזריאל</h3>
            <p>יועץ משכנתאות</p>
          </TeamMember>

          

          

          <TeamMember>
            <MemberImage src={`${process.env.PUBLIC_URL}/images/employees/MIKA_PIC.webp`} alt="מיכה כהן" />
            <h3>מיכאל כהן</h3>
            <p>יועץ משכנתאות</p>
          </TeamMember>
   

          <TeamMember>
            <MemberImage src={`${process.env.PUBLIC_URL}/images/employees/ORLI_PIC.jpg`} alt="אורלי ברון" />
            <h3>אורלי ברון</h3>
            <p>מנהלת קשרי לקוחות</p>
          </TeamMember>
        </TeamGrid>
      </TeamSection>

      <FAQSection faqData={faqData}/>

      {/* Why Choose Us Section */}
      <CTASection>
        <h2>למה לבחור בנו?</h2>
        <p>
          במשכנתא מניסיון, אנחנו לא רק מספקים שירותים; אנחנו יוצרים שותפויות. הצוות שלנו מחויב להצלחה שלכם,
          עם ייעוץ מותאם אישית, ידע מעמיק ונכונות לעזור לכם להשיג את החלומות הפיננסיים שלכם. כשאתם בוחרים בנו,
          אתם בוחרים בשותף שאכפת לו באמת.
        </p>
        <CTAButton onClick={handleOpenModal}>צור קשר</CTAButton>
      </CTASection>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </AboutContainer>
  );
};

// Styled Components
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  direction: rtl;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  margin: 40px 0;
  text-align: right;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`;

const StoryImage = styled.img`
  width: 50%;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  flex: 1;

  h2 {
    font-size: 2rem;
    color: #1b263b;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ValuesSection = styled.section`
  text-align: center;
  margin: 40px 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

const ValuesGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const ValueCard = styled.div`
  background: #f7f9fc;
  border-radius: 10px;
  padding: 20px;
  max-width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  h3 {
    color: #0d1b2a;
    font-size: 1.5rem;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  p {
    color: #333;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const TeamSection = styled.section`
  text-align: center;
  margin: 40px 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

const TeamGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const TeamMember = styled.div`
  text-align: center;
  max-width: 200px;
`;

const MemberImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const CTASection = styled.section`
  background-color: #1b263b;
  color: white;
  text-align: center;
  padding: 40px 20px;
  border-radius: 10px;
  margin: 40px 0;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    margin: 10px 0 20px;
    color: #e0e0e0;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const CTAButton = styled.button`
  background-color: #fcbf49;
  color: #0d1b2a;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0a500;
  }
`;

const SectionContainer = styled.section`
  background: linear-gradient(135deg, #ffffff, #e3f2fd);
  padding: 60px;
  border-radius: 15px;
  max-width: 900px;
  margin: 40px auto;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #0d47a1;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Logo = styled.img`
  width: 120px;
  margin-bottom: 20px;
`;

const AssociationTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #0d47a1;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const VisionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #0d47a1;
  margin-bottom: 15px;
`;

const VisionText = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #333;
  text-align: justify;
  max-width: 800px;
  margin: 0 auto 30px auto;
  padding: 15px;
  background: #f1f8fe;
  border-radius: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AssociationText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: right;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #f9fdff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 0.9rem;
  }

  p {
    font-weight: bold;
    color: #0d47a1;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    color: #333;
    font-size: 1rem;
    margin: 10px 0;
  }

  li::before {
    content: '';
    display: inline-block;
    width: 1.2em; /* Slightly larger for better visibility */
    height: 1.2em;
    margin-right: 8px; /* Adjust spacing */
    margin-left: 7px;
    background-color: #4caf50;
    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234CAF50"><path d="M20.292 5.292a1 1 0 00-1.414 0l-11 11a1 1 0 01-1.414 0l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l12-12a1 1 0 000-1.414z"/></svg>');
    -webkit-mask-size: contain;
    mask-size: contain;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
 
   
  }
  
  @media (max-width: 600px) { /* Mobile adjustments */
    li::before {
      width: 1.5em; /* Increase for smaller screens */
      height: 1.5em;
      margin-right: 6px; /* Tighter spacing */
    }
  }
`;

export default AboutUs;
