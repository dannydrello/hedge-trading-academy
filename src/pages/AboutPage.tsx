import React from 'react';
import { NavigateFn, PhilosophyCard } from '../types';
import {
  ShieldCheck,
  Compass,
  Repeat,
  TrendingUp,
  Target,
  ArrowRight,
  Quote,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: NavigateFn;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const philosophies: PhilosophyCard[] = [
    {
      title: 'Discipline',
      description:
        'Following a trading plan with consistency and objectivity, removing emotion from decision-making.',
    },
    {
      title: 'Risk Management',
      description:
        'Protecting capital is the highest priority. Position sizing, stop-losses, and portfolio diversification are non-negotiable.',
    },
    {
      title: 'Consistency',
      description:
        'Long-term trading success comes from repeatable processes and systems, not chasing home runs.',
    },
    {
      title: 'Long-Term Growth',
      description:
        'Building wealth through trading is a marathon, not a sprint. We focus on sustainable, compounding returns.',
    },
  ];

  const philosophyIcons = [Compass, ShieldCheck, Repeat, TrendingUp];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. PAGE HEADER */}
      <section className="relative pt-16 sm:pt-24 pb-12 sm:pb-20" id="about-header-section">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Hedge Trading Academy
          </h1>
          <p className="text-lg sm:text-xl text-blue-400 font-medium">
            Professional trading education built on institutional principles
          </p>
        </div>
      </section>

      {/* 2. FOUNDER STORY */}
      <section className="relative" id="founder-story-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-base sm:text-lg font-semibold text-blue-400">
                  Founder Journey
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  From Retail Confusion to Institutional Mastery
                </h2>
              </div>

              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  I started my trading journey as a self-taught retail trader attempting to learn from endless videos by &ldquo;gurus.&rdquo; The more I studied, the more confused I became. Although I had some success, I also experienced several heartbreaking losses due to not fully understanding how markets work.
                </p>

                <p>
                  This changed when I met my mentor, an institutional trader who had experience working in the pit. He executed trades for large firms and worked for one of the world&apos;s largest hedge funds. He shared with me the skills and knowledge that enabled me to become a consistently profitable trader.
                </p>

                <p>
                  I now have over six years of professional trading experience, have mentored a large number of traders, and have navigated multiple market cycles.
                </p>

                <p className="p-4 rounded-xl bg-blue-950/20 border-l-4 border-blue-500 text-slate-200 font-medium">
                  Through these experiences, I learned that most traders fail not because they lack intelligence, but because they lack proper guidance, risk discipline, and accountability.
                </p>

                <p className="text-slate-400">
                  Hedge Trading Academy was founded to provide serious traders with institutional-grade mentorship, helping them avoid costly mistakes and build sustainable trading careers.
                </p>
              </div>
            </div>

            {/* Founder Photo */}
            <div className="lg:col-span-5 space-y-4">
              <div
                id="founder-photo-slot"
                className="rounded-xl border border-slate-800 overflow-hidden aspect-square"
              >
                <img
                  src="/founder.png"
                  alt="Founder of Hedge Trading Academy at his trading desk"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-blue-400 uppercase tracking-wider font-bold">
                  <Quote className="w-4 h-4" />
                  <span>The Core Philosophy</span>
                </div>
                <p className="text-sm text-slate-300 italic">
                  &ldquo;Markets do not care about retail hope. They respond only to liquidity, positioning, and order flow. When you learn how to hedge, fear disappears.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRADING PHILOSOPHY SECTION */}
      <section className="relative py-8" id="philosophy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Trading Philosophy
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Our approach is grounded in institutional best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophies.map((item, index) => {
              const Icon = philosophyIcons[index % philosophyIcons.length];
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-8 space-y-4 hover:border-blue-500/40 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR MISSION SECTION */}
      <section className="relative py-8" id="mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 sm:p-16 text-center space-y-8 relative overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
                <Target className="w-7 h-7" />
              </div>

              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold block">
                Our Mission
              </span>

              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                &ldquo;To help traders avoid costly mistakes and build sustainable trading habits through elite mentorship and institutional trading principles.&rdquo;
              </blockquote>

              <div className="pt-4">
                <button
                  id="about-start-journey-btn"
                  onClick={() => onNavigate('mentorship', 'application-form-section')}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-base shadow-[0_0_25px_rgba(37,99,235,0.4)] transition cursor-pointer"
                >
                  <span>Start your journey</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
