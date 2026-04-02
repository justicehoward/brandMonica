import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full p-1 border border-[var(--color-olive-deep)]/10">
      <button
        onClick={() => setLanguage('en')}
        className={`relative px-3 py-1 rounded-full text-xs font-medium transition-colors ${
          language === 'en' ? 'text-white' : 'text-[var(--color-olive-deep)] hover:bg-[var(--color-olive-deep)]/5'
        }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId="active-lang"
            className="absolute inset-0 bg-[var(--color-olive-deep)] rounded-full"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`relative px-3 py-1 rounded-full text-xs font-medium transition-colors ${
          language === 'es' ? 'text-white' : 'text-[var(--color-olive-deep)] hover:bg-[var(--color-olive-deep)]/5'
        }`}
      >
        {language === 'es' && (
          <motion.div
            layoutId="active-lang"
            className="absolute inset-0 bg-[var(--color-olive-deep)] rounded-full"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">ES</span>
      </button>
    </div>
  );
}
