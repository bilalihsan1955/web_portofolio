"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { createContext, useContext, useState, ReactNode } from "react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

type Language = "EN" | "ID";

const dictionary = {
  EN: {
    "nav.home": "Home",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "hero.badge": "Available for new projects 🚀",
    "hero.subtitle": "Building Scalable Web, Mobile, and IoT Solutions.",
    "hero.description": "A Developer and Project Manager specializing in Next.js, Laravel, Flutter, and embedded systems.",
    "hero.btn.work": "View My Work",
    "hero.btn.connect": "Let's Connect",
    "home.featured.title": "Featured Projects",
    "home.featured.desc": "A selection of my recent works across different domains.",
    "home.featured.link": "See all projects",
    "home.tech.title": "Tech Stack (Languages & Frameworks)",
    "home.tools.title": "Tools & Platforms",
    "about.title": "About",
    "about.bio": "I am a Web and Mobile Developer, and a final-year D3 student at Universitas Brawijaya in Malang. I blend my academic foundation with hands-on experience in project management, seamlessly transitioning from Figma UI/UX designs to full-stack deployment and IoT hardware integration.",
    "about.journey.title": "Professional Journey",
    "about.tech.title": "My Tech Stack",
    "about.connect.title": "Let's Connect",
    "about.connect.desc": "Interested in collaborating or have a project in mind? Let's talk.",
    "about.connect.name": "Your name",
    "about.connect.email": "your@email.com",
    "about.connect.message": "Your message...",
    "about.connect.send": "Send Message",
    "portfolio.title": "My Work.",
    "portfolio.desc": "A collection of my recent works across Mobile Apps, Web Development, and IoT Systems."
  },
  ID: {
    "nav.home": "Beranda",
    "nav.portfolio": "Portofolio",
    "nav.about": "Tentang",
    "hero.badge": "Tersedia untuk proyek baru 🚀",
    "hero.subtitle": "Membangun Solusi Web, Mobile, dan IoT yang Skalabel.",
    "hero.description": "Seorang Pengembang dan Manajer Proyek yang berspesialisasi dalam Next.js, Laravel, Flutter, dan sistem tertanam.",
    "hero.btn.work": "Lihat Karya Saya",
    "hero.btn.connect": "Mari Terhubung",
    "home.featured.title": "Proyek Unggulan",
    "home.featured.desc": "Pilihan karya terbaru saya di berbagai bidang.",
    "home.featured.link": "Lihat semua proyek",
    "home.tech.title": "Tech Stack (Bahasa & Framework)",
    "home.tools.title": "Alat & Platform",
    "about.title": "Tentang",
    "about.bio": "Saya adalah Pengembang Web dan Mobile, serta mahasiswa D3 tingkat akhir di Universitas Brawijaya, Malang. Saya memadukan fondasi akademis dengan pengalaman praktis dalam manajemen proyek, bertransisi dengan mulus dari desain UI/UX Figma ke penerapan full-stack dan integrasi perangkat keras IoT.",
    "about.journey.title": "Perjalanan Profesional",
    "about.tech.title": "Tech Stack Saya",
    "about.connect.title": "Mari Terhubung",
    "about.connect.desc": "Tertarik untuk berkolaborasi atau memiliki ide proyek? Mari kita bicarakan.",
    "about.connect.name": "Nama Anda",
    "about.connect.email": "email@anda.com",
    "about.connect.message": "Pesan Anda...",
    "about.connect.send": "Kirim Pesan",
    "portfolio.title": "Karya Saya.",
    "portfolio.desc": "Koleksi karya terbaru saya di Aplikasi Mobile, Pengembangan Web, dan Sistem IoT."
  }
} as const;

type TranslationKey = keyof typeof dictionary.EN;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");
  
  const t = (key: TranslationKey) => {
    return dictionary[language][key] || dictionary["EN"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
