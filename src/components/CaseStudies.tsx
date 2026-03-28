'use client';

import { motion } from 'framer-motion';
import { caseStudiesData } from '@/lib/config';

export function CaseStudies() {
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-100 to-brand-300 bg-clip-text text-transparent">
            Real Results
          </h2>
          <p className="text-xl text-brand-300 max-w-2xl mx-auto">
            What happens when you deploy Opus alongside your team
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {caseStudiesData.map((study) => (
            <motion.div
              key={study.title}
              variants={itemVariants}
              className="bg-gradient-to-br from-brand-800 to-brand-900 border border-brand-700 rounded-lg p-8 hover:border-brand-500 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-brand-300 to-brand-100 bg-clip-text mb-3">
                {study.metric}
              </div>
              <h3 className="text-xl font-bold mb-3">{study.title}</h3>
              <p className="text-brand-300 mb-4">{study.description}</p>
              <p className="text-sm text-brand-400">{study.outcome}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
