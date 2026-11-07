import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ReviewCard from '../components/ReviewCard';
import OverallRatingSummary from '../components/OverallRatingSummary';
import ReviewModal from '../components/ReviewModal';
import { fetchApprovedReviews, subscribeToReviews } from '../lib/supabase';
import { ArrowRight, MessageSquarePlus, RefreshCw } from 'lucide-react';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(6);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const loadReviews = async () => {
    setLoading(true);
    const { data } = await fetchApprovedReviews();
    setReviews(data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadReviews();

    // Subscribe to realtime updates
    const unsubscribe = subscribeToReviews(() => {
      loadReviews();
    });

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  const visibleReviews = reviews.slice(0, displayCount);
  const hasMore = reviews.length > displayCount;

  return (
    <section className="section" id="reviews" style={{ backgroundColor: 'rgba(10, 17, 34, 0.4)' }}>
      <div className="container">
        <SectionHeading
          badge="Client Experiences"
          title="Real Feedback from Businesses We've Moved Forward"
          description="Real experiences from businesses and individuals we've worked with. Your feedback helps us continue improving."
        />

        {/* Dynamic Overall Rating Summary */}
        <OverallRatingSummary
          reviews={reviews}
          onOpenShareModal={() => setShareModalOpen(true)}
        />

        {/* Reviews Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--text-dim)' }}>
            <RefreshCw size={24} className="spin-animate" style={{ margin: '0 auto 12px auto' }} />
            <div>Loading verified client experiences...</div>
          </div>
        ) : reviews.length === 0 ? (
          <div
            className="card-glass"
            style={{
              padding: '48px 24px',
              textAlign: 'center',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '32px'
            }}
          >
            <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No Published Reviews Yet</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '500px', margin: '0 auto 20px auto' }}>
              We have recently upgraded our real-time feedback system. If we built your website, Shopify storefront, or POS engine, be the first to share your experience!
            </p>
            <button onClick={() => setShareModalOpen(true)} className="btn btn-primary">
              <MessageSquarePlus size={16} />
              <span>Share Your Experience</span>
            </button>
          </div>
        ) : (
          <>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
                gap: 'clamp(20px, 3vw, 28px)',
                marginBottom: '36px'
              }}
            >
              {visibleReviews.map((rev) => (
                <ReviewCard key={rev.id} review={rev} />
              ))}
            </div>

            {/* Bottom Actions */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                marginTop: '12px'
              }}
            >
              {hasMore ? (
                <button
                  onClick={() => setDisplayCount((prev) => prev + 6)}
                  className="btn btn-secondary btn-lg"
                  style={{ width: 'min(100%, 240px)' }}
                >
                  <span>Load More Experiences</span>
                </button>
              ) : (
                <Link
                  to="/reviews"
                  className="btn btn-secondary btn-lg"
                  style={{ width: 'min(100%, 280px)' }}
                >
                  <span>View All Client Reviews</span>
                  <ArrowRight size={16} />
                </Link>
              )}

              <button
                onClick={() => setShareModalOpen(true)}
                className="btn btn-primary btn-lg"
                style={{ width: 'min(100%, 260px)' }}
              >
                <MessageSquarePlus size={18} />
                <span>Share Your Experience</span>
              </button>
            </div>
          </>
        )}
      </div>

      {/* Review Submission Modal */}
      <ReviewModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        onReviewSubmitted={loadReviews}
      />
    </section>
  );
}
