"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ViewTransition } from "react";
import { useLanguage } from "@/app/providers";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FileText, X, Images, ChevronLeft, ChevronRight, Linkedin, Mail, Instagram, ArrowRight } from "lucide-react";

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

const contactMethods = [
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: { EN: "Connect on LinkedIn", ID: "Terhubung di LinkedIn" },
    desc: { EN: "Let's build a professional network and explore opportunities.", ID: "Mari bangun jaringan profesional dan jelajahi berbagai peluang." },
    link: {
      name: { EN: "Visit Profile", ID: "Kunjungi Profil" },
      href: "https://www.linkedin.com/in/bilal-al-ihsan-944405269/"
    },
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: { EN: "Email Me", ID: "Email Saya" },
    desc: { EN: "Have a project in mind? Send me an email and let's talk.", ID: "Memiliki ide proyek? Kirimkan email dan mari kita bicarakan." },
    link: {
      name: { EN: "bilalihsan1955@gmail.com", ID: "bilalihsan1955@gmail.com" },
      href: "mailto:bilalihsan1955@gmail.com"
    },
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    title: { EN: "Follow on Instagram", ID: "Ikuti di Instagram" },
    desc: { EN: "See my daily updates, design inspirations, and behind-the-scenes.", ID: "Lihat pembaruan harian, inspirasi desain, dan di balik layar proses saya." },
    link: {
      name: { EN: "Follow @bilalihsan__", ID: "Ikuti @bilalihsan__" },
      href: "https://www.instagram.com/bilalihsan__"
    },
  },
];

const timeline = [
  {
    year: {
      EN: "August 2024 - August 2025",
      ID: "Agustus 2024 - Agustus 2025"
    },
    title: {
      EN: "Member of Provoks (Programmer Vokasi)",
      ID: "Anggota Provoks (Programmer Vokasi)"
    },
    description: {
      EN: "Actively participated as a member of Provoks (Programmer Vokasi), engaging in various activities such as workshops and technical discussions to deepen understanding of backend technologies and the latest industry trends.",
      ID: "Berpartisipasi aktif sebagai anggota Provoks (Programmer Vokasi), terlibat dalam berbagai kegiatan seperti workshop dan diskusi teknis untuk memperdalam pemahaman tentang teknologi backend dan tren industri terbaru."
    }
  },
  {
    year: {
      EN: "August 2023 - Present",
      ID: "Agustus 2023 - Sekarang"
    },
    title: {
      EN: "D3 Information Technology Student",
      ID: "Mahasiswa D3 Teknologi Informasi"
    },
    description: {
      EN: "Universitas Brawijaya, Malang. Focusing on practical software engineering, mobile development, and UI/UX design.",
      ID: "Universitas Brawijaya, Malang. Berfokus pada rekayasa perangkat lunak praktis, pengembangan mobile, dan desain UI/UX."
    }
  }
];

type CertificateType = "image" | "pdf";
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  type: CertificateType;
  images: string[];
}

const mockCertificates: Certificate[] = [
  {
    id: 1,
    title: "Sertifikat BNSP Mobile Programmer",
    issuer: "BNSP",
    date: "2024",
    type: "image",
    images: [
      "/certificate/Sertifikat_BNSP_Mobile_Bilal%20Al%20Ihsan_TTD_page-0001.jpg",
      "/certificate/Sertifikat_BNSP_Mobile_Bilal%20Al%20Ihsan_TTD_page-0002.jpg"
    ]
  }
];

