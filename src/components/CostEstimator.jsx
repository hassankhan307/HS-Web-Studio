import { useState, useMemo } from 'react';
import { Clock, Check, MessageCircle, Sparkles } from 'lucide-react';

const PROJECT_TYPES = [
  { id: 'business', label: 'Business Website', basePKR: 35000, baseUSD: 160, baseDays: 6, desc: 'Corporate, clinic, agency, or service showcase' },
  { id: 'shopify', label: 'Shopify Store', basePKR: 75000, baseUSD: 450, baseDays: 12, desc: 'D2C store with payment and courier APIs' },
  { id: 'ecommerce', label: 'Custom E-Commerce', basePKR: 95000, baseUSD: 580, baseDays: 16, desc: 'Custom catalogue, cart, and automated order workflows' },
  { id: 'webapp', label: 'Custom Web Application', basePKR: 140000, baseUSD: 850, baseDays: 24, desc: 'Tailored business portal, dashboard, or client system' },
  { id: 'pos', label: 'Retail POS System', basePKR: 120000, baseUSD: 750, baseDays: 20, desc: 'Inventory, color/size variants, and thermal receipt billing' },
  { id: 'redesign', label: 'Website Redesign', basePKR: 40000, baseUSD: 250, baseDays: 8, desc: 'Performance overhaul, mobile optimization & visual upgrade' }
];

const SCOPE_TIERS = [
  { id: 'small', label: '1–3 Pages / Core Landing', mult: 0.85, dayAdd: 0 },
  { id: 'medium', label: '4–7 Pages / Standard Studio', mult: 1.35, dayAdd: 3 },
  { id: 'large', label: '8–15 Pages / Comprehensive', mult: 1.75, dayAdd: 7 },
  { id: 'enterprise', label: '15+ Pages / Multi-department', mult: 2.2, dayAdd: 12 }
];

const FEATURES_LIST = [
  { id: 'whatsapp', label: 'WhatsApp Instant Chat & Lead Triggers', pkr: 5000, usd: 30, days: 1 },
  { id: 'payments', label: 'Payment Gateway (EasyPaisa/JazzCash/Cards/Stripe)', pkr: 18000, usd: 110, days: 3 },
  { id: 'variants', label: 'Advanced Variant Matrix (Sizes/Colors/Stock)', pkr: 15000, usd: 90, days: 3 },
  { id: 'booking', label: 'Interactive Appointment / Table Booking Flow', pkr: 14000, usd: 85, days: 2 },
  { id: 'seo_suite', label: 'Technical SEO Suite & Rich Snippets', pkr: 12000, usd: 75, days: 2 },
  { id: 'cms', label: 'Admin Dashboard / Content Management System', pkr: 25000, usd: 150, days: 4 },
  { id: 'multilang', label: 'Multi-Language Localization', pkr: 18000, usd: 110, days: 3 },
  { id: 'animations', label: 'Custom Smooth Micro-Interactions & Motion', pkr: 10000, usd: 60, days: 2 }
];

const ADDITIONAL_SERVICES = [
  { id: 'maintenance', label: 'Monthly Maintenance & Support Retainer', pkr: 15000, usd: 90, note: '/month' },
  { id: 'speed', label: 'Core Web Vitals Speed Maximizer Guarantee (90+)', pkr: 12000, usd: 75, note: 'one-time' }
];

