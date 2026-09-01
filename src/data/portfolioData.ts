import { ServiceItem, SkillTag, CaseStudy, Testimonial, FAQItem, AuditQuestion } from '../types';

export const PERSONAL_INFO = {
  name: 'Melina Khan',
  headline: 'Professional Digital & Psychological Consultant',
  profileImage: 'https://i.ibb.co/fG1b8H8s/melina-khan.jpg',
  directImgUrl: 'https://ibb.co/fG1b8H8s',
  fallbackImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  institution: 'Bahauddin Zakariya University (BZU)',
  location: 'Multan, Pakistan (Available Worldwide Remote)',
  email: 'melinakhan.official@gmail.com',
  phone: '+92 300 1234567',
  whatsapp: '+923001234567',
  languages: ['English', 'Urdu', 'Punjabi'],
  bioUrduEnglish: 'Main ek passionate professional hu jo Psychology ki samajh aur Modern Digital Technology ko seamlessly combine karke individuals aur businesses ke liye high-impact solutions create karti hu. By understanding human cognitive patterns, decision-making, and modern digital ecosystems, I help brands engage audiences meaningfully and guide individuals toward mental clarity and peak productivity.',
  aboutDetailed: [
    'With an academic foundation at Bahauddin Zakariya University (BZU) in Psychology paired with hands-on mastery of Modern Web Development, Digital Marketing, SEO, and Artificial Intelligence, I bridge the crucial gap between human behavior and technological innovation.',
    'Most digital products fail because they ignore cognitive psychology—how real people think, feel, and make choices under pressure. On the flip side, many modern psychological practitioners lack the digital tools to scale their impact.',
    'I operate at the intersection of both disciplines: crafting digital interfaces and growth systems grounded in psychological resonance, while offering evidence-based mindset coaching to entrepreneurs, students, and professionals.'
  ]
};

