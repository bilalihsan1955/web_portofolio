import { ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectData } from "@/lib/data/projects";
import { useLanguage } from "@/app/providers";

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();

  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <motion.div 
        layoutId={`project-card-${project.slug}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="group relative flex flex-col justify-between p-8 bg-white/5 dark:bg-white/[0.03] backdrop-blur-[24px] saturate-[1.2] shadow-[inset_0_0_12px_rgba(255,255,255,0.2),_0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.08),_0_10px_30px_rgba(0,0,0,0.4)] border-[1.5px] border-white/40 dark:border-white/20 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 overflow-hidden min-h-[380px] h-full"
      >
        {/* Natural Corner Highlights (Masked Border & Inner Glow) */}
        <div 
          className="absolute inset-0 pointer-events-none rounded-[2rem] border-[2px] border-white/90 dark:border-white/60 mix-blend-overlay shadow-[inset_0_0_24px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_24px_rgba(255,255,255,0.2)] z-0"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse 260px 200px at 100% 0%, black 0%, transparent 100%), radial-gradient(ellipse 260px 200px at 0% 100%, black 0%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 260px 200px at 100% 0%, black 0%, transparent 100%), radial-gradient(ellipse 260px 200px at 0% 100%, black 0%, transparent 100%)'
          }}
        ></div>
        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
          <div className="p-3 bg-foreground rounded-full text-background shadow-lg">
            <ExternalLink className="w-5 h-5" />
          </div>
        </div>
        
        <div className="space-y-4 relative z-10">
          <span className="text-accent-coral font-medium text-sm tracking-wide capitalize">{project.category}</span>
          <h3 className="text-2xl font-bold text-foreground pr-12">{project.title}</h3>
          <p className="text-foreground/80 leading-relaxed text-lg mt-4">
            {project.shortSummary[language as "EN" | "ID"]}
          </p>
        </div>
        
        <div className="mt-8 flex flex-col gap-4 relative z-10">
          <div className="flex items-center gap-2 text-foreground/50 text-sm font-medium">
            <Calendar className="w-4 h-4" />
            <span>{project.timeline[language as "EN" | "ID"]}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-medium bg-black/5 dark:bg-white/[0.05] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.2)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_2px_rgba(255,255,255,0.1)] text-foreground/80 border border-transparent backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
