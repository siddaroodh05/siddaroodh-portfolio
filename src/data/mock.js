export const profilephot = new URL('../assets/profile.png', import.meta.url).href;

export const personalInfo = {
  name: "Siddaroodh Venkatapur",
  role: "Software Engineering Graduate | Backend & Generative AI Engineer",
  email: "siddaroodh2004@gmail.com",
  phone: "+91-8618075500",
  location: "Bengaluru, Karnataka",
  linkedin: "https://www.linkedin.com/in/siddaroodh-venkatapur-821551262",
  github: "https://github.com/siddaroodh05",
  leetcode: "https://leetcode.com/u/siddaroodh__2004/",
  hackerrank: "https://www.hackerrank.com/profile/siddaroodh2004",
  profileImage: profilephot,
  resumeUrl: "https://drive.google.com/file/d/1rwqrR0x_RhjY1IkLyUI7hxBWw6Rwv-CW/view?usp=sharing",
  about: "Software engineering graduate focused on building reliable backend systems and useful AI-powered products. I enjoy integrating large language models into applications and using retrieval-augmented generation (RAG), embeddings, and vector search to make product experiences more relevant and useful. My hands-on work spans Java, Spring Boot, PostgreSQL, Spring AI, Ollama, Hugging Face, and pgvector, alongside REST APIs, authentication, and microservices. I bring a product-minded approach to engineering, from shaping the data pipeline to delivering a clear experience for users."
};


export const skills = {

  backend: [
    { name: "Java", level: 85 },
    { name: "Spring Boot", level: 82 },
    { name: "Spring Security", level: 78 },
    { name: "REST APIs", level: 82 },
    { name: "Microservices", level: 78 }
  ],
  database: [
    { name: "PostgreSQL", level: 78 },
    { name: "Spring Data JPA", level: 78 },
    { name: "Hibernate", level: 72 },
    { name: "SQL", level: 75 }
  ],
  generativeAI: [
    { name: "LLM Integration", level: 76 },
    { name: "Retrieval-Augmented Generation (RAG)", level: 76 },
    { name: "Spring AI", level: 70 },
    { name: "Ollama & Embeddings", level: 70 },
    { name: "pgvector / Semantic Search", level: 70 },
    { name: "Hugging Face", level: 68 }
  ],
  tools: [
    { name: "Git & GitHub", level: 75 },
    { name: "VS Code", level: 75 },
    { name: "Postman", level: 72 },
    { name: "Docker", level: 65 },
    { name: "Data Structures & Algorithms", level: 82 }
  ],
  frontend: [
    { name: "React.js", level: 60 }
  ],
};

export const projects = [
  {
    id: 6,
    title: "GameSense: Content-Based Game Discovery Using RAG",
    description: "Built a Spring Boot game discovery service that turns review history or a custom query into semantic recommendations. Uses LLM-generated queries, Ollama embeddings, and PostgreSQL/pgvector search; evaluation achieved ~70% LLM-judged precision across 200 users.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1000&h=650&fit=crop",
    technologies: ["Java 17", "Spring Boot", "PostgreSQL", "pgvector", "Spring AI", "Ollama", "Hugging Face"],
    github: "https://github.com/siddaroodh05/rag-game-recommendation-system",
    demo: "#"
  },

  {
    id: 1,
    title: "Core Banking System",
    description: "Built Authentication, Account, and Transaction microservices with JWT authentication, refresh token rotation, RBAC, idempotent transaction processing, optimistic locking, and an API Gateway.",
    image: "https://tse1.mm.bing.net/th/id/OIP.CykPyN_A6KbCYVDIdVDFuAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "REST APIs", "API Gateway"],
    github: "https://github.com/siddaroodh",
    demo: "#"
  },
  {
    id: 2,
    title: "ATS Launchpad — Resume Analysis & Career Readiness",
    description: "Built a full-stack career readiness platform for resume parsing, ATS scoring, AI feedback, job-description matching, and personalized MCQ interview prep. Streams typed AI analysis events to the React UI as results arrive, with secure JWT authentication.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "PostgreSQL",
      "JWT",
      "Apache Tika",
      "Spring AI / Groq",
      "Reactor Flux / SSE",
      "React 19",
      "Vite"
    ],
    github: "https://github.com/siddaroodh/ATS-Launchpod-Full-Stack-Resume-Analyzer-Job-Fit-Platform",
    demo: "https://atslaunchpad1.vercel.app"
  },
  {
    id: 4,
    title: "DMart E-Commerce Web Application",
    description: "Built a full-featured e-commerce web application with product browsing, cart management, and checkout functionality using modern React patterns and responsive design.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    technologies: ["React", "JavaScript (ES6)", "HTML", "CSS"],
    github: "https://github.com/siddaroodh05/DMart-Clone-React-E-Commerce-Web-Application",
    demo: "#"
  },
  {
    id: 5,
    title: "Stock Portfolio Optimization",
    description: "Built a stock portfolio optimization tool that analyzes market data and provides investment recommendations using data science techniques and visualization.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "yFinance"],
    github: "https://github.com/siddaroodh05/Stock-Portfolio-Optimization",
    demo: "#"
  },
];

export const education = [
  {
    id: 1,
    institution: "Alliance University",
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Artificial Intelligence and Machine Learning",
    year: "2022 - 2026",
    gpa: "7.6 CGPA"
  },
  {
    id: 2,
    institution: "CV Raman PU College",
    degree: "Pre-University Course (12th Grade)",
    specialization: "Science",
    year: "2020 - 2022",
    gpa: "83.3%"
  },
  {
    id: 3,
    institution: "Government High School, Betageri",
    degree: "Secondary School (10th Grade)",
    specialization: "SSLC",
    year: "2019 - 2020",
    gpa: "80.32%"
  }
];

export const certifications = [
  {
    id: 1,
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025"
  },
  {
    id: 2,
    name: "Problem Solving (Intermediate) Certificate",
    issuer: "HackerRank",
    year: "2024"
  },
  {
    id: 3,
    name: "Generative AI with Large Language Models",
    issuer: "Coursera",
    year: "2024"
  }
];

export const achievements = [
  "5★ Rating on HackerRank (Python)",
  "Solved 350+ coding problems across LeetCode, HackerRank, and GeeksforGeeks"
];
