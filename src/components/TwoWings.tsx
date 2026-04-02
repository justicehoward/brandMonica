import Section from './Section';
import Button from './Button';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export default function TwoWings() {
  const { t } = useLanguage();

  return (
    <Section id="two-wings" background="default">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-8">
          <span className="text-[var(--color-olive-light)] font-medium tracking-widest uppercase text-sm">
            {t.twoWings.manifesto}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-olive-deep)] leading-tight">
            {t.twoWings.title}
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            {t.twoWings.description1}
          </p>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            {t.twoWings.description2}
          </p>
          <div className="pt-4">
            <Button variant="secondary" size="lg" onClick={() => window.open('https://twowingsofleadership.com/', '_blank', 'noopener,noreferrer')}>
              {t.twoWings.cta}
            </Button>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center items-center relative">
          {/* Book Cover Image */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-sm"
          >
            <div className="absolute inset-0 bg-[var(--color-olive-deep)]/20 blur-3xl rounded-full transform scale-90 translate-y-4 -z-10" />
            <img
              src="/book10.png"
              alt="Two Wings of Leadership Book Cover"
              className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
