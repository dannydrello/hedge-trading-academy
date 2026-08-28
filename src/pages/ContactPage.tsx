import React, { useState } from 'react';
import { NavigateFn } from '../types';
import { SocialLinks } from '../components/SocialLinks';
import {
  Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2,
  Clock, Shield, ArrowRight, Globe
} from 'lucide-react';

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
    setSubmitted(true);
  };

  return (
    <div className="py-12 lg:py-20 bg-white min-h-screen text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Desk Communication</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact the Academy Desk
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Have questions regarding our one-to-one curriculum, scheduling an evaluation interview, or institutional partnership? Reach out to our advisory team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Contact Information & Desks */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Direct Communication Desks</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-500">Email The Academy</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">hello@hedgetradingacademy.com</div>
                    <div className="text-xs text-slate-500 mt-1">Mentorship admissions, institutional/prop desks & general enquiries — response within 12 business hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-500">Operating Trading Hours</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">Mon – Fri: 07:00 – 21:00 (London / UTC)</div>
                    <div className="text-xs text-slate-500 mt-1">Direct support active during London & NY sessions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Hubs */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" />
                <span>Academy Advisory Locations</span>
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Mentorship sessions are delivered globally in private 1-on-1 virtual interactive terminals, with executive briefings held in London and Singapore.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-700">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-blue-600 font-bold block">London Desk</span>
                  Canary Wharf, London, UK
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-blue-600 font-bold block">Singapore Hub</span>
                  Marina Bay Financial Centre
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900">Follow The Academy</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Get market commentary, mentorship updates, and event announcements on our social channels.
              </p>
              <SocialLinks />
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Inquiry Received</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your message has been routed to our admissions desk. An admissions director will review your notes and reply within 12 hours.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">Send Direct Message</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out the form below to connect directly with the mentorship team.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7700 900077"
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition"
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
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600">
                      Message & Background Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details on your current trading journey, your questions about the mentorship structure, or your specific requirements..."
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Admissions Desk</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
                    <Shield className="w-3.5 h-3.5 text-blue-600" />
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
