"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    category: "FULL-STACK DEVELOPMENT",
    title: "SpendWise AI",
    description:
      "An AI-powered expense tracker featuring budget management, expense analytics, PDF reports, and an intelligent assistant.",
    tech: ["Next.js","TypeScript", "Node.js", "Express", "PostgreSQL"],
    symbol: "₹",
    theme: "project-blue",
    link: "https://github.com/saichakri1122/spendwise",
  },
  {
    number: "02",
    category: "E-COMMERCE",
    title: "ShopSphere",
    description:
      "A full-stack e-commerce platform with product browsing, authentication, cart, wishlist, order management, and mock payments.",
    tech: ["Next.js","TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    symbol: "↗",
    theme: "project-orange",
    link: "https://github.com/saichakri1122/ShopSphere",
  },
  {
    number: "03",
    category: "NATURAL LANGUAGE PROCESSING",
    title: "Mental Health Assessment",
    description:
      "An NLP application that analyzes text using TF-IDF and machine learning to classify mental-health-related statements.",
    tech: ["Python", "Scikit-learn", "Flask", "NLP"],
    symbol: "✳",
    theme: "project-green",
    link: "https://github.com/saichakri1122/Mental-Health-AI",
  },
  {
    number: "04",
    category: "DEEP LEARNING",
    title: "Tomato Leaf Disease Detection",
    description:
      "A two-stage CNN system designed to identify tomato leaves and classify tomato leaf diseases.",
    tech: ["Python", "PyTorch", "CNN", "Computer Vision"],
    symbol: "❋",
    theme: "project-red",
    link: "https://github.com/saichakri1122/AI-Powered-Tomato-Leaf-Disease-Detection-System",
  },
  {
    number: "05",
    category: "MEDICAL AI",
    title: "Medical Image Segmentation",
    description:
      "A medical imaging project using U-Net and MedSAM techniques for image segmentation.",
    tech: ["Python", "U-Net", "MedSAM", "Google Colab"],
    symbol: "⌁",
    theme: "project-purple",
    link: "https://github.com/saichakri1122/Medical-Image-Segmentation",
  },
];

