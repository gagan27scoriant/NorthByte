import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'northbyte_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    functional: true,
  })

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) {
        // Show banner after brief delay for smooth entrance
        const timer = setTimeout(() => setVisible(true), 1200)
        return () => clearTimeout(timer)
      } else {
        const parsed = JSON.parse(saved)
        setPreferences({
          essential: true,
          analytics: Boolean(parsed.analytics),
          functional: Boolean(parsed.functional),
        })
      }
    } catch (e) {
      setVisible(true)
    }
  }, [])

  // Listen for custom event to reopen preferences from anywhere
  useEffect(() => {
    const handleOpen = () => {
      setModalOpen(true)
      setVisible(false)
    }
    window.addEventListener('openCookiePreferences', handleOpen)
    return () => window.removeEventListener('openCookiePreferences', handleOpen)
  }, [])

  const saveConsent = (analyticsVal, functionalVal) => {
    const payload = {
      essential: true,
      analytics: analyticsVal,
      functional: functionalVal,
      timestamp: new Date().toISOString(),
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
    } catch (e) {}
    setPreferences({
      essential: true,
      analytics: analyticsVal,
      functional: functionalVal,
    })
    setVisible(false)
    setModalOpen(false)
  }

  const handleAcceptAll = () => saveConsent(true, true)
  const handleNecessaryOnly = () => saveConsent(false, false)
  const handleSaveCustom = () => saveConsent(preferences.analytics, preferences.functional)

  if (!visible && !modalOpen) return null

  return (
    <>
      {/* Full-Width Slim Bottom Banner */}
      {visible && !modalOpen && (
        <div className="cookie-banner-wrap" role="region" aria-label="Cookie consent">
          <div className="cookie-banner">
            <div className="cookie-banner-content">
              <span className="cookie-banner-icon" aria-hidden="true">🍪</span>
              <p className="cookie-banner-text">
                <strong>We value your privacy:</strong> We use cookies to enhance your experience and analyze website traffic. Read our <Link to="/cookie-policy" className="cookie-policy-link">Cookie Policy</Link> to learn more.
              </p>
            </div>
            <div className="cookie-banner-actions">
              <button
                type="button"
                className="btn btn-cookie-reject"
                onClick={handleNecessaryOnly}
              >
                Reject
              </button>
              <button
                type="button"
                className="btn btn-accept-all"
                onClick={handleAcceptAll}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {modalOpen && (
        <div className="cookie-modal-backdrop" onClick={() => setModalOpen(false)} role="dialog" aria-modal="true" aria-labelledby="cookie-modal-title">
          <div className="cookie-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cookie-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.4rem' }}>🍪</span>
                <h3 id="cookie-modal-title">Cookie Preferences</h3>
              </div>
              <button
                type="button"
                className="cookie-modal-close"
                onClick={() => setModalOpen(false)}
                aria-label="Close preferences"
              >
                ✕
              </button>
            </div>

            <p className="cookie-modal-desc">
              Manage your cookie preferences below. Essential cookies cannot be disabled as they are required for basic site operations.
              For more information, visit our <Link to="/cookie-policy" onClick={() => setModalOpen(false)}>Cookie Policy</Link>.
            </p>

            <div className="cookie-options-list">
              {/* Essential */}
              <div className="cookie-option-card">
                <div className="cookie-option-info">
                  <div className="cookie-option-title">
                    <span>Strictly Necessary Cookies</span>
                    <span className="cookie-badge-locked">Always Active</span>
                  </div>
                  <p className="cookie-option-desc">
                    These cookies are essential for navigating the site, security, and loading core features. They cannot be turned off.
                  </p>
                </div>
                <div className="cookie-toggle-wrap">
                  <input type="checkbox" checked disabled className="cookie-toggle-input" />
                  <span className="cookie-toggle-slider locked"></span>
                </div>
              </div>

              {/* Analytics */}
              <div className="cookie-option-card">
                <div className="cookie-option-info">
                  <div className="cookie-option-title">
                    <span>Analytics & Performance Cookies</span>
                    <span className="cookie-badge-tag">Performance</span>
                  </div>
                  <p className="cookie-option-desc">
                    Help us understand how visitors interact with Northbyte by collecting aggregated, anonymous page visit data.
                  </p>
                </div>
                <label className="cookie-toggle-wrap">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="cookie-toggle-input"
                  />
                  <span className="cookie-toggle-slider"></span>
                </label>
              </div>

              {/* Functional */}
              <div className="cookie-option-card">
                <div className="cookie-option-info">
                  <div className="cookie-option-title">
                    <span>Functional & Experience Cookies</span>
                    <span className="cookie-badge-tag">Experience</span>
                  </div>
                  <p className="cookie-option-desc">
                    Remember your choices (such as viewing modes or preferences) to provide an enhanced, personalized experience.
                  </p>
                </div>
                <label className="cookie-toggle-wrap">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                    className="cookie-toggle-input"
                  />
                  <span className="cookie-toggle-slider"></span>
                </label>
              </div>
            </div>

            <div className="cookie-modal-footer">
              <button
                type="button"
                className="btn btn-outline-cookie"
                onClick={handleNecessaryOnly}
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                className="btn btn-cookie-save"
                onClick={handleSaveCustom}
              >
                Save Preferences
              </button>
              <button
                type="button"
                className="btn btn-accept-all"
                onClick={handleAcceptAll}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
