import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';

export default function Services({ onInquireService }) {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          badge="Core Capabilities"
          title="Digital Solutions Tailored to Your Growth"
          description="From corporate identity websites to bespoke high-scale Shopify stores and retail POS engines, we build web solutions engineered for reliability, speed, and real revenue generation."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(18px, 3vw, 28px)',
            marginBottom: '40px'
          }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              onInquire={onInquireService}
            />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/services" className="btn btn-secondary btn-lg" style={{ width: 'min(100%, 420px)' }}>
            <span>Explore All Detailed Service Outlines & FAQs</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
