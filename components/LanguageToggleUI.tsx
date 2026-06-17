"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/app/providers";

export function LanguageToggleUI() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "EN" ? "ID" : "EN")}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 backdrop-blur-2xl border border-foreground/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:scale-105 hover:bg-foreground/10 transition-all duration-300 cursor-pointer"
      aria-label={`Switch to ${language === "EN" ? "Indonesian" : "English"}`}
    >
      <Globe className="w-5 h-5 text-accent-teal" />
      <span className="text-sm font-bold text-foreground tracking-wide">
        {language}
      </span>
    </button>
  );
}
