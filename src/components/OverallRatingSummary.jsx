import { Star, MessageSquarePlus, ShieldCheck } from 'lucide-react';

export default function OverallRatingSummary({ reviews = [], onOpenShareModal }) {
  const totalReviews = reviews.length;

  // Calculate stats dynamically from approved reviews
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  let sumRatings = 0;

  reviews.forEach((r) => {
    const star = Math.min(5, Math.max(1, Math.round(Number(r.rating) || 5)));
    distribution[star] = (distribution[star] || 0) + 1;
    sumRatings += Number(r.rating) || 5;
  });

  const averageRating = totalReviews > 0 ? (sumRatings / totalReviews).toFixed(1) : '5.0';

  return (
    <div
      className="card-glass"
      style={{
        padding: 'clamp(24px, 4vw, 36px)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-medium)',
        marginBottom: '44px',
        background: 'linear-gradient(135deg, rgba(14, 23, 46, 0.9) 0%, rgba(8, 14, 28, 0.95) 100%)',
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(24px, 4vw, 40px)',
          alignItems: 'center'
        }}
      >
        {/* Left Column: Overall Score & Count */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              fontSize: 'clamp(3rem, 6vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1,
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em',
              marginBottom: '8px'
            }}
          >
            {averageRating}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '10px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={22}
                style={{
                  color: star <= Math.round(Number(averageRating)) ? '#fbbf24' : 'rgba(255, 255, 255, 0.2)',
                  fill: star <= Math.round(Number(averageRating)) ? '#fbbf24' : 'transparent',
                  filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.45))'
                }}
              />
            ))}
          </div>

          <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 600 }}>
            Based on <span style={{ color: 'var(--accent-cyan)' }}>{totalReviews}</span>{' '}
            {totalReviews === 1 ? 'verified review' : 'verified client reviews'}
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              color: '#4ade80',
              marginTop: '10px',
              backgroundColor: 'rgba(74, 222, 128, 0.08)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(74, 222, 128, 0.25)'
            }}
          >
            <ShieldCheck size={14} />
            <span>100% Genuine Client Feedback</span>
          </div>
        </div>

        {/* Center Column: Rating Distribution Bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          {[5, 4, 3, 2, 1].map((stars) => {
            const count = distribution[stars] || 0;
            const percentage = totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;

            return (
              <div
                key={stars}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', width: '60px', flexShrink: 0 }}>
                  <span style={{ fontWeight: 600 }}>{stars}</span>
                  <Star size={13} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
                </div>

                {/* Progress Track */}
                <div
                  style={{
                    flexGrow: 1,
                    height: '8px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      width: `${percentage}%`,
                      height: '100%',
                      backgroundColor: stars >= 4 ? 'var(--accent-cyan)' : '#fbbf24',
                      borderRadius: 'var(--radius-full)',
                      transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                </div>

                <div style={{ width: '42px', textAlign: 'right', fontSize: '0.8rem', color: 'var(--text-dim)', flexShrink: 0 }}>
                  {percentage}%
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: CTA Trigger */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
            paddingLeft: 'clamp(0px, 3vw, 24px)'
          }}
        >
          <h4 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Worked with Us?</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '18px' }}>
            We deeply appreciate authentic feedback from our partners, clinic directors, and business clients.
          </p>
          <button
            onClick={onOpenShareModal}
            className="btn btn-primary"
            style={{ width: '100%', maxWidth: '240px' }}
          >
            <MessageSquarePlus size={17} />
            <span>Share Your Experience</span>
          </button>
        </div>
      </div>
    </div>
  );
}
