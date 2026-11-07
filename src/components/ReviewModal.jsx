import { useState, useEffect } from 'react';
import { X, Star, CheckCircle, ShieldCheck, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { submitClientReview } from '../lib/supabase';

const SERVICE_OPTIONS = [
  'Business Website Development',
  'Shopify E-Commerce Store',
  'Custom Web Application',
  'Retail POS System',
  'Website Redesign & Modernization',
  'Maintenance & Retainer Support',
  'Other Bespoke Development'
];

const RATING_DESCRIPTIONS = {
  1: '1 Star — Did not meet expectations',
  2: '2 Stars — Below expectations',
  3: '3 Stars — Met expectations',
  4: '4 Stars — Great quality & experience',
  5: '5 Stars — Exceptional craftsmanship & delivery'
};

export default function ReviewModal({ isOpen, onClose, onReviewSubmitted }) {
  const [formData, setFormData] = useState({
    client_name: '',
    business_name: '',
    email: '',
    service_type: SERVICE_OPTIONS[0],
    rating: 5,
    review_text: '',
    permission_to_publish: true,
    honeypot: ''
  });

  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setErrorMessage('');
      setFormData({
        client_name: '',
        business_name: '',
        email: '',
        service_type: SERVICE_OPTIONS[0],
        rating: 5,
        review_text: '',
        permission_to_publish: true,
        honeypot: ''
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (formData.honeypot && formData.honeypot.trim().length > 0) {
      // Silent rejection for bots
      setIsSuccess(true);
      return;
    }

    if (!formData.client_name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.review_text.trim() || formData.review_text.trim().length < 15) {
      setErrorMessage('Please write at least 15 characters sharing your experience.');
      return;
    }
    if (!formData.permission_to_publish) {
      setErrorMessage('You must grant permission to display your review publicly.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitClientReview(formData);
      if (result.error) {
        setErrorMessage(result.error);
        setIsSubmitting(false);
        return;
      }

      setIsSuccess(true);
      setIsSubmitting(false);
      if (typeof onReviewSubmitted === 'function') {
        onReviewSubmitted();
      }
    } catch (err) {
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  const activeRating = hoverRating || formData.rating;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(2, 4, 10, 0.88)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        boxSizing: 'border-box'
      }}
      onClick={onClose}
    >
      <div
        className="card-glass"
        style={{
          width: '100%',
          maxWidth: '580px',
          maxHeight: '92vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'rgba(10, 17, 34, 0.98)',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-lg), 0 0 40px rgba(34, 211, 238, 0.12)',
          padding: 'clamp(24px, 4vw, 36px)',
          position: 'relative',
          boxSizing: 'border-box'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          /* Success Screen */
          <div style={{ textAlign: 'center', padding: '24px 8px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(74, 222, 128, 0.15)',
                color: '#4ade80',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                boxShadow: '0 0 25px rgba(74, 222, 128, 0.3)'
              }}
            >
              <CheckCircle size={36} />
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
              Review Submitted!
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Thank you for sharing your experience! Your review has been submitted and will be published after verification.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(34, 211, 238, 0.08)',
                border: '1px solid rgba(34, 211, 238, 0.25)',
                color: 'var(--accent-cyan)',
                fontSize: '0.84rem',
                marginBottom: '28px'
              }}
            >
              <ShieldCheck size={16} />
              <span>Pending Administrative Verification</span>
            </div>

            <div>
              <button onClick={onClose} className="btn btn-primary btn-lg" style={{ width: 'min(100%, 220px)' }}>
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <>
            <div style={{ marginBottom: '24px', paddingRight: '32px' }}>
              <div className="section-badge" style={{ marginBottom: '10px' }}>
                <span className="badge-dot" />
                <span>Client Feedback</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)', marginBottom: '8px' }}>
                Share Your Experience
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                Your authentic feedback helps ambitious businesses discover our studio and helps us continually raise our engineering standards.
              </p>
            </div>

            {errorMessage && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  color: '#f87171',
                  fontSize: '0.86rem',
                  marginBottom: '20px'
                }}
              >
                <AlertCircle size={17} style={{ flexShrink: 0 }} />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Anti-spam honeypot (hidden from human users) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              {/* Star Rating Selector */}
              <div style={{ marginBottom: '22px' }}>
                <label className="form-label" style={{ marginBottom: '8px' }}>
                  <span>Your Rating <span className="req">*</span></span>
                  <span style={{ fontSize: '0.78rem', color: '#fbbf24', fontWeight: 600 }}>
                    {RATING_DESCRIPTIONS[activeRating]}
                  </span>
                </label>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    width: 'fit-content'
                  }}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                      onMouseEnter={() => setHoverRating(star)}
                      aria-label={`Rate ${star} stars`}
                      style={{
                        padding: '4px',
                        cursor: 'pointer',
                        color: star <= activeRating ? '#fbbf24' : 'rgba(255, 255, 255, 0.2)',
                        transition: 'transform 0.15s ease, color 0.15s ease'
                      }}
                      onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(1.25)')}
                      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <Star
                        size={26}
                        style={{
                          fill: star <= activeRating ? '#fbbf24' : 'transparent',
                          filter: star <= activeRating ? 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.5))' : 'none'
                        }}
                      />
                    </button>
                  ))}
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: '#fbbf24', marginLeft: '6px' }}>
                    {formData.rating}.0
                  </span>
                </div>
              </div>

              {/* Name & Business Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))',
                  gap: '14px',
                  marginBottom: '14px'
                }}
              >
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="rev-client-name">
                    <span>Full Name <span className="req">*</span></span>
                  </label>
                  <input
                    id="rev-client-name"
                    type="text"
                    name="client_name"
                    required
                    placeholder="e.g. Tariq Mehmood"
                    className="form-input"
                    value={formData.client_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="rev-business-name">
                    <span>Business / Brand Name <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>(Optional)</span></span>
                  </label>
                  <input
                    id="rev-business-name"
                    type="text"
                    name="business_name"
                    placeholder="e.g. Mehmood Apparel Ltd"
                    className="form-input"
                    value={formData.business_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Email with Privacy Assurance */}
              <div className="form-group">
                <label className="form-label" htmlFor="rev-email">
                  <span>Email Address <span className="req">*</span></span>
                  <span style={{ fontSize: '0.74rem', color: '#4ade80' }}>🔒 Confidential & never published</span>
                </label>
                <input
                  id="rev-email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. tariq@business.com"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Service Type Dropdown */}
              <div className="form-group">
                <label className="form-label" htmlFor="rev-service-type">
                  <span>Project / Service Delivered <span className="req">*</span></span>
                </label>
                <select
                  id="rev-service-type"
                  name="service_type"
                  className="form-select"
                  value={formData.service_type}
                  onChange={handleChange}
                >
                  {SERVICE_OPTIONS.map((srv) => (
                    <option key={srv} value={srv}>
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              {/* Written Review */}
              <div className="form-group">
                <label className="form-label" htmlFor="rev-review-text">
                  <span>Your Written Review <span className="req">*</span></span>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-dim)' }}>
                    {formData.review_text.length} / 1000 chars
                  </span>
                </label>
                <textarea
                  id="rev-review-text"
                  name="review_text"
                  required
                  rows={4}
                  maxLength={1000}
                  placeholder="Share details about the website or software built, communication, delivery timeline, and the business impact..."
                  className="form-textarea"
                  value={formData.review_text}
                  onChange={handleChange}
                />
              </div>

              {/* Permission Checkbox */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: '24px',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <input
                  type="checkbox"
                  id="rev-permission"
                  name="permission_to_publish"
                  checked={formData.permission_to_publish}
                  onChange={handleChange}
                  style={{
                    width: '18px',
                    height: '18px',
                    marginTop: '2px',
                    accentColor: 'var(--accent-cyan)',
                    cursor: 'pointer'
                  }}
                />
                <label
                  htmlFor="rev-permission"
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    cursor: 'pointer'
                  }}
                >
                  I grant permission to publish this review on HS Web Studio's website. I understand reviews are verified by an administrator before appearing publicly.
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg"
                style={{ width: '100%', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="spin-animate" />
                    <span>Submitting Your Feedback...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    <span>Submit Review for Verification</span>
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-animate {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
