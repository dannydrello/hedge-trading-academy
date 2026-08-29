import React, { useState } from 'react';
import { PageId, TargetAudienceCard, ApplicationFormData } from '../types';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Send,
  Compass,
  Scale,
  Brain,
  Check,
  ArrowRight,
  MessageCircle,
  Users,
} from 'lucide-react';

const WHATSAPP_NUMBER = '447931379380';
const WHATSAPP_DISPLAY = '+44 7931 379380';

interface ApplyPageProps {
  onNavigate: (page: PageId) => void;
}

export const ApplyPage: React.FC<ApplyPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    tradingExperience: '',
    currentChallenges: '',
    whyMentorship: '',
    currentAccountSize: '',
    tradingGoals: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationRef, setApplicationRef] = useState('');

  const targetAudiences: TargetAudienceCard[] = [
    {
      title: 'New Traders',
      description:
        "If you're just starting your trading journey and want to learn the right way from day one, building a foundation in market logic and risk management and avoiding years of costly mistakes.",
    },
    {
      title: 'Developing Traders',
      description:
        'If you\'ve been trading for a while but struggle with consistency, risk management, or turning your edge into profitable returns, we will help you develop a more structured approach to analysing and managing positions.',
    },
    {
      title: 'Investors',
      description:
        'If you\'re an investor looking to learn the principles of managing portfolios and market exposure.',
    },
  ];

  const whatsIncludedItems = [
    { title: 'Marking your entry levels', icon: Compass },
    { title: 'Risk management (stop losses and take profit)', icon: Scale },
    { title: 'Hedging', icon: ShieldCheck },
    { title: 'Trading psychology', icon: Brain },
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ApplicationFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    }
    if (!formData.country.trim()) {
      newErrors.country = 'Please enter your country of residence';
    }
    if (!formData.tradingExperience) {
      newErrors.tradingExperience = 'Please select your trading experience';
    }
    if (!formData.currentChallenges.trim()) {
      newErrors.currentChallenges = 'Please share your current trading challenges';
    }
    if (!formData.whyMentorship.trim()) {
      newErrors.whyMentorship = 'Please tell us why you want mentorship';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ApplicationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate review dispatch and persistence
    setTimeout(() => {
      const generatedRef = `HTA-${Math.floor(100000 + Math.random() * 900000)}`;
      setApplicationRef(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        const stored = JSON.parse(localStorage.getItem('hta_applications') || '[]');
        stored.push({
          ...formData,
          ref: generatedRef,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('hta_applications', JSON.stringify(stored));
      } catch (err) {
        console.error('Local save error', err);
      }
    }, 900);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      tradingExperience: '',
      currentChallenges: '',
      whyMentorship: '',
      currentAccountSize: '',
      tradingGoals: '',
    });
    setErrors({});
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. TOP HEADER */}
      <section className="relative pt-16 sm:pt-24 pb-6" id="apply-header-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Apply For One-To-One Mentorship
          </h1>
        </div>
      </section>

      {/* 2. WHO THIS IS FOR SECTION */}
      <section className="relative py-6" id="who-this-is-for-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Who This Is For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {targetAudiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-8 space-y-3 hover:border-blue-500/40 transition"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {audience.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT'S INCLUDED SECTION */}
      <section className="relative py-6" id="whats-included-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What&apos;s Included
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatsIncludedItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 flex flex-col items-center text-center gap-4 hover:border-blue-500/40 transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. APPLICATION FORM */}
      <section className="relative py-8" id="application-form-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 sm:p-10 md:p-12 relative overflow-hidden">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Heading & Subtext */}
                <div className="space-y-3 pb-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-950/30 text-blue-400 border border-blue-500/30">
                    <Users className="w-3.5 h-3.5" />
                    <span>We accept a maximum of 5 applicants per month</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Application Form
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    Tell us about your trading background and goals. We&apos;ll review your application and contact you within 3 business days.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                    >
                      Full Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Alexander Vance"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                        errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                    >
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@institutional.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                        errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                    >
                      Phone Number <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+44 7911 123456"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                        errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Country */}
                  <div className="space-y-2">
                    <label
                      htmlFor="country"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                    >
                      Country <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="United Kingdom / United States"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                        errors.country ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.country && (
                      <p className="text-xs text-red-400 mt-1">{errors.country}</p>
                    )}
                  </div>
                </div>

                {/* Trading Experience Dropdown */}
                <div className="space-y-2">
                  <label
                    htmlFor="tradingExperience"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                  >
                    Select Your Trading Experience <span className="text-blue-400">*</span>
                  </label>
                  <select
                    id="tradingExperience"
                    name="tradingExperience"
                    value={formData.tradingExperience}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer ${
                      errors.tradingExperience
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-slate-700'
                    }`}
                  >
                    <option value="" disabled className="bg-slate-900 text-slate-400">
                      Select Your Trading Experience
                    </option>
                    <option value="Beginner" className="bg-slate-900 text-white">
                      Beginner
                    </option>
                    <option value="Intermediate" className="bg-slate-900 text-white">
                      Intermediate
                    </option>
                    <option value="Advanced" className="bg-slate-900 text-white">
                      Advanced
                    </option>
                  </select>
                  {errors.tradingExperience && (
                    <p className="text-xs text-red-400 mt-1">{errors.tradingExperience}</p>
                  )}
                </div>

                {/* What are your current trading challenges? */}
                <div className="space-y-2">
                  <label
                    htmlFor="currentChallenges"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                  >
                    What are your current trading challenges? <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="currentChallenges"
                    name="currentChallenges"
                    rows={3}
                    value={formData.currentChallenges}
                    onChange={handleInputChange}
                    placeholder="e.g. Struggling with risk discipline, holding losing trades too long, or suffering drawdown during market volatility..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none ${
                      errors.currentChallenges
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-slate-700'
                    }`}
                  />
                  {errors.currentChallenges && (
                    <p className="text-xs text-red-400 mt-1">{errors.currentChallenges}</p>
                  )}
                </div>

                {/* Why do you want mentorship? */}
                <div className="space-y-2">
                  <label
                    htmlFor="whyMentorship"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                  >
                    Why do you want mentorship? <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="whyMentorship"
                    name="whyMentorship"
                    rows={3}
                    value={formData.whyMentorship}
                    onChange={handleInputChange}
                    placeholder="e.g. Want direct institutional pit-logic guidance, professional hedging mechanics, and 1-on-1 accountability..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none ${
                      errors.whyMentorship
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-slate-700'
                    }`}
                  />
                  {errors.whyMentorship && (
                    <p className="text-xs text-red-400 mt-1">{errors.whyMentorship}</p>
                  )}
                </div>

                {/* Current Account Size (optional) */}
                <div className="space-y-2">
                  <label
                    htmlFor="currentAccountSize"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                  >
                    Current Account Size (optional)
                  </label>
                  <input
                    type="text"
                    id="currentAccountSize"
                    name="currentAccountSize"
                    value={formData.currentAccountSize}
                    onChange={handleInputChange}
                    placeholder="e.g. £10,000 - £50,000 / Funded Account / Private Capital"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                {/* Trading Goals (optional) */}
                <div className="space-y-2">
                  <label
                    htmlFor="tradingGoals"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                  >
                    Trading Goals (optional)
                  </label>
                  <textarea
                    id="tradingGoals"
                    name="tradingGoals"
                    rows={3}
                    value={formData.tradingGoals}
                    onChange={handleInputChange}
                    placeholder="e.g. Achieve consistent monthly capital compounding and transition to managing institutional or proprietary capital."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-application-btn"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 text-white font-bold text-base sm:text-lg shadow-[0_0_25px_rgba(37,99,235,0.3)] transition cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Application...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Encrypted & Strictly Confidential Submission</span>
                </div>
              </form>
            ) : (
              /* Success Confirmation Card */
              <div
                id="application-success-view"
                className="text-center py-10 space-y-6 animate-in fade-in zoom-in-95 duration-200"
              >
                <div className="w-20 h-20 rounded-full bg-blue-950/40 border-2 border-blue-500 flex items-center justify-center mx-auto text-blue-400">
                  <Check className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-950/40 text-blue-400 border border-blue-500/30">
                    Application Reference: {applicationRef}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Application Received
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your application for Hedge Trading Academy one-to-one mentorship has been logged.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-900 border border-slate-700 p-6 max-w-md mx-auto text-left space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2 flex items-center justify-between">
                    <span>Admissions Review Protocol</span>
                    <span className="text-blue-400">Step 1 of 2</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Our Lead Mentor will personally review your trading experience and challenges within <strong>3 business days</strong>.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>If selected for the monthly 5-trader cohort, you will receive onboarding scheduling details at <strong>{formData.email}</strong>.</span>
                  </div>
                </div>

                {/* WhatsApp Payment CTA */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I just submitted my mentorship application (Ref: ${applicationRef}). I would like to arrange payment to secure my spot.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="success-whatsapp-pay-btn"
                  className="max-w-md mx-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)] transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Message Us on WhatsApp to Arrange Payment</span>
                </a>
                <p className="text-xs text-slate-500 -mt-2">
                  WhatsApp: <span className="text-emerald-400">{WHATSAPP_DISPLAY}</span>
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => onNavigate('home')}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition"
                  >
                    Return to Homepage
                  </button>
                  <button
                    onClick={resetForm}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-semibold text-sm transition"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
