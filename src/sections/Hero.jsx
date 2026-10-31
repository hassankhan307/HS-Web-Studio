import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Smartphone, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: 'clamp(32px, 6vw, 64px)',
        paddingBottom: 'clamp(56px, 8vw, 110px)',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%'
      }}
    >
      {/* Safe Ambient background glow (constrained to 100% max-width) */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(100%, 640px)',
          height: '360px',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.14) 0%, rgba(59, 130, 246, 0.06) 50%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(36px, 6vw, 64px)',
            alignItems: 'center'
          }}
        >
          {/* Left Text Column */}
          <div style={{ width: '100%', maxWidth: '100%' }}>
            {/* Location & Studio Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(34, 211, 238, 0.1)',
                border: '1px solid rgba(34, 211, 238, 0.3)',
                color: 'var(--accent-cyan)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
                marginBottom: '20px',
                maxWidth: '100%',
                flexWrap: 'wrap'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-cyan)',
                  boxShadow: '0 0 10px var(--accent-cyan)',
                  flexShrink: 0
                }}
              />
              <span>Web Development Studio · Karachi, Pakistan</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2rem, 5.2vw, 3.6rem)',
                fontWeight: 800,
                lineHeight: 1.16,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '18px'
              }}
            >
              Digital Experiences That Move{' '}
              <span className="text-gradient-cyan">Businesses Forward.</span>
            </h1>

            {/* Supporting Description */}
            <p
              style={{
                fontSize: 'clamp(0.98rem, 1.4vw, 1.15rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '32px',
                maxWidth: '560px'
              }}
            >
              We engineer bespoke websites, powerful e-commerce storefronts, and custom web applications that empower ambitious businesses to establish market authority and turn visitors into paying customers.
            </p>

            {/* Action CTAs - Responsive button stack */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                alignItems: 'center',
                marginBottom: '36px',
                width: '100%'
              }}
            >
              <button
                onClick={onOpenQuoteModal}
                className="btn btn-primary btn-lg hero-cta-btn"
                style={{ cursor: 'pointer' }}
              >
                <Sparkles size={18} />
                <span>Start a Project</span>
              </button>

              <Link to="/portfolio" className="btn btn-ghost btn-lg hero-cta-btn">
                <span>Explore Our Work</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px 20px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                fontSize: '0.84rem',
                fontWeight: 600
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Smartphone size={15} style={{ color: 'var(--accent-cyan)' }} />
                <span>Mobile-First</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={15} style={{ color: 'var(--accent-cyan)' }} />
                <span>Fast & Optimized</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={15} style={{ color: 'var(--accent-cyan)' }} />
                <span>Custom Clean Code</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} style={{ color: 'var(--accent-cyan)' }} />
                <span>Business-Focused</span>
              </div>
            </div>
          </div>

          {/* Right Visual Composition: Multi-Device Agency Mockup (100% Mobile Safe) */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              margin: '0 auto'
            }}
          >
            {/* Desktop / Tablet Mockup Container */}
            <div
              className="card-glass"
              style={{
                width: '100%',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-lg), 0 0 35px rgba(34, 211, 238, 0.12)',
                backgroundColor: 'rgba(10, 17, 34, 0.95)'
              }}
            >
              {/* Browser Header Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  backgroundColor: 'rgba(5, 7, 15, 0.85)',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                </div>
                <div
                  style={{
                    flexGrow: 1,
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '0.72rem',
                    color: 'var(--text-dim)',
                    fontFamily: 'var(--font-mono)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  https://hswebstudio.site
                </div>
              </div>

              {/* Inside Mockup Screen */}
              <div style={{ padding: 'clamp(16px, 3vw, 24px)' }}>
                {/* Mock Nav */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '4px', backgroundColor: 'var(--accent-cyan)' }} />
                    <div style={{ width: '70px', height: '8px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.4)' }} />
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ width: '32px', height: '8px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
                    <div style={{ width: '48px', height: '16px', borderRadius: '4px', backgroundColor: 'var(--accent-cyan-dim)', border: '1px solid var(--accent-cyan)' }} />
                  </div>
                </div>

                {/* Live Client Showcase Feature within Mockup */}
                <div
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.12) 0%, rgba(59, 130, 246, 0.1) 100%)',
                    border: '1px solid rgba(34, 211, 238, 0.25)',
                    marginBottom: '16px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.72rem', color: '#4ade80', fontWeight: 700 }}>● Live Client Store</span>
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>Shopify Retail</span>
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                    Ziphyer Fashion
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    High-conversion D2C storefront with fast mobile checkout & local courier delivery.
                  </div>
                </div>

                {/* Mock Cards Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  <div style={{ padding: '10px 8px', borderRadius: '6px', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>Speed</div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fff', marginTop: '2px' }}>99/100</div>
                  </div>
                  <div style={{ padding: '10px 8px', borderRadius: '6px', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.68rem', color: '#60a5fa', fontWeight: 700 }}>Design</div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fff', marginTop: '2px' }}>Custom</div>
                  </div>
                  <div style={{ padding: '10px 8px', borderRadius: '6px', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.68rem', color: '#4ade80', fontWeight: 700 }}>WhatsApp</div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fff', marginTop: '2px' }}>Direct</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 520px) {
          .hero-cta-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
