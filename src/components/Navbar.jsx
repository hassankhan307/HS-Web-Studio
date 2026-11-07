import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, MessageCircle, Calculator } from 'lucide-react';
import { services } from '../data/services';

export default function Navbar({ onOpenQuoteModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
    setMobileServicesOpen(false);
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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        maxWidth: '100%',
        zIndex: 100,
        backgroundColor: scrolled || mobileMenuOpen ? 'rgba(5, 7, 15, 0.96)' : 'rgba(5, 7, 15, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled || mobileMenuOpen ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all 0.25s ease'
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
            gap: '10px',
            textDecoration: 'none',
            flexShrink: 0
          }}
          aria-label="HS Web Studio Home"
        >
          <img
            src="/assets/images/logo.png"
            alt="HS Web Studio Logo"
            style={{
              width: '34px',
              height: '34px',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.18rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)'
            }}
          >
            HS<span style={{ color: 'var(--accent-cyan)' }}>Web</span>Studio
          </span>
        </Link>

        {/* Desktop Navigation Links (hidden on mobile via CSS) */}
        <nav
          className="desktop-only"
          style={{
            alignItems: 'center',
            gap: '24px'
          }}
          aria-label="Main Navigation"
        >
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              fontSize: '0.92rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)'
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              fontSize: '0.92rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)'
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
                fontSize: '0.92rem',
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
                size={14}
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
                  width: '300px',
                  backgroundColor: 'rgba(10, 17, 34, 0.98)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg), 0 0 25px rgba(34, 211, 238, 0.1)',
                  padding: '10px',
                  zIndex: 110,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <Link
                  to="/services"
                  style={{
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--accent-cyan)',
                    backgroundColor: 'rgba(34, 211, 238, 0.08)',
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
                      fontSize: '0.85rem',
                      color:
                        location.pathname === `/services/${srv.slug}`
                          ? 'var(--accent-cyan)'
                          : 'var(--text-secondary)',
                      backgroundColor:
                        location.pathname === `/services/${srv.slug}`
                          ? 'rgba(34, 211, 238, 0.1)'
                          : 'transparent'
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>{srv.shortTitle}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
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
              fontSize: '0.92rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)'
            })}
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/estimator"
            style={({ isActive }) => ({
              fontSize: '0.92rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            })}
          >
            <Calculator size={14} style={{ color: 'var(--accent-cyan)' }} />
            <span>Estimator</span>
          </NavLink>

                    <NavLink
            to="/reviews"
            style={({ isActive }) => ({
              fontSize: '0.92rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)'
            })}
          >
            Reviews
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              fontSize: '0.92rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)'
            })}
          >
            Contact
          </NavLink>
        </nav>

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onOpenQuoteModal}
            className="btn btn-primary btn-sm desktop-only"
            style={{ cursor: 'pointer' }}
          >
            <Sparkles size={14} />
            <span>Get a Quote</span>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="mobile-only"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-surface-alt)',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            width: '100%',
            height: 'calc(100vh - var(--nav-height))',
            backgroundColor: 'rgba(5, 7, 15, 0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderTop: '1px solid var(--border-subtle)',
            zIndex: 999,
            padding: '20px 18px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxSizing: 'border-box'
          }}
        >
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            style={({ isActive }) => ({
              fontSize: '1.15rem',
              fontWeight: 600,
              padding: '12px 0',
              borderBottom: '1px solid var(--border-subtle)',
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)'
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            style={({ isActive }) => ({
              fontSize: '1.15rem',
              fontWeight: 600,
              padding: '12px 0',
              borderBottom: '1px solid var(--border-subtle)',
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)'
            })}
          >
            About Studio
          </NavLink>

          {/* Mobile Services Accordion */}
          <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>
            <div
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                padding: '12px 0',
                color: 'var(--text-primary)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <span>Services</span>
              <ChevronDown
                size={18}
                style={{
                  transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                  color: 'var(--accent-cyan)'
                }}
              />
            </div>

            {mobileServicesOpen && (
              <div
                style={{
                  paddingLeft: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  marginTop: '6px'
                }}
              >
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--accent-cyan)',
                    fontWeight: 700,
                    padding: '6px 0'
                  }}
                >
                  All Services Overview &rarr;
                </Link>
                {services.map((srv) => (
                  <Link
                    key={srv.slug}
                    to={`/services/${srv.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      padding: '8px 0',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.03)'
                    }}
                  >
                    {srv.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
            style={({ isActive }) => ({
              fontSize: '1.15rem',
              fontWeight: 600,
              padding: '12px 0',
              borderBottom: '1px solid var(--border-subtle)',
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)'
            })}
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/estimator"
            onClick={() => setMobileMenuOpen(false)}
            style={({ isActive }) => ({
              fontSize: '1.15rem',
              fontWeight: 600,
              padding: '12px 0',
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
            to="/reviews"
            onClick={() => setMobileMenuOpen(false)}
            style={({ isActive }) => ({
              fontSize: '1.15rem',
              fontWeight: 600,
              padding: '12px 0',
              borderBottom: '1px solid var(--border-subtle)',
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)'
            })}
          >
            Client Reviews
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={({ isActive }) => ({
              fontSize: '1.15rem',
              fontWeight: 600,
              padding: '12px 0',
              borderBottom: '1px solid var(--border-subtle)',
              color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)'
            })}
          >
            Contact
          </NavLink>

          {/* Mobile Bottom CTA Action Stack */}
          <div style={{ marginTop: 'auto', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
            >
              <Sparkles size={18} />
              <span>Get a Free Quote</span>
            </button>

            <a
              href="https://wa.me/923312901930"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              style={{ width: '100%' }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp (+92 331 2901930)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
