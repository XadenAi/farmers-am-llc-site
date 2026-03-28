'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-100 to-brand-300 bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl text-brand-300">
              Building the future of development with AI
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-invert max-w-none mb-12"
          >
            <div className="space-y-8 text-brand-200">
              <div>
                <h2 className="text-3xl font-bold text-brand-100 mb-4">
                  Our Mission
                </h2>
                <p className="text-lg leading-relaxed">
                  We believe AI development isn't about replacing developers—it's about
                  amplifying them. We work with teams to integrate Claude Opus into their
                  workflows, creating feedback loops where humans and AI excel together.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-brand-100 mb-4">
                  Our Philosophy
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  Three core principles guide everything we do:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-400">Pragmatism:</span>
                    <span>We focus on measurable outcomes—faster iterations, higher quality code, happier developers.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-400">Depth:</span>
                    <span>We don't do surface-level consulting. We dive deep into your codebase, architecture, and processes.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-400">Partnership:</span>
                    <span>Your success is our success. We stick around to optimize, refine, and grow with you.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-brand-100 mb-4">
                  Why Claude Opus
                </h2>
                <p className="text-lg leading-relaxed">
                  Claude Opus 4.6 is the most capable model available for production systems. It handles
                  multi-file reasoning, maintains context across complex projects, and produces
                  production-grade code. We've seen it accelerate teams by 3-5x. That's not hype—that's
                  what our clients report.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-brand-100 mb-4">
                  Our Track Record
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                  <div className="bg-brand-800 rounded-lg p-6 text-center">
                    <p className="text-3xl font-bold text-brand-300 mb-2">4.2x</p>
                    <p className="text-sm text-brand-400">Faster fintech migrations</p>
                  </div>
                  <div className="bg-brand-800 rounded-lg p-6 text-center">
                    <p className="text-3xl font-bold text-brand-300 mb-2">3.9x</p>
                    <p className="text-sm text-brand-400">PR throughput scaling</p>
                  </div>
                  <div className="bg-brand-800 rounded-lg p-6 text-center">
                    <p className="text-3xl font-bold text-brand-300 mb-2">8→30</p>
                    <p className="text-sm text-brand-400">Engineers scaled</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
