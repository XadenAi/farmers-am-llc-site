"use client";

import { motion } from "framer-motion";
import { TrendingUp, Droplets, DollarSign } from "lucide-react";

const cases = [
  {
    icon: TrendingUp,
    region: "Central Valley, CA",
    title: "2,400-Acre Row Crop Operation",
    challenge:
      "Declining yields and rising input costs threatening profitability on a multi-generational family farm.",
    result:
      "31% yield increase in Year 1. Reduced input costs by 18% through precision agriculture adoption. ROI positive within 8 months.",
    metrics: [
      { label: "Yield Increase", value: "+31%" },
      { label: "Cost Reduction", value: "-18%" },
      { label: "Time to ROI", value: "8 mo" },
    ],
  },
  {
    icon: Droplets,
    region: "Midwest",
    title: "8,000-Acre Institutional Portfolio",
    challenge:
      "Institutional investor needed professional management for a newly acquired multi-state farmland portfolio.",
    result:
      "Achieved 12% annual returns through optimized crop rotation, tenant management, and capital improvement programs.",
    metrics: [
      { label: "Annual Return", value: "12%" },
      { label: "Acres Managed", value: "8,000" },
      { label: "States", value: "3" },
    ],
  },
  {
    icon: DollarSign,
    region: "Pacific Northwest",
    title: "Specialty Crop Transition",
    challenge:
      "Traditional wheat farm looking to transition to higher-value specialty crops without disrupting cash flow.",
    result:
      "Phased transition plan that maintained income during changeover and increased per-acre revenue by 47% within 2 years.",
    metrics: [
      { label: "Revenue Increase", value: "+47%" },
      { label: "Transition Time", value: "2 yrs" },
      { label: "Downtime", value: "Zero" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function CaseStudies() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Real <span className="gradient-text">Results</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See how we&apos;ve transformed operations and delivered measurable
            returns for our clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="card card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-brand-700" />
                </div>
                <span className="text-sm font-medium text-brand-600">
                  {item.region}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                <strong className="text-gray-700">Challenge:</strong>{" "}
                {item.challenge}
              </p>
              <p className="text-gray-600 text-sm mb-6">
                <strong className="text-gray-700">Result:</strong> {item.result}
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                {item.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-lg font-bold gradient-text">
                      {m.value}
                    </div>
                    <div className="text-xs text-gray-500">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
