import React, { useState } from 'react';
import { Logo } from './Logo';
import { PageId, NavigateFn } from '../types';
import { Menu, X, ArrowRight, Shield, Calendar, BookOpen, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: NavigateFn;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About us' },
    { id: 'mentorship', label: 'Mentorship' },
    { id: 'events', label: 'Event' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact us' },
  ];

  const handleNavClick = (page: PageId, scrollTargetId?: string) => {
    onNavigate(page, scrollTargetId);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1A1F2C]/80 bg-[#08090C]/95 backdrop-blur-md transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 transition"
            id="nav-logo-button"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <button
              id="nav-apply-now-btn"
              onClick={() => handleNavClick('mentorship', 'application-form-section')}
              className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-sm font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.45)] cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden border-b border-slate-800 bg-[#0c0e14] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30'
                      : 'text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-blue-500" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/80">
            <button
              id="mobile-apply-btn"
              onClick={() => handleNavClick('mentorship', 'application-form-section')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-[0_0_20px_rgba(37,99,235,0.35)]"
            >
              <Shield className="w-4 h-4" />
              <span>Apply For Mentorship</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

