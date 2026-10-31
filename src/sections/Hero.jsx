import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Smartphone, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '60px',
        paddingBottom: '110px',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glows */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '720px',
          height: '420px',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, rgba(59, 130, 246, 0.08) 45%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}
        >
          {/* Left Text Column */}
          <div>
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
                fontSize: '0.84rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
                marginBottom: '24px'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-cyan)',
                  boxShadow: '0 0 10px var(--accent-cyan)'
                }}
              />
              <span>Web Development Studio · Karachi, Pakistan</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '22px'
              }}
            >
              Digital Experiences That Move{' '}
              <span className="text-gradient-cyan">Businesses Forward.</span>
            </h1>

            {/* Supporting Description */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '36px',
                maxWidth: '560px'
              }}
            >
              We engineer bespoke websites, powerful e-commerce storefronts, and custom web applications that empower ambitious businesses to establish market authority and turn visitors into paying customers.
            </p>

            {/* Action CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                alignItems: 'center',
                marginBottom: '40px'
              }}
            >
              <button
                onClick={onOpenQuoteModal}
                className="btn btn-primary btn-lg"
                style={{ cursor: 'pointer' }}
              >
                <Sparkles size={18} />
                <span>Start a Project</span>
              </button>

              <Link to="/portfolio" className="btn btn-ghost btn-lg">
                <span>Explore Our Work</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                fontSize: '0.86rem',
                fontWeight: 600
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Smartphone size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>Mobile-First</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>Lightning Fast</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>Production Clean</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>Business-Focused</span>
              </div>
            </div>
          </div>

          {/* Right Visual Composition: Multi-Device Agency Mockup */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* Main Desktop Mockup Frame */}
            <div
              className="card-glass"
              style={{
                width: '100%',
                maxWidth: '540px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-lg), 0 0 45px rgba(34, 211, 238, 0.15)',
                backgroundColor: 'rgba(10, 17, 34, 0.95)'
              }}
            >
              {/* Browser Header Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 18px',
                  backgroundColor: 'rgba(5, 7, 15, 0.8)',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                </div>
                <div
                  style={{
                    flexGrow: 1,
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '3px 12px',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '0.75rem',
                    color: 'var(--text-dim)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  https://hswebstudio.site
                </div>
              </div>

              {/* Inside Mockup Screen */}
              <div style={{ padding: '24px' }}>
                {/* Mock Nav */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '6px', backgroundColor: 'var(--accent-cyan)' }} />
                    <div style={{ width: '80px', height: '10px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.4)' }} />
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ width: '40px', height: '8px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
                    <div style={{ width: '40px', height: '8px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
                    <div style={{ width: '60px', height: '18px', borderRadius: '4px', backgroundColor: 'var(--accent-cyan-dim)', border: '1px solid var(--accent-cyan)' }} />
                  </div>
                </div>

                {/* Mock Hero Banner */}
                <div
                  style={{
                    padding: '24px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                    border: '1px solid rgba(34, 211, 238, 0.2)',
                    marginBottom: '20px'
                  }}
                >
                  <div style={{ width: '70%', height: '18px', borderRadius: '4px', backgroundColor: 'var(--text-primary)', marginBottom: '10px' }} />
                  <div style={{ width: '90%', height: '10px', borderRadius: '4px', backgroundColor: 'var(--text-dim)', marginBottom: '6px' }} />
                  <div style={{ width: '50%', height: '10px', borderRadius: '4px', backgroundColor: 'var(--text-dim)', marginBottom: '16px' }} />
                  <div style={{ width: '100px', height: '28px', borderRadius: '6px', backgroundColor: 'var(--accent-cyan)' }} />
                </div>

                {/* Mock Cards Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  <div style={{ padding: '14px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '4px', backgroundColor: 'var(--accent-cyan-dim)', marginBottom: '8px' }} />
                    <div style={{ width: '80%', height: '8px', borderRadius: '3px', backgroundColor: 'rgba(255, 255, 255, 0.5)', marginBottom: '6px' }} />
                    <div style={{ width: '60%', height: '6px', borderRadius: '3px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
                  </div>
                  <div style={{ padding: '14px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '4px', backgroundColor: 'rgba(59, 130, 246, 0.2)', marginBottom: '8px' }} />
                    <div style={{ width: '80%', height: '8px', borderRadius: '3px', backgroundColor: 'rgba(255, 255, 255, 0.5)', marginBottom: '6px' }} />
                    <div style={{ width: '60%', height: '6px', borderRadius: '3px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
                  </div>
                  <div style={{ padding: '14px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '4px', backgroundColor: 'rgba(99, 102, 241, 0.2)', marginBottom: '8px' }} />
                    <div style={{ width: '80%', height: '8px', borderRadius: '3px', backgroundColor: 'rgba(255, 255, 255, 0.5)', marginBottom: '6px' }} />
                    <div style={{ width: '60%', height: '6px', borderRadius: '3px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Mobile Phone Mockup Overlay */}
            <div
              className="card-glass desktop-only"
              style={{
                position: 'absolute',
                bottom: '-28px',
                right: '-18px',
                width: '180px',
                borderRadius: '24px',
                backgroundColor: 'rgba(5, 7, 15, 0.98)',
                border: '2px solid var(--border-accent)',
                padding: '14px 12px',
                boxShadow: 'var(--shadow-lg), 0 0 25px rgba(34, 211, 238, 0.2)',
                zIndex: 2
              }}
            >
              {/* Phone Notch */}
              <div style={{ width: '48px', height: '6px', borderRadius: '3px', backgroundColor: 'var(--border-subtle)', margin: '0 auto 12px auto' }} />
              {/* Phone Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ width: '60%', height: '8px', borderRadius: '4px', backgroundColor: 'var(--accent-cyan)' }} />
                <div style={{ width: '90%', height: '6px', borderRadius: '3px', backgroundColor: 'var(--text-dim)' }} />
                <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.04)', marginTop: '4px' }}>
                  <div style={{ fontSize: '0.68rem', color: '#4ade80', fontWeight: 700 }}>● Live Client Store</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff', marginTop: '2px' }}>Ziphyer Fashion</div>
                </div>
                <div style={{ width: '100%', height: '22px', borderRadius: '6px', backgroundColor: 'var(--accent-cyan)', marginTop: '4px' }} />
              </div>
            </div>

            {/* Floating Performance Pill */}
            <div
              className="card-glass desktop-only"
              style={{
                position: 'absolute',
                top: '-18px',
                left: '-20px',
                padding: '10px 16px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(10, 17, 34, 0.95)',
                border: '1px solid rgba(34, 211, 238, 0.4)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                zIndex: 2
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(34, 197, 94, 0.2)',
                  color: '#4ade80',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.78rem',
                  fontWeight: 800
                }}
              >
                99
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>Google PageSpeed</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>Core Web Vitals Pass</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
