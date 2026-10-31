import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import { faqs } from '../data/faqs';
import { MessageCircle } from 'lucide-react';

export default function FAQ() {
  return (
    <section className="section" id="faq" style={{ backgroundColor: 'rgba(10, 17, 34, 0.4)' }}>
      <div className="container">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Common Questions Before Getting Started"
          description="Everything you need to know about our web development process, pricing expectations, project timelines, and post-launch maintenance."
        />

        <FAQAccordion items={faqs} />

        {/* WhatsApp direct help prompt */}
        <div
          style={{
            marginTop: '48px',
            textAlign: 'center',
            padding: '24px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            maxWidth: '600px',
            margin: '48px auto 0 auto'
          }}
        >
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '14px' }}>
            Have a specific question not covered here?
          </p>
          <a
            href="https://wa.me/923312901930?text=Hello%20HS%20Web%20Studio,%20I%20have%20a%20question%20about%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <MessageCircle size={16} />
            <span>Ask Us Directly on WhatsApp (+92 331 2901930)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
