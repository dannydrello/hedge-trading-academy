import React from 'react';
import { NavigateFn, PhilosophyCard } from '../types';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import {
  ShieldCheck,
  Compass,
  Repeat,
  TrendingUp,
  Target,
  ArrowRight,
  Sparkles,
  Quote,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: NavigateFn;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const philosophies: PhilosophyCard[] = [
    {
      title: 'Discipline',
      tag: 'Objective Execution',
      description:
        'Following a trading plan with consistency and objectivity, removing emotion from decision-making.',
    },
    {
      title: 'Risk Management',
      tag: 'Capital Preservation',
      description:
        'Protecting capital is the highest priority. Position sizing, stop-losses, and portfolio diversification are non-negotiable.',
    },
    {
      title: 'Consistency',
      tag: 'Repeatable Processes',
      description:
        'Long-term trading success comes from repeatable processes and systems, not chasing home runs.',
    },
    {
      title: 'Long-Term Growth',
      tag: 'Compounding Horizon',
      description:
        'Building wealth through trading is a marathon, not a sprint. We focus on sustainable, compounding returns.',
    },
  ];

  const philosophyIcons = [Compass, ShieldCheck, Repeat, TrendingUp];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. PAGE HEADER */}
      <section
        className="relative pt-16 sm:pt-24 pb-12 sm:pb-20 overflow-hidden bg-cover bg-center"
        id="about-header-section"
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        {/* Overlay for text legibility, fading into the page background */}
        <div className="absolute inset-0 bg-[#08090C]/55 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08090C] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-blue-400 bg-blue-950/60 border border-blue-500/30">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Institutional Heritage & Pedigree</span>
          </div>
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
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
                  Founder Journey
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  From Retail Confusion to Institutional Mastery
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  I started my trading journey as a self-taught retail trader attempting to learn from endless videos by &ldquo;gurus.&rdquo; The more I studied, the more confused I became. Although I had some success, I also experienced several heartbreaking losses due to not fully understanding how markets work.
                </p>

                <p>
                  This changed when I met my mentor, an institutional trader who had experience working in the pit. He executed trades for large firms and worked for one of the world&apos;s largest hedge funds. He shared with me the skills and knowledge that enabled me to become a consistently profitable trader.
                </p>

                <p>
                  I now have over six years of professional trading experience, have mentored a large number of traders, and have navigated multiple market cycles.
                </p>

                <p className="p-4 rounded-xl bg-blue-50 border-l-4 border-blue-500 text-slate-800 font-medium">
                  Through these experiences, I learned that most traders fail not because they lack intelligence, but because they lack proper guidance, risk discipline, and accountability.
                </p>

                <p className="text-slate-600">
                  Hedge Trading Academy was founded to provide serious traders with institutional-grade mentorship, helping them avoid costly mistakes and build sustainable trading careers.
                </p>
              </div>
            </div>

            {/* Founder Photo Placeholder Card */}
            <div className="lg:col-span-5 space-y-4">
              <PhotoPlaceholder
                type="founder"
                caption="Founder • Hedge Trading Academy • Ex-Pit Trader Mentored"
              />

              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider font-bold">
                  <Quote className="w-4 h-4" />
                  <span>The Core Philosophy</span>
                </div>
                <p className="text-sm text-slate-700 italic">
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
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Trading Philosophy
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Our approach is grounded in institutional best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophies.map((item, index) => {
              const Icon = philosophyIcons[index % philosophyIcons.length];
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 hover:border-blue-300 hover:shadow-md transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed">
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
          <div className="rounded-3xl border border-blue-500/40 bg-gradient-to-b from-[#101524] via-[#0b0e16] to-[#07080c] p-8 sm:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center mx-auto text-blue-400 shadow-inner">
                <Target className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold block">
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
