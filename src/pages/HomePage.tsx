import React, { useState } from 'react';
import { NavigateFn, ComparisonRow, Testimonial, FaqItem } from '../types';
import { Logo } from '../components/Logo';
import {
  ShieldCheck,
  TrendingUp,
  Activity,
  Layers,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Lock,
  Compass,
  Scale,
  Brain,
  Award,
  ChevronRight,
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

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'A. Thompson',
      role: 'Private Trader',
      quote:
        'One to one mentorship transformed my approach to trading. I went from emotional decisions to systematic strategies.',
    },
    {
      id: '2',
      name: 'S. Williams',
      role: 'Forex & Index Trader',
      quote:
        'Learning risk management from a professional trader is invaluable. This changed my entire trading career.',
    },
    {
      id: '3',
      name: 'J. Chen',
      role: 'Equities & Derivatives Trader',
      quote:
        'Professional mentorship on this level is rare. Worth every penny for the institutional knowledge gained.',
    },
  ];

  const programmePillars = [
    {
      number: '01',
      title: 'Marking Your Levels',
      description:
        'Master institutional structural levels, order blocks, and high-probability liquidity pools rather than arbitrary indicator lines.',
      icon: Compass,
    },
    {
      number: '02',
      title: 'Risk Management',
      description:
        'Construct unshakeable mathematical position sizing, risk-to-reward asymmetry, and ironclad downside capital preservation.',
      icon: Scale,
    },
    {
      number: '03',
      title: 'Hedging',
      description:
        'Deploy delta-neutral proxy hedges across futures and options to neutralize sudden drawdowns and extract profits from high volatility.',
      icon: ShieldCheck,
    },
    {
      number: '04',
      title: 'Trading Psychology',
      description:
        'Replace fear, greed, and revenge trading with an institutional pit-trader discipline and mechanical execution routine.',
      icon: Brain,
    },
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
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/60 via-blue-50/40 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Institutional Status Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Elite Institutional 1-on-1 Mentorship</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>Strictly 5 Traders / Month</span>
            </div>
          </div>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              {/* Logo + Title */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Logo size="lg" />
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                  Master Professional Trading With Elite One-To-One Mentorship.
                </h1>
                <p className="text-lg sm:text-xl font-medium text-blue-600 tracking-tight">
                  Teaching Retail Traders to trade like the institutions.
                </p>
              </div>

              {/* Intro Paragraphs */}
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl">
                <p>
                  Welcome to Hedge Trading Academy one-to-one mentorship. Whether you are a beginner looking to understand the fundamentals of hedging, an experienced trader considering new strategies, or an investor looking to protect your capital, our structured one-to-one mentorship programme is designed to help you trade with confidence.
                </p>
                <p className="text-slate-600">
                  What makes us different is that we teach pit logic combined with professional hedging strategy, rather than just academic theories. We will give you the skills to use a floor trader mindset to decide when to enter trades and the knowledge of how to apply hedging to manage trades. This will enable you to maintain total control of risk, manage volatility, and create a more consistent trading approach no matter where the market goes.
                </p>
              </div>

              {/* Standout Punch Line Callout */}
              <div className="relative overflow-hidden rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6 sm:p-7 shadow-sm">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500" />
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block mb-1 font-mono">
                      Institutional Mindset Shift
                    </span>
                    <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-tight">
                      &ldquo;The question is not whether the market is ready to shift. The question is are you ready to unlearn the retail trader mindset.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-apply-btn"
                  onClick={() => onNavigate('mentorship', 'application-form-section')}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-base shadow-[0_0_25px_rgba(37,99,235,0.3)] transition-all cursor-pointer"
                >
                  <span>Apply For Mentorship</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  id="hero-about-btn"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-base transition-colors shadow-sm"
                >
                  <span>About Hedge Trading Academy</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>
            </div>

            {/* Hero Right Institutional Card */}
            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <ShieldCheck className="w-36 h-36 text-blue-500" />
                </div>

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
                      Programme Specification
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                      Private 1-on-1
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Duration</span>
                      <span className="text-slate-900 font-semibold">4 Weeks Intensive</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Frequency</span>
                      <span className="text-slate-900 font-semibold">1-Hour Live / Week</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Evaluation</span>
                      <span className="text-slate-900 font-semibold">Weekly Assignments</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Platform</span>
                      <span className="text-slate-900 font-semibold">MT4/MT5 + TradingView</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Availability</span>
                      <span className="text-amber-600 font-semibold">5 Traders / Month</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-xs text-slate-500 mb-1">Mentorship Investment</div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                        £2,995
                      </span>
                      <span className="text-xs text-slate-500">One-time payment</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('mentorship', 'application-form-section')}
                    className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition"
                  >
                    Secure Your Spot
                  </button>
                </div>
              </div>

              {/* Trust Metric Box */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <div className="text-2xl font-extrabold text-blue-600 font-mono">6+ Yrs</div>
                  <div className="text-xs text-slate-500 mt-1">Floor & Pit Experience</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <div className="text-2xl font-extrabold text-slate-900 font-mono">100%</div>
                  <div className="text-xs text-slate-500 mt-1">Live 1-on-1 Training</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY HEDGING SECTION */}
      <section className="relative py-12" id="why-hedging-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Institutional Risk Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Hedging Is One of the Most Effective Trading Strategies
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Retail traders gamble on direction. Institutions construct asymmetric hedges so they remain in complete control regardless of violent market swings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hedgingBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-slate-200 bg-white p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {benefit}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      Engineered to protect trading accounts from catastrophic tail-risk and volatile intraday whipsaws.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE HEDGE TRADING ACADEMY */}
      <section className="relative py-12" id="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 via-white to-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b14_1px,transparent_1px),linear-gradient(to_bottom,#64748b14_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200">
                Core Distinction
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Why Choose Hedge Trading Academy
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
                We don&apos;t just teach you how to enter a position, we hand you the mechanical framework to read live order flow and deploy precise options and future hedges dynamically. This guarantees you maintain total command of your risk exposure and weaponize market volatility, no matter which direction the market moves.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Activity className="w-6 h-6 text-blue-600 mb-2" />
                  <h3 className="text-sm font-bold text-slate-900">Live Order Flow</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Trace institutional footprint and limit order books in real time.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-blue-600 mb-2" />
                  <h3 className="text-sm font-bold text-slate-900">Mechanical Hedging</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Defend capital dynamically across correlated assets and futures.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Award className="w-6 h-6 text-blue-600 mb-2" />
                  <h3 className="text-sm font-bold text-slate-900">Private Accountability</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Live weekly 1-on-1 critiques and personalized performance feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section className="relative py-12" id="comparison-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Institutional vs Retail
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Generic Retail Trading Courses vs. Hedge Trading Academy
            </h2>
            <p className="text-slate-600 text-base">
              A transparent breakdown between public retail guesswork and institutional risk mechanics.
            </p>
          </div>

          {/* Desktop & Tablet Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-4 px-6 text-xs font-bold font-mono uppercase tracking-wider text-slate-500 w-1/4">
                    Feature / Mindset
                  </th>
                  <th className="py-4 px-6 text-xs font-bold font-mono uppercase tracking-wider text-red-600 w-[37.5%] bg-red-50">
                    Generic Retail Trading Courses
                  </th>
                  <th className="py-4 px-6 text-xs font-bold font-mono uppercase tracking-wider text-blue-700 w-[37.5%] bg-blue-50 border-l border-blue-100">
                    Hedge Trading Academy
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 align-top">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-600 bg-red-50/40 align-top">
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.retail}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-700 font-medium bg-blue-50/50 border-l border-blue-100 align-top">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-slate-900 font-semibold">{row.hedge}</span>
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
                className="rounded-xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm"
              >
                <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                  {row.feature}
                </div>
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-slate-600">
                  <div className="font-semibold text-red-600 mb-1 flex items-center gap-1.5">
                    <XCircle className="w-3.5 h-3.5" /> Generic Retail
                  </div>
                  <p>{row.retail}</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-slate-700">
                  <div className="font-semibold text-blue-700 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Hedge Trading Academy
                  </div>
                  <p>{row.hedge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="relative py-12" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Verified Mentee Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Traders Say
            </h2>
            <p className="text-slate-600 text-base">
              Real results from traders who unlearned retail habits and adopted institutional risk management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="relative rounded-xl border border-slate-200 bg-white p-7 shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-blue-600">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-xs">
                    {t.name.substring(0, 2)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MENTORSHIP PROGRAMME OVERVIEW */}
      <section className="relative py-12" id="programme-overview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Curriculum Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Mentorship Programme Overview
            </h2>
            <p className="text-slate-600 text-base">
              Four intensive weeks of focused one-to-one mentorship covering every pillar of institutional trade execution and capital defense.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="rounded-xl border border-slate-200 bg-white p-6 space-y-4 hover:border-blue-300 hover:shadow-md transition shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Pricing Callout Card */}
          <div className="mt-12 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase font-mono tracking-widest text-blue-600 font-bold">
                Transparent Tuition
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Programme Investment — <span className="text-blue-600 font-mono">£2,995</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Includes full 4-week 1-on-1 live mentorship, personalized weekly assignments, order flow setup, and private direct mentor access. Strictly capped at 5 traders per month.
              </p>
            </div>
            <button
              onClick={() => onNavigate('mentorship', 'application-form-section')}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-[0_0_20px_rgba(37,99,235,0.35)] shrink-0 transition cursor-pointer"
            >
              Apply For Mentorship
            </button>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION (Accordion) */}
      <section className="relative py-12" id="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Got Questions? We Have Answers.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Key operational details regarding session formats, requirements, and policies.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-blue-300 bg-blue-50/50'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CLOSING CTA SECTION */}
      <section className="relative py-12" id="closing-cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-500/40 bg-gradient-to-b from-[#111626] via-[#0d101a] to-[#07080c] p-8 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-blue-400 bg-blue-950/80 border border-blue-500/30">
                Next Cohort Admissions Open
              </span>
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
              <p className="text-xs text-slate-400 pt-2 font-mono">
                Applications reviewed within 3 business days • 5 traders per month
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
