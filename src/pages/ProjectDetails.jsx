import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { projects } from '../data/projects';
import { ExternalLink, Check, Sparkles, ArrowLeft, ArrowRight, ShieldCheck, Smartphone, Layers } from 'lucide-react';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const isLive = !project.isDemo;

  // Next and previous project links for smooth navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div style={{ paddingTop: '40px', paddingBottom: '100px' }}>
      <SEO
        title={`${project.title} — Case Study | HS Web Studio`}
        description={project.overview || project.description}
      />

      <div className="container">
        {/* Breadcrumb Navigation */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '32px' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <Link to="/portfolio" style={{ color: 'var(--text-secondary)' }}>Portfolio</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--accent-cyan)' }}>{project.title}</span>
        </div>

        {/* Project Header */}
        <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--accent-cyan)',
                letterSpacing: '0.04em'
              }}
            >
              {project.categoryLabel}
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: isLive ? 'rgba(16, 185, 129, 0.15)' : 'rgba(34, 211, 238, 0.1)',
                color: isLive ? '#4ade80' : 'var(--accent-cyan)',
                border: isLive ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(34, 211, 238, 0.3)'
              }}
            >
              {project.badgeText}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '16px' }}>
            {project.title}
          </h1>

          {project.subtitle && (
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '20px' }}>
              {project.subtitle}
            </h2>
          )}

          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
            {project.overview}
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' }}>
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <span>{isLive ? 'Visit Live Storefront' : 'Launch Live Demo'}</span>
                <ExternalLink size={16} />
              </a>
            )}

            <a href="#inquiry" className="btn btn-secondary btn-lg">
              <span>Request Similar Solution</span>
            </a>
          </div>
        </div>

        {/* Featured Project Showcase Image */}
        <div
          className="card-glass"
          style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border-medium)',
            marginBottom: '72px',
            backgroundColor: project.colors ? project.colors[1] : '#0a101f',
            boxShadow: 'var(--shadow-lg), 0 0 45px rgba(34, 211, 238, 0.1)'
          }}
        >
          <img
            src={project.image}
            alt={`${project.title} Full Showcase`}
            style={{
              width: '100%',
              maxHeight: '620px',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>

        {/* Challenge, Approach & Architecture */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            marginBottom: '72px'
          }}
        >
          {/* Challenge Box */}
          <div
            className="card-glass"
            style={{
              padding: '36px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <h3 style={{ fontSize: '1.35rem', marginBottom: '16px', color: '#f87171' }}>
              The Strategic Challenge
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
              {project.challenge || 'Balancing aesthetic brand storytelling with instant load speeds and intuitive navigation tailored for mobile shoppers.'}
            </p>
          </div>

          {/* Solution Approach Box */}
          <div
            className="card-glass"
            style={{
              padding: '36px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-medium)',
              background: 'linear-gradient(135deg, rgba(20, 31, 61, 0.7) 0%, rgba(10, 17, 34, 0.9) 100%)'
            }}
          >
            <h3 style={{ fontSize: '1.35rem', marginBottom: '16px', color: 'var(--accent-cyan)' }}>
              The Engineering Solution
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
              {project.approach || 'Engineered with clean semantic markup, optimized image delivery, and direct conversion triggers to maximize client inquiries.'}
            </p>
          </div>
        </div>

        {/* Key Features & Technology Stack Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            marginBottom: '72px'
          }}
        >
          {/* Key Features List */}
          <div
            className="card-glass"
            style={{
              padding: '36px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <h3 style={{ fontSize: '1.35rem', marginBottom: '20px' }}>
              Key Implemented Features
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {project.features && project.features.map((feat, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5
                  }}
                >
                  <Check size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '3px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack & Deliverables */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Tech stack */}
            <div
              className="card-glass"
              style={{
                padding: '30px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <h4 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--accent-cyan)' }}>
                Technologies Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.technologies && project.technologies.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            {project.deliverables && (
              <div
                className="card-glass"
                style={{
                  padding: '30px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <h4 style={{ fontSize: '1.1rem', marginBottom: '16px', color: '#4ade80' }}>
                  Project Deliverables
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.deliverables.map((del, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.88rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <ShieldCheck size={16} style={{ color: '#4ade80' }} />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Previous / Next Project Navigation Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            padding: '24px 0',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '80px'
          }}
        >
          {prevProject ? (
            <Link
              to={`/portfolio/${prevProject.slug}`}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}
            >
              <ArrowLeft size={16} />
              <span>Previous: <strong>{prevProject.title}</strong></span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            to="/portfolio"
            style={{ color: 'var(--accent-cyan)', fontSize: '0.88rem', fontWeight: 600 }}
          >
            All Projects Gallery
          </Link>

          {nextProject ? (
            <Link
              to={`/portfolio/${nextProject.slug}`}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}
            >
              <span>Next: <strong>{nextProject.title}</strong></span>
              <ArrowRight size={16} />
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Direct Inquiry Form for Similar Scope */}
        <div id="inquiry" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <SectionHeading
            badge="Start Similar Build"
            title={`Discuss a Project Like ${project.title}`}
            description="Looking for an e-commerce platform, business website, or custom software built with this caliber of design? Let's discuss your timeline and functional requirements."
          />
          <ContactForm prefilledMessage={`Inquiring regarding a project similar in scope to ${project.title}`} />
        </div>
      </div>
    </div>
  );
}
