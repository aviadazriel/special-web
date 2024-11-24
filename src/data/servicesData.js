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
  },
  {
    id: 4,
    title: "משכנתא לזוגות צעירים",
    description: "פתרונות מימון מותאמים לזוגות צעירים כדי לאפשר התחלת חיים משותפים בצורה כלכלית.",
    icon: faUsers,
  },
  {
    id: 5,
    title: "משכנתא לדירה בהנחה",
    description: "ייעוץ משכנתא עבור רכישת דירה בתנאים מיוחדים של מחירים מוזלים.",
    icon: faHandHoldingUsd,
  },
  {
    id: 6,
    title: "משכנתא למשפרי דיור",
    description: "ליווי מקצועי במעבר דירה תוך שמירה על תנאים מיטביים.",
    icon: faTools,
  },
  {
    id: 7,
    title: "מחזור משכנתא",
    description: "בחינת תנאי המשכנתא הקיימת והשגת מימון טוב יותר דרך מיחזור.",
    icon: faRedo,
  },
  {
    id: 8,
    title: "משכנתא לכל מטרה",
    description: "הלוואת משכנתא לשימושים שונים, כולל שיפוץ, חופשה, ועוד.",
    icon: faUmbrella,
  },
  {
    id: 9,
    title: "איחוד הלוואות",
    description: "הלוואת משכנתא לשימושים שונים, כולל שיפוץ, חופשה, ועוד.",
    icon: faUmbrella,
  },
];
// משכנתא לבניה עצמית

export default services;