const experiences = [
  {
    period: "FEB 2025 — AUG 2025",
    role: "Full Stack Web Developer Intern",
    company: "Engineers World Pvt. Ltd.",
    description:
      "Worked on web application development, frontend interfaces, API integration, and deployment while collaborating with a remote team.",
  },
  {
    period: "JUN 2025 — JUL 2025",
    role: "Machine Learning Intern",
    company: "Centre for Health Innovation (CHI), MRIIRS",
    description:
      "Explored medical image segmentation using U-Net and MedSAM, including image preprocessing and model evaluation.",
  },
  {
    period: "AI / ML INTERNSHIP",
    role: "AI/ML Intern",
    company: "YBI Foundation",
    description:
      "Built machine learning projects involving diabetes prediction and employee salary prediction.",
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend Development",
    items: ["React", "Next.js", "Tailwind CSS","TypeScript", "Responsive UI"],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "REST APIs", "PostgreSQL"],
  },
  {
    title: "AI & Machine Learning",
    items: ["Scikit-learn", "PyTorch", "CNN", "NLP", "U-Net"],
  },
  {
    title: "Developer Tools",
    items: ["Git", "GitHub", "VS Code", "Google Colab", "Vercel"],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main className="site-shell">
      {/* NAVIGATION */}
      <nav className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          SC<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a
            className="nav-resume"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> OPEN TO OPPORTUNITIES
          </p>

          <h1>
            Turning ideas
            <br />
            into implementations
          </h1>

          <p className="hero-description">
            Hey, I&apos;m <strong>Sai Chakri</strong> — a Computer Science
            Engineering student who enjoys building web applications and
            exploring practical AI solutions.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Explore my work <span>↘</span>
            </a>
            <a
              className="button-secondary"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View resume ↗
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/saichakri1122" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/saichakri-edubilli" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href="mailto:saichakrie@gmail.com">Email ↗</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-topline">
            <span>PORTFOLIO / 2026</span>
            <span>INDIA</span>
          </div>

          <div className="portrait-frame">
            <img
              src="/profile.jpg"
              alt="Sai Chakri"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
<div className="visual-caption">
  <span>DESIGN</span>
  <span>✳</span>
  <span>DEVELOP</span>
</div>
        </div>

        <div className="hero-index">
          <span>01 / INTRODUCTION</span>
          <a href="#about">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="intro-strip">
        <p>CODE WITH PURPOSE.</p>
        <span>✳</span>
        <p>DESIGN WITH CLARITY.</p>
        <span>✳</span>
        <p>ALWAYS KEEP LEARNING.</p>
      </section>

      {/* ABOUT */}
      <section className="section-wrap content-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 — A LITTLE ABOUT ME</p>
          <h2>
            Not just writing code.
            <br />
            <span className="muted-heading">Solving real problems.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p>
              I&apos;m a B.Tech Computer Science and Engineering student at
              Manav Rachna International Institute of Research and Studies,
              graduating in 2027.
            </p>
            <p>
              My interests span full-stack development, database design, and
              machine learning. I enjoy turning ideas into useful applications
              and understanding how everything works together.
            </p>
            <p>
              I&apos;m strengthening my software development skills, building
              Real-World projects, and preparing for entry-level software
              engineering opportunities.
            </p>
          </div>

          <div className="about-facts">
            <div className="fact-card">
              <span className="fact-number">2027</span>
              <span className="fact-label">GRADUATION YEAR</span>
            </div>
            <div className="fact-card">
              <span className="fact-number">05<span>+</span></span>
              <span className="fact-label">PROJECTS & EXPERIMENTS</span>
            </div>
            <div className="fact-card">
              <span className="fact-number">02</span>
              <span className="fact-label">RESEARCH PAPERS</span>
            </div>
            <div className="fact-card">
              <span className="fact-number">∞</span>
              <span className="fact-label">THINGS TO LEARN</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section-wrap content-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">02 — EXPERIENCE</p>
          <h2>
            Learning by
            <br />
            <span className="muted-heading">doing the work.</span>
          </h2>
        </div>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <article className="experience-item" key={item.role}>
              <div className="experience-index">0{index + 1}</div>

              <div className="experience-details">
                <p className="experience-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-description">{item.description}</p>
              </div>

              <span className="experience-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section" id="projects">
        <div className="section-wrap content-section">
          <div className="section-heading projects-heading">
            <p className="eyebrow">03 — SELECTED WORK</p>
            <h2>
              Ideas made
              <br />
              <span className="muted-heading">into something real.</span>
            </h2>
            <p className="section-intro">
              A selection of development and machine learning projects I&apos;ve
              worked on.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.theme}`}
                key={project.number}
              >
                <div className="project-card-top">
                  <span className="project-number">
                    {project.number} / 05
                  </span>
                  <span className="project-symbol">{project.symbol}</span>
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub <span>↗</span>
                </a>
              </article>
            ))}
          </div>

          <p className="project-note">
            Replace the example GitHub profile links with each project&apos;s
            actual repository URL when available.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section-wrap content-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">04 — MY TOOLKIT</p>
          <h2>
            Tools I use.
            <br />
            <span className="muted-heading">Skills I keep growing.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <div className="skill-group-heading">
                <span>0{index + 1}</span>
                <h3>{group.title}</h3>
              </div>

              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section
        className="section-wrap content-section education-section"
        id="education"
      >
        <div className="section-heading">
          <p className="eyebrow">05 — EDUCATION</p>
          <h2>
            The foundation
            <br />
            <span className="muted-heading">behind the Work.</span>
          </h2>
        </div>

        <div className="education-list">
          <article className="education-item">
            <div>
              <p className="experience-period">2023 — 2027</p>
              <h3>B.Tech — Computer Science & Engineering</h3>
              <p>
                Manav Rachna International Institute of Research and Studies
              </p>
              <p className="education-location">Faridabad, Haryana</p>
            </div>
            <span className="education-score">7.18 CGPA</span>
          </article>

          <article className="education-item">
            <div>
              <p className="experience-period">2021 — 2023</p>
              <h3>Intermediate</h3>
              <p>Gotlam Gayatri Junior College</p>
              <p className="education-location">
                Vizianagaram, Andhra Pradesh
              </p>
            </div>
            <span className="education-score">95.3%</span>
          </article>

          <article className="education-item">
            <div>
              <p className="experience-period">2020 — 2021</p>
              <h3>Secondary School</h3>
              <p>Zilla Parishad High School (EM), Maradam</p>
              <p className="education-location">
                Vizianagaram, Andhra Pradesh
              </p>
            </div>
            <span className="education-score">100%</span>
          </article>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="recognition-section">
        <div className="section-wrap recognition-inner">
          <div>
            <p className="eyebrow">06 — BEYOND THE PROJECTS</p>
            <h2>Curiosity deserves to be shared.</h2>
          </div>

          <div className="recognition-detail">
            <div>
              <span className="recognition-symbol">↗</span>
              <h3>Research</h3>
              <p>Two research papers published.</p>
            </div>
            <div>
              <span className="recognition-symbol">✳</span>
              <h3>Continuous learning</h3>
              <p>TCS iON Career Edge and AI/ML learning experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer className="footer-section" id="contact">
        <div className="section-wrap footer-inner">
          <p className="eyebrow">07 — WHAT&apos;S NEXT?</p>

          <h2>
            Have an idea?
            <br />
            <span>Let&apos;s talk.</span>
          </h2>

          <p className="footer-description">
            I&apos;m interested in software development opportunities,
            collaborative projects, and connecting with people who love
            building useful things.
          </p>

          <a
            className="button-primary footer-cta"
            href="mailto:saichakrie@gmail.com"
          >
            Get in touch <span>↗</span>
          </a>

          <div className="footer-bottom">
            <a className="brand" href="#home">
              SC<span>.</span>
            </a>

            <p>DESIGNED & BUILT BY SAI CHAKRI · 2026</p>

            <div className="footer-socials">
              <a
                href="https://github.com/saichakri1122"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/saichakri-edubilli"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}