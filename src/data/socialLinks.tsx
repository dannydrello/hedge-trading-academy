import React from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import { XIcon, RedditIcon, TikTokIcon } from '../components/SocialIcons';

export interface SocialLink {
  name: string;
  url: string;
  Icon: React.FC<{ className?: string }>;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hedge-trading-academy-12942b417?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    Icon: Linkedin,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/hedge.tradingacademy?igsi=Ym5uZzFzYm5heDFs&utm_source=qr',
    Icon: Instagram,
  },
  {
    name: 'X',
    url: 'https://x.com/hedgetradingaca?s=11&t=PDcMIVQ3A6eHvlaMI3-aSg',
    Icon: XIcon,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1JxCw1Ke4E/?mibextid=wwXIfr',
    Icon: Facebook,
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/u/Hedgetradingacademy/s/9smRYUesJB',
    Icon: RedditIcon,
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@hedgetradingacademy',
    Icon: TikTokIcon,
  },
];
