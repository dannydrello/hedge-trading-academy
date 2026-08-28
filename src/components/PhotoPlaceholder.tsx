import React from 'react';
import { ShieldCheck, UserCheck } from 'lucide-react';

interface PhotoPlaceholderProps {
  type: 'founder';
  caption?: string;
  className?: string;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  type,
  caption,
  className = '',
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-md ${className}`}
      id={`photo-placeholder-${type}`}
    >
      {/* Background Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b12_1px,transparent_1px),linear-gradient(to_bottom,#64748b12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

      {/* Institutional Telemetry Corner Marks */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-blue-300" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-blue-300" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-blue-300" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-blue-300" />

      {/* Founder Visual */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-10 px-4">
        <div className="relative mb-5">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-blue-300 bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-50 flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.12)]">
            <UserCheck className="w-12 h-12 text-blue-600" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1.5 border-2 border-white">
            <ShieldCheck className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="space-y-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200 uppercase tracking-wider">
            Founder & Lead Mentor
          </span>
          <p className="text-base font-semibold text-slate-900 pt-2">
            6+ Years Institutional & Pit Trading Experience
          </p>
          <p className="text-xs text-slate-500 max-w-sm">
            Ex-Floor Trader Mentored • Proprietary Capital Management • 1-on-1 Mentor
          </p>
        </div>

        {caption && (
          <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-mono tracking-tight">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};
