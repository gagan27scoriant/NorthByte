import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import CookiePolicy from './pages/CookiePolicy.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import droHeroImg from './Img/DRO.jpg'
import websiteHeroImg from './Img/WEBSITE.jpg'
import dronacharyaHeroImg from './Img/DRONACHARYA.jpg'

const services = [
  {
    id: 'college-projects',
    pillar: 'Academic Engineering',
    title: 'College & Final Year Projects',
    subtitle: 'Affordable BCA, MCA, B.Tech & M.Tech Projects',
    accent: '#2B50FF',
    accentBg: 'rgba(43, 80, 255, 0.08)',
    accentBorder: 'rgba(43, 80, 255, 0.25)',
    desc: 'Affordable, customized final-year and mini capstones specializing in Generative AI, Deep Learning, Machine Learning, Computer Vision, and Web Systems—complete with clean code, IEEE documentation, and 1-on-1 viva coaching.',
    offerings: [
      { label: 'Generative AI & LLMs', detail: 'RAG pipelines, LangChain, fine-tuned models, autonomous AI agents, and conversational interfaces' },
      { label: 'Deep Learning & Vision', detail: 'CNNs, YOLO object detection, image classification, segmentation, and PyTorch/TensorFlow implementations' },
      { label: 'Complete IEEE Docs & Viva Prep', detail: 'Full project report, synopsis, system architecture diagrams, PPT, and 1-on-1 mock viva coaching' },
      { label: 'Affordable Project Building', detail: 'Budget-friendly project planning and implementation for students who need a complete, demo-ready solution' },
    ],
    pills: ['Generative AI', 'Deep Learning', 'Machine Learning', 'LLMs & RAG'],
  },
  {
    id: 'company-websites',
    pillar: 'Digital Platforms',
    title: 'Company Websites & Web Apps',
    subtitle: 'Affordable Websites for Startups & Businesses',
    accent: '#0D9488',
    accentBg: 'rgba(13, 148, 136, 0.08)',
    accentBorder: 'rgba(13, 148, 136, 0.25)',
    desc: 'Affordable, bespoke corporate websites and interactive applications built to showcase your business credibility, drive traffic, and convert inquiries.',
    offerings: [
      { label: 'Custom Brand Engineering', detail: 'Visually compelling, brand-aligned websites for startups, clinics, enterprises, and professional service businesses' },
      { label: 'Inquiry & Booking Systems', detail: 'Lead capture forms, appointment scheduling, and streamlined customer communication workflows' },
      { label: 'Speed & Mobile First', detail: 'Fluid responsive UI, sub-second loading speeds, and SEO best practices across all devices' },
      { label: 'Secure & Maintainable', detail: 'Clean modern codebases, SSL security, hosting assistance, and scalable long-term support' },
      { label: 'Startup-Friendly Pricing', detail: 'Affordable website packages for new businesses, small teams, and companies building their first online presence' },
    ],
    pills: ['Custom UI/UX', 'SEO Optimized', 'Booking Systems', 'Speed Optimized'],
  },
  {
    id: 'dronacharya-ai',
    pillar: 'Flagship EdTech Platform',
    title: 'Dronacharya AI',
    subtitle: 'Unified AI Learning Management & Institutional Intelligence Platform',
    accent: '#E08A00',
    accentBg: 'rgba(224, 138, 0, 0.1)',
    accentBorder: 'rgba(224, 138, 0, 0.3)',
    featured: true,
    desc: 'The next-generation Learning Management Platform powered by 4 specialized AI engines—unifying administrators, educators, students, and parents into one intelligent ecosystem.',
    offerings: [
      { label: '4 Specialized AI Engines', detail: 'Cognitive skill radar, AI viva examiner, auto lesson planning, and PYQ predictors' },
      { label: 'Automated Academic Operations', detail: '1-tap attendance marking, assignment workflows, and AI lesson plan generator' },
      { label: 'Multilingual & Audio Suite', detail: '220+ language translation via NLLB and neural text-to-speech for all course materials' },
    ],
    pills: ['4 AI Engines', 'Cognitive Radar', 'AI Viva Examiner', '1-Tap Attendance'],
  },
]

