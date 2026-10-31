import SectionHeading from '../components/SectionHeading';
import { ShieldCheck, Zap, Code2, Headphones, Smartphone } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="section" id="why">
      <div className="container">
        <SectionHeading
          badge="Why Partner With HS Web Studio"
          title="Engineering Standards Built for Real Business Growth"
          description="We reject generic bloated templates, convoluted jargon, and non-performing websites. Here is the foundation behind every project we deliver."
        />

        {/* Responsive Bento Grid */}
        <div className="bento-container">
          {/* Card 1: 7 Cols Desktop, 1 Col Mobile */}
          <div className="card-glass bento-card bento-span-7">
            <div>
              <div className="bento-icon-box" style={{ backgroundColor: 'var(--accent-cyan-dim)', color: 'var(--accent-cyan)', borderColor: 'var(--border-accent)' }}>
                <Code2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>
                100% Custom Engineering — Never Off-The-Shelf Bloat
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.92rem' }}>
                Most agencies reuse generic WordPress or Wix themes overloaded with 40+ third-party plugins that drag load times down. We build clean, bespoke code architectures tailored specifically to your branding and operational workflows.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <span className="bento-pill">✓ Zero Bloatware</span>
              <span className="bento-pill">✓ Clean Semantic Code</span>
              <span className="bento-pill">✓ High Maintainability</span>
            </div>
          </div>

          {/* Card 2: 5 Cols Desktop, 1 Col Mobile */}
          <div className="card-glass bento-card bento-span-5">
            <div>
              <div className="bento-icon-box" style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
                <Smartphone size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>
                Obsessive Mobile Usability
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.92rem' }}>
                Over 78% of Pakistani and international web visitors discover you on a smartphone. We engineer tap targets, checkout flows, and navigation menus specifically for thumb-driven mobile ergonomics.
              </p>
            </div>

            <div style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#60a5fa' }}>78%+</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Mobile discovery conversion focus</div>
            </div>
          </div>

          {/* Card 3: 4 Cols Desktop, 1 Col Mobile */}
          <div className="card-glass bento-card bento-span-4">
            <div className="bento-icon-box" style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', borderColor: 'rgba(34, 197, 94, 0.3)' }}>
              <Zap size={22} />
            </div>
            <h3 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>Speed Optimized</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
              Every second of delay loses up to 10% of potential conversions. We optimize images, bundle sizes, and caching headers to ensure fast load times.
            </p>
          </div>

          {/* Card 4: 4 Cols Desktop, 1 Col Mobile */}
          <div className="card-glass bento-card bento-span-4">
            <div className="bento-icon-box" style={{ backgroundColor: 'rgba(37, 211, 102, 0.15)', color: '#25D366', borderColor: 'rgba(37, 211, 102, 0.3)' }}>
              <Headphones size={22} />
            </div>
            <h3 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>Direct Local Integration</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
              WhatsApp order triggers, Cash on Delivery mechanics, Google Maps pins, and Pakistani courier API compatibility built right into the platform.
            </p>
          </div>

          {/* Card 5: 4 Cols Desktop, 1 Col Mobile */}
          <div className="card-glass bento-card bento-span-4">
            <div className="bento-icon-box" style={{ backgroundColor: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', borderColor: 'rgba(168, 85, 247, 0.3)' }}>
              <ShieldCheck size={22} />
            </div>
            <h3 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>100% Asset Ownership</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
              You own your source code, your domain, and your content. We provide transparent handover documentation so you are never held hostage.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .bento-container {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 20px;
          width: 100%;
        }
        .bento-card {
          padding: 28px 24px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          box-sizing: border-box;
        }
        .bento-span-7 { grid-column: span 7; }
        .bento-span-5 { grid-column: span 5; }
        .bento-span-4 { grid-column: span 4; }
        .bento-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .bento-pill {
          font-size: 0.78rem;
          padding: 4px 10px;
          border-radius: var(--radius-xs);
          background-color: rgba(34, 211, 238, 0.1);
          color: var(--accent-cyan);
          font-weight: 600;
        }
        @media (max-width: 900px) {
          .bento-container {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .bento-span-7, .bento-span-5, .bento-span-4 {
            grid-column: span 1 !important;
          }
          .bento-card {
            padding: 22px 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
