import Section from './Section';
import { Globe, Heart, Users } from 'lucide-react';

const roles = [
  {
    role: "President",
    org: "ABWCI Chile",
    desc: "Advancing business women's leadership globally."
  },
  {
    role: "Director",
    org: "ebbf Hispanics",
    desc: "Ethical Business Building the Future."
  },
  {
    role: "Advisory Board",
    org: "ebbf Global",
    desc: "Contributing to a more conscious economy."
  }
];

export default function Impact() {
  return (
    <Section id="impact" background="navy">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Global Impact & Community</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          True leadership is measured by the impact one leaves when one is not present.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roles.map((item, index) => (
          <div key={index} className="text-center p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 text-[var(--color-earth)]">
              {index === 0 ? <Globe size={24} /> : index === 1 ? <Users size={24} /> : <Heart size={24} />}
            </div>
            <h3 className="text-xl font-serif text-white mb-1">{item.role}</h3>
            <div className="text-[var(--color-earth)] text-sm font-medium mb-3 uppercase tracking-wide">{item.org}</div>
            <p className="text-white/60 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
