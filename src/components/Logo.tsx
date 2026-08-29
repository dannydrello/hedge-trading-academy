import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const imageSizes = {
    sm: 'h-11',
    md: 'h-16',
    lg: 'h-28',
  };

  return (
    <div className={`flex items-center select-none ${className}`} id="brand-logo">
      <img
        src="/logo.png"
        alt="Hedge Trading Academy"
        className={`w-auto object-contain drop-shadow-[0_0_12px_rgba(37,99,235,0.25)] ${imageSizes[size]}`}
      />
      {showText && <span className="sr-only">Hedge Trading Academy</span>}
    </div>
  );
};
