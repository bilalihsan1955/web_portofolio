"use client";

import { useParams, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { useLanguage } from "@/app/providers";
import { ViewTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectGallery from "@/components/ProjectGallery";

export default function ProjectDetail() {
  const params = useParams();
  const pathname = usePathname();
  const { language } = useLanguage();
  
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
      <div className="fixed top-0 left-0 w-screen h-screen -z-[100] pointer-events-none overflow-hidden opacity-10">
        <motion.svg
          key={pathname}
          className="w-full h-full text-accent-teal"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d="M 0 100 
               C 200 -100, 300 400, 200 600
               C 100 800, 400 900, 350 400
               C 300 -100, 600 0, 500 500
               C 400 1000, 800 900, 650 300
               C 500 -300, 950 100, 800 600
               C 650 1100, 1300 800, 1000 300
               C 700 -200, 1200 -100, 1500 500
               C 1800 1100, 1600 200, 2000 500"
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

      <div className="min-h-screen w-full relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        <motion.div 
          layoutId={`project-card-${project.slug}`}
          className="glass-capsule backdrop-blur-2xl rounded-[2.5rem] p-6 md:p-12 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_-4px_rgba(255,255,255,0.05)] border border-white/10 relative overflow-hidden"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 via-transparent to-accent-coral/5 pointer-events-none" />
          
          {/* Smooth Bezier Z-m-S-loop Ribbon Background with Fixed Sizing Architecture */}
          <motion.svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1000px] text-accent-yellow/10 pointer-events-none -z-10" viewBox="0 0 1500 1000" fill="none">
            <motion.path 
              d="M -100,500 
                 C 100,100 300,900 400,500 
                 C 450,200 550,200 600,500 
                 C 650,200 750,200 800,500 
                 C 850,1000 1150,1000 1000,500 
                 C 850,0 550,0 800,500 
                 C 1000,1000 1300,0 1600,500" 
              stroke="currentColor" 
              strokeWidth="50" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }} 
              whileInView={{ pathLength: 1 }} 
              transition={{ duration: 6, ease: "easeInOut" }} 
            />
          </motion.svg>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            
            {/* Sidebar / Meta Information */}
            <div className="w-full lg:w-1/3 flex flex-col space-y-8 lg:sticky lg:top-8 h-fit">
              <div>
                <span className="text-accent-coral font-medium text-sm md:text-base tracking-widest uppercase inline-block px-4 py-1.5 rounded-full bg-accent-coral/10 border border-accent-coral/20 mb-6">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                  {project.title}
                </h1>
              </div>

              {/* Role */}
              <div>
                <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-2">Role</h3>
                <p className="text-lg font-medium text-foreground">{project.role}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-4 py-1.5 rounded-full text-sm font-medium bg-foreground/5 border border-foreground/10 text-foreground shadow-sm">
                      {tech}
                    </span>
                  ))}
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
                    <ExternalLink className="w-5 h-5" /> Live Demo
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
                <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden mb-12 shadow-lg border border-white/10">
                  <Image 
                    src={project.imageAssets[0]} 
                    alt={`${project.title} Hero Image`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Description */}
              <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80 leading-relaxed">
                <p className="text-xl md:text-2xl font-light text-foreground mb-8 leading-normal">
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
