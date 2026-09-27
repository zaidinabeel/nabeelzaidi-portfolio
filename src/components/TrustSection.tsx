"use client";

import { motion } from "framer-motion";
import { Building2, Award, Trophy, ShieldCheck } from "lucide-react";

export default function TrustSection() {
  const credentials = [
    {
      icon: Building2,
      label: "Enterprise Experience",
      value: "Jio Platforms Limited",
      detail: "Building high-reliability data & platform architecture",
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: Trophy,
      label: "Problem Solving",
      value: "3rd Rank — Code Chanakya",
      detail: "Recognized in algorithmic speed & coding precision",
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      icon: Award,
      label: "Innovation Recognition",
      value: "Top 10 — IBM SkillsBuild",
      detail: "Entrepreneurship & digital innovation finalist",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <motion.div
                key={cred.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${cred.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {cred.label}
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    {cred.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    {cred.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
