// src/data/servicesData.js

import { faHome,faHouseChimneyCrack , faHammer, faRedo, faUsers, faHandHoldingUsd, faTools, faBuilding, faUmbrella } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    id: 1,
    title: "מסורבי משכנתא",
    description: "סיוע לאנשים אשר הבקשה שלהם למשכנתא נדחתה על ידי הבנקים, ומתן פתרונות חלופיים.",
    icon: faHandHoldingUsd,
    image: "/images/services/d.webp"
  },
  {
    id: 2,
    title: "משכנתא לדירה ראשונה",
    description: "ליווי צמוד במתן פתרונות פיננסיים למשכנתא לרוכשי דירה ראשונה.",
    icon: faHome,
    image: "/images/services/first.webp"
  },
  {
    id: 3,
    title: "משכנתא לדירה שניה",
    description: "שירותי ייעוץ והשגת תנאים מיטביים עבור רוכשי דירה נוספת להשקעה או מגורים.",
    icon: faBuilding,
    image: "/images/services/second.webp"
  },
  {
    id: 4,
    title: "משכנתא לזוגות צעירים",
    description: "פתרונות מימון מותאמים לזוגות צעירים כדי לאפשר התחלת חיים משותפים בצורה כלכלית.",
    icon: faUsers,
    image: "/images/services/4.webp"
  },
  {
    id: 5,
    title: "משכנתא לדירה בהנחה",
    description: "ייעוץ משכנתא עבור רכישת דירה בתנאים מיוחדים של מחירים מוזלים.",
    icon: faHandHoldingUsd,
    image: "/images/services/5.jpg"
  },
  {
    id: 6,
    title: "משכנתא למשפרי דיור",
    description: "ליווי מקצועי לכל שלבי מעבר הדירה, כולל תכנון פיננסי, השגת תנאי מימון מיטביים, ניהול משא ומתן עם הבנק, וטיפול בדרישות רגולטוריות..",
    icon: faTools,
    image: "/images/services/6.webp"
  },
  {
    id: 7,
    title: "מחזור משכנתא",
    description: "בחינת תנאי המשכנתא הקיימת והשגת מימון טוב יותר דרך מיחזור.",
    icon: faRedo,
    image: "/images/services/7.webp"
  },
  {
    id: 8,
    title: "משכנתא לכל מטרה",
    description: "הלוואת משכנתא לשימושים שונים, כולל שיפוץ, חופשה, ועוד.",
    icon: faUmbrella,
    image: "/images/services/8.webp"
  },
  {
    id: 9,
    title: "איחוד הלוואות",
    description: "הלוואת משכנתא לשימושים שונים, כולל שיפוץ, חופשה, ועוד.",
    icon: faUmbrella,
     image: "/images/services/9.webp"
  },
  {
    id: 10,
    title: "משכנתא הפוכה",
    description: "משכנתא הפוכה מאפשרת לבעלי נכסים בגילאי 60 ומעלה לקבל גישה להון שצברו בנכסיהם מבלי למכור את הבית. עם אפשרות לתשלומים חודשיים או סכום חד פעמי, בעלי הנכס יכולים לשמור על בעלותם ולהשתמש בכסף למטרות שונות, תוך שמירה על איכות החיים.",
    icon: faHouseChimneyCrack ,
     image: "/images/services/9.webp"
  },
  {
    id: 11,
    title: "משכנתא לבניה עצמית",
    description: "משכנתא לבנייה עצמית מיועדת לבונים המעוניינים לממן את תהליך הבנייה. השירות שלנו כולל ייעוץ מקצועי, סיוע בהכנת תוכניות פיננסיות, ושחרור הכסף בהדרגה בהתאם להתקדמות הבנייה, כדי להבטיח שהפרויקט יתנהל בצורה חלקה ויעילה.",
    icon: faHammer  ,
     image: "/images/services/9.webp"
  },
];

export default services;
