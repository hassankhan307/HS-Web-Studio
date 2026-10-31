import { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Send, MessageCircle, Sparkles } from 'lucide-react';

const PROJECT_TYPES = [
  'Business / Corporate Website',
  'Shopify E-Commerce Store',
  'Custom E-Commerce Platform',
  'Custom Web Application',
  'Retail Point of Sale (POS) System',
  'Website Redesign & Modernization',
  'Maintenance & Support Retainer',
  'Other / Custom Scope'
];

const BUDGET_OPTIONS = [
  'Under Rs 50,000 / < $300 (Starter)',
  'Rs 50,000 – Rs 150,000 / $300 – $800 (Standard)',
  'Rs 150,000 – Rs 350,000 / $800 – $1,800 (Growth)',
  'Above Rs 350,000 / > $1,800 (Enterprise)',
  'Need Guidance & Advice'
];

const TIMELINE_OPTIONS = [
  'Urgent (Under 2 weeks)',
  'Standard (2 to 4 weeks)',
  'Flexible (1 to 2 months)',
  'Planning stage / Inquiring'
];

export default function MultiStepInquiryModal({ isOpen, onClose, initialData = '' }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: 'Business / Corporate Website',
    requirements: initialData || '',
    budget: 'Rs 50,000 – Rs 150,000 / $300 – $800 (Standard)',
    timeline: 'Standard (2 to 4 weeks)',
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    location: 'Karachi, Pakistan'
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.projectType) {
        setErrorMsg('Please select a project type');
        return;
      }
    } else if (step === 2) {
      if (!formData.requirements.trim()) {
        setErrorMsg('Please write a brief summary of what you need');
        return;
      }
    } else if (step === 4) {
      if (!formData.fullName.trim()) {
        setErrorMsg('Full name is required');
        return;
      }
      if (!formData.phone.trim()) {
        setErrorMsg('Phone or WhatsApp number is required');
        return;
      }
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        setErrorMsg('Please provide a valid email address');
        return;
      }
    }
    setErrorMsg('');
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setErrorMsg('');
    setStep((prev) => prev - 1);
  };

  const buildSummaryMessage = () => {
    return [
      '📋 *Multi-Step Project Inquiry — HS Web Studio*',
      '==========================================',
      `*Project Type:* ${formData.projectType}`,
      `*Scope / Brief:* ${formData.requirements}`,
      `*Budget Range:* ${formData.budget}`,
      `*Target Timeline:* ${formData.timeline}`,
      '------------------------------------------',
      `*Client Name:* ${formData.fullName}`,
      `*Business:* ${formData.businessName || 'N/A'}`,
      `*Phone/WhatsApp:* ${formData.phone}`,
      `*Email:* ${formData.email}`,
      `*Location:* ${formData.location}`,
      '==========================================',
      'Submitted via hswebstudio.site'
    ].join('\n');
  };

  const sendViaWhatsApp = () => {
    const encoded = encodeURIComponent(buildSummaryMessage());
    window.open(`https://wa.me/923312901930?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const sendViaEmail = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.fullName}`);
    const body = encodeURIComponent(buildSummaryMessage());
    window.location.href = `mailto:hswebstudio3@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(2, 4, 10, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="card-glass"
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'rgba(10, 17, 34, 0.98)',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-lg), 0 0 35px rgba(34, 211, 238, 0.15)',
          padding: '36px',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Modal Button */}
        <button
          onClick={onClose}
          aria-label="Close quote modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                color: '#4ade80',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}
            >
              <Check size={32} />
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Inquiry Dispatched!</h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '440px', margin: '0 auto 24px auto' }}>
              Thank you for sharing your project goals. Our team will review your specifications and get back to you promptly with a formal proposal.
            </p>
            <button onClick={onClose} className="btn btn-primary">
              Done & Return to Site
            </button>
          </div>
        ) : (
          <>
            {/* Header & Step Tracker */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                <Sparkles size={14} />
                <span>Project Quote Discovery · Step {step} of 5</span>
              </div>
              <h3 style={{ fontSize: '1.45rem' }}>
                {step === 1 && 'Select Your Project Type'}
                {step === 2 && 'Describe Your Core Requirements'}
                {step === 3 && 'Investment Budget & Target Timeline'}
                {step === 4 && 'Your Contact & Business Details'}
                {step === 5 && 'Review & Dispatch Your Brief'}
              </h3>

              {/* Progress bar */}
              <div
                style={{
                  width: '100%',
                  height: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '2px',
                  marginTop: '16px',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: `${(step / 5) * 100}%`,
                    height: '100%',
                    backgroundColor: 'var(--accent-cyan)',
                    transition: 'width 0.3s ease'
                  }}
                />
              </div>
            </div>

            {/* Error Message Notice */}
            {errorMsg && (
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#f87171',
                  fontSize: '0.86rem',
                  marginBottom: '20px'
                }}
              >
                {errorMsg}
              </div>
            )}

            {/* Step 1: Project Type */}
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {PROJECT_TYPES.map((pt) => {
                  const isSelected = formData.projectType === pt;
                  return (
                    <button
                      key={pt}
                      onClick={() => setFormData((p) => ({ ...p, projectType: pt }))}
                      style={{
                        padding: '14px 18px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: isSelected ? 'rgba(34, 211, 238, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                        border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                        color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                        fontWeight: isSelected ? 600 : 500,
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{pt}</span>
                      {isSelected && <Check size={16} style={{ color: 'var(--accent-cyan)' }} />}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Step 2: Requirements */}
            {step === 2 && (
              <div>
                <label className="form-label" htmlFor="m-req">
                  <span>What are the key goals, pages, and features of your project?</span>
                </label>
                <textarea
                  id="m-req"
                  name="requirements"
                  rows="6"
                  className="form-textarea"
                  placeholder="e.g. We are a retail fashion boutique in Karachi. We need an online store with product filtering by size and color, Cash on Delivery, WhatsApp customer inquiries, and fast mobile speed..."
                  value={formData.requirements}
                  onChange={handleChange}
                  style={{ width: '100%', boxSizing: 'border-box' }}
                />
              </div>
            )}

            {/* Step 3: Budget & Timeline */}
            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label className="form-label">
                    <span>What is your estimated investment budget?</span>
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {BUDGET_OPTIONS.map((b) => (
                      <button
                        key={b}
                        onClick={() => setFormData((p) => ({ ...p, budget: b }))}
                        style={{
                          padding: '12px 16px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: formData.budget === b ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                          border: formData.budget === b ? '1px solid var(--accent-blue)' : '1px solid var(--border-subtle)',
                          textAlign: 'left',
                          cursor: 'pointer',
                          color: formData.budget === b ? '#93c5fd' : 'var(--text-secondary)',
                          fontSize: '0.9rem'
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="form-label">
                    <span>When would you like the project to launch?</span>
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {TIMELINE_OPTIONS.map((t) => (
                      <button
                        key={t}
                        onClick={() => setFormData((p) => ({ ...p, timeline: t }))}
                        style={{
                          padding: '10px 16px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: formData.timeline === t ? 'rgba(34, 211, 238, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                          border: formData.timeline === t ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                          textAlign: 'left',
                          cursor: 'pointer',
                          color: formData.timeline === t ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                          fontSize: '0.9rem'
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Details */}
            {step === 4 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="m-name">Your Full Name *</label>
                  <input
                    id="m-name"
                    name="fullName"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Hassan Khan"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="m-business">Business Name (Optional)</label>
                  <input
                    id="m-business"
                    name="businessName"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Aurelia Living"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="m-phone">Phone / WhatsApp Number *</label>
                  <input
                    id="m-phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="+92 331 2901930"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="m-email">Email Address *</label>
                  <input
                    id="m-email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            {/* Step 5: Review & Send */}
            {step === 5 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.88rem',
                    lineHeight: 1.7
                  }}
                >
                  <div style={{ marginBottom: '8px' }}><strong>Service:</strong> {formData.projectType}</div>
                  <div style={{ marginBottom: '8px' }}><strong>Brief:</strong> {formData.requirements}</div>
                  <div style={{ marginBottom: '8px' }}><strong>Budget:</strong> {formData.budget}</div>
                  <div style={{ marginBottom: '8px' }}><strong>Timeline:</strong> {formData.timeline}</div>
                  <div style={{ marginBottom: '8px' }}><strong>Client:</strong> {formData.fullName} ({formData.businessName || 'Individual'})</div>
                  <div><strong>Contact:</strong> {formData.phone} | {formData.email}</div>
                </div>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                  Choose how you would like to submit your inquiry. Both options send your full brief directly to our lead developer.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <button
                    onClick={sendViaWhatsApp}
                    className="btn btn-whatsapp"
                    style={{ flex: '1 1 200px' }}
                  >
                    <MessageCircle size={18} />
                    <span>Send via WhatsApp (Fastest)</span>
                  </button>

                  <button
                    onClick={sendViaEmail}
                    className="btn btn-primary"
                    style={{ flex: '1 1 200px' }}
                  >
                    <Send size={18} />
                    <span>Submit via Email</span>
                  </button>
                </div>
              </div>
            )}

            {/* Footer Navigation */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '32px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="btn btn-ghost btn-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {step < 5 && (
                <button
                  onClick={handleNext}
                  className="btn btn-primary btn-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>Continue</span>
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
