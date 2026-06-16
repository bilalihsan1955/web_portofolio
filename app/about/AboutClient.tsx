"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ViewTransition } from "react";
import { useLanguage } from "@/app/providers";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FileText, X } from "lucide-react";

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

const timeline = [
  {
    year: "Present",
    title: "Final-year D3 Student",
    description: "Universitas Brawijaya, Malang. Focusing on practical software engineering and embedded systems.",
  },
  {
    year: "2023 - Present",
    title: "Freelance Full-stack Developer",
    description: "Delivering custom web applications, mobile apps, and IoT hardware integrations for various clients.",
  },
  {
    year: "2022",
    title: "UI/UX Design Focus",
    description: "Transitioning from pure design concepts in Figma to robust, scalable frontend development.",
  }
];

type CertificateType = "image" | "pdf";
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  type: CertificateType;
  url: string;
}

const mockCertificates: Certificate[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    type: "image",
    url: "https://picsum.photos/seed/cert1/800/600"
  },
  {
    id: 2,
    title: "Flutter Development Bootcamp",
    issuer: "Udemy",
    date: "2022",
    type: "pdf",
    url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 3,
    title: "React Native Masterclass",
    issuer: "Coursera",
    date: "2022",
    type: "image",
    url: "https://picsum.photos/seed/cert3/800/600"
  }
];

