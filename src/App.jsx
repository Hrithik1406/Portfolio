import React, { useState, useEffect } from 'react';
import './App.css';
import confetti from 'canvas-confetti';
import { 
  ArrowUpRight, 
  ArrowDown, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  Search, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Rocket, 
  Copy, 
  Check, 
  X, 
  ExternalLink,
  Terminal,
  Send,
  Menu
} from 'lucide-react';

const GithubIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hrithikajay85@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Trigger celebratory confetti effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#E50920', '#FF263B', '#F5F3F0', '#8A0512']
    });

    setFormSubmitted(true);
    
    // Construct mailto link as fallback
    const mailtoUri = `mailto:hrithikajay85@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Hrithik,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
    window.location.href = mailtoUri;
  };

  const projects = [
    {
      id: '01',
      title: 'E-COMMERCE WEB PLATFORM',
      category: 'FULL-STACK / CRUD & REST API',
      description: 'Responsive e-commerce application equipped with user authentication, shopping cart workflow, product and order management using full CRUD operations, and integrated REST APIs.',
      image: '/assets/project_ecommerce.jpg',
      tags: ['JavaScript', 'REST APIs', 'MySQL / MongoDB', 'CRUD', 'Node.js'],
      highlights: [
        'User Authentication & Protected Shopping Cart session state',
        'Comprehensive product, order, and user management utilizing CRUD operations',
        'Integrated RESTful APIs bridging the reactive frontend with database schemas',
        'Mobile-first responsive architecture designed for fluid cross-device commerce'
      ],
      githubUrl: 'https://github.com/Hrithik1406'
    },
    {
      id: '02',
      title: 'ANIMATED DEVELOPER PORTFOLIO',
      category: 'CREATIVE FRONTEND & MOTION',
      description: 'Cinematic personal developer portfolio featuring an editorial dark-and-crimson aesthetic, custom cursor physics, layered typography, and responsive component hierarchy.',
      image: '/assets/project_portfolio.jpg',
      tags: ['React', 'Vite', 'Vanilla CSS', 'GSAP', 'Responsive UI'],
      highlights: [
        'Oversized condensed typography layered with high-contrast portrait composition',
        'High-performance CSS micro-interactions with reduced-motion accessibility',
        'Editorial multi-column layout for Education, Skills, and Engineering Process',
        'Interactive contact suite with instant validation and clipboard integration'
      ],
      githubUrl: 'https://github.com/Hrithik1406'
    },
    {
      id: '03',
      title: 'BUSINESS INTELLIGENCE & ANALYTICS',
      category: 'DATA VISUALIZATION / POWER BI',
      description: 'Interactive business intelligence dashboard engineered to visualize sales patterns, monthly performance trends, and regional metrics with automated data querying pipelines.',
      image: '/assets/project_analytics.jpg',
      tags: ['Power BI', 'Python', 'MySQL', 'Data Modeling', 'KPI Metrics'],
      highlights: [
        'Dynamic data transformation pipelines leveraging Python and MySQL queries',
        'Executive KPI cards tracking revenue growth, churn rate, and active volume',
        'Multi-dimensional filtering across regional markets and product categories',
        'Optimized data schema modeling delivering rapid report rendering'
      ],
      githubUrl: 'https://github.com/Hrithik1406'
    }
  ];

  return (
    <div className="site-wrapper">
      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${cursorHovered ? 'hovering' : ''}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      {/* Top Ambient Light Glow */}
      <div className="ambient-glow-top" />

      {/* ---------------- Navigation Bar ---------------- */}
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="main-container nav-container">
          <a 
            href="#hero" 
            className="nav-brand"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <span className="nav-brand-title">HRITHIK AJAY</span>
            <span className="nav-brand-subtitle">SOFTWARE DEVELOPER</span>
          </a>

          <nav className="nav-links">
            <a 
              href="#projects" 
              className="nav-link"
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
            >
              Projects
            </a>
            <a 
              href="#education-skills" 
              className="nav-link"
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
            >
              Skills & Process
            </a>
            <a 
              href="#contact" 
              className="nav-link"
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
            >
              Contact
            </a>
          </nav>

          <div className="nav-actions">
            <div className="nav-availability">
              <span className="badge-status-dot" />
              <span>OPEN TO ROLES</span>
            </div>

            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ---------------- Hero Section ---------------- */}
      <section id="hero" className="hero-section">
        {/* Background Gigantic Condensed Text "PORTFOLIO" */}
        <div className="hero-bg-text-wrapper" aria-hidden="true">
          <div className="hero-bg-text">PORTFOLIO</div>
        </div>

        <div className="main-container hero-content-grid">
          {/* Hero Left Content */}
          <div className="hero-left">
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-name">
              <span>HRITHIK</span>
              <span>AJAY U</span>
            </h1>

            <div className="hero-role-tag">
              <span>SOFTWARE DEVELOPER</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span style={{ color: 'var(--text-secondary)' }}>FULL STACK CREATOR</span>
            </div>

            <p className="hero-bio">
              Aspiring Software Developer and final-year B.Tech Information Technology student at Kings Engineering College. Passionate about solving complex problems through clean code, modern web engineering, and scalable database systems.
            </p>

            <div className="hero-meta-badges">
              <div className="hero-meta-item">
                <MapPin size={13} />
                <span>Chennai, Tamil Nadu</span>
              </div>
              <div className="hero-meta-item">
                <Code2 size={13} />
                <span>Java • Python • Web Tech</span>
              </div>
              <div className="hero-meta-item">
                <Layers size={13} />
                <span>B.Tech IT (2023 - 2027)</span>
              </div>
            </div>

            <div className="hero-cta-group">
              <a 
                href="#projects" 
                className="btn-primary"
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
              >
                <span>Explore Projects</span>
                <ArrowDown size={16} />
              </a>
              <a 
                href="#contact" 
                className="btn-secondary"
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
              >
                <span>Contact Me</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Hero Center - Portrait Photo */}
          <div className="hero-portrait-wrapper">
            <div className="portrait-glow-backdrop" />
            <div className="portrait-image-container">
              <img 
                src="/assets/portrait.png" 
                alt="Hrithik Ajay U — Software Developer"
                className="hero-portrait-img"
              />
            </div>
          </div>

          {/* Hero Right Content - Metrics & Statement */}
          <div className="hero-right">
            <div className="hero-statement-box">
              <Sparkles size={20} className="statement-icon" />
              <p className="statement-text">
                "Transforming ideas into resilient software through disciplined engineering, clean architectures, and relentless problem-solving."
              </p>
            </div>

            <div className="hero-stats-stack">
              <div className="hero-stat-card">
                <div className="stat-number">2027</div>
                <div className="stat-meta">
                  <span className="stat-label">B.Tech IT</span>
                  <span className="stat-sub">Kings Eng. College</span>
                </div>
              </div>

              <div className="hero-stat-card">
                <div className="stat-number">7.00</div>
                <div className="stat-meta">
                  <span className="stat-label">Academic CGPA</span>
                  <span className="stat-sub">Consistent Standing</span>
                </div>
              </div>

              <div className="hero-stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-meta">
                  <span className="stat-label">Core Projects</span>
                  <span className="stat-sub">Full Stack & Web</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Selected Projects Section ---------------- */}
      <section id="projects" className="projects-section">
        <div className="main-container">
          <div className="section-header-row">
            <div className="section-title-wrap">
              <h2 className="section-title">SELECTED PROJECTS</h2>
              <div className="section-line" />
            </div>
            <a 
              href="https://github.com/Hrithik1406" 
              target="_blank" 
              rel="noreferrer" 
              className="section-view-all"
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
            >
              <span>View GitHub</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((proj) => (
              <div 
                key={proj.id}
                className="project-card"
                onClick={() => setSelectedProject(proj)}
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
              >
                <div className="project-thumbnail-box">
                  <img src={proj.image} alt={proj.title} className="project-img" />
                  <div className="project-overlay-badge">{proj.category.split('/')[0]}</div>
                </div>

                <div className="project-info-box">
                  <div className="project-meta-row">
                    <span className="project-number">{proj.id}</span>
                    <ArrowUpRight size={20} className="project-arrow-icon" />
                  </div>

                  <h3 className="project-title">{proj.title}</h3>
                  <div className="project-category">{proj.category}</div>
                  <p className="project-description">{proj.description}</p>

                  <div className="project-tags-row">
                    {proj.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Editorial 3-Column Section ---------------- */}
      <section id="education-skills" className="editorial-section">
        <div className="main-container">
          <div className="editorial-grid">
            {/* Column A: Education & Skills */}
            <div className="editorial-col">
              <h3 className="editorial-col-title">
                <span>EDUCATION & SKILLS</span>
                <span style={{ color: 'var(--accent-crimson)', fontSize: '1rem' }}>01</span>
              </h3>

              <div className="edu-block">
                <div className="subhead-red">
                  <Layers size={14} />
                  <span>EDUCATION</span>
                </div>

                <div className="timeline-item">
                  <div className="edu-degree">B.Tech in Information Technology</div>
                  <div className="edu-school">Kings Engineering College</div>
                  <div className="edu-meta">2023 – 2027 • CGPA: 7.00</div>
                </div>

                <div className="timeline-item">
                  <div className="edu-degree">Higher Secondary Certificate (HSC)</div>
                  <div className="edu-school">Avichi Higher Secondary School</div>
                  <div className="edu-meta">Completed 2022 • 73%</div>
                </div>
              </div>

              <div className="edu-block">
                <div className="subhead-red">
                  <CheckCircle2 size={14} />
                  <span>CERTIFICATIONS</span>
                </div>

                <div className="timeline-item">
                  <div className="edu-degree">Full Stack Developer Course</div>
                  <div className="edu-school">Simplilearn Skillup</div>
                </div>

                <div className="timeline-item">
                  <div className="edu-degree">Programming with Python</div>
                  <div className="edu-school">Simplilearn Skill</div>
                </div>
              </div>

              <div className="edu-block">
                <div className="subhead-red">
                  <Code2 size={14} />
                  <span>TECHNICAL SKILLS</span>
                </div>
                <div className="skills-pill-group">
                  <span className="skill-pill">Java</span>
                  <span className="skill-pill">Python</span>
                  <span className="skill-pill">JavaScript</span>
                  <span className="skill-pill">HTML5</span>
                  <span className="skill-pill">CSS3</span>
                  <span className="skill-pill">MySQL</span>
                  <span className="skill-pill">MongoDB</span>
                  <span className="skill-pill">Git</span>
                  <span className="skill-pill">GitHub</span>
                  <span className="skill-pill">Power BI</span>
                  <span className="skill-pill">REST APIs</span>
                </div>

                <div className="subhead-red">
                  <span>SOFT SKILLS & LANGUAGES</span>
                </div>
                <div className="skills-pill-group">
                  <span className="skill-pill">Problem Solving</span>
                  <span className="skill-pill">Communication</span>
                  <span className="skill-pill">Teamwork</span>
                  <span className="skill-pill">Leadership</span>
                  <span className="skill-pill">English (Fluent)</span>
                  <span className="skill-pill">Tamil (Fluent)</span>
                </div>
              </div>
            </div>

            {/* Column B: Work Process */}
            <div className="editorial-col">
              <h3 className="editorial-col-title">
                <span>WORK PROCESS</span>
                <span style={{ color: 'var(--accent-crimson)', fontSize: '1rem' }}>02</span>
              </h3>

              <div className="process-list">
                <div className="process-step-card">
                  <div className="process-step-num">01</div>
                  <div className="process-step-icon">
                    <Search size={18} />
                  </div>
                  <div className="process-step-body">
                    <span className="process-step-title">DISCOVER & UNDERSTAND</span>
                    <p className="process-step-desc">
                      Deconstructing requirements, identifying edge conditions, and establishing data inputs.
                    </p>
                  </div>
                </div>

                <div className="process-step-card">
                  <div className="process-step-num">02</div>
                  <div className="process-step-icon">
                    <Layers size={18} />
                  </div>
                  <div className="process-step-body">
                    <span className="process-step-title">PLAN & ARCHITECT</span>
                    <p className="process-step-desc">
                      Mapping database schemas (MySQL/MongoDB), wireframing responsive layouts, and establishing REST APIs.
                    </p>
                  </div>
                </div>

                <div className="process-step-card">
                  <div className="process-step-num">03</div>
                  <div className="process-step-icon">
                    <Code2 size={18} />
                  </div>
                  <div className="process-step-body">
                    <span className="process-step-title">DEVELOP & CODE</span>
                    <p className="process-step-desc">
                      Writing clean, modular code in Java, Python, and JavaScript with structured version control.
                    </p>
                  </div>
                </div>

                <div className="process-step-card">
                  <div className="process-step-num">04</div>
                  <div className="process-step-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="process-step-body">
                    <span className="process-step-title">TEST & REFINE</span>
                    <p className="process-step-desc">
                      Validating CRUD workflows, ensuring API reliability, and testing responsive behavior.
                    </p>
                  </div>
                </div>

                <div className="process-step-card">
                  <div className="process-step-num">05</div>
                  <div className="process-step-icon">
                    <Rocket size={18} />
                  </div>
                  <div className="process-step-body">
                    <span className="process-step-title">DELIVER & OPTIMIZE</span>
                    <p className="process-step-desc">
                      Deploying reliable builds, optimizing load times, and continuous incremental enhancement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column C: Quote Editorial Panel */}
            <div className="editorial-col">
              <div className="quote-editorial-panel">
                <div>
                  <div className="quote-mark">“</div>
                  <p className="quote-text">
                    Good software engineering is not just about making code execute — it is about crafting dependable, performant systems that solve real challenges with clarity and intent.
                  </p>
                </div>

                <div className="quote-author-wrap">
                  <div className="quote-signature">Hrithik Ajay</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Software Developer
                  </div>

                  <div className="quote-footer-cta">
                    <span>LET'S CREATE SOMETHING GREAT</span>
                    <span style={{ fontSize: '1.2rem', color: '#fff' }}>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Contact Section ---------------- */}
      <section id="contact" className="contact-section">
        <div className="main-container">
          <div className="contact-grid">
            {/* Left: Contact Info & Form */}
            <div className="contact-left">
              <h2 className="contact-headline">
                LET'S WORK<br />
                <span style={{ color: 'var(--accent-crimson)' }}>TOGETHER</span>
              </h2>

              <p className="contact-subtext">
                Currently open for software developer positions, technical internships, and collaborative development. Reach out directly or send a message below.
              </p>

              <div className="contact-links-list">
                <a 
                  href="mailto:hrithikajay85@gmail.com" 
                  className="contact-link-item"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                >
                  <span className="contact-item-icon"><Mail size={18} /></span>
                  <span className="contact-item-text">hrithikajay85@gmail.com</span>
                  <button 
                    type="button" 
                    className="contact-copy-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCopyEmail();
                    }}
                  >
                    {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </a>

                <a 
                  href="tel:+919791072806" 
                  className="contact-link-item"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                >
                  <span className="contact-item-icon"><Phone size={18} /></span>
                  <span className="contact-item-text">+91 9791072806</span>
                </a>

                <a 
                  href="https://github.com/Hrithik1406" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="contact-link-item"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                >
                  <span className="contact-item-icon"><GithubIcon size={18} /></span>
                  <span className="contact-item-text">github.com/Hrithik1406</span>
                  <ExternalLink size={14} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
                </a>

                <a 
                  href="https://www.linkedin.com/in/hrithik-ajay-371186287/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="contact-link-item"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                >
                  <span className="contact-item-icon"><LinkedinIcon size={18} /></span>
                  <span className="contact-item-text">linkedin.com/in/hrithik-ajay-371186287/</span>
                  <ExternalLink size={14} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
                </a>

                <div className="contact-link-item">
                  <span className="contact-item-icon"><MapPin size={18} /></span>
                  <span className="contact-item-text">Chennai, Tamil Nadu, India</span>
                </div>
              </div>

              {/* Interactive Quick Form */}
              <form onSubmit={handleFormSubmit} className="contact-form-box">
                <div className="form-title">SEND DIRECT INQUIRY</div>

                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input" 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Email</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input" 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea 
                    required 
                    placeholder="Describe your role or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                >
                  <Send size={16} />
                  <span>{formSubmitted ? 'Message Prepared!' : 'Send Message'}</span>
                </button>
              </form>
            </div>

            {/* Right: Laptop Workstation Mockup */}
            <div className="contact-right">
              <div className="laptop-visual-container">
                <img 
                  src="/assets/laptop_workstation.jpg" 
                  alt="Hrithik Developer Workstation" 
                  className="laptop-img"
                />
                <div className="laptop-status-badge">
                  <Terminal size={14} style={{ color: 'var(--accent-crimson)' }} />
                  <span>hrithik@dev:~$ ready_to_build.sh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="site-footer">
        <div className="main-container footer-content">
          <div className="footer-copy">
            © {new Date().getFullYear()} Hrithik Ajay U. All rights reserved. • Software Developer
          </div>

          <div className="footer-social-links">
            <a 
              href="https://github.com/Hrithik1406" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-social-icon"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/hrithik-ajay-371186287/" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-social-icon"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a 
              href="mailto:hrithikajay85@gmail.com" 
              className="footer-social-icon"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <a 
            href="#hero" 
            className="footer-back-to-top"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <span>Back to top</span>
            <ArrowUpRight size={14} style={{ transform: 'rotate(-45deg)' }} />
          </a>
        </div>
      </footer>

      {/* ---------------- Project Details Modal ---------------- */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.8rem', 
                color: 'var(--accent-crimson)', 
                fontWeight: 700 
              }}>
                PROJECT {selectedProject.id} // {selectedProject.category}
              </span>
              <h3 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '2.2rem', 
                color: '#fff', 
                marginTop: '0.25rem' 
              }}>
                {selectedProject.title}
              </h3>
            </div>

            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              style={{ width: '100%', borderRadius: '4px', marginBottom: '1.5rem', border: '1px solid var(--border-subtle)' }}
            />

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {selectedProject.description}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ 
                fontSize: '0.8rem', 
                color: 'var(--accent-crimson)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em', 
                marginBottom: '0.75rem' 
              }}>
                Core Architecture & Highlights
              </h4>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedProject.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ 
                fontSize: '0.8rem', 
                color: 'var(--text-muted)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em', 
                marginBottom: '0.75rem' 
              }}>
                Technology Stack
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="project-tag" style={{ color: '#fff' }}>{tag}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href={selectedProject.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary"
                style={{ flex: 1 }}
              >
                <GithubIcon size={16} />
                <span>View Repository</span>
              </a>
              <button 
                className="btn-secondary" 
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