export const SKILL_TAGS: SkillTag[] = [
  {
    name: 'Psychologist',
    icon: 'fa-brain',
    category: 'Psychology',
    description: 'Cognitive behavioral insights, mental well-being, stress regulation & habit architecture.'
  },
  {
    name: 'Digital Marketer',
    icon: 'fa-bullhorn',
    category: 'Marketing',
    description: 'High-conversion funnel strategies, audience psychology & brand positioning.'
  },
  {
    name: 'Web Developer',
    icon: 'fa-laptop-code',
    category: 'Development',
    description: 'Fast, responsive, modern web applications built for conversion and intuitive user experience.'
  },
  {
    name: 'UI/UX Designer',
    icon: 'fa-pen-nib',
    category: 'Design',
    description: 'Cognitive-friendly layouts, color psychology, and aesthetic modern brand identities.'
  },
  {
    name: 'SEO Expert',
    icon: 'fa-search',
    category: 'SEO',
    description: 'Search intent mapping, on-page optimization, content strategy & organic visibility.'
  },
  {
    name: 'AI Creator',
    icon: 'fa-robot',
    category: 'AI',
    description: 'AI workflow automation, prompt engineering, and intelligent content pipeline creation.'
  },
  {
    name: 'BZU Scholar',
    icon: 'fa-graduation-cap',
    category: 'Academic',
    description: 'Academic excellence and ongoing behavioral research at Bahauddin Zakariya University.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'psychology-consulting',
    title: 'Psychological & Mindset Consulting',
    category: 'Psychology',
    icon: 'fa-brain',
    tagline: 'Empowering your mental clarity, emotional resilience, and peak focus.',
    description: 'One-on-one confidential sessions exploring cognitive patterns, stress management, academic/career burnout, emotional resilience, and constructive behavioral habits tailored for modern challenges.',
    deliverables: [
      'Personalized Cognitive & Habit Assessment',
      'Confidential 1-on-1 Virtual or In-Person Sessions',
      'Actionable Stress & Anxiety Management Frameworks',
      'Focus & Peak Productivity Blueprint for Students & Founders'
    ],
    benefits: [
      'Clarity in life decisions & reduced mental fatigue',
      'Overcome procrastination & imposter syndrome',
      'Evidence-based psychological coping mechanisms',
      'Safe, compassionate, and non-judgmental atmosphere'
    ],
    duration: '45-60 min per session',
    badge: 'Popular for Individuals'
  },
  {
    id: 'web-development',
    title: 'Modern Web Development & UI/UX',
    category: 'Development',
    icon: 'fa-laptop-code',
    tagline: 'High-performance digital experiences crafted with psychological precision.',
    description: 'Custom, blazing-fast web applications designed with responsive layouts, modern design systems, clean animations, and user-friendly interactions engineered to turn visitors into loyal clients.',
    deliverables: [
      'Full-Stack Responsive Web Application / Portfolio / Landing Page',
      'Psychology-informed UI/UX wireframes & design systems',
      'Mobile-first responsive optimization & speed tuning',
      'Contact forms, booking schedulers & analytics integration'
    ],
    benefits: [
      'Sub-second loading speeds for higher search rankings',
      'Reduced bounce rates via intuitive visual hierarchy',
      'Seamless mobile and desktop experiences',
      'Production-ready, clean, and maintainable codebase'
    ],
    duration: '1-3 Weeks delivery',
    badge: 'High Conversion'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth Strategy',
    category: 'Marketing',
    icon: 'fa-bullhorn',
    tagline: 'Driving organic & paid growth through behavioral consumer science.',
    description: 'Comprehensive digital campaigns leveraging consumer behavioral triggers, narrative copywriting, targeted social media marketing, and structured sales funnels that maximize ROI.',
    deliverables: [
      'Target Demographic Persona & Psychographic Profiling',
      'High-Converting Social Media Strategy (Meta, LinkedIn, Instagram)',
      'Persuasive Ad Copy & Conversion Funnel Design',
      'Campaign Performance Analytics & Optimization Audits'
    ],
    benefits: [
      'Lower customer acquisition costs (CAC)',
      'Higher emotional resonance with prospective buyers',
      'Predictable lead generation systems',
      'Consistent, cohesive brand storytelling'
    ],
    duration: 'Monthly Retainer or Project-based'
  },
  {
    id: 'seo-content',
    title: 'Advanced SEO & Search Intent Mastery',
    category: 'AI & SEO',
    icon: 'fa-search',
    tagline: 'Dominating organic search results by matching true user intent.',
    description: 'Data-driven search engine optimization combining in-depth keyword architecture, technical audits, on-page optimization, and psychologically structured content that ranks and converts.',
    deliverables: [
      'Comprehensive Keyword Research & Intent Cluster Mapping',
      'Technical SEO Audits (Site speed, schema, crawlability)',
      'On-Page Optimization & Semantic Meta Structure',
      'Content Strategy Roadmaps to outrank competitors'
    ],
    benefits: [
      'Long-term sustainable organic inbound traffic',
      'Top search placements for high-intent keywords',
      'Higher domain authority and trust signals',
      'Zero ongoing ad cost for organic visitors'
    ],
    duration: 'Ongoing / 4-Week Sprints'
  },
  {
    id: 'ai-creation',
    title: 'AI Systems & Workflow Engineering',
    category: 'AI & SEO',
    icon: 'fa-robot',
    tagline: 'Accelerate productivity and creativity with state-of-the-art AI.',
    description: 'Custom AI prompt pipelines, generative content workflows, automated lead screening, and bespoke AI assistant integrations that save dozens of manual work hours every week.',
    deliverables: [
      'Custom LLM & AI System Prompt Blueprints',
      'Automated Content Generation & Repurposing Workflows',
      'AI-Powered Chatbots & Consultation Screening Tools',
      'Hands-on Training on AI Tools (Gemini, ChatGPT, Midjourney)'
    ],
    benefits: [
      'Save 15+ hours weekly on repetitive manual tasks',
      'Scale high-quality content output effortlessly',
      'Stay ahead of tech disruption in your industry',
      'Seamless integration into existing toolstacks'
    ],
    duration: 'Custom Solutions'
  },
  {
    id: 'brand-identity',
    title: 'Visual Design & Brand Architecture',
    category: 'Development',
    icon: 'fa-pen-nib',
    tagline: 'Creating memorable visual identities that evoke instant trust.',
    description: 'Transformative graphic and brand identity design combining color psychology, typography harmony, marketing collateral, social media templates, and distinctive visual guidelines.',
    deliverables: [
      'Complete Brand Identity Kits (Logo, Palette, Typography)',
      'Color Psychology Strategic Guidelines',
      'Social Media Master Templates & Marketing Banners',
      'Print & Digital Ready High-Resolution Assets'
    ],
    benefits: [
      'Immediate professional credibility and client trust',
      'Consistent multi-platform brand recognition',
      'Assets ready for immediate marketing deployment',
      'Unique aesthetic that sets you apart from competitors'
    ],
    duration: '1-2 Weeks'
  }
];

