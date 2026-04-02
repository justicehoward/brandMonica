import { ComponentProps, ReactNode, MouseEvent } from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends ComponentProps<typeof motion.button> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[var(--color-olive-deep)] text-white hover:bg-[var(--color-olive-light)] focus:ring-[var(--color-olive-deep)] shadow-md hover:shadow-lg",
    secondary: "bg-[var(--color-earth)] text-white hover:bg-[#B09060] focus:ring-[var(--color-earth)]",
    outline: "border border-[var(--color-olive-deep)] text-[var(--color-olive-deep)] hover:bg-[var(--color-olive-deep)] hover:text-white focus:ring-[var(--color-olive-deep)]",
    ghost: "text-[var(--color-olive-deep)] hover:bg-[var(--color-olive-deep)]/10 hover:text-[var(--color-olive-deep)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
