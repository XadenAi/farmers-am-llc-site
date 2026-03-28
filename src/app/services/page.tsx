'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Cowork Implementation',
    description:
      'Deploy AI agents alongside your team. We set up Claude Opus workflows, establish coding patterns, integrate with your stack, and train developers to leverage AI for 3-5x velocity gains.',
    features: [
      'Agent workflow design',
      'Multi-file reasoning setup',
      'Codebase integration',
      'Team onboarding',
      'Performance benchmarking',
    ],
  },
  {
    title: 'Agent Architecture',
    description:
      'Design production-grade autonomous systems. From agentic loops to memory management, tool integration to reliability patterns—we architect systems that scale.',
    features: [
      'System design consultation',
      'Reliability patterns',
      'Tool integration strategy',
      'Memory & context optimization',
      'Deployment architecture',
    ],
  },
  {
    title: 'Team Training',
    description:
      'Upskill your developers for the AI era. Hands-on workshops on prompt engineering, multi-file reasoning, agent design, and building with Claude Opus.',
    features: [
      'Prompt engineering mastery',
      'Multi-file reasoning',
      'Agent design patterns',
      'Production best practices',
      'Custom workshop design',
    ],
  },
  {
    title: 'Codebase Audit',
    description:
      'Deep analysis of your codebase. We identify AI leverage points, refactoring opportunities, architectural debt, and create a roadmap for AI-powered transformation.',
    features: [
      'Code quality analysis',
      'AI leverage mapping',
      'Refactoring roadmap',
      'Risk assessment',
      'Optimization recommendations',
    ],
  },
  {
    title: 'Continuous Optimization',
    description:
      'Ongoing partnership. We monitor performance, refine agent behaviors, adapt to your evolving needs, and continuously push your AI ROI.',
    features: [
      'Performance monitoring',
      'Agent tuning',
      'Process optimization',
      'Quarterly reviews',
      'Growth strategy',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-100 to-brand-300 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-brand-300 max-w-2xl mx-auto">
              Five ways we transform development teams with Claude Opus
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-brand-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-brand-200"
                      >
                        <span className="w-2 h-2 bg-brand-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 h-64 bg-gradient-to-br from-brand-800 to-brand-900 rounded-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