export const STATS = [
  { label: 'Psychology & Digital Consultations', value: '250+' },
  { label: 'Web & Growth Projects Delivered', value: '45+' },
  { label: 'Client Satisfaction Rate', value: '99%' },
  { label: 'BZU Research & Academic Hours', value: '1,200+' }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Cognitive-Centered E-Commerce Overhaul',
    category: 'Web Dev & Psychology',
    description: 'Redesigned the entire user checkout and product discovery flow using choice-architecture principles and reduced cognitive load.',
    impact: 'Increased checkout completion by 42% and reduced cart abandonment within 30 days of launch.',
    tags: ['React', 'UX Psychology', 'Conversion Optimization', 'Tailwind'],
    metrics: [
      { label: 'Conversion Lift', value: '+42%' },
      { label: 'Drop-off Reduction', value: '-35%' },
      { label: 'Page Load Speed', value: '0.8s' }
    ],
    client: 'Lifestyle & Wellness Apparel Brand'
  },
  {
    id: 'case-2',
    title: 'Mindset Coaching & Peak Performance Program',
    category: 'Psychological Consulting',
    description: 'Structured an 8-week intensive habit and cognitive reframing curriculum for academic students and young remote entrepreneurs facing severe burnout.',
    impact: '100% of participants reported reduced stress scores and marked improvements in daily focus metrics.',
    tags: ['CBT Principles', 'Habit Loops', 'Stress Audit', '1-on-1 Coaching'],
    metrics: [
      { label: 'Stress Score Reduction', value: '-60%' },
      { label: 'Task Completion Rate', value: '+75%' },
      { label: 'Retention', value: '94%' }
    ],
    client: 'University Cohorts & Solo Founders'
  },
  {
    id: 'case-3',
    title: 'Organic Search Domination for Health Service',
    category: 'SEO & Content Strategy',
    description: 'Implemented semantic topic clusters, technical schema markup, and psychologically targeted search intent articles for a regional healthcare provider.',
    impact: 'Secured #1 ranking across 18 target keywords, driving over 25,000 monthly organic visits.',
    tags: ['Technical SEO', 'Keyword Intent', 'Content Architecture', 'Google Rank'],
    metrics: [
      { label: 'Organic Traffic', value: '+310%' },
      { label: 'Top 3 Keywords', value: '18+' },
      { label: 'Inbound Leads', value: '4x' }
    ],
    client: 'Regional Clinic & Health Portal'
  },
  {
    id: 'case-4',
    title: 'AI Automated Brand Content Engine',
    category: 'AI Systems & Marketing',
    description: 'Constructed an end-to-end automated multi-channel content engine using tailored prompts, sentiment analysis, and dynamic graphics generation.',
    impact: 'Cut weekly content preparation time from 18 hours down to 2.5 hours while quadrupling social reach.',
    tags: ['AI Prompts', 'Automation', 'Social Growth', 'Meta API'],
    metrics: [
      { label: 'Hours Saved/Week', value: '15.5 hrs' },
      { label: 'Content Output', value: '4x' },
      { label: 'Engagement Rate', value: '+88%' }
    ],
    client: 'Digital Agency & Content Creators'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Ayesha Tariq',
    role: 'Clinical Researcher & Educator',
    company: 'BZU Academic Network',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Melina brings a remarkably rare blend of rigorous psychological discipline and state-of-the-art digital insight. Her analytical ability to connect behavioral science with real-world digital solutions is extraordinary.',
    serviceCategory: 'Psychology & Research'
  },
  {
    id: 'test-2',
    name: 'Hamza Malik',
    role: 'Founder & Tech Lead',
    company: 'NexusTech Ventures',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Working with Melina on our platform’s UI and marketing funnel was a game changer. She did not just build a stunning website; she engineered the user flow based on how customers actually think and make buying decisions.',
    serviceCategory: 'Web Development & Marketing'
  },
  {
    id: 'test-3',
    name: 'Sana Rehman',
    role: 'Graduate Scholar',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Her psychological consultation sessions helped me break through severe thesis burnout and exam anxiety. The practical habit frameworks she provided gave me clarity, calm, and consistent daily motivation.',
    serviceCategory: 'Psychological Consulting'
  },
  {
    id: 'test-4',
    name: 'Bilal Farooq',
    role: 'E-Commerce Director',
    company: 'SilkRoute Essentials',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Melina’s SEO strategy and AI content pipelines transformed our organic sales within 3 months. She delivers with total transparency, prompt communication, and exceptional technical skill.',
    serviceCategory: 'SEO & AI Systems'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do Psychology and Digital Technology work together in your services?',
    answer: 'Every digital interaction is psychological. Whether it is a website visitor deciding whether to trust your brand, a customer clicking a checkout button, or an entrepreneur managing anxiety, human cognition is at the center. By integrating behavioral psychology into web development, SEO, and marketing, I create digital solutions that naturally resonate with human instincts and drive authentic results.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'What happens during a Psychological & Mindset Consultation session?',
    answer: 'Sessions are 100% private, confidential, and goal-oriented. We analyze your current challenges (e.g., stress, focus blocks, impostor syndrome, career direction), break down recurring cognitive triggers, and co-create practical behavioral systems you can implement immediately. Sessions can be conducted via Google Meet, Zoom, or in-person in Multan.',
    category: 'Psychology'
  },
  {
    id: 'faq-3',
    question: 'How do I start a Web Development, SEO, or Marketing project with you?',
    answer: 'You can easily click the "Let’s Collaborate" or "Book Consultation" button, fill out the quick project brief, or message directly via WhatsApp. We will schedule a 20-minute discovery call to outline scope, timelines, deliverables, and customized pricing.',
    category: 'Digital Services'
  },
  {
    id: 'faq-4',
    question: 'Are sessions available for students and startups with special budgets?',
    answer: 'Yes! As a proud scholar at BZU, I offer subsidized consultation rates and student mentorship slots for university learners, emerging freelancers, and early-stage bootstrapped startups.',
    category: 'Pricing'
  },
  {
    id: 'faq-5',
    question: 'Can you work with international clients in different time zones?',
    answer: 'Absolutely. Over 60% of my consulting and digital projects are with international clients across the UK, USA, UAE, and Europe. All meetings and deliverables are smoothly coordinated through flexible online scheduling.',
    category: 'General'
  }
];

