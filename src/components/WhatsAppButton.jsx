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
      style={{
        position: 'fixed',
        bottom: '28px',
        left: '28px',
        zIndex: 95,
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}
    >
      {/* Floating Prompt Pill */}
      {!tooltipDismissed && (
        <div
          style={{
            background: 'rgba(10, 17, 34, 0.95)',
            border: '1px solid rgba(34, 211, 238, 0.3)',
            borderRadius: '9999px',
            padding: '8px 14px',
            fontSize: '0.82rem',
            color: 'var(--text-primary)',
            boxShadow: 'var(--shadow-md)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            animation: 'fadeIn 0.5s ease'
          }}
          className="desktop-only"
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              boxShadow: '0 0 8px #22c55e'
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
            <X size={13} />
          </button>
        </div>
      )}

      {/* WhatsApp Trigger Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact HS Web Studio on WhatsApp"
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 22px rgba(37, 211, 102, 0.45)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 10px 28px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 6px 22px rgba(37, 211, 102, 0.45)';
        }}
      >
        <MessageCircle size={28} />
        <span
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: '2px solid #25D366'
          }}
        />
      </a>
    </div>
  );
}
