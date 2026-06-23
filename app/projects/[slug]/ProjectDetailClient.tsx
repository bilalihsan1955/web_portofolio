"use client";

import { useParams, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { useLanguage } from "@/app/providers";
import { ViewTransition } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectGallery from "@/components/ProjectGallery";

export default function ProjectDetailClient() {
  const params = useParams();
  const pathname = usePathname();
  const { language, t } = useLanguage();
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);

  const slug = params.slug as string;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-foreground">
        <h1 className="text-2xl font-semibold">Project not found</h1>
      </div>
    );
  }

  return (
    <ViewTransition enter="fade-in" exit="fade-out" default="none">
      {/* Massive Poster Background - Project Detail */}
      <motion.div 
        className="fixed top-0 left-0 w-screen h-screen -z-[100] pointer-events-none overflow-hidden opacity-10"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
      >
        <motion.svg
          key={pathname}
          className="w-full h-full text-accent-teal"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d="M -100,500 
                 C 100,100 300,900 400,500 
                 C 450,200 550,200 600,500 
                 C 650,200 750,200 800,500 
                 C 850,1000 1150,1000 1000,500 
                 C 850,0 550,0 800,500 
                 C 1000,1000 1300,0 1600,500"
            stroke="currentColor"
            strokeWidth={80}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>

      <div className="min-h-screen w-full relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        <motion.div
          layoutId={`project-card-${project.slug}`}
          className="relative py-12"
        >

          <div className="relative z-10 flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

            {/* Sidebar / Meta Information */}
            <div className="w-full lg:w-1/3 flex flex-col space-y-8 lg:sticky lg:top-32 h-fit">
              <div>
                <span className="text-accent-coral font-bold text-sm md:text-base tracking-wide capitalize mb-6 block">
                  {project.category.join(" & ")}
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                  {project.title}
                </h1>
              </div>

              {/* Role */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">Role</h4>
                <p className="text-lg font-medium text-foreground">{project.role}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-4 py-1.5 rounded-full text-sm font-medium bg-black/5 dark:bg-white/[0.05] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.2)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_2px_rgba(255,255,255,0.1)] text-foreground/80 border border-transparent backdrop-blur-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-3">Timeline</h4>
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <Calendar className="w-5 h-5 text-foreground/50" />
                  <span>{project.timeline[language as "EN" | "ID"]}</span>
                </div>
              </div>

              {/* Links */}
              <div className="pt-4 flex flex-col gap-4">
                {project.liveDemoLink && (
                  <Link
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-bold rounded-full transition-transform hover:scale-105 shadow-xl w-full"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {project.liveDemoLink.includes("play.google.com")
                      ? t("project.btn.playstore" as any)
                      : t("project.btn.website" as any)}
                  </Link>
                )}
                {project.repositoryLink && (
                  <Link
                    href={project.repositoryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-foreground/20 text-foreground font-bold rounded-full hover:bg-foreground/5 transition-colors w-full"
                  >
                    <Github className="w-5 h-5" /> View Repository
                  </Link>
                )}
              </div>
            </div>

            {/* Main Content Column */}
            <div className="w-full lg:w-2/3 flex flex-col">

              {/* Hero Image / Banner */}
              {project.imageAssets && project.imageAssets.length > 0 && (
                <div className={`w-full aspect-[16/9] relative rounded-3xl overflow-hidden mb-16 bg-foreground/5 ${!isBannerLoaded ? 'animate-pulse' : ''}`}>
                  <Image
                    src={project.imageAssets[0]}
                    alt={`${project.title} Hero Image`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className={`object-cover transition-opacity duration-700 ${isBannerLoaded ? 'opacity-100' : 'opacity-0'}`}
                    priority
                    onLoad={() => setIsBannerLoaded(true)}
                  />
                </div>
              )}

              {/* Description */}
              <div className="text-lg leading-[1.7] max-w-[65ch] text-foreground/80">
                <p className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-normal">
                  {project.shortSummary[language as "EN" | "ID"]}
                </p>
                <div className="whitespace-pre-line">
                  {project.fullDescription[language as "EN" | "ID"]}
                </div>
              </div>

              {/* Gallery Component */}
              {project.imageAssets && project.imageAssets.length > 1 && (
                <ProjectGallery images={project.imageAssets.slice(1)} />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </ViewTransition>
  );
}
