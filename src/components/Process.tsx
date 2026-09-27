"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { PROCESS_STEPS } from "@/data/portfolioData";

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 relative bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            Clear & Structured Delivery
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How I Collaborate With Clients
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Transparent communication, rapid milestone delivery, and zero guesswork.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 border border-slate-200 hover:border-slate-300 relative shadow-xs hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl sm:text-3xl font-black text-slate-300 mb-3 font-mono">
                {step.step}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">{step.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