const dronacharyaAIProducts = [
  {
    id: 'analytics',
    title: 'Student Analytics & Cognitive Radar',
    icon: '📊',
    desc: 'Deep cognitive skills mapping (problem-solving, memory, accuracy), performance velocity, and predictive score insights.',
    badge: 'Cognitive Radar',
  },
  {
    id: 'teacher',
    title: 'Teacher Assistant & Lesson Generator',
    icon: '🧑‍🏫',
    desc: 'Instant lesson plan generation from any curriculum topic, class comparisons, and automated at-risk student detection.',
    badge: 'Auto Lesson Plans',
  },
  {
    id: 'pyq',
    title: '10-Year PYQ & Model Paper Engine',
    icon: '📋',
    desc: 'Chapter-wise question frequency trends, high-probability exam predictions, and downloadable PDF model papers.',
    badge: 'Exam Predictor',
  },
  {
    id: 'viva',
    title: 'AI Oral Examiner & Viva Simulator',
    icon: '🎤',
    desc: 'Voice/speech-enabled AI avatars that conduct live oral exams, evaluate spoken answers, and generate detailed scorecards.',
    badge: 'Voice Viva',
  },
]

const lmsTabs = {
  Teachers: { title: 'Less paperwork, more teaching with AI assistance', points: ['Mark daily attendance in one single tap', 'Generate structured lesson plans from any topic instantly', 'Assign homework and track syllabus milestones with AI assistance', 'Track at-risk students with proactive early intervention alerts'], art: [['Class 8-B attendance', '38 / 40'], ['Homework submitted', '92%'], ['AI lesson plans ready', '12 plans'], ['Quiz average', '76%']] },
  Students: { title: 'Cognitive growth, AI mentorship & study planning', points: ['See personalized study schedules tailored to exam dates', 'Practice oral viva exams with conversational AI avatars', 'Test yourself with 10-year PYQ model papers and high-probability topics', 'Analyze cognitive strengths and track progress on the skill radar'], art: [['Cognitive skill score', '94%'], ['Maths assignment', 'Due Fri'], ['AI viva completed', 'Score: 9.2/10'], ['PYQ model paper', 'Generated']] },
  Parents: { title: 'Stay informed in real time with continuous visibility', points: ['Instant daily attendance alerts on arrival and departure', 'Transparent fee receipts, pending dues, and payment links', 'Direct encrypted messaging with class and subject instructors', 'Real-time progress cards and academic behavioral remarks'], art: [['Attendance today', 'Present (8:45 AM)'], ['Fee status', 'Paid (Receipt #4182)'], ['New instructor note', '1 unread'], ['Overall term grade', 'A (88.4%)']] },
  Admins: { title: 'Complete institutional control & multi-campus analytics', points: ['Manage classes, teacher timetables, and student batches with Org Code', 'Automate fee collection reports, pending dues, and receipts', 'Platform-wide cognitive analytics and cross-section performance', 'Role-based access control, automated backups, and cloud security'], art: [['Active students', '1,240'], ['Fees collected', '₹18.4L'], ['Staff online', '56'], ['AI modules active', '4 of 4']] },
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
    gradient: 'linear-gradient(135deg, #0d9488 0%, #065f46 100%)',
    summary: 'Official clinic website engineered to present specialized physiotherapy & rehabilitation therapies with seamless patient consultations.',
    tags: ['React', 'Responsive Web', 'Appointment Flow', 'Healthcare', 'SEO'],
  },
  {
    name: 'Scoriant AI Defence Systems Solutions',
    category: 'Corporate Platform · AI & Defence',
    url: 'https://scoriant.com',
    domain: 'scoriant.com',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)',
    summary: 'Cutting-edge digital platform representing advanced defence solutions, AI-driven tactical intelligence, and mission-critical technologies.',
    tags: ['Modern Web UI', 'AI Defence', 'Cyber Architecture', 'Enterprise Platform'],
  },
  {
    name: 'Lung Cancer Prediction System',
    category: 'BCA College Project · Machine Learning',
    url: null,
    domain: 'ML + Web App',
    gradient: 'linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6d28d9 100%)',
    summary: 'End-to-end Machine Learning healthcare solution predicting lung cancer risk levels, combined with an intuitive web-based interface for diagnosis.',
    tags: ['Machine Learning', 'Python', 'Web Interface', 'Healthcare Analytics', 'Viva Ready'],
  },
]

