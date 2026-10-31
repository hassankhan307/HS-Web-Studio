import SectionHeading from '../components/SectionHeading';
import { pricingPackages } from '../data/pricing';
import { Check, Sparkles, MessageCircle } from 'lucide-react';

export default function Pricing({ onSelectPackage }) {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <SectionHeading
          badge="Transparent Engagements"
          title="Project Packages Built for Your Scale"
          description="We tailor every engagement to your exact functional scope. Choose a structured tier below or request an itemized proposal for custom requirements."
        />

        {/* Responsive Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(20px, 3vw, 28px)',
            alignItems: 'stretch',
            marginBottom: '36px'
          }}
        >
          {pricingPackages.map((pkg) => {
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className="card-glass"
                style={{
                  padding: 'clamp(22px, 4vw, 36px) clamp(18px, 3vw, 28px)',
                  borderRadius: 'var(--radius-md)',
                  border: isPopular ? '2px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  backgroundColor: isPopular ? 'rgba(14, 23, 46, 0.9)' : 'var(--bg-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: isPopular ? 'var(--shadow-glow)' : 'var(--shadow-sm)',
                  boxSizing: 'border-box'
                }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'var(--accent-cyan)',
                      color: '#04111d',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      boxShadow: '0 2px 10px rgba(34, 211, 238, 0.4)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Most Popular Choice
                  </div>
                )}

                {/* Tier Header */}
                <div style={{ marginBottom: '18px', marginTop: isPopular ? '6px' : 0 }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: isPopular ? 'var(--accent-cyan)' : 'var(--text-dim)',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {pkg.badge}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '4px' }}>
                    {pkg.name}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6, marginTop: '6px' }}>
                    {pkg.audience}
                  </p>
                </div>

                {/* Scope Note */}
                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '20px'
                  }}
                >
                  <strong>Scope:</strong> {pkg.scope}
                </div>

                {/* Features List */}
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginBottom: '28px',
                    flexGrow: 1
                  }}
                >
                  {pkg.features.map((feat, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.86rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5
                      }}
                    >
                      <Check
                        size={15}
                        style={{
                          color: isPopular ? 'var(--accent-cyan)' : '#60a5fa',
                          flexShrink: 0,
                          marginTop: '3px'
                        }}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`btn ${isPopular ? 'btn-primary' : 'btn-secondary'} btn-lg`}
                  style={{ width: '100%', cursor: 'pointer' }}
                >
                  {isPopular ? <Sparkles size={17} /> : <MessageCircle size={17} />}
                  <span>{pkg.ctaText}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Pricing Notice */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto',
            color: 'var(--text-dim)',
            fontSize: '0.82rem',
            lineHeight: 1.6
          }}
        >
          💡 <em>Final investment is determined by your specific feature requirements, integrations, and content readiness. We provide a transparent itemized quotation before any agreement or deposit.</em>
        </div>
      </div>
    </section>
  );
}