export default function CostEstimator({ onProceedToInquiry }) {
  const [currency, setCurrency] = useState('PKR');
  const [selectedType, setSelectedType] = useState('business');
  const [selectedScope, setSelectedScope] = useState('medium');
  const [selectedFeatures, setSelectedFeatures] = useState(['whatsapp', 'seo_suite']);
  const [selectedAddons] = useState([]);

  const toggleFeature = (featId) => {
    setSelectedFeatures((prev) =>
      prev.includes(featId) ? prev.filter((id) => id !== featId) : [...prev, featId]
    );
  };

  const calculation = useMemo(() => {
    const typeObj = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
    const scopeObj = SCOPE_TIERS.find((s) => s.id === selectedScope) || SCOPE_TIERS[1];

    let baseCost = currency === 'PKR' ? typeObj.basePKR : typeObj.baseUSD;
    let scaledCost = baseCost * scopeObj.mult;

    let featureCost = 0;
    let featureDays = 0;

    selectedFeatures.forEach((fId) => {
      const feat = FEATURES_LIST.find((f) => f.id === fId);
      if (feat) {
        featureCost += currency === 'PKR' ? feat.pkr : feat.usd;
        featureDays += feat.days;
      }
    });

    let addonCost = 0;
    selectedAddons.forEach((aId) => {
      const addon = ADDITIONAL_SERVICES.find((a) => a.id === aId);
      if (addon) {
        addonCost += currency === 'PKR' ? addon.pkr : addon.usd;
      }
    });

    const totalEstimate = Math.round(scaledCost + featureCost + addonCost);
    const rangeLow = Math.round(totalEstimate * 0.9);
    const rangeHigh = Math.round(totalEstimate * 1.15);

    const totalDays = typeObj.baseDays + scopeObj.dayAdd + featureDays;
    const weeksLow = Math.max(1, Math.floor(totalDays / 7));
    const weeksHigh = Math.ceil(totalDays / 6);

    return {
      typeObj,
      scopeObj,
      totalEstimate,
      rangeLow,
      rangeHigh,
      weeksLow,
      weeksHigh
    };
  }, [currency, selectedType, selectedScope, selectedFeatures, selectedAddons]);

  const generateWhatsAppEstimateMessage = () => {
    const typeObj = calculation.typeObj;
    const scopeObj = calculation.scopeObj;
    const featureNames = selectedFeatures
      .map((fId) => FEATURES_LIST.find((f) => f.id === fId)?.label)
      .filter(Boolean)
      .join(', ');

    const text = [
      '👋 *Hello HS Web Studio, I configured an estimate on your website:*',
      `*Project Type:* ${typeObj.label}`,
      `*Scope:* ${scopeObj.label}`,
      `*Features:* ${featureNames || 'Core essentials'}`,
      `*Estimated Range:* ${currency} ${calculation.rangeLow.toLocaleString()} – ${calculation.rangeHigh.toLocaleString()}`,
      `*Estimated Timeline:* ~${calculation.weeksLow} to ${calculation.weeksHigh} weeks`,
      '',
      'Could we discuss a confirmed quote for my project?'
    ].join('\n');

    return encodeURIComponent(text);
  };

  return (
    <div
      className="card-glass"
      style={{
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-medium)',
        padding: 'clamp(20px, 4vw, 36px) clamp(16px, 3vw, 32px)',
        boxShadow: 'var(--shadow-lg)',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Top Header & Currency Switcher */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px',
          marginBottom: '28px',
          paddingBottom: '18px',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <div>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'var(--accent-cyan)'
            }}
          >
            Interactive Budget & Timeline Calculator
          </span>
          <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)', marginTop: '4px' }}>
            Calculate Your Indicative Project Investment
          </h3>
        </div>

        {/* Currency Switcher */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'var(--bg-surface-alt)',
            borderRadius: 'var(--radius-full)',
            padding: '3px',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <button
            onClick={() => setCurrency('PKR')}
            style={{
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              backgroundColor: currency === 'PKR' ? 'var(--accent-cyan)' : 'transparent',
              color: currency === 'PKR' ? '#04111d' : 'var(--text-dim)',
              transition: 'all 0.2s ease'
            }}
          >
            PKR (₨)
          </button>
          <button
            onClick={() => setCurrency('USD')}
            style={{
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              backgroundColor: currency === 'USD' ? 'var(--accent-cyan)' : 'transparent',
              color: currency === 'USD' ? '#04111d' : 'var(--text-dim)',
              transition: 'all 0.2s ease'
            }}
          >
            USD ($)
          </button>
        </div>
      </div>

      {/* Step 1: Select Project Type */}
      <div style={{ marginBottom: '28px' }}>
        <h4 style={{ fontSize: '0.98rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
          1. Select Project Type
        </h4>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '10px'
          }}
        >
          {PROJECT_TYPES.map((type) => {
            const isSelected = selectedType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                style={{
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: isSelected ? 'rgba(34, 211, 238, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                  border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.92rem', color: isSelected ? 'var(--accent-cyan)' : 'var(--text-primary)' }}>
                    {type.label}
                  </span>
                  {isSelected && <Check size={16} style={{ color: 'var(--accent-cyan)' }} />}
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', margin: 0 }}>
                  {type.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Select Scope */}
      <div style={{ marginBottom: '28px' }}>
        <h4 style={{ fontSize: '0.98rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
          2. Scale & Page Volume
        </h4>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
            gap: '10px'
          }}
        >
          {SCOPE_TIERS.map((scope) => {
            const isSelected = selectedScope === scope.id;
            return (
              <button
                key={scope.id}
                onClick={() => setSelectedScope(scope.id)}
                style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: isSelected ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                  border: isSelected ? '1px solid var(--accent-blue)' : '1px solid var(--border-subtle)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  boxSizing: 'border-box'
                }}
              >
                <span style={{ fontSize: '0.86rem', fontWeight: 600, color: isSelected ? '#93c5fd' : 'var(--text-secondary)' }}>
                  {scope.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3: Select Features */}
      <div style={{ marginBottom: '28px' }}>
        <h4 style={{ fontSize: '0.98rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
          3. Specialized Features & Integrations
        </h4>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '10px'
          }}
        >
          {FEATURES_LIST.map((feat) => {
            const isChecked = selectedFeatures.includes(feat.id);
            return (
              <div
                key={feat.id}
                onClick={() => toggleFeature(feat.id)}
                style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: isChecked ? 'rgba(34, 211, 238, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                  border: isChecked ? '1px solid rgba(34, 211, 238, 0.4)' : '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  boxSizing: 'border-box'
                }}
              >
                <div
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '4px',
                    border: isChecked ? 'none' : '1px solid var(--text-dim)',
                    backgroundColor: isChecked ? 'var(--accent-cyan)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {isChecked && <Check size={13} style={{ color: '#04111d' }} />}
                </div>
                <span style={{ fontSize: '0.84rem', color: isChecked ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                  {feat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Calculation Summary Card - Stacked cleanly on mobile */}
      <div
        style={{
          marginTop: '32px',
          padding: 'clamp(20px, 3.5vw, 28px)',
          borderRadius: 'var(--radius-md)',
          background: 'linear-gradient(135deg, rgba(14, 23, 46, 0.9) 0%, rgba(10, 17, 34, 0.95) 100%)',
          border: '1px solid var(--border-accent)',
          boxShadow: 'var(--shadow-glow)',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <div
          className="estimator-summary-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '20px',
            alignItems: 'center',
            marginBottom: '20px'
          }}
        >
          {/* Estimated Budget Range */}
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Indicative Estimated Budget
            </span>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                fontWeight: 800,
                color: 'var(--accent-cyan)',
                marginTop: '4px',
                wordBreak: 'break-word'
              }}
            >
              {currency} {calculation.rangeLow.toLocaleString()} – {calculation.rangeHigh.toLocaleString()}
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '4px' }}>
              *Subject to exact project brief and custom API scope.
            </p>
          </div>

          {/* Timeline Estimate */}
          <div className="estimator-timeline-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-dim)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
              <Clock size={14} style={{ color: 'var(--accent-cyan)' }} />
              <span>Indicative Timeline</span>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginTop: '4px'
              }}
            >
              ~{calculation.weeksLow} to {calculation.weeksHigh} Weeks
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '4px' }}>
              From discovery alignment to final deployment.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '18px',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <a
            href={`https://wa.me/923312901930?text=${generateWhatsAppEstimateMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp est-btn"
            style={{ flex: '1 1 220px' }}
          >
            <MessageCircle size={18} />
            <span>Send Estimate via WhatsApp</span>
          </a>

          {onProceedToInquiry && (
            <button
              onClick={() => {
                const specNote = `Configured Estimator: ${calculation.typeObj.label} (${calculation.scopeObj.label}), Range: ${currency} ${calculation.rangeLow.toLocaleString()} - ${calculation.rangeHigh.toLocaleString()}`;
                onProceedToInquiry(specNote);
              }}
              className="btn btn-primary est-btn"
              style={{ flex: '1 1 180px' }}
            >
              <Sparkles size={18} />
              <span>Formal Quote Inquiry</span>
            </button>
          )}
        </div>
      </div>

      <style>{`
        .estimator-timeline-box {
          padding-left: 20px;
          border-left: 1px solid var(--border-subtle);
        }
        @media (max-width: 640px) {
          .estimator-timeline-box {
            padding-left: 0 !important;
            border-left: none !important;
            border-top: 1px solid var(--border-subtle) !important;
            padding-top: 16px !important;
          }
          .est-btn {
            width: 100% !important;
            flex: 1 1 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