const heroSlides = [
  {
    id: 'college-projects',
    bgImage: droHeroImg,
    badge: 'GEN AI, DEEP LEARNING & CAPSTONE PROJECTS',
    titleWhite: 'AI, Machine Learning & ',
    titleGradient: 'Capstone Projects',
    lead: 'Viva-ready final-year capstone projects in Generative AI, Deep Learning, Machine Learning, Computer Vision, and Full-Stack Systems—engineered with clean code, standard university documentation (Report, PPT), and 1-on-1 viva coaching.',
    primaryBtn: { text: 'Explore AI & College Projects', href: '#projects' },
    secondaryBtn: { text: 'Get Project Quote', href: '#contact' },
    badgeBg: 'rgba(124, 58, 237, 0.25)',
    badgeBorder: 'rgba(167, 139, 250, 0.45)',
    badgeColor: '#C084FC',
    gradientText: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
  },
  {
    id: 'company-websites',
    bgImage: websiteHeroImg,
    badge: 'COMPANY WEBPAGES & PLATFORMS',
    titleWhite: 'High-Converting Company ',
    titleGradient: 'Websites',
    lead: 'Bespoke corporate websites and interactive web platforms built to establish your brand credibility online, drive organic traffic, and convert visitors into paying clients—responsive, fast, and SEO-optimized.',
    primaryBtn: { text: 'Explore Recent Work', href: '#work' },
    secondaryBtn: { text: 'Build Your Website', href: '#contact' },
    badgeBg: 'rgba(16, 185, 129, 0.2)',
    badgeBorder: 'rgba(110, 231, 183, 0.45)',
    badgeColor: '#6EE7B7',
    gradientText: 'linear-gradient(135deg, #34D399 0%, #38BDF8 100%)',
  },
  {
    id: 'dronacharya-ai',
    bgImage: dronacharyaHeroImg,
    badge: 'FLAGSHIP LMS · DRONACHARYA AI',
    titleWhite: '',
    titleGradient: 'Dronacharya AI',
    lead: 'The intelligent learning platform powered by 4 specialized AI educational engines—featuring student cognitive radar, AI oral viva examiners, 1-tap attendance, and automated lesson planning for modern institutions.',
    primaryBtn: { text: 'Explore Dronacharya AI', href: '#lms' },
    secondaryBtn: { text: 'Book Free Demo', href: '#contact' },
    badgeBg: 'rgba(245, 158, 11, 0.2)',
    badgeBorder: 'rgba(252, 211, 77, 0.45)',
    badgeColor: '#FCD34D',
    gradientText: 'linear-gradient(135deg, #F59E0B 0%, #38BDF8 100%)',
  },
]

