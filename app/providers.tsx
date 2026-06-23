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
    "hero.badge": "Web, Mobile & UI/UX Developer",
    "hero.subtitle": "Crafting digital experiences across web, mobile, and UI/UX.",
    "hero.description": "I am a final-year Information Technology (D3) student at Universitas Brawijaya, specializing in web and mobile development, as well as UI/UX design. In addition to my core focus, I also have practical experience in integrating basic IoT systems. I am dedicated to creating functional, user-friendly, and well-structured applications.",
    "hero.btn.work": "View My Work",
    "hero.btn.connect": "Let's Connect",
    "home.featured.title": "Featured Projects",
    "home.featured.desc": "A selection of my recent works across different domains.",
    "home.featured.link": "See all projects",
    "home.tech.title": "Tech Stack (Languages & Frameworks)",
    "home.tools.title": "Tools & Platforms",
    "about.title": "About",
    "about.bio": "As a final-year Information Technology (D3) student at Universitas Brawijaya, I am a passionate programmer and designer focused on mobile applications, web development, and UI/UX design. My main expertise lies in creating intuitive interfaces and robust software architectures for web and mobile platforms. Alongside this, I have foundational experience in developing Internet of Things (IoT) systems, allowing me to understand hardware-software integration. My academic journey has equipped me with strong practical skills to explore modern technologies and deliver effective digital solutions.",
    "about.journey.title": "Education & Organization",
    "about.tech.title": "My Tech Stack",
    "about.connect.title": "Let's Connect",
    "about.connect.desc": "Interested in collaborating or have a project in mind? Let's talk.",
    "about.connect.name": "Your name",
    "about.connect.email": "your@email.com",
    "about.connect.message": "Your message...",
    "about.connect.send": "Send Message",
    "portfolio.title": "My Work.",
    "portfolio.desc": "A collection of my recent works across Mobile Apps, Web Development, and IoT Systems.",
    "portfolio.category.all": "All",
    "project.btn.playstore": "Get it on Google Play",
    "project.btn.website": "Live Demo"
  },
  ID: {
    "nav.home": "Beranda",
    "nav.portfolio": "Portofolio",
    "nav.about": "Tentang",
    "hero.badge": "Web, Mobile & UI/UX Developer",
    "hero.subtitle": "Menciptakan pengalaman digital yang komprehensif di platform web, mobile, dan UI/UX.",
    "hero.description": "Saya adalah mahasiswa tingkat akhir program D3 Teknologi Informasi di Universitas Brawijaya yang berfokus pada pengembangan web, aplikasi mobile, serta desain UI/UX. Di luar fokus utama tersebut, saya juga memiliki pengalaman praktis dalam mengintegrasikan sistem IoT. Saya berdedikasi untuk menciptakan aplikasi yang fungsional, ramah pengguna, dan terstruktur dengan baik.",
    "hero.btn.work": "Lihat Karya Saya",
    "hero.btn.connect": "Mari Terhubung",
    "home.featured.title": "Proyek Unggulan",
    "home.featured.desc": "Pilihan karya terbaru saya di berbagai bidang.",
    "home.featured.link": "Lihat semua proyek",
    "home.tech.title": "Tech Stack (Bahasa & Framework)",
    "home.tools.title": "Alat & Platform",
    "about.title": "Tentang Saya",
    "about.bio": "Sebagai mahasiswa tingkat akhir program D3 Teknologi Informasi di Universitas Brawijaya, saya adalah seorang programmer dan desainer yang bersemangat dalam pengembangan aplikasi mobile, web, dan desain UI/UX. Keahlian utama saya terletak pada pembuatan antarmuka yang intuitif serta arsitektur perangkat lunak yang tangguh untuk platform web maupun mobile. Melengkapi kemampuan tersebut, saya juga memiliki pengalaman dasar dalam membangun sistem IoT (Internet of Things), yang memberi saya pemahaman komprehensif tentang integrasi perangkat lunak dan keras. Perjalanan akademis saya telah memberikan fondasi keterampilan praktis yang kuat untuk terus menghadirkan solusi digital yang efektif.",
    "about.journey.title": "Pendidikan & Organisasi",
    "about.tech.title": "Tech Stack Saya",
    "about.connect.title": "Mari Terhubung",
    "about.connect.desc": "Tertarik untuk berkolaborasi atau memiliki ide proyek? Mari kita bicarakan.",
    "about.connect.name": "Nama Anda",
    "about.connect.email": "email@anda.com",
    "about.connect.message": "Pesan Anda...",
    "about.connect.send": "Kirim Pesan",
    "portfolio.title": "Karya Saya.",
    "portfolio.desc": "Koleksi karya terbaru saya di Aplikasi Mobile, Pengembangan Web, dan Sistem IoT.",
    "portfolio.category.all": "Semua",
    "project.btn.playstore": "Unduh di Google Play",
    "project.btn.website": "Demo Langsung"
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
