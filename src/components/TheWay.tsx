import Section from './Section';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export default function TheWay() {
  const { t } = useLanguage();

  return (
    <Section id="the-way" background="default">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-olive-deep)]">{t.theWay.title}</h2>
          <p className="text-[var(--color-text-secondary)]">{t.theWay.subtitle}</p>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-olive-deep)]/20 before:to-transparent">
          {t.theWay.milestones.map((milestone, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-bg-warm)] bg-[var(--color-bg-warm)] group-[.is-active]:bg-[var(--color-olive-deep)] text-[var(--color-bg-warm)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-[var(--color-earth)] rounded-full" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-xl shadow-sm border border-[var(--color-olive-deep)]/5 hover:border-[var(--color-olive-deep)]/20 transition-colors">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-serif font-bold text-[var(--color-olive-deep)]">{milestone.title}</div>
                  <time className="font-mono text-xs text-[var(--color-text-muted)]">{milestone.year}</time>
                </div>
                <div className="text-[var(--color-text-secondary)] text-sm">
                  {milestone.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
