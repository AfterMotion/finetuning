import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  iconLeading,
  iconTrailing,
  children,
  className = '',
  disabled,
  style,
  ...rest
}) => {
  // Base classes and variant mapping
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  // Size scales
  const sizeClasses = {
    sm: 'h-8 px-3 text-xs gap-1.5',
    md: 'h-10 px-4 text-sm gap-2',
    lg: 'h-12 px-6 text-base gap-2.5',
  }[size];

  // Invariant 1: Primary Solar Amber button MUST have Midnight Obsidian (#070D18) text for 8.24:1 WCAG AAA
  const variantClasses = {
    primary: 'bg-[#F09320] hover:bg-[#D47911] text-[#070D18] focus:ring-[#F09320] focus:ring-offset-[#070D18] hover:-translate-y-0.5 shadow-md',
    secondary: 'bg-[#4694B1] hover:bg-[#377A93] text-white focus:ring-[#4694B1] focus:ring-offset-[#070D18]',
    outline: 'bg-transparent border border-slate-700 hover:border-slate-500 text-slate-200 hover:bg-slate-800/40 focus:ring-slate-400',
    ghost: 'bg-transparent text-slate-300 hover:bg-slate-800/50 hover:text-white focus:ring-slate-500',
    destructive: 'bg-[#EF4444] hover:bg-[#DC2626] text-white focus:ring-[#EF4444] focus:ring-offset-[#070D18]',
  }[variant];

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      disabled={disabled}
      style={{
        fontFamily: 'var(--font-primary, Outfit, sans-serif)',
        ...style
      }}
      {...rest}
    >
      {iconLeading && <span className="inline-flex shrink-0">{iconLeading}</span>}
      <span>{children}</span>
      {iconTrailing && <span className="inline-flex shrink-0">{iconTrailing}</span>}
    </button>
  );
};

