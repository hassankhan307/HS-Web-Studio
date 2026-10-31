import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { projects } from '../data/projects';
import { ExternalLink, Check, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const isLive = !project.isDemo;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div style={{ paddingTop: '32px', paddingBottom: '90px' }}>
      <SEO
        title={`${project.title} — Case Study | HS Web Studio`}
        description={project.overview || project.description}
      />

      <div className="container">
        {/* Breadcrumb Navigation */}
        <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <Link to="/portfolio" style={{ color: 'var(--text-secondary)' }}>Portfolio</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--accent-cyan)' }}>{project.title}</span>
        </div>

        {/* Project Header */}
        <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '0.78rem',
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
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: isLive ? 'rgba(16, 185, 129, 0.15)' : 'rgba(34, 211, 238, 0.1)',
                color: isLive ? '#4ade80' : 'var(--accent-cyan)',
                border: isLive ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(34, 211, 238, 0.3)'
              }}
            >
              {project.badgeText}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4.8vw, 3.4rem)', fontWeight: 800, marginBottom: '14px' }}>
            {project.title}
          </h1>

          {project.subtitle && (
            <h2 style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '16px' }}>
              {project.subtitle}
            </h2>
          )}

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.75 }}>
            {project.overview}
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg proj-cta-btn"
              >
                <span>{isLive ? 'Visit Live Storefront' : 'Launch Live Demo'}</span>
                <ExternalLink size={16} />
              </a>
            )}

            <a href="#inquiry" className="btn btn-secondary btn-lg proj-cta-btn">
              <span>Request Similar Solution</span>
            </a>
          </div>
        </div>

        {/* Featured Project Showcase Image */}
        <div
          className="card-glass"
          style={{
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid var(--border-medium)',
            marginBottom: '56px',
            backgroundColor: project.colors ? project.colors[1] : '#0a101f',
            boxShadow: 'var(--shadow-lg), 0 0 35px rgba(34, 211, 238, 0.1)'
          }}
        >
          <img
            src={project.image}
            alt={`${project.title} Full Showcase`}
            style={{
              width: '100%',
              maxHeight: '560px',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>

        {/* Challenge, Approach & Architecture */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '24px',
            marginBottom: '56px'
          }}
        >
          {/* Challenge Box */}
          <div
            className="card-glass"
            style={{
              padding: 'clamp(20px, 3.5vw, 32px)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              boxSizing: 'border-box'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#f87171' }}>
              The Strategic Challenge
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
              {project.challenge || 'Balancing aesthetic brand storytelling with instant load speeds and intuitive navigation tailored for mobile shoppers.'}
            </p>
          </div>

          {/* Solution Approach Box */}
          <div
            className="card-glass"
            style={{
              padding: 'clamp(20px, 3.5vw, 32px)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-medium)',
              background: 'linear-gradient(135deg, rgba(20, 31, 61, 0.7) 0%, rgba(10, 17, 34, 0.9) 100%)',
              boxSizing: 'border-box'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--accent-cyan)' }}>
              The Engineering Solution
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
              {project.approach || 'Engineered with clean semantic markup, optimized image delivery, and direct conversion triggers to maximize client inquiries.'}
            </p>
          </div>
        </div>

        {/* Key Features & Technology Stack Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '24px',
            marginBottom: '56px'
          }}
        >
          {/* Key Features List */}
          <div
            className="card-glass"
            style={{
              padding: 'clamp(20px, 3.5vw, 32px)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              boxSizing: 'border-box'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>
              Key Implemented Features
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {project.features && project.features.map((feat, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5
                  }}
                >
                  <Check size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack & Deliverables */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Tech stack */}
            <div
              className="card-glass"
              style={{
                padding: 'clamp(20px, 3vw, 26px)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                boxSizing: 'border-box'
              }}
            >
              <h4 style={{ fontSize: '1.05rem', marginBottom: '14px', color: 'var(--accent-cyan)' }}>
                Technologies Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.technologies && project.technologies.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.82rem',
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
                  padding: 'clamp(20px, 3vw, 26px)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  boxSizing: 'border-box'
                }}
              >
                <h4 style={{ fontSize: '1.05rem', marginBottom: '14px', color: '#4ade80' }}>
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
                        fontSize: '0.86rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <ShieldCheck size={16} style={{ color: '#4ade80', flexShrink: 0 }} />
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
            gap: '14px',
            padding: '20px 0',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '64px'
          }}
        >
          {prevProject ? (
            <Link
              to={`/portfolio/${prevProject.slug}`}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.86rem' }}
            >
              <ArrowLeft size={15} />
              <span>Prev: <strong>{prevProject.title}</strong></span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            to="/portfolio"
            style={{ color: 'var(--accent-cyan)', fontSize: '0.84rem', fontWeight: 600 }}
          >
            All Projects
          </Link>

          {nextProject ? (
            <Link
              to={`/portfolio/${nextProject.slug}`}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.86rem' }}
            >
              <span>Next: <strong>{nextProject.title}</strong></span>
              <ArrowRight size={15} />
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Direct Inquiry Form */}
        <div id="inquiry" style={{ maxWidth: '840px', margin: '0 auto', width: '100%' }}>
          <SectionHeading
            badge="Start Similar Build"
            title={`Discuss a Project Like ${project.title}`}
            description="Looking for an e-commerce platform, business website, or custom software built with this caliber of design? Let's discuss your timeline and functional requirements."
          />
          <ContactForm prefilledMessage={`Inquiring regarding a project similar in scope to ${project.title}`} />
        </div>
      </div>

      <style>{`
        @media (max-width: 520px) {
          .proj-cta-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
