import Section from './Section';
import { motion } from 'motion/react';
import { Users, Compass, HeartHandshake, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Accompaniment() {
  const { t } = useLanguage();

  const icons = [Compass, Users, Globe, HeartHandshake];

  return (
    <Section id="accompaniment" background="olive">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">{t.accompaniment.title}</h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          {t.accompaniment.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.accompaniment.services.map((service, index) => {
          const Icon = icons[index];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <Icon className="w-10 h-10 text-[var(--color-earth)] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-serif text-white mb-4">{service.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
