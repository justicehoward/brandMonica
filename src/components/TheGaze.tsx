import Section from './Section';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export default function TheGaze() {
  const { t } = useLanguage();

  return (
    <Section id="the-gaze" background="white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[var(--color-olive-deep)]"
          >
            {t.theGaze.title}
          </motion.h2>
          <div className="w-16 h-1 bg-[var(--color-earth)]" />
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            {t.theGaze.description1}
          </p>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            {t.theGaze.description2}
          </p>
        </div>
        <div className="relative pl-8 border-l border-[var(--color-olive-deep)]/20">
          <blockquote className="text-2xl font-serif italic text-[var(--color-olive-deep)] leading-relaxed">
            {t.theGaze.quote}
          </blockquote>
        </div>
      </div>
    </Section>
  );
}
