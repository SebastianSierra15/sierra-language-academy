export const siteName = "Sierra Language Academy";
export const defaultSiteUrl = "https://sierra-language-academy.sierralanguageacademy2026.workers.dev";
export const defaultOgImage = "/assets/promo.jpeg";
export const defaultOgImageAlt =
  "Sierra Language Academy online multilingual coaching and exam preparation";

export type PageSeo = {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  breadcrumbLabel: string;
  ogImage: string;
  ogImageAlt: string;
  priority: string;
  changefreq: string;
};

export const pageSeo = {
  home: {
    title: "Sierra Language Academy | Online Language Coaching",
    description:
      "Premium online language lessons in English, French, Spanish, Italian and Portuguese, plus CELPIP, IELTS, TEF and TCF preparation for students, professionals and immigrants.",
    keywords: [
      "Sierra Language Academy",
      "online language lessons Canada",
      "private English tutor Canada",
      "French tutor online Canada",
      "CELPIP preparation",
      "IELTS preparation",
      "TEF preparation",
      "TCF preparation",
      "Spanish lessons online",
      "Italian lessons online",
      "Portuguese lessons online"
    ],
    path: "/",
    breadcrumbLabel: "Home",
    ogImage: "/assets/promo.jpeg?page=home",
    ogImageAlt: defaultOgImageAlt,
    priority: "1.0",
    changefreq: "weekly"
  },
  programs: {
    title: "Language Programs | Sierra Language Academy",
    description:
      "Compare Sierra Language Academy plans: Weekly Trial, Standard Program and Intensive Program for personalized online language coaching and exam preparation in CAD.",
    keywords: [
      "language program prices Canada",
      "online language coaching plans",
      "private language lessons CAD",
      "language academy programs",
      "Sierra Language Academy programs"
    ],
    path: "/programs",
    breadcrumbLabel: "Programs",
    ogImage: "/assets/promo.jpeg?page=programs",
    ogImageAlt: "Sierra Language Academy program plans and online coaching",
    priority: "0.9",
    changefreq: "weekly"
  },
  languages: {
    title: "Online Language Lessons | English French Spanish",
    description:
      "Learn English, French, Spanish, Italian or Portuguese online with personalized lessons, flexible scheduling and conversation-first coaching for real communication.",
    keywords: [
      "online English lessons",
      "online French lessons",
      "online Spanish lessons",
      "online Italian lessons",
      "online Portuguese lessons",
      "multilingual online academy"
    ],
    path: "/languages",
    breadcrumbLabel: "Languages",
    ogImage: "/assets/promo.jpeg?page=languages",
    ogImageAlt: "Online English French Spanish Italian and Portuguese lessons",
    priority: "0.9",
    changefreq: "weekly"
  },
  exams: {
    title: "CELPIP IELTS TEF TCF Preparation Online",
    description:
      "Prepare online for CELPIP, IELTS, TEF and TCF with diagnostic assessment, timed practice, mock interviews and strategy coaching for immigration and academic goals.",
    keywords: [
      "CELPIP preparation online",
      "IELTS preparation online",
      "TEF preparation Canada",
      "TCF preparation Canada",
      "language exam tutor",
      "exam preparation for immigration"
    ],
    path: "/exams",
    breadcrumbLabel: "Exams",
    ogImage: "/assets/promo.jpeg?page=exams",
    ogImageAlt: "CELPIP IELTS TEF and TCF exam preparation online",
    priority: "0.95",
    changefreq: "weekly"
  },
  methodology: {
    title: "Language Learning Methodology | Sierra Academy",
    description:
      "Discover Sierra Language Academy's methodology: diagnostic assessment, personalized curriculum, conversation-first practice and precise feedback for measurable progress.",
    keywords: [
      "language learning methodology",
      "personalized language curriculum",
      "conversation-first language learning",
      "online language coaching methodology"
    ],
    path: "/methodology",
    breadcrumbLabel: "Methodology",
    ogImage: "/assets/promo.jpeg?page=methodology",
    ogImageAlt: "Sierra Language Academy personalized learning methodology",
    priority: "0.8",
    changefreq: "monthly"
  },
  testimonials: {
    title: "Student Testimonials | Sierra Language Academy",
    description:
      "Read student stories from Sierra Language Academy and learn how personalized online coaching supports language confidence, exam preparation and real communication.",
    keywords: [
      "language academy testimonials",
      "online language tutor reviews",
      "student language coaching stories",
      "Sierra Language Academy testimonials"
    ],
    path: "/testimonials",
    breadcrumbLabel: "Testimonials",
    ogImage: "/assets/promo.jpeg?page=testimonials",
    ogImageAlt: "Sierra Language Academy student testimonials",
    priority: "0.7",
    changefreq: "monthly"
  },
  faq: {
    title: "FAQ | Online Language Lessons And Exam Prep",
    description:
      "Find answers about Sierra Language Academy online lessons, available languages, CELPIP, IELTS, TEF and TCF exam preparation, schedules, quotes and WhatsApp contact.",
    keywords: [
      "language lessons FAQ",
      "online language academy questions",
      "CELPIP IELTS TEF TCF FAQ",
      "Sierra Language Academy FAQ"
    ],
    path: "/faq",
    breadcrumbLabel: "FAQ",
    ogImage: "/assets/promo.jpeg?page=faq",
    ogImageAlt: "Frequently asked questions about Sierra Language Academy",
    priority: "0.75",
    changefreq: "monthly"
  },
  contact: {
    title: "Contact Sierra Language Academy | WhatsApp",
    description:
      "Contact Sierra Language Academy by WhatsApp to book a free consultation, request a quote, choose a language program or ask about CELPIP, IELTS, TEF and TCF preparation.",
    keywords: [
      "contact Sierra Language Academy",
      "book free language consultation",
      "language lessons WhatsApp",
      "language program quote"
    ],
    path: "/contact",
    breadcrumbLabel: "Contact",
    ogImage: "/assets/promo.jpeg?page=contact",
    ogImageAlt: "Contact Sierra Language Academy by WhatsApp",
    priority: "0.9",
    changefreq: "weekly"
  }
} satisfies Record<string, PageSeo>;

export const seoRoutes = Object.values(pageSeo);
