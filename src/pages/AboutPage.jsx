import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { ShieldCheck, Code, Compass, Target, Sparkles, MapPin, CheckCircle, ArrowRight, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '40px', paddingBottom: '100px' }}>
      <SEO
        title="About Us | HS Web Studio — Karachi Web Development"
        description="Learn about HS Web Studio, our Karachi roots, our founder Hassan Khan, and our dedication to crafting modern, high-performance websites and digital solutions."
      />

      <div className="container">
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '32px' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--accent-cyan)' }}>About HS Web Studio</span>
        </div>

        {/* Hero Banner */}
        <div style={{ maxWidth: '820px', marginBottom: '72px' }}>
          <div className="section-badge">
            <span className="badge-dot" />
            <span>Digital Studio Profile</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '24px' }}>
            Engineering Digital Authority for{' '}
            <span className="text-gradient-cyan">Growing Businesses.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
            HS Web Studio was established in Karachi, Pakistan, with a singular mission: to provide ambitious companies with clean, high-performance websites and custom digital solutions that match the sophistication of top international agencies without the bloated agency overhead.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            marginBottom: '80px'
          }}
        >
          <div
            className="card-glass"
            style={{
              padding: '36px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-medium)',
              background: 'linear-gradient(135deg, rgba(20, 31, 61, 0.7) 0%, rgba(10, 17, 34, 0.9) 100%)'
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--accent-cyan-dim)',
                color: 'var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <Target size={24} />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '14px' }}>Our Mission</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              To eliminate the gap between ordinary, slow templates and high-revenue digital platforms. We build websites that load instantly on mobile networks, present corporate brands with undeniable prestige, and convert casual visitors into qualified customers.
            </p>
          </div>

          <div
            className="card-glass"
            style={{
              padding: '36px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                color: '#818cf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <Compass size={24} />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '14px' }}>Our Vision</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              To be Karachi's most trusted, technically proficient web studio—celebrated for transparent communication, immaculate code standards, and long-term client relationships that continuously drive business success.
            </p>
          </div>
        </div>

        {/* Founder & Leadership Section */}
        <div
          className="card-glass"
          style={{
            padding: '48px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-medium)',
            marginBottom: '80px',
            background: 'linear-gradient(135deg, rgba(14, 23, 46, 0.9) 0%, rgba(8, 14, 28, 0.95) 100%)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="section-badge">
                <span className="badge-dot" />
                <span>Founder & Lead Engineer</span>
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Hassan Khan</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '16px' }}>
                With a passion for modern software engineering and commercial design, Hassan founded HS Web Studio to provide retail brands, clinics, and professional practices with high-performance web applications that actually drive inquiries.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '24px' }}>
                &ldquo;A website shouldn't just be an expensive online business card that sits stagnant. It should be your most effective sales asset—working 24/7 to articulate your business value, build immediate trust, and simplify how customers place orders or request quotes.&rdquo;
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <a
                  href="https://wa.me/923312901930"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="mailto:hswebstudio3@gmail.com"
                  className="btn btn-ghost btn-sm"
                >
                  <span>Email Hassan Directly</span>
                </a>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '30px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)' }}>Our Studio Commitments</h4>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <CheckCircle size={16} style={{ color: '#4ade80', flexShrink: 0, marginTop: '3px' }} />
                <span>We write real, semantic code—no bloated drag-and-drop page builders that slow down your mobile score.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <CheckCircle size={16} style={{ color: '#4ade80', flexShrink: 0, marginTop: '3px' }} />
                <span>We respect your time: honest milestones, frequent updates, and zero communication blackouts.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <CheckCircle size={16} style={{ color: '#4ade80', flexShrink: 0, marginTop: '3px' }} />
                <span>We support what we build: post-launch warranties, DNS assistance, and long-term retainer support.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Development Philosophy */}
        <div style={{ marginBottom: '80px' }}>
          <SectionHeading
            badge="Engineering Philosophy"
            title="Principles That Guide Every Line of Code"
            description="Our core technical values ensure your application remains stable, fast, and easy to maintain for years to come."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            <div className="card-glass" style={{ padding: '28px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: '8px' }}>01</div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Performance by Default</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Every millisecond matters. We enforce optimized bundling, clean CSS, and lazy asset loading to achieve rapid initial paints.
              </p>
            </div>

            <div className="card-glass" style={{ padding: '28px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: '8px' }}>02</div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Mobile Ergonomics</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                We test every touch target, checkout interaction, and sheet modal on real iOS and Android devices, not just browser emulators.
              </p>
            </div>

            <div className="card-glass" style={{ padding: '28px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: '8px' }}>03</div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Long-Term Maintainability</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Modular component structures, clear prop boundaries, and centralized data layers make future feature expansions effortless.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div
          className="card-glass"
          style={{
            padding: '44px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-accent)',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(20, 31, 61, 0.7) 0%, rgba(10, 17, 34, 0.9) 100%)'
          }}
        >
          <h2 style={{ fontSize: '2.2rem', marginBottom: '14px' }}>Ready to Elevate Your Web Presence?</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto 28px auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Whether you need a new website, a Shopify e-commerce store, or an intelligent POS system for your shop, we are ready to bring your ideas to life.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              <Sparkles size={18} />
              <span>Get in Touch with Our Team</span>
            </Link>
            <Link to="/portfolio" className="btn btn-secondary btn-lg">
              <span>View Selected Work</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
