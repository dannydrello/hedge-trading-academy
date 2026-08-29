import React, { useState } from 'react';
import { NavigateFn } from '../types';
import { SocialLinks } from '../components/SocialLinks';
import {
  Mail, Phone, Send, CheckCircle2, Shield
} from 'lucide-react';

const CONTACT_EMAIL = 'hello@hedgetradingacademy.com';
const CONTACT_PHONE_DISPLAY = '+44 7921 249547';

interface ContactPageProps {
  onNavigate: NavigateFn;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Mentorship Admissions',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    const subject = `Website Inquiry: ${formData.inquiryType}`;
    const body = [
      `Full Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Inquiry Nature: ${formData.inquiryType}`,
      '',
      'Message:',
      formData.message,
    ].join('\n');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  return (
    <div className="py-12 lg:py-20 bg-black min-h-screen text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact Us
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-950/40 text-blue-400 border border-blue-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase text-slate-400">Email</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{CONTACT_EMAIL}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-950/40 text-blue-400 border border-blue-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase text-slate-400">Phone</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{CONTACT_PHONE_DISPLAY}</div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-3">Follow The Academy</h3>
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-slate-950/60 border border-slate-800">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/40 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Almost Done</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your email app should have opened with your message ready to send to <strong>{CONTACT_EMAIL}</strong> — just hit send there to complete your inquiry.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Send Direct Message</h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Fill out the form below to connect directly with the mentorship team.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-wider text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-wider text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-wider text-slate-300">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7700 900077"
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-wider text-slate-300">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition"
                      >
                        <option value="Mentorship Admissions">1-on-1 Mentorship Admissions</option>
                        <option value="Curriculum & Strategy Questions">Curriculum & Hedging Strategy</option>
                        <option value="Corporate/Desk Training">Prop Desk / Corporate Training</option>
                        <option value="Media/Press">Media / Speaking Engagement</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-slate-300">
                      Message & Background Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details on your current trading journey, your questions about the mentorship structure, or your specific requirements..."
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
                    <Shield className="w-3.5 h-3.5 text-blue-400" />
                    <span>All communications are strictly confidential under NDA standards.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
