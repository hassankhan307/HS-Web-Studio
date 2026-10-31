import SectionHeading from '../components/SectionHeading';
import { Search, Compass, Code, CheckCircle, Rocket } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    icon: Search,
    title: 'Discovery & Scope Alignment',
    desc: 'We conduct a targeted consultation to understand your business model, customer buying habits, primary revenue drivers, and specific operational needs.'
  },
  {
    num: '02',
    icon: Compass,
    title: 'Information Architecture & UX',
    desc: 'Before writing any code, we establish the wireframe hierarchy, journey maps, conversion funnels, and aesthetic direction to guarantee alignment.'
  },
  {
    num: '03',
    icon: Code,
    title: 'Agile Full-Stack Development',
    desc: 'Your application is built using clean, modular React or Shopify code, incorporating responsive styling, API integrations, and database schemas.'
  },
  {
    num: '04',
    icon: CheckCircle,
    title: 'Multi-Device QA & Speed Audits',
    desc: 'We rigorously stress-test forms, payment gateways, checkout mechanics, and verify responsive fluidity across Apple iOS, Android, and desktop browsers.'
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Deployment, Handover & Support',
    desc: 'We connect your domain, deploy production builds, verify SSL, provide an admin walkthrough, and initiate agreed post-launch maintenance.'
  }
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHeading
          badge="How We Work"
          title="From Strategic Concept to Flawless Launch"
          description="A transparent, milestone-driven development process so you remain informed, confident, and in control at every stage of the build."
        />

        {/* Process Timeline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            position: 'relative'
          }}
        >
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="card-glass"
                style={{
                  padding: '28px 22px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Step Number Top */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--accent-cyan)',
                      opacity: 0.9
                    }}
                  >
                    {s.num}
                  </span>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '1.12rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '10px',
                    lineHeight: 1.3
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
