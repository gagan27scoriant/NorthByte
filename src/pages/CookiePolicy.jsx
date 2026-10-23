import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SITE = 'https://northbyte.in'
const COMPANY = 'Northbyte Software Systems'
const EMAIL = 'hello@northbyte.in'
const PHONE = '+91 7406335619'
const ADDRESS = 'Bengaluru, Karnataka 560001, India'
const LAST_UPDATED = 'October 22, 2025'
const EFFECTIVE_DATE = 'October 22, 2025'

export default function CookiePolicy() {
  useEffect(() => {
    document.title = 'Cookie Policy | Northbyte Software Systems'
    const setMeta = (name, content, prop = false) => {
      const attr = prop ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el) }
      el.setAttribute('content', content)
    }
    setMeta('description', "Northbyte's comprehensive Cookie Policy explains what cookies we use, why we use them, your rights regarding cookies, and how to manage your cookie preferences.")
    setMeta('robots', 'index, follow')
    setMeta('author', COMPANY)
    setMeta('og:title', 'Cookie Policy - Northbyte Software Systems', true)
    setMeta('og:description', 'What cookies does Northbyte use and how can you control them? Read our full Cookie Policy.', true)
    setMeta('og:url', `${SITE}/cookie-policy`, true)
    setMeta('og:type', 'website', true)
    setMeta('og:site_name', COMPANY, true)
    setMeta('twitter:card', 'summary')
    setMeta('twitter:title', 'Cookie Policy - Northbyte Software Systems')
    setMeta('twitter:description', 'What cookies does Northbyte use and how you can control them.')
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = `${SITE}/cookie-policy`
    let ld = document.getElementById('ld-cookie')
    if (!ld) { ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.id = 'ld-cookie'; document.head.appendChild(ld) }
    ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Cookie Policy', url: `${SITE}/cookie-policy`, publisher: { '@type': 'Organization', name: COMPANY, url: SITE, email: EMAIL, address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', addressCountry: 'IN' } }, dateModified: '2025-10-22', inLanguage: 'en-IN', breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE }, { '@type': 'ListItem', position: 2, name: 'Cookie Policy', item: `${SITE}/cookie-policy` }] } })
    window.scrollTo(0, 0)
    return () => { ld && ld.remove() }
  }, [])

  const cookies = [
    { name: 'nb_session', type: 'Essential', provider: 'Northbyte (First-Party)', purpose: 'Maintains session state and enables core website functionality during your visit', duration: 'Session (deleted when browser closes)', canDisable: 'No', dataTransferred: 'None' },
    { name: 'nb_cookie_consent', type: 'Essential', provider: 'Northbyte (First-Party)', purpose: 'Stores your cookie consent preferences so we do not display the consent banner on every visit', duration: '1 year', canDisable: 'No', dataTransferred: 'None' },
    { name: 'nb_lang', type: 'Functional', provider: 'Northbyte (First-Party)', purpose: 'Remembers your language preference for the website interface', duration: '1 year', canDisable: 'Yes', dataTransferred: 'None' },
    { name: '_ga', type: 'Analytics', provider: 'Google Analytics (Third-Party)', purpose: 'Distinguishes unique users by assigning a randomly generated number as a client identifier. Used to calculate session, visit, campaign data and site usage reports.', duration: '2 years', canDisable: 'Yes', dataTransferred: 'USA (Standard Contractual Clauses)' },
    { name: '_ga_[ID]', type: 'Analytics', provider: 'Google Analytics (Third-Party)', purpose: 'Used to persist session state and count page views for Google Analytics 4 measurement reports', duration: '2 years', canDisable: 'Yes', dataTransferred: 'USA (Standard Contractual Clauses)' },
    { name: '_gid', type: 'Analytics', provider: 'Google Analytics (Third-Party)', purpose: 'Distinguishes users and stores information about how visitors use the website. Creates a statistical report on usage for the previous 24 hours.', duration: '24 hours', canDisable: 'Yes', dataTransferred: 'USA (Standard Contractual Clauses)' },
    { name: '_gat', type: 'Analytics', provider: 'Google Analytics (Third-Party)', purpose: 'Used to throttle request rate and limit the collection of data on high-traffic websites', duration: '1 minute', canDisable: 'Yes', dataTransferred: 'USA (Standard Contractual Clauses)' },
  ]

  return (
    <>
      <header className="nav scoriant-nav">
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" className="logo scoriant-logo" style={{ textDecoration: 'none' }}>
            <span className="logo-mark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#cp-logo-g)" />
                <path d="M2 17L12 22L22 17" stroke="url(#cp-logo-g)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="url(#cp-logo-g)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs><linearGradient id="cp-logo-g" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA" /><stop offset="1" stopColor="#60A5FA" /></linearGradient></defs>
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
            <h1>Cookie Policy</h1>
            <p className="legal-lead">
              This Cookie Policy explains in detail what cookies are, which cookies Northbyte Software Systems places on your device, the purpose and legal basis for each cookie, how long they persist, what data they transfer and where, and how you can exercise full control over your cookie preferences. We are committed to using only the minimum cookies necessary to operate our website and to providing you with complete transparency about our cookie practices.
            </p>
            <div className="legal-meta">
              <span>&#128197; Effective Date: <strong>{EFFECTIVE_DATE}</strong></span>
              <span>&#128260; Last Updated: <strong>{LAST_UPDATED}</strong></span>
              <span>&#127850; Essential + Analytics Only</span>
              <span>&#128683; No Advertising Cookies</span>
            </div>
          </div>

          <div className="legal-card" style={{ marginBottom: '2rem', background: 'rgba(43, 80, 255, 0.04)', borderColor: 'rgba(43, 80, 255, 0.2)' }}>
            <strong>&#9889; Quick Summary:</strong> We use 2 essential cookies (always active, cannot be disabled) and up to 4 optional Google Analytics cookies (only if you consent). We use <strong>zero</strong> advertising, social media, or cross-site tracking cookies. You can change your preferences at any time using the button below.
            <div style={{ marginTop: '0.75rem' }}>
              <button type="button" className="btn" onClick={() => window.dispatchEvent(new CustomEvent('openCookiePreferences'))} style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}>
                &#127850; Manage Cookie Preferences
              </button>
            </div>
          </div>

          <nav className="legal-toc" aria-label="Table of contents">
            <h2>Contents</h2>
            <ol>
              <li><a href="#what-are-cookies">What Are Cookies?</a></li>
              <li><a href="#related-technologies">Related Tracking Technologies</a></li>
              <li><a href="#legal-basis">Legal Basis for Cookie Use</a></li>
              <li><a href="#types-we-use">Types of Cookies We Use</a></li>
              <li><a href="#cookie-list">Detailed Cookie Reference List</a></li>
              <li><a href="#third-party">Third-Party Cookies &amp; Google Analytics</a></li>
              <li><a href="#what-we-dont-use">What We Do NOT Use</a></li>
              <li><a href="#consent">Your Cookie Consent</a></li>
              <li><a href="#manage-cookies">How to Manage &amp; Opt Out</a></li>
              <li><a href="#data-transfers">Cross-Border Data Transfers via Cookies</a></li>
              <li><a href="#retention">Cookie Data Retention</a></li>
              <li><a href="#children-cookies">Cookies &amp; Children</a></li>
              <li><a href="#changes">Changes to This Policy</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ol>
          </nav>

          <div className="legal-body">

            <section id="what-are-cookies">
              <h2>1. What Are Cookies?</h2>
              <p>Cookies are small text files that a website stores on your browser or device when you visit. They are ubiquitous on the modern web &mdash; virtually every website you visit will place at least one cookie on your device. Cookies serve a variety of purposes, from keeping you logged in across page visits to helping website owners understand how their sites are used.</p>
              <p>Cookies can be classified in several ways:</p>

              <h3>1.1 By Lifespan</h3>
              <ul>
                <li><strong>Session cookies:</strong> Temporary cookies that exist only for the duration of your browser session. They are automatically deleted when you close your browser. Session cookies are generally used to maintain state within a single visit (e.g., keeping a form filled in as you navigate between pages).</li>
                <li><strong>Persistent cookies:</strong> Cookies that remain on your device for a specified duration (days, months, or years) or until you manually delete them. They are used to remember your preferences or recognise you when you return to a website.</li>
              </ul>

              <h3>1.2 By Origin</h3>
              <ul>
                <li><strong>First-party cookies:</strong> Cookies set directly by the website you are visiting (in this case, northbyte.in). These are generally considered less privacy-invasive as they are only readable by the site that set them.</li>
                <li><strong>Third-party cookies:</strong> Cookies set by a domain other than the website you are visiting. For example, when our website loads Google Analytics JavaScript, Google may set cookies from the google-analytics.com domain on your device.</li>
              </ul>

              <h3>1.3 By Purpose (Industry Standard Categorisation)</h3>
              <ul>
                <li><strong>Strictly Necessary / Essential cookies:</strong> Required for core website functionality. Without these, the website cannot work properly.</li>
                <li><strong>Functional / Preference cookies:</strong> Enable the website to remember your choices and personalise your experience.</li>
                <li><strong>Analytics / Performance cookies:</strong> Collect aggregated, anonymised data about how visitors use the website. Used to improve the site over time.</li>
                <li><strong>Marketing / Advertising cookies:</strong> Used to track users across websites and show targeted advertising. <strong>We do not use these.</strong></li>
                <li><strong>Social Media cookies:</strong> Placed by social media platforms to enable sharing and track engagement. <strong>We do not embed social media widgets that set cookies.</strong></li>
              </ul>
            </section>

            <section id="related-technologies">
              <h2>2. Related Tracking Technologies</h2>
              <p>Beyond traditional cookies, websites may use other tracking technologies. For full transparency, here is a summary of what we use and do not use:</p>
              <ul>
                <li><strong>Local Storage / Session Storage:</strong> Browser-based storage mechanisms similar to cookies but with no expiry (local storage) or session-only (session storage). We use local storage minimally to store your UI preferences (e.g., dark/light mode preference) that do not contain personal data.</li>
                <li><strong>Web Beacons / Pixel Tags:</strong> Tiny, transparent image files used to track actions (common in emails). We do not use web beacons or tracking pixels on our website or in our emails.</li>
                <li><strong>Fingerprinting:</strong> A technique to identify users based on their device characteristics (browser, OS, screen resolution, fonts, etc.) without using cookies. <strong>We do not use fingerprinting.</strong></li>
                <li><strong>Tracking URLs:</strong> URLs with appended parameters to track campaign performance in analytics. We may use UTM parameters in our marketing links to track the source of traffic to our website, but this data is anonymised and processed only in aggregate.</li>
              </ul>
            </section>

            <section id="legal-basis">
              <h2>3. Legal Basis for Cookie Use</h2>
              <p>Under the GDPR (applicable to EU/UK visitors) and India's Information Technology Act 2000, the legal basis for our cookie use is as follows:</p>
              <ul>
                <li><strong>Strictly Necessary Cookies &mdash; Legal basis: Legitimate Interest / Legal Obligation:</strong> These cookies are essential to provide the service you have requested (i.e., using our website). Consent is not required for strictly necessary cookies under the ePrivacy Directive. They are always active.</li>
                <li><strong>Analytics Cookies &mdash; Legal basis: Consent (Article 6(1)(a) GDPR):</strong> These optional cookies require your freely-given, informed, specific, and unambiguous consent before they are activated. We obtain this consent via our cookie consent banner when you first visit northbyte.in. You can withdraw this consent at any time.</li>
                <li><strong>Functional Cookies &mdash; Legal basis: Consent:</strong> Optional cookies that require consent before activation.</li>
              </ul>
              <p>We do not place any optional cookies on your device before obtaining your consent. If you reject optional cookies, only strictly necessary cookies will be active.</p>
            </section>

            <section id="types-we-use">
              <h2>4. Types of Cookies We Use</h2>

              <div className="cookie-type-cards">
                <div className="cookie-type-card essential">
                  <div className="cookie-type-header">
                    <span className="cookie-type-icon">&#128274;</span>
                    <div>
                      <h3>Essential Cookies</h3>
                      <span className="cookie-badge required">Always Active</span>
                    </div>
                  </div>
                  <p>These cookies are strictly necessary for the website to function. They enable core features such as page navigation, security, form submissions, and your cookie consent preferences. Without these cookies, the site cannot operate correctly. They do not collect any personally identifiable information beyond what is technically necessary to provide the service.</p>
                  <p><strong>Can you disable them?</strong> No &mdash; these are required for the site to operate. Disabling them via browser settings would cause the website to malfunction.</p>
                  <p><strong>Examples:</strong> Session management cookie, cookie consent preference storage</p>
                </div>

                <div className="cookie-type-card analytics">
                  <div className="cookie-type-header">
                    <span className="cookie-type-icon">&#128202;</span>
                    <div>
                      <h3>Analytics &amp; Performance Cookies</h3>
                      <span className="cookie-badge optional">Optional &mdash; Requires Consent</span>
                    </div>
                  </div>
                  <p>These cookies help us understand how visitors interact with our website by collecting aggregated, anonymised data. They tell us which pages are most visited, how long visitors spend on each page, where visitors come from, and what devices they use. This aggregate information helps us continuously improve the website experience for all visitors.</p>
                  <p><strong>Important:</strong> All analytics cookies are anonymised. Google Analytics is configured with IP anonymisation, meaning Google never receives your full IP address. Data is used only in aggregate form and never linked to individual users.</p>
                  <p><strong>Can you disable them?</strong> Yes &mdash; you can opt out via our cookie consent banner, your browser settings, or the Google Analytics opt-out tool.</p>
                  <p><strong>Provider:</strong> Google Ireland Limited (processing under Standard Contractual Clauses)</p>
                </div>

                <div className="cookie-type-card">
                  <div className="cookie-type-header">
                    <span className="cookie-type-icon">&#9965;&#65039;</span>
                    <div>
                      <h3>Functional / Preference Cookies</h3>
                      <span className="cookie-badge optional">Optional &mdash; Requires Consent</span>
                    </div>
                  </div>
                  <p>Functional cookies enable the website to remember choices you make (such as language preferences or UI settings) to provide a more personalised experience. They do not track your activity across other websites and do not collect any sensitive personal information.</p>
                  <p><strong>Can you disable them?</strong> Yes &mdash; you can opt out via our cookie consent manager. Disabling functional cookies may result in reduced personalisation of your experience.</p>
                </div>

                <div className="cookie-type-card no-ads">
                  <div className="cookie-type-header">
                    <span className="cookie-type-icon">&#128683;</span>
                    <div>
                      <h3>Advertising / Marketing Cookies</h3>
                      <span className="cookie-badge none">NOT USED</span>
                    </div>
                  </div>
                  <p>We do <strong>not</strong> use advertising, behavioural tracking, retargeting, or marketing cookies on northbyte.in. We do not serve ads on our website, and we do not share your browsing behaviour with advertisers. Your activity on northbyte.in is never used to show you targeted advertisements on other websites or platforms.</p>
                </div>

                <div className="cookie-type-card no-ads">
                  <div className="cookie-type-header">
                    <span className="cookie-type-icon">&#128683;</span>
                    <div>
                      <h3>Social Media Cookies</h3>
                      <span className="cookie-badge none">NOT USED</span>
                    </div>
                  </div>
                  <p>We do <strong>not</strong> embed social media widgets, share buttons, or social login features on our website that would cause social media platforms (such as Facebook, Instagram, LinkedIn, or Twitter/X) to set cookies on your device without your knowledge. Any links to our social media profiles are standard hyperlinks that do not set cookies.</p>
                </div>
              </div>
            </section>

            <section id="cookie-list">
              <h2>5. Detailed Cookie Reference List</h2>
              <p>The following table provides a comprehensive listing of all cookies currently used on <strong>northbyte.in</strong>. We commit to keeping this list accurate and up-to-date. If we introduce any new cookies, we will update this policy and, where required, seek fresh consent.</p>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Cookie Name</th>
                      <th>Type</th>
                      <th>Provider</th>
                      <th>Purpose</th>
                      <th>Duration</th>
                      <th>Can Disable?</th>
                      <th>Data Transfer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookies.map(c => (
                      <tr key={c.name}>
                        <td><code>{c.name}</code></td>
                        <td><span className={`cookie-badge-sm ${c.type.toLowerCase()}`}>{c.type}</span></td>
                        <td>{c.provider}</td>
                        <td>{c.purpose}</td>
                        <td>{c.duration}</td>
                        <td>{c.canDisable}</td>
                        <td>{c.dataTransferred}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--muted)' }}>Last verified: {LAST_UPDATED}. Cookie names prefixed with an underscore (_) are set by Google Analytics. The [ID] in _ga_[ID] represents a unique identifier for your Google Analytics property.</p>
            </section>

            <section id="third-party">
              <h2>6. Third-Party Cookies &amp; Google Analytics</h2>
              <p>Our primary third-party cookie provider is <strong>Google Analytics</strong>, operated by Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Ireland). We use Google Analytics to collect aggregated, anonymised data about website traffic and user behaviour. This helps us understand:</p>
              <ul>
                <li>How many visitors our website receives and when (daily, weekly, monthly trends)</li>
                <li>Which pages are most and least visited, and where visitors spend the most time</li>
                <li>How visitors navigate through the site (user flow and drop-off points)</li>
                <li>What devices, browsers, and operating systems our visitors use</li>
                <li>Which countries and cities our visitors are from (city-level geographic data only)</li>
                <li>Which sources refer visitors to our website (search engines, direct, social, referral)</li>
              </ul>

              <h3>6.1 Our Google Analytics Configuration</h3>
              <p>We have specifically configured our Google Analytics implementation to maximise privacy:</p>
              <ul>
                <li><strong>IP anonymisation enabled:</strong> All IP addresses are anonymised before being stored. Google only receives a truncated IP address. Full IP addresses are never logged by Google Analytics on our behalf.</li>
                <li><strong>Advertising features disabled:</strong> We have disabled Google Signals and all remarketing and advertising reporting features. Your data is not used to show you ads on other platforms.</li>
                <li><strong>Data sharing with Google products disabled:</strong> We do not share analytics data with other Google products or services.</li>
                <li><strong>Consent-gated activation:</strong> Google Analytics cookies are only loaded after you have explicitly accepted analytics cookies via our consent banner.</li>
                <li><strong>Data retention set to 14 months:</strong> Google Analytics data is automatically purged after 14 months (Google's minimum setting for event-level data).</li>
              </ul>

              <h3>6.2 Google's Privacy Policy</h3>
              <p>Google processes cookie data as a data processor on our behalf (under a Data Processing Agreement). Google's own privacy practices are governed by the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>. You can also review <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer">Google's commitment to privacy in Analytics</a>.</p>

              <h3>6.3 Opting Out of Google Analytics</h3>
              <p>Beyond our consent banner, you can opt out of Google Analytics tracking globally (across all websites) using the official <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
            </section>

            <section id="what-we-dont-use">
              <h2>7. What We Do NOT Use</h2>
              <p>For complete transparency, the following tracking technologies and cookie types are <strong>not used</strong> on northbyte.in:</p>
              <ul>
                <li>&#10060; Facebook Pixel or any Meta advertising tracking</li>
                <li>&#10060; Google Ads / Google AdSense / Google Tag Manager for advertising</li>
                <li>&#10060; LinkedIn Insight Tag</li>
                <li>&#10060; Twitter/X Pixel or advertising tags</li>
                <li>&#10060; Any cross-site tracking cookies or supercookies</li>
                <li>&#10060; Browser fingerprinting or canvas fingerprinting</li>
                <li>&#10060; Embedded YouTube, Vimeo, or other media cookies (we use privacy-enhanced embeds where media is embedded)</li>
                <li>&#10060; Social media share buttons that set cookies</li>
                <li>&#10060; Email tracking pixels or read-receipt mechanisms in our transactional emails</li>
                <li>&#10060; A/B testing or personalisation platform cookies</li>
                <li>&#10060; Live chat platform cookies (we use direct email and WhatsApp for communication)</li>
                <li>&#10060; Customer data platform (CDP) or CRM tracking pixels</li>
              </ul>
            </section>

            <section id="consent">
              <h2>8. Your Cookie Consent</h2>
              <p>When you first visit northbyte.in, you will be presented with our cookie consent banner. This banner informs you of the types of cookies we use and requests your consent for optional cookies.</p>

              <h3>8.1 How We Obtain Consent</h3>
              <p>Our consent mechanism meets the following legal standards:</p>
              <ul>
                <li><strong>Freely given:</strong> Accepting optional cookies is not required to use our website. You can continue to use the site with only essential cookies active. There is no &ldquo;cookie wall&rdquo; that blocks access to content without cookie consent.</li>
                <li><strong>Specific:</strong> You can accept all cookies, reject optional cookies, or customise your preferences by cookie category.</li>
                <li><strong>Informed:</strong> The banner clearly describes each category of cookie and links to this detailed Cookie Policy.</li>
                <li><strong>Unambiguous:</strong> Consent is recorded only when you actively click &ldquo;Accept All&rdquo; or &ldquo;Save Preferences&rdquo;. Continuing to scroll or browse does not constitute consent.</li>
                <li><strong>Withdrawable:</strong> You can withdraw or change your consent at any time. Withdrawal is as easy as giving consent.</li>
              </ul>

              <h3>8.2 What Happens Without Consent</h3>
              <p>If you click &ldquo;Reject&rdquo; or dismiss the banner without accepting optional cookies:</p>
              <ul>
                <li>Only strictly necessary cookies will be placed on your device</li>
                <li>No Google Analytics or other optional cookies will be loaded</li>
                <li>You will be able to use the website normally &mdash; no features are locked behind cookie consent</li>
                <li>Your rejection preference will be stored via a single essential cookie so we do not re-ask you on every visit</li>
              </ul>

              <h3>8.3 Consent Records</h3>
              <p>Northbyte records and stores your consent decision (accepted/rejected and timestamp) for compliance audit purposes. This consent record is itself stored as an essential cookie for 1 year and is not shared with any third party.</p>
            </section>

            <section id="manage-cookies">
              <h2>9. How to Manage &amp; Opt Out</h2>
              <p>You have multiple options to control and manage cookies on our website:</p>

              <h3>9.1 Our Cookie Preference Centre</h3>
              <p>The easiest way to manage your cookie preferences is through our in-website Cookie Preference Centre. You can access it at any time via the button below or the &ldquo;Cookie Preferences&rdquo; link in the footer of every page:</p>
              <div style={{ margin: '1rem 0 1.5rem' }}>
                <button type="button" className="btn" onClick={() => window.dispatchEvent(new CustomEvent('openCookiePreferences'))} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: '0.6rem 1.4rem' }}>
                  &#127850; Open Cookie Preference Centre
                </button>
              </div>
              <p>From the Preference Centre, you can:</p>
              <ul>
                <li>View a description of each cookie category</li>
                <li>Toggle individual cookie categories on or off</li>
                <li>Accept all optional cookies with one click</li>
                <li>Reject all optional cookies with one click</li>
                <li>Save your custom preferences</li>
              </ul>

              <h3>9.2 Browser-Level Cookie Controls</h3>
              <p>You can also control cookies directly through your browser settings. Most browsers allow you to view, delete, block, or receive alerts when cookies are set. Instructions for the most popular browsers:</p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome &mdash; Cookie Settings Guide</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox &mdash; Cookie Settings Guide</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari (macOS) &mdash; Cookie Settings Guide</a></li>
                <li><a href="https://support.apple.com/en-gb/HT201265" target="_blank" rel="noopener noreferrer">Apple Safari (iOS / iPadOS) &mdash; Cookie Settings Guide</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge &mdash; Cookie Settings Guide</a></li>
                <li><a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid" target="_blank" rel="noopener noreferrer">Chrome for Android &mdash; Cookie Settings Guide</a></li>
              </ul>
              <div className="legal-card" style={{ background: 'rgba(252, 196, 25, 0.06)', borderColor: 'rgba(252, 196, 25, 0.3)', marginTop: '1rem' }}>
                <strong>&#9888;&#65039; Please Note:</strong> Blocking or deleting essential cookies via browser settings will significantly affect website functionality. Some features may not work correctly without essential cookies. We recommend using our Cookie Preference Centre to disable only optional cookies while keeping essential cookies active.
              </div>

              <h3>9.3 Google Analytics Opt-Out</h3>
              <p>To opt out of Google Analytics tracking globally across all websites (not just northbyte.in), you can install the official <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a> for your desktop browser.</p>

              <h3>9.4 Do Not Track (DNT) Signal</h3>
              <p>Some browsers offer a &ldquo;Do Not Track&rdquo; (DNT) signal that notifies websites that you do not want to be tracked. Our website detects and respects DNT signals: if a valid DNT signal is detected, we will not load any optional analytics cookies, regardless of your stored consent preference.</p>

              <h3>9.5 Private / Incognito Browsing</h3>
              <p>When browsing in Private or Incognito mode, most browsers do not store cookies beyond the current session. All cookies (including essential cookies) are deleted when you close the private browsing window. This means your cookie consent preference will not be remembered, and you may see the consent banner on each private session visit.</p>
            </section>

            <section id="data-transfers">
              <h2>10. Cross-Border Data Transfers via Cookies</h2>
              <p>When you accept analytics cookies, some data collected by cookies (specifically Google Analytics cookies) is transferred to and processed by Google's servers, which may be located in the United States or other countries outside India and the European Economic Area (EEA).</p>
              <p>We ensure appropriate safeguards are in place for these transfers:</p>
              <ul>
                <li><strong>Standard Contractual Clauses (SCCs):</strong> Google Ireland Limited processes analytics data under the EU Standard Contractual Clauses, which provide legally binding data protection obligations equivalent to EU standards</li>
                <li><strong>Google's Data Processing Terms:</strong> We have accepted Google's Data Processing Terms, which govern the relationship between Northbyte (as data controller) and Google (as data processor) for analytics data</li>
                <li><strong>IP anonymisation:</strong> All IP addresses are anonymised before any transfer, meaning a full IP address never leaves India/your country</li>
              </ul>
              <p>For first-party cookies set by Northbyte directly, all data is processed within India on our hosting infrastructure. No personal data from first-party cookies is transferred internationally.</p>
              <p>You can request more information about cross-border data transfer safeguards by contacting us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
            </section>

            <section id="retention">
              <h2>11. Cookie Data Retention</h2>
              <p>Different cookies have different lifespans. The retention periods for data collected via our cookies are as follows:</p>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead><tr><th>Cookie / Data Type</th><th>Cookie Lifetime</th><th>Data Retention in Analytics</th></tr></thead>
                  <tbody>
                    <tr><td>Essential session cookies</td><td>Session (deleted on browser close)</td><td>Not stored beyond session</td></tr>
                    <tr><td>Cookie consent preference</td><td>1 year</td><td>1 year (consent audit log)</td></tr>
                    <tr><td>Functional preference cookies</td><td>1 year</td><td>Not sent to any analytics platform</td></tr>
                    <tr><td>Google Analytics event data (_ga_[ID])</td><td>2 years (cookie lifetime)</td><td>14 months (GA data retention setting)</td></tr>
                    <tr><td>Google Analytics unique visitor ID (_ga)</td><td>2 years (cookie lifetime)</td><td>14 months (GA data retention setting)</td></tr>
                    <tr><td>Google Analytics daily visitor data (_gid)</td><td>24 hours</td><td>14 months (aggregated)</td></tr>
                    <tr><td>Google Analytics throttle cookie (_gat)</td><td>1 minute</td><td>Not retained</td></tr>
                  </tbody>
                </table>
              </div>
              <p>After the retention periods specified above, data is automatically purged from analytics platforms. You can request early deletion of any data associated with your device by clearing your cookies and contacting us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
            </section>

            <section id="children-cookies">
              <h2>12. Cookies &amp; Children</h2>
              <p>Our website (northbyte.in) is not directed at children under the age of 13. We do not knowingly serve cookies to or collect data from children under 13 via cookies or any other means.</p>
              <p>For the Dronacharya AI EdTech platform, which may be accessed by students under 18 (including those under 13), all cookie use is governed by the Software Licence Agreement with the institution. Institutions are responsible for obtaining appropriate parental or guardian consent for the collection of any data from minor students, including any data collected via cookies within the Dronacharya AI platform environment.</p>
              <p>If you are a parent or guardian and are concerned about cookies being placed on your child's device, please contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or consult your child's school or educational institution.</p>
            </section>

            <section id="changes">
              <h2>13. Changes to This Cookie Policy</h2>
              <p>We may update this Cookie Policy from time to time to reflect:</p>
              <ul>
                <li>Changes in the cookies we use (adding new cookies or removing existing ones)</li>
                <li>Changes in applicable laws or regulatory guidance on cookie use</li>
                <li>Changes in our third-party service providers</li>
                <li>Improvements to our transparency and disclosure practices</li>
              </ul>
              <p>When we make changes to this policy, we will:</p>
              <ul>
                <li>Update the &ldquo;Last Updated&rdquo; date at the top of this page</li>
                <li>For material changes (such as the introduction of new cookie categories), re-present the cookie consent banner to all returning visitors and request fresh consent where required by law</li>
                <li>Display a notice on our website for significant updates</li>
              </ul>
              <p>We encourage you to review this Cookie Policy periodically. Your continued use of our website after the effective date of a revised policy, and your continued cookie consent, constitutes your acknowledgement of those changes.</p>
            </section>

            <section id="contact">
              <h2>14. Contact Us</h2>
              <p>If you have any questions, concerns, or requests regarding this Cookie Policy, our use of cookies, or your cookie preferences, please do not hesitate to contact us. We aim to respond to all cookie-related enquiries within <strong>72 business hours</strong>.</p>
              <div className="legal-card">
                <strong>{COMPANY}</strong><br />
                Privacy &amp; Data Protection Team<br />
                {ADDRESS}<br />
                &#128231; <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
                &#128222; <a href="tel:+917406335619">{PHONE}</a><br />
                &#8987; Monday&ndash;Saturday, 9:00 AM &ndash; 8:00 PM IST<br />
                &#127760; <a href={SITE} target="_blank" rel="noopener noreferrer">{SITE}</a>
              </div>
              <p>To exercise any of your data protection rights (including the right to access, erasure, or portability of data collected via cookies), please refer to our <Link to="/privacy-policy">Privacy Policy</Link> for instructions.</p>
            </section>

          </div>

          <div className="legal-footer-nav">
            <Link to="/privacy-policy" className="legal-nav-link">Privacy Policy &#8594;</Link>
            <Link to="/terms-and-conditions" className="legal-nav-link">Terms &amp; Conditions &#8594;</Link>
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
