export const phoneDisplay = "+1 (403) 680-3870";
export const whatsappNumber = "14036803870";
export const leadEmail = "sebsirra13@gmail.com";

export function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const messages = {
  consultation:
    "Hello Sierra Language Academy, I would like to book a free consultation. My goal is to improve my language skills and I would like to learn more about the best program for me.",
  quote:
    "Hello Sierra Language Academy, I would like to request a quote for online language lessons. Please send me information about availability, plans, and next steps.",
  weeklyTrial:
    "Hello Sierra Language Academy, I am interested in the Weekly Trial plan for $120 CAD. Please send me details about schedule options and how to get started.",
  standard:
    "Hello Sierra Language Academy, I am interested in the Standard Program for $440 CAD. Please send me details about schedule options and enrollment.",
  intensive:
    "Hello Sierra Language Academy, I am interested in the Intensive Program for $1100 CAD. Please send me details about the full program and availability.",
  exams:
    "Hello Sierra Language Academy, I am interested in exam preparation for CELPIP, IELTS, TEF, or TCF. Please help me choose the right preparation plan.",
  contact:
    "Hello Sierra Language Academy, I would like more information about your online language lessons and exam preparation programs."
};

export const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Languages", href: "/languages" },
  { label: "Exams", href: "/exams" },
  { label: "Methodology", href: "/methodology" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export const headerLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Exams", href: "/exams" },
  { label: "Methodology", href: "/methodology" },
  { label: "Testimonials", href: "/testimonials" }
];

export const languages = [
  {
    name: "English",
    tag: "Global communication",
    description:
      "Business, immigration, academic writing, conversation, grammar, and confident professional communication.",
    levels: ["Beginner", "Intermediate", "Advanced"]
  },
  {
    name: "French",
    tag: "Culture and certification",
    description:
      "Conversation, grammar, pronunciation, Canadian immigration goals, TEF, TCF, and real-life fluency.",
    levels: ["Beginner", "Intermediate", "Advanced"]
  },
  {
    name: "Spanish",
    tag: "Connection and fluency",
    description:
      "Practical Spanish for work, travel, relationships, culture, pronunciation, and everyday confidence.",
    levels: ["Beginner", "Intermediate", "Advanced"]
  },
  {
    name: "Italian",
    tag: "Language through culture",
    description:
      "Conversational Italian, travel preparation, pronunciation, grammar foundations, and cultural immersion.",
    levels: ["Beginner", "Intermediate"]
  },
  {
    name: "Portuguese",
    tag: "Structured mastery",
    description:
      "Portuguese for conversation, travel, professional goals, grammar clarity, and steady progression.",
    levels: ["Beginner", "Intermediate"]
  }
];

export const programs = [
  {
    name: "Weekly Trial",
    price: "$120 CAD",
    lessons: "4 lessons",
    duration: "1 week",
    description:
      "A focused entry point to evaluate your level, define goals, and experience Sierra's personalized approach.",
    includes: ["Personalized curriculum", "Progress tracking"],
    message: messages.weeklyTrial
  },
  {
    name: "Standard Program",
    price: "$440 CAD",
    lessons: "16 lessons",
    duration: "1 month",
    featured: true,
    description:
      "A balanced program for consistent progress with homework, feedback, and structured language practice.",
    includes: [
      "Personalized curriculum",
      "Homework",
      "Progress tracking",
      "Exam preparation"
    ],
    message: messages.standard
  },
  {
    name: "Intensive Program",
    price: "$1100 CAD",
    lessons: "48 lessons",
    duration: "3 months",
    description:
      "A deep, goal-driven track for exam readiness, immigration goals, professional confidence, or rapid growth.",
    includes: [
      "Personalized curriculum",
      "Homework",
      "Progress tracking",
      "Exam preparation",
      "Mock interviews"
    ],
    message: messages.intensive
  }
];

export const exams = [
  {
    code: "CELPIP",
    name: "Canadian English Language Proficiency Index Program",
    description:
      "Preparation for Canadian immigration and citizenship goals through timed practice, strategy, and module-by-module feedback."
  },
  {
    code: "IELTS",
    name: "International English Language Testing System",
    description:
      "Academic and immigration preparation across listening, reading, writing, and speaking with focused coaching."
  },
  {
    code: "TEF",
    name: "Test d'Evaluation de Francais",
    description:
      "French proficiency preparation for Canadian immigration goals with structured practice and speaking confidence."
  },
  {
    code: "TCF",
    name: "Test de Connaissance du Francais",
    description:
      "French certification preparation with guided practice, scoring strategy, and interview-style coaching."
  }
];

export const methodology = [
  {
    step: "01",
    title: "Diagnostic Assessment",
    description:
      "Start with a clear view of your current level, target outcome, available schedule, and learning priorities."
  },
  {
    step: "02",
    title: "Personalized Curriculum",
    description:
      "Lessons are built around your goals, whether professional communication, immigration, exams, travel, or cultural fluency."
  },
  {
    step: "03",
    title: "Conversation-First Practice",
    description:
      "Class time prioritizes guided speaking, correction, pronunciation, and real communication instead of passive memorization."
  },
  {
    step: "04",
    title: "Precision Feedback",
    description:
      "You receive focused corrections, homework, and progress tracking so every lesson builds toward measurable improvement."
  }
];

export const testimonials = [
  {
    name: "Mariana L.",
    language: "French - CELPIP Preparation",
    text:
      "Cristian tailored every lesson to my immigration timeline. I passed CELPIP with confidence and finally felt ready to communicate clearly."
  },
  {
    name: "Daniel R.",
    language: "English - IELTS",
    text:
      "The methodology was practical and structured. After three months, I felt more confident in professional meetings and everyday conversations."
  },
  {
    name: "Sofia M.",
    language: "Spanish",
    text:
      "Each class felt personal, elegant, and useful. The lessons connected grammar, culture, and real conversation in a natural way."
  },
  {
    name: "Ahmed K.",
    language: "French - TEF",
    text:
      "The exam practice helped me understand what to expect and where to focus. I felt more organized, calmer, and better prepared."
  },
  {
    name: "Elena V.",
    language: "Italian",
    text:
      "The lessons made Italian feel approachable. I improved my pronunciation, learned useful expressions, and gained confidence for travel."
  }
];

export const faqs = [
  {
    question: "Are lessons online?",
    answer:
      "Yes. Sierra Language Academy offers online private and small-group lessons, so students can learn from anywhere with a flexible schedule."
  },
  {
    question: "Which languages are available?",
    answer:
      "The academy offers English, French, Spanish, Italian, and Portuguese lessons for beginner, intermediate, and advanced learners depending on the language."
  },
  {
    question: "Do you prepare students for exams?",
    answer:
      "Yes. Sierra Language Academy offers specialized preparation for CELPIP, IELTS, TEF, and TCF with practice, feedback, and scoring strategy."
  },
  {
    question: "How do I choose the right program?",
    answer:
      "The best first step is a free consultation by WhatsApp. The academy will review your goals, timeline, level, and schedule before recommending a plan."
  },
  {
    question: "Can I ask for a quote before enrolling?",
    answer:
      "Yes. All quotes, plan selection, consultation scheduling, and enrollment questions are handled directly through WhatsApp."
  }
];
