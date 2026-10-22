import { useState, useEffect } from 'react'

const services = [
  {
    id: 'college-projects',
    pillar: 'Academic Engineering',
    title: 'College & Final Year Projects',
    subtitle: 'BCA, MCA, B.Tech & Diploma',
    icon: '🎓',
    accent: '#2B50FF',
    accentBg: 'rgba(43, 80, 255, 0.08)',
    accentBorder: 'rgba(43, 80, 255, 0.25)',
    tag: 'Viva-Ready Guarantee',
    desc: 'Mini and final-year capstone projects engineered with clean source code, standard university documentation, and comprehensive viva mentoring.',
    offerings: [
      { label: 'AI/ML & Web Stacks', detail: 'Machine learning, Python, MERN stack, Flutter, and IoT solutions' },
      { label: 'Complete Documentation', detail: 'Project report, synopses, system architecture diagrams & PPT' },
      { label: '1-on-1 Viva Mentorship', detail: 'Mock viva practice & code walkthrough so you present with 100% confidence' },
      { label: 'Local Setup Guarantee', detail: 'End-to-end installation and demo setup on your personal system' },
    ],
    pills: ['Python / ML', 'MERN Stack', 'Report & PPT', 'Viva Coaching'],
    action: { label: 'See how we build it', href: '#projects' },
  },
  {
    id: 'company-websites',
    pillar: 'Digital Platforms',
    title: 'Company Websites & Web Apps',
    subtitle: 'Startups, Clinics & Enterprises',
    icon: '🌐',
    accent: '#0D9488',
    accentBg: 'rgba(13, 148, 136, 0.08)',
    accentBorder: 'rgba(13, 148, 136, 0.25)',
    tag: 'High Conversion',
    desc: 'Bespoke corporate websites and interactive applications built to showcase your business credibility, drive traffic, and convert inquiries.',
    offerings: [
      { label: 'Custom Brand Engineering', detail: 'Real platforms delivered like Scoriant AI Defence & Hudadi Physiotherapy' },
      { label: 'Inquiry & Booking Systems', detail: 'Lead capture forms, appointment schedules, and customer communication flows' },
      { label: 'Speed & Mobile First', detail: 'Fluid responsive UI, sub-second loading speeds, and SEO best practices' },
      { label: 'Secure & Maintainable', detail: 'Clean modern codebases, SSL security, hosting assistance, and ongoing support' },
    ],
    pills: ['Custom UI/UX', 'SEO Optimized', 'Booking Systems', 'Speed Optimized'],
    action: { label: 'Explore live client work', href: '#work' },
  },
  {
    id: 'classroom-os',
    pillar: 'Flagship EdTech',
    title: 'Classroom OS (School LMS)',
    subtitle: 'Unified System for Modern Schools',
    icon: '🏫',
    accent: '#E08A00',
    accentBg: 'rgba(224, 138, 0, 0.1)',
    accentBorder: 'rgba(224, 138, 0, 0.3)',
    tag: 'Our Flagship Platform',
    featured: true,
    desc: 'A complete school management and digital learning ecosystem that brings teachers, students, parents, and principals into one fluid workspace.',
    offerings: [
      { label: '4 Role-Based Portals', detail: 'Dedicated intuitive views for Teachers, Students, Parents, and Administrators' },
      { label: 'Daily Digital Operations', detail: '1-tap attendance marking, homework submissions, and automated quiz grading' },
      { label: 'Fee & Parent Alerts', detail: 'Instant fee receipts, daily presence notifications, and direct teacher messaging' },
      { label: 'Free Setup & Migration', detail: 'Complete data onboarding, staff training sessions, and continuous backups' },
    ],
    pills: ['Attendance & Fees', 'Auto Grading', 'Parent App', 'Live Classes'],
    action: { label: 'View LMS demo & roles', href: '#lms' },
  },
]

const lmsTabs = {
  Teachers: { title: 'Less paperwork, more teaching', points: ['Mark attendance in one tap', 'Assign homework and auto-grade quizzes', 'Share notes, videos and worksheets'], art: [['Class 8-B attendance', '38 / 40'], ['Homework submitted', '92%'], ['Quiz average', '76%']] },
  Students: { title: 'One place for everything', points: ['See timetable, tasks and deadlines', 'Join live classes from any device', 'Track marks and progress by subject'], art: [['Maths assignment', 'Due Fri'], ['Science quiz', 'Tomorrow'], ['Overall progress', '81%']] },
  Parents: { title: 'Stay informed without calling the school', points: ['Daily attendance alerts', 'Report cards and fee receipts', 'Direct messages to teachers'], art: [['Attendance today', 'Present'], ['Fee status', 'Paid'], ['New message', '1 unread']] },
  Admins: { title: 'The whole school at a glance', points: ['Manage classes, staff and timetables', 'Collect fees and print reports', 'Role-based access and secure backups'], art: [['Active students', '1,240'], ['Fees collected', '₹18.4L'], ['Staff online', '56']] },
}

