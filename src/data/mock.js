export const profilephot = new URL('../assets/profile.png', import.meta.url).href;

export const personalInfo = {
  name: "Siddaroodh Venkatapur",
  role: "B.Tech Graduate (2026) | Aspiring Software & Backend Developer",
  email: "siddaroodhv@gmail.com",
  phone: "+91-8618075500",
  location: "Bengaluru, Karnataka",
  linkedin: "https://www.linkedin.com/in/siddaroodh-821551262",
  github: "https://github.com/siddaroodh05",
  leetcode: "https://leetcode.com/u/siddaroodh__2004/",
  hackerrank: "https://www.hackerrank.com/profile/siddaroodh2004",
  profileImage: profilephot,
  resumeUrl: "https://drive.google.com/file/d/17aTczUqCocRdZXmyB7uu1FABRy5w5kiH/view?usp=sharing",
  about: "B.Tech Graduate in Computer Science (AI & ML) from Alliance University, building AI-powered web applications with React and FastAPI, and passionate about solving real-world problems through clean code, scalable systems, and applied AI."
};


export const skills = {

  backend: [
    { name: "Python", level: 75 },
    { name: "FastAPI", level: 75 },
    { name: "Java", level: 70 }
  ],
  database: [
    { name: "MySQL", level: 60 }, {
      name: "PostgreSQL", level: 65
    }
  ],
  tools: [
    { name: "Git & GitHub", level: 65 },
    { name: "VS Code", level: 65 },
    { name: "Data Structures", level: 75 },
    { name: "OOP", level: 70 }
  ],
  frontend: [
    { name: "React", level: 85 },
    { name: "JavaScript (ES6+)", level: 70 },
    { name: "HTML5", level: 70 },
    { name: "CSS3", level: 50 }
  ],
};

export const projects = [

  {
    id: 3,
    title: "FinTech-transaction-platform",
    description: "Built a microservices-based FinTech platform with secure JWT authentication, idempotent fund transfers, consistent balance management, and a React frontend using Zustand integrated through an API Gateway to FastAPI services.",
    image: "https://tse1.mm.bing.net/th/id/OIP.CykPyN_A6KbCYVDIdVDFuAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    technologies: ["FastAPI", "React", "PostgreSQL", "REST APIs", "API Gateway"],
    github: "https://github.com/siddaroodh05",
    demo: "#"
  },
  {
    id: 4,
    title: "ATS Launchpad – AI Resume Analyzer",
    description: "AI-powered ATS platform for job-fit analysis, skill gap detection, MCQ assessments, and job recommendations using FastAPI, React, and Gemini 2.5 Flash.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Gemini 2.5 Flash",
      "ReportLab",
      "REST APIs"
    ],
    github: "https://github.com/siddaroodh05/ATS-Launchpod-Full-Stack-Resume-Analyzer-Job-Fit-Platform",
    demo: "https://atslaunchpad1.vercel.app"
  },
  {
    id: 1,
    title: "DMart E-Commerce Web Application",
    description: "A full-featured e-commerce web application with product browsing, cart management, and checkout functionality. Built with modern React patterns and responsive design.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    technologies: ["React", "JavaScript (ES6)", "HTML", "CSS"],
    github: "https://github.com/siddaroodh05/DMart-Clone-React-E-Commerce-Web-Application",
    demo: "#"
  },
  {
    id: 2,
    title: "Stock Portfolio Optimization",
    description: "An intelligent stock portfolio optimization tool that analyzes market data and provides investment recommendations using data science techniques and visualization.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "yFinance"],
    github: "https://github.com/siddaroodh05/Stock-Portfolio-Optimization",
    demo: "#"
  }



];

export const education = [
  {
    id: 1,
    institution: "Alliance University",
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Artificial Intelligence and Machine Learning",
    year: "2022 - 2026",
    gpa: "7.6 CGPA"
  }
];

export const certifications = [
  {
    id: 1,
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025"
  }
];

export const achievements = [
  "5★ Rating on HackerRank (Python)",
  "Solved 250+ coding problems on LeetCode"
];