import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import ContactForm from '../components/ContactForm';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { Check, Sparkles, MessageCircle, ArrowRight, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

export default function ServiceDetailTemplate({ serviceSlug }) {
  const params = useParams();
  const slug = serviceSlug || params.slug;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Filter relevant portfolio projects for this service
  const relevantProjects = projects.filter((p) => {
    if (slug === 'shopify') return p.technologies?.includes('Shopify') || p.category === 'ecommerce';
    if (slug === 'ecommerce') return p.category === 'ecommerce';
    if (slug === 'pos-systems') return p.slug === 'pos-system';
    if (slug === 'business-websites') return p.category === 'business' || p.category === 'healthcare';
    if (slug === 'custom-web-apps') return p.slug === 'pos-system' || p.slug === 'idds';
    return true;
  }).slice(0, 3);

  return (
    <div style={{ paddingTop: '40px', paddingBottom: '100px' }}>
      <SEO
        title={`${service.title} | HS Web Studio Karachi`}
        description={service.shortDesc}
      />

      <div className="container">
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '32px' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <Link to="/services" style={{ color: 'var(--text-secondary)' }}>Services</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--accent-cyan)' }}>{service.shortTitle}</span>
        </div>

        {/* Hero Banner */}
        <div style={{ maxWidth: '820px', marginBottom: '64px' }}>
          <div className="section-badge">
            <span className="badge-dot" />
            <span>{service.eyebrow}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '20px' }}>
            {service.title}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
            {service.fullDesc}
          </p>
        </div>

        {/* Key Benefits & Features Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '32px',
            marginBottom: '72px'
          }}
        >
          {/* Benefits Column */}
          <div
            className="card-glass"
            style={{
              padding: 'clamp(20px, 4vw, 36px)',
              boxSizing: 'border-box',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-medium)',
              background: 'linear-gradient(135deg, rgba(20, 31, 61, 0.7) 0%, rgba(10, 17, 34, 0.9) 100%)'
            }}
          >
            <h3 style={{ fontSize: '1.35rem', marginBottom: '20px', color: 'var(--accent-cyan)' }}>
              Commercial Advantages
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {service.benefits.map((b, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '0.94rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}
                >
                  <Check size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '3px' }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Column */}
          <div
            className="card-glass"
            style={{
              padding: 'clamp(20px, 4vw, 36px)',
              boxSizing: 'border-box',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <h3 style={{ fontSize: '1.35rem', marginBottom: '20px', color: 'var(--text-primary)' }}>
              Core Features & Architecture
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {service.features.map((f, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '0.94rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}
                >
                  <Zap size={18} style={{ color: '#60a5fa', flexShrink: 0, marginTop: '3px' }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deliverables Section */}
        <div
          className="card-glass"
          style={{
            padding: 'clamp(20px, 4vw, 36px)',
            boxSizing: 'border-box',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '72px'
          }}
        >
          <h3 style={{ fontSize: '1.35rem', marginBottom: '16px' }}>What You Receive (Deliverables)</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '16px'
            }}
          >
            {service.deliverables.map((del, idx) => (
              <div
                key={idx}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)'
                }}
              >
                <ShieldCheck size={18} style={{ color: '#4ade80', flexShrink: 0 }} />
                <span>{del}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Portfolio Examples */}
        {relevantProjects.length > 0 && (
          <div style={{ marginBottom: '72px' }}>
            <SectionHeading
              badge="Relevant Demonstrations"
              title={`Selected Work: ${service.shortTitle}`}
              description="Review real-world client deliverables and concept builds that demonstrate our craftsmanship in this exact domain."
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '24px'
              }}
            >
              {relevantProjects.map((proj) => (
                <div
                  key={proj.slug}
                  className="card-glass"
                  style={{
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10' }}>
                    <img
                      src={proj.image}
                      alt={proj.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                        {proj.categoryLabel}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                        {proj.badgeText}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>{proj.title}</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                      {proj.overview}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Link
                        to={`/portfolio/${proj.slug}`}
                        style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}
                      >
                        <span>Case Study</span>
                        <ArrowRight size={14} />
                      </Link>
                      {proj.demoUrl && proj.demoUrl !== '#' && (
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: '0.82rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '4px' }}
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Service Specific FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div style={{ marginBottom: '80px' }}>
            <SectionHeading
              badge="FAQ"
              title={`Questions About ${service.shortTitle}`}
              description="Key questions frequently asked by business owners considering this service."
            />
            <FAQAccordion items={service.faqs} />
          </div>
        )}

        {/* Inquiry Form */}
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <SectionHeading
            badge="Start Your Project"
            title={`Request a Quote for ${service.title}`}
            description="Tell us about your business goals and feature requirements. We will analyze your specifications and reply with an itemized proposal."
          />
          <ContactForm prefilledService={service.title} />
        </div>
      </div>
    </div>
  );
}
