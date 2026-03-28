'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Your developers write code. Our agents ship products.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Animated text + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-brand-100 via-brand-200 to-brand-100 bg-clip-text text-transparent">
                  {displayedText}
                  <span className="animate-terminal-blink">_</span>
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-brand-300 leading-relaxed">
                Deploy Claude Opus alongside your team. 4.2x faster migrations.
                3.9x PR throughput. 8→30 engineers scaled.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 rounded-lg font-bold text-lg transition-all duration-200 text-center"
              >
                Schedule a Call
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-brand-600 hover:border-brand-500 rounded-lg font-bold text-lg transition-all duration-200 text-center"
              >
                Explore Services
              </Link>
            </div>

            <div className="pt-8 border-t border-brand-800">
              <p className="text-sm text-brand-400 mb-3">Trusted by:</p>
              <div className="flex flex-wrap gap-4 text-brand-300">
                <span>Fintech Leaders</span>
                <span>•</span>
                <span>SaaS Platforms</span>
                <span>•</span>
                <span>Development Agencies</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Terminal-style graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-brand-900 border border-brand-800 rounded-lg p-6 font-courier text-sm shadow-2xl">
              <div className="text-brand-500 mb-4">{'$ claude --agent production'}</div>
              <div className="space-y-2 text-brand-300">
                <div>Building multi-file architecture...</div>
                <div className="text-brand-400">✓ Codebase analysis complete</div>
                <div className="text-brand-400">✓ Agent patterns deployed</div>
                <div className="text-brand-400">✓ Team training scheduled</div>
                <div className="text-green-400 mt-4">Performance: 4.2x velocity gain</div>
                <div className="text-green-400">Status: Ready for production</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
