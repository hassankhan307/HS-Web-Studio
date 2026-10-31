import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, ArrowUpRight, MessageCircle } from 'lucide-react';
import { services } from '../data/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#03050a',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '64px'
          }}
        >
          {/* Brand Info */}
          <div>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                marginBottom: '20px'
              }}
            >
              <img
                src="/assets/images/logo.png"
                alt="HS Web Studio Logo"
                style={{
                  width: '36px',
                  height: '36px',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)'
                }}
              >
                HS<span style={{ color: 'var(--accent-cyan)' }}>Web</span>Studio
              </span>
            </Link>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.92rem',
                lineHeight: 1.7,
                marginBottom: '24px'
              }}
            >
              Digital agency based in Karachi, Pakistan. We build modern, high-converting websites, Shopify stores, and custom software that help businesses expand and succeed online.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <MapPin size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span>Karachi, Pakistan</span>
              </div>
              <a
                href="https://wa.me/923312901930"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}
              >
                <Phone size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span>+92 331 2901930</span>
              </a>
              <a
                href="mailto:hswebstudio3@gmail.com"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}
              >
                <Mail size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span>hswebstudio3@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: 'var(--text-primary)',
                fontSize: '1rem',
                fontWeight: 700,
                marginBottom: '20px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase'
              }}
            >
              Studio
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  About HS Web Studio
                </Link>
              </li>
              <li>
                <Link to="/portfolio" style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  Featured Portfolio
                </Link>
              </li>
              <li>
                <Link to="/estimator" style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  Project Cost Estimator
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4
              style={{
                color: 'var(--text-primary)',
                fontSize: '1rem',
                fontWeight: 700,
                marginBottom: '20px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase'
              }}
            >
              Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {services.slice(0, 6).map((srv) => (
                <li key={srv.slug}>
                  <Link
                    to={`/services/${srv.slug}`}
                    style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  style={{ color: 'var(--accent-cyan)', fontSize: '0.92rem', fontWeight: 600 }}
                >
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h4
              style={{
                color: 'var(--text-primary)',
                fontSize: '1rem',
                fontWeight: 700,
                marginBottom: '20px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase'
              }}
            >
              Connect
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
              Have an idea or need an estimate for your upcoming project? Connect directly with our team.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="https://wa.me/923312901930"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
                style={{ width: 'fit-content' }}
              >
                <MessageCircle size={16} />
                <span>WhatsApp (+92 331 2901930)</span>
              </a>

              <a
                href="https://www.instagram.com/has_sanwebstudio/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  width: 'fit-content'
                }}
              >
                <Instagram size={16} style={{ color: '#E1306C' }} />
                <span>@has_sanwebstudio</span>
                <ArrowUpRight size={14} style={{ color: 'var(--text-dim)' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.85rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            &copy; {currentYear} HS Web Studio. All rights reserved. Built with React & Vite in Karachi, Pakistan.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms & Conditions</span>
            <span>·</span>
            <a
              href="https://hswebstudio.site/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-dim)' }}
            >
              XML Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
