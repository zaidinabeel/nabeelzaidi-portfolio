"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Globe2,
  Clock,
  Code2,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function BentoGrid() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Engineering & Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed For Speed, Scale & High Conversion
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Combining enterprise-grade frontend architecture with conversion-focused visual polish.
          </p>
        </motion.div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* Bento Item 1: 99/100 Lighthouse Performance Gauge (Spans 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="md:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 shadow-xs hover:shadow-xl transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Google Verified Speed
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Ultra-Fast Performance & Core Web Vitals
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Every website is optimized for instantaneous loading, zero layout shifts, and top Google SEO ranking.
              </p>
            </div>

            {/* Live Metrics Showcase */}
            <div className="mt-6 grid grid-cols-3 gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-black text-emerald-600">99</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  Lighthouse Score
                </p>
              </div>
              <div className="text-center border-x border-slate-100">
                <p className="text-2xl sm:text-3xl font-black text-blue-600">&lt; 0.8s</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  Page Load Time
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-black text-indigo-600">100%</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  Mobile UX Score
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 2: Global Timezone & Communication (Spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="md:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between bg-gradient-to-br from-white to-indigo-50/20 shadow-xs hover:shadow-xl transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Global Timezone Overlap
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Seamless daily communication across US Eastern, Pacific, European, and Asian business hours.
              </p>
            </div>

            <div className="mt-6 p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  Live Sync
                </span>
                <span className="text-emerald-400 font-mono font-bold">{currentTime || "Active"}</span>
              </div>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-300">
                <span>US (EST / PST)</span>
                <span className="text-emerald-400 font-semibold">4–6h Overlap</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 3: Modern Tech Stack (Spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="md:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between bg-white shadow-xs hover:shadow-xl transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 border border-indigo-100">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Modern Web Stack
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Built with industry-standard frameworks for maximum reliability, accessibility, and speed.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "REST APIs", "Vercel"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Bento Item 4: Clean Architecture & Motion (Spans 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="md:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between bg-gradient-to-br from-white via-slate-50/40 to-indigo-50/30 shadow-xs hover:shadow-xl transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 border border-purple-100">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Component Architecture & Fluid Motion
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Clean, modular TypeScript code with subtle micro-interactions that elevate your brand without slowing down the user experience.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-semibold">Type-Safe Component System</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span className="font-semibold">Hardware-Accelerated Motion</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">Automated SEO & Social Graph</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span className="font-semibold">Zero Layout Shift (CLS 0.0)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
