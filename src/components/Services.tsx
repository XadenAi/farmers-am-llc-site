'use client';

import { motion } from 'framer-motion';
import { servicesData } from '@/lib/config';

export function Services() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
            Five Services, One Goal
          </h2>
          <p className="text-xl text-brand-300 max-w-2xl mx-auto">
            Everything you need to deploy AI agents and scale your team
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-gradient-to-br from-brand-800 to-brand-900 border border-brand-700 hover:border-brand-500 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-brand-600/20"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-brand-100 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-brand-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