function LandingPage() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState('Teachers')
  const [sent, setSent] = useState(false)
  const t = lmsTabs[tab]
  const go = () => setOpen(false)

  useEffect(() => {
    // Reset SEO title, description, canonical and metadata for homepage
    document.title = 'Affordable College Projects & Company Websites | Northbyte'

    const setMeta = (name, content, prop = false) => {
      const attr = prop ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', 'Northbyte is an affordable college project builder for BCA, MCA and B.Tech students, and an affordable company website development partner in Bengaluru. Get clean code, documentation, viva support and SEO-ready websites.')
    setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    setMeta('author', 'Northbyte Software Systems')
    setMeta('og:title', 'Affordable College Projects & Company Websites | Northbyte', true)
    setMeta('og:description', 'Affordable college project building for students and affordable, SEO-ready company website development in Bengaluru.', true)
    setMeta('og:url', 'https://northbyte.in/', true)
    setMeta('og:type', 'website', true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', 'Affordable College Projects & Company Websites | Northbyte')
    setMeta('twitter:description', 'Affordable college project building and SEO-ready company website development in Bengaluru.')
    setMeta('twitter:url', 'https://northbyte.in/')

    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.href = 'https://northbyte.in/'
    }

    // Clean up subpage specific JSON-LD scripts when on homepage
    const tempIds = ['ld-privacy', 'ld-terms', 'ld-cookie']
    tempIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) el.remove()
    })
  }, [])

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
          <a href="#top" className="logo scoriant-logo" aria-label="Northbyte Homepage">
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
          <nav className="links" aria-label="Main Navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#lms">Dronacharya AI</a>
            <a href="#projects">College Projects</a>
            <a href="#work">Work</a>
            <a href="#contact" className="nav-cta-btn">CONTACT US</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero scoriant-hero">
          <div className="hero-bg-media" aria-hidden="true">
            {heroSlides.map((slide, idx) => (
              <img
                key={slide.id}
                src={slide.bgImage}
                alt={slide.titleGradient}
                className={`hero-bg-img ${idx === slideIndex ? 'hero-bg-img-active' : ''}`}
              />
            ))}
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

            <div className="hero-actions hero-slide-fade" key={`actions-${slideIndex}`}>
              <a href={currentSlide.primaryBtn.href} className="btn-scoriant-primary">
                <span>{currentSlide.primaryBtn.text}</span>
                <span className="arr">→</span>
              </a>
              <a href={currentSlide.secondaryBtn.href} className="btn-scoriant-secondary">
                <span>{currentSlide.secondaryBtn.text}</span>
                <span className="arr">→</span>
              </a>
            </div>

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
                Northbyte is a multi-disciplinary technology firm based in Bengaluru. We build academic capstone solutions that students confidently defend, high-converting digital platforms that accelerate businesses, and Dronacharya AI—the unified intelligent learning management platform.
              </p>
            </div>

            <div className="about-grid-2">
              <div className="about-card about-mission-card">
                <div className="about-card-badge">OUR MISSION</div>
                <h3>Delivering Real-World Software That Makes An Impact</h3>
                <p>
                  Whether preparing students for viva day with clean, bug-free implementations or launching digital platforms for startups, clinics, and enterprises, our mission is straightforward: write clean, maintainable software that solves genuine problems.
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
                  We envision a technology ecosystem where students gain practical hands-on engineering skills, businesses operate on state-of-the-art web platforms, and institutions eliminate administrative friction through integrated digital workflows.
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
                <p>Proven digital platforms engineered for healthcare clinics, enterprise AI systems, defence technology firms, and professional service businesses.</p>
              </div>
              <div className="about-pillar-card">
                <div className="pillar-icon">🏫</div>
                <h4>Next-Gen EdTech</h4>
                <p>Dronacharya AI unifies attendance, grade books, quizzes, and parent communications under one frictionless portal.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-pill">Our Core Expertise</span>
              <h2>Three things we do really well</h2>
              <p>Tailored engineering for students aiming for top grades, businesses seeking more clients, and organizations ready to eliminate paperwork.</p>
            </div>
            <div className="services-grid">
              {services.map((s) => (
                <div
                  key={s.id}
                  className={`service-card ${s.featured ? 'featured' : ''}`}
                  style={{ '--accent': s.accent }}
                >
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
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="lms" className="lms">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-pill lms-pill">PROPRIETARY FLAGSHIP LMS</span>
              <h2>Dronacharya AI</h2>
              <p>The unified intelligent learning platform that replaces fragmented software with one seamless portal. Powered by 4 proprietary AI educational engines and dedicated workflows for teachers, students, parents, and principals.</p>
            </div>

            {/* 4 AI Educational Engines Grid */}
            <div className="gurukula-engines-wrap">
              <div className="gurukula-engines-head">
                <span className="engines-kicker">4 SPECIALIZED AI ENGINES BUILT-IN</span>
                <h3>Intelligence Engineered for Every Stage of Learning</h3>
              </div>
              <div className="gurukula-engines-grid">
                {dronacharyaAIProducts.map((p) => (
                  <div key={p.id} className="engine-card">
                    <div className="engine-card-top">
                      <span className="engine-icon" aria-hidden="true">{p.icon}</span>
                      <span className="engine-badge">{p.badge}</span>
                    </div>
                    <h4 className="engine-title">{p.title}</h4>
                    <p className="engine-desc">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Role-Based Portals */}
            <div className="gurukula-roles-wrap">
              <div className="gurukula-engines-head">
                <span className="engines-kicker">ROLE-BASED PORTALS</span>
                <h3>A Tailored View for Every Stakeholder</h3>
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
            </div>

            {/* Multilingual & Technology Highlights Bar */}
            <div className="gurukula-features-strip">
              <div className="strip-item">
                <span className="strip-icon">🌐</span>
                <span><strong>220+ Languages</strong> Translation Engine</span>
              </div>
              <div className="strip-item">
                <span className="strip-icon">🎧</span>
                <span><strong>Neural Text-to-Audio</strong> Lessoning Synthesis</span>
              </div>
              <div className="strip-item">
                <span className="strip-icon">⚡</span>
                <span><strong>Automated Quizzes</strong> & AI Based Evaluation</span>
              </div>
              <div className="strip-item">
                <span className="strip-icon">🛡️</span>
                <span><strong>Multi-Campus Portal</strong> with Org Codes</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <div className="sec-head sec-head-full">
              <h2>College projects, done the right way</h2>
              <p>Specialized in Generative AI, Deep Learning, Machine Learning, Computer Vision, and Full-Stack Web solutions. You understand every algorithm, you can explain it, and it works on demo day.</p>
            </div>
            <div className="steps">
              {steps.map(([h, p]) => <div className="step" key={h}><h3>{h}</h3><p>{p}</p></div>)}
            </div>
            <div className="tags">
              {['Generative AI', 'Deep Learning', 'Machine Learning', 'LLMs & RAG', 'Computer Vision', 'NLP', 'PyTorch', 'TensorFlow', 'Python', 'React', 'Node.js', 'Flutter', 'Django', 'FastAPI', 'IoT'].map((x) => <span key={x}>{x}</span>)}
            </div>
          </div>
        </section>

        <section className="global-partners-section" aria-label="Global Technology Partners">
          <div className="wrap">
            <div className="global-partners-header">
              <h2 className="global-partners-title">Our Partnerships</h2>
              <p className="global-partners-subtitle">
                Collaborating with leading innovators to deliver state-of-the-art AI and edge defence solutions.
              </p>
            </div>
            <div className="global-partners-logos">
              <div className="global-partner-item staco-brand" title="Staco Systems">
                <span className="staco-logo-text">stacosystems<span className="staco-tm">™</span></span>
              </div>
              <div className="global-partner-item tsecond-brand" title="Tsecond">
                <span className="tsecond-t">T</span>
                <span className="tsecond-bar">|</span>
                <span className="tsecond-name">second</span>
              </div>
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
                  <div className="work-thumb" style={{ background: w.gradient }}></div>
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
            <div className="contact-info">
              <div className="sec-head" style={{ marginBottom: 20 }}>
                <span className="sec-pill">GET IN TOUCH</span>
                <h2>Tell us what you need</h2>
                <p>We review your requirements and reply within one working day with a clear technical roadmap, milestone schedule, and fixed price quote.</p>
              </div>
              <div className="contact-features">
                <div className="contact-feature-card">
                  <div className="feature-icon">🎓</div>
                  <div className="feature-text">
                    <strong>100% Viva & Demo Readiness</strong>
                    <p>IEEE standard documentation, synopses, presentation slides, and 1-on-1 viva coaching sessions.</p>
                  </div>
                </div>

                <div className="contact-feature-card">
                  <div className="feature-icon">🔒</div>
                  <div className="feature-text">
                    <strong>Full Code Ownership & Setup</strong>
                    <p>Clean, well-commented source code with complete local installation and setup on your personal laptop.</p>
                  </div>
                </div>
              </div>

              <div className="contact-channels">
                <div className="contact-channel-item">
                  <span className="channel-icon">📧</span>
                  <div>
                    <span className="channel-label">Email us directly</span>
                    <a href="mailto:hello@northbyte.in" className="channel-value">hello@northbyte.in</a>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <span className="channel-icon">📞</span>
                  <div>
                    <span className="channel-label">Call or WhatsApp</span>
                    <a href="tel:+917406335619" className="channel-value">+91 7406335619</a>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <span className="channel-icon">📍</span>
                  <div>
                    <span className="channel-label">Development Hub</span>
                    <span className="channel-value">Bengaluru, Karnataka</span>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <span className="channel-icon">⏰</span>
                  <div>
                    <span className="channel-label">Working Hours</span>
                    <span className="channel-value">Mon – Sat: 9 AM – 8 PM</span>
                  </div>
                </div>
              </div>


            </div>
            <form onSubmit={submit}>
              {sent ? <div className="ok" role="status">Thanks! We have received your message and will reply soon.</div> : <>
                <label>Your name<input required name="name" placeholder="Your full name" /></label>
                <label>Email<input required type="email" name="email" placeholder="name@example.com" /></label>
                <label>Phone number<input required type="tel" name="phone" placeholder="+91 7406335619" /></label>
                <label>I am looking for
                  <select name="type"><option>A college project</option><option>A company website</option><option>Dronacharya AI Platform</option></select>
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
                Building viva-ready academic capstones, high-converting digital platforms for businesses, and Dronacharya AI—the unified intelligent learning management platform.
              </p>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">College Projects</h4>
              <ul className="footer-links">
                <li><a href="#projects">Generative AI & LLM Capstones</a></li>
                <li><a href="#projects">Deep Learning & Computer Vision</a></li>
                <li><a href="#projects">Machine Learning & Python Systems</a></li>
                <li><a href="#projects">Full-Stack Web & Mobile Apps</a></li>
                <li><a href="#projects">IEEE Report, PPT & Synopsis</a></li>
                <li><a href="#projects">1-on-1 Demo & Viva Coaching</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Solutions & Legal</h4>
              <ul className="footer-links">
                <li><a href="#work">Corporate & Business Websites</a></li>
                <li><a href="#work">Healthcare & Clinic Platforms</a></li>
                <li><a href="#work">AI & Enterprise Platforms</a></li>
                <li><a href="#lms">Dronacharya AI (EdTech Platform)</a></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                <li><Link to="/cookie-policy">Cookie Policy</Link></li>
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
                  <a href="tel:+917406335619">+91 7406335619</a>
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
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span>·</span>
              <Link to="/terms-and-conditions">Terms of Service</Link>
              <span>·</span>
              <Link to="/cookie-policy">Cookie Policy</Link>
              <span>·</span>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('openCookiePreferences'))}
                className="footer-cookie-btn"
              >
                Cookie Preferences
              </button>
              <span>·</span>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <CookieConsent />
    </>
  )
}
