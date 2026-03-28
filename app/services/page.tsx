"use client";

import { motion } from "framer-motion";
import {
  Wheat,
  BarChart3,
  Shield,
  Droplets,
  Leaf,
  TrendingUp,
  Users,
  FileText,
} from "lucide-react";
import CTA from "@/components/CTA";

const services = [
  {
    icon: Wheat,
    title: "Crop Management",
    description:
      "End-to-end crop planning, planting optimization, and harvest management using data-driven insights to maximize yield per acre.",
    features: [
      "Precision planting schedules",
      "Soil health monitoring",
      "Yield forecasting & optimization",
      "Crop rotation planning",
    ],
  },
  {
    icon: BarChart3,
    title: "Financial Planning",
    description:
      "Comprehensive financial modeling, budgeting, and investment analysis tailored for agricultural operations of any scale.",
    features: [
      "Operating budget development",
      "Capital expenditure planning",
      "ROI analysis & projections",
      "Tax strategy optimization",
    ],
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Protect your investment with multi-layered risk mitigation strategies covering weather, market, and operational risks.",
    features: [
      "Crop insurance optimization",
      "Market hedging strategies",
      "Disaster recovery planning",
      "Compliance & regulatory guidance",
    ],
  },
  {
    icon: Droplets,
    title: "Water & Irrigation",
    description:
      "Smart irrigation design and water management systems that reduce waste while improving crop health and output.",
    features: [
      "Irrigation system design",
      "Water usage analytics",
      "Drought mitigation plans",
      "Sustainable sourcing",
    ],
  },
  {
    icon: Leaf,
    title: "Sustainability Programs",
    description:
      "Implement regenerative agriculture practices that improve soil health, reduce costs, and qualify for green incentives.",
    features: [
      "Carbon credit programs",
      "Regenerative practice adoption",
      "Environmental compliance",
      "Sustainability certifications",
    ],
  },
  {
    icon: TrendingUp,
    title: "Land Acquisition & Leasing",
    description:
      "Expert guidance on farmland acquisition, leasing strategies, and portfolio expansion with thorough due diligence.",
    features: [
      "Market analysis & valuations",
      "Lease negotiation",
      "Due diligence audits",
      "Portfolio diversification",
    ],
  },
  {
    icon: Users,
    title: "Operations Consulting",
    description:
      "Streamline your farm operations with expert consulting on workforce, equipment, logistics, and technology adoption.",
    features: [
      "Workflow optimization",
      "Equipment fleet management",
      "Technology integration",
      "Labor planning & training",
    ],
  },
  {
    icon: FileText,
    title: "Regulatory & Compliance",
    description:
      "Navigate complex agricultural regulations with confidence. We handle compliance so you can focus on farming.",
    features: [
      "USDA program enrollment",
      "Environmental compliance",
      "Safety & labor regulations",
      "Grant & subsidy applications",
    ],
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

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-brand-50 to-earth-50">
        <div className="container-max text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Comprehensive agricultural asset management solutions designed to
            protect your investment, optimize operations, and drive sustainable
            growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="card card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
