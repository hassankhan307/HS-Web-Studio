import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        maxWidth: '820px',
        margin: '0 auto',
        width: '100%'
      }}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;
        const buttonId = `faq-btn-${index}`;

        return (
          <div
            key={index}
            className="card-glass"
            style={{
              borderRadius: 'var(--radius-sm)',
              border: isOpen ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
              backgroundColor: isOpen ? 'rgba(16, 26, 52, 0.75)' : 'var(--bg-card)',
              transition: 'all 0.25s ease',
              overflow: 'hidden'
            }}
          >
            <button
              id={buttonId}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={answerId}
              style={{
                width: '100%',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                textAlign: 'left',
                color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '1.02rem',
                cursor: 'pointer',
                background: 'transparent'
              }}
            >
              <span>{item.question}</span>
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: isOpen ? 'var(--accent-cyan-dim)' : 'rgba(255, 255, 255, 0.04)',
                  color: isOpen ? 'var(--accent-cyan)' : 'var(--text-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'all 0.25s ease'
                }}
              >
                <ChevronDown size={18} />
              </span>
            </button>

            {isOpen && (
              <div
                id={answerId}
                role="region"
                aria-labelledby={buttonId}
                style={{
                  padding: '0 24px 22px 24px',
                  color: 'var(--text-muted)',
                  fontSize: '0.94rem',
                  lineHeight: 1.7,
                  borderTop: '1px solid rgba(148, 163, 184, 0.08)',
                  paddingTop: '16px'
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
