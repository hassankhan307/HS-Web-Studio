import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { Search, Sparkles, X, ExternalLink, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ecommerce', label: 'E-Commerce & Shopify' },
  { id: 'business', label: 'Business & Showrooms' },
  { id: 'healthcare', label: 'Healthcare & Clinics' },
  { id: 'restaurant', label: 'Restaurants' },
  { id: 'other', label: 'Architecture & Hospitality' }
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewProject, setPreviewProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeFilter === 'all' || p.category === activeFilter;

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.categoryLabel.toLowerCase().includes(query) ||
        (p.overview && p.overview.toLowerCase().includes(query)) ||
        (p.technologies && p.technologies.some((t) => t.toLowerCase().includes(query)));

      return matchesCategory && matchesQuery;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div style={{ paddingTop: '32px', paddingBottom: '90px' }}>
      <SEO
        title="Portfolio & Case Studies | HS Web Studio Karachi"
        description="Browse our selected web development projects, live Shopify stores, healthcare portals, and retail POS solutions built in Karachi."
      />

      <div className="container">
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--accent-cyan)' }}>Portfolio</span>
        </div>

        {/* Page Header */}
        <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
          <div className="section-badge">
            <span className="badge-dot" />
            <span>Selected Work</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4.8vw, 3.4rem)', fontWeight: 800, marginBottom: '16px' }}>
            Proven Builds &{' '}
            <span className="text-gradient-cyan">Demonstrated Craft.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Explore our portfolio of live client e-commerce platforms and high-fidelity concept builds developed to show how modern web architecture transforms local businesses.
          </p>
        </div>

        {/* Search & Filter Toolbar - Fully Responsive */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '36px',
            padding: 'clamp(14px, 3vw, 20px)',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'rgba(10, 17, 34, 0.7)',
            border: '1px solid var(--border-subtle)',
            boxSizing: 'border-box'
          }}
        >
          {/* Search Input Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-full)',
              padding: '8px 16px',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            <Search size={16} style={{ color: 'var(--text-dim)', flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Search by technology, name, or industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-primary)',
                fontSize: '16px',
                width: '100%'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ cursor: 'pointer', color: 'var(--text-dim)', padding: '2px' }}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Swipeable Category Filter Strip */}
          <div className="filter-scroll-strip">
            {CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  style={{
                    padding: '7px 15px',
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
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 16px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '60px'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>No projects match your filter</h3>
            <p style={{ color: 'var(--text-dim)', marginBottom: '18px', fontSize: '0.9rem' }}>
              Try searching for a different keyword or resetting your category tab.
            </p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="btn btn-secondary btn-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 310px), 1fr))',
              gap: 'clamp(18px, 3vw, 28px)',
              marginBottom: '64px'
            }}
          >
            {filteredProjects.map((proj) => (
              <ProjectCard
                key={proj.slug}
                project={proj}
                onQuickPreview={(p) => setPreviewProject(p)}
              />
            ))}
          </div>
        )}

        {/* Bottom Project Consultation Banner */}
        <div
          className="card-glass"
          style={{
            padding: 'clamp(24px, 4vw, 44px)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-accent)',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(20, 31, 61, 0.7) 0%, rgba(10, 17, 34, 0.9) 100%)'
          }}
        >
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', marginBottom: '12px' }}>
            Inspired by One of Our Builds?
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            We can architect a tailored website or online store tailored to your brand identity, product catalogue, and target customers.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg" style={{ width: 'min(100%, 280px)' }}>
              <Sparkles size={18} />
              <span>Discuss Your Website Concept</span>
            </Link>
            <Link to="/estimator" className="btn btn-secondary btn-lg" style={{ width: 'min(100%, 260px)' }}>
              <span>Try Cost Estimator</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {previewProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(2, 4, 10, 0.85)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            boxSizing: 'border-box'
          }}
          onClick={() => setPreviewProject(null)}
        >
          <div
            className="card-glass"
            style={{
              width: '100%',
              maxWidth: '600px',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(10, 17, 34, 0.98)',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', overflow: 'hidden' }}>
              <img
                src={previewProject.image}
                alt={previewProject.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setPreviewProject(null)}
                aria-label="Close preview"
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.75)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ padding: 'clamp(16px, 3.5vw, 24px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {previewProject.categoryLabel}
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: previewProject.isDemo ? 'rgba(34, 211, 238, 0.1)' : 'rgba(34, 197, 94, 0.15)',
                    color: previewProject.isDemo ? 'var(--accent-cyan)' : '#4ade80',
                    fontWeight: 600
                  }}
                >
                  {previewProject.badgeText}
                </span>
              </div>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{previewProject.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {previewProject.overview}
              </p>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Link
                  to={`/portfolio/${previewProject.slug}`}
                  className="btn btn-primary btn-sm"
                  onClick={() => setPreviewProject(null)}
                  style={{ flex: '1 1 140px' }}
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight size={14} />
                </Link>

                {previewProject.demoUrl && previewProject.demoUrl !== '#' && (
                  <a
                    href={previewProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ flex: '1 1 120px' }}
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
