export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface WhyOpusItem {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  metric: string;
  title: string;
  description: string;
  outcome: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const servicesData: Service[] = [
  {
    title: 'Cowork Implementation',
    description: 'Deploy AI agents alongside your team with integrated workflows and training.',
    icon: '⚙️',
  },
  {
    title: 'Agent Architecture',
    description: 'Design production-grade autonomous systems with reliability patterns.',
    icon: '🏗️',
  },
  {
    title: 'Team Training',
    description: 'Upskill developers on prompt engineering and agent design.',
    icon: '📚',
  },
  {
    title: 'Codebase Audit',
    description: 'Deep analysis identifying AI leverage points and refactoring opportunities.',
    icon: '🔍',
  },
  {
    title: 'Continuous Optimization',
    description: 'Ongoing partnership monitoring performance and refining agent behaviors.',
    icon: '📈',
  },
];

export const whyOpusData: WhyOpusItem[] = [
  {
    title: 'Multi-File Reasoning',
    description: 'Navigate and reason across entire codebases. Handle complex, interconnected systems.',
    icon: '🧠',
  },
  {
    title: 'Production Grade',
    description: 'Deploy with confidence. Opus handles edge cases, error states, and real-world complexity.',
    icon: '🚀',
  },
  {
    title: '977k Context',
    description: 'Process massive codebases, documentation, and context in a single turn.',
    icon: '📖',
  },
  {
    title: 'Autonomous Execution',
    description: 'Opus makes decisions independently. Less hand-holding, more shipping.',
    icon: '⚡',
  },
];

export const caseStudiesData: CaseStudy[] = [
  {
    metric: '4.2x',
    title: 'Fintech Migration',
    description: 'Legacy system modernization with AI-powered refactoring and validation.',
    outcome: 'Reduced migration timeline from 12 months to 3 months.',
  },
  {
    metric: '3.9x',
    title: 'SaaS Velocity',
    description: 'AI-assisted feature development and PR review automation.',
    outcome: 'PR throughput increased 3.9x. Reduced review time from 2 days to 2 hours.',
  },
  {
    metric: '8→30',
    title: 'Agency Scale',
    description: 'Small agency using Opus to handle 30-person workload with 8 people.',
    outcome: 'Scaled team 4x without proportional hiring. Margin improvement: 250%.',
  },
];

export const testimonialsData: Testimonial[] = [
  {
    quote:
      'Claude Opus changed how we approach development. What used to take a week now takes a day. The quality is production-ready.',
    author: 'Sarah Chen',
    role: 'VP Engineering, FinFlow',
  },
  {
    quote:
      'Farms & Mill helped us design agent architectures that actually work at scale. Three months in and our velocity is unrecognizable.',
    author: 'Marcus Johnson',
    role: 'CTO, DataCore',
  },
  {
    quote:
      'The training was invaluable. Our team went from skeptical to fluent in multi-file reasoning. This is the future of development.',
    author: 'Elena Rodriguez',
    role: 'Engineering Lead, CloudScale',
  },
];

export const faqData: FAQItem[] = [
  {
    question: 'How long before we see results?',
    answer:
      'Most teams see measurable improvements within 2-4 weeks of implementation. We focus on quick wins first—often in PR review, refactoring, or documentation generation—then expand to architecture and complex reasoning.',
  },
  {
    question: 'Do we need to replace existing tools?',
    answer:
      'No. Opus integrates into your existing workflow—GitHub, VSCode, your CI/CD pipeline. We map AI into your current process rather than ask you to change everything.',
  },
  {
    question: 'What if our team is not technical enough?',
    answer:
      'Training is part of every engagement. We design hands-on workshops tailored to your team\'s skill level. Even junior developers become proficient with Opus within a few hours.',
  },
  {
    question: 'How much does this cost?',
    answer:
      'Pricing depends on scope—Cowork Implementation typically ranges $25k-$75k; ongoing optimization is $5k-$15k/month. We provide a custom quote after understanding your specific needs.',
  },
  {
    question: 'Can you work with our existing AI vendor?',
    answer:
      'We specialize in Claude Opus because of its production-grade capabilities. That said, we can audit your current setup and identify integration opportunities.',
  },
  {
    question: 'What about security and IP?',
    answer:
      'Your code never leaves your infrastructure. We work within your security model—whether that\'s on-prem, private cloud, or managed deployment. IP ownership is 100% yours.',
  },
];
