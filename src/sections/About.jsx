import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { Target, Cpu, Layout, Gauge, Wrench, LifeBuoy, ArrowRight } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Target,
    title: 'Business-Focused Thinking',
    desc: 'We prioritize your business objectives—generating leads, closing orders, and earning trust—not just writing code.'
  },
  {
    icon: Cpu,
    title: 'Modern Architecture',
    desc: 'Built on clean, scalable foundations like React, Vite, Node, and Shopify for maximum maintainability and zero tech debt.'
  },
  {
    icon: Layout,
    title: 'Responsive & Mobile-First',
    desc: 'Carefully engineered layouts that adapt effortlessly to compact smartphones, tablets, laptops, and ultra-wide screens.'
  },
  {
    icon: Gauge,
    title: 'Extreme Performance',
    desc: 'Optimized assets, minimal payload sizes, and high Lighthouse scores so visitors convert before bouncing.'
  },
  {
    icon: Wrench,
    title: 'Tailored Solutions',
    desc: 'Whether bespoke inventory logic, multi-variant retail matrices, or WhatsApp automations, we build what fits your exact model.'
  },
  {
    icon: LifeBuoy,
    title: 'Dedicated Support',
    desc: 'We stand behind our launches with ongoing maintenance, security updates, and dependable technical counsel.'
  }
];

export default function About() {
  return (
    <section className="section" style={{ backgroundColor: 'rgba(10, 17, 34, 0.4)' }}>
      <div className="container">
        <SectionHeading
          badge="About HS Web Studio"
          title="Bridging Technical Precision with Commercial Impact"
          description="HS Web Studio is an independent web development and digital solutions studio based in Karachi, Pakistan. We partner with ambitious local businesses and global brands to design, engineer, and deploy high-performing digital assets."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(16px, 2.5vw, 24px)',
            marginBottom: '40px'
          }}
        >
          {HIGHLIGHTS.map((h, idx) => {
            const Icon = h.icon;
            return (
              <div
                key={idx}
                className="card-glass"
                style={{
                  padding: 'clamp(20px, 3.5vw, 28px)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  boxSizing: 'border-box'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--accent-cyan-dim)',
                    border: '1px solid var(--border-accent)',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>{h.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                    {h.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout box to About Page */}
        <div
          className="card-glass"
          style={{
            padding: 'clamp(24px, 4vw, 36px)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            background: 'linear-gradient(135deg, rgba(20, 31, 61, 0.5) 0%, rgba(10, 17, 34, 0.8) 100%)'
          }}
        >
          <div style={{ maxWidth: '620px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>
              Want to learn more about our development ethos and founder story?
            </h3>
            <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.92rem' }}>
              Explore how we approach client partnerships, quality standards, and digital delivery.
            </p>
          </div>
          <Link to="/about" className="btn btn-primary" style={{ width: 'min(100%, 280px)' }}>
            <span>Read Our Studio Story</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
