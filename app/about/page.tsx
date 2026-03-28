"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import CTA from "@/components/CTA";

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every decision is data-driven. We measure twice, cut once, and never leave yield on the table.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Full visibility into every operation, every dollar, every decision. Your farm, your data, your control.",
  },
  {
    icon: Heart,
    title: "Stewardship",
    description:
      "We treat your land like it's our own. Sustainable practices that build long-term value for generations.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We don't settle for average. Every farm we manage outperforms regional benchmarks.",
  },
];

const stats = [
  { value: "50K+", label: "Acres Managed" },
  { value: "98%", label: "Client Retention" },
  { value: "23%", label: "Avg. Yield Increase" },
  { value: "15+", label: "Years Experience" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-brand-50 to-earth-50">
        <div className="container-max text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Farmers & Mill</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Born from the soil, built for the future. We combine generations of
            farming wisdom with modern technology to deliver results that
            redefine what&apos;s possible in agriculture.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Farmers & Mill LLC was founded on a simple premise: agricultural
                land is one of the most valuable and overlooked asset classes in
                America. Too many landowners leave yield — and wealth — on the
                table because they lack the operational expertise, technology, or
                time to manage their holdings effectively.
              </p>
              <p>
                Our founding team brought together decades of experience spanning
                commercial agriculture, financial asset management, and
                agricultural technology. We saw an opportunity to bridge the gap
                between Wall Street sophistication and Main Street farming —
                bringing institutional-grade management to operations of every
                size.
              </p>
              <p>
                Today, we manage over 50,000 acres across multiple states,
                serving everyone from family farms to institutional investors. Our
                approach is always the same: treat every acre like it matters,
                because it does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide every decision we make and every acre we
              manage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card card-hover text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-brand-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
