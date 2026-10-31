import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { Target, Compass, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '32px', paddingBottom: '90px' }}>
      <SEO
        title="About Us | HS Web Studio — Web Development"
        description="Learn about HS Web Studio, founded by Muhammad Hassan Khan in Karachi, and our approach to building modern, high-performance websites and digital solutions that help businesses grow."
      />

      <div className="container">
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--accent-cyan)' }}>About HS Web Studio</span>
        </div>

        {/* Hero Banner */}
        <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
          <div className="section-badge">
            <span className="badge-dot" />
            <span>Digital Studio Profile</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 800, marginBottom: '16px' }}>
            Engineering Digital Authority for{' '}
            <span className="text-gradient-cyan">Growing Businesses.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.75 }}>
            HS Web Studio was established in Karachi, Pakistan, with a singular mission: to provide ambitious companies with clean, high-performance websites and custom digital solutions that match the sophistication of top international agencies without the bloated agency overhead.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}
        >
          <div
            className="card-glass"
            style={{
              padding: 'clamp(22px, 4vw, 36px)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-medium)',
              background: 'linear-gradient(135deg, rgba(20, 31, 61, 0.7) 0%, rgba(10, 17, 34, 0.9) 100%)',
              boxSizing: 'border-box'
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--accent-cyan-dim)',
                color: 'var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}
            >
              <Target size={22} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Our Mission</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.92rem', margin: 0 }}>
              To help businesses establish a stronger digital presence through fast, reliable, and thoughtfully designed websites. We focus on building practical digital solutions that improve customer experience, strengthen brand credibility, and make it easier for businesses to reach their customers.
            </p>
          </div>

          <div
            className="card-glass"
            style={{
              padding: 'clamp(22px, 4vw, 36px)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              boxSizing: 'border-box'
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                color: '#818cf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}
            >
              <Compass size={22} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Our Vision</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.92rem', margin: 0 }}>
              To become a trusted web development studio in Karachi, known for quality engineering, transparent communication, and lasting relationships with businesses we work with.
            </p>
          </div>
        </div>

        {/* Founder & Leadership Section */}
        <div
          className="card-glass"
          style={{
            padding: 'clamp(22px, 4vw, 44px)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-medium)',
            marginBottom: '64px',
            background: 'linear-gradient(135deg, rgba(14, 23, 46, 0.9) 0%, rgba(8, 14, 28, 0.95) 100%)',
            boxSizing: 'border-box'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(24px, 4vw, 36px)',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="section-badge">
                <span className="badge-dot" />
                <span>Founder & Lead Engineer</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2rem)', marginBottom: '12px' }}>Muhammad Hassan Khan</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.94rem', marginBottom: '14px' }}>
                I founded HS Web Studio with a goal of combining modern software engineering with practical business needs. I work with retail brands, clinics, and professional businesses to build websites and digital solutions that strengthen their online presence and help them connect with more customers.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.92rem', marginBottom: '22px' }}>
                &ldquo;A website shouldn't just be an expensive online business card that sits stagnant. It should be a valuable business tool—working around the clock to present your services, build customer trust, and make it easier for people to connect with your business.&rdquo;
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/923312901930"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm about-btn"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="mailto:hswebstudio3@gmail.com"
                  className="btn btn-ghost btn-sm about-btn"
                >
                  <span>Email Hassan Directly</span>
                </a>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                padding: 'clamp(18px, 3.5vw, 26px)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                boxSizing: 'border-box'
              }}
            >
              <h4 style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)' }}>Our Studio Commitments</h4>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                <CheckCircle size={15} style={{ color: '#4ade80', flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Clean Development:</strong> We prioritize structured, maintainable code and performance-focused development.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                <CheckCircle size={15} style={{ color: '#4ade80', flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Transparent Communication:</strong> Clear milestones, regular progress updates, and honest project discussions.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                <CheckCircle size={15} style={{ color: '#4ade80', flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Ongoing Support:</strong> Post-launch assistance, technical guidance, and maintenance options to keep your website running smoothly.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Development Philosophy */}
        <div style={{ marginBottom: '64px' }}>
          <SectionHeading
            badge="Engineering Philosophy"
            title="Principles That Guide Every Line of Code"
            description="Our core technical values ensure your application remains stable, fast, and easy to maintain for years to come."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '20px'
            }}
          >
            <div className="card-glass" style={{ padding: '24px 20px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: '6px' }}>01</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Performance by Default</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Every millisecond matters. We enforce optimized bundling, clean CSS, and lazy asset loading to achieve rapid initial paints.
              </p>
            </div>

            <div className="card-glass" style={{ padding: '24px 20px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: '6px' }}>02</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Mobile Ergonomics</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                We test every touch target, checkout interaction, and sheet modal on real iOS and Android devices, not just browser emulators.
              </p>
            </div>

            <div className="card-glass" style={{ padding: '24px 20px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: '6px' }}>03</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Long-Term Maintainability</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Modular component structures, clear prop boundaries, and centralized data layers make future feature expansions effortless.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
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
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', marginBottom: '12px' }}>Ready to Elevate Your Web Presence?</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto 24px auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Whether you need a new website, a Shopify e-commerce store, or an intelligent POS system for your shop, we are ready to bring your ideas to life.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg" style={{ width: 'min(100%, 280px)' }}>
              <Sparkles size={18} />
              <span>Get in Touch with Our Team</span>
            </Link>
            <Link to="/portfolio" className="btn btn-secondary btn-lg" style={{ width: 'min(100%, 240px)' }}>
              <span>View Selected Work</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 520px) {
          .about-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
