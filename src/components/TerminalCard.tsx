"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Copy, Check, Sparkles, ChevronRight, Play } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function TerminalCard() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"quick" | "stack" | "contact">("quick");

  const terminalCommand = "npx nabeel-zaidi";

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full max-w-2xl mx-auto mt-8 sm:mt-10 rounded-2xl bg-slate-900 text-slate-100 shadow-2xl border border-slate-800 overflow-hidden text-left font-mono"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-[11px] text-slate-400 font-medium ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            nabeel@dev-terminal:~
          </span>
        </div>

        {/* Tab triggers */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("quick")}
            className={`px-2.5 py-1 text-[10px] rounded-md transition-colors cursor-pointer ${
              activeTab === "quick" ? "bg-blue-600/30 text-blue-400 border border-blue-500/30" : "text-slate-400 hover:text-white"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("stack")}
            className={`px-2.5 py-1 text-[10px] rounded-md transition-colors cursor-pointer ${
              activeTab === "stack" ? "bg-blue-600/30 text-blue-400 border border-blue-500/30" : "text-slate-400 hover:text-white"
            }`}
          >
            Stack
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-2.5 py-1 text-[10px] rounded-md transition-colors cursor-pointer ${
              activeTab === "contact" ? "bg-blue-600/30 text-blue-400 border border-blue-500/30" : "text-slate-400 hover:text-white"
            }`}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed">
        {/* Command line prompt with copy button */}
        <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 mb-4">
          <div className="flex items-center gap-2 truncate">
            <span className="text-emerald-400 font-bold">$</span>
            <span className="text-cyan-300 font-semibold">{terminalCommand}</span>
            <span className="w-2 h-4 bg-cyan-400 animate-pulse" />
          </div>

          <button
            onClick={handleCopy}
            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
            title="Copy command"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-slate-400" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Tab Dynamic Views */}
        <AnimatePresence mode="wait">
          {activeTab === "quick" && (
            <motion.div
              key="quick"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-1.5 text-slate-300"
            >
              <p className="text-slate-400">
                <span className="text-blue-400 font-bold">const</span> developer = &#123;
              </p>
              <p className="pl-4">
                <span className="text-purple-400">name:</span> <span className="text-amber-300">&quot;Nabeel Zaidi&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-purple-400">role:</span> <span className="text-amber-300">&quot;Full-Stack Web Developer & UI Engineer&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-purple-400">speciality:</span> <span className="text-amber-300">&quot;High-Converting Portfolio Websites & Web Apps&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-purple-400">status:</span> <span className="text-emerald-400 font-semibold">&quot;Available for New Client Projects&quot;</span>
              </p>
              <p className="text-slate-400">&#125;;</p>
            </motion.div>
          )}

          {activeTab === "stack" && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-1.5 text-slate-300"
            >
              <p className="text-slate-400">// Core Web & Application Stack</p>
              <p className="text-cyan-400 font-semibold">
                &gt; Next.js 15 (App Router) • React 19 • TypeScript • Tailwind CSS
              </p>
              <p className="text-indigo-300">
                &gt; Framer Motion • Node.js • REST APIs • SQLite/PostgreSQL
              </p>
              <p className="text-emerald-400 font-medium">
                &gt; Vercel CI/CD • Core Web Vitals (95+ Guaranteed)
              </p>
            </motion.div>
          )}

          {activeTab === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-2 text-slate-300"
            >
              <p className="text-slate-400">// Instant Communication Channels</p>
              <p>
                <span className="text-blue-400">Email:</span>{" "}
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-300 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </p>
              <p>
                <span className="text-emerald-400">WhatsApp:</span>{" "}
                <a
                  href={`https://wa.me/919125023199`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:underline"
                >
                  +91 9125023199 (1-Tap Chat)
                </a>
              </p>
              <p>
                <span className="text-purple-400">LinkedIn:</span>{" "}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:underline"
                >
                  linkedin.com/in/syed-nabeel-haider-zaidi-420b4715a
                </a>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
