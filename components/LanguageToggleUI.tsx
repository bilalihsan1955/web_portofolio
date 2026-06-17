"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/app/providers";

export function LanguageToggleUI() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "EN" ? "ID" : "EN")}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 dark:bg-white/[0.02] backdrop-blur-2xl border border-black/20 dark:border-white/[0.05] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:scale-105 hover:bg-black/20 dark:hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
      aria-label={`Switch to ${language === "EN" ? "Indonesian" : "English"}`}
    >
      <Globe className="w-5 h-5 text-accent-teal" />
      <span className="text-sm font-bold text-foreground tracking-wide">
        {language}
      </span>
    </button>
  );
}
