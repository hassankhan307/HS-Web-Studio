import SectionHeading from '../components/SectionHeading';
import { ShieldCheck, Zap, Code2, Users2, Smartphone, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="section" id="why">
      <div className="container">
        <SectionHeading
          badge="Why Partner With HS Web Studio"
          title="Engineering Standards Built for Real Business Growth"
          description="We reject generic bloated templates, convoluted jargon, and non-performing websites. Here is the foundation behind every project we deliver."
        />

        {/* Bento Grid Architecture */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px'
          }}
        >
          {/* Card 1: 8 Cols - Custom Built & Performance */}
          <div
            className="card-glass bento-card-lg"
            style={{
              gridColumn: 'span 7',
              padding: '36px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-medium)',
              background: 'linear-gradient(135deg, rgba(20, 31, 61, 0.7) 0%, rgba(10, 17, 34, 0.9) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '280px'
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--accent-cyan-dim)',
                  border: '1px solid var(--border-accent)',
                  color: 'var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <Code2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '12px' }}>
                100% Custom Engineering — Never Off-The-Shelf Bloat
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Most agencies reuse generic WordPress or Wix themes overloaded with 40+ third-party plugins that drag load times down. We build clean, bespoke code architectures tailored specifically to your branding and operational workflows.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginTop: '24px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <span style={{ fontSize: '0.8rem', padding: '4px 10px', borderRadius: 'var(--radius-xs)', backgroundColor: 'rgba(34, 211, 238, 0.1)', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                ✓ Zero Bloatware
              </span>
              <span style={{ fontSize: '0.8rem', padding: '4px 10px', borderRadius: 'var(--radius-xs)', backgroundColor: 'rgba(34, 211, 238, 0.1)', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                ✓ Clean Semantic Code
              </span>
              <span style={{ fontSize: '0.8rem', padding: '4px 10px', borderRadius: 'var(--radius-xs)', backgroundColor: 'rgba(34, 211, 238, 0.1)', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                ✓ High Maintainability
              </span>
            </div>
          </div>

          {/* Card 2: 5 Cols - Mobile First Realities */}
          <div
            className="card-glass bento-card-sm"
            style={{
              gridColumn: 'span 5',
              padding: '36px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '280px'
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  color: '#60a5fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <Smartphone size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>
                Obsessive Mobile Usability
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.93rem' }}>
                Over 78% of Pakistani and international web visitors discover you on a smartphone. We engineer tap targets, checkout flows, and navigation menus specifically for thumb-driven mobile ergonomics.
              </p>
            </div>

            <div style={{ marginTop: '20px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#60a5fa' }}>78%+</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Mobile discovery conversion focus</div>
            </div>
          </div>

          {/* Card 3: 4 Cols - Performance & Speed */}
          <div
            className="card-glass bento-card-sm"
            style={{
              gridColumn: 'span 4',
              padding: '32px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                color: '#4ade80',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}
            >
              <Zap size={22} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Speed Optimized</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Every second of delay loses up to 10% of potential conversions. We optimize images, bundle sizes, and caching headers to ensure fast load times.
            </p>
          </div>

          {/* Card 4: 4 Cols - Direct WhatsApp & Local Market Readiness */}
          <div
            className="card-glass bento-card-sm"
            style={{
              gridColumn: 'span 4',
              padding: '32px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(37, 211, 102, 0.15)',
                border: '1px solid rgba(37, 211, 102, 0.3)',
                color: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}
            >
              <Headphones size={22} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Direct Local Integration</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              WhatsApp order triggers, Cash on Delivery mechanics, Google Maps pins, and Pakistani courier API compatibility built right into the platform.
            </p>
          </div>

          {/* Card 5: 4 Cols - Transparent Ownership */}
          <div
            className="card-glass bento-card-sm"
            style={{
              gridColumn: 'span 4',
              padding: '32px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(168, 85, 247, 0.15)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                color: '#c084fc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}
            >
              <ShieldCheck size={22} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>100% Asset Ownership</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              You own your source code, your domain, and your content. We provide transparent handover documentation so you are never held hostage.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bento-card-lg, .bento-card-sm {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
