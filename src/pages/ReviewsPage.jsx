import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ReviewCard from '../components/ReviewCard';
import OverallRatingSummary from '../components/OverallRatingSummary';
import ReviewModal from '../components/ReviewModal';
import { fetchApprovedReviews, subscribeToReviews } from '../lib/supabase';
import { Search, Star, MessageSquarePlus, RefreshCw, X, Filter } from 'lucide-react';

const STAR_FILTERS = [
  { id: 'all', label: 'All Ratings' },
  { id: '5', label: '5 Stars' },
  { id: '4', label: '4 Stars' },
  { id: '3', label: '3 Stars' }
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStar, setSelectedStar] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const loadReviews = async () => {
    setLoading(true);
    const { data } = await fetchApprovedReviews();
    setReviews(data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadReviews();

    const unsubscribe = subscribeToReviews(() => {
      loadReviews();
    });

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  // Unique service types found in approved reviews
  const serviceCategories = useMemo(() => {
    const set = new Set();
    reviews.forEach((r) => {
      if (r.service_type) set.add(r.service_type);
    });
    return ['all', ...Array.from(set)];
  }, [reviews]);

  // Filtered reviews
  const filteredReviews = useMemo(() => {
    return reviews.filter((r) => {
      const matchStar =
        selectedStar === 'all' || Math.round(Number(r.rating)) === Number(selectedStar);

      const matchService =
        selectedService === 'all' || r.service_type === selectedService;

      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        r.client_name?.toLowerCase().includes(q) ||
        r.business_name?.toLowerCase().includes(q) ||
        r.review_text?.toLowerCase().includes(q) ||
        r.service_type?.toLowerCase().includes(q);

      return matchStar && matchService && matchQuery;
    });
  }, [reviews, selectedStar, selectedService, searchQuery]);

  const displayedReviews = filteredReviews.slice(0, visibleCount);
  const hasMore = filteredReviews.length > visibleCount;

  return (
    <div style={{ paddingTop: '36px', paddingBottom: '96px' }}>
      <SEO
        title="Client Experiences & Reviews | HS Web Studio Karachi"
        description="Read authentic client reviews and experiences from businesses, retail brands, and practices partnered with HS Web Studio in Karachi and globally."
      />

      <div className="container">
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '32px' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--accent-cyan)' }}>Client Experiences</span>
        </div>

        {/* Page Hero Header */}
        <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
          <div className="section-badge">
            <span className="badge-dot" />
            <span>Client Experiences</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '18px' }}>
            Real Feedback from{' '}
            <span className="text-gradient-cyan">Verified Partners.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
            Real experiences from businesses and individuals we&apos;ve worked with. Your feedback helps us continue improving our engineering and delivery standards.
          </p>
        </div>

        {/* Dynamic Overall Rating Summary Card */}
        <OverallRatingSummary
          reviews={reviews}
          onOpenShareModal={() => setShareModalOpen(true)}
        />

        {/* Filter and Search Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '36px',
            padding: 'clamp(16px, 3vw, 22px)',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'rgba(10, 17, 34, 0.75)',
            border: '1px solid var(--border-subtle)',
            boxSizing: 'border-box'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            {/* Search Input */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-full)',
                padding: '8px 16px',
                width: 'min(100%, 360px)',
                boxSizing: 'border-box'
              }}
            >
              <Search size={16} style={{ color: 'var(--text-dim)', flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search reviews by name, company, or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '15px',
                  width: '100%'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  style={{ cursor: 'pointer', color: 'var(--text-dim)', padding: '2px' }}
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Star Filters */}
            <div className="filter-scroll-strip" style={{ width: 'auto' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                {STAR_FILTERS.map((f) => {
                  const isActive = selectedStar === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setSelectedStar(f.id)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        backgroundColor: isActive ? 'var(--accent-cyan)' : 'transparent',
                        color: isActive ? '#04111d' : 'var(--text-secondary)',
                        border: isActive ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                        transition: 'all 0.2s ease',
                        flexShrink: 0
                      }}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Service Category Pills if more than 1 service exists */}
          {serviceCategories.length > 2 && (
            <div className="filter-scroll-strip" style={{ paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                  <Filter size={12} />
                  <span>Service:</span>
                </span>
                {serviceCategories.map((cat) => {
                  const isActive = selectedService === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedService(cat)}
                      style={{
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.76rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        backgroundColor: isActive ? 'rgba(34, 211, 238, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                        border: isActive ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                        flexShrink: 0
                      }}
                    >
                      {cat === 'all' ? 'All Services' : cat}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Reviews Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-dim)' }}>
            <RefreshCw size={26} className="spin-animate" style={{ margin: '0 auto 12px auto' }} />
            <div>Loading verified reviews...</div>
          </div>
        ) : filteredReviews.length === 0 ? (
          <div
            className="card-glass"
            style={{
              padding: '60px 24px',
              textAlign: 'center',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '48px'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>No reviews found</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
              {searchQuery || selectedStar !== 'all' || selectedService !== 'all'
                ? 'No reviews match your current filter criteria. Try resetting filters.'
                : 'No client reviews published yet. Be the first to share your experience!'}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {(searchQuery || selectedStar !== 'all' || selectedService !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedStar('all');
                    setSelectedService('all');
                    setSearchQuery('');
                  }}
                  className="btn btn-secondary"
                >
                  Reset All Filters
                </button>
              )}
              <button onClick={() => setShareModalOpen(true)} className="btn btn-primary">
                <MessageSquarePlus size={16} />
                <span>Share Your Experience</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
                gap: 'clamp(20px, 3vw, 28px)',
                marginBottom: '48px'
              }}
            >
              {displayedReviews.map((rev) => (
                <ReviewCard key={rev.id} review={rev} />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="btn btn-secondary btn-lg"
                  style={{ width: 'min(100%, 280px)' }}
                >
                  <span>Load More Experiences ({filteredReviews.length - displayedReviews.length} remaining)</span>
                </button>
              </div>
            )}
          </>
        )}

        {/* Bottom Banner */}
        <div
          className="card-glass"
          style={{
            padding: 'clamp(28px, 4vw, 48px)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-accent)',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(20, 31, 61, 0.7) 0%, rgba(10, 17, 34, 0.9) 100%)'
          }}
        >
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)', marginBottom: '12px' }}>
            Ready to Build Your Next Digital Asset?
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto 24px auto', fontSize: '0.96rem', lineHeight: 1.7 }}>
            Join our roster of satisfied partners. We engineer clean, fast, and high-converting websites and software tailored to your commercial goals.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg" style={{ width: 'min(100%, 260px)' }}>
              <span>Request a Custom Quote</span>
            </Link>
            <button
              onClick={() => setShareModalOpen(true)}
              className="btn btn-secondary btn-lg"
              style={{ width: 'min(100%, 240px)' }}
            >
              <MessageSquarePlus size={18} />
              <span>Submit a Review</span>
            </button>
          </div>
        </div>
      </div>

      <ReviewModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        onReviewSubmitted={loadReviews}
      />
    </div>
  );
}
