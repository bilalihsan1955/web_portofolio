"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/app/providers";

export function LanguageToggleUI() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "EN" ? "ID" : "EN")}
      className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 dark:bg-white/[0.03] backdrop-blur-[24px] saturate-[1.2] shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/20 md:border-[1.5px] md:border-white/40 dark:border-white/10 md:dark:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden group"
      aria-label={`Switch to ${language === "EN" ? "Indonesian" : "English"}`}
    >
      {/* Natural Corner Highlights (Masked Border & Inner Glow) */}
      <div 
        className="absolute -inset-[1px] md:-inset-[1.5px] pointer-events-none rounded-full border border-white/60 md:border-[2px] md:border-white/90 dark:border-white/30 md:dark:border-white/60 mix-blend-overlay shadow-[inset_0_0_12px_rgba(255,255,255,0.3)] md:shadow-[inset_0_0_24px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.1)] md:dark:shadow-[inset_0_0_24px_rgba(255,255,255,0.2)] transition-opacity duration-300 opacity-80 group-hover:opacity-100"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 40px 20px at 10% 0%, black 0%, transparent 100%), radial-gradient(ellipse 40px 20px at 90% 0%, black 0%, transparent 100%), radial-gradient(ellipse 60px 20px at 50% 100%, black 0%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 40px 20px at 10% 0%, black 0%, transparent 100%), radial-gradient(ellipse 40px 20px at 90% 0%, black 0%, transparent 100%), radial-gradient(ellipse 60px 20px at 50% 100%, black 0%, transparent 100%)'
        }}
      ></div>

      <Globe className="w-5 h-5 text-accent-teal relative z-10" />
      <span className="text-sm font-bold text-foreground tracking-wide relative z-10">
        {language}
      </span>
    </button>
  );
}
