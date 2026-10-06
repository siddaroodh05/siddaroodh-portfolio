import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Check, Code2, Github, Linkedin,
  Mail, MapPin,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import { personalInfo, skills, projects, education, certifications, achievements } from '../data/mock';
import '../styles/Portfolio.css';
const projectFilters = ['All', 'Backend', 'Full stack', 'Frontend', 'Data'];
const projectType = (project) => {
  const title = project.title.toLowerCase();
  if (title.includes('stock')) return 'Data';
  if (title.includes('dmart')) return 'Frontend';
  if (title.includes('ats') || title.includes('fintech')) return 'Full stack';
  return 'Backend';
};

function Portfolio() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [filter, setFilter] = useState('All');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const visibleProjects = useMemo(
    () => filter === 'All' ? projects : projects.filter((project) => projectType(project) === filter),
    [filter],
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <div className="portfolio-shell">
      <Navbar theme={theme} toggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-inner page-width">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" /> Open to software & GenAI opportunities</p>
              <h1>Building reliable<br /><span>systems that scale.</span></h1>
              <p className="hero-summary">Hey, I’m <strong>Siddaroodh</strong> — a software engineering graduate who builds dependable backend systems and product experiences powered by LLMs and RAG.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
                <a className="button button-quiet" href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16} /></a>
              </div>
              <div className="hero-socials" aria-label="Social profiles">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
                <a href={`mailto:${personalInfo.email}`} aria-label="Email"><Mail size={17} /></a>
                <span className="social-divider" />
                <span><MapPin size={14} /> Bengaluru, India</span>
              </div>
            </div>
            <div className="hero-card-wrap">
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="hero-card">
                <div className="card-topline"><span>PROFILE / 2026</span><Code2 size={17} /></div>
                <img className="hero-avatar" src={personalInfo.profileImage} alt={`${personalInfo.name} portrait`} />
                <h2>{personalInfo.name}</h2>
                <p>Backend & Generative AI Engineer</p>
                <div className="card-stack"><span>Java</span><span>Spring Boot</span><span>PostgreSQL</span></div>
                <div className="card-bottom"><span><i /> Available for opportunities</span><span>01 — 05</span></div>
              </div>
            </div>
            <a href="#about" className="scroll-cue"><ArrowDown size={14} /> Scroll to explore</a>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="page-width about-layout">
            <div className="section-heading"><p className="eyebrow">01 / A little about me</p><h2>Engineering with<br /><span>purpose.</span></h2></div>
            <div className="about-copy"><p>{personalInfo.about}</p><div className="stat-row"><div><strong>350<span>+</span></strong><small>coding problems</small></div><div><strong>05<span>+</span></strong><small>projects built</small></div><div><strong>5<span>★</span></strong><small>HackerRank rating</small></div></div></div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="page-width">
            <div className="section-heading section-heading-row"><div><p className="eyebrow">02 / Tools of the trade</p><h2>My technical <span>toolkit.</span></h2></div><p className="section-aside">The tools I use to turn ideas<br />into dependable software.</p></div>
            <div className="skill-groups">
              {Object.entries(skills).map(([category, items], index) => (
                <article className="skill-group" key={category}>
                  <div className="skill-group-head"><span className="skill-index">0{index + 1}</span><h3>{category === 'tools' ? 'Tools & practices' : category}</h3></div>
                  <div className="skill-chips">{items.map((skill) => <span key={skill.name}>{skill.name}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="page-width">
            <div className="section-heading section-heading-row"><div><p className="eyebrow">03 / Selected work</p><h2>Projects with a <span>purpose.</span></h2></div><p className="section-aside">A few things I’ve designed,<br />built, and learned from.</p></div>
            <div className="project-toolbar"><div className="filter-list" role="group" aria-label="Filter projects">{projectFilters.map((item) => <button key={item} className={filter === item ? 'filter-button active' : 'filter-button'} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div><span className="project-count">{String(visibleProjects.length).padStart(2, '0')} projects</span></div>
            <div className="projects-grid">
              {visibleProjects.map((project) => (
                <article className="project-card" key={project.id}>
                  <div className="project-image-wrap"><img src={project.image} alt={`${project.title} preview`} loading="lazy" /><span className="project-number">0{projects.indexOf(project) + 1}</span><a className="project-open" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight size={19} /></a></div>
                  <div className="project-info"><div className="project-meta"><span>{projectType(project)}</span><span>2024 — 2026</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer">Source code <ArrowUpRight size={14} /></a>{project.demo && project.demo !== '#' && <a href={project.demo} target="_blank" rel="noreferrer">Live preview <ArrowUpRight size={14} /></a>}</div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section journey-section" id="journey">
          <div className="page-width journey-layout">
            <div className="section-heading"><p className="eyebrow">04 / The journey so far</p><h2>Learning is<br /><span>the work.</span></h2><p className="journey-intro">Curiosity has taken me from the classroom to building practical software and exploring what’s next.</p></div>
            <div className="journey-content"><h3 className="subheading">Education</h3><div className="timeline">{education.map((item) => <article className="timeline-item" key={item.id}><span className="timeline-dot" /><div className="timeline-meta"><span>{item.year}</span><span>{item.gpa}</span></div><h4>{item.degree}</h4><p>{item.institution}{item.specialization ? ` · ${item.specialization}` : ''}</p></article>)}</div>
              <h3 className="subheading cert-heading">Certifications & highlights</h3><div className="highlight-list">{certifications.map((cert) => <div className="highlight-item" key={cert.id}><span className="highlight-check"><Check size={14} /></span><div><b>{cert.name}</b><small>{cert.issuer} · {cert.year}</small></div></div>)}{achievements.map((achievement) => <div className="highlight-item" key={achievement}><span className="highlight-check"><Check size={14} /></span><div><b>{achievement}</b><small>Problem solving</small></div></div>)}</div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact"><div className="page-width contact-inner"><p className="eyebrow">05 / Have a good one in mind?</p><h2>Let’s build something<br /><span>meaningful.</span></h2><p>I’m open to backend and Generative AI roles, internships, and conversations about building useful AI-powered products.</p><div className="contact-actions"><button className="button button-primary" onClick={copyEmail}>{copied ? 'Email copied' : 'Get in touch'} {copied ? <Check size={16} /> : <Mail size={16} />}</button><a className="button button-outline" href={personalInfo.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} /></a></div><a className="contact-email" href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></div></section>
      </main>

      <footer className="site-footer"><div className="page-width footer-inner"><a href="#home" className="footer-brand"><span>&lt;/&gt;</span> SV.</a><p>Designed & built with care · © {new Date().getFullYear()} Siddaroodh Venkatapur</p><a href="#home" className="back-top">Back to top <ArrowUpRight size={14} /></a></div></footer>
    </div>
  );
}

export default Portfolio;
