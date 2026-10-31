import { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const WHATSAPP_NUMBER = '923312901930';
const CONTACT_EMAIL = 'hswebstudio3@gmail.com';

export default function ContactForm({ prefilledService = '', prefilledMessage = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    service: prefilledService || 'Business Website Development',
    budget: 'Standard (Rs 50k–150k / $300–$800)',
    message: prefilledMessage || '',
    honeypot: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone or WhatsApp number is required';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please briefly outline your project requirements';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const buildInquiryText = () => {
    return [
      '🚀 *New Project Inquiry — HS Web Studio*',
      '----------------------------------------',
      `*Name:* ${formData.name}`,
      `*Business:* ${formData.business || 'Individual / Not specified'}`,
      `*Email:* ${formData.email}`,
      `*Phone / WhatsApp:* ${formData.phone}`,
      `*Service Required:* ${formData.service}`,
      `*Estimated Budget:* ${formData.budget}`,
      '',
      `*Project Scope:*`,
      formData.message,
      '----------------------------------------',
      'Sent via hswebstudio.site'
    ].join('\n');
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus({ state: 'error', message: 'Please check the highlighted fields.' });
      return;
    }
    if (formData.honeypot) return;

    const text = encodeURIComponent(buildInquiryText());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');

    setStatus({
      state: 'success',
      message: 'Opening WhatsApp with your formatted project brief ready to send!'
    });
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus({ state: 'error', message: 'Please check the highlighted fields.' });
      return;
    }
    if (formData.honeypot) return;

    setStatus({ state: 'submitting', message: 'Preparing your inquiry...' });

    const endpoint = import.meta.env.VITE_CONTACT_API;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setStatus({
            state: 'success',
            message: 'Inquiry received! We will reply within 24 hours.'
          });
          setFormData({
            name: '',
            business: '',
            email: '',
            phone: '',
            service: 'Business Website Development',
            budget: 'Standard (Rs 50k–150k / $300–$800)',
            message: '',
            honeypot: ''
          });
          return;
        }
      } catch (err) {
        console.warn('API submission failed, falling back to mail client', err);
      }
    }

    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(buildInquiryText());
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus({
      state: 'success',
      message: 'Launching your email client with your formatted project brief.'
    });
  };

  return (
    <form
      className="card-glass"
      style={{
        padding: 'clamp(20px, 4vw, 36px) clamp(16px, 3.5vw, 32px)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-medium)',
        boxShadow: 'var(--shadow-lg)',
        width: '100%',
        boxSizing: 'border-box'
      }}
      noValidate
    >
      {/* Honeypot field for bot spam detection */}
      <div style={{ display: 'none', visibility: 'hidden' }}>
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '16px'
        }}
      >
        <div className="form-group">
          <label className="form-label" htmlFor="f-name">
            <span>Your Full Name <span className="req">*</span></span>
          </label>
          <input
            id="f-name"
            name="name"
            type="text"
            className="form-input"
            placeholder="e.g. Hassan Khan"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="f-business">
            <span>Business / Company Name</span>
          </label>
          <input
            id="f-business"
            name="business"
            type="text"
            className="form-input"
            placeholder="e.g. Apex Retail or Dental Clinic"
            value={formData.business}
            onChange={handleChange}
            autoComplete="organization"
          />
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '16px'
        }}
      >
        <div className="form-group">
          <label className="form-label" htmlFor="f-email">
            <span>Email Address <span className="req">*</span></span>
          </label>
          <input
            id="f-email"
            name="email"
            type="email"
            className="form-input"
            placeholder="name@business.com"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="f-phone">
            <span>Phone / WhatsApp Number <span className="req">*</span></span>
          </label>
          <input
            id="f-phone"
            name="phone"
            type="tel"
            className="form-input"
            placeholder="+92 331 2901930"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '16px'
        }}
      >
        <div className="form-group">
          <label className="form-label" htmlFor="f-service">
            <span>Service Required</span>
          </label>
          <select
            id="f-service"
            name="service"
            className="form-select"
            value={formData.service}
            onChange={handleChange}
          >
            <option>Business Website Development</option>
            <option>Shopify Store Development</option>
            <option>E-Commerce Development</option>
            <option>Custom Web Application</option>
            <option>Retail POS System</option>
            <option>Website Redesign & Modernization</option>
            <option>Maintenance & Technical Support</option>
            <option>Other / Not Sure Yet</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="f-budget">
            <span>Estimated Budget Range</span>
          </label>
          <select
            id="f-budget"
            name="budget"
            className="form-select"
            value={formData.budget}
            onChange={handleChange}
          >
            <option>Starter (Under Rs 50,000 / &lt; $300)</option>
            <option>Standard (Rs 50,000 – Rs 150,000 / $300 – $800)</option>
            <option>Growth (Rs 150,000 – Rs 350,000 / $800 – $1,800)</option>
            <option>Enterprise / Custom Software (&gt; Rs 350,000 / &gt; $1,800)</option>
            <option>Need Guidance / To Be Discussed</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="f-message">
          <span>Project Description & Requirements <span className="req">*</span></span>
        </label>
        <textarea
          id="f-message"
          name="message"
          rows="4"
          className="form-textarea"
          placeholder="Briefly describe your business, what pages or features you need, and any sample sites you like..."
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      {/* Action Buttons - Stack full width on mobile */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          alignItems: 'center',
          marginTop: '8px'
        }}
      >
        <button
          type="button"
          onClick={handleWhatsAppSubmit}
          className="btn btn-whatsapp btn-lg form-btn"
          style={{ flex: '1 1 200px' }}
        >
          <MessageCircle size={18} />
          <span>Send via WhatsApp (Fastest)</span>
        </button>

        <button
          type="button"
          onClick={handleEmailSubmit}
          disabled={status.state === 'submitting'}
          className="btn btn-secondary btn-lg form-btn"
          style={{ flex: '1 1 180px' }}
        >
          {status.state === 'submitting' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Submit via Email</span>
            </>
          )}
        </button>
      </div>

      {/* Status Messages */}
      {status.message && (
        <div
          style={{
            marginTop: '16px',
            padding: '12px 14px',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.88rem',
            backgroundColor:
              status.state === 'success'
                ? 'rgba(34, 197, 94, 0.15)'
                : 'rgba(239, 68, 68, 0.15)',
            border:
              status.state === 'success'
                ? '1px solid rgba(34, 197, 94, 0.4)'
                : '1px solid rgba(239, 68, 68, 0.4)',
            color: status.state === 'success' ? '#4ade80' : '#f87171'
          }}
        >
          {status.state === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <span>{status.message}</span>
        </div>
      )}

      <p
        style={{
          marginTop: '14px',
          fontSize: '0.78rem',
          color: 'var(--text-dim)',
          textAlign: 'center'
        }}
      >
        🔒 We respect your privacy. No spam. Direct response from lead engineer.
      </p>

      <style>{`
        @media (max-width: 520px) {
          .form-btn {
            width: 100% !important;
            flex: 1 1 100% !important;
          }
        }
      `}</style>
    </form>
  );
}
