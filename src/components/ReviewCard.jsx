import { Star, ShieldCheck, Sparkles, Building, Calendar } from 'lucide-react';

export default function ReviewCard({ review }) {
  if (!review) return null;

  const {
    client_name,
    business_name,
    service_type,
    rating = 5,
    review_text,
    is_verified_client,
    is_featured,
    created_at
  } = review;

  // Format date
  const formattedDate = created_at
    ? new Date(created_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    : '';

  return (
    <article
      className="card-glass"
      style={{
        padding: 'clamp(20px, 3.5vw, 28px)',
        borderRadius: 'var(--radius-md)',
        border: is_featured
          ? '1px solid rgba(34, 211, 238, 0.4)'
          : '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        boxSizing: 'border-box',
        height: '100%',
        backgroundColor: is_featured ? 'rgba(14, 23, 46, 0.85)' : 'var(--bg-card)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = is_featured ? 'var(--accent-cyan)' : 'var(--border-medium)';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.4), 0 0 20px rgba(34, 211, 238, 0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = is_featured ? 'rgba(34, 211, 238, 0.4)' : 'var(--border-subtle)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      <div>
        {/* Top Header: Rating & Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '14px'
          }}
        >
          {/* Star Rating */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '3px' }}
            aria-label={`${rating} out of 5 stars`}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                style={{
                  color: star <= rating ? '#fbbf24' : 'rgba(255, 255, 255, 0.15)',
                  fill: star <= rating ? '#fbbf24' : 'transparent',
                  filter: star <= rating ? 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.4))' : 'none'
                }}
              />
            ))}
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fbbf24', marginLeft: '6px' }}>
              {Number(rating).toFixed(1)}
            </span>
          </div>

          {/* Badges: Featured & Verified */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {is_featured && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(34, 211, 238, 0.12)',
                  border: '1px solid rgba(34, 211, 238, 0.3)',
                  color: 'var(--accent-cyan)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}
              >
                <Sparkles size={11} />
                <span>Featured</span>
              </span>
            )}

            {is_verified_client && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(74, 222, 128, 0.12)',
                  border: '1px solid rgba(74, 222, 128, 0.35)',
                  color: '#4ade80',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.03em'
                }}
                title="Verified Client of HS Web Studio"
              >
                <ShieldCheck size={12} />
                <span>Verified Client</span>
              </span>
            )}
          </div>
        </div>

        {/* Written Review Body */}
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.94rem',
            lineHeight: 1.68,
            marginBottom: '20px',
            fontStyle: 'normal'
          }}
        >
          &ldquo;{review_text}&rdquo;
        </p>
      </div>

      {/* Review Footer: Author, Service, & Date */}
      <div
        style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '14px',
          marginTop: 'auto'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.98rem' }}>
              {client_name}
            </div>

            {business_name && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '0.82rem',
                  color: 'var(--text-dim)',
                  marginTop: '2px'
                }}
              >
                <Building size={13} style={{ color: 'var(--accent-cyan)' }} />
                <span>{business_name}</span>
              </div>
            )}
          </div>

          {formattedDate && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.78rem',
                color: 'var(--text-dim)',
                flexShrink: 0
              }}
            >
              <Calendar size={12} />
              <span>{formattedDate}</span>
            </div>
          )}
        </div>

        {/* Service Type Tag */}
        {service_type && (
          <div style={{ marginTop: '10px' }}>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-dim)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                padding: '3px 8px',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid var(--border-subtle)',
                display: 'inline-block'
              }}
            >
              Project: <strong style={{ color: 'var(--text-secondary)' }}>{service_type}</strong>
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
