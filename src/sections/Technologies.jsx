import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { technologyCategories } from '../data/technologies';
import { Layers, Terminal, Database, Store } from 'lucide-react';

const CATEGORY_ICONS = {
  'Frontend Development': Layers,
  'Backend & APIs': Terminal,
  'Databases & Cloud Storage': Database,
  'E-Commerce & Retail Platforms': Store
};

export default function Technologies() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <section className="section" id="technologies" style={{ backgroundColor: 'rgba(10, 17, 34, 0.4)' }}>
      <div className="container">
        <SectionHeading
          badge="Verified Tech Stack"
          title="Battle-Tested Modern Technologies"
          description="We avoid obsolete stacks and unstable experiments. Every tool in our stack is chosen for exceptional speed, enterprise security, and long-term scalability."
        />

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '40px'
          }}
        >
          {technologyCategories.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.name] || Layers;
            const isSelected = activeCategoryIndex === idx;

            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategoryIndex(idx)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: isSelected ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.04)',
                  color: isSelected ? '#04111d' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={16} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Details Card */}
        <div
          className="card-glass"
          style={{
            padding: '36px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-medium)',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>
              {technologyCategories[activeCategoryIndex].name}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>
              {technologyCategories[activeCategoryIndex].description}
            </p>
          </div>

          {/* Grid of technologies in this category */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px'
            }}
          >
            {technologyCategories[activeCategoryIndex].items.map((tech) => (
              <div
                key={tech.name}
                style={{
                  padding: '18px 20px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-accent)';
                  e.currentTarget.style.backgroundColor = 'rgba(34, 211, 238, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {tech.name}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                    {tech.role}
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '0.72rem',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(34, 211, 238, 0.1)',
                    color: 'var(--accent-cyan)',
                    fontWeight: 600,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {tech.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