export default function AboutClient() {
  const pathname = usePathname();
  const { t, language } = useLanguage();
  
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCertIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedCertIndex]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCertIndex(null);
        setCurrentPhotoIndex(0);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);



  const selectedCert = selectedCertIndex !== null ? mockCertificates.find(c => c.id === selectedCertIndex) : null;

  const closeCertModal = () => {
    setSelectedCertIndex(null);
    setCurrentPhotoIndex(0);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCert) setCurrentPhotoIndex(prev => (prev === selectedCert.images.length - 1 ? 0 : prev + 1));
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCert) setCurrentPhotoIndex(prev => (prev === 0 ? selectedCert.images.length - 1 : prev - 1));
  };

  const modalContent = (
    <AnimatePresence>
      {selectedCert && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
          {/* Close Button */}
          <button 
            onClick={closeCertModal}
            className="absolute top-6 right-6 z-[10000] p-3 md:p-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-xl"
          >
            <X className="w-6 h-6 md:w-8 md:h-8"/>
          </button>

          {selectedCert.images.length > 1 && (
            <>
              {/* Previous Arrow */}
              <button 
                onClick={prevPhoto}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[10000] w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl transition-all hover:scale-110 hover:bg-white/10 shadow-xl text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Arrow */}
              <button 
                onClick={nextPhoto}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[10000] w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl transition-all hover:scale-110 hover:bg-white/10 shadow-xl text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Container - Borderless & Massive */}
          <div className="relative w-full max-w-[90vw] h-[80vh] md:h-[85vh] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhotoIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                <Image 
                  alt={`${selectedCert.title} - Page ${currentPhotoIndex + 1}`} 
                  className="object-contain drop-shadow-2xl" 
                  fill 
                  sizes="90vw" 
                  src={selectedCert.images[currentPhotoIndex]}
                  priority
                />
              </motion.div>
            </AnimatePresence>
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
            className="lg:col-span-12 py-12 lg:py-24"
          >
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full max-w-6xl mx-auto">
              
              {/* Photo Column */}
              <div className="flex-shrink-0 w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[350px]">
                <div className="w-full h-80 lg:h-[400px] relative bg-white/5 dark:bg-white/[0.03] backdrop-blur-[24px] saturate-[1.2] shadow-[inset_0_0_12px_rgba(255,255,255,0.2),_0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.08),_0_10px_30px_rgba(0,0,0,0.4)] border border-white/20 md:border-[1.5px] md:border-white/40 dark:border-white/10 md:dark:border-white/20 rounded-[2rem] lg:rounded-[2.5rem] transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] cursor-pointer group overflow-hidden">
                  <Image 
                    src="/images/bilal.png"
                    alt="Bilal Ihsan"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 300px, 350px"
                    className="object-cover w-full h-full relative z-0"
                    priority
                  />
                  {/* Natural Corner Highlights */}
                  <div className="absolute -inset-[1px] md:-inset-[1.5px] pointer-events-none rounded-[2rem] lg:rounded-[2.5rem] border border-white/60 md:border-[2px] md:border-white/90 dark:border-white/30 md:dark:border-white/60 mix-blend-overlay shadow-[inset_0_0_12px_rgba(255,255,255,0.3)] md:shadow-[inset_0_0_24px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.1)] md:dark:shadow-[inset_0_0_24px_rgba(255,255,255,0.2)] z-10" style={{ WebkitMaskImage: 'radial-gradient(ellipse 200px 300px at 0% 0%, black 0%, transparent 100%), radial-gradient(ellipse 200px 300px at 0% 100%, black 0%, transparent 100%)', maskImage: 'radial-gradient(ellipse 200px 300px at 0% 0%, black 0%, transparent 100%), radial-gradient(ellipse 200px 300px at 0% 100%, black 0%, transparent 100%)' }}></div>
                </div>
              </div>

              {/* Text Column */}
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight text-foreground relative z-10">
                  {t("about.title")} <span className="text-accent-teal">Me.</span>
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light relative z-10 max-w-3xl">
                  {t("about.bio")}
                </p>
              </div>

            </div>
          </motion.div>

          {/* 2. Tech Stack - Spans 8 Cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`lg:col-span-8 flex flex-col justify-start items-start py-8`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {t("about.tech.title")}
            </h2>
            <div className="flex flex-col gap-10 w-full">
              {[
                {
                  title: "Languages & Frameworks",
                  items: [...techStack, ...toolsPlatforms].filter((t) => ["React", "Next.js", "Laravel", "Flutter", "Tailwind CSS", "JavaScript", "PHP", "CodeIgniter", "Dart", "Three.js"].includes(t.name))
                },
                {
                  title: "Tools",
                  items: [...techStack, ...toolsPlatforms].filter((t) => ["MySQL", "Figma", "Git", "GitHub", "Arduino", "Vercel", "VS Code"].includes(t.name))
                }
              ].map((group) => (
                <div key={group.title} className="flex flex-col items-start text-left w-full">
                  <h3 className="text-xs md:text-sm font-bold uppercase text-foreground/50 tracking-widest mb-6">{group.title}</h3>
                  <div className="flex flex-wrap gap-8 md:gap-10">
                    {group.items.map((tech) => (
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
            className={`lg:col-span-4 flex flex-col py-8`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {t("about.journey.title")}
            </h2>
            <div className="flex flex-col gap-12">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-sm font-bold text-accent-coral tracking-wide mb-2">{item.year[language as "EN" | "ID"]}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 tracking-tight">{item.title[language as "EN" | "ID"]}</h3>
                  <p className="text-foreground/60 text-base leading-relaxed">{item.description[language as "EN" | "ID"]}</p>
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
            className="lg:col-span-12 flex flex-col mt-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {language === "ID" ? "Sertifikat & Pencapaian" : "Certificates & Achievements"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {mockCertificates.map((cert) => (
                <div 
                  key={cert.id} 
                  onClick={() => {
                    setSelectedCertIndex(cert.id);
                    setCurrentPhotoIndex(0);
                  }}
                  className="group/cert cursor-pointer relative bg-white/5 dark:bg-white/[0.03] backdrop-blur-[24px] saturate-[1.2] shadow-[inset_0_0_12px_rgba(255,255,255,0.2),_0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.08),_0_10px_30px_rgba(0,0,0,0.4)] border border-white/20 md:border-[1.5px] md:border-white/40 dark:border-white/10 md:dark:border-white/20 rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-2 flex flex-col gap-4 overflow-hidden"
                >
                  {/* Natural Corner Highlights */}
                  <div className="absolute -inset-[1px] md:-inset-[1.5px] pointer-events-none rounded-3xl border border-white/60 md:border-[2px] md:border-white/90 dark:border-white/30 md:dark:border-white/60 mix-blend-overlay shadow-[inset_0_0_12px_rgba(255,255,255,0.3)] md:shadow-[inset_0_0_24px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.1)] md:dark:shadow-[inset_0_0_24px_rgba(255,255,255,0.2)] z-0" style={{ WebkitMaskImage: 'radial-gradient(ellipse 300px 150px at 20% 0%, black 0%, transparent 100%), radial-gradient(ellipse 150px 150px at 80% 100%, black 0%, transparent 100%)', maskImage: 'radial-gradient(ellipse 300px 150px at 20% 0%, black 0%, transparent 100%), radial-gradient(ellipse 150px 150px at 80% 100%, black 0%, transparent 100%)' }}></div>
                  <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden relative border border-white/10 flex items-center justify-center bg-black/20 z-10">
                    <Image 
                      src={cert.images[0]} 
                      alt={cert.title} 
                      fill 
                      className="object-cover group-hover/cert:scale-105 transition-transform duration-500" 
                    />
                    {cert.images.length > 1 && (
                      <div className="absolute top-2 right-2 z-10 bg-black/20 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 text-[10px] text-white flex items-center gap-1 shadow-lg">
                        <Images className="w-3 h-3" />
                        <span>{cert.images.length}</span>
                      </div>
                    )}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-foreground line-clamp-1">{cert.title}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-foreground/60">{cert.issuer}</span>
                      <span className="text-xs font-semibold px-2 py-1 bg-foreground/10 rounded-md text-foreground/70">{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* 5. Let's Connect - Spans Full Screen Width */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`w-full relative z-10`}
      >
        <section className="pt-14 pb-32 w-full">
            <div className="w-full text-foreground/80 flex flex-col items-center">
                <div className="text-center px-4 max-w-2xl">
                    <h2 className="text-foreground text-4xl font-bold sm:text-5xl">
                        {language === "ID" ? "Tetap Terhubung" : "Keep in touch"}
                    </h2>
                    <p className="mt-3 text-foreground/70">
                        {language === "ID" ? "Saya siap membantu dan menjawab pertanyaan yang mungkin Anda miliki. Saya menantikan pesan dari Anda." : "We’re here to help and answer any question you might have. We look forward to hearing from you."}
                    </p>
                </div>
                <div className="w-full mt-12 px-4 sm:px-8">
                    <ul className="flex flex-col sm:flex-row items-stretch w-full max-w-5xl mx-auto">
                        {contactMethods.map((item, idx) => (
                            <li key={idx} className={`flex-1 flex flex-col items-start gap-4 px-6 md:px-12 py-8 sm:py-0 ${idx !== 0 ? 'border-t sm:border-t-0 sm:border-l border-foreground/10' : ''}`}>
                                <div className="w-12 h-12 shrink-0 rounded-full border border-white/40 dark:border-white/20 bg-white/10 dark:bg-white/[0.05] backdrop-blur-md shadow-[inset_0_0_12px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.1)] flex items-center justify-center text-foreground">
                                    {item.icon}
                                </div>
                                <div className="flex flex-col items-start text-left space-y-2">
                                    <h4 className="text-foreground text-lg font-medium xl:text-xl">
                                        {item.title[language as "EN" | "ID"]}
                                    </h4>
                                    <p className="text-foreground/70">
                                        {item.desc[language as "EN" | "ID"]}
                                    </p>
                                    <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="mt-4 flex w-fit items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-accent-teal bg-accent-teal/10 dark:bg-accent-teal/20 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-[inset_0_0_12px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.1)] hover:bg-accent-teal/20 dark:hover:bg-accent-teal/30 hover:scale-105 transition-all duration-300">
                                        {item.link.name[language as "EN" | "ID"]}
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
      </motion.div>
      
      {mounted && createPortal(modalContent, document.body)}
    </ViewTransition>
  );
}