export default function AboutClient() {
  const pathname = usePathname();
  const { t } = useLanguage();
  
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [activeCert]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const bentoCardClass = "glass-capsule shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_24px_-4px_rgba(255,255,255,0.05)] rounded-3xl hover:-translate-y-2 transition-transform duration-300 p-8 relative overflow-hidden group";

  const modalContent = (
    <AnimatePresence>
      {activeCert && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-xl"
        >
          <button 
            onClick={() => setActiveCert(null)}
            className="absolute top-6 right-6 z-[10000] p-3 md:p-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-xl"
          >
            <X className="w-6 h-6 md:w-8 md:h-8"/>
          </button>

          <div className="relative w-full max-w-6xl h-[85vh] flex flex-col items-center justify-center">
            {activeCert.type === "image" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                <Image 
                  alt={activeCert.title} 
                  className="object-contain drop-shadow-2xl" 
                  fill 
                  sizes="90vw" 
                  src={activeCert.url}
                  priority
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full h-full relative bg-white rounded-2xl overflow-hidden"
              >
                <iframe src={activeCert.url} className="w-full h-full border-none" title={activeCert.title} />
              </motion.div>
            )}
            
            <div className="absolute -bottom-12 md:-bottom-16 left-0 right-0 text-center">
              <p className="text-lg md:text-xl font-light text-white tracking-wide">{activeCert.title}</p>
              <p className="text-sm font-medium text-white/50 mt-1 uppercase tracking-widest">
                {activeCert.issuer} • {activeCert.date}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <ViewTransition enter="fade-in" exit="fade-out" default="none">
      {/* Massive Poster Background */}
      <div className="fixed top-[10%] left-0 w-screen h-screen -z-[100] pointer-events-none overflow-hidden opacity-10">
        <motion.svg
          key={pathname}
          className="w-full h-full text-accent-teal"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d="M -100 900 C 200 800, 100 100, 400 200 C 700 300, 200 1100, 600 800 S 800 100, 900 400 C 1000 700, 700 1000, 1100 900 S 1400 0, 1300 500 S 1400 1200, 1540 600"
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

      <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 w-full">

          {/* 1. Bio Section - Spans Full Width */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-12 flex flex-col items-center text-center mb-8`}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-foreground relative z-10">
              {t("about.title")} <span className="text-accent-teal">Me.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light max-w-5xl relative z-10">
              {t("about.bio")}
            </p>
          </motion.div>

          {/* 2. Tech Stack - Spans 8 Cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`lg:col-span-8 ${bentoCardClass} flex flex-col justify-center`}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 border-l-4 border-accent-teal pl-4">
              {t("about.tech.title")}
            </h2>
            <div className="flex flex-wrap gap-8 md:gap-10">
              {[...techStack, ...toolsPlatforms].map((tech, idx) => (
                <div key={tech.name} className="relative flex flex-col items-center group/icon cursor-pointer">
                  <Image
                    src={tech.url}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 md:w-16 md:h-16 drop-shadow-sm group-hover/icon:scale-110 group-hover/icon:-translate-y-2 transition-all duration-300"
                  />
                  <span className="absolute -bottom-6 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 text-xs font-medium text-foreground/70 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3. Professional Journey - Spans 4 Cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`lg:col-span-4 ${bentoCardClass} flex flex-col`}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 border-l-4 border-accent-coral pl-4">
              {t("about.journey.title")}
            </h2>
            <div className="relative ml-2 space-y-8 flex-1">
              <div className="absolute top-2 bottom-2 left-[3px] w-1 bg-foreground/10 rounded-full" />
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute w-2.5 h-2.5 bg-accent-coral rounded-full -left-[3px] top-1.5 ring-4 ring-background"></div>
                  <span className="text-xs font-bold text-accent-coral tracking-widest uppercase">{item.year}</span>
                  <h3 className="text-lg font-bold text-foreground mt-1 mb-1">{item.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4. Certificates & Achievements - Spans Full Width */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`lg:col-span-12 ${bentoCardClass}`}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 border-l-4 border-accent-yellow pl-4">
              Certificates & Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {mockCertificates.map((cert) => (
                <div 
                  key={cert.id} 
                  onClick={() => setActiveCert(cert)}
                  className="group/cert cursor-pointer bg-foreground/5 hover:bg-foreground/10 border border-foreground/5 rounded-2xl p-4 transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative bg-foreground/5 flex items-center justify-center">
                    {cert.type === "image" ? (
                      <Image 
                        src={cert.url} 
                        alt={cert.title} 
                        fill 
                        className="object-cover group-hover/cert:scale-105 transition-transform duration-500" 
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-foreground/40 group-hover/cert:text-accent-coral transition-colors duration-300">
                        <FileText className="w-16 h-16 mb-2" />
                        <span className="font-bold tracking-widest uppercase text-sm">PDF Document</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground line-clamp-1">{cert.title}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-foreground/60">{cert.issuer}</span>
                      <span className="text-xs font-semibold px-2 py-1 bg-foreground/10 rounded-md text-foreground/70">{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 5. Let's Connect - Spans Full Width */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`lg:col-span-12 ${bentoCardClass} flex flex-col items-center text-center`}
          >
            {/* Embedded Background SVG purely for the connect card */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
              <svg className="w-full h-full text-accent-yellow/10" viewBox="0 0 1000 1000" preserveAspectRatio="none" fill="none">
                <path d="M -100 800 C 200 1500, 300 -300, 500 300 C 700 900, 300 800, 700 600 C 1100 400, 600 -200, 1000 200 C 1400 600, 1000 1200, 1300 800 C 1600 400, 1400 0, 1640 500" stroke="currentColor" strokeWidth={50} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("about.connect.title")}</h2>
            <p className="text-foreground/70 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
              {t("about.connect.desc")}
            </p>
            <form className="space-y-6 w-full max-w-4xl relative z-10 mx-auto text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input type="text" id="name" className="w-full bg-background/50 border border-foreground/10 hover:border-foreground/20 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent-teal transition-all" placeholder={t("about.connect.name")} />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" id="email" className="w-full bg-background/50 border border-foreground/10 hover:border-foreground/20 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent-teal transition-all" placeholder={t("about.connect.email")} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" rows={5} className="w-full bg-background/50 border border-foreground/10 hover:border-foreground/20 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent-teal transition-all resize-none" placeholder={t("about.connect.message")}></textarea>
              </div>
              <div className="mt-8">
                <button type="button" className="w-full px-10 py-4 bg-foreground hover:bg-foreground/90 text-background font-bold rounded-2xl transition-transform hover:scale-105 active:scale-95 shadow-xl">
                  {t("about.connect.send")}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
      
      {mounted && createPortal(modalContent, document.body)}
    </ViewTransition>
  );
}
