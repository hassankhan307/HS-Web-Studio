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
import ReviewsSection from '../sections/ReviewsSection';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';
import CostEstimator from '../components/CostEstimator';
import SectionHeading from '../components/SectionHeading';
import MultiStepInquiryModal from '../components/MultiStepInquiryModal';

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

      {/* Real-Time Verified Client Experiences / Testimonials */}
      <ReviewsSection />

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
