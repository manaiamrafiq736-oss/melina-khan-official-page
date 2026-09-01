export interface ServiceItem {
  id: string;
  title: string;
  category: 'Psychology' | 'Development' | 'Marketing' | 'AI & SEO';
  icon: string;
  tagline: string;
  description: string;
  deliverables: string[];
  benefits: string[];
  duration?: string;
  badge?: string;
}

export interface SkillTag {
  name: string;
  icon: string;
  category: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  client: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  rating: number;
  content: string;
  serviceCategory: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BookingFormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  consultationType: 'Online (Google Meet/Zoom)' | 'In-Person (Multan)' | 'Digital Project Discussion';
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

export interface AuditQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    recommendedService: string;
    points: { [key: string]: number };
  }[];
}
