import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <>
      <button
        onClick={scrollToTop}
        className="scroll-to-top-btn"
        aria-label="Scroll back to top"
      >
        <ArrowUp size={18} />
      </button>

      <style>{`
        .scroll-to-top-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--bg-elevated);
          border: 1px solid var(--border-medium);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 90;
          box-shadow: var(--shadow-md);
          transition: all 0.25s ease;
        }
        .scroll-to-top-btn:hover {
          transform: translateY(-3px);
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.3);
        }
        @media (max-width: 768px) {
          .scroll-to-top-btn {
            bottom: 16px !important;
            right: 16px !important;
            width: 40px !important;
            height: 40px !important;
          }
        }
      `}</style>
    </>
  );
}
