"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ViewTransition } from "react";
import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/app/providers";
import { projects } from "@/lib/data/projects";

const categories = ["Semua (All)", "Web", "Mobile", "IoT", "UI/UX"];



export default function Portfolio() {
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState("Semua (All)");
  const { t } = useLanguage();

  const filteredProjects = activeCategory === "Semua (All)"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <ViewTransition enter="fade-in" exit="fade-out" default="none">
      {/* Massive Poster Background - Portfolio */}
      <div className="fixed bottom-[10%] translate-y-[35vh] left-0 w-screen h-screen -z-[100] pointer-events-none overflow-hidden opacity-10">
        <motion.svg
          key={pathname}
          className="w-full h-full text-accent-teal"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d="M -100 900 C 100 -500, 300 1200, 200 500 C 100 -200, 500 100, 600 800 C 700 1500, 300 400, 800 300 C 1300 200, 700 1200, 1100 800 C 1500 400, 1000 -200, 1200 200 C 1400 600, 1300 1200, 1540 400"
            stroke="currentColor"
            strokeWidth={80}
            strokeLinecap="round"
            initial={{ pathLength: 0, y: 0 }}
            animate={{ pathLength: 1, y: [0, -30, 0] }}
            transition={{
              pathLength: { duration: 5, ease: "easeInOut" },
              y: { duration: 15, ease: "easeInOut", repeat: Infinity }
            }}
          />
        </motion.svg>
      </div>

      <div className="pt-32 pb-16 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden relative">
        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
            {t("portfolio.title").split(" ")[0]} <span className="text-accent-teal">{t("portfolio.title").split(" ")[1]}</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl font-light">
            {t("portfolio.desc")}
          </p>

          {/* Category Filters (Segmented Control) */}
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 gap-1 bg-white/[0.02] dark:bg-white/[0.02] backdrop-blur-2xl border border-black/[0.05] dark:border-white/[0.05] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full mt-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
                  ? "bg-accent-teal/10 text-accent-teal"
                  : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </ViewTransition>
  );
}
