import React, { useState } from 'react';
import { NavigateFn, ComparisonRow, FaqItem } from '../types';
import {
  CheckCircle2,
  XCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Calendar,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: NavigateFn;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const comparisonData: ComparisonRow[] = [
    {
      feature: 'Primary Focus',
      retail: "Chasing high-risk profit setups and \"perfect\" entries",
      hedge: 'Capital defence and absolute risk management',
    },
    {
      feature: 'Market View',
      retail: 'Relying on lagging charts, moving averages and indicators',
      hedge: 'Reading real live institutional order flow',
    },
    {
      feature: 'Directional Bias',
      retail: 'Guessing if the market goes up or down (50/50 gambling)',
      hedge: 'Hedging – profiting from volatility regardless of direction',
    },
    {
      feature: 'Handling Volatility',
      retail: 'Panic selling, freezing or letting stop-losses get hunted',
      hedge: 'Deploying lightning-fast options and futures proxy hedges to freeze risk',
    },
    {
      feature: 'Losing Trades',
      retail: '"Holding and hoping" until accounts suffer severe drawdown',
      hedge: 'Exiting broken setups mechanically at break even',
    },
    {
      feature: 'Learning Format',
      retail: 'Static pre-recorded video modules with zero personalised feedback',
      hedge: 'Private one-to-one live mentorship with personalised feedback and assignments',
    },
    {
      feature: 'Institutional Vision',
      retail: 'Trading like the public (getting exploited by smart money)',
      hedge: 'Trading with the institutions by tracking big money footprints',
    },
  ];

  const hedgingBenefits = [
    'Protects capital',
    'Protects open positions during market volatility',
    'Improves portfolio stability',
    'Reduces emotional decision-making',
    'Creates a professional risk-management framework',
    'Enables you to trade with greater confidence and discipline',
  ];

  const testimonials = [
    {
      id: '1',
      name: 'A. Thompson',
      quote:
        'One to one mentorship transformed my approach to trading. I went from emotional decisions to systematic strategies.',
    },
    {
      id: '2',
      name: 'S. Williams',
      quote:
        'Learning risk management from a professional trader is invaluable. This changed my entire trading career.',
    },
    {
      id: '3',
      name: 'J. Chen',
      quote:
        'Professional mentorship on this level is rare. Worth every penny for the institutional knowledge gained.',
    },
  ];

  const programmePillars = [
    { week: 'Week One', title: 'Reading Live Order Flow and Marking Your Levels' },
    { week: 'Week Two', title: 'Risk Management' },
    { week: 'Week Three', title: 'Hedging' },
    { week: 'Week Four', title: 'Trading Psychology' },
  ];

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'What is the format of one-to-one sessions?',
      answer:
        'Sessions will be held online, one hour per week for four weeks. Details of how to join will be sent before your first session. You will be expected to complete assignments after each session, which will be evaluated during the next session.',
    },
    {
      id: 'faq-2',
      question: 'What will I need to start the mentorship?',
      answer:
        'Access to: Laptop or PC, MT4 or MT5, TradingView, Basic knowledge of trading.',
    },
    {
      id: 'faq-3',
      question: 'What is the refund policy?',
      answer:
        'Once payment has been made, you have 14 days within which to cancel your mentorship, provided that you have not attended your first session. If any part of the mentorship has been accessed, refund eligibility becomes null and void.',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-12 sm:pb-20 overflow-hidden" id="hero-section">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title with background image */}
          <div
            className="relative overflow-hidden rounded-xl border border-slate-800 bg-cover bg-center p-6 sm:p-10 min-h-[20rem] sm:min-h-[26rem] flex flex-col justify-center space-y-3"
            style={{ backgroundImage: "url('/homepage.png')" }}
          >
            <div className="absolute inset-0 bg-black/45" />
            <h1 className="relative z-10 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
              Master Professional Trading With Elite One-To-One Mentorship.
            </h1>
            <p className="relative z-10 text-lg sm:text-xl font-medium text-blue-300 tracking-tight [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
              Teaching Retail Traders to trade like the institutions.
            </p>
          </div>

          {/* Intro Paragraphs */}
          <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mt-6">
            <p>
              Welcome to Hedge Trading Academy one-to-one mentorship. Whether you are a beginner looking to understand the fundamentals of hedging, an experienced trader considering new strategies, or an investor looking to protect your capital, our structured one-to-one mentorship programme is designed to help you trade with confidence.
            </p>
            <p className="text-slate-400">
              What makes us different is that we teach pit logic combined with professional hedging strategy, rather than just academic theories. We will give you the skills to use a floor trader mindset to decide when to enter trades and the knowledge of how to apply hedging to manage trades. This will enable you to maintain total control of risk, manage volatility, and create a more consistent trading approach no matter where the market goes.
            </p>
          </div>

          {/* Standout Punch Line Callout */}
          <div className="relative overflow-hidden rounded-xl border border-blue-500/30 bg-blue-950/20 p-6 sm:p-7 mt-6">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500" />
            <div className="flex items-start gap-4">
              <Sparkles className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-blue-400 block mb-1">
                  INSTITUTIONAL MINDSET SHIFT
                </span>
                <p className="text-lg sm:text-xl font-bold text-white leading-snug tracking-tight">
                  &ldquo;The question is not whether the market is ready to shift. The question is are you ready to unlearn the retail trader mindset.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6">
            <button
              id="hero-apply-btn"
              onClick={() => onNavigate('mentorship', 'application-form-section')}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-base shadow-[0_0_25px_rgba(37,99,235,0.3)] transition-all cursor-pointer"
            >
              <span>Apply For Mentorship</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. WHY HEDGING SECTION */}
      <section className="relative py-12" id="why-hedging-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Hedging Is One of the Most Effective Trading Strategy
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Over 90% of retail traders fail not because they lack set up ideas, but because they have zero defensive infrastructure.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl mx-auto">
            {hedgingBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 text-base">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. WHY CHOOSE HEDGE TRADING ACADEMY */}
      <section className="relative py-12" id="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-8 sm:p-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Why Choose Hedge Trading Academy
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-medium">
                We don&apos;t just teach you how to enter a position, we hand you the mechanical framework to read live order flow and deploy precise options and future hedges dynamically. This guarantees you maintain total command of your risk exposure and weaponize market volatility, no matter which direction the market moves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MENTORSHIP DETAILS */}
      <section className="relative py-12" id="mentorship-details-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-center mb-10">
            Mentorship Details
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
              <div className="flex items-center justify-between text-sm border-b border-slate-800 pb-3">
                <span className="text-slate-400">Duration</span>
                <span className="text-white font-semibold">4 Weeks Intensive</span>
              </div>
              <div className="flex items-center justify-between text-sm border-b border-slate-800 pb-3">
                <span className="text-slate-400">Frequency</span>
                <span className="text-white font-semibold">1-Hour Live / Week</span>
              </div>
              <div className="flex items-center justify-between text-sm border-b border-slate-800 pb-3">
                <span className="text-slate-400">Evaluation</span>
                <span className="text-white font-semibold">Weekly Assignments</span>
              </div>
              <div className="flex items-center justify-between text-sm border-b border-slate-800 pb-3">
                <span className="text-slate-400">Platform</span>
                <span className="text-white font-semibold">MT4/MT5 + TradingView</span>
              </div>
              <div className="flex items-center justify-between text-sm border-b border-slate-800 pb-3 sm:border-b-0">
                <span className="text-slate-400">Availability</span>
                <span className="text-amber-400 font-semibold">5 Traders / Month</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Investment</span>
                <span className="text-white font-semibold">£2,995 One-time payment</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-800">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-blue-400">6+ Yrs</div>
                <div className="text-xs text-slate-400 mt-1">Trading Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-white">100%</div>
                <div className="text-xs text-slate-400 mt-1">One to One Training</div>
              </div>
            </div>

            <div className="pt-8 text-center">
              <button
                onClick={() => onNavigate('mentorship', 'application-form-section')}
                className="px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition"
              >
                Secure Your Spot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MENTORSHIP PROGRAMME OVERVIEW */}
      <section className="relative py-12" id="programme-overview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Mentorship Programme Overview
            </h2>
            <p className="text-slate-400 text-base">
              Four intensive weeks of focused one-to-one mentorship covering every pillar of institutional trade execution and capital defense.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                  {pillar.week}
                </span>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {pillar.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMPARISON TABLE */}
      <section className="relative py-12" id="comparison-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Generic Retail Trading Courses vs. Hedge Trading Academy
            </h2>
          </div>

          {/* Desktop & Tablet Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/4">
                    Feature / Mindset
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-red-400 w-[37.5%]">
                    Generic Retail Trading Courses
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-blue-400 w-[37.5%] border-l border-slate-800">
                    Hedge Trading Academy
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-4 px-6 font-bold text-white align-top">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-400 align-top">
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{row.retail}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-200 font-medium border-l border-slate-800 align-top">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-white font-semibold">{row.hedge}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View for Tables */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 space-y-3"
              >
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  {row.feature}
                </div>
                <div className="p-3 rounded-lg bg-red-950/20 border border-red-900/40 text-xs text-slate-300">
                  <div className="font-semibold text-red-400 mb-1 flex items-center gap-1.5">
                    <XCircle className="w-3.5 h-3.5" /> Generic Retail
                  </div>
                  <p>{row.retail}</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-950/25 border border-blue-500/30 text-xs text-white">
                  <div className="font-semibold text-blue-400 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Hedge Trading Academy
                  </div>
                  <p>{row.hedge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="relative py-12" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What Traders Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="relative rounded-xl border border-slate-800 bg-slate-950/60 p-7 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-slate-200 text-base leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs">
                    {t.name.substring(0, 2)}
                  </div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION (Accordion) */}
      <section className="relative py-12" id="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-blue-500/40 bg-blue-950/20'
                      : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-400 text-sm sm:text-base leading-relaxed border-t border-slate-800 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. CLOSING CTA SECTION */}
      <section className="relative py-12" id="closing-cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 sm:p-16 text-center space-y-6 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready To Take Trading Seriously?
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                Join our mentorship program and transform your trading into a sustainable, profitable endeavour.
              </p>
              <div className="pt-2">
                <button
                  id="closing-apply-btn"
                  onClick={() => onNavigate('mentorship', 'application-form-section')}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-base sm:text-lg shadow-[0_0_25px_rgba(37,99,235,0.4)] transition cursor-pointer"
                >
                  <span>Apply For Mentorship</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-slate-400 pt-2">
                Applications reviewed within 3 business days • 5 traders per month
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
