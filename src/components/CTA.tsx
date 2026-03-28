'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-brand-700 to-brand-800 border border-brand-600 rounded-lg p-12 sm:p-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your Team?
          </h2>
          <p className="text-xl text-brand-200 mb-8 max-w-2xl mx-auto">
            Join fintech leaders, SaaS platforms, and agencies scaling with Claude Opus.
            We'll show you exactly how.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-brand-950 font-bold rounded-lg hover:bg-brand-50 transition-colors"
            >
              Schedule Your Consultation
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>

          <p className="mt-8 text-sm text-brand-300">
            Questions? Email us at contact@farmersamllc.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
