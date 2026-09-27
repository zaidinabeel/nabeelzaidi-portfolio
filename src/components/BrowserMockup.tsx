"use client";

import React from "react";
import { Globe, Lock, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface BrowserMockupProps {
  project: Project;
}

export default function BrowserMockup({ project }: BrowserMockupProps) {
  // Color themes for UI previews based on project category
  const getThemeGradient = () => {
    switch (project.category) {
      case "Client Portfolio":
        return "from-slate-900 via-blue-950 to-slate-900";
      case "SaaS & CRM":
        return "from-slate-900 via-emerald-950 to-slate-900";
      case "AI & Enterprise":
        return "from-slate-950 via-indigo-950 to-slate-900";
      case "POS & Web App":
        return "from-slate-900 via-amber-950 to-slate-900";
      default:
        return "from-slate-900 to-slate-800";
    }
  };

  const domain = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, "")
    : `${project.id}.app`;

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-md group/mockup hover:shadow-xl transition-all duration-300">
      {/* Browser Window Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-100/90 border-b border-slate-200">
        {/* Window controls */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>

        {/* URL Bar */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200/90 text-[10px] text-slate-600 font-mono max-w-[200px] sm:max-w-xs truncate shadow-xs">
          <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
          <span className="truncate">{domain}</span>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </div>

      {/* Simulated Live UI Visual Window */}
      <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${getThemeGradient()} p-5 flex flex-col justify-between overflow-hidden text-white`}>
        {/* Background ambient lighting */}
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Simulated Top Nav Bar inside UI */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-blue-500 flex items-center justify-center text-[10px] font-bold">
              {project.title.charAt(0)}
            </div>
            <span className="text-xs font-bold tracking-tight text-white/90 truncate max-w-[140px]">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-white/10 border border-white/10 text-cyan-300">
              {project.category}
            </span>
          </div>
        </div>

        {/* Simulated Hero / Content UI Preview */}
        <div className="relative z-10 my-auto py-2">
          <p className="text-xs text-cyan-300 font-semibold tracking-wide uppercase text-[10px]">
            {project.tagline}
          </p>
          <p className="text-sm sm:text-base font-extrabold text-white mt-0.5 leading-snug line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Bottom Pill Metrics Bar inside UI */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-2.5 text-[10px]">
          <div className="flex items-center gap-2">
            {project.metrics && project.metrics.length > 0 ? (
              <span className="inline-flex items-center gap-1 font-bold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-500/30">
                <CheckCircle2 className="w-3 h-3" />
                {project.metrics[0].value} {project.metrics[0].label}
              </span>
            ) : (
              <span className="text-slate-400">Production Ready</span>
            )}
          </div>

          <div className="text-[10px] text-slate-300 font-medium">
            {project.tags.slice(0, 2).join(" • ")}
          </div>
        </div>
      </div>
    </div>
  );
}
