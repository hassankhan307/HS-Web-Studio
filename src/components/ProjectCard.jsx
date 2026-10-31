import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Eye } from 'lucide-react';

export default function ProjectCard({ project, onQuickPreview }) {
  const isLive = !project.isDemo;

  return (
    <article
      className="card-glass project-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--border-subtle)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'var(--border-accent)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(34, 211, 238, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {/* Media Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          backgroundColor: project.colors ? project.colors[1] : '#0b1626',
          overflow: 'hidden'
        }}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          className="project-thumb-img"
        />

        {/* Badge: Live vs Demo */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            zIndex: 2,
            padding: '4px 10px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
            backgroundColor: isLive ? 'rgba(16, 185, 129, 0.9)' : 'rgba(10, 17, 34, 0.85)',
            backdropFilter: 'blur(8px)',
            color: isLive ? '#ffffff' : 'var(--accent-cyan)',
            border: isLive ? '1px solid rgba(16, 185, 129, 0.5)' : '1px solid rgba(34, 211, 238, 0.4)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}
        >
          {isLive ? '● Live Client Store' : 'Demo Concept'}
        </div>

        {/* Quick Preview overlay on hover */}
        {onQuickPreview && (
          <button
            onClick={() => onQuickPreview(project)}
            aria-label={`Quick view ${project.title}`}
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(5, 7, 15, 0.85)',
              border: '1px solid var(--border-medium)',
              backdropFilter: 'blur(8px)',
              color: 'var(--text-primary)',
              fontSize: '0.78rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            <Eye size={13} />
            <span>Quick View</span>
          </button>
        )}
      </div>

      {/* Card Content Body */}
      <div
        style={{
          padding: '22px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '8px'
          }}
        >
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--accent-cyan)'
            }}
          >
            {project.categoryLabel}
          </span>
        </div>

        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '8px'
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            marginBottom: '18px',
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {project.overview || project.description}
        </p>

        {/* Tech Stack Tags */}
        {project.technologies && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: '20px'
            }}
          >
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: '0.72rem',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Card CTA Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <Link
            to={`/portfolio/${project.slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: 'var(--accent-cyan)',
              textDecoration: 'none'
            }}
          >
            <span>Case Study</span>
            <ArrowRight size={14} />
          </Link>

          {project.demoUrl && project.demoUrl !== '#' && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.84rem',
                fontWeight: 500,
                color: 'var(--text-muted)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-xs)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <span>{isLive ? 'Visit Site' : 'Live Demo'}</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
