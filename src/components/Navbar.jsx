import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, ExternalLink, Calculator } from 'lucide-react';
import { services } from '../data/services';

export default function Navbar({ onOpenQuoteModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu & dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close services dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(5, 7, 15, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 'var(--nav-height)',
          position: 'relative'
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none'
          }}
          aria-label="HS Web Studio Homepage"
        >
          <img
            src="/assets/images/logo.png"
            alt="HS Web Studio Logo"
            style={{
              width: '38px',
              height: '38px',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.28rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)'
            }}
          >
            HS<span style={{ color: 'var(--accent-cyan)' }}>Web</span>Studio
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px'
          }}
          aria-label="Main Navigation"
        >
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              fontSize: '0.94rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              transition: 'color var(--transition-fast)'
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              fontSize: '0.94rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              transition: 'color var(--transition-fast)'
            })}
          >
            About
          </NavLink>

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => setServicesDropdownOpen((prev) => !prev)}
              aria-expanded={servicesDropdownOpen}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '0.94rem',
                fontWeight: 500,
                color: location.pathname.startsWith('/services')
                  ? 'var(--accent-cyan)'
                  : 'var(--text-secondary)',
                cursor: 'pointer',
                padding: '6px 0'
              }}
            >
              <span>Services</span>
              <ChevronDown
                size={15}
                style={{
                  transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease'
                }}
              />
            </button>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '320px',
                  backgroundColor: 'rgba(10, 17, 34, 0.98)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg), 0 0 25px rgba(34, 211, 238, 0.1)',
                  padding: '12px',
                  zIndex: 110,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  animation: 'dropdownFadeIn 0.2s ease'
                }}
              >
                <Link
                  to="/services"
                  style={{
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--accent-cyan)',
                    backgroundColor: 'rgba(34, 211, 238, 0.08)',
                    marginBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>All Services Overview</span>
                  <span>&rarr;</span>
                </Link>

                {services.map((srv) => (
                  <Link
                    key={srv.slug}
                    to={`/services/${srv.slug}`}
                    style={{
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.88rem',
                      color:
                        location.pathname === `/services/${srv.slug}`
                          ? 'var(--accent-cyan)'
                          : 'var(--text-secondary)',
                      backgroundColor:
                        location.pathname === `/services/${srv.slug}`
                          ? 'rgba(34, 211, 238, 0.1)'
                          : 'transparent',
                      transition: 'all 0.15s ease',
                      display: 'block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        location.pathname === `/services/${srv.slug}`
                          ? 'rgba(34, 211, 238, 0.1)'
                          : 'transparent';
                      e.currentTarget.style.color =
                        location.pathname === `/services/${srv.slug}`
                          ? 'var(--accent-cyan)'
                          : 'var(--text-secondary)';
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>{srv.shortTitle}</div>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-dim)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {srv.eyebrow}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/portfolio"
            style={({ isActive }) => ({
              fontSize: '0.94rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              transition: 'color var(--transition-fast)'
            })}
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/estimator"
            style={({ isActive }) => ({
              fontSize: '0.94rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              transition: 'color var(--transition-fast)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            })}
          >
            <Calculator size={14} style={{ color: 'var(--accent-cyan)' }} />
            <span>Cost Estimator</span>
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              fontSize: '0.94rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              transition: 'color var(--transition-fast)'
            })}
          >
            Contact
          </NavLink>
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={onOpenQuoteModal}
            className="btn btn-primary btn-sm desktop-only"
            style={{ cursor: 'pointer' }}
          >
            <Sparkles size={15} />
            <span>Get a Quote</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-surface-alt)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(5, 7, 15, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border-subtle)',
            zIndex: 99,
            padding: '24px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              fontSize: '1.15rem',
              fontWeight: 600,
              padding: '10px 0',
              borderBottom: '1px solid var(--border-subtle)',
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)'
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              fontSize: '1.15rem',
              fontWeight: 600,
              padding: '10px 0',
              borderBottom: '1px solid var(--border-subtle)',
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)'
            })}
          >
            About Studio
          </NavLink>

          {/* Mobile Services Accordion */}
          <div>
            <div
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                padding: '10px 0',
                color: 'var(--text-primary)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>Services</span>
              <Link
                to="/services"
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: 600
                }}
              >
                View All
              </Link>
            </div>
            <div
              style={{
                paddingLeft: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '6px'
              }}
            >
              {services.map((srv) => (
                <Link
                  key={srv.slug}
                  to={`/services/${srv.slug}`}
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    padding: '6px 0'
                  }}
                >
                  {srv.title}
                </Link>
              ))}
            </div>
          </div>

          <NavLink
            to="/portfolio"
            style={({ isActive }) => ({
              fontSize: '1.15rem',
              fontWeight: 600,
              padding: '10px 0',
              borderBottom: '1px solid var(--border-subtle)',
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)'
            })}
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/estimator"
            style={({ isActive }) => ({
              fontSize: '1.15rem',
              fontWeight: 600,
              padding: '10px 0',
              borderBottom: '1px solid var(--border-subtle)',
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            })}
          >
            <Calculator size={18} style={{ color: 'var(--accent-cyan)' }} />
            <span>Cost & Timeline Estimator</span>
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              fontSize: '1.15rem',
              fontWeight: 600,
              padding: '10px 0',
              borderBottom: '1px solid var(--border-subtle)',
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)'
            })}
          >
            Contact Us
          </NavLink>

          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <Sparkles size={16} />
              <span>Get a Free Quote</span>
            </button>

            <a
              href="https://wa.me/923312901930"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%' }}
            >
              <span>Chat on WhatsApp (+92 331 2901930)</span>
            </a>
          </div>
        </div>
      )}

      {/* Responsive Style Overrides */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .desktop-only { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translate(-50%, -8px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </header>
  );
}
