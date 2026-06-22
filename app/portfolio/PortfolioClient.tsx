"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ViewTransition } from "react";
import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/app/providers";
import { projects } from "@/lib/data/projects";

const categories = ["All", "Web", "Mobile", "IoT", "UI/UX"];



export default function Portfolio() {
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useLanguage();

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category.includes(activeCategory as any));

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
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 gap-1 bg-white/5 dark:bg-white/[0.03] backdrop-blur-[24px] saturate-[1.2] shadow-[inset_0_0_8px_rgba(255,255,255,0.1),_0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_8px_rgba(255,255,255,0.05),_0_10px_30px_rgba(0,0,0,0.4)] border border-white/20 dark:border-white/10 rounded-full mt-10 relative overflow-hidden">
            {/* Natural Corner Highlights */}
            <div className="absolute -inset-[1px] pointer-events-none rounded-full border border-white/60 dark:border-white/40 mix-blend-overlay shadow-[inset_0_0_12px_rgba(255,255,255,0.3)] dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.1)] z-0" style={{ WebkitMaskImage: 'radial-gradient(ellipse 300px 40px at 50% 0%, black 0%, transparent 100%), radial-gradient(ellipse 150px 30px at 100% 100%, black 0%, transparent 100%)', maskImage: 'radial-gradient(ellipse 300px 40px at 50% 0%, black 0%, transparent 100%), radial-gradient(ellipse 150px 30px at 100% 100%, black 0%, transparent 100%)' }}></div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
                  ? "bg-accent-teal/10 text-accent-teal shadow-[inset_0_0_0_1px_rgba(20,184,166,0.2)]"
                  : "text-foreground/70 hover:text-foreground hover:bg-white/5 dark:hover:bg-white/[0.05] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.2)] dark:hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_2px_rgba(255,255,255,0.1)]"
                  }`}
              >
                {category === "All" ? t("portfolio.category.all" as any) : category}
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
