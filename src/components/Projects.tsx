"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Check, Globe, Layers, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import MagneticButton from "@/components/MagneticButton";
import { PROJECTS } from "@/data/portfolioData";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Client Portfolio", "SaaS & CRM", "AI & Enterprise", "POS & Web App"];

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              Featured Work
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Selected Projects & Case Studies
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              Live client websites, full-scale platforms, and offline-first applications engineered for scale and speed.
            </p>
          </motion.div>

          {/* Animated Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-1.5 sm:gap-2 mt-6 md:mt-0 p-1 bg-white rounded-xl border border-slate-200 shadow-xs"
          >
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    isActive ? "text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterTab"
                      className="absolute inset-0 bg-blue-600 rounded-lg shadow-sm"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Project Grid: 2x2 Clean Cards */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 hover:border-slate-300 relative group shadow-xs hover:shadow-xl transition-all bg-white"
              >
                <div>
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      {project.category}
                    </span>

                    {project.liveUrl ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Live Production
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                        Open Source
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 text-xs sm:text-sm font-semibold mt-1">
                    {project.tagline}
                  </p>

                  <p className="mt-3.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Metrics / Highlights */}
                  {project.metrics && (
                    <div className="mt-5 grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="text-center">
                          <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">{m.value}</p>
                          <p className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold truncate">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Feature Bullets */}
                  <div className="mt-5 space-y-2">
                    {project.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  {project.liveUrl ? (
                    <MagneticButton strength={15} className="w-full sm:w-auto">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-4 py-2.5 sm:py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Visit Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </MagneticButton>
                  ) : (
                    <div />
                  )}

                  {project.githubUrl && (
                    <MagneticButton strength={15} className="w-full sm:w-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-3.5 py-2.5 sm:py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 inline-flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View Architecture & Code</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    </MagneticButton>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
