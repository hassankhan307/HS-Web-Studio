import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Home, ArrowLeft, Search, Layers } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        textAlign: 'center'
      }}
    >
      <SEO
        title="Page Not Found | HS Web Studio"
        description="The page you are looking for does not exist or has been moved."
      />

      <div
        className="card-glass"
        style={{
          maxWidth: '560px',
          padding: 'clamp(24px, 5vw, 48px) clamp(16px, 4vw, 36px)',
          boxSizing: 'border-box',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '5rem',
            fontWeight: 800,
            color: 'var(--accent-cyan)',
            lineHeight: 1,
            marginBottom: '16px',
            textShadow: '0 0 25px rgba(34, 211, 238, 0.4)'
          }}
        >
          404
        </div>

        <h1 style={{ fontSize: '1.8rem', marginBottom: '14px' }}>
          Page Not Found
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '32px' }}>
          The page or asset you requested is unavailable, has been moved to a new route, or never existed in our directory.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            <span>Return to Homepage</span>
          </Link>
          <Link to="/portfolio" className="btn btn-secondary">
            <Layers size={16} />
            <span>Explore Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
