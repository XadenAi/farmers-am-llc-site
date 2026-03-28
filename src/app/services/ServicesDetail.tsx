"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export function ServicesDetail() {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="section-padding pb-0">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="mt-6 text-lg text-surface-200/70">
              Every service is designed to integrate seamlessly with your
              existing engineering workflow. No disruption — just amplification.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {siteConfig.services.map((service, index) => (
        <section
          key={service.title}
          className={`section-padding ${
            index % 2 === 1 ? "bg-surface-900/30" : ""
          }`}
        >
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid items-start gap-12 lg:grid-cols-2"
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-700/50 bg-brand-950/50 px-4 py-1.5 text-sm text-brand-300">
                  0{index + 1}
                </div>
                <h2 className="mt-4 text-3xl font-bold text-white">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-surface-200/70">
                  {service.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-brand-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-surface-200/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Card */}
              <div
                className={`rounded-xl border border-surface-700/50 bg-surface-800/30 p-8 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="h-3 w-3/4 rounded bg-surface-700/50" />
                  <div className="h-3 w-1/2 rounded bg-surface-700/50" />
                  <div className="h-3 w-5/6 rounded bg-surface-700/50" />
                  <div className="mt-6 rounded-lg border border-brand-700/30 bg-brand-950/20 p-4">
                    <div className="font-mono text-sm text-brand-400">
                      $ opus-agent --mode {service.title.toLowerCase().replace(/\s+/g, "-")}
                    </div>
                    <div className="mt-2 font-mono text-xs text-surface-200/50">
                      ✓ Analyzing your codebase...
                      <br />✓ Agent deployed and active
                      <br />✓ First results in &lt;24 hours
                    </div>
                  </div>
                  <div className="h-3 w-2/3 rounded bg-surface-700/50" />
                  <div className="h-3 w-1/3 rounded bg-surface-700/50" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="section-padding">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold text-white">
              Not sure which service fits?
            </h2>
            <p className="mt-4 text-lg text-surface-200/70">
              Book a free strategy call and we&apos;ll map out the highest-impact
              starting point for your team.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-brand-600 px-8 py-4 font-medium text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-600/25"
            >
              Book a Strategy Call
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
