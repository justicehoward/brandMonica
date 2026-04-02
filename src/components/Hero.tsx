import { motion } from 'motion/react';
import Button from './Button';
import Section from './Section';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <Section className="pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block mb-4 text-sm font-medium tracking-widest uppercase text-[var(--color-olive-light)]">
              {t.hero.subtitle}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-[var(--color-olive-deep)] text-balance">
              {t.hero.title}
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {t.hero.ctaPrimary}
            </Button>
            <Button variant="ghost" size="lg" onClick={() => window.open('https://twowingsofleadership.com/', '_blank', 'noopener,noreferrer')}>
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Mónica's image */}
            <img 
              src="/_DSC5114.jpg" 
              alt="Mónica Martínez Vargas" 
              className="object-cover object-top w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-olive-deep)]/20 to-transparent mix-blend-multiply pointer-events-none" />
          </motion.div>
          
          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-earth)]/20 rounded-full blur-2xl -z-10"
          />
        </div>
      </div>
    </Section>
  );
}
