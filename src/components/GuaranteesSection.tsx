"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Smartphone, ShieldCheck, Video, CheckCircle2, Lock } from "lucide-react";

export default function GuaranteesSection() {
  const guarantees = [
    {
      icon: Zap,
      title: "95+ Lighthouse Speed Guarantee",
      description:
        "Every page is engineered for instant load times, optimized assets, and top-tier Google Core Web Vitals ranking.",
      color: "bg-amber-50 text-amber-600 border-amber-200",
      highlight: "Guaranteed Performance",
    },
    {
      icon: Smartphone,
      title: "100% Responsive Across All Devices",
      description:
        "Tested across mobile, tablet, laptop, and ultra-wide screens to ensure flawless typography, touch targets, and layout.",
      color: "bg-blue-50 text-blue-600 border-blue-200",
      highlight: "Pixel-Perfect Layouts",
    },
    {
      icon: ShieldCheck,
      title: "14 Days of Post-Launch Support",
      description:
        "Zero risk. Includes 14 days of complimentary post-launch adjustments, bug fixes, and deployment assistance.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      highlight: "Zero Risk Guarantee",
    },
    {
      icon: Video,
      title: "Milestone Delivery & Loom Updates",
      description:
        "Frequent video walkthroughs and staging links at every key milestone so you never have to guess project progress.",
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
      highlight: "Full Transparency",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Lock className="w-3.5 h-3.5" />
            Client Confidence Guarantees
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built On Transparency, Speed & Zero Risk
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Why founders, consultants, and companies trust me to build their web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-3xl p-7 sm:p-8 border border-slate-200 hover:border-slate-300 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Standard on all client contracts</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
