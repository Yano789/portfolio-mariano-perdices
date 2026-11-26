export type TeamMember = { name: string; role: string; linkedIn?: string };
export type Section = { heading: string; body?: string; list?: string[] };

export type Project = {
  slug: string;
  title: string;
  year: string;
  myRole: string;
  summary: string;
  tags: string[];
  cover?: string;
  images?: string[];
  link?: { label: string; href: string };
  team?: TeamMember[];
  sections: Section[];
};

export const projects: Project[] = [
  {
    slug: "paytient",
    title: "Paytient",
    year: "2025",
    myRole: "Chatbot and AI summarizer",
    summary:
      "An AI assistant for clinics that transcribes doctor–patient consultations, turns them into structured medical reports, and answers patient-specific questions. Built for the NUS-Guru Generative AI Challenge 2025.",
    tags: ["LLMs", "React", "Express", "Speech-to-text"],
    cover: "/images/projects/paytient/SlideDeck.jpg",
    images: [
      "/images/projects/paytient/15.jpg",
      "/images/projects/paytient/16.jpg",
      "/images/projects/paytient/17.jpg",
      "/images/projects/paytient/18.jpg",
      "/images/projects/paytient/19.jpg",
      "/images/projects/paytient/20.jpg",
    ],
    link: { label: "Source on GitHub", href: "https://github.com/Yano789/chAmpIon_NUS_GURU_Paytient" },
    team: [
      { name: "Amrita Varshini Kumar", role: "Project lead", linkedIn: "https://www.linkedin.com/in/amrita-varshini-kumar/" },
      { name: "Dharesan G K", role: "Project co-lead", linkedIn: "https://www.linkedin.com/in/dharesan/" },
      { name: "Ky Dinh Van", role: "Voice-to-text", linkedIn: "https://www.linkedin.com/in/kydinhvan/" },
      { name: "Mariano Perdices", role: "Chatbot and AI summarizer", linkedIn: "https://www.linkedin.com/in/mariano-perdices/" },
      { name: "Wei Chien Lau", role: "Figma", linkedIn: "https://www.linkedin.com/in/lauweichien/" },
      { name: "Yap Li Ying", role: "Figma", linkedIn: "https://www.linkedin.com/in/yap-li-ying/" },
    ],
    sections: [
      {
        heading: "What it does",
        list: [
          "Speech-to-text: hands-free notes during consultations, using the Deepgram API.",
          "AI medical summary: converts the conversation into a structured report with DeepSeek v3 via OpenRouter.",
          "Patient chatbot: answers questions in the context of that patient's record.",
        ],
      },
      {
        heading: "My part",
        body: "I built the chatbot and the conversation summarizer, including the prompt engineering that keeps responses careful and the structure of the generated reports.",
      },
      {
        heading: "Stack",
        list: ["React with Vite", "Express.js", "OpenRouter (DeepSeek v3)", "Deepgram SDK", "PyAudio for capture"],
      },
      {
        heading: "What was hard",
        list: [
          "Getting audio buffering smooth enough for live transcription.",
          "Prompting for medical accuracy without the model overreaching.",
          "Handling sensitive data while passing it between Python and Node services.",
        ],
      },
    ],
  },
  {
    slug: "predicting-food-security-index-with-machine-learning",
    title: "Food Security Index model",
    year: "2024",
    myRole: "Data scientist",
    summary:
      "A regression model that predicts a country's Food Security Index from 20+ economic, agricultural and health indicators, so policymakers can see which levers matter most.",
    tags: ["Python", "scikit-learn", "Regression", "Plotly"],
    cover: "/images/projects/food-security/slides-deck.jpg",
    images: ["/images/projects/food-security/fsi-webapp.jpg"],
    link: { label: "Source on GitHub", href: "https://github.com/Yano789/food_security_index_model" },
    team: [
      { name: "Nadine Verelia Moiras", role: "Data scientist", linkedIn: "https://www.linkedin.com/in/nadinemoiras/" },
      { name: "Valerie Lim Li Ting", role: "Researcher", linkedIn: "https://www.linkedin.com/in/valerie-lim-27986a244/" },
      { name: "Jing Yang Loke", role: "Software engineer" },
      { name: "Beatriz Acosta Ong", role: "Researcher", linkedIn: "https://www.linkedin.com/in/beatriz-ong-28115b1ba/" },
      { name: "Mariano Perdices", role: "Data scientist", linkedIn: "https://www.linkedin.com/in/mariano-perdices/" },
    ],
    sections: [
      {
        heading: "Approach",
        body: "We combined World Bank, FAO and Economist Impact data covering 187 countries over 20 years, then compared three models of increasing scope.",
      },
      {
        heading: "Results",
        list: [
          "Economic indicators only: R² 0.712",
          "Agricultural and economic: R² 0.791",
          "Full model with health and social indicators: R² 0.843",
        ],
      },
      {
        heading: "Findings",
        list: [
          "The Human Development Index was the strongest single predictor.",
          "Agricultural spending relates to food security non-linearly.",
          "The key drivers differ by region, so one policy does not fit all.",
        ],
      },
      {
        heading: "Stack",
        list: ["pandas for cleaning and imputation", "scikit-learn polynomial regression with cross-validation", "Plotly and matplotlib for the dashboard and reports"],
      },
    ],
  },
  {
    slug: "kairo",
    title: "Kairo",
    year: "2025",
    myRole: "Android developer",
    summary:
      "An Android app that puts SUTD campus life in one place: events, a calendar, a weekly timetable, and Kai, a chatbot that edits your schedule from plain language.",
    tags: ["Java", "Android", "Retrofit", "LLMs"],
    cover: "/images/projects/kairo-android-app/slides-deck.jpg",
    link: { label: "Source on GitHub", href: "https://github.com/Yano789/kairo" },
    sections: [
      {
        heading: "Features",
        list: [
          "Discovery feed of campus and club events, with filters.",
          "Monthly calendar with colour-coded activity.",
          "Weekly timetable with custom events.",
          "Kai, an assistant that schedules things for you through DeepSeek via OpenRouter.",
        ],
      },
      {
        heading: "Stack",
        list: ["Java and XML", "Material CalendarView", "ThreeTenABP", "Guava", "Retrofit"],
      },
    ],
  },
  {
    slug: "glamscan",
    title: "GlamScan",
    year: "2026",
    myRole: "Machine learning",
    summary:
      "Image search for cosmetics. Upload a photo of a product and GlamScan works out what it is and finds visually similar products, ranked by shade.",
    tags: ["CLIP", "FAISS", "Computer vision", "Python"],
    link: { label: "Source on GitHub", href: "https://github.com/Yano789/GlamScan" },
    sections: [
      {
        heading: "How it works",
        list: [
          "CLIP ViT-L-14 embeds the uploaded image and classifies the product type zero-shot (lipstick, blush, foundation and so on).",
          "The dominant colour is extracted so results with a similar shade rank higher.",
          "A FAISS index over 1,500+ products returns nearest neighbours, filtered to the same category.",
          "Runs on GPU with fp16 mixed precision for roughly 2 to 3 times faster inference.",
        ],
      },
    ],
  },
  {
    slug: "cfa-research-challenge",
    title: "CFA Institute Research Challenge",
    year: "2024",
    myRole: "Equity research team member",
    summary:
      "Wrote an equity research report and pitched a contrarian SELL recommendation on Sembcorp Industries (SGX: U96). Our team reached the Singapore national finals.",
    tags: ["Financial modeling", "Valuation", "Equity research"],
    sections: [
      {
        heading: "The work",
        body: "From October 2023 to February 2024 we modelled Sembcorp Industries, wrote a full research report and pitched our SELL call, finishing as national finalists.",
      },
    ],
  },
  {
    slug: "im-connected",
    title: "IM-CONNECTED",
    year: "2025",
    myRole: "Team project",
    summary:
      "A web app for caregivers, built with Lion Befrienders: a community forum, a medicine scanner and logger, and an AI chatbot. Made for SUTD's Elements of Software Construction.",
    tags: ["TypeScript", "React", "Docker"],
    link: { label: "Source on GitHub", href: "https://github.com/Yano789/im-connected" },
    sections: [
      {
        heading: "Features",
        list: ["Forum with drafts, saved posts and replies", "Medicine scanner and logger", "AI chatbot for caregiving questions", "Email verification and account recovery"],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
