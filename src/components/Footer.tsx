import React from 'react';
import { Logo } from './Logo';
import { SocialLinks } from './SocialLinks';
import { PageId, NavigateFn } from '../types';
import { Mail, Clock, MapPin, ShieldAlert, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: NavigateFn;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#181C28] bg-[#060709] text-slate-400 text-sm mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-[#1A1F2E]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm pt-2">
              Teaching retail traders the mechanical principles of capital defence, pit logic, and professional hedging to maintain risk mastery in any market regime.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                1-on-1 Mentorship Model
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                London (GMT / BST)
              </span>
            </div>
            <div className="pt-2">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest font-mono mb-3">
                Follow The Academy
              </h4>
              <SocialLinks variant="dark" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest font-mono">
              Academy Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => scrollToTop('home')}
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToTop('about')}
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>About us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToTop('mentorship')}
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>Mentorship</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToTop('events')}
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>Event</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToTop('blog')}
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>Blog</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToTop('contact')}
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>Contact us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Format Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest font-mono">
              Mentorship Details
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>One-to-one sessions held online, 1 hr/week for 4 weeks with weekly assignments.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>hello@hedgetradingacademy.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Institutional Trading Mentorship • London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="py-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
            <ShieldAlert className="w-4 h-4 text-amber-500" />
            <span>Institutional Risk Disclaimer</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed max-w-5xl">
            <strong>Trading involves risk:</strong> Trading financial instruments including foreign exchange (forex), contracts for difference (CFDs), futures, options, commodities, and derivatives carries a high level of risk and may not be suitable for all investors. Hedging strategies and risk management frameworks can mitigate downside exposure but do not eliminate the possibility of capital loss. Educational material provided by Hedge Trading Academy is for structured training and professional skill development purposes only and does not constitute financial, investment, or legal advice. Past performance is not indicative of future results.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#121622] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Hedge Trading Academy. All rights reserved.</span>
            <button
              onClick={() => onNavigate('admin')}
              className="text-slate-800 hover:text-slate-500 transition-colors text-[10px]"
            >
              Admin
            </button>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>One-to-One Trading Mentorship</span>
            <span>•</span>
            <span>Capital Defence Framework</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
