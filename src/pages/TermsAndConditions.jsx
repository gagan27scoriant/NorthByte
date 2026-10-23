import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SITE = 'https://northbyte.in'
const COMPANY = 'Northbyte Software Systems'
const EMAIL = 'hello@northbyte.in'
const PHONE = '+91 7406335619'
const ADDRESS = 'Bengaluru, Karnataka 560001, India'
const LAST_UPDATED = 'October 22, 2025'
const EFFECTIVE_DATE = 'October 22, 2025'

export default function TermsAndConditions() {
  useEffect(() => {
    document.title = 'Terms and Conditions | Northbyte Software Systems'
    const setMeta = (name, content, prop = false) => {
      const attr = prop ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el) }
      el.setAttribute('content', content)
    }
    setMeta('description', "Read Northbyte's comprehensive Terms and Conditions governing the use of our software development, academic project engineering, and EdTech services. Clear, fair, and transparent.")
    setMeta('robots', 'index, follow')
    setMeta('author', COMPANY)
    setMeta('og:title', 'Terms and Conditions - Northbyte Software Systems', true)
    setMeta('og:description', 'Terms governing use of Northbyte services: academic projects, web development, and Dronacharya AI.', true)
    setMeta('og:url', `${SITE}/terms-and-conditions`, true)
    setMeta('og:type', 'website', true)
    setMeta('og:site_name', COMPANY, true)
    setMeta('twitter:card', 'summary')
    setMeta('twitter:title', 'Terms and Conditions - Northbyte Software Systems')
    setMeta('twitter:description', 'Terms governing use of Northbyte services.')
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = `${SITE}/terms-and-conditions`
    let ld = document.getElementById('ld-terms')
    if (!ld) { ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.id = 'ld-terms'; document.head.appendChild(ld) }
    ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Terms and Conditions', url: `${SITE}/terms-and-conditions`, publisher: { '@type': 'Organization', name: COMPANY, url: SITE, email: EMAIL, address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', addressCountry: 'IN' } }, dateModified: '2025-10-22', inLanguage: 'en-IN', breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE }, { '@type': 'ListItem', position: 2, name: 'Terms and Conditions', item: `${SITE}/terms-and-conditions` }] } })
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
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#tc-logo-g)" />
                <path d="M2 17L12 22L22 17" stroke="url(#tc-logo-g)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="url(#tc-logo-g)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs><linearGradient id="tc-logo-g" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA" /><stop offset="1" stopColor="#60A5FA" /></linearGradient></defs>
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
            <h1>Terms and Conditions</h1>
            <p className="legal-lead">
              These Terms and Conditions ("Terms") constitute a legally binding agreement between you and Northbyte Software Systems governing your access to and use of our website and services. By accessing our website, submitting an enquiry, or engaging our services, you confirm that you have read, understood, and agree to be bound by these Terms. Please read them carefully before proceeding.
            </p>
            <div className="legal-meta">
              <span>&#128197; Effective Date: <strong>{EFFECTIVE_DATE}</strong></span>
              <span>&#128260; Last Updated: <strong>{LAST_UPDATED}</strong></span>
              <span>&#128205; Bengaluru, Karnataka, India</span>
              <span>&#9878;&#65039; Governed by Indian Law</span>
            </div>
          </div>

          <div className="legal-card" style={{ marginBottom: '2rem', background: 'rgba(252, 196, 25, 0.06)', borderColor: 'rgba(252, 196, 25, 0.3)' }}>
            <strong>&#9888;&#65039; Important Notice:</strong> These Terms apply to all visitors, clients, students, institutions, and organisations interacting with Northbyte Software Systems' website or services. If you do not agree with any part of these Terms, you must not use our website or engage our services. For any questions about these Terms, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </div>

          <nav className="legal-toc" aria-label="Table of contents">
            <h2>Contents</h2>
            <ol>
              <li><a href="#definitions">Definitions</a></li>
              <li><a href="#acceptance">Acceptance of Terms</a></li>
              <li><a href="#services">Services We Provide</a></li>
              <li><a href="#project-terms">Project Engagement Terms</a></li>
              <li><a href="#payment">Payment &amp; Refund Policy</a></li>
              <li><a href="#ip">Intellectual Property Rights</a></li>
              <li><a href="#client-obligations">Client Obligations &amp; Acceptable Use</a></li>
              <li><a href="#warranties">Warranties &amp; Disclaimers</a></li>
              <li><a href="#liability">Limitation of Liability</a></li>
              <li><a href="#indemnification">Indemnification</a></li>
              <li><a href="#confidentiality">Confidentiality &amp; Non-Disclosure</a></li>
              <li><a href="#termination">Termination</a></li>
              <li><a href="#force-majeure">Force Majeure</a></li>
              <li><a href="#governing-law">Governing Law &amp; Dispute Resolution</a></li>
              <li><a href="#general">General Provisions</a></li>
              <li><a href="#contact">Contact</a></li>
            </ol>
          </nav>

          <div className="legal-body">

            <section id="definitions">
              <h2>1. Definitions</h2>
              <p>In these Terms, the following definitions apply:</p>
              <ul>
                <li><strong>"Agreement"</strong> means these Terms and Conditions, together with any Project Proposal, Statement of Work, or written agreement between the parties</li>
                <li><strong>"Client"</strong> or <strong>"You"</strong> means any individual, student, institution, or organisation that engages or interacts with Northbyte Software Systems</li>
                <li><strong>"Deliverables"</strong> means the specific outputs agreed to be produced by Northbyte under a Project Proposal, including source code, documentation, design assets, and reports</li>
                <li><strong>"Northbyte IP"</strong> means all pre-existing intellectual property owned by Northbyte, including proprietary code libraries, frameworks, templates, methodologies, and tools</li>
                <li><strong>"Project Proposal"</strong> means a written or emailed document specifying the scope, timeline, cost, and deliverables of a specific engagement</li>
                <li><strong>"Services"</strong> means all engineering, development, consulting, and EdTech services offered by Northbyte Software Systems as described in Section 3</li>
                <li><strong>"Confidential Information"</strong> means any non-public, proprietary, or commercially sensitive information disclosed by either party in connection with an engagement</li>
                <li><strong>"Working Days"</strong> means Monday through Saturday, excluding public holidays in Karnataka, India</li>
              </ul>
            </section>

            <section id="acceptance">
              <h2>2. Acceptance of Terms</h2>
              <p>By accessing <a href={SITE} target="_blank" rel="noopener noreferrer">{SITE}</a>, submitting an enquiry form, contacting us via any channel, or engaging Northbyte Software Systems for any service, you confirm that:</p>
              <ul>
                <li>You have read, understood, and agree to be bound by these Terms and Conditions in their entirety</li>
                <li>You have read and accept our <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/cookie-policy">Cookie Policy</Link></li>
                <li>If you are acting on behalf of an organisation, institution, or company, you have the authority to bind that entity to these Terms</li>
                <li>You are at least 18 years of age, or are accessing the website under the supervision of a parent or legal guardian who agrees to these Terms</li>
                <li>The information you provide to us is accurate, complete, and up-to-date</li>
              </ul>
              <p>If you do not agree to these Terms, you must not use our website or engage our services. We reserve the right to update these Terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised Terms. We will notify clients of material changes via email or website notice.</p>
            </section>

            <section id="services">
              <h2>3. Services We Provide</h2>
              <p>Northbyte Software Systems offers the following core services:</p>

              <h3>3.1 Academic Engineering Services</h3>
              <p>We provide engineering assistance for final-year capstone projects at undergraduate and postgraduate level (BCA, MCA, B.Tech, M.Tech, MBA, BSc, MSc, and equivalent). Our academic engineering services include:</p>
              <ul>
                <li>Custom project development in Generative AI, Deep Learning, Machine Learning, Computer Vision, Natural Language Processing, Data Science, Full-Stack Web Development, Mobile Applications, Blockchain, and IoT systems</li>
                <li>IEEE-standard project documentation (synopsis, report, presentation, and system design)</li>
                <li>Viva preparation coaching and technical Q&amp;A support</li>
                <li>Code explanation and walkthrough sessions</li>
                <li>Research paper identification and literature review guidance</li>
              </ul>

              <h3>3.2 Digital Platform Development</h3>
              <p>We design and develop custom digital solutions for businesses and organisations, including:</p>
              <ul>
                <li>Corporate websites, landing pages, and marketing sites with SEO optimisation</li>
                <li>Web applications including booking systems, e-commerce platforms, and customer portals</li>
                <li>Healthcare and clinic management systems</li>
                <li>Enterprise resource planning (ERP) and business management platforms</li>
                <li>API development and system integrations</li>
                <li>Performance optimisation, security audits, and maintenance of existing platforms</li>
              </ul>

              <h3>3.3 Dronacharya AI &mdash; EdTech Platform</h3>
              <p>Dronacharya AI is our proprietary AI-powered Learning Management System (LMS) for educational institutions. Services include:</p>
              <ul>
                <li>Multi-campus LMS deployment with role-based access for administrators, teachers, students, and parents</li>
                <li>AI-powered student performance analytics and personalised learning pathways</li>
                <li>Automated assessment, attendance tracking, and academic reporting tools</li>
                <li>Institutional onboarding, training, and ongoing technical support</li>
                <li>White-label branding and custom feature development</li>
              </ul>
              <p>Service scope, timelines, and deliverables for each engagement are defined in individual Project Proposals agreed upon in writing prior to project commencement.</p>
            </section>

            <section id="project-terms">
              <h2>4. Project Engagement Terms</h2>

              <h3>4.1 Project Confirmation</h3>
              <p>A project is formally confirmed only upon written agreement (via email, signed proposal, or WhatsApp confirmation from an authorised representative of Northbyte) on scope, timeline, cost, and payment terms. Verbal commitments, informal conversations, or expressed interest do not constitute a binding project agreement. Work will not commence prior to agreement on terms and receipt of the agreed advance payment.</p>

              <h3>4.2 Project Proposal &amp; Statement of Work</h3>
              <p>Prior to commencement, Northbyte will provide a Project Proposal or Statement of Work (SOW) that includes:</p>
              <ul>
                <li>A clear description of deliverables, features, and technical specifications</li>
                <li>Estimated timeline with key milestone dates</li>
                <li>Total cost and payment schedule</li>
                <li>Any assumptions, exclusions, or dependencies</li>
                <li>Revision and feedback procedures</li>
              </ul>
              <p>The client is required to review and confirm the proposal in writing within the specified validity period (typically 7 days). Proposals that are not confirmed within the validity period may be subject to revised pricing.</p>

              <h3>4.3 Scope &amp; Change Requests</h3>
              <p>The agreed Project Proposal defines the full scope of work. Any changes to project scope, features, or deliverables after written confirmation (&ldquo;Change Requests&rdquo;) must be:</p>
              <ul>
                <li>Submitted in writing to <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li>Assessed by Northbyte for technical feasibility, timeline impact, and cost implications</li>
                <li>Formally approved by both parties in writing before implementation</li>
              </ul>
              <p>Approved Change Requests may result in revised timelines, additional charges, or both. Northbyte reserves the right to decline Change Requests that are technically infeasible, incompatible with the agreed architecture, or materially alter the original project scope.</p>

              <h3>4.4 Client Cooperation &amp; Responsiveness</h3>
              <p>Timely project delivery depends on prompt client cooperation. The client agrees to:</p>
              <ul>
                <li>Provide all required information, assets, credentials, and approvals within agreed timelines</li>
                <li>Respond to queries from Northbyte within 3 Working Days</li>
                <li>Participate in milestone reviews and provide actionable feedback within agreed deadlines</li>
                <li>Designate a primary point of contact for project communications</li>
              </ul>
              <p>Delays caused by the client &mdash; including delayed approvals, unresponsiveness, or changes in requirements &mdash; will extend the project timeline accordingly and do not entitle the client to a refund or penalty against Northbyte. Northbyte will document and communicate any client-caused delays in writing.</p>

              <h3>4.5 Delivery &amp; Handover</h3>
              <p>Upon project completion, Northbyte will:</p>
              <ul>
                <li>Deliver all agreed source code, documentation, assets, and deliverables via private repository link, email archive, or physical transfer as mutually agreed</li>
                <li>Provide a handover or demo session to walk the client through the delivered work</li>
                <li>Provide deployment instructions or assist with deployment as specified in the Project Proposal</li>
              </ul>
              <p>Final delivery is subject to receipt of the remaining balance payment. Northbyte reserves the right to withhold final deliverables until all outstanding payments are cleared.</p>

              <h3>4.6 Post-Delivery Support</h3>
              <p>Northbyte provides <strong>14 calendar days of post-delivery bug-fix support</strong> at no additional charge for defects directly attributable to the agreed project scope. The following are not covered under free post-delivery support:</p>
              <ul>
                <li>Feature additions or enhancements not included in the original scope</li>
                <li>Issues arising from third-party APIs, services, or libraries outside Northbyte's control</li>
                <li>Errors caused by client modifications to the delivered code or configuration</li>
                <li>Deployment issues caused by the client's hosting environment</li>
                <li>Changes required due to evolving third-party platform requirements (e.g., app store policy changes)</li>
              </ul>
              <p>Extended support beyond the 14-day period may be arranged under a separate Support &amp; Maintenance Agreement.</p>
            </section>

            <section id="payment">
              <h2>5. Payment &amp; Refund Policy</h2>

              <h3>5.1 Payment Structure</h3>
              <p>Unless otherwise specified in the Project Proposal, Northbyte's standard payment structure is:</p>
              <ul>
                <li><strong>Advance payment:</strong> 40&ndash;60% of the total project cost is required before development commences. No work will begin prior to receipt of the advance.</li>
                <li><strong>Milestone payments:</strong> For larger projects, additional milestone payments may be specified in the Project Proposal and are due upon achievement of agreed milestones</li>
                <li><strong>Final payment:</strong> The remaining balance is due upon completion of the project and prior to final delivery of all deliverables</li>
              </ul>

              <h3>5.2 Payment Methods &amp; Currency</h3>
              <p>We accept the following payment methods:</p>
              <ul>
                <li>UPI (GPay, PhonePe, Paytm, BHIM, and other UPI apps)</li>
                <li>Bank transfer via NEFT, IMPS, or RTGS</li>
                <li>Other mutually agreed payment methods confirmed in writing</li>
              </ul>
              <p>All payments must be in Indian Rupees (INR) unless otherwise agreed in writing for international clients. All bank charges, transfer fees, and currency conversion costs are borne by the client.</p>

              <h3>5.3 Invoicing</h3>
              <p>Northbyte will issue a GST-compliant invoice (where applicable) for all payments received. Invoices must be settled within <strong>5 Working Days</strong> of issuance unless alternative payment terms are specified in the Project Proposal. Invoices for advance payments are issued upon project confirmation.</p>

              <h3>5.4 Late Payment</h3>
              <p>In the event of non-payment of any invoice by the due date:</p>
              <ul>
                <li>Northbyte reserves the right to pause or suspend all project work immediately, without liability for any resulting project delays</li>
                <li>A late payment fee of <strong>2% per month</strong> (or part thereof) on the outstanding amount may be applied from the due date until full payment is received</li>
                <li>Northbyte reserves the right to terminate the engagement and withhold all undelivered work product if payment remains outstanding for more than 14 days beyond the due date</li>
                <li>Northbyte reserves the right to pursue outstanding amounts through legal proceedings and recover associated legal costs from the defaulting client</li>
              </ul>

              <h3>5.5 Refund Policy</h3>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead><tr><th>Scenario</th><th>Refund Eligibility</th><th>Timeline</th></tr></thead>
                  <tbody>
                    <tr><td>Client cancels before any work has commenced</td><td>Full advance refund minus payment processing fees (if any)</td><td>Within 14 Working Days</td></tr>
                    <tr><td>Client cancels after work has commenced but before delivery</td><td>Partial refund based on an assessment of work completed and costs incurred. Northbyte will provide a written breakdown.</td><td>Within 21 Working Days of assessment</td></tr>
                    <tr><td>Northbyte is unable to deliver the agreed scope through no fault of the client</td><td>Full refund of all amounts paid</td><td>Within 14 Working Days</td></tr>
                    <tr><td>Project delivered and accepted by the client (explicitly or by passage of 7 days without written objection)</td><td>No refund</td><td>N/A</td></tr>
                    <tr><td>Delays or cancellation caused by client non-cooperation, unresponsiveness, or change of requirements</td><td>No refund; payments for work completed are retained by Northbyte</td><td>N/A</td></tr>
                    <tr><td>Disputes regarding quality of delivered work</td><td>Northbyte will first attempt remediation. If unresolved, a partial refund may be considered at Northbyte's reasonable discretion.</td><td>As mutually agreed</td></tr>
                  </tbody>
                </table>
              </div>
              <p>All refund requests must be submitted in writing to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> within <strong>7 calendar days</strong> of the triggering event, with a clear explanation of the reason for the request.</p>

              <h3>5.6 Taxes</h3>
              <p>All prices quoted by Northbyte are exclusive of applicable taxes including Goods and Services Tax (GST) unless explicitly stated otherwise. GST (currently 18% for IT services in India) will be added to the final invoice as applicable. International clients are responsible for any taxes, duties, or levies applicable in their own jurisdiction.</p>
            </section>

            <section id="ip">
              <h2>6. Intellectual Property Rights</h2>

              <h3>6.1 Client Ownership of Custom Deliverables</h3>
              <p>Upon receipt of full and final payment, the client receives full, exclusive ownership of all custom source code, design assets, database schemas, and documentation created exclusively and specifically for their project. This transfer of ownership is automatic upon full payment settlement.</p>

              <h3>6.2 Northbyte Retained Rights</h3>
              <p>Notwithstanding the above, Northbyte retains full ownership of:</p>
              <ul>
                <li>All <strong>Northbyte IP</strong>: pre-existing code libraries, frameworks, boilerplates, templates, tools, methodologies, and internal systems that were created by Northbyte independently of the client engagement, regardless of whether they are incorporated into the delivered project</li>
                <li>All general software development know-how, techniques, concepts, and ideas acquired during the project (that do not constitute client-specific Confidential Information)</li>
                <li>Any open-source components incorporated into the project, which remain subject to their respective open-source licences</li>
              </ul>
              <p>A <strong>royalty-free, non-exclusive, perpetual licence</strong> to use Northbyte IP as incorporated into the delivered project is granted to the client as part of the engagement. This licence does not permit the client to extract, resell, or sublicense Northbyte IP independently of the delivered project.</p>

              <h3>6.3 Portfolio Rights</h3>
              <p>Northbyte reserves the right to reference completed projects in its portfolio, website, and marketing materials unless the client explicitly requests confidentiality in writing prior to project commencement. Portfolio references will be general in nature (e.g., project type, technology stack, industry) and will not disclose any client Confidential Information.</p>

              <h3>6.4 Academic Projects &mdash; Important Disclaimer</h3>
              <p>For college and university projects, the client (student) accepts <strong>full and sole responsibility</strong> for ensuring that the project and its submission comply with their institution's academic integrity policies, honour codes, and examination regulations. Northbyte provides professional engineering assistance and does not guarantee compliance with any specific institution's policies. The submission and representation of work to educational institutions is entirely the client's responsibility. Northbyte shall not be liable for any academic, disciplinary, or legal consequences arising from the client's submission of delivered work.</p>

              <h3>6.5 Dronacharya AI Licensing</h3>
              <p>Dronacharya AI is a proprietary product of Northbyte Software Systems. Institutional deployment of Dronacharya AI is governed by a separate Software Licence Agreement (SLA) signed between Northbyte and the institution. The SLA governs the scope of use, user limits, customisation rights, data ownership, support obligations, and renewal terms. Nothing in these general Terms and Conditions supersedes or limits the terms of a signed Dronacharya AI SLA.</p>

              <h3>6.6 Website Content</h3>
              <p>All content on northbyte.in &mdash; including text, graphics, logos, icons, images, code samples, and page designs &mdash; is the exclusive intellectual property of Northbyte Software Systems and is protected by Indian and international copyright law. You may not reproduce, distribute, modify, or commercially exploit any content from this website without prior written consent from Northbyte.</p>
            </section>

            <section id="client-obligations">
              <h2>7. Client Obligations &amp; Acceptable Use</h2>
              <p>By engaging our services or using our website, you agree to:</p>
              <ul>
                <li>Provide accurate, complete, and timely information required for project execution and update us promptly if any information changes</li>
                <li>Use delivered code, systems, and materials only for lawful purposes and in accordance with applicable laws</li>
                <li>Not use delivered code or systems for any illegal, fraudulent, defamatory, obscene, or otherwise harmful purposes</li>
                <li>Not reverse-engineer, decompile, disassemble, or attempt to extract Northbyte's proprietary systems, code, or algorithms without prior written permission</li>
                <li>Not resell, sublicense, transfer, or distribute Northbyte's proprietary IP to any third party without Northbyte's explicit written consent</li>
                <li>Respect all applicable laws, including copyright, data protection, consumer protection, and digital commerce regulations</li>
                <li>Not attempt to gain unauthorised access to our systems, servers, or databases</li>
                <li>Not upload, transmit, or share any malicious code, viruses, or harmful content through our communication channels or systems</li>
                <li>Not use our website in any manner that could damage, disable, overburden, or impair our servers or networks</li>
                <li>Not engage in any conduct that harasses, intimidates, or threatens Northbyte team members</li>
              </ul>
              <p>Northbyte reserves the right to immediately terminate any engagement and pursue appropriate legal remedies if the client breaches any of these obligations.</p>
            </section>

            <section id="warranties">
              <h2>8. Warranties &amp; Disclaimers</h2>

              <h3>8.1 Northbyte's Warranty</h3>
              <p>Northbyte warrants that:</p>
              <ul>
                <li>Services will be delivered with reasonable professional skill, care, and diligence consistent with industry standards</li>
                <li>Deliverables will substantially conform to the specifications agreed in the Project Proposal</li>
                <li>To the best of Northbyte's knowledge, custom-developed code will not infringe the intellectual property rights of any third party</li>
                <li>We will maintain appropriate professional indemnity and liability arrangements for our services</li>
              </ul>

              <h3>8.2 Disclaimers</h3>
              <p>To the maximum extent permitted by applicable law, Northbyte expressly disclaims all other warranties, including:</p>
              <ul>
                <li><strong>Academic outcomes:</strong> We do not warrant that academic projects will achieve any specific grade, marks, or pass/fail outcome. Academic performance depends on many factors outside our control, including presentation quality, examiner assessment, and institutional policies.</li>
                <li><strong>Business outcomes:</strong> We do not guarantee specific business results from websites or platforms we build &mdash; including traffic volumes, search engine rankings, lead generation, conversion rates, or revenue. These depend on market factors, competitive conditions, and marketing activities outside our control.</li>
                <li><strong>Third-party services:</strong> APIs, cloud services, open-source libraries, and third-party integrations incorporated into projects are subject to their own terms, availability, and may change or cease to function without notice. Northbyte is not liable for changes, outages, or discontinuation of third-party services.</li>
                <li><strong>Website availability:</strong> Our website (northbyte.in) is provided &ldquo;as is&rdquo; and Northbyte does not warrant that it will be continuously available, error-free, or free of viruses or other harmful components. We reserve the right to suspend, modify, or discontinue the website at any time.</li>
                <li><strong>Accuracy of information:</strong> While we strive to keep information on our website accurate and current, we do not warrant its completeness, timeliness, or fitness for any particular purpose.</li>
              </ul>
            </section>

            <section id="liability">
              <h2>9. Limitation of Liability</h2>
              <p>To the maximum extent permitted by applicable law:</p>
              <ul>
                <li>Northbyte's <strong>total cumulative liability</strong> to any client for any claim arising out of or related to a specific service engagement shall not exceed the <strong>total fees actually paid</strong> by that client to Northbyte for that specific service engagement in the 12 months preceding the claim</li>
                <li>Northbyte shall not be liable for any <strong>indirect, incidental, consequential, special, exemplary, or punitive damages</strong> whatsoever, including but not limited to loss of profits, loss of business, loss of revenue, loss of goodwill, loss of data, loss of anticipated savings, or business interruption</li>
                <li>Northbyte shall not be liable for damages arising from: client misuse of delivered work, third-party actions or failures, the client's failure to maintain backups, force majeure events, or circumstances beyond Northbyte's reasonable control</li>
                <li>Northbyte shall not be liable for any academic, disciplinary, or professional consequences resulting from the client's submission or use of delivered work</li>
                <li>The above limitations apply regardless of the legal basis of the claim &mdash; whether in contract, tort (including negligence), statute, or otherwise</li>
              </ul>
              <p>Nothing in these Terms shall limit Northbyte's liability for: death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any liability that cannot be excluded or limited under applicable Indian law.</p>
            </section>

            <section id="indemnification">
              <h2>10. Indemnification</h2>
              <p>You agree to indemnify, defend, and hold harmless Northbyte Software Systems, its directors, employees, contractors, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or related to:</p>
              <ul>
                <li>Your breach of any provision of these Terms and Conditions</li>
                <li>Your use or misuse of any services or deliverables provided by Northbyte</li>
                <li>Your violation of any applicable law, regulation, or third-party right</li>
                <li>Any content, data, or information you provide to Northbyte that infringes any third-party intellectual property, privacy, or other rights</li>
                <li>Academic, institutional, or regulatory actions arising from your submission or use of project deliverables</li>
                <li>Any dispute between you and any third party in connection with delivered work</li>
              </ul>
            </section>

            <section id="confidentiality">
              <h2>11. Confidentiality &amp; Non-Disclosure</h2>
              <p>Both parties acknowledge that in the course of a project engagement, each party may receive access to Confidential Information of the other party. Each party agrees to:</p>
              <ul>
                <li>Maintain the strict confidentiality of all Confidential Information received from the other party</li>
                <li>Use Confidential Information solely for the purpose of fulfilling obligations under the relevant engagement</li>
                <li>Not disclose Confidential Information to any third party without the prior written consent of the disclosing party</li>
                <li>Limit access to Confidential Information to those employees, contractors, or advisors who need to know it for legitimate project purposes and who are bound by equivalent confidentiality obligations</li>
                <li>Protect Confidential Information using at least the same degree of care used to protect their own confidential information, but no less than reasonable care</li>
              </ul>
              <p>These confidentiality obligations <strong>survive termination</strong> of any project engagement for a period of <strong>2 years</strong> from the date of termination or completion of the engagement.</p>
              <p>Exceptions: The above obligations shall not apply to information that (i) is or becomes publicly available through no fault of the receiving party; (ii) was independently developed by the receiving party without reference to the Confidential Information; (iii) was lawfully received from a third party without restriction; or (iv) is required to be disclosed by law, regulation, or court order, provided the disclosing party is given reasonable advance written notice.</p>
              <p>Northbyte will not disclose your project details, personal data, or business information to third parties except as required by law or with your explicit written consent.</p>
            </section>

            <section id="termination">
              <h2>12. Termination</h2>
              <h3>12.1 Termination by Client</h3>
              <p>The client may terminate a project engagement by providing <strong>7 days' written notice</strong> to Northbyte at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Upon termination by the client:</p>
              <ul>
                <li>Northbyte will deliver all completed work product up to the termination date within 5 Working Days</li>
                <li>The client is liable for payment for all work completed and verified up to the termination date. Northbyte will provide a written breakdown of work completed and associated costs.</li>
                <li>Refund eligibility is governed by Section 5.5 (Refund Policy)</li>
              </ul>

              <h3>12.2 Termination by Northbyte</h3>
              <p>Northbyte may immediately terminate an engagement, with written notice, in the following circumstances:</p>
              <ul>
                <li>Non-payment: Any invoice remains outstanding for more than 14 days beyond the due date</li>
                <li>Material breach: The client materially breaches any provision of these Terms and fails to remedy the breach within 7 days of written notice</li>
                <li>Client misconduct: The client engages in abusive, threatening, or harassing conduct toward Northbyte team members</li>
                <li>Illegal use: The client requests or uses delivered work for illegal, fraudulent, or harmful purposes</li>
                <li>Unworkable cooperation: The client fails to provide required inputs, approvals, or cooperation for an extended period making project completion impossible</li>
              </ul>

              <h3>12.3 Effect of Termination</h3>
              <p>Upon termination for any reason:</p>
              <ul>
                <li>Clauses that by their nature should survive termination will remain in force, including: Intellectual Property (Section 6), Confidentiality (Section 11), Limitation of Liability (Section 9), Indemnification (Section 10), and Governing Law (Section 14)</li>
                <li>Both parties will promptly return or destroy the other party's Confidential Information upon request</li>
                <li>Ownership of delivered work product is determined by Section 6 (Intellectual Property Rights)</li>
              </ul>
            </section>

            <section id="force-majeure">
              <h2>13. Force Majeure</h2>
              <p>Neither party shall be in breach of these Terms or liable for any delay or failure to perform obligations due to events beyond their reasonable control (&ldquo;Force Majeure Events&rdquo;), including but not limited to:</p>
              <ul>
                <li>Acts of God: earthquakes, floods, fires, storms, pandemics, or other natural disasters</li>
                <li>Government actions, war, civil unrest, terrorism, or national emergencies</li>
                <li>Internet or telecommunications infrastructure failures affecting service delivery</li>
                <li>Power outages or utility failures lasting more than 48 hours</li>
                <li>Strikes, lockouts, or industrial action affecting the delivery of services</li>
              </ul>
              <p>The affected party must notify the other party in writing as soon as practicable of a Force Majeure Event and its expected duration. Both parties will use commercially reasonable efforts to mitigate the effects of the Force Majeure Event. If a Force Majeure Event continues for more than 30 days, either party may terminate the affected engagement with written notice, subject to payment for work completed up to the date of termination.</p>
            </section>

            <section id="governing-law">
              <h2>14. Governing Law &amp; Dispute Resolution</h2>
              <p>These Terms and Conditions, and all engagements arising from them, are governed by and construed in accordance with the laws of India, specifically including:</p>
              <ul>
                <li>The Indian Contract Act, 1872</li>
                <li>The Information Technology Act, 2000 (as amended)</li>
                <li>The Consumer Protection Act, 2019 (where applicable to consumer engagements)</li>
                <li>The Copyright Act, 1957</li>
                <li>The Trade Marks Act, 1999</li>
                <li>The Specific Relief Act, 1963</li>
              </ul>

              <h3>14.1 Dispute Resolution Procedure</h3>
              <p>In the event of any dispute, claim, or controversy arising out of or relating to these Terms or any engagement with Northbyte, the parties agree to the following escalation process:</p>
              <ul>
                <li><strong>Step 1 &mdash; Informal Resolution:</strong> The aggrieved party will provide written notice to the other party describing the dispute in detail. Both parties will designate a senior representative and attempt to resolve the dispute through good-faith negotiation within <strong>30 days</strong> of the notice.</li>
                <li><strong>Step 2 &mdash; Mediation:</strong> If the dispute is not resolved through negotiation within 30 days, either party may request formal mediation before a mutually agreed mediator in Bengaluru, Karnataka. Each party shall bear their own mediation costs equally.</li>
                <li><strong>Step 3 &mdash; Legal Proceedings:</strong> If mediation does not resolve the dispute within 60 days of commencement, either party may initiate legal proceedings. All disputes shall be subject to the <strong>exclusive jurisdiction of the competent courts in Bengaluru, Karnataka, India</strong>.</li>
              </ul>
              <p>Nothing in this clause prevents either party from seeking immediate injunctive or other equitable relief from a court of competent jurisdiction to prevent irreparable harm.</p>
            </section>

            <section id="general">
              <h2>15. General Provisions</h2>

              <h3>15.1 Entire Agreement</h3>
              <p>These Terms, together with any Project Proposal, Statement of Work, or Software Licence Agreement, constitute the entire agreement between Northbyte and the client with respect to the subject matter and supersede all prior negotiations, representations, or agreements.</p>

              <h3>15.2 Severability</h3>
              <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it enforceable, or severed from these Terms if modification is not possible, without affecting the validity and enforceability of the remaining provisions.</p>

              <h3>15.3 Waiver</h3>
              <p>Northbyte's failure to enforce any provision of these Terms on one occasion shall not constitute a waiver of that provision or any other provision on any subsequent occasion. No waiver shall be effective unless made in writing and signed by an authorised representative of Northbyte.</p>

              <h3>15.4 Assignment</h3>
              <p>The client may not assign, transfer, or delegate any rights or obligations under these Terms without the prior written consent of Northbyte. Northbyte may assign its rights and obligations under these Terms to any successor entity in a merger, acquisition, or reorganisation, provided the successor entity assumes all obligations.</p>

              <h3>15.5 Relationship of the Parties</h3>
              <p>Nothing in these Terms creates a partnership, joint venture, agency, employment, or franchise relationship between the parties. Northbyte is an independent contractor providing professional services to the client.</p>

              <h3>15.6 Updates to These Terms</h3>
              <p>Northbyte reserves the right to update these Terms at any time. Updated Terms will be posted on this page with a revised &ldquo;Last Updated&rdquo; date. For material changes affecting existing client engagements, Northbyte will provide at least 14 days' advance written notice. Continued use of our services after the effective date of revised Terms constitutes acceptance.</p>
            </section>

            <section id="contact">
              <h2>16. Contact</h2>
              <p>For any questions, clarifications, or legal enquiries regarding these Terms and Conditions:</p>
              <div className="legal-card">
                <strong>{COMPANY}</strong><br />
                Legal &amp; Compliance Department<br />
                {ADDRESS}<br />
                &#128231; <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
                &#128222; <a href="tel:+917406335619">{PHONE}</a><br />
                &#8987; Monday&ndash;Saturday, 9:00 AM &ndash; 8:00 PM IST<br />
                &#127760; <a href={SITE} target="_blank" rel="noopener noreferrer">{SITE}</a>
              </div>
              <p>We aim to respond to all legal and compliance enquiries within <strong>48 business hours</strong>.</p>
            </section>

          </div>

          <div className="legal-footer-nav">
            <Link to="/privacy-policy" className="legal-nav-link">Privacy Policy &#8594;</Link>
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
