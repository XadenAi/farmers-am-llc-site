'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '@/lib/config';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-100 to-brand-300 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-xl text-brand-300">
            Heard from teams we've worked with
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-brand-800 to-brand-900 border border-brand-700 rounded-lg p-12 text-center"
            >
              <p className="text-xl text-brand-200 mb-6 leading-relaxed">
                "{testimonialsData[currentIndex].quote}"
              </p>
              <div>
                <p className="font-bold text-brand-100">
                  {testimonialsData[currentIndex].author}
                </p>
                <p className="text-sm text-brand-400">
                  {testimonialsData[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="px-6 py-2 bg-brand-700 hover:bg-brand-600 rounded-lg font-semibold transition-colors"
            >
              ← Prev
            </button>
            <div className="flex gap-2 items-center">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-brand-400 w-8' : 'bg-brand-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="px-6 py-2 bg-brand-700 hover:bg-brand-600 rounded-lg font-semibold transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
