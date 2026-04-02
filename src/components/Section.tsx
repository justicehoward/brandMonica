import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'default' | 'white' | 'olive' | 'navy';
  fullWidth?: boolean;
}

export default function Section({
  children,
  id,
  className = '',
  background = 'default',
  fullWidth = false,
}: SectionProps) {
  const backgrounds = {
    default: "bg-[var(--color-bg-warm)]",
    white: "bg-white",
    olive: "bg-[var(--color-olive-deep)] text-white",
    navy: "bg-[var(--color-navy-deep)] text-white",
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-32 relative overflow-hidden ${backgrounds[background]} ${className}`}
    >
      <div className={`mx-auto px-6 md:px-12 ${fullWidth ? 'w-full max-w-[1920px]' : 'max-w-7xl'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
