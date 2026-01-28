export interface Article {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  author: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  frequency: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  ISSUES = 'issues',
  AI_PREVIEW = 'ai-preview',
  SUBSCRIBE = 'subscribe',
  TESTIMONIALS = 'testimonials',
}