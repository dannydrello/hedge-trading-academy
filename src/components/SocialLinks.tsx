import React from 'react';
import { SOCIAL_LINKS } from '../data/socialLinks';

interface SocialLinksProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className = '', variant = 'light' }) => {
  const styles =
    variant === 'dark'
      ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40'
      : 'bg-white border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-300 shadow-sm';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {SOCIAL_LINKS.map(({ name, url, Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Hedge Trading Academy on ${name}`}
          title={name}
          className={`w-9 h-9 rounded-lg border flex items-center justify-center transition ${styles}`}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
};
