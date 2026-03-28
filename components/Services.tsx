"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wheat,
  BarChart3,
  Shield,
  Droplets,
  Leaf,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Wheat,
    title: "Crop Management",
    description:
      "Precision planting, soil analysis, and harvest optimization to maximize yield per acre.",
  },
  {
    icon: BarChart3,
    title: "Financial Planning",
    description:
      "Budget modeling, investment analysis, and tax strategy tailored for agricultural operations.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Multi-layered protection covering weather, market volatility, and operational risks.",
  },
  {
    icon: Droplets,
    title: "Water & Irrigation",
    description:
      "Smart irrigation systems and water management that cut waste while boosting output.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Regenerative practices, carbon credit programs, and environmental certifications.",
  },
  {
    icon: TrendingUp,
    title: "Land Acquisition",
    description:
      "Expert guidance on farmland purchases, leasing strategy, and portfolio growth.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Full-spectrum agricultural management — from seed to sale, from
            strategy to stewardship.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="card card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mb-4 group-hover:bg-brand-200 transition-colors">
                <service.icon className="w-6 h-6 text-brand-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
