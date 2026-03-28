"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "@/lib/api";
import { siteConfig } from "@/lib/config";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("success");
      setFormData(initialFormData);
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong.");
    }
  };

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-width">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Let&apos;s <span className="gradient-text">talk</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-surface-200/70">
                Book a free 30-minute strategy call. We&apos;ll analyze your
                current engineering workflow and show you exactly where AI agents
                will have the biggest impact — no commitment, no sales pitch.
              </p>

              <div className="mt-12 space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-600/10 text-brand-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 text-surface-200/70 transition-colors hover:text-brand-400"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-600/10 text-brand-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Response Time</h3>
                    <p className="mt-1 text-surface-200/70">
                      We respond to every inquiry within 24 hours.
                    </p>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-600/10 text-brand-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">What to Expect</h3>
                    <p className="mt-1 text-surface-200/70">
                      A technical conversation about your codebase, not a sales
                      pitch. We&apos;ll identify the highest-leverage
                      opportunities for agent integration.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {status === "success" ? (
                <div className="flex h-full items-center justify-center rounded-xl border border-green-500/30 bg-green-950/20 p-12 text-center">
                  <div>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                      <svg
                        className="h-8 w-8 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Message sent!
                    </h3>
                    <p className="mt-3 text-surface-200/70">
                      We&apos;ll get back to you within 24 hours. Looking
                      forward to the conversation.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 text-sm text-brand-400 transition-colors hover:text-brand-300"
                      type="button"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-xl border border-surface-700/50 bg-surface-800/50 p-8 backdrop-blur-sm"
                >
                  <div className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-surface-200"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-surface-700 bg-surface-900/50 px-4 py-3 text-white placeholder-surface-200/40 transition-colors focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                        placeholder="Jane Smith"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-surface-200"
                      >
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-surface-700 bg-surface-900/50 px-4 py-3 text-white placeholder-surface-200/40 transition-colors focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                        placeholder="jane@company.com"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-medium text-surface-200"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-surface-700 bg-surface-900/50 px-4 py-3 text-white placeholder-surface-200/40 transition-colors focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                        placeholder="Acme Corp"
                      />
                    </div>

                    {/* Service Interest */}
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-surface-200"
                      >
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-surface-700 bg-surface-900/50 px-4 py-3 text-white transition-colors focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {siteConfig.services.map((s) => (
                          <option key={s.title} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-surface-200"
                      >
                        Tell us about your project
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full resize-none rounded-lg border border-surface-700 bg-surface-900/50 px-4 py-3 text-white placeholder-surface-200/40 transition-colors focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                        placeholder="Tell us about your team size, tech stack, and what you're hoping to achieve..."
                      />
                    </div>

                    {/* Error */}
                    {status === "error" && (
                      <div className="rounded-lg border border-red-500/30 bg-red-950/20 p-4 text-sm text-red-400">
                        {errorMessage}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full rounded-lg bg-brand-600 px-8 py-4 font-medium text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-600/25 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {status === "submitting"
                        ? "Sending..."
                        : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
