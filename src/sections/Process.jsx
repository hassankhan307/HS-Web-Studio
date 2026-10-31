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
    desc: 'We test forms, checkout mechanics, and verify responsive fluidity across Apple iOS, Android, and desktop browsers.'
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 210px), 1fr))',
            gap: '16px',
            position: 'relative',
            width: '100%'
          }}
        >
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="card-glass"
                style={{
                  padding: '22px 18px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxSizing: 'border-box'
                }}
              >
                {/* Step Number Top */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      color: 'var(--accent-cyan)',
                      opacity: 0.9
                    }}
                  >
                    {s.num}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={16} />
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    lineHeight: 1.3
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.86rem',
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