const steps = [
  ['Share your idea', 'Tell us the topic, tech stack and deadline.'],
  ['Plan and scope', 'We confirm features, timeline and price.'],
  ['Build', 'Regular progress updates you can review.'],
  ['Document', 'Report, diagrams, PPT and viva questions.'],
  ['Hand over', 'Source code, demo session and support.'],
]

const work = [
  {
    name: 'Hudadi Physiotherapy & Rehabilitation',
    category: 'Client Website · Healthcare',
    url: 'https://hudadiphysio.fit',
    domain: 'hudadiphysio.fit',
    icon: '🩺',
    gradient: 'linear-gradient(135deg, #0d9488 0%, #065f46 100%)',
    summary: 'Official clinic website engineered to present specialized physiotherapy & rehabilitation therapies with seamless patient consultations.',
    tags: ['React', 'Responsive Web', 'Appointment Flow', 'Healthcare', 'SEO'],
  },
  {
    name: 'Scoriant AI Defence Systems Solutions',
    category: 'Corporate Platform · AI & Defence',
    url: 'https://scoriant.com',
    domain: 'scoriant.com',
    icon: '🛡️',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)',
    summary: 'Cutting-edge digital platform representing advanced defence solutions, AI-driven tactical intelligence, and mission-critical technologies.',
    tags: ['Modern Web UI', 'AI Defence', 'Cyber Architecture', 'Enterprise Platform'],
  },
  {
    name: 'Lung Cancer Prediction System',
    category: 'BCA College Project · Machine Learning',
    url: null,
    domain: 'ML + Web App',
    icon: '🫁',
    gradient: 'linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6d28d9 100%)',
    summary: 'End-to-end Machine Learning healthcare solution predicting lung cancer risk levels, combined with an intuitive web-based interface for diagnosis.',
    tags: ['Machine Learning', 'Python', 'Web Interface', 'Healthcare Analytics', 'Viva Ready'],
  },
]

const heroSlides = [
  {
    id: 'college-projects',
    badge: 'COLLEGE & FINAL YEAR PROJECTS',
    titleWhite: 'College & Capstone ',
    titleGradient: 'Projects',
    lead: 'Viva-ready final-year capstone and mini projects engineered with clean source code, standard university documentation (Report, PPT), and 1-on-1 viva mentoring so you present with complete confidence.',
    primaryBtn: { text: 'Explore College Projects', href: '#projects' },
    secondaryBtn: { text: 'Get Project Quote', href: '#contact' },
    badgeBg: 'rgba(124, 58, 237, 0.25)',
    badgeBorder: 'rgba(167, 139, 250, 0.45)',
    badgeColor: '#C084FC',
    gradientText: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
  },
  {
    id: 'company-websites',
    badge: 'COMPANY WEBPAGES & PLATFORMS',
    titleWhite: 'High-Converting Company ',
    titleGradient: 'Websites',
    lead: 'Bespoke corporate websites and interactive web platforms built to showcase your business credibility, drive organic traffic, and convert visitors into paying clients. Real live work delivered like Scoriant AI & Hudadi Physio.',
    primaryBtn: { text: 'Explore Recent Work', href: '#work' },
    secondaryBtn: { text: 'Build Your Website', href: '#contact' },
    badgeBg: 'rgba(16, 185, 129, 0.2)',
    badgeBorder: 'rgba(110, 231, 183, 0.45)',
    badgeColor: '#6EE7B7',
    gradientText: 'linear-gradient(135deg, #34D399 0%, #38BDF8 100%)',
  },
  {
    id: 'classroom-os',
    badge: 'PROPRIETARY SCHOOL LMS',
    titleWhite: 'Classroom OS ',
    titleGradient: 'School LMS',
    lead: 'The complete school management and digital learning ecosystem that brings teachers, students, parents, and principals into one fluid workspace with 1-tap attendance, homework, and automated fee alerts.',
    primaryBtn: { text: 'Preview Classroom OS', href: '#lms' },
    secondaryBtn: { text: 'Book Free School Demo', href: '#contact' },
    badgeBg: 'rgba(245, 158, 11, 0.2)',
    badgeBorder: 'rgba(252, 211, 77, 0.45)',
    badgeColor: '#FCD34D',
    gradientText: 'linear-gradient(135deg, #F59E0B 0%, #38BDF8 100%)',
  },
]

