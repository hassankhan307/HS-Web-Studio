import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Instagram, Clock, ShieldCheck, MessageCircle } from 'lucide-react';

export default function Contact({ prefilledService = '', prefilledMessage = '' }) {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          badge="Start Your Project"
          title="Let's Build Something Exceptional Together"
          description="Ready to establish your digital presence or upgrade an existing platform? Share your vision and receive a prompt, professional consultation."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Column: Studio Information & Direct Channels */}
          <div>
            <h3 style={{ fontSize: '1.45rem', marginBottom: '14px' }}>
              Direct Contact & Studio Location
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '32px' }}>
              We are situated in Karachi, Pakistan, serving business clients locally across Karachi, Lahore, and Islamabad, as well as international clients remotely.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/923312901930"
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass"
                style={{
                  padding: '18px 20px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  backgroundColor: 'rgba(37, 211, 102, 0.05)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                    Instant WhatsApp
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                    +92 331 2901930
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#4ade80' }}>
                    ● Typical response within 15 minutes
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:hswebstudio3@gmail.com"
                className="card-glass"
                style={{
                  padding: '18px 20px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-cyan-dim)',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                    Direct Email
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    hswebstudio3@gmail.com
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    For RFP documents & detailed briefs
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div
                className="card-glass"
                style={{
                  padding: '18px 20px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                    Studio Location
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Karachi, Pakistan
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    Available for in-person meetings & Google Meet
                  </div>
                </div>
              </div>

              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/has_sanwebstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass"
                style={{
                  padding: '18px 20px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(225, 48, 108, 0.15)',
                    color: '#E1306C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Instagram size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                    Instagram Updates
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    @has_sanwebstudio
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    Behind-the-scenes & design concepts
                  </div>
                </div>
              </a>
            </div>

            {/* Our Promise Badge */}
            <div
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(34, 211, 238, 0.04)',
                border: '1px solid rgba(34, 211, 238, 0.2)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}
            >
              <ShieldCheck size={20} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  Clear Scopes & Honest Quotations
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px', lineHeight: 1.5 }}>
                  We never pressure you into unnecessary features. You receive honest advice on what will genuinely move your business forward.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div>
            <ContactForm
              prefilledService={prefilledService}
              prefilledMessage={prefilledMessage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
