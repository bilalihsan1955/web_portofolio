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
        className="group relative flex flex-col justify-between p-8 bg-white/[0.02] dark:bg-white/[0.02] backdrop-blur-2xl border border-black/[0.05] dark:border-white/[0.05] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 overflow-hidden min-h-[380px] h-full"
      >
        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
          <div className="p-3 bg-foreground rounded-full text-background shadow-lg">
            <ExternalLink className="w-5 h-5" />
          </div>
        </div>
        
        <div className="space-y-4">
          <span className="text-accent-coral font-medium text-sm tracking-wide capitalize">{project.category}</span>
          <h3 className="text-2xl font-bold text-foreground pr-12">{project.title}</h3>
          <p className="text-foreground/80 leading-relaxed text-lg mt-4">
            {project.shortSummary[language as "EN" | "ID"]}
          </p>
        </div>
        
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-foreground/50 text-sm font-medium">
            <Calendar className="w-4 h-4" />
            <span>{project.timeline[language as "EN" | "ID"]}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-medium bg-foreground/5 border border-foreground/10 text-foreground/80 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
