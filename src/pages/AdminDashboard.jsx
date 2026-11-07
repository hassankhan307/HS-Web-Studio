import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  adminSignIn,
  adminSignOut,
  getAdminSession,
  fetchAdminReviews,
  updateReviewAdmin,
  deleteReviewAdmin,
  isSupabaseConfigured,
  subscribeToReviews
} from '../lib/supabase';
import {
  ShieldCheck,
  Lock,
  LogOut,
  CheckCircle,
  XCircle,
  Trash2,
  Sparkles,
  Search,
  Star,
  Mail,
  Building,
  Calendar,
  AlertCircle,
  ExternalLink,
  RefreshCw,
  Eye,
  Check,
  X,
  Layers
} from 'lucide-react';

export default function AdminDashboard() {
  const [session, setSession] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Reviews state
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [activeTab, setActiveTab] = useState('PENDING'); // PENDING, APPROVED, REJECTED, ALL
  const [searchQuery, setSearchQuery] = useState('');
  const [actionFeedback, setActionFeedback] = useState(null);

  // Check auth on mount
  useEffect(() => {
    async function checkSession() {
      setCheckingAuth(true);
      const user = await getAdminSession();
      setSession(user);
      setCheckingAuth(false);
    }
    checkSession();
  }, []);

  // Load reviews when authenticated
  const loadReviews = async () => {
    setLoadingReviews(true);
    const { data, error } = await fetchAdminReviews('ALL');
    if (error) {
      setActionFeedback({ type: 'error', text: `Failed to load reviews: ${error}` });
    } else {
      setReviews(data || []);
    }
    setLoadingReviews(false);
  };

  useEffect(() => {
    if (session) {
      loadReviews();

      // Realtime listener
      const unsubscribe = subscribeToReviews(() => {
        loadReviews();
      });

      return () => {
        if (typeof unsubscribe === 'function') unsubscribe();
      };
    }
  }, [session]);

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);

    try {
      const { data, error } = await adminSignIn(loginEmail, loginPassword);
      if (error) {
        setLoginError(error.message || 'Authentication failed. Please verify credentials.');
        setIsLoggingIn(false);
        return;
      }
      setSession(data.user);
      setIsLoggingIn(false);
    } catch (err) {
      setLoginError(err.message || 'An error occurred during authentication.');
      setIsLoggingIn(false);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    await adminSignOut();
    setSession(null);
    setReviews([]);
  };

  // Moderation Actions
  const handleStatusChange = async (reviewId, newStatus) => {
    setActionFeedback(null);
    const result = await updateReviewAdmin(reviewId, { status: newStatus });
    if (result.error) {
      setActionFeedback({ type: 'error', text: result.error });
    } else {
      setActionFeedback({
        type: 'success',
        text: `Review status changed to ${newStatus}.`
      });
      loadReviews();
    }
  };

  const handleToggleVerified = async (reviewId, currentVal) => {
    setActionFeedback(null);
    const result = await updateReviewAdmin(reviewId, { is_verified_client: !currentVal });
    if (result.error) {
      setActionFeedback({ type: 'error', text: result.error });
    } else {
      setActionFeedback({
        type: 'success',
        text: !currentVal ? 'Awarded Verified Client badge.' : 'Removed Verified Client badge.'
      });
      loadReviews();
    }
  };

  const handleToggleFeatured = async (reviewId, currentVal) => {
    setActionFeedback(null);
    const result = await updateReviewAdmin(reviewId, { is_featured: !currentVal });
    if (result.error) {
      setActionFeedback({ type: 'error', text: result.error });
    } else {
      setActionFeedback({
        type: 'success',
        text: !currentVal ? 'Review pinned as Featured on homepage.' : 'Review unpinned from Featured.'
      });
      loadReviews();
    }
  };

  const handleDelete = async (reviewId, clientName) => {
    if (!window.confirm(`Are you sure you want to permanently delete the review from "${clientName}"?`)) {
      return;
    }
    setActionFeedback(null);
    const result = await deleteReviewAdmin(reviewId);
    if (result.error) {
      setActionFeedback({ type: 'error', text: result.error });
    } else {
      setActionFeedback({ type: 'success', text: 'Review permanently deleted.' });
      loadReviews();
    }
  };

  // Stats calculation
  const stats = useMemo(() => {
    const total = reviews.length;
    const pending = reviews.filter((r) => r.status === 'PENDING').length;
    const approved = reviews.filter((r) => r.status === 'APPROVED').length;
    const rejected = reviews.filter((r) => r.status === 'REJECTED').length;

    let sum = 0;
    let count = 0;
    reviews.forEach((r) => {
      if (r.status === 'APPROVED') {
        sum += Number(r.rating) || 5;
        count++;
      }
    });

    const avg = count > 0 ? (sum / count).toFixed(1) : '5.0';

    return { total, pending, approved, rejected, avg };
  }, [reviews]);

  // Filtered reviews
  const displayedReviews = useMemo(() => {
    return reviews.filter((r) => {
      const matchTab = activeTab === 'ALL' || r.status === activeTab;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        r.client_name?.toLowerCase().includes(q) ||
        r.business_name?.toLowerCase().includes(q) ||
        r.email?.toLowerCase().includes(q) ||
        r.service_type?.toLowerCase().includes(q) ||
        r.review_text?.toLowerCase().includes(q);

      return matchTab && matchQuery;
    });
  }, [reviews, activeTab, searchQuery]);

  // Loading state
  if (checkingAuth) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <RefreshCw size={28} className="spin-animate" style={{ color: 'var(--accent-cyan)' }} />
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // Unauthenticated: Admin Login Form
  // --------------------------------------------------------------------------
  if (!session) {
    return (
      <div style={{ paddingTop: '60px', paddingBottom: '100px', minHeight: '80vh' }}>
        <SEO
          title="Admin Verification Portal | HS Web Studio"
          description="Administrative control portal for HS Web Studio client reviews moderation."
        />

        <div className="container" style={{ maxWidth: '480px' }}>
          <div
            className="card-glass"
            style={{
              padding: 'clamp(28px, 5vw, 44px)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-lg), 0 0 35px rgba(34, 211, 238, 0.1)',
              background: 'linear-gradient(135deg, rgba(14, 23, 46, 0.95) 0%, rgba(8, 14, 28, 0.98) 100%)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-cyan-dim)',
                  border: '1px solid var(--border-accent)',
                  color: 'var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.25)'
                }}
              >
                <Lock size={24} />
              </div>
              <h1 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '6px' }}>
                Atelier Administration
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: 0 }}>
                Sign in with your verified credentials to moderate client reviews and manage testimonials.
              </p>
            </div>

            {!isSupabaseConfigured() && (
              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(251, 191, 36, 0.1)',
                  border: '1px solid rgba(251, 191, 36, 0.35)',
                  color: '#fbbf24',
                  fontSize: '0.82rem',
                  lineHeight: 1.5,
                  marginBottom: '20px'
                }}
              >
                <strong>Developer Preview Mode:</strong> Supabase environment variables (<code style={{ color: '#fff' }}>VITE_SUPABASE_URL</code>) are not configured. You can test sign-in with <code style={{ color: '#fff' }}>hswebstudio3@gmail.com</code> and password <code style={{ color: '#fff' }}>admin123</code>.
              </div>
            )}

            {loginError && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  color: '#f87171',
                  fontSize: '0.86rem',
                  marginBottom: '20px'
                }}
              >
                <AlertCircle size={16} style={{ flexShrink: 0 }} />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className="form-label" htmlFor="admin-email">
                  <span>Administrator Email</span>
                </label>
                <input
                  id="admin-email"
                  type="email"
                  required
                  placeholder="hswebstudio3@gmail.com"
                  className="form-input"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label className="form-label" htmlFor="admin-pass">
                  <span>Secret Password</span>
                </label>
                <input
                  id="admin-pass"
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="form-input"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="btn btn-primary btn-lg"
                style={{ width: '100%', cursor: isLoggingIn ? 'not-allowed' : 'pointer' }}
              >
                {isLoggingIn ? (
                  <>
                    <RefreshCw size={17} className="spin-animate" />
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck size={18} />
                    <span>Access Review Console</span>
                  </>
                )}
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <Link to="/" style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                &larr; Return to HS Web Studio
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // Authenticated: Admin Moderation Console
  // --------------------------------------------------------------------------
  return (
    <div style={{ paddingTop: '32px', paddingBottom: '96px' }}>
      <SEO
        title="Reviews Moderation Console | HS Web Studio"
        description="Internal administration dashboard for review moderation, client verification, and testimonial curation."
      />

      <div className="container">
        {/* Top Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '32px',
            paddingBottom: '20px',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h1 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, margin: 0 }}>
                Reviews Moderation
              </h1>
              <span
                style={{
                  fontSize: '0.74rem',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(74, 222, 128, 0.12)',
                  color: '#4ade80',
                  fontWeight: 700,
                  border: '1px solid rgba(74, 222, 128, 0.3)'
                }}
              >
                ● Admin Session Active
              </span>
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '4px' }}>
              Logged in as <strong style={{ color: 'var(--accent-cyan)' }}>{session.email}</strong>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/reviews" target="_blank" className="btn btn-secondary btn-sm">
              <span>View Public Reviews</span>
              <ExternalLink size={14} />
            </Link>
            <button onClick={handleLogout} className="btn btn-ghost btn-sm" style={{ color: '#f87171' }}>
              <LogOut size={15} />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Action Feedback Banner */}
        {actionFeedback && (
          <div
            style={{
              padding: '12px 18px',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: actionFeedback.type === 'error' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(74, 222, 128, 0.15)',
              border: actionFeedback.type === 'error' ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid rgba(74, 222, 128, 0.4)',
              color: actionFeedback.type === 'error' ? '#f87171' : '#4ade80',
              fontSize: '0.88rem'
            }}
          >
            <span>{actionFeedback.text}</span>
            <button
              onClick={() => setActionFeedback(null)}
              style={{ background: 'transparent', color: 'inherit', cursor: 'pointer' }}
            >
              <X size={15} />
            </button>
          </div>
        )}

        {/* Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
            gap: '16px',
            marginBottom: '36px'
          }}
        >
          <div className="card-glass" style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
              Total Submissions
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '4px' }}>
              {stats.total}
            </div>
          </div>

          <div
            className="card-glass"
            style={{
              padding: '20px',
              borderRadius: 'var(--radius-md)',
              border: stats.pending > 0 ? '1px solid #fbbf24' : '1px solid var(--border-subtle)',
              backgroundColor: stats.pending > 0 ? 'rgba(251, 191, 36, 0.08)' : 'var(--bg-card)'
            }}
          >
            <div style={{ fontSize: '0.8rem', color: '#fbbf24', textTransform: 'uppercase', fontWeight: 700 }}>
              Needs Moderation
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fbbf24', marginTop: '4px' }}>
              {stats.pending}
            </div>
          </div>

          <div className="card-glass" style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '0.8rem', color: '#4ade80', textTransform: 'uppercase', fontWeight: 700 }}>
              Live / Approved
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#4ade80', marginTop: '4px' }}>
              {stats.approved}
            </div>
          </div>

          <div className="card-glass" style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '0.8rem', color: '#f87171', textTransform: 'uppercase', fontWeight: 700 }}>
              Rejected
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f87171', marginTop: '4px' }}>
              {stats.rejected}
            </div>
          </div>

          <div className="card-glass" style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontWeight: 700 }}>
              Approved Average
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-cyan)', marginTop: '4px' }}>
              {stats.avg} ★
            </div>
          </div>
        </div>

        {/* Toolbar: Status Tabs and Search */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            marginBottom: '28px',
            padding: '16px 20px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'rgba(10, 17, 34, 0.8)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          {/* Status Tabs */}
          <div className="filter-scroll-strip" style={{ width: 'auto' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { id: 'PENDING', label: `Pending (${stats.pending})` },
                { id: 'APPROVED', label: `Approved (${stats.approved})` },
                { id: 'REJECTED', label: `Rejected (${stats.rejected})` },
                { id: 'ALL', label: `All (${stats.total})` }
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      padding: '7px 16px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.84rem',
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
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Box */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-full)',
              padding: '6px 14px',
              width: 'min(100%, 320px)'
            }}
          >
            <Search size={15} style={{ color: 'var(--text-dim)', flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Search by name, company, email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontSize: '14px',
                width: '100%'
              }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ color: 'var(--text-dim)' }}>
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Reviews List */}
        {loadingReviews ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-dim)' }}>
            <RefreshCw size={26} className="spin-animate" style={{ margin: '0 auto 12px auto' }} />
            <div>Syncing with database...</div>
          </div>
        ) : displayedReviews.length === 0 ? (
          <div
            className="card-glass"
            style={{
              padding: '48px 24px',
              textAlign: 'center',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No reviews in this view</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
              {activeTab === 'PENDING'
                ? 'All submitted reviews have been moderated. Great job!'
                : 'No reviews found matching the current search criteria.'}
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {displayedReviews.map((rev) => {
              const isPending = rev.status === 'PENDING';
              const isApproved = rev.status === 'APPROVED';
              const isRejected = rev.status === 'REJECTED';

              const createdDate = rev.created_at
                ? new Date(rev.created_at).toLocaleString('en-US', {
                    dateStyle: 'medium',
                    timeStyle: 'short'
                  })
                : 'Unknown';

              return (
                <div
                  key={rev.id}
                  className="card-glass"
                  style={{
                    padding: 'clamp(20px, 3vw, 28px)',
                    borderRadius: 'var(--radius-md)',
                    border: isPending
                      ? '1px solid rgba(251, 191, 36, 0.4)'
                      : isApproved
                      ? '1px solid rgba(74, 222, 128, 0.3)'
                      : '1px solid rgba(239, 68, 68, 0.3)',
                    backgroundColor: isPending ? 'rgba(251, 191, 36, 0.03)' : 'var(--bg-card)',
                    position: 'relative'
                  }}
                >
                  {/* Top Bar: Status Badge, Date, Rating */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '10px',
                      marginBottom: '14px',
                      paddingBottom: '12px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      {/* Status Tag */}
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          padding: '3px 10px',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: isPending
                            ? 'rgba(251, 191, 36, 0.15)'
                            : isApproved
                            ? 'rgba(74, 222, 128, 0.15)'
                            : 'rgba(239, 68, 68, 0.15)',
                          color: isPending ? '#fbbf24' : isApproved ? '#4ade80' : '#f87171',
                          border: isPending
                            ? '1px solid rgba(251, 191, 36, 0.4)'
                            : isApproved
                            ? '1px solid rgba(74, 222, 128, 0.4)'
                            : '1px solid rgba(239, 68, 68, 0.4)'
                        }}
                      >
                        ● {rev.status}
                      </span>

                      {/* Stars */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            size={15}
                            style={{
                              color: s <= Number(rev.rating) ? '#fbbf24' : 'rgba(255, 255, 255, 0.15)',
                              fill: s <= Number(rev.rating) ? '#fbbf24' : 'transparent'
                            }}
                          />
                        ))}
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fbbf24', marginLeft: '4px' }}>
                          {rev.rating}.0
                        </span>
                      </div>

                      {/* Service tag */}
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-dim)',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-xs)'
                        }}
                      >
                        {rev.service_type}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                      <Calendar size={13} />
                      <span>{createdDate}</span>
                    </div>
                  </div>

                  {/* Client Info Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                      gap: '12px',
                      marginBottom: '16px',
                      backgroundColor: 'rgba(0, 0, 0, 0.25)',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                        Client Name
                      </div>
                      <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                        {rev.client_name}
                      </div>
                    </div>

                    {rev.business_name && (
                      <div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                          Company / Brand
                        </div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                          {rev.business_name}
                        </div>
                      </div>
                    )}

                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                        Confidential Email (Admin Only)
                      </div>
                      <div style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>
                        <a href={`mailto:${rev.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <Mail size={13} />
                          <span>{rev.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Review Text Body */}
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      padding: '16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(255, 255, 255, 0.04)',
                      marginBottom: '20px'
                    }}
                  >
                    <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                      &ldquo;{rev.review_text}&rdquo;
                    </p>
                  </div>

                  {/* Badges and Moderation Controls Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '12px',
                      paddingTop: '12px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    {/* Badge Toggles */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => handleToggleVerified(rev.id, rev.is_verified_client)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 12px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          backgroundColor: rev.is_verified_client ? 'rgba(74, 222, 128, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                          color: rev.is_verified_client ? '#4ade80' : 'var(--text-dim)',
                          border: rev.is_verified_client ? '1px solid rgba(74, 222, 128, 0.4)' : '1px solid var(--border-subtle)',
                          transition: 'all 0.2s ease'
                        }}
                        title="Click to toggle Verified Client status"
                      >
                        <ShieldCheck size={14} />
                        <span>{rev.is_verified_client ? '✓ Verified Client' : '+ Award Verified Badge'}</span>
                      </button>

                      <button
                        onClick={() => handleToggleFeatured(rev.id, rev.is_featured)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 12px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          backgroundColor: rev.is_featured ? 'rgba(34, 211, 238, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                          color: rev.is_featured ? 'var(--accent-cyan)' : 'var(--text-dim)',
                          border: rev.is_featured ? '1px solid rgba(34, 211, 238, 0.4)' : '1px solid var(--border-subtle)',
                          transition: 'all 0.2s ease'
                        }}
                        title="Click to toggle Homepage Featured status"
                      >
                        <Sparkles size={14} />
                        <span>{rev.is_featured ? '★ Featured on Home' : '+ Pin to Home'}</span>
                      </button>
                    </div>

                    {/* Action Buttons: Approve, Reject, Delete */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      {rev.status !== 'APPROVED' && (
                        <button
                          onClick={() => handleStatusChange(rev.id, 'APPROVED')}
                          className="btn btn-sm"
                          style={{
                            backgroundColor: 'rgba(74, 222, 128, 0.15)',
                            color: '#4ade80',
                            border: '1px solid rgba(74, 222, 128, 0.35)'
                          }}
                        >
                          <CheckCircle size={15} />
                          <span>Approve & Publish</span>
                        </button>
                      )}

                      {rev.status !== 'REJECTED' && (
                        <button
                          onClick={() => handleStatusChange(rev.id, 'REJECTED')}
                          className="btn btn-sm"
                          style={{
                            backgroundColor: 'rgba(239, 68, 68, 0.15)',
                            color: '#f87171',
                            border: '1px solid rgba(239, 68, 68, 0.35)'
                          }}
                        >
                          <XCircle size={15} />
                          <span>Reject</span>
                        </button>
                      )}

                      <button
                        onClick={() => handleDelete(rev.id, rev.client_name)}
                        className="btn btn-ghost btn-sm"
                        style={{ color: 'var(--text-dim)' }}
                        title="Delete review permanently"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
