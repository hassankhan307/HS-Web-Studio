import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '40px', paddingBottom: '100px' }}>
      <SEO
        title="Services & Capabilities | HS Web Studio Karachi"
        description="Explore our specialized digital services: business websites, Shopify stores, custom web apps, retail POS systems, redesigns, and maintenance retainers."
      />

      <div className="container">
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '32px' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--accent-cyan)' }}>Our Services</span>
        </div>

        {/* Page Header */}
        <div style={{ maxWidth: '820px', marginBottom: '64px' }}>
          <div className="section-badge">
            <span className="badge-dot" />
            <span>Comprehensive Solutions</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '20px' }}>
            Tailored Web Solutions Built for{' '}
            <span className="text-gradient-cyan">Commercial Impact.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
            Every business has distinct operational requirements and revenue drivers. Explore our core services below to see how our engineering standards and design craft help you capture more customers and dominate your sector.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '30px',
            marginBottom: '80px'
          }}
        >
          {services.map((srv) => (
            <ServiceCard key={srv.slug} service={srv} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          className="card-glass"
          style={{
            padding: 'clamp(24px, 5vw, 48px)',
            boxSizing: 'border-box',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-accent)',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(20, 31, 61, 0.7) 0%, rgba(10, 17, 34, 0.9) 100%)'
          }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '14px' }}>
            Not Sure Which Solution Fits Your Business Best?
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 28px auto', fontSize: '1rem', lineHeight: 1.7 }}>
            Schedule a no-obligation discovery call with our lead developer. We will analyze your current workflow and recommend the exact technical solution for your budget.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              <Sparkles size={18} />
              <span>Request a Custom Quote</span>
            </Link>
            <a
              href="https://wa.me/923312901930"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
