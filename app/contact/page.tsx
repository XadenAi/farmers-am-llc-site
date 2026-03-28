"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    acreage: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would call an API endpoint
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-brand-50 to-earth-50">
        <div className="container-max text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            Ready to maximize your agricultural investment? Let&apos;s start with
            a free consultation.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-brand-600 hover:text-brand-700"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-brand-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-brand-600 hover:text-brand-700"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Office</p>
                      <p className="text-gray-600">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-brand-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <p className="text-gray-600">
                        Monday – Friday: 8:00 AM – 6:00 PM
                      </p>
                      <p className="text-gray-600">
                        Saturday: 9:00 AM – 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-brand-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Thank you for reaching out. Our team will review your inquiry
                    and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Request a Free Consultation
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Total Acreage
                      </label>
                      <select
                        name="acreage"
                        value={formData.acreage}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                      >
                        <option value="">Select range</option>
                        <option value="under-100">Under 100 acres</option>
                        <option value="100-500">100 – 500 acres</option>
                        <option value="500-2000">500 – 2,000 acres</option>
                        <option value="2000-10000">2,000 – 10,000 acres</option>
                        <option value="10000+">10,000+ acres</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        How can we help? *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none"
                        placeholder="Tell us about your operation and what you're looking for..."
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
