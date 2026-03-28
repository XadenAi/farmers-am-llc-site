"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-earth-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-sm font-medium mb-6 border border-brand-500/30">
              Premium Agricultural Asset Management
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Your Land.{" "}
            <span className="text-brand-400">Our Expertise.</span>{" "}
            Maximum Yield.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
          >
            Farmers & Mill LLC transforms agricultural holdings into
            high-performing assets. Data-driven crop management, strategic
            planning, and hands-on stewardship — all under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
            >
              <Play className="w-5 h-5 mr-2" />
              See Our Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
