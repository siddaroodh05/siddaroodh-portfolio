import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { personalInfo, skills, projects, education, certifications, achievements } from '../data/mock';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-container">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-kicker">Welcome to my portfolio / Aspiring backend engineer</p>
            <h1 className="hero-title">
              <span className="highlight">{personalInfo.name}</span>
            </h1>
            <p className="hero-subtitle">Backend Engineer / Java / Spring Boot / PostgreSQL</p>
            <p className="hero-description">
              I engineer reliable backend systems that transform complex challenges into elegant, scalable solutions.
            </p>
            <div className="hero-buttons">
              <a href={personalInfo.resumeUrl} download className="btn btn-primary">
                Download Resume
              </a>
              <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn btn-secondary">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <img src={personalInfo.profileImage} alt={personalInfo.name} className="profile-photo" />
            </div>
            <div className="about-text">
              <p>{personalInfo.about}</p>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">290+</span>
                  <span className="stat-label">LeetCode Problems</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5★</span>
                  <span className="stat-label">HackerRank Python</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1</span>
                  <span className="stat-label">Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">Backend</h3>
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="skill-category">
              <h3 className="category-title">Database</h3>
              {skills.database.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="skill-category">
              <h3 className="category-title">Tools & Others</h3>
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="skill-category">
              <h3 className="category-title">Frontend</h3>
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        GitHub
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience/Education Section */}
      <section id="experience" className="experience-section">
        <div className="section-container">
          <h2 className="section-title">Education & Certifications</h2>

          <div className="timeline">
            <h3 className="subsection-title">Education</h3>
            {education.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{edu.year}</span>
                  <h4 className="timeline-title">{edu.degree}</h4>
                  <p className="timeline-subtitle">{edu.institution}</p>
                  {edu.specialization && <p className="timeline-detail">Specialization: {edu.specialization}</p>}
                  <p className="timeline-detail">Grade: {edu.gpa}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="certifications">
            <h3 className="subsection-title">Certifications</h3>
            <div className="cert-grid">
              {certifications.map((cert) => (
                <div key={cert.id} className="cert-card">
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-year">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="achievements">
            <h3 className="subsection-title">Achievements</h3>
            <ul className="achievements-list">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>I’m always open to learning through new projects and internship opportunities.</p>

              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div className="social-links">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  LinkedIn
                </a>
                <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="social-link">
                  LeetCode
                </a>
                <a href={personalInfo.hackerrank} target="_blank" rel="noopener noreferrer" className="social-link">
                  HackerRank
                </a>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 {personalInfo.name}. All rights reserved.</p>
          <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
            ↑
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;