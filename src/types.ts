export type PageId = 'home' | 'about' | 'mentorship' | 'events' | 'blog' | 'contact' | 'admin';

export type NavigateFn = (page: PageId, scrollTargetId?: string) => void;

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  additionalImages?: string[];
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: 'Risk Management' | 'Hedging Strategy' | 'Order Flow' | 'Market Psychology' | 'Institutional Insights';
  tags: string[];
  isFeatured?: boolean;
  published: boolean;
}

export interface TradingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  timezone: string;
  location: string;
  type: 'Live Masterclass' | 'Interactive Workshop' | 'Order Flow Breakdown' | 'Q&A Desk';
  description: string;
  speaker: string;
  speakerRole: string;
  spotsLeft: number;
  isVirtual: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: 'Mentorship Admissions' | 'Corporate/Desk Training' | 'Media/Press' | 'General Inquiry';
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ComparisonRow {
  feature: string;
  retail: string;
  hedge: string;
}

export interface PhilosophyCard {
  title: string;
  description: string;
  tag: string;
}

export interface TargetAudienceCard {
  title: string;
  description: string;
  badge: string;
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  tradingExperience: 'Beginner' | 'Intermediate' | 'Advanced' | '';
  currentChallenges: string;
  whyMentorship: string;
  currentAccountSize: string;
  tradingGoals: string;
}

