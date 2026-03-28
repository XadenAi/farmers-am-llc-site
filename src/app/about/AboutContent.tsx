"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const values = [
  {
    title: "Velocity Over Volume",
    description:
      "We don't measure success in lines of code or hours billed. We measure it in shipped features, production stability, and time-to-market compression. Every engagement is designed to accelerate outcomes, not accumulate effort.",
  },
  {
    title: "Agents Amplify, Never Replace",
    description:
      "The best software is built by humans who make great decisions, augmented by agents that execute at machine speed. We're not here to automate your team away — we're here to make each engineer worth three.",
  },
  {
    title: "Production or Nothing",
    description:
      "Demos don't ship. Prototypes don't generate revenue. Every line of agent-generated code meets the same bar as your best senior engineer's work: type-safe, tested, reviewed, and ready to deploy.",
  },
  {
    title: "Radical Transparency",
    description:
      "No black boxes. You see exactly what the agents do, how they reason, and what they produce. We build trust through visibility — full audit trails, explainable decisions, and open process documentation.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Founded",
    description:
      "Started with a simple observation: the best engineering teams were already using AI, but badly. We saw the gap between what was possible and what was happening.",
  },
  {
    year: "2024",
    title: "First 10 Clients",
    description:
      "Proved the model with 10 early-adopter engineering teams. Average 3.2x velocity improvement in the first month. Zero clients churned.",
  },
  {
    year: "2025",
    title: "Opus 4.6 Partnership",
    description:
      "Became one of the first consultancies to build production workflows around Claude Opus 4.6's multi-file reasoning capabilities. Game-changing for codebase-scale agent operations.",
  },
  {
    year: "2026",
    title: "40+ Teams Transformed",
    description:
      "Scaled to serve engineering organizations from 5-person startups to 200-person enterprises. $2.4M+ in documented client cost savings.",
  },
];

export function AboutContent() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              The future of engineering is{" "}
              <span className="gradient-text">human-agent hybrid</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-surface-200/70">
              Farmers & Mill was founded on a conviction: the best engineering
              teams of the next decade won&apos;t be the biggest — they&apos;ll
              be the ones that figured out human-AI collaboration first. We help
              you be that team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface-900/30">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What we <span className="gradient-text">believe</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-surface-700/50 bg-surface-800/50 p-8"
              >
                <h3 className="text-xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-surface-200/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our <span className="gradient-text">journey</span>
            </h2>
          </motion.div>

          <div className="mx-auto max-w-2xl">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative border-l-2 border-surface-700/50 pb-12 pl-8 last:pb-0"
              >
                {/* Dot */}
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-brand-500 bg-surface-950" />

                <span className="inline-block rounded-full bg-brand-600/10 px-3 py-1 text-xs font-medium text-brand-400">
                  {item.year}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-surface-200/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="section-padding bg-surface-900/30">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Small team, <span className="gradient-text">massive output</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-surface-200/70">
              We practice what we preach. Our consultancy runs lean —
              senior engineers augmented by the same AI agent workflows we deploy
              for clients. Every consultant has deep production experience with
              agentic development, not theoretical knowledge.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-surface-200/70">
              When you work with Farmers & Mill, you work with people who ship
              with agents every single day. No theory. No slides. Just battle-tested
              expertise from the frontier of human-AI engineering.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-block rounded-lg bg-brand-600 px-8 py-4 font-medium text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-600/25"
            >
              Work With Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
