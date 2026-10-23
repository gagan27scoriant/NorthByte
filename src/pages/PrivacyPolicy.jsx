import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SITE = 'https://northbyte.in'
const COMPANY = 'Northbyte Software Systems'
const EMAIL = 'hello@northbyte.in'
const PHONE = '+91 7406335619'
const ADDRESS = 'Bengaluru, Karnataka 560001, India'
const LAST_UPDATED = 'October 22, 2025'
const EFFECTIVE_DATE = 'October 22, 2025'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Northbyte Software Systems'
    const setMeta = (name, content, prop = false) => {
      const attr = prop ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el) }
      el.setAttribute('content', content)
    }
    setMeta('description', "Northbyte Software Systems comprehensive Privacy Policy. GDPR and IT Act 2000 compliant. Understand how we collect, use, protect, and retain your personal data.")
    setMeta('robots', 'index, follow')
    setMeta('author', COMPANY)
    setMeta('og:title', 'Privacy Policy - Northbyte Software Systems', true)
    setMeta('og:description', 'Northbyte comprehensive privacy policy — GDPR and IT Act compliant data protection.', true)
    setMeta('og:url', `${SITE}/privacy-policy`, true)
    setMeta('og:type', 'website', true)
    setMeta('og:site_name', COMPANY, true)
    setMeta('twitter:card', 'summary')
    setMeta('twitter:title', 'Privacy Policy - Northbyte Software Systems')
    setMeta('twitter:description', 'Northbyte privacy policy — GDPR and IT Act compliant.')
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = `${SITE}/privacy-policy`
    let ld = document.getElementById('ld-privacy')
    if (!ld) { ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.id = 'ld-privacy'; document.head.appendChild(ld) }
    ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Privacy Policy', url: `${SITE}/privacy-policy`, publisher: { '@type': 'Organization', name: COMPANY, url: SITE, email: EMAIL, address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', addressCountry: 'IN' } }, dateModified: '2025-10-22', inLanguage: 'en-IN', breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE }, { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${SITE}/privacy-policy` }] } })
    window.scrollTo(0, 0)
    return () => { ld && ld.remove() }
  }, [])

  return (
    <>
      <header className="nav scoriant-nav">
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" className="logo scoriant-logo" style={{ textDecoration: 'none' }}>
            <span className="logo-mark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#pp-logo-g)" />
                <path d="M2 17L12 22L22 17" stroke="url(#pp-logo-g)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="url(#pp-logo-g)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs><linearGradient id="pp-logo-g" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA" /><stop offset="1" stopColor="#60A5FA" /></linearGradient></defs>
              </svg>
            </span>
            <span className="logo-text-group">
              <span className="logo-brand text-white">NORTHBYTE</span>
              <span className="logo-sub text-purple">SOFTWARE &amp; EDTECH SYSTEMS</span>
            </span>
          </Link>
          <Link to="/" className="btn" style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}>&#8592; Back to Home</Link>
        </div>
      </header>

      <main style={{ paddingTop: '5rem' }}>
        <div className="legal-page">

          <div className="legal-hero">
            <div className="legal-badge">LEGAL &amp; COMPLIANCE</div>
            <h1>Privacy Policy</h1>
            <p className="legal-lead">
              At Northbyte Software Systems, your privacy is a fundamental right, not an afterthought. This comprehensive Privacy Policy explains in clear, plain language exactly what personal data we collect, why we collect it, how we use and protect it, how long we keep it, and what rights you hold over it. We are fully committed to compliance with India's Information Technology Act 2000, the IT (Amendment) Act 2008, and international best practices including the General Data Protection Regulation (GDPR).
            </p>
            <div className="legal-meta">
              <span>&#128197; Effective Date: <strong>{EFFECTIVE_DATE}</strong></span>
              <span>&#128260; Last Updated: <strong>{LAST_UPDATED}</strong></span>
              <span>&#128205; Bengaluru, Karnataka, India</span>
              <span>&#128274; GDPR &amp; IT Act 2000 Compliant</span>
            </div>
          </div>

          <div className="legal-card" style={{ marginBottom: '2rem', background: 'rgba(43, 80, 255, 0.04)', borderColor: 'rgba(43, 80, 255, 0.2)' }}>
            <strong>&#9889; Quick Summary:</strong> We collect only what we need to serve you. We never sell your data. We use industry-standard security. You can request deletion of your data at any time. For questions, email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </div>

          <nav className="legal-toc" aria-label="Table of contents">
            <h2>Contents</h2>
            <ol>
              <li><a href="#who-we-are">Who We Are (Data Controller)</a></li>
              <li><a href="#scope">Scope &amp; Application</a></li>
              <li><a href="#data-we-collect">Personal Data We Collect</a></li>
              <li><a href="#how-we-use">How We Use Your Data</a></li>
              <li><a href="#legal-basis">Legal Basis for Processing</a></li>
              <li><a href="#data-sharing">Data Sharing &amp; Third-Party Processors</a></li>
              <li><a href="#international-transfers">International Data Transfers</a></li>
              <li><a href="#cookies">Cookies &amp; Tracking Technologies</a></li>
              <li><a href="#data-retention">Data Retention Periods</a></li>
              <li><a href="#your-rights">Your Privacy Rights</a></li>
              <li><a href="#data-security">Data Security Measures</a></li>
              <li><a href="#children">Children's Privacy</a></li>
              <li><a href="#third-party-links">Third-Party Websites &amp; Links</a></li>
              <li><a href="#automated-decisions">Automated Decision-Making</a></li>
              <li><a href="#grievance">Grievance Officer &amp; Complaints</a></li>
              <li><a href="#changes">Changes to This Policy</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ol>
          </nav>

          <div className="legal-body">

            <section id="who-we-are">
              <h2>1. Who We Are (Data Controller)</h2>
              <p><strong>Northbyte Software Systems</strong> ("Northbyte", "we", "us", or "our") is a technology services company incorporated and operating in Bengaluru, Karnataka, India. We provide three primary service lines: academic capstone engineering for students, commercial web platform development for businesses, and Dronacharya AI &mdash; our proprietary AI-powered Learning Management System for educational institutions.</p>
              <p>For the purposes of applicable data protection law, Northbyte Software Systems is the <strong>Data Controller</strong> &mdash; meaning we determine the purposes and means of processing your personal data when you interact with our website or engage our services.</p>
              <div className="legal-card">
                <strong>Data Controller Details:</strong><br />
                Company: <strong>{COMPANY}</strong><br />
                Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
                Phone: <a href="tel:+917406335619">{PHONE}</a><br />
                Address: {ADDRESS}<br />
                Website: <a href={SITE} target="_blank" rel="noopener noreferrer">{SITE}</a><br />
                Jurisdiction: India (Karnataka)<br />
                Business Hours: Monday&ndash;Saturday, 9:00 AM &ndash; 8:00 PM IST
              </div>
            </section>

            <section id="scope">
              <h2>2. Scope &amp; Application</h2>
              <p>This Privacy Policy applies to:</p>
              <ul>
                <li><strong>All visitors</strong> to our website at <a href={SITE} target="_blank" rel="noopener noreferrer">{SITE}</a> and all subdomains</li>
                <li><strong>Prospective clients</strong> who submit enquiry forms or contact us via email, phone, or WhatsApp</li>
                <li><strong>Active clients</strong> who engage Northbyte for academic project engineering, web development, or any other services</li>
                <li><strong>Dronacharya AI users</strong> including institutional administrators, educators, students, and parents who access our EdTech platform</li>
                <li><strong>Job applicants</strong> or anyone who sends us CVs or applies for positions</li>
                <li><strong>Partners, vendors, and contractors</strong> who work with us on a commercial basis</li>
              </ul>
              <p>This Policy does <strong>not</strong> apply to third-party websites that may be linked from our site. We encourage you to read the privacy policies of any external sites you visit.</p>
            </section>

            <section id="data-we-collect">
              <h2>3. Personal Data We Collect</h2>
              <p>We operate on the principle of <strong>data minimisation</strong> &mdash; we collect only the data that is strictly necessary for the purposes described in this policy.</p>

              <h3>3.1 Information You Provide Directly</h3>
              <ul>
                <li><strong>Contact enquiries:</strong> Full name, email address, phone number, enquiry type, and your message or project description when you submit our contact form</li>
                <li><strong>Email communications:</strong> Any information contained in emails you send us, including attachments, technical requirements, and follow-up correspondence</li>
                <li><strong>WhatsApp / phone consultations:</strong> Notes from verbal discussions regarding project requirements, deadlines, and preferences. We do not record calls without explicit consent.</li>
                <li><strong>Project onboarding:</strong> Institution name, course details, submission deadlines, technology stack preferences, and specific academic requirements during project intake</li>
                <li><strong>Dronacharya AI registration:</strong> Institution name, administrator name, official email, phone number, number of students, and academic structure details for institutional clients</li>
                <li><strong>Payment information:</strong> UPI IDs, bank account details for NEFT/RTGS, or payment references. We never store full card numbers &mdash; all card payments are handled by secure third-party gateways.</li>
                <li><strong>Job applications:</strong> Name, email, resume or CV, portfolio links, work samples, and professional history</li>
              </ul>

              <h3>3.2 Information Collected Automatically</h3>
              <ul>
                <li><strong>Usage analytics:</strong> Pages visited, time spent on each page, scroll depth, button clicks, referring website URL, and entry/exit pages &mdash; collected via analytics tools with IP anonymisation enabled</li>
                <li><strong>Device &amp; browser data:</strong> Browser type and version, operating system, screen resolution, and device type (desktop, mobile, tablet)</li>
                <li><strong>IP address:</strong> Used for approximate geolocation (country/city level only), fraud detection, and security monitoring. IPs are anonymised in analytics and not retained beyond 90 days in raw logs.</li>
                <li><strong>Session data:</strong> Session identifiers, timestamps of website visits, and interaction sequences to understand how visitors use our website</li>
                <li><strong>Cookie data:</strong> See our <Link to="/cookie-policy">Cookie Policy</Link> for a full list of cookies, their purposes, and how to manage them</li>
              </ul>

              <h3>3.3 Sensitive Data We Do NOT Collect</h3>
              <p>We do <strong>not</strong> collect, process, or request any of the following sensitive categories of personal data:</p>
              <ul>
                <li>Racial or ethnic origin</li>
                <li>Political opinions or religious beliefs</li>
                <li>Trade union membership</li>
                <li>Genetic or biometric data</li>
                <li>Health or medical information</li>
                <li>Sexual orientation or gender identity</li>
                <li>Criminal records or offence history</li>
                <li>Aadhaar card numbers or other government-issued identification (we do not require ID for our services)</li>
              </ul>
              <p>If any future service context requires such data, we will seek explicit, informed consent and implement heightened security measures before any collection occurs.</p>
            </section>

            <section id="how-we-use">
              <h2>4. How We Use Your Data</h2>
              <p>We use your personal data only for specified, explicit, and legitimate purposes. The table below details each purpose, the data used, and the lawful basis permitting the processing:</p>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead><tr><th>Purpose</th><th>Data Used</th><th>Legal Basis</th></tr></thead>
                  <tbody>
                    <tr><td>Respond to project or service enquiries</td><td>Name, email, phone, message</td><td>Legitimate interest / Pre-contractual steps</td></tr>
                    <tr><td>Deliver agreed engineering services and deliverables</td><td>Contact info, project specifications, communication history</td><td>Contract performance</td></tr>
                    <tr><td>Send project milestone updates, status reports, and deliverables</td><td>Email address, phone number</td><td>Contract / Legitimate interest</td></tr>
                    <tr><td>Process and reconcile service payments</td><td>Name, payment reference, transaction details</td><td>Contract performance / Legal obligation</td></tr>
                    <tr><td>Provide post-delivery support and bug-fix assistance</td><td>Contact info, technical issue details</td><td>Contract / Legitimate interest</td></tr>
                    <tr><td>Improve website usability, performance, and content relevance</td><td>Anonymised usage analytics</td><td>Legitimate interest</td></tr>
                    <tr><td>Security monitoring, fraud detection, and abuse prevention</td><td>IP address, session logs</td><td>Legitimate interest / Legal obligation</td></tr>
                    <tr><td>Comply with legal, tax, and accounting obligations</td><td>Contact and transaction records</td><td>Legal obligation</td></tr>
                    <tr><td>Maintain business records and audit trails</td><td>Project correspondence, payment records</td><td>Legal obligation / Legitimate interest</td></tr>
                    <tr><td>Respond to legal proceedings, court orders, or regulatory inquiries</td><td>Relevant personal data as required</td><td>Legal obligation</td></tr>
                    <tr><td>Portfolio showcase (anonymised or with explicit consent)</td><td>Project type, general description</td><td>Consent / Legitimate interest</td></tr>
                    <tr><td>Dronacharya AI &mdash; manage institutional accounts and user access</td><td>Administrator and user account data</td><td>Contract performance</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="legal-card" style={{ background: 'rgba(31, 169, 122, 0.06)', borderColor: 'rgba(31, 169, 122, 0.25)', marginTop: '1rem' }}>
                <strong>&#128274; Our firm commitment:</strong> We do <strong>not</strong> sell, rent, trade, or auction your personal data to any third party &mdash; ever. We do not use your data for unsolicited marketing without explicit opt-in consent. We do not build advertising profiles from your data.
              </div>
            </section>

            <section id="legal-basis">
              <h2>5. Legal Basis for Processing</h2>
              <p>Under the GDPR (for EU/UK data subjects) and India's Information Technology Act 2000 and IT (Amendment) Act 2008, we process personal data only under one or more of the following lawful bases:</p>
              <ul>
                <li><strong>Consent (Article 6(1)(a) GDPR):</strong> You have given clear, informed, freely-given, and unambiguous consent for a specific purpose &mdash; for example, accepting optional analytics cookies via our consent banner. You may withdraw consent at any time without detriment. Withdrawal does not affect the lawfulness of processing prior to withdrawal.</li>
                <li><strong>Contract Performance (Article 6(1)(b) GDPR):</strong> Processing is necessary to fulfil a contract with you &mdash; such as delivering a software engineering project, building a website, or providing Dronacharya AI to your institution. This includes pre-contractual steps taken at your request.</li>
                <li><strong>Legal Obligation (Article 6(1)(c) GDPR):</strong> Processing is required for compliance with applicable laws, including maintaining financial records under the Indian Income Tax Act, responding to lawful government requests, or retaining data under the Companies Act 2013.</li>
                <li><strong>Legitimate Interests (Article 6(1)(f) GDPR):</strong> Processing is necessary for our legitimate business interests &mdash; including website security, fraud prevention, improving our services through analytics, and maintaining client communication records &mdash; provided these are not overridden by your fundamental rights. We always conduct a balancing test to ensure our interests do not override yours.</li>
                <li><strong>Vital Interests (Article 6(1)(d) GDPR):</strong> In rare emergency circumstances where processing is necessary to protect the life of an individual. This basis is expected to be used extremely rarely, if ever.</li>
              </ul>
              <p>To enquire about the specific legal basis applicable to any processing activity, email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
            </section>

            <section id="data-sharing">
              <h2>6. Data Sharing &amp; Third-Party Processors</h2>
              <p>We do not sell your personal data. We share it only with carefully selected, contractually bound third-party service providers who act as <strong>data processors</strong> &mdash; they may only use your data under our documented instructions and for no other purpose.</p>

              <h3>6.1 Categories of Third-Party Processors</h3>
              <ul>
                <li><strong>Web hosting &amp; infrastructure:</strong> Our website is hosted on secure cloud infrastructure (India/EU regions) maintained by providers with SOC 2 compliance and ISO 27001 certification. They process server logs, IP addresses, and web traffic data.</li>
                <li><strong>Email &amp; communication services:</strong> Business email providers used to send project communications, invoices, and transactional messages. These providers process email metadata and content.</li>
                <li><strong>Website analytics:</strong> Google Analytics with IP anonymisation enabled, advertising features disabled, and data sharing with Google products disabled. Data is used only in aggregate and anonymised form.</li>
                <li><strong>Payment processing:</strong> PCI-DSS Level 1 compliant payment processors for UPI, NEFT, and card-based transactions. We do not store, transmit, or access full payment card numbers at any point.</li>
                <li><strong>Project collaboration tools:</strong> Shared workspace tools (e.g., Google Drive, GitHub private repositories) where mutually agreed, with access restricted to authorised project team members only.</li>
                <li><strong>Accounting &amp; invoicing software:</strong> Cloud accounting tools that process client name, email, billing address, and payment records as required by law.</li>
                <li><strong>Customer support tools:</strong> Help desk software used to manage project support tickets, storing your name, email, and support interaction history.</li>
              </ul>

              <h3>6.2 Other Permitted Disclosures</h3>
              <ul>
                <li><strong>Legal requirements:</strong> We will disclose personal data to law enforcement, courts, or regulatory authorities only where legally required &mdash; for example, in response to a valid court order or governmental investigation. Where legally permissible, we will notify you before complying.</li>
                <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of our business, your personal data may be transferred as part of business assets. We will provide advance notice and, where required, seek your consent before such transfer.</li>
                <li><strong>Professional advisors:</strong> We may share data on a confidential basis with our lawyers, accountants, auditors, or insurance providers where necessary to protect our legitimate legal or financial interests.</li>
                <li><strong>With your explicit consent:</strong> We will not share your data with any other party without your informed, written, freely-given consent.</li>
              </ul>

              <h3>6.3 Data Processing Agreement Requirements</h3>
              <p>All third-party processors with whom we share personal data are contractually required to:</p>
              <ul>
                <li>Execute a Data Processing Agreement (DPA) or equivalent contractual clauses with Northbyte</li>
                <li>Process data only on our documented instructions and for no independent purpose</li>
                <li>Implement appropriate technical and organisational security measures</li>
                <li>Notify us promptly within 24 hours in the event of a personal data breach</li>
                <li>Assist us in responding to data subject rights requests within required timeframes</li>
                <li>Delete or return all personal data upon termination of our agreement with them</li>
              </ul>
            </section>

            <section id="international-transfers">
              <h2>7. International Data Transfers</h2>
              <p>Our primary operations and data storage are based in India. However, some of our third-party service providers (such as Google Analytics, cloud hosting, and email services) may process or store data in the European Union, United States, or other jurisdictions.</p>
              <p>Where personal data is transferred outside India or the EEA, we ensure appropriate safeguards are in place, including:</p>
              <ul>
                <li><strong>Standard Contractual Clauses (SCCs):</strong> EU-approved contractual protections legally binding the receiving party to data protection standards equivalent to those in the EU</li>
                <li><strong>Adequacy decisions:</strong> Transfers to countries recognised by the European Commission as providing adequate data protection</li>
                <li><strong>Certification frameworks:</strong> Processors certified under ISO 27001 or SOC 2 Type II</li>
                <li><strong>Binding corporate rules:</strong> For transfers within the same corporate group of processors</li>
              </ul>
              <p>You may request a copy of the specific safeguards applicable to any cross-border transfer by contacting us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
            </section>

            <section id="cookies">
              <h2>8. Cookies &amp; Tracking Technologies</h2>
              <p>We use cookies and similar tracking technologies on our website to provide functionality, security, and an improved experience. For a comprehensive breakdown of every cookie we use, its purpose, provider, duration, and how to control it, please read our dedicated <Link to="/cookie-policy"><strong>Cookie Policy</strong></Link>.</p>
              <h3>Summary of Cookie Categories We Use:</h3>
              <ul>
                <li><strong>Strictly Necessary Cookies:</strong> Required for core site functionality including navigation, security, and your cookie consent preferences. These cannot be disabled.</li>
                <li><strong>Analytics &amp; Performance Cookies:</strong> Help us understand how visitors interact with our website through aggregate, anonymised data. These are optional and require your consent before activation.</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences to personalise your experience. These are optional.</li>
              </ul>
              <p>We do <strong>not</strong> use advertising, behavioural tracking, or social media retargeting cookies on our website. Your browsing behaviour on northbyte.in is never used to target you with advertisements on other websites.</p>
              <p>You can manage, withdraw, or update your cookie preferences at any time by clicking &ldquo;Cookie Preferences&rdquo; in the footer of our website.</p>
            </section>

            <section id="data-retention">
              <h2>9. Data Retention Periods</h2>
              <p>We retain your personal data only for as long as necessary to fulfil the purpose for which it was collected, to comply with legal obligations, and to resolve any disputes. Our specific retention periods are as follows:</p>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead><tr><th>Data Category</th><th>Retention Period</th><th>Reason</th></tr></thead>
                  <tbody>
                    <tr><td>Website enquiry / contact form data (no project initiated)</td><td>24 months from last interaction</td><td>Legitimate interest &mdash; responding to follow-up enquiries</td></tr>
                    <tr><td>Active client project data &amp; communications</td><td>Duration of project + 5 years</td><td>Legal obligation &mdash; contractual records, accounting, audit</td></tr>
                    <tr><td>Invoices, payment records, and financial transactions</td><td>7 years</td><td>Legal obligation &mdash; Indian Income Tax Act, Companies Act 2013</td></tr>
                    <tr><td>Post-delivery project support communications</td><td>2 years after project closure</td><td>Legitimate interest &mdash; resolving disputes, supporting clients</td></tr>
                    <tr><td>Analytics data (Google Analytics, IP anonymised)</td><td>14 months (GA default)</td><td>Legitimate interest &mdash; improving website experience</td></tr>
                    <tr><td>Server access logs &amp; security logs</td><td>90 days</td><td>Security and fraud detection</td></tr>
                    <tr><td>Cookie consent records</td><td>1 year from consent</td><td>Legal obligation &mdash; demonstrating compliance</td></tr>
                    <tr><td>Job applicant CVs (unsuccessful applications)</td><td>6 months from rejection</td><td>Legitimate interest &mdash; future suitable openings</td></tr>
                    <tr><td>Dronacharya AI institutional data</td><td>Duration of licence + 2 years</td><td>Contractual obligation &mdash; Software Licence Agreement</td></tr>
                    <tr><td>Data subject rights requests and responses</td><td>3 years</td><td>Legal obligation &mdash; demonstrating compliance</td></tr>
                  </tbody>
                </table>
              </div>
              <p>At the expiry of the relevant retention period, personal data is securely deleted, destroyed, or irreversibly anonymised so it can no longer be attributed to any identifiable individual. We use automated data lifecycle management processes to enforce these retention schedules consistently.</p>
            </section>

            <section id="your-rights">
              <h2>10. Your Privacy Rights</h2>
              <p>Depending on your jurisdiction and the legal basis under which we process your data, you have the following rights. We will respond to all valid requests within <strong>30 calendar days</strong> (extendable by a further 60 days for complex requests, with prior notice to you).</p>
              <div className="rights-grid">
                {[
                  ['&#128269;', 'Right to Access (Subject Access Request)', 'You have the right to request a copy of all personal data we hold about you, along with information about how it is used, stored, and shared. We will provide this in a clear, structured format free of charge.'],
                  ['&#9999;&#65039;', 'Right to Rectification', 'If any personal data we hold is inaccurate, incomplete, or outdated, you have the right to request immediate correction. We will rectify the data and, where feasible, notify any third parties to whom the incorrect data was disclosed.'],
                  ['&#128465;&#65039;', 'Right to Erasure (Right to be Forgotten)', 'You may request the deletion of your personal data where it is no longer necessary for the purpose it was collected, where you withdraw consent, or where processing is unlawful. We will delete data unless we have a compelling legal obligation to retain it.'],
                  ['&#9208;&#65039;', 'Right to Restriction of Processing', 'You may request that we temporarily pause processing of your data &mdash; for example, while you contest its accuracy or while we assess an objection. During restriction, we will only store the data, not actively process it.'],
                  ['&#128230;', 'Right to Data Portability', 'For data processed on the basis of consent or contract via automated means, you may request your data in a structured, machine-readable format (such as JSON or CSV) for transfer to another controller.'],
                  ['&#128683;', 'Right to Object', 'You may object to processing of your data based on our legitimate interests. We will stop the processing unless we can demonstrate compelling legitimate grounds that override your interests or where processing is for legal claims.'],
                  ['&#129302;', 'Rights re: Automated Decision-Making', 'You have the right not to be subject to purely automated decisions (with no human involvement) that produce legal or similarly significant effects. We do not currently make any such automated decisions.'],
                  ['&#8617;&#65039;', 'Right to Withdraw Consent', 'Where processing is based on consent, you may withdraw that consent at any time by contacting us or using the cookie consent manager in our website footer. Withdrawal does not affect the lawfulness of prior processing.'],
                  ['&#128737;&#65039;', 'Right to Lodge a Complaint', 'If you believe your privacy rights have been violated, you have the right to lodge a complaint with a supervisory authority. In India: MeitY. In the EU/UK: your national Data Protection Authority (DPA).'],
                  ['&#128276;', 'Right to Breach Notification', 'If a personal data breach is likely to result in a high risk to your rights and freedoms, we will notify you without undue delay and within 72 hours of becoming aware of the breach.'],
                ].map(([icon, title, desc]) => (
                  <div key={title} className="right-card">
                    <span className="right-icon">{icon}</span>
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
              <div className="legal-card" style={{ marginTop: '1.5rem' }}>
                <strong>&#128231; How to Exercise Your Rights:</strong> Submit your request in writing to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with the subject line &ldquo;Data Subject Rights Request&rdquo;. Please include your full name, email address, and a clear description of your request. We may ask for identity verification. All requests are free of charge unless manifestly unfounded or excessive.
              </div>
            </section>

            <section id="data-security">
              <h2>11. Data Security Measures</h2>
              <p>We take the security of your personal data extremely seriously and implement multiple layers of protection across technical, organisational, and physical dimensions.</p>

              <h3>11.1 Technical Safeguards</h3>
              <ul>
                <li><strong>TLS/SSL encryption:</strong> All data transmitted between your browser and our website is encrypted using TLS 1.2+ with HTTPS enforced across all pages</li>
                <li><strong>Data-at-rest encryption:</strong> Sensitive stored data is encrypted using AES-256 or equivalent standards on our hosting infrastructure</li>
                <li><strong>Secure authentication:</strong> All internal systems require strong passwords and multi-factor authentication (MFA) where available</li>
                <li><strong>Access control:</strong> Personal data is accessible only to authorised team members on a strict need-to-know basis. Access privileges are reviewed quarterly and revoked upon departure of any team member.</li>
                <li><strong>Vulnerability management:</strong> We regularly update software dependencies, apply security patches, and conduct periodic security reviews</li>
                <li><strong>Firewall &amp; DDoS protection:</strong> Our infrastructure uses web application firewalls (WAF) and DDoS mitigation services</li>
                <li><strong>Secure data deletion:</strong> When data is no longer required, it is securely deleted using industry-standard methods that prevent recovery</li>
              </ul>

              <h3>11.2 Organisational Safeguards</h3>
              <ul>
                <li>Privacy-by-design principles are applied to all new projects and features</li>
                <li>All team members with access to personal data are bound by confidentiality obligations under their engagement terms</li>
                <li>We maintain an internal data inventory and processing register</li>
                <li>A documented incident response procedure is in place for identifying, containing, and reporting data breaches</li>
                <li>Privacy impact assessments (PIAs) are conducted before introducing new data processing activities</li>
              </ul>

              <h3>11.3 Breach Notification</h3>
              <p>In the unlikely event of a personal data breach posing a risk to your rights and freedoms:</p>
              <ul>
                <li>We will notify you <strong>without undue delay</strong> and within 72 hours of becoming aware of the breach</li>
                <li>The notification will include the nature of the breach, categories of data affected, likely consequences, and the steps we are taking</li>
                <li>We will cooperate fully with any regulatory investigation</li>
                <li>We will take immediate remedial action to contain the breach and prevent recurrence</li>
              </ul>
            </section>

            <section id="children">
              <h2>12. Children's Privacy</h2>
              <p>The northbyte.in website and our direct service enquiry process are intended for individuals aged <strong>18 years and over</strong>. We do not knowingly collect, process, or store personal data from children under 13 years of age.</p>
              <p>In the context of <strong>Dronacharya AI</strong>, our EdTech platform may be used by students who are minors. In this context, the educational institution acts as the data controller for student data, and Northbyte acts as a data processor under the terms of the Software Licence Agreement. Institutions are contractually required to comply with applicable child data protection laws, including obtaining necessary parental or guardian consents before onboarding students.</p>
              <p>If you are a parent or guardian and believe your child has provided personal data to us without your consent, please contact us immediately at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will investigate promptly and delete such data within 48 hours of confirmed discovery.</p>
            </section>

            <section id="third-party-links">
              <h2>13. Third-Party Websites &amp; Links</h2>
              <p>Our website may contain links to third-party websites, social media platforms, or external services. Northbyte Software Systems has <strong>no control over and accepts no responsibility</strong> for the privacy practices, content, or security of any third-party website.</p>
              <p>When you click an external link and leave northbyte.in, you are subject to the privacy policy and terms of service of that third-party site. We encourage you to review those policies carefully before sharing any personal information.</p>
              <p>The presence of a link to a third-party website does not imply endorsement, recommendation, or any business relationship unless explicitly stated.</p>
            </section>

            <section id="automated-decisions">
              <h2>14. Automated Decision-Making &amp; Profiling</h2>
              <p>Northbyte Software Systems does <strong>not</strong> use fully automated decision-making processes &mdash; including profiling &mdash; that produce legal or similarly significant effects on individuals.</p>
              <p>All decisions that affect you &mdash; such as whether to accept a project enquiry, determine project pricing, or manage a service relationship &mdash; involve meaningful human involvement and judgment by our team.</p>
              <p>Analytics data we collect is used only in aggregate and anonymised form to understand overall website performance trends. It is never used to make individual-level automated decisions about any person.</p>
            </section>

            <section id="grievance">
              <h2>15. Grievance Officer &amp; Complaints</h2>
              <p>In accordance with the Information Technology Act 2000 and the Information Technology (Intermediaries Guidelines and Digital Media Ethics Code) Rules, 2021, Northbyte Software Systems designates the following Grievance Officer to handle data protection complaints and data subject rights requests:</p>
              <div className="legal-card">
                <strong>Grievance Officer &mdash; Northbyte Software Systems</strong><br />
                Department: Privacy &amp; Compliance Team<br />
                Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
                Subject Line: &ldquo;Privacy Grievance / Data Protection Request&rdquo;<br />
                Response Time: Within 30 days of receipt<br />
                Escalation (unresolved complaints): Within 30 additional days
              </div>
              <p>If your grievance is not resolved satisfactorily within 60 days, or if you are an EU/UK data subject, you have the right to escalate to a competent supervisory authority:</p>
              <ul>
                <li><strong>India:</strong> Ministry of Electronics and Information Technology (MeitY) &mdash; <a href="https://meity.gov.in" target="_blank" rel="noopener noreferrer">meity.gov.in</a></li>
                <li><strong>European Union:</strong> Your national Data Protection Authority &mdash; <a href="https://edpb.europa.eu" target="_blank" rel="noopener noreferrer">edpb.europa.eu</a></li>
                <li><strong>United Kingdom:</strong> Information Commissioner's Office (ICO) &mdash; <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a></li>
              </ul>
            </section>

            <section id="changes">
              <h2>16. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our data practices, legal requirements, or the introduction of new services. All changes are effective upon posting the revised policy on this page.</p>
              <p>When we make material changes, we will:</p>
              <ul>
                <li>Update the &ldquo;Last Updated&rdquo; date prominently at the top of this page</li>
                <li>Display a notice on our website homepage for at least 30 days following a significant update</li>
                <li>Where we have your email address and the change materially affects your rights, send you a direct email notification</li>
                <li>For changes requiring fresh consent, present you with an updated consent request before proceeding</li>
              </ul>
              <p>Your continued use of our website or services after the effective date of a revised policy constitutes your acknowledgement and acceptance of those changes. The version history of this Privacy Policy is available on request by emailing <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
            </section>

            <section id="contact-us">
              <h2>17. Contact Us</h2>
              <p>We welcome your questions, feedback, and requests regarding this Privacy Policy. We aim to respond to all privacy enquiries within <strong>72 business hours</strong>, and to formal data subject rights requests within <strong>30 calendar days</strong>.</p>
              <div className="legal-card">
                <strong>{COMPANY}</strong><br />
                Privacy &amp; Data Protection Team<br />
                {ADDRESS}<br />
                &#128231; <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
                &#128222; <a href="tel:+917406335619">{PHONE}</a><br />
                &#8987; Monday&ndash;Saturday, 9:00 AM &ndash; 8:00 PM IST<br />
                &#127760; <a href={SITE} target="_blank" rel="noopener noreferrer">{SITE}</a>
              </div>
              <p>When contacting us about a privacy matter, please include your full name, the email address you used when interacting with us, and a clear description of your request or concern. This helps us locate your data quickly and respond accurately.</p>
            </section>

          </div>

          <div className="legal-footer-nav">
            <Link to="/terms-and-conditions" className="legal-nav-link">Terms &amp; Conditions &#8594;</Link>
            <Link to="/cookie-policy" className="legal-nav-link">Cookie Policy &#8594;</Link>
            <Link to="/" className="legal-nav-link">&#8592; Back to Home</Link>
          </div>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(217,224,236,0.9)', color: 'var(--muted)', fontSize: '0.85rem' }}>
        &copy; {new Date().getFullYear()} Northbyte Software Systems. All rights reserved. |{' '}
        <Link to="/privacy-policy" style={{ color: 'var(--cobalt)' }}>Privacy Policy</Link> &middot;{' '}
        <Link to="/terms-and-conditions" style={{ color: 'var(--cobalt)' }}>Terms</Link> &middot;{' '}
        <Link to="/cookie-policy" style={{ color: 'var(--cobalt)' }}>Cookie Policy</Link> &middot;{' '}
        <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('openCookiePreferences'))} className="footer-cookie-btn" style={{ color: 'var(--cobalt)' }}>Cookie Preferences</button>
      </footer>
    </>
  )
}
