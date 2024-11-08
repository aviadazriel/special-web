// AboutUs.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ContactModal from '../components/ContactModal';

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AboutContainer>
      {/* Our Story Section */}
      <Section>
        <StoryImage src={`${process.env.PUBLIC_URL}/MAIN_LOGO.png`} alt="הסיפור שלנו" />
        <TextContainer>
          <h2>הסיפור שלנו</h2>
          <p>
            ייעוץ משכנתאות נוסד מתוך אמונה פשוטה: תהליך קבלת משכנתא לא חייב להיות מלחיץ.
            עם ניסיון של מעל עשור, עזרנו לאינספור אנשים ומשפחות לקבל החלטות פיננסיות מושכלות ולהגשים את חלום הבית. 
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

      {/* Meet the Team Section */}
      <TeamSection>
        <h2>פגשו את הצוות</h2>
        <TeamGrid>
          <TeamMember>
            <MemberImage src="https://cdnstorage.sendbig.com/unreal/female.webp" alt="אליסה כהן" />
            <h3>אליסה כהן</h3>
            <p>יועצת משכנתאות בכירה</p>
          </TeamMember>
          <TeamMember>
            <MemberImage src="https://www.zmo.ai/wp-content/uploads/2023/03/Feishu20230309-195534-300x300.png" alt="יונתן יובל" />
            <h3>יונתן יובל</h3>
            <p>יועץ פיננסי</p>
          </TeamMember>
          <TeamMember>
            <MemberImage src="https://www.showmetech.com.br/wp-content/uploads//2024/03/imagem_2024-03-25_145108781.png.webp" alt="מרי ג'ונסון" />
            <h3>מרי ג'ונסון</h3>
            <p>מנהל קשרי לקוחות</p>
          </TeamMember>
        </TeamGrid>
      </TeamSection>

      {/* Why Choose Us Section */}
      <CTASection>
        <h2>למה לבחור בנו?</h2>
        <p>
          אצל ייעוץ משכנתאות, אנחנו לא רק מספקים שירותים; אנחנו יוצרים שותפויות. הצוות שלנו מחויב להצלחה שלכם,
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
  direction: rtl; /* RTL layout */
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  margin: 40px 0;
  text-align: right; /* RTL alignment */
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const StoryImage = styled.img`
  width: 50%;
  height: auto;
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
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
  }
`;

const ValuesSection = styled.section`
  text-align: center;
  margin: 40px 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const ValuesGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
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
  }

  p {
    color: #333;
    font-size: 1rem;
  }
`;

const TeamSection = styled.section`
  text-align: center;
  margin: 40px 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
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
  }

  p {
    font-size: 1.1rem;
    margin: 10px 0 20px;
    color: #e0e0e0;
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

export default AboutUs;
