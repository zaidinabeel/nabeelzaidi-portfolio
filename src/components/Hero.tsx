"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Zap, Award, Building2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const badges = [
    {
      icon: Zap,
      title: "Ultra Fast",
      subtitle: "95+ Lighthouse score",
      color: "bg-blue-50 text-blue-600 border-blue-100",
      delay: "animate-float",
    },
    {
      icon: CheckCircle2,
      title: "100% Responsive",
      subtitle: "Mobile & tablet first",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      delay: "animate-float-delayed",
    },
    {
      icon: Sparkles,
      title: "Fluid Motion",
      subtitle: "Micro-interactions",
      color: "bg-purple-50 text-purple-600 border-purple-100",
      delay: "animate-float",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Quality",
      subtitle: "Clean, reliable code",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
      delay: "animate-float-delayed",
    },
  ];

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-grid-pattern">
      {/* Dynamic ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-blue-500/8 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-indigo-500/8 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] sm:text-xs font-semibold mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Portfolio & Web Development Projects
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15] sm:leading-[1.1]"
          >
            Crafting{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              high-converting
            </span>{" "}
            portfolio websites & modern web apps.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl px-2"
          >
            Hi, I&apos;m <strong className="text-slate-900 font-semibold">{PERSONAL_INFO.name}</strong>. Full-stack developer with enterprise platform experience at <strong>Jio Platforms</strong>, building ultra-fast, responsive, and beautifully animated websites that turn visitors into clients.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto px-4 sm:px-0"
          >
            <motion.a
              whileHover={{ scale: 1.03, translateY: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Explore Portfolio Work</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, translateY: -2 }}
              whileTap={{ scale: 0.97 }}
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs flex items-center justify-center gap-2 transition-all hover:border-slate-300"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-600" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </motion.a>
          </motion.div>

          {/* Key Value Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl px-2 sm:px-0"
          >
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.title}
                  whileHover={{ scale: 1.04, translateY: -3 }}
                  transition={{ duration: 0.2 }}
                  className={`glass-card p-3.5 sm:p-4 rounded-xl flex items-center gap-2.5 sm:gap-3 text-left ${badge.delay}`}
                >
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 border ${badge.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-xs sm:text-sm">{badge.title}</p>
                    <p className="text-slate-500 text-[10px] sm:text-xs leading-tight">{badge.subtitle}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
