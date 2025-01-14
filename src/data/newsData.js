

const news = [
 
    {
      id: 1,
      title: 'הדירות החדשות בת"א מגיעות במחירים מפתיעים',
      link: 'https://www.calcalist.co.il/real-estate/article/r1ens4yzke',
      description: 'כתבה מרתקת על מחירי הנדל"ן בתל אביב ושינויים בשוק.',
      imageUrl: 'https://pic1.calcalist.co.il/picserver3/crop_images/2024/11/06/HJ39gGFb1x/HJ39gGFb1x_0_0_2500_1667_0_x-large.jpg', // Replace with actual image if available
      source: 'Calcalist',
      publishDate: '2024-11-07' // Replace with actual publish date if available
    },
    {
      id: 2,
      title: 'שוק הנדל"ן בתנודתיות: מה צופן העתיד?',
      link: 'https://www.calcalist.co.il/investing/article/rjegyri70',
      description: ' לקוחות משלמים 70 אלף שקל בשנה לבנק למשכנתא, ולמרות זאת חייבים אותו הסכום',
      imageUrl: 'https://pic1.calcalist.co.il/picserver3/crop_images/2023/02/27/rkKfzJ5Rj/rkKfzJ5Rj_1_0_1000_668_0_x-large.jpg',
      source: 'Calcalist',
      publishDate: '2024-05-19'
    },
    {
      id: 3,
      title: 'תחזיות כלכליות לשוק הדיור בישראל',
      link: 'https://www.calcalist.co.il/investing/article/hyb8hnokje',
      description: 'שוק הדיור בוער: זינוק של 32% במשכנתאות בספטמבר לעומת הממוצע',
      imageUrl: 'https://pic1.calcalist.co.il/picserver3/crop_images/2024/09/05/HkhdvbPnR/HkhdvbPnR_0_0_2000_1333_0_x-large.jpg',
      source: 'Calcalist',
      publishDate: '2024-10-15'
    },
    {
      id: 4,
      title: 'ירידות מחירים משמעותיות: האם מדובר במגמה?',
      link: 'https://www.globes.co.il/news/article.aspx?did=1001493211',
      description: 'סקירה על הירידות האחרונות במחירי הנדל"ן בארץ.',
      imageUrl: 'https://res.cloudinary.com/globes/image/upload/t_800X392,f_auto/v1622384296/direct/shutterstock_1923763337_p9tt4d.jpg',
      source: 'Globes',
      publishDate: '2024-11-05'
    },
    {
      id: 5,
      title: 'משקיעים ותיקים משנים גישה בשוק',
      link: 'https://www.calcalist.co.il/article/r1hoki1w1e',
      description: 'מדוע משקיעים ותיקים עוברים לגישות חדשות בתחום ההשקעות.',
      imageUrl: 'https://pic1.calcalist.co.il/picserver3/wcm_upload_dev/2022/09/15/Hk9OzwlWi/calcalistlogn.png',
      source: 'Calcalist',
      publishDate: '2024-11-03'
    },
    {
      id: 6,
      title: 'דעות חדשות על שוק הנדל"ן בשנה הקרובה',
      link: 'https://www.ynet.co.il/economy/article/sjxfcy7dr',
      description: 'מומחים חולקים דעותיהם על תחזיות הנדל"ן לשנה הקרובה.',
      imageUrl: 'https://ynet-pic1.yit.co.il/cdn-cgi/image/f=auto,w=740,q=75/picserver5/crop_images/2021/05/11/H1biM2wO00/H1biM2wO00_0_0_1000_665_0_x-large.jpg',
      source: 'Ynet',
      publishDate: '2024-07-16'
    },
    {
      id: 7,
      title: 'ההשפעות הכלכליות של מגמת העליות בהשקעות נדל"ן',
      link: 'https://www.israelhayom.co.il/business/article/16446438',
      description: 'ניתוח על ההשפעות הכלכליות של העלייה בהשקעות נדל"ן.',
      imageUrl: 'https://www.israelhayom.co.il/wp-content/uploads/2024/09/15/15/DSC_4930-960x640.jpg',
      source: 'IH',
      publishDate: '2024-09-15'
    },
    {
    
      id: 8,
      title: 'לאן צפוי להגיע ענף שטחי העבודה ואיך זה קשור לפקקים?',
      link: 'https://nadlan.walla.co.il/item/3328167',
      description: 'תחזיות אודות שוק המשרדים ועל עליית ערך הנדלן בגוש דן',
      imageUrl: 'https://images.wcdn.co.il/f_auto,q_auto,w_700/2/9/5/8/2958746-46.png', // Replace with actual image if available
      source: 'Walla',
      publishDate: '2019-12-07' // Replace with actual publish date if available
    },
    {
    
      id: 9,
      title: 'בורחים מהמשכנתא צמודת המדד: תנועה ערה במיחזורי המשכנתאות',
      link: 'https://www.themarker.com/realestate/2024-12-24/ty-article/00000193-f967-d657-a39f-ffff701f0000',
      description: 'בנובמבר מוחזרו משכנתאות ב-494 מיליון שקל, עלייה של 10.3% לעומת החודש הקודם ■ שיא של שנתיים וחצי נרשם בהיקף הלקוחות שמיחזרו משכנתא שלקחו בבנק אחד — באמצעות הלוואה בבנק אחר',
      imageUrl: 'https://img.haarets.co.il/bs/00000193-f978-d315-addb-fd7f4e9b0000/f9/6a/b0ddf2564df1a09c436a85576405/630657.jpg?&width=1500&height=872&cmsprod', // Replace with actual image if available
      source: 'DM',
      publishDate: '2024-12-24' // Replace with actual publish date if available
    },
    {
    
      id: 10,
      title: 'סיכום 2024 בנדל"ן: 10 הערים שהכי התייקרו השנה',
      link: 'https://www.ynet.co.il/economy/article/yokra14203000',
      description: 'לא ת"א או ירושלים: דווקא לוד וקריית גת, ואפילו ערים מופגזות כמו עכו ואופקים, הציגו את העליות הגבוהות ביותר במחירי הדיור. בשנה הקשה שחלפה רובנו ‏חיפשנו בעיקר נכס עם ממ"ד, וזה התבטא במחירים.',
      imageUrl: 'https://ynet-pic1.yit.co.il/cdn-cgi/image/f=auto,w=740,q=75/picserver6/crop_images/2024/12/30/H1LqFuxUke/H1LqFuxUke_0_0_851_1406_0_x-large.jpg', // Replace with actual image if available
      source: 'Ynet',
      publishDate: '2024-12-31' // Replace with actual publish date if available
    },
    {
    
      id: 11,
      title: 'טירוף הנדל״ן: שיא כל הזמנים במשכנתאות בדצמבר - 13.8 מיליארד שקל',
      link: 'https://www.calcalist.co.il/investing/article/bk6fwjnvjg',
      description: 'לפי נתוני בנק ישראל, היקף המשכנתאות בדצמבר היה גבוה פי 2.5 מזה שבחודש המקביל ב-2023. שיא גם בהיקף הלוואות הבלון ששיעורן בדצמבר עמד על 23.2%. כלומר כמעט כל הלוואה רביעית נלקחה כבלון. הפעם האחרונה שהיקף המשכנתאות הגיע לשיא הייתה במרץ 2022, רגע לפני תחילת העלאות הריבית',
      imageUrl: `${process.env.PUBLIC_URL}/images/news/news_11.jpg`, // Replace with actual image if available
      source: 'Calcalist',
      publishDate: '2025-01-14' // Replace with actual publish date if available
    },


    
  ];


export default news;
