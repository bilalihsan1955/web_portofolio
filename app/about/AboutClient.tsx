"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ViewTransition } from "react";
import { useLanguage } from "@/app/providers";

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

export default function AboutPage() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <ViewTransition enter="fade-in" exit="fade-out" default="none">
      {/* Massive Poster Background - About */}
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

      {/* Local scope wrapper applied */}
      <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden relative">

        {/* Bio Section */}
        <section className="mb-24 max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-foreground">
            {t("about.title")} <span className="text-accent-teal">Me.</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light">
            {t("about.bio")}
          </p>
        </section>

        {/* Professional Journey - Vertical Timeline */}
        <section className="mb-24 max-w-4xl relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-4">
            {t("about.journey.title")}
          </h2>

          <div className="relative ml-3 md:ml-4 space-y-12">
            {/* Animated Vertical Line */}
            <motion.div
              className="absolute top-0 bottom-0 left-[3px] w-1.5 bg-foreground/20 origin-top rounded-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 + 0.5 }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute w-3 h-3 bg-accent-coral rounded-full -left-[5.5px] top-1.5 ring-4 ring-background shadow-sm"></div>
                <span className="text-sm font-bold text-accent-coral tracking-widest uppercase">{item.year}</span>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack - Floating Icons */}
        <section className="mb-24 w-full relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-12">{t("about.tech.title")}</h2>

          {/* Languages & Frameworks */}
          <div className="mb-16">
            <h3 className="text-xl font-medium text-foreground/70 mb-8 border-l-4 border-accent-teal pl-4">Languages & Frameworks</h3>
            <div className="w-full flex flex-wrap justify-start gap-10 md:gap-14 lg:gap-16 py-8">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group/item relative flex flex-col items-center cursor-pointer"
                >
                  <Image
                    src={tech.url}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 md:w-20 md:h-20 drop-shadow-md group-hover/item:scale-110 group-hover/item:-translate-y-2 transition-all duration-300"
                  />
                  <span className="absolute -bottom-8 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-sm font-medium text-foreground/70 whitespace-nowrap">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div>
            <h3 className="text-xl font-medium text-foreground/70 mb-8 border-l-4 border-accent-coral pl-4">Tools & Platforms</h3>
            <div className="w-full flex flex-wrap justify-start gap-10 md:gap-14 lg:gap-16 py-8">
              {toolsPlatforms.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group/item relative flex flex-col items-center cursor-pointer"
                >
                  <Image
                    src={tool.url}
                    alt={tool.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 md:w-20 md:h-20 drop-shadow-md group-hover/item:scale-110 group-hover/item:-translate-y-2 transition-all duration-300"
                  />
                  <span className="absolute -bottom-8 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-sm font-medium text-foreground/70 whitespace-nowrap">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Let's Connect */}
        <section className="relative z-10 w-full">
          <div className="glass-capsule w-full max-w-7xl mx-auto rounded-[2.5rem] p-8 md:p-16 px-6 lg:px-24 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_24px_-4px_rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col items-center text-center">
            {/* Complex Geometry Background Line */}
            <motion.svg className="absolute inset-0 w-full h-full text-accent-yellow/10 pointer-events-none -z-10" viewBox="0 0 1000 1000" fill="none" preserveAspectRatio="none">
              <motion.path 
                d="M -100 800 C 200 1500, 300 -300, 500 300 C 700 900, 300 800, 700 600 C 1100 400, 600 -200, 1000 200 C 1400 600, 1000 1200, 1300 800 C 1600 400, 1400 0, 1640 500" 
                stroke="currentColor" 
                strokeWidth={50} 
                strokeLinecap="round" 
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }} 
                whileInView={{ pathLength: 1 }} 
                transition={{ duration: 6, ease: "easeInOut" }} 
              />
            </motion.svg>

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
          </div>
        </section>

      </div>
    </ViewTransition>
  );
}
