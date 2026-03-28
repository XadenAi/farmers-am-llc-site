"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Data-Driven Decisions",
    description:
      "Every recommendation is backed by real-time data, satellite imagery, soil sensors, and market analytics. No guesswork.",
  },
  {
    title: "Boots on the Ground",
    description:
      "Technology is only as good as the team using it. Our agronomists and farm managers are in the field, not behind a desk.",
  },
  {
    title: "Institutional Quality, Personal Touch",
    description:
      "We bring Wall Street-grade asset management to Main Street farming — with the personal attention your operation deserves.",
  },
  {
    title: "Full Lifecycle Management",
    description:
      "From acquisition through operations to exit strategy, we manage every phase of the agricultural investment lifecycle.",
  },
  {
    title: "Proven Track Record",
    description:
      "98% client retention, 23% average yield improvement, and over 50,000 acres managed successfully across multiple states.",
  },
  {
    title: "Sustainability First",
    description:
      "Our practices improve soil health, reduce chemical usage, and qualify for carbon credit programs — building long-term land value.",
  },
];

export default function WhyOpus() {
  return (
    <section className="section-padding bg-brand-950 text-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              Why Choose{" "}
              <span className="text-brand-400">Farmers & Mill?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Most agricultural managers offer one thing well. We offer
              everything — and do it better. Here&apos;s what sets us apart from
              the rest.
            </motion.p>
          </div>

          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-brand-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{reason.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
