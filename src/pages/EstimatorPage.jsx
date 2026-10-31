import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import CostEstimator from '../components/CostEstimator';
import MultiStepInquiryModal from '../components/MultiStepInquiryModal';
import { Sparkles, MessageCircle, HelpCircle, ShieldCheck } from 'lucide-react';

export default function EstimatorPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inquiryData, setInquiryData] = useState('');

  const handleProceed = (specNote) => {
    setInquiryData(specNote);
    setModalOpen(true);
  };

  return (
    <div style={{ paddingTop: '40px', paddingBottom: '100px' }}>
      <SEO
        title="Project Cost & Timeline Estimator | HS Web Studio Karachi"
        description="Estimate the investment range and development timeline for your website, Shopify store, or custom application with our transparent interactive calculator."
      />

      <div className="container">
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '32px' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--accent-cyan)' }}>Cost Estimator</span>
        </div>

        {/* Page Header */}
        <div style={{ maxWidth: '820px', marginBottom: '56px' }}>
          <div className="section-badge">
            <span className="badge-dot" />
            <span>Interactive Planning Tool</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '20px' }}>
            Transparent Project{' '}
            <span className="text-gradient-cyan">Estimator & Timeline.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
            We believe in honest, predictable expectations from day one. Use our interactive estimator to configure your required website type, page count, and specialized features to review an indicative budget range and development timeframe.
          </p>
        </div>

        {/* Interactive Estimator Component */}
        <div style={{ marginBottom: '72px' }}>
          <CostEstimator onProceedToInquiry={handleProceed} />
        </div>

        {/* Guarantees & Transparency FAQ */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '72px'
          }}
        >
          <div className="card-glass" style={{ padding: '28px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <ShieldCheck size={20} style={{ color: 'var(--accent-cyan)' }} />
              <h4 style={{ fontSize: '1.1rem', margin: 0 }}>No Hidden Charges</h4>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
              All estimates include full responsive design, basic on-page SEO, speed optimization, and an initial warranty period. Third-party hosting, domains, or paid Shopify themes are billed at direct vendor cost.
            </p>
          </div>

          <div className="card-glass" style={{ padding: '28px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <HelpCircle size={20} style={{ color: '#60a5fa' }} />
              <h4 style={{ fontSize: '1.1rem', margin: 0 }}>Indicative vs Confirmed Quotes</h4>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
              Calculations provide an accurate ballpark range. Once we review your exact branding assets, copy, and specific API workflows during discovery, we supply a binding, itemized quote.
            </p>
          </div>

          <div className="card-glass" style={{ padding: '28px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Sparkles size={20} style={{ color: '#4ade80' }} />
              <h4 style={{ fontSize: '1.1rem', margin: 0 }}>Flexible Milestone Billing</h4>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
              Projects are divided into milestone stages (Deposit, Design approval, Beta review, Final handover) to ensure you maintain full oversight of delivery before releasing payments.
            </p>
          </div>
        </div>

        {/* WhatsApp Consultation Banner */}
        <div
          className="card-glass"
          style={{
            padding: '40px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-accent)',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(20, 31, 61, 0.7) 0%, rgba(10, 17, 34, 0.9) 100%)'
          }}
        >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>
            Prefer to Discuss Your Scope in Detail?
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto 24px auto', fontSize: '0.95rem' }}>
            Send us your voice note, reference links, or existing website URL directly via WhatsApp for an immediate assessment.
          </p>
          <a
            href="https://wa.me/923312901930"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
          >
            <MessageCircle size={18} />
            <span>Chat with Lead Developer (+92 331 2901930)</span>
          </a>
        </div>
      </div>

      <MultiStepInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialData={inquiryData}
      />
    </div>
  );
}
