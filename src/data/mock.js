export const profilephot = new URL('../assets/profile.png', import.meta.url).href;

export const personalInfo = {
  name: "Siddaroodh Venkatapur",
  role: "Software Engineering Graduate (B.Tech 2026) | Backend Software Engineer",
  email: "siddaroodhv@gmail.com",
  phone: "+91-8618075500",
  location: "Bengaluru, Karnataka",
  linkedin: "https://www.linkedin.com/in/siddaroodh-venkatapur-821551262",
  github: "https://github.com/siddaroodh",
  leetcode: "https://leetcode.com/u/siddaroodh__2004/",
  hackerrank: "https://www.hackerrank.com/profile/siddaroodh2004",
  profileImage: profilephot,
  resumeUrl: "https://drive.google.com/file/d/1QnsNhbfr7kmKo7jskii6feOZ__OAahRz/view?usp=sharing",
  about: "Software Engineering graduate (B.Tech 2026) with hands-on experience building scalable backend systems using Java, Spring Boot, Spring Security, and PostgreSQL. Skilled in REST APIs, microservices, authentication, concurrency handling, and transaction management, with strong problem-solving abilities demonstrated through 350+ coding problems across LeetCode, HackerRank, and GeeksforGeeks."
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
  tools: [
    { name: "Git & GitHub", level: 75 },
    { name: "VS Code", level: 75 },
    { name: "Postman", level: 72 },
    { name: "Docker", level: 65 },
    { name: "Data Structures & Algorithms", level: 82 }
  ],
  frontend: [
    { name: "React.js", level: 70 }
  ],
};

export const projects = [

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
    title: "ATS Launchpad – AI Resume Analyzer",
    description: "Built an AI-driven ATS resume analyzer with job-fit analysis, skill gap detection, MCQ assessments, job matching, and downloadable ATS reports.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Gemini 2.5 Flash",
      "ReportLab",
      "REST APIs"
    ],
    github: "https://github.com/siddaroodh/ATS-Launchpod-Full-Stack-Resume-Analyzer-Job-Fit-Platform",
    demo: "https://atslaunchpad1.vercel.app"
  },
  {
    id: 3,
    title: "FinTech Transaction Platform",
    description: "Built a microservices-based FinTech platform with secure JWT authentication, idempotent fund transfers, consistent balance management, and a React frontend integrated through an API Gateway.",
    image: "https://tse1.mm.bing.net/th/id/OIP.CykPyN_A6KbCYVDIdVDFuAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    technologies: ["FastAPI", "React", "PostgreSQL", "REST APIs", "API Gateway"],
    github: "https://github.com/siddaroodh05",
    demo: "#"
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
