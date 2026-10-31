import { useState } from 'react';
import SEO from '../components/SEO';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import POSSection from '../sections/POSSection';
import WhyChooseUs from '../sections/WhyChooseUs';
import Technologies from '../sections/Technologies';
import Process from '../sections/Process';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';
import CostEstimator from '../components/CostEstimator';
import SectionHeading from '../components/SectionHeading';
import MultiStepInquiryModal from '../components/MultiStepInquiryModal';
import { testimonials } from '../data/testimonials';
import { MessageCircle, ExternalLink, Star, Quote } from 'lucide-react';

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalInitialText, setModalInitialText] = useState('');
  const [prefilledService, setPrefilledService] = useState('');

  const openQuoteModalWith = (initial = '') => {
    setModalInitialText(initial);
    setQuoteModalOpen(true);
  };

  const handleInquireService = (serviceTitle) => {
    setPrefilledService(serviceTitle);
    openQuoteModalWith(`Inquiring about ${serviceTitle}`);
  };

  const handleSelectPackage = (packageName) => {
    openQuoteModalWith(`Interested in the ${packageName}`);
  };

  return (
    <>
      <SEO
        title="HS Web Studio | Digital Agency & Web Development Karachi"
        description="We build modern, high-converting websites, Shopify stores, custom web applications, and POS systems for businesses in Karachi and globally."
      />

      {/* Hero Section */}
      <Hero onOpenQuoteModal={() => openQuoteModalWith('General Inquiry from Hero')} />

      {/* About Summary */}
      <About />

      {/* Core Services */}
      <Services onInquireService={handleInquireService} />

      {/* Selected Portfolio */}
      <Portfolio />

      {/* POS Systems Showcase */}
      <POSSection onAskAboutPOS={(title) => handleInquireService(title)} />

      {/* Why Choose Us Bento Section */}
      <WhyChooseUs />

      {/* Interactive Cost & Timeline Estimator Section */}
      <section className="section" id="estimator">
        <div className="container">
          <SectionHeading
            badge="Budget & Scope Planning"
            title="Interactive Project Cost & Timeline Estimator"
            description="Experiment with different project configurations, feature sets, and page volumes to get an instant, transparent ballpark investment estimate."
          />
          <CostEstimator
            onProceedToInquiry={(specNote) => openQuoteModalWith(specNote)}
          />
        </div>
      </section>

      {/* Technology Stack Showcase */}
      <Technologies />

      {/* Development Process Timeline */}
      <Process />

      {/* Pricing Packages */}
      <Pricing onSelectPackage={handleSelectPackage} />

      {/* Verified Client Testimonials / Social Proof */}
      <section className="section" style={{ backgroundColor: 'rgba(10, 17, 34, 0.4)' }}>
        <div className="container">
          <SectionHeading
            badge="Client Authenticity"
            title="Real Client Results — Verified Delivery"
            description="We strictly reject fabricated reviews and fake statistics. Here is feedback from our verified client deliveries."
          />

          <div
            style={{
              maxWidth: '840px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="card-glass"
                style={{
                  padding: '36px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-medium)',
                  position: 'relative'
                }}
              >
                <Quote
                  size={36}
                  style={{
                    color: 'var(--accent-cyan)',
                    opacity: 0.25,
                    position: 'absolute',
                    top: '28px',
                    right: '28px'
                  }}
                />

                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} style={{ color: '#eab308', fill: '#eab308' }} />
                  ))}
                  <span
                    style={{
                      fontSize: '0.75rem',
                      marginLeft: '8px',
                      color: '#4ade80',
                      fontWeight: 600,
                      backgroundColor: 'rgba(34, 197, 94, 0.1)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    ✓ Verified Client Project
                  </span>
                </div>

                <p
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: '20px'
                  }}
                >
                  &ldquo;{t.feedback}&rdquo;
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-subtle)'
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {t.clientName}
                    </h4>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                      {t.role} · {t.projectType}
                    </div>
                  </div>

                  {t.projectUrl && (
                    <a
                      href={t.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm"
                    >
                      <span>Visit Live Store</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQ />

      {/* Main Contact Section */}
      <Contact
        prefilledService={prefilledService}
        prefilledMessage={modalInitialText}
      />

      {/* Multi-Step Interactive Quote Modal */}
      <MultiStepInquiryModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialData={modalInitialText}
      />
    </>
  );
}
