import { Link } from 'react-router-dom';
import {
  Globe,
  ShoppingBag,
  Store,
  Layers,
  Cpu,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
  Check
} from 'lucide-react';

const iconMap = {
  Globe,
  ShoppingBag,
  Store,
  Layers,
  Cpu,
  RefreshCw,
  ShieldCheck
};

export default function ServiceCard({ service, onInquire }) {
  const IconComponent = iconMap[service.icon] || Globe;

  return (
    <article
      className="card-glass"
      style={{
        padding: '32px 28px',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        height: '100%',
        boxSizing: 'border-box'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'var(--border-accent)';
        e.currentTarget.style.boxShadow = '0 14px 35px rgba(0, 0, 0, 0.45), 0 0 25px rgba(34, 211, 238, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {/* Top Icon and Category */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '22px'
        }}
      >
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--accent-cyan-dim)',
            border: '1px solid var(--border-accent)',
            color: 'var(--accent-cyan)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(34, 211, 238, 0.15)'
          }}
        >
          <IconComponent size={26} />
        </div>

        {service.eyebrow && (
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text-dim)',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            {service.eyebrow}
          </span>
        )}
      </div>

      <h3
        style={{
          fontSize: '1.28rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '12px',
          lineHeight: 1.3
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          color: 'var(--text-muted)',
          fontSize: '0.92rem',
          lineHeight: 1.65,
          marginBottom: '20px',
          flexGrow: 1
        }}
      >
        {service.shortDesc}
      </p>

      {/* Key Benefits */}
      {service.benefits && (
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '28px',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          {service.benefits.slice(0, 3).map((benefit, idx) => (
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
                size={14}
                style={{
                  color: 'var(--accent-cyan)',
                  flexShrink: 0,
                  marginTop: '3px'
                }}
              />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Action Links */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 'auto'
        }}
      >
        <Link
          to={`/services/${service.slug}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.88rem',
            fontWeight: 600,
            color: 'var(--accent-cyan)'
          }}
        >
          <span>Explore Details</span>
          <ArrowRight size={14} />
        </Link>

        {onInquire ? (
          <button
            onClick={() => onInquire(service.title)}
            style={{
              fontSize: '0.82rem',
              fontWeight: 600,
              color: 'var(--text-muted)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-xs)',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              cursor: 'pointer'
            }}
          >
            Inquire
          </button>
        ) : (
          <Link
            to="/contact"
            style={{
              fontSize: '0.82rem',
              fontWeight: 600,
              color: 'var(--text-muted)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-xs)',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            Inquire
          </Link>
        )}
      </div>
    </article>
  );
}
