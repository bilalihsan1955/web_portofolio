"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ViewTransition, useRef, useEffect, useState } from "react";
import { useLanguage } from "@/app/providers";
import { projects } from "@/lib/data/projects";

const techStack = [
  { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Laravel", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "Flutter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "PHP", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "CodeIgniter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg" },
  { name: "Dart", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
  { name: "Three.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" },
];

const toolsPlatforms = [
  { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Arduino", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" },
  { name: "Vercel", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Postman", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
];



export default function Home() {
  const pathname = usePathname();
  const { t, language } = useLanguage();

  const techOuterRef = useRef<HTMLDivElement>(null);
  const techInnerRef = useRef<HTMLDivElement>(null);
  const toolsOuterRef = useRef<HTMLDivElement>(null);
  const toolsInnerRef = useRef<HTMLDivElement>(null);
  
  const [techOverflow, setTechOverflow] = useState(false);
  const [toolsOverflow, setToolsOverflow] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (techOuterRef.current && techInnerRef.current) {
        setTechOverflow(techInnerRef.current.scrollWidth > techOuterRef.current.clientWidth);
      }
      if (toolsOuterRef.current && toolsInnerRef.current) {
        setToolsOverflow(toolsInnerRef.current.scrollWidth > toolsOuterRef.current.clientWidth);
      }
    };
    
    // Initial check
    setTimeout(checkOverflow, 50);
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <ViewTransition enter="fade-in" exit="fade-out" default="none">
      {/* Massive Poster Background - Home */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-[100] pointer-events-none overflow-hidden opacity-10">
        <motion.svg
          key={pathname}
          className="w-full h-full text-accent-teal"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d="M -100 100 C 200 -200, 300 1200, 400 500 C 500 -200, 200 400, 600 400 C 1000 400, 400 1000, 800 800 C 1200 600, 700 0, 1100 200 C 1500 400, 900 800, 1300 600 C 1700 400, 1400 1200, 1540 800"
            stroke="currentColor"
            strokeWidth={80}
            strokeLinecap="round"
            initial={{ pathLength: 0, y: 0 }}
            animate={{ pathLength: 1, y: [0, -40, 0] }}
            transition={{
              pathLength: { duration: 4, ease: "easeInOut" },
              y: { duration: 15, ease: "easeInOut", repeat: Infinity }
            }}
          />
        </motion.svg>
      </div>

      <div className="flex flex-col px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">

        <section className="relative flex flex-col items-center justify-center min-h-screen pt-32 pb-16 w-full">
          {/* Soft Blobs */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-30 dark:opacity-20">
            <div className="w-96 h-96 rounded-full bg-accent-coral/20 blur-3xl" />
            <div className="w-96 h-96 rounded-full bg-accent-teal/20 blur-3xl -ml-20 mt-20" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-3xl w-full mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow font-semibold text-sm">
              {t("hero.badge")}
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Hi, I'm <span className="text-accent-teal relative inline-block">Bilal Al Ihsan.
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-4 text-accent-coral"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M 0,10 Q 50,20 100,10 T 200,10"
                    stroke="currentColor"
                    strokeWidth={6}
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  />
                </motion.svg>
              </span><br />
              {t("hero.subtitle")}
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <Link
                href="/portfolio"
                className="flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:scale-105 transition-transform w-full sm:w-auto justify-center shadow-lg"
              >
                {t("hero.btn.work")} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 px-8 py-4 bg-transparent border border-foreground/20 text-foreground rounded-full font-semibold hover:bg-foreground/5 transition-colors w-full sm:w-auto justify-center"
              >
                {t("hero.btn.connect")}
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <div className="relative z-10 w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("home.featured.title")}</h2>
              <p className="text-foreground/70 text-lg">{t("home.featured.desc")}</p>
            </div>
            <Link href="/portfolio" className="text-accent-coral font-semibold hover:underline mt-4 md:mt-0 flex items-center gap-1">
              {t("home.featured.link")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, idx) => (
              <Link href={`/projects/${project.slug}`} key={project.id} className="block w-full h-full">
                <motion.div
                  layoutId={`project-card-${project.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative flex flex-col justify-between p-8 md:p-10 bg-white/[0.02] dark:bg-white/[0.02] backdrop-blur-2xl border border-black/[0.05] dark:border-white/[0.05] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] hover:scale-[1.02] transition-transform duration-300 overflow-hidden min-h-[320px] h-full"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                    <div className="p-3 bg-foreground rounded-full text-background">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground pr-12">{project.title}</h3>
                    <p className="text-foreground/80 leading-relaxed text-lg">
                      {project.shortSummary[language as "EN" | "ID"]}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.techStack.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-medium bg-foreground/5 border border-transparent text-foreground/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tech Stack & Tools Section */}
        <div className="relative z-10 mt-12 md:mt-20 lg:mt-24 border-t border-foreground/10 pt-8 md:pt-12 overflow-hidden w-full">

          {/* Tech Stack */}
          <div className="mb-4 md:mb-6">
            <p className="text-center text-sm font-semibold text-foreground/50 tracking-wide capitalize mb-3 md:mb-4">
              {t("home.tech.title")}
            </p>
            <div 
              ref={techOuterRef}
              className={`relative w-full py-2 md:py-4 overflow-hidden group ${techOverflow ? '[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]' : ''}`}
            >
              <div
                className={`flex flex-row flex-nowrap items-center gap-6 md:gap-10 ${techOverflow ? 'w-max animate-marquee group-hover:[animation-play-state:paused]' : 'w-full justify-center mx-auto'}`}
              >
                <div ref={techInnerRef} className="flex flex-row flex-nowrap items-center gap-6 md:gap-10 shrink-0">
                  {techStack.map((tech, idx) => (
                    <div key={`${tech.name}-${idx}`} className="flex flex-col items-center gap-3 group/item w-24 shrink-0">
                      <Image
                        src={tech.url}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 md:w-16 md:h-16 filter grayscale opacity-70 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all duration-300"
                      />
                      <span className="text-xs font-medium text-foreground/60 opacity-0 group-hover/item:opacity-100 transition-opacity whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
                {techOverflow && (
                  <div className="flex flex-row flex-nowrap items-center gap-6 md:gap-10 shrink-0">
                    {techStack.map((tech, idx) => (
                      <div key={`${tech.name}-dup-${idx}`} className="flex flex-col items-center gap-3 group/item w-24 shrink-0">
                        <Image
                          src={tech.url}
                          alt={tech.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 md:w-16 md:h-16 filter grayscale opacity-70 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all duration-300"
                        />
                        <span className="text-xs font-medium text-foreground/60 opacity-0 group-hover/item:opacity-100 transition-opacity whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div>
            <p className="text-center text-sm font-semibold text-foreground/50 tracking-wide capitalize mb-3 md:mb-4">
              {t("home.tools.title")}
            </p>
            <div 
              ref={toolsOuterRef}
              className={`relative w-full py-2 md:py-4 overflow-hidden group ${toolsOverflow ? '[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]' : ''}`}
            >
              <div
                className={`flex flex-row flex-nowrap items-center gap-6 md:gap-10 ${toolsOverflow ? 'w-max animate-marquee-slow group-hover:[animation-play-state:paused]' : 'w-full justify-center mx-auto'}`}
              >
                <div ref={toolsInnerRef} className="flex flex-row flex-nowrap items-center gap-6 md:gap-10 shrink-0">
                  {toolsPlatforms.map((tool, idx) => (
                    <div key={`${tool.name}-${idx}`} className="flex flex-col items-center gap-3 group/item w-24 shrink-0">
                      <Image
                        src={tool.url}
                        alt={tool.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 md:w-16 md:h-16 filter grayscale opacity-70 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all duration-300"
                      />
                      <span className="text-xs font-medium text-foreground/60 opacity-0 group-hover/item:opacity-100 transition-opacity whitespace-nowrap">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
                {toolsOverflow && (
                  <div className="flex flex-row flex-nowrap items-center gap-6 md:gap-10 shrink-0">
                    {toolsPlatforms.map((tool, idx) => (
                      <div key={`${tool.name}-dup-${idx}`} className="flex flex-col items-center gap-3 group/item w-24 shrink-0">
                        <Image
                          src={tool.url}
                          alt={tool.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 md:w-16 md:h-16 filter grayscale opacity-70 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all duration-300"
                        />
                        <span className="text-xs font-medium text-foreground/60 opacity-0 group-hover/item:opacity-100 transition-opacity whitespace-nowrap">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </ViewTransition>
  );
}
