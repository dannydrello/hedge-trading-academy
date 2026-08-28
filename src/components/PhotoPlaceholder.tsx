import React from 'react';
import { ShieldCheck, UserCheck, BarChart3, Lock } from 'lucide-react';

interface PhotoPlaceholderProps {
  type: 'founder' | 'mentorship' | 'floor';
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
      className={`relative overflow-hidden rounded-xl border border-[#1e2330] bg-gradient-to-b from-[#11141d] to-[#0b0d13] p-6 shadow-2xl ${className}`}
      id={`photo-placeholder-${type}`}
    >
      {/* Background Grid & Radar Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Institutional Telemetry Corner Marks */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-blue-500/40" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-blue-500/40" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-blue-500/40" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-blue-500/40" />

      {/* Visual Content Based on Type */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-10 px-4">
        {type === 'founder' && (
          <>
            <div className="relative mb-5">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-blue-500/40 bg-gradient-to-tr from-blue-950 via-[#151926] to-[#1e2335] flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.2)]">
                <UserCheck className="w-12 h-12 text-blue-400" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1.5 border-2 border-[#0b0d13]">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
                Founder & Lead Mentor
              </span>
              <p className="text-base font-semibold text-white pt-2">
                6+ Years Institutional & Pit Trading Experience
              </p>
              <p className="text-xs text-slate-400 max-w-sm">
                Ex-Floor Trader Mentored • Proprietary Capital Management • 1-on-1 Mentor
              </p>
            </div>
          </>
        )}

        {type === 'mentorship' && (
          <>
            <div className="w-20 h-20 rounded-2xl border border-blue-500/30 bg-blue-950/40 flex items-center justify-center mb-4 text-blue-400 shadow-inner">
              <BarChart3 className="w-10 h-10" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
              <Lock className="w-3.5 h-3.5" /> Strictly 5 Trader Cohort / Month
            </div>
            <p className="text-base font-semibold text-white">
              Private 1-on-1 Trading Room & Order Flow Terminal
            </p>
            <p className="text-xs text-slate-400 max-w-md mt-1">
              Live MT4/MT5 & TradingView setup • Live order book & dynamic delta hedging execution
            </p>
          </>
        )}

        {type === 'floor' && (
          <>
            <div className="w-16 h-16 rounded-xl border border-slate-700 bg-slate-900/80 flex items-center justify-center mb-3 text-blue-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <p className="text-sm font-semibold text-white">Institutional Execution Desk</p>
            <p className="text-xs text-slate-400">Capital Defence & Mechanical Delta Neutrality</p>
          </>
        )}

        {caption && (
          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono tracking-tight">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};
