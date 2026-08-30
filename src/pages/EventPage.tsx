import React, { useState } from 'react';
import { NavigateFn } from '../types';
import {
  Calendar, MapPin, PoundSterling, Sparkles, CheckCircle2, Bell,
} from 'lucide-react';

interface EventPageProps {
  onNavigate: NavigateFn;
}

const NOTIFICATIONS_EMAIL = 'hello@hedgetradingacademy.com';

const EVENT = {
  title: 'Introduction to Hedging for Beginners',
  status: 'Coming Soon',
  tagline: 'Live event coming to Brighton, UK – March 2027',
  description: [
    'Join us for an exclusive introduction to hedging strategies. This workshop is designed for beginner traders and investors looking to understand how to protect their capital and manage risk effectively.',
    'Learn the fundamentals of hedging, discover how institutions protect their portfolios, and understand why hedging is one of the most effective trading strategies for long-term success.',
  ],
  location: 'Brighton, UK',
  date: 'March 2027',
  price: 'TBA',
};

export const EventPage: React.FC<EventPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    try {
      const stored = JSON.parse(localStorage.getItem('hta_event_interest') || '[]');
      stored.push({ ...formData, event: EVENT.title, submittedAt: new Date().toISOString() });
      localStorage.setItem('hta_event_interest', JSON.stringify(stored));
    } catch (err) {
      console.error('Local save error', err);
    }

    const subject = `Event Interest: ${EVENT.title}`;
    const body = [
      `Event: ${EVENT.title}`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
    ].join('\n');
    window.location.href = `mailto:${NOTIFICATIONS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsRegistered(true);
  };

  return (
    <div className="py-12 lg:py-20 bg-black min-h-screen text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center space-y-4">
          <span className="block text-base sm:text-lg font-semibold text-blue-400">
            Upcoming Event
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {EVENT.title}
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-blue-400">
            {EVENT.status}
          </p>

          <p className="text-slate-400 text-base sm:text-lg">
            {EVENT.tagline}
          </p>
        </div>

        {/* Event Details */}
        <div className="rounded-2xl bg-slate-950/60 border border-slate-800 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span>Event Details</span>
          </h2>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {EVENT.description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-slate-950/60 border border-slate-800 p-6 text-center space-y-2">
            <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400">Location</div>
            <div className="text-base font-bold text-white">{EVENT.location}</div>
          </div>
          <div className="rounded-2xl bg-slate-950/60 border border-slate-800 p-6 text-center space-y-2">
            <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400">Date</div>
            <div className="text-base font-bold text-white">{EVENT.date}</div>
          </div>
          <div className="rounded-2xl bg-slate-950/60 border border-slate-800 p-6 text-center space-y-2">
            <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto">
              <PoundSterling className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400">Price</div>
            <div className="text-base font-bold text-white">{EVENT.price}</div>
          </div>
        </div>

        {/* Register Your Interest */}
        <div className="rounded-2xl bg-slate-950/60 border border-slate-800 p-6 sm:p-10">
          {isRegistered ? (
            <div id="event-interest-success" className="text-center py-8 space-y-3">
              <div className="w-14 h-14 rounded-full bg-blue-950/40 border-2 border-blue-500 flex items-center justify-center mx-auto text-blue-400">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">You're on the list!</h3>
              <p className="text-sm text-slate-400 max-w-sm mx-auto">
                Thanks, <strong className="text-white">{formData.name}</strong>. Your email app should have opened with your interest ready to send to <strong className="text-white">{NOTIFICATIONS_EMAIL}</strong> — just hit send there to confirm.
              </p>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="space-y-5 max-w-md mx-auto">
              <div className="text-center space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">Register Your Interest</h3>
                <p className="text-sm text-slate-400">
                  Enter your details below and we'll notify you when tickets become available.
                </p>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="event-interest-name" className="sr-only">Full Name</label>
                <input
                  id="event-interest-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="event-interest-email" className="sr-only">Email Address</label>
                <input
                  id="event-interest-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <button
                type="submit"
                id="event-interest-submit-btn"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition shadow-[0_0_20px_rgba(37,99,235,0.3)] cursor-pointer"
              >
                <Bell className="w-4 h-4" />
                <span>Keep Me Updated</span>
              </button>

              <p className="text-xs text-slate-500 text-center">
                We'll notify you as soon as tickets become available. No spam, just updates about this event.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
