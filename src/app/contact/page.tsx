'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { submitContactForm } from '@/lib/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const result = await submitContactForm(formData);
      if (result.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setError('Failed to submit form. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-100 to-brand-300 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-brand-300">
              Ready to transform your development workflow? Let's talk.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-brand-900 rounded-lg p-8 border border-brand-800"
          >
            {status === 'success' && (
              <div className="p-4 bg-green-900 border border-green-700 rounded-lg text-green-100">
                ✓ Message sent! We'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-900 border border-red-700 rounded-lg text-red-100">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-brand-200 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-brand-800 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-brand-200 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-brand-800 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-brand-200 mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-brand-800 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
                placeholder="Your company"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-brand-200 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 bg-brand-800 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-200"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
