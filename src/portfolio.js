/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

// import easy from "./assets/lottie/easy.json"; // 已註解掉不存在的資源檔

const settings = {
  isSplash: false, // 改為 false 避免因為找不到 lottie 動畫而卡住 Splash 畫面
};

// SEO Related settings
const seo = {
  title: "符靖佳 的個人作品集與簡介",
  description:
    "專業口語表達技巧、講評講師與職涯引導師。我無法增加生命的長度，我可以增加生命的密度。",
  og: {
    title: "符靖佳 講師 Portfolio",
    type: "website",
    url: "http://yourdomain.com/",
  },
};

// Home Page
const greeting = {
  title: "符靖佳",
  logo_name: "FuChingChia",
  nickname: "fujj",
  subTitle:
    "口語表達與講評專家 / 104人力銀行職涯引導師 / 龍潭戲舞營團長。「我無法增加生命的長度，我可以增加生命的密度。」",
  resumeLink: "",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/share/1cCfPoY9au/?mibextid=wwXIfr",
    fontAwesomeIcon: "fa-facebook-f", // Fontawesome React icon id
    backgroundColor: "#1877F2", // Facebook blue
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/fujjfujj?stkn=NzNzM3Vha3gxZHc3&utm_source=qr",
    fontAwesomeIcon: "fa-instagram", // Fontawesome React icon id
    backgroundColor: "#E4405F", // Instagram red/pink
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@fujj3610",
    fontAwesomeIcon: "fa-youtube", // Fontawesome React icon id
    backgroundColor: "#FF0000", // YouTube red
  },
];

const skills = {
  data: [
    {
      title: "專業口語表達與講評訓練",
      fileName: "FullStackImg",
      skills: [
        "⚡ 傳授說與寫訓練的基本技巧，結合實作演練提升成效",
        "⚡ 運用敏銳觀察力，引導學員思路與激發想像力",
        "⚡ 具體展現【演】與【講】的舞台魅力與溝通渲染力",
        "⚡ 擔任各大社團、企業與大專院校之專業講評與演講競賽評審",
      ],
      softwareSkills: [
        {
          skillName: "口語表達",
          fontAwesomeCircleColor: "#1071E5",
          iconName: "simple-icons:talktalk",
        },
        {
          skillName: "講評指導",
          fontAwesomeCircleColor: "#2F9E44",
          iconName: "simple-icons:teacher",
        },
        {
          skillName: "舞台展演",
          fontAwesomeCircleColor: "#E03131",
          iconName: "simple-icons:stage",
        },
      ],
    },
    {
      title: "職涯輔導與團隊領導",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ 擔任 104 人力銀行履歷健診志工與職涯引導師，輔導求職者精準定位",
        "⚡ 曾任龍潭健言社第二期社長、桃園市健言教育發展協會第三屆理事長",
        "⚡ 擔任龍潭戲舞營團長，具備豐富的團隊運作、組織帶領與活動企劃經驗",
      ],
      softwareSkills: [
        {
          skillName: "職涯引導",
          fontAwesomeCircleColor: "#FF922B",
          iconName: "simple-icons:compass",
        },
        {
          skillName: "組織領導",
          fontAwesomeCircleColor: "#9C36B5",
          iconName: "simple-icons:leadership",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "明新科技大學",
      subtitle: "企業管理學系 碩士",
      logo_path: "must_logo.png",
      alt_name: "Mingi Shin University",
      duration: "",
      descriptions: [
        "⚡ 深入研究企業管理理論與組織溝通實務，奠定專業授課與領導基石",
      ],
      website_link: "https://www.must.edu.tw/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "中華健言演講暨講師評審",
      subtitle: "- 中華民國健言社",
      logo_path: "certification_logo.png",
      certificate_link: "",
      alt_name: "中華健言",
      color_code: "#843064",
    },
    {
      title: "總會講師暨演講評審",
      subtitle: "- 國際同濟會",
      logo_path: "kiwanis_logo.png",
      certificate_link: "",
      alt_name: "同濟會",
      color_code: "#1F70C1",
    },
    {
      title: "職涯引導師",
      subtitle: "- 104 人力銀行",
      logo_path: "104_logo.png",
      certificate_link: "",
      alt_name: "104",
      color_code: "#FFBB00",
    },
  ],
};

// Experience Page
const experience = {
  title: "授課經歷與社會服務",
  subtitle: "講評教學、專業評審與職涯引導",
  description:
    "自民國 82 年加入健言社，89 年起開始教學授課。長期深耕口語表達、講評訓練及職涯輔導，並致力於推動健言教育與青年培力。",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "教學授課與評審經歷",
      work: true,
      experiences: [
        {
          title: "專業口語表達與講評講師 / 評審",
          company: "各大社團與大專院校",
          company_url: "",
          logo_path: "speaker_logo.png",
          duration: "民國 89 年 - 現今",
          location: "台灣",
          description:
            "授課與評審單位包含：中華健言社、同濟會總會、獅子會、扶輪社、新楊平社區大學、各地講評班與口語表達班，以及明新科技大學、修平科技大學、仁和國中等。",
          color: "#0879bf",
        },
        {
          title: "職涯引導師 & 履歷健診志工",
          company: "104 人力銀行",
          company_url: "https://www.104.com.tw/",
          logo_path: "104_logo.png",
          duration: "服務中",
          location: "台灣",
          description:
            "協助求職者梳理職涯脈絡、優化履歷呈現，進行一對一職涯引導與諮詢。",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "社團與組織領導經歷",
      experiences: [
        {
          title: "第三屆理事長",
          company: "桃園市健言教育發展協會",
          company_url: "",
          logo_path: "association_logo.png",
          duration: "",
          location: "桃園市",
          description: "綜理協會會務，大力推動地方健言教育發展與口語表達培訓。",
          color: "#4285F4",
        },
        {
          title: "第二期社長",
          company: "龍潭健言社",
          company_url: "",
          logo_path: "club_logo.png",
          duration: "",
          location: "桃園市龍潭區",
          description: "帶領社團運作，奠定良好學習風氣與訓練架構。",
          color: "#34A853",
        },
        {
          title: "團長",
          company: "龍潭戲舞營",
          company_url: "",
          logo_path: "dance_logo.png",
          duration: "",
          location: "桃園市龍潭區",
          description: "推動營隊活動、藝術教育與多元展演發展。",
          color: "#FBBC05",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "生活態度與個人興趣",
  description:
    "「好好吃飯、好好睡覺、好好生活」。堅持健康充實的生活哲學，熱愛路跑、騎自行車（108年成功完成自行車環島壯舉），現正熱衷於羽毛球運動。",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "出版與著作",
  description: "個人著作、文章發表與專題分享",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "聯繫 符靖佳 老師",
    profile_image_path: "S__191471630.jpg",
    description:
      "歡迎企業、社團、大專院校邀約口語表達講座、演講講評課程，或進行 104 職涯諮詢交流。",
  },
  blogSection: {
    title: "影音與社群平台",
    subtitle:
      "歡迎透過 YouTube、Facebook 或 Instagram 關注符靖佳老師的最新教學與生活分享。",
    link: "https://www.youtube.com/@fujj3610",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "服務據點 / 地區",
    subtitle: "台灣（桃園市 / 全台各地巡迴授課與評審）",
    locality: "桃園市",
    country: "台灣",
    region: "桃園",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
