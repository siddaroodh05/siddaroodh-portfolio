export const profilephot = new URL('../assets/profile.jpeg', import.meta.url).href;

export const personalInfo = {
  name: "Siddaroodh Venkatapur",
  role: "Final-Year B.Tech Student | Aspiring Full-Stack & AI/ML Engineer",
  email: "siddaroodh2004@gmail.com",
  phone: "+91-8618075500",
  location: "Bengaluru, Karnataka",
  linkedin: "https://www.linkedin.com/in/siddaroodh-821551262",
  github: "https://github.com/siddaroodh05",
  leetcode: "https://leetcode.com/u/siddaroodh_2004",
  hackerrank: "https://www.hackerrank.com/profile/siddaroodh2004",
  profileImage: profilephot,
  resumeUrl: "https://drive.google.com/file/d/1g27uM3ivKM8-2k7S-o8_T4G7oIqEj6Kq/view?usp=sharing",
  about: "Final-year B.Tech Computer Science (AI & ML) student at Alliance University, building AI-powered web applications with React and FastAPI. Passionate about solving real-world problems through clean code, scalable systems, and applied AI."
};


export const skills = {
  frontend: [
    { name: "React", level: 85 },
    { name: "JavaScript (ES6+)", level: 70 },
    { name: "HTML5", level: 70 },
    { name: "CSS3", level: 50 }
  ],
  backend: [
    { name: "Python", level: 75 },
    { name: "FastAPI", level: 75 },
    { name: "Java", level: 70 },
    { name: "C++", level: 50 }
  ],
  database: [
    { name: "MySQL", level: 60 },{
      name: "PostgreSQL",level:65
    }
  ],
  tools: [
    { name: "Git & GitHub", level: 65 },
    { name: "VS Code", level: 65 },
    { name: "Data Structures", level: 60 },
    { name: "OOP", level: 70 }
  ]
};

export const projects = [
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
  },
  {
    id: 3,
    title: "AI-Powered Task Manager",
    description: "Smart task management application with AI-driven priority suggestions and deadline predictions. Features include task categorization and productivity analytics.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    technologies: [, "FastAPI", "Python", "PostgreSQL"],
    github: "https://github.com/siddaroodh05",
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
    gpa: "7.5 CGPA"
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
  "Solved 100+ coding problems on LeetCode",
  "Participated in ML Blitz Hackathon at Alliance University"
];