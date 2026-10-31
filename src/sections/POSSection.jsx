import { Link } from 'react-router-dom';
import { Cpu, Check, ArrowRight } from 'lucide-react';

const POS_FEATURES = [
  'Touch-screen barcode checkout & thermal receipt printing',
  'Multi-variant tracking: Size (S/M/L/XL) & Color breakdown',
  'Dual pricing engine: Retail and Wholesale rates',
  'Real-time cloud inventory synchronization across locations',
  'Customer purchase history & store credit ledgers',
  'Daily sales, expenses, and net profit analytics on your phone'
];

export default function POSSection({ onAskAboutPOS }) {
  return (
    <section className="section" id="pos" style={{ backgroundColor: 'rgba(10, 17, 34, 0.5)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(32px, 5vw, 60px)',
            alignItems: 'center'
          }}
        >
          {/* Left Text Info */}
          <div>
            <div className="section-badge">
              <span className="badge-dot" />
              <span>Specialized Retail Software</span>
            </div>

            <h2 className="section-title">
              Run Your Retail Business Smarter with a Custom POS
            </h2>

            <p className="section-description" style={{ marginBottom: '24px' }}>
              Designed specifically for fashion boutiques, apparel shops, and retail stores in Karachi that struggle with off-the-shelf software. Track product variants, manage cashier shifts, print thermal receipts, and inspect daily earnings from your mobile device.
            </p>

            <ul
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                gap: '12px',
                marginBottom: '32px'
              }}
            >
              {POS_FEATURES.map((feat, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '0.86rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <Check size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {onAskAboutPOS ? (
                <button
                  onClick={() => onAskAboutPOS('Retail POS System')}
                  className="btn btn-primary btn-lg pos-btn"
                >
                  <Cpu size={18} />
                  <span>Ask About POS Solutions</span>
                </button>
              ) : (
                <Link to="/contact" className="btn btn-primary btn-lg pos-btn">
                  <Cpu size={18} />
                  <span>Ask About POS Solutions</span>
                </Link>
              )}

              <Link to="/services/pos-systems" className="btn btn-secondary btn-lg pos-btn">
                <span>View Full POS Specifications</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Visual: Interactive POS Dashboard Mockup */}
          <div
            className="card-glass"
            style={{
              padding: 'clamp(18px, 3vw, 28px)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-accent)',
              backgroundColor: 'rgba(7, 12, 24, 0.95)',
              boxShadow: 'var(--shadow-lg), 0 0 35px rgba(34, 211, 238, 0.12)',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            {/* Top Stat Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px',
                marginBottom: '16px'
              }}
            >
              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(34, 211, 238, 0.08)',
                  border: '1px solid rgba(34, 211, 238, 0.2)'
                }}
              >
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Today's Sales
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.25rem, 3vw, 1.55rem)',
                    fontWeight: 800,
                    color: 'var(--accent-cyan)',
                    marginTop: '2px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Rs 84,200
                </div>
                <div style={{ fontSize: '0.7rem', color: '#4ade80', marginTop: '2px' }}>
                  ↑ 14% vs yesterday
                </div>
              </div>

              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Orders
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.25rem, 3vw, 1.55rem)',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginTop: '2px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  37 Orders
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                  Avg Rs 2,275
                </div>
              </div>
            </div>

            {/* Simulated Live Hourly Bar Graph */}
            <div
              style={{
                padding: '14px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  Hourly Checkout Flow
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>● Tariq Rd Register</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  height: '65px',
                  gap: '6px'
                }}
              >
                {[45, 65, 30, 85, 95, 70, 80, 60, 90].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      backgroundColor: i === 4 ? 'var(--accent-cyan)' : 'rgba(34, 211, 238, 0.25)',
                      borderRadius: '3px 3px 0 0'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Variant Matrix Live Preview */}
            <div style={{ padding: '14px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>
                Apparel Variant Matrix (Live Stock)
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                  <span>Kurti · Teal (Size M)</span>
                  <span style={{ color: '#4ade80', fontWeight: 600 }}>14 in stock</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                  <span>Evening Gown (Size S)</span>
                  <span style={{ color: '#f59e0b', fontWeight: 600 }}>2 left (Low)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                  <span>Linen Pant (Size L)</span>
                  <span style={{ color: '#4ade80', fontWeight: 600 }}>8 in stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 520px) {
          .pos-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
