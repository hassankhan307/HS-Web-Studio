import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const phoneNumber = '923312901930';
  const defaultMessage = encodeURIComponent(
    'Hello HS Web Studio, I am interested in building a website for my business.'
  );

  return (
    <div
      className="wa-floating-container"
      style={{
        position: 'fixed',
        zIndex: 95,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      {/* Desktop-only Prompt Pill */}
      {!tooltipDismissed && (
        <div
          className="desktop-only"
          style={{
            background: 'rgba(10, 17, 34, 0.95)',
            border: '1px solid rgba(34, 211, 238, 0.3)',
            borderRadius: '9999px',
            padding: '7px 12px',
            fontSize: '0.8rem',
            color: 'var(--text-primary)',
            boxShadow: 'var(--shadow-md)',
            backdropFilter: 'blur(10px)',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              boxShadow: '0 0 8px #22c55e',
              flexShrink: 0
            }}
          />
          <span>Online · Chat with us</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            aria-label="Dismiss message"
            style={{
              color: 'var(--text-dim)',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
              cursor: 'pointer'
            }}
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* WhatsApp Trigger Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact HS Web Studio on WhatsApp"
        className="wa-btn-circle"
        style={{
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 18px rgba(37, 211, 102, 0.45)',
          position: 'relative',
          textDecoration: 'none'
        }}
      >
        <MessageCircle size={26} />
        <span
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: '2px solid #25D366'
          }}
        />
      </a>

      <style>{`
        .wa-floating-container {
          bottom: 24px;
          left: 24px;
        }
        .wa-btn-circle {
          width: 52px;
          height: 52px;
        }
        @media (max-width: 768px) {
          .wa-floating-container {
            bottom: 16px !important;
            left: 16px !important;
          }
          .wa-btn-circle {
            width: 46px !important;
            height: 46px !important;
          }
          .wa-btn-circle svg {
            width: 22px !important;
            height: 22px !important;
          }
        }
      `}</style>
    </div>
  );
}
