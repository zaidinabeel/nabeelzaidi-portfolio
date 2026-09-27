"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Check, Copy, Clock, Globe2, Sparkles, Phone, MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Portfolio Website",
    budget: "$1,000 - $3,000",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `Project Inquiry: ${formData.projectType} from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget Range: ${formData.budget}\n\nProject Overview:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card rounded-3xl p-6 sm:p-10 lg:p-14 border border-slate-200 shadow-xl relative overflow-hidden bg-white"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-blue-500/5 rounded-full blur-[90px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
            {/* Left Column: Direct Info & Value */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Start a Conversation
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Have a portfolio or web project in mind?
                </h2>

                <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Whether you need a custom portfolio website, a high-converting landing page, or a full-stack web application, I am available to bring your vision into reality with enterprise-grade precision.
                </p>

                {/* Quick Info Badges */}
                <div className="mt-6 sm:mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Typical Response Time: <strong>Within 4 hours</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <Globe2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Location: <strong>Navi Mumbai • Global Remote Overlap</strong></span>
                  </div>
                </div>
              </div>

              {/* Direct Contact Cards */}
              <div className="mt-8 space-y-3">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3 truncate w-full sm:w-auto">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Direct Email</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyEmail}
                    className="w-full sm:w-auto px-3.5 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs flex items-center justify-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </motion.button>
                </div>

                <a
                  href={`https://wa.me/919125023199?text=${encodeURIComponent("Hi Nabeel, I would like to discuss a portfolio/web project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-emerald-50/70 hover:bg-emerald-50 rounded-2xl border border-emerald-200/80 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-emerald-950">Chat via WhatsApp</p>
                      <p className="text-[10px] text-emerald-700">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
                    Message →
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Inquiry Form */}
            <div className="lg:col-span-7 bg-slate-50/70 p-5 sm:p-8 rounded-2xl border border-slate-200">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">Project Inquiry</h3>
              <p className="text-xs text-slate-500 mb-5 sm:mb-6">
                Fill in the details below to receive a project estimate and delivery roadmap.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm sm:text-xs text-slate-900 focus:outline-none focus:border-blue-600 transition-colors shadow-xs"
                    >
                      <option value="Portfolio Website">Portfolio / Personal Brand Website</option>
                      <option value="Landing Page & Redesign">Landing Page & Redesign</option>
                      <option value="Full-Stack Web App">Full-Stack Web Application</option>
                      <option value="SaaS / CRM Dashboard">SaaS / CRM Dashboard</option>
                      <option value="Other">Other Custom Development</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm sm:text-xs text-slate-900 focus:outline-none focus:border-blue-600 transition-colors shadow-xs"
                    >
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                      <option value="$5,000+">$5,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Project Overview & Goals
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your site requirements, timeline, inspiration references, or key features..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors resize-none shadow-xs"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry & Start Conversation</span>
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
