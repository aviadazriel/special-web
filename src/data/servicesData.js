// src/data/servicesData.js

import { faHome, faRedo, faUsers, faHandHoldingUsd, faTools, faBuilding, faUmbrella } from '@fortawesome/free-solid-svg-icons';

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
];
// משכנתא לבניה עצמית

export default services;
