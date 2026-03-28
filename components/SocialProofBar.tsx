"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50K+", label: "Acres Under Management" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "23%", label: "Avg. Yield Improvement" },
  { value: "$2.1B", label: "Assets Managed" },
];

export default function SocialProofBar() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
