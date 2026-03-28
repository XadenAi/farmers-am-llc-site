'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="border-t border-brand-800 bg-brand-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">Farmers & Mill</h3>
            <p className="text-sm text-brand-400">
              AI-powered development services for teams scaling with Claude Opus.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-brand-100">Services</h4>
            <ul className="space-y-2 text-sm text-brand-400">
              <li>
                <Link href="/services" className="hover:text-brand-100">
                  Cowork Implementation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-100">
                  Agent Architecture
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-100">
                  Team Training
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-100">
                  Codebase Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-brand-100">Company</h4>
            <ul className="space-y-2 text-sm text-brand-400">
              <li>
                <Link href="/about" className="hover:text-brand-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-100">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-brand-100">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-brand-100">Get in Touch</h4>
            <p className="text-sm text-brand-400 mb-3">
              contact@farmersamllc.com
            </p>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 bg-brand-700 hover:bg-brand-600 rounded text-sm font-semibold transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-brand-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-brand-500">
            <p>&copy; 2024 Farmers & Mill LLC. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-400">
                Twitter
              </a>
              <a href="#" className="hover:text-brand-400">
                LinkedIn
              </a>
              <a href="#" className="hover:text-brand-400">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