export default function App() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState('Teachers')
  const [sent, setSent] = useState(false)
  const t = lmsTabs[tab]
  const go = () => setOpen(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slideIndex])

  const currentSlide = heroSlides[slideIndex]

  const submit = (e) => { e.preventDefault(); setSent(true) /* connect to your backend or Formspree here */ }

  return (
    <>
      <header className="nav scoriant-nav">
        <div className="wrap">
          <a href="#top" className="logo scoriant-logo">
            <span className="logo-mark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#logo-grad)" />
                <path d="M2 17L12 22L22 17" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="logo-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7C3AED" />
                    <stop offset="1" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="logo-text-group">
              <span className="logo-brand">NORTHBYTE</span>
              <span className="logo-sub">SOFTWARE & EDTECH SYSTEMS</span>
            </span>
          </a>
          <nav className="links">
            <a href="#contact" className="nav-cta-btn">CONTACT US</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero scoriant-hero">
          <div className="hero-bg-media">
            <img src="/hero-bg.jpg" alt="Software Engineering & Digital Systems" className="hero-bg-img" />
            <div className="hero-overlay"></div>
            <div className="hero-vignette"></div>
          </div>

          <div className="wrap hero-content">
            <div
              key={`badge-${slideIndex}`}
              className="hero-eyebrow hero-slide-fade"
              style={{
                background: currentSlide.badgeBg,
                borderColor: currentSlide.badgeBorder,
                color: currentSlide.badgeColor,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="sparkle-icon">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
              <span>{currentSlide.badge}</span>
            </div>

            <h1 key={`title-${slideIndex}`} className="hero-title hero-slide-fade">
              {currentSlide.titleWhite}
              <span
                className="hero-gradient"
                style={{ backgroundImage: currentSlide.gradientText }}
              >
                {currentSlide.titleGradient}
              </span>
            </h1>

            <p key={`lead-${slideIndex}`} className="hero-lead hero-slide-fade">
              {currentSlide.lead}
            </p>

            <div className="hero-indicators" role="tablist" aria-label="Slideshow navigation">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  className={`hero-indicator-dot ${idx === slideIndex ? 'active' : ''}`}
                  onClick={() => setSlideIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  role="tab"
                  aria-selected={idx === slideIndex}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="wrap">
            <div className="about-head">
              <div className="about-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="sparkle-icon">
                  <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                </svg>
                <span>ABOUT NORTHBYTE</span>
              </div>
              <h2 className="about-title">
                Engineering Software & <span className="gradient-text">Empowering Innovation</span>
              </h2>
              <p className="about-subtitle">
                Northbyte is a multi-disciplinary technology firm based in Bengaluru. We build academic capstone solutions that students confidently defend, high-converting digital platforms that accelerate businesses, and Classroom OS—the intelligent school management system.
              </p>
            </div>

            <div className="about-grid-2">
              <div className="about-card about-mission-card">
                <div className="about-card-badge">OUR MISSION</div>
                <h3>Delivering Real-World Software That Makes An Impact</h3>
                <p>
                  Whether preparing students for viva day with clean, bug-free implementations or launching digital platforms for enterprises like Scoriant AI and Hudadi Physiotherapy, our mission is straightforward: write clean, maintainable software that solves genuine problems.
                </p>
                <div className="about-card-points">
                  <div className="about-point">
                    <span className="chk">✓</span>
                    <span><strong>100% Viva-Ready Code:</strong> Complete documentation, synopses, and 1-on-1 viva coaching.</span>
                  </div>
                  <div className="about-point">
                    <span className="chk">✓</span>
                    <span><strong>Commercial Engineering:</strong> Production-grade architecture, SEO-driven performance, and conversion focus.</span>
                  </div>
                </div>
              </div>

              <div className="about-card about-vision-card">
                <div className="about-card-badge">OUR VISION</div>
                <h3>Bridging Academic Rigor, Commercial Growth & Smart EdTech</h3>
                <p>
                  We envision a technology ecosystem where students gain practical hands-on engineering skills, businesses operate on state-of-the-art web platforms, and schools eliminate administrative friction through integrated digital workflows.
                </p>
                <div className="about-card-points">
                  <div className="about-point">
                    <span className="chk">✓</span>
                    <span><strong>Modern Stacks:</strong> AI/ML, Python, React, Next-gen UI, Flutter, and secure cloud databases.</span>
                  </div>
                  <div className="about-point">
                    <span className="chk">✓</span>
                    <span><strong>End-to-End Delivery:</strong> From ideation and architecture to local system installation and ongoing support.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-pillars">
              <div className="about-pillar-card">
                <div className="pillar-icon">🎓</div>
                <h4>Academic Excellence</h4>
                <p>Over 500+ BCA, MCA, and B.Tech projects delivered with custom ML algorithms, web applications, and viva prep.</p>
              </div>
              <div className="about-pillar-card">
                <div className="pillar-icon">🌐</div>
                <h4>Enterprise Web Solutions</h4>
                <p>Proven digital platforms engineered for medical clinics, deep-tech AI systems, and commercial enterprises.</p>
              </div>
              <div className="about-pillar-card">
                <div className="pillar-icon">🏫</div>
                <h4>Next-Gen EdTech</h4>
                <p>Classroom OS unifies attendance, grade books, quizzes, and parent communications under one frictionless portal.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-pill">Our Core Expertise</span>
              <h2>Three things we do really well</h2>
              <p>Tailored engineering for students aiming for top grades, businesses seeking more clients, and schools ready to eliminate paperwork.</p>
            </div>
            <div className="services-grid">
              {services.map((s) => (
                <div
                  key={s.id}
                  className={`service-card ${s.featured ? 'featured' : ''}`}
                  style={{ '--accent': s.accent }}
                >
                  <div className="service-card-top">
                    <div
                      className="service-icon"
                      style={{ background: s.accentBg, borderColor: s.accentBorder }}
                    >
                      <span aria-hidden="true">{s.icon}</span>
                    </div>
                    <span className="service-tag">{s.tag}</span>
                  </div>

                  <div className="service-header">
                    <span className="service-pillar" style={{ color: s.accent }}>{s.pillar}</span>
                    <h3 className="service-title">{s.title}</h3>
                    <p className="service-subtitle">{s.subtitle}</p>
                  </div>

                  <p className="service-desc">{s.desc}</p>

                  <div className="service-offerings">
                    <div className="service-offerings-title">Key deliverables:</div>
                    <ul>
                      {s.offerings.map((o) => (
                        <li key={o.label}>
                          <span className="chk" aria-hidden="true">✓</span>
                          <div>
                            <strong>{o.label}:</strong> {o.detail}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-pills">
                    {s.pills.map((p) => (
                      <span key={p} className="service-pill">{p}</span>
                    ))}
                  </div>

                  <div className="service-footer">
                    <a href={s.action.href} className="service-action-btn">
                      <span>{s.action.label}</span>
                      <span className="arrow" aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="lms" className="lms">
          <div className="wrap">
            <div className="sec-head">
              <h2>Classroom OS: the LMS built for schools</h2>
              <p>Everyone at your school gets a view designed for their job. Pick a role to see what it does.</p>
            </div>
            <div className="tabs" role="tablist">
              {Object.keys(lmsTabs).map((k) => (
                <button key={k} role="tab" aria-selected={tab === k} className="tab" onClick={() => setTab(k)}>{k}</button>
              ))}
            </div>
            <div className="lms-panel">
              <div>
                <h3>{t.title}</h3>
                <ul className="checks">{t.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
              <div className="panel-art">
                {t.art.map(([a, b]) => <div className="pill" key={a}><span>{a}</span><b>{b}</b></div>)}
              </div>
            </div>
            <div className="pricing-note">
              <a href="#contact" className="btn" style={{ background: 'var(--sun)', color: 'var(--ink)' }}>Book a free demo</a>
              <span style={{ color: '#B8C4DE' }}>Setup, staff training and data migration included.</span>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <div className="sec-head">
              <h2>College projects, done the right way</h2>
              <p>You understand it, you can explain it, and it works on demo day. That is how we build every project.</p>
            </div>
            <div className="steps">
              {steps.map(([h, p]) => <div className="step" key={h}><h3>{h}</h3><p>{p}</p></div>)}
            </div>
            <div className="tags">
              {['React', 'Node.js', 'Python', 'Java', 'Flutter', 'Django', 'MySQL', 'MongoDB', 'Machine Learning', 'IoT'].map((x) => <span key={x}>{x}</span>)}
            </div>
          </div>
        </section>

        <section id="work" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <h2>Recent work</h2>
              <p>Explore live client websites and featured college capstone projects we have engineered.</p>
            </div>
            <div className="work">
              {work.map((w) => (
                <article key={w.name} className="work-card">
                  <div className="work-thumb" style={{ background: w.gradient }}>
                    <span className="work-thumb-icon" aria-hidden="true">{w.icon}</span>
                  </div>
                  <div className="work-body">
                    <div className="work-top">
                      <div>
                        <span className="work-category">{w.category}</span>
                        <h3 className="work-title">{w.name}</h3>
                      </div>
                      {w.url ? (
                        <a
                          href={w.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-link"
                          aria-label={`Visit ${w.name} at ${w.domain}`}
                        >
                          {w.domain} <span>↗</span>
                        </a>
                      ) : (
                        <span className="work-domain-pill">{w.domain}</span>
                      )}
                    </div>
                    <p className="work-summary">{w.summary}</p>
                    <div className="work-tags">
                      {w.tags.map((t) => (
                        <span key={t} className="work-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <div>
              <div className="sec-head" style={{ marginBottom: 0 }}>
                <h2>Tell us what you need</h2>
                <p>We reply within one working day with a plan and a price.</p>
              </div>
              <ul>
                <li>📧 hello@northbyte.in</li>
                <li>📞 +91 98765 43210</li>
                <li>📍 Bengaluru, Karnataka</li>
              </ul>
            </div>
            <form onSubmit={submit}>
              {sent ? <div className="ok" role="status">Thanks! We have received your message and will reply soon.</div> : <>
                <label>Your name<input required name="name" /></label>
                <label>Email<input required type="email" name="email" /></label>
                <label>I am looking for
                  <select name="type"><option>A college project</option><option>A company website</option><option>Classroom OS for my school</option></select>
                </label>
                <label>Details<textarea name="msg" placeholder="Topic, deadline, number of students, etc." /></label>
                <button className="btn" type="submit">Send enquiry</button>
              </>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-col brand-col">
              <a href="#top" className="footer-logo">
                <span className="logo-mark">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#footer-logo-grad)" />
                    <path d="M2 17L12 22L22 17" stroke="url(#footer-logo-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="url(#footer-logo-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="footer-logo-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A78BFA" />
                        <stop offset="1" stopColor="#60A5FA" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="logo-text-group">
                  <span className="logo-brand text-white">NORTHBYTE</span>
                  <span className="logo-sub text-purple">SOFTWARE & EDTECH SYSTEMS</span>
                </span>
              </a>
              <p className="footer-bio">
                Building viva-ready academic capstones, high-converting digital platforms for businesses, and Classroom OS—the unified smart school operating system.
              </p>
              <div className="footer-badge-pill">
                <span className="status-dot"></span>
                <span>Bengaluru, Karnataka · Accepting Projects</span>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">College Projects</h4>
              <ul className="footer-links">
                <li><a href="#projects">BCA & MCA Final Year Projects</a></li>
                <li><a href="#projects">Machine Learning & Python Systems</a></li>
                <li><a href="#projects">MERN Stack & Web Applications</a></li>
                <li><a href="#projects">IoT & Mobile Applications</a></li>
                <li><a href="#projects">IEEE Report, PPT & Synopsis</a></li>
                <li><a href="#projects">1-on-1 Demo & Viva Coaching</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Solutions & Platforms</h4>
              <ul className="footer-links">
                <li><a href="#work">Corporate & Business Websites</a></li>
                <li><a href="#work">Healthcare Clinic Sites (Hudadi Physio)</a></li>
                <li><a href="#work">Defence & AI Platforms (Scoriant)</a></li>
                <li><a href="#lms">Classroom OS (School LMS)</a></li>
                <li><a href="#services">Appointment & Booking Workflows</a></li>
                <li><a href="#services">SEO, Performance & Custom CMS</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Get in Touch</h4>
              <ul className="footer-contact-list">
                <li>
                  <span className="contact-icon">📧</span>
                  <a href="mailto:hello@northbyte.in">hello@northbyte.in</a>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </li>
                <li>
                  <span className="contact-icon">📍</span>
                  <span>Bengaluru, Karnataka, India</span>
                </li>
                <li>
                  <span className="contact-icon">⚡</span>
                  <span className="highlight-text">Fast Reply within 24 Hours</span>
                </li>
              </ul>
              <a href="#contact" className="footer-cta-link">
                <span>Start Your Project</span>
                <span className="arr">→</span>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © {new Date().getFullYear()} Northbyte Software Systems. All rights reserved.
            </div>
            <div className="footer-bottom-links">
              <a href="#top">Privacy Policy</a>
              <span>·</span>
              <a href="#top">Terms of Service</a>
              <span>·</span>
              <a href="#top">Security</a>
              <span>·</span>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
