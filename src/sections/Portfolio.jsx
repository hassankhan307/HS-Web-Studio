import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { ExternalLink, X, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ecommerce', label: 'E-Commerce & Shopify' },
  { id: 'business', label: 'Business & Showrooms' },
  { id: 'healthcare', label: 'Healthcare & Clinics' },
  { id: 'restaurant', label: 'Dining & Hospitality' }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [previewProject, setPreviewProject] = useState(null);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'restaurant') return p.category === 'restaurant' || p.category === 'other';
    return p.category === activeFilter;
  });

  return (
    <section className="section" id="portfolio" style={{ backgroundColor: 'rgba(10, 17, 34, 0.4)' }}>
      <div className="container">
        <SectionHeading
          badge="Selected Portfolio & Demos"
          title="Proven Builds & Commercial Concepts"
          description="A curated showcase of live client storefronts and custom concept demonstrations engineered to show how HS Web Studio elevates businesses across retail, healthcare, hospitality, and corporate sectors."
        />

        {/* Swipeable Category Filter Strip on Mobile, Centered on Desktop */}
        <div
          role="tablist"
          aria-label="Filter portfolio categories"
          className="filter-scroll-strip"
          style={{
            justifyContent: 'flex-start',
            marginBottom: '36px'
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '8px',
              margin: '0 auto',
              flexWrap: 'nowrap'
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(cat.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    backgroundColor: isActive ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.04)',
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

        {/* Responsive Project Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(20px, 3vw, 30px)',
            marginBottom: '40px'
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

        {/* View Full Portfolio Link */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/portfolio" className="btn btn-primary btn-lg" style={{ width: 'min(100%, 420px)' }}>
            <span>Explore Complete Portfolio Gallery</span>
            <ArrowRight size={18} />
          </Link>
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
            {/* Modal Image */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', overflow: 'hidden' }}>
              <img
                src={previewProject.image}
                alt={previewProject.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setPreviewProject(null)}
                aria-label="Close modal"
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
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

            {/* Modal Body */}
            <div style={{ padding: 'clamp(18px, 4vw, 24px)' }}>
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
    </section>
  );
}
