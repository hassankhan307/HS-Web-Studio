import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { Target, Cpu, Layout, Gauge, Wrench, LifeBuoy, ArrowRight, ShieldCheck, MessageSquare, Sparkles } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: 'Clean Development',
    desc: 'We prioritize structured, maintainable code and performance-focused development for long-term stability.'
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    desc: 'Clear milestones, regular progress updates, and honest project discussions at every phase of the build.'
  },
  {
    icon: LifeBuoy,
    title: 'Ongoing Support',
    desc: 'Post-launch assistance, technical guidance, and maintenance options to keep your website running smoothly.'
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
  }
];

export default function About() {
  return (
    <section className="section" id="about" style={{ backgroundColor: 'rgba(10, 17, 34, 0.4)' }}>
      <div className="container">
        <SectionHeading
          badge="About HS Web Studio"
          title="Bridging Technical Precision with Commercial Impact"
          description="HS Web Studio is an independent web studio founded by Muhammad Hassan Khan in Karachi, Pakistan. We focus on building fast, reliable, and thoughtfully designed digital solutions that improve customer experience, strengthen credibility, and help businesses connect with their customers."
        />

        {/* Mission & Vision Quick Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '20px',
            marginBottom: '36px'
          }}
        >
          <div
            className="card-glass"
            style={{
              padding: 'clamp(20px, 3.5vw, 28px)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-medium)',
              background: 'linear-gradient(135deg, rgba(20, 31, 61, 0.7) 0%, rgba(10, 17, 34, 0.9) 100%)',
              boxSizing: 'border-box'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', marginBottom: '8px' }}>
              Our Mission
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>
              To help businesses establish a stronger digital presence through fast, reliable, and thoughtfully designed websites. We focus on building practical digital solutions that improve customer experience, strengthen brand credibility, and make it easier for businesses to reach their customers.
            </p>
          </div>

          <div
            className="card-glass"
            style={{
              padding: 'clamp(20px, 3.5vw, 28px)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              boxSizing: 'border-box'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', color: '#818cf8', marginBottom: '8px' }}>
              Our Vision
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>
              To become a trusted web development studio in Karachi, known for quality engineering, transparent communication, and lasting relationships with businesses we work with.
            </p>
          </div>
        </div>

        {/* Studio Highlights Grid */}
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
              Explore Muhammad Hassan Khan&apos;s background, studio philosophy, and how we approach client partnerships.
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