export const AUDIT_QUESTIONS: AuditQuestion[] = [
  {
    id: 1,
    question: 'What is your primary focus or challenge right now?',
    subtitle: 'Select the statement that best describes what you are looking to achieve.',
    options: [
      {
        label: 'Mental Clarity & Personal Growth',
        description: 'Managing stress, overcoming burnout, optimizing daily habits and emotional resilience.',
        recommendedService: 'psychology-consulting',
        points: { psychology: 3, web: 0, marketing: 0, ai: 0 }
      },
      {
        label: 'Building / Overhauling a Website or App',
        description: 'Need a fast, responsive, high-converting digital platform that builds instant trust.',
        recommendedService: 'web-development',
        points: { psychology: 1, web: 3, marketing: 1, ai: 0 }
      },
      {
        label: 'Scaling Traffic & Inbound Customers',
        description: 'Need strategic digital marketing, high-intent SEO, and psychological copywriting.',
        recommendedService: 'digital-marketing',
        points: { psychology: 1, web: 1, marketing: 3, ai: 1 }
      },
      {
        label: 'Automating Workflows with AI & Modern Tools',
        description: 'Looking to save time, automate repetitive tasks, and scale content generation.',
        recommendedService: 'ai-creation',
        points: { psychology: 0, web: 1, marketing: 1, ai: 3 }
      }
    ]
  },
  {
    id: 2,
    question: 'Who is the primary beneficiary of this initiative?',
    subtitle: 'This helps tailor the exact approach and communication style.',
    options: [
      {
        label: 'Myself (Individual / Student / Professional)',
        description: 'Personal growth, academic success, career clarity, or mental well-being.',
        recommendedService: 'psychology-consulting',
        points: { psychology: 3, web: 0, marketing: 0, ai: 0 }
      },
      {
        label: 'A Startup, Business, or E-Commerce Brand',
        description: 'Commercial objectives, conversion optimization, client acquisition, and branding.',
        recommendedService: 'web-development',
        points: { psychology: 0, web: 2, marketing: 3, ai: 2 }
      },
      {
        label: 'A Content Creator or Digital Agency',
        description: 'Audience building, organic SEO reach, and automated media production.',
        recommendedService: 'ai-creation',
        points: { psychology: 0, web: 1, marketing: 2, ai: 3 }
      }
    ]
  },
  {
    id: 3,
    question: 'What is your preferred project timeline or consultation pace?',
    subtitle: 'We accommodate both urgent sprint needs and long-term mentorship.',
    options: [
      {
        label: 'Immediate / Urgent (Next 1-7 days)',
        description: 'Ready to start right away with an intensive kick-off or urgent consultation.',
        recommendedService: 'psychology-consulting',
        points: { psychology: 2, web: 2, marketing: 2, ai: 2 }
      },
      {
        label: 'Standard Sprint (2-4 weeks)',
        description: 'Comprehensive design, development, strategy, and thorough execution.',
        recommendedService: 'web-development',
        points: { psychology: 1, web: 3, marketing: 3, ai: 2 }
      },
      {
        label: 'Ongoing Monthly Partnership',
        description: 'Continuous growth strategy, regular coaching check-ins, or SEO maintenance.',
        recommendedService: 'digital-marketing',
        points: { psychology: 2, web: 1, marketing: 3, ai: 2 }
      }
    ]
  }
];
