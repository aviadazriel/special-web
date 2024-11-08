import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard';

const Services = () => (
  <Container>
    <ServiceCard
      title="תכנון משכנתא"
      description="שירותי תכנון מקיפים למשכנתא שלך."
      image="https://mashkantaguru.co.il/wp-content/uploads/2019/03/mashkanta-hol-430x330.jpg"
    />
    <ServiceCard
      title="מיחזור הלוואות"
      description="סיוע במציאת אפשרויות מיחזור טובות יותר."
      image="https://www.hon.co.il/wp-content/uploads/2016/03/mortgage-351x480.jpg"
    />
    <ServiceCard
      title="איחוד חובות"
      description="אסטרטגיות לאיחוד וניהול חובות בצורה יעילה."
      image="https://www.hon.co.il/wp-content/uploads/2011/11/%D7%9E%D7%93%D7%A8%D7%99%D7%9B%D7%99-%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA-55x55-1.jpg"
    />
    <ServiceCard
      title="תכנון משכנתא"
      description="שירותי תכנון מקיפים למשכנתא שלך."
      image="https://mashkantaguru.co.il/wp-content/uploads/2019/03/mashkanta-hol-430x330.jpg"
    />
    <ServiceCard
      title="מיחזור הלוואות"
      description="סיוע במציאת אפשרויות מיחזור טובות יותר."
      image="https://www.hon.co.il/wp-content/uploads/2016/03/mortgage-351x480.jpg"
    />
    <ServiceCard
      title="איחוד חובות"
      description="אסטרטגיות לאיחוד וניהול חובות בצורה יעילה."
      image="https://www.hon.co.il/wp-content/uploads/2011/11/%D7%9E%D7%93%D7%A8%D7%99%D7%9B%D7%99-%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA-55x55-1.jpg"
    />
    <ServiceCard
      title="תכנון משכנתא"
      description="שירותי תכנון מקיפים למשכנתא שלך."
      image="https://mashkantaguru.co.il/wp-content/uploads/2019/03/mashkanta-hol-430x330.jpg"
    />
    <ServiceCard
      title="מיחזור הלוואות"
      description="סיוע במציאת אפשרויות מיחזור טובות יותר."
      image="https://www.hon.co.il/wp-content/uploads/2016/03/mortgage-351x480.jpg"
    />
    <ServiceCard
      title="איחוד חובות"
      description="אסטרטגיות לאיחוד וניהול חובות בצורה יעילה."
      image="https://www.hon.co.il/wp-content/uploads/2011/11/%D7%9E%D7%93%D7%A8%D7%99%D7%9B%D7%99-%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA-55x55-1.jpg"
    />
  </Container>
);

export default Services;

// Styled Components
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;
