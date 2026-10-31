import SectionHeading from '../components/SectionHeading';
import { pricingPackages } from '../data/pricing';
import { Check, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

export default function Pricing({ onSelectPackage }) {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <SectionHeading
          badge="Transparent Engagements"
          title="Project Packages Built for Your Scale"
          description="We tailor every engagement to your exact functional scope. Choose a structured tier below or request an itemized proposal for custom requirements."
        />

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '28px',
            alignItems: 'stretch',
            marginBottom: '40px'
          }}
        >
          {pricingPackages.map((pkg) => {
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className="card-glass"
                style={{
                  padding: '36px 30px',
                  borderRadius: 'var(--radius-md)',
                  border: isPopular ? '2px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  backgroundColor: isPopular ? 'rgba(14, 23, 46, 0.9)' : 'var(--bg-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: isPopular ? 'var(--shadow-glow)' : 'var(--shadow-sm)',
                  transition: 'transform 0.3s ease'
                }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'var(--accent-cyan)',
                      color: '#04111d',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: '4px 14px',
                      borderRadius: 'var(--radius-full)',
                      boxShadow: '0 2px 10px rgba(34, 211, 238, 0.4)'
                    }}
                  >
                    Most Popular Choice
                  </div>
                )}

                {/* Tier Header */}
                <div style={{ marginBottom: '20px' }}>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: isPopular ? 'var(--accent-cyan)' : 'var(--text-dim)',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {pkg.badge}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '4px' }}>
                    {pkg.name}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginTop: '8px' }}>
                    {pkg.audience}
                  </p>
                </div>

                {/* Scope Note */}
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.84rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '24px'
                  }}
                >
                  <strong>Scope:</strong> {pkg.scope}
                </div>

                {/* Features List */}
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginBottom: '32px',
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
                        fontSize: '0.88rem',
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
                  {isPopular ? <Sparkles size={18} /> : <MessageCircle size={18} />}
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
            fontSize: '0.85rem',
            lineHeight: 1.6
          }}
        >
          💡 <em>Final investment is determined by your specific feature requirements, integrations, and content readiness. We provide a transparent itemized quotation before any agreement or deposit.</em>
        </div>
      </div>
    </section>
  );
}
