'use client';

import { motion } from 'framer-motion';
import { whyOpusData } from '@/lib/config';

export function WhyOpus() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-100 to-brand-300 bg-clip-text text-transparent">
            Why Claude Opus 4.6
          </h2>
          <p className="text-xl text-brand-300 max-w-2xl mx-auto">
            The most capable model for production systems. Here's why it transforms teams.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {whyOpusData.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <div className="mb-4 text-4xl">{item.icon}</div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-brand-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-r from-brand-800 to-brand-900 border border-brand-700 rounded-lg text-center"
        >
          <p className="text-lg text-brand-200 mb-2">
            "We've seen Opus accelerate teams by 3-5x in production environments."
          </p>
          <p className="text-sm text-brand-400">— Our 18-month track record</p>
        </motion.div>
      </div>
    </section>
  );
}
