import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '40px', paddingBottom: '100px' }}>
      <SEO
        title="Contact Us & Get a Quote | HS Web Studio Karachi"
        description="Get in touch with HS Web Studio in Karachi, Pakistan. WhatsApp us at +92 331 2901930 or submit your project inquiry for a prompt, itemized quote."
      />

      <div className="container">
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '32px' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--accent-cyan)' }}>Contact</span>
        </div>

        {/* Page Header */}
        <div style={{ maxWidth: '820px', marginBottom: '56px' }}>
          <div className="section-badge">
            <span className="badge-dot" />
            <span>Project Inquiries</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '20px' }}>
            Start a Conversation About{' '}
            <span className="text-gradient-cyan">Your Next Website.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
            Whether you are ready to kick off a new development sprint, modernize an outdated portal, or simply explore possibilities, our lead engineer will respond promptly with actionable insights.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Column: Direct Contacts */}
          <div>
            <div
              className="card-glass"
              style={{
                padding: '36px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-medium)',
                marginBottom: '32px'
              }}
            >
              <h3 style={{ fontSize: '1.35rem', marginBottom: '20px' }}>Studio Touchpoints</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                {/* WhatsApp */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(37, 211, 102, 0.15)',
                      color: '#25D366',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                      WhatsApp Direct
                    </div>
                    <a
                      href="https://wa.me/923312901930"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', display: 'block', marginTop: '2px' }}
                    >
                      +92 331 2901930
                    </a>
                    <div style={{ fontSize: '0.78rem', color: '#4ade80', marginTop: '2px' }}>
                      ● Online · Rapid response
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-cyan-dim)',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                      Primary Email
                    </div>
                    <a
                      href="mailto:hswebstudio3@gmail.com"
                      style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginTop: '2px' }}
                    >
                      hswebstudio3@gmail.com
                    </a>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                      For RFP requests & specifications
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                      Studio Location
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>
                      Karachi, Pakistan
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                      Serving Pakistan & International Clients
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(225, 48, 108, 0.15)',
                      color: '#E1306C',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Instagram size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                      Instagram
                    </div>
                    <a
                      href="https://www.instagram.com/has_sanwebstudio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginTop: '2px' }}
                    >
                      @has_sanwebstudio
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Promise Card */}
            <div
              style={{
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(34, 211, 238, 0.05)',
                border: '1px solid rgba(34, 211, 238, 0.25)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px'
              }}
            >
              <Clock size={22} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '4px', color: 'var(--text-primary)' }}>
                  Guaranteed 24-Hour Response
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  We review every project brief within 24 hours (usually under 2 hours during business hours in Pakistan). No generic automated bot replies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
