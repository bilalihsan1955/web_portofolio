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
    "hero.badge": "Mobile, IoT & Web Developer",
    "hero.subtitle": "Bridging hardware and software through practical engineering.",
    "hero.description": "I build cross-platform mobile apps with Flutter, integrate IoT hardware systems, and develop robust web applications using PHP. Focused on creating reliable and well-structured technical solutions.",
    "hero.btn.work": "View My Work",
    "hero.btn.connect": "Let's Connect",
    "home.featured.title": "Featured Projects",
    "home.featured.desc": "A selection of my recent works across different domains.",
    "home.featured.link": "See all projects",
    "home.tech.title": "Tech Stack (Languages & Frameworks)",
    "home.tools.title": "Tools & Platforms",
    "about.title": "About",
    "about.bio": "I am a developer operating at the intersection of mobile applications, Internet of Things (IoT), and practical web systems. My primary expertise lies in mobile architecture using Flutter, microcontroller programming for IoT sensors, and backend development with PHP. This combination allows me to build complete digital ecosystems—from hardware collecting data in the field to the mobile and web interfaces that process it. I also utilize modern tools like React and Next.js as supplementary technologies to streamline frontend development.",
    "about.journey.title": "Professional Journey",
    "about.tech.title": "My Tech Stack",
    "about.connect.title": "Let's Connect",
    "about.connect.desc": "Interested in collaborating or have a project in mind? Let's talk.",
    "about.connect.name": "Your name",
    "about.connect.email": "your@email.com",
    "about.connect.message": "Your message...",
    "about.connect.send": "Send Message",
    "portfolio.title": "My Work.",
    "portfolio.desc": "A collection of my recent works across Mobile Apps, Web Development, and IoT Systems.",
    "project.btn.playstore": "Get it on Google Play",
    "project.btn.website": "Live Demo"
  },
  ID: {
    "nav.home": "Beranda",
    "nav.portfolio": "Portofolio",
    "nav.about": "Tentang",
    "hero.badge": "Mobile, IoT & Web Developer",
    "hero.subtitle": "Menghubungkan perangkat keras dan perangkat lunak melalui rekayasa praktis.",
    "hero.description": "Saya membangun aplikasi mobile lintas platform dengan Flutter, mengintegrasikan sistem perangkat keras IoT, dan mengembangkan aplikasi web menggunakan PHP. Berfokus pada penciptaan solusi teknis yang andal dan terstruktur.",
    "hero.btn.work": "Lihat Karya Saya",
    "hero.btn.connect": "Mari Terhubung",
    "home.featured.title": "Proyek Unggulan",
    "home.featured.desc": "Pilihan karya terbaru saya di berbagai bidang.",
    "home.featured.link": "Lihat semua proyek",
    "home.tech.title": "Tech Stack (Bahasa & Framework)",
    "home.tools.title": "Alat & Platform",
    "about.title": "Tentang",
    "about.bio": "Saya adalah developer yang bergerak di persimpangan antara aplikasi mobile, Internet of Things (IoT), dan sistem web praktis. Keahlian utama saya terletak pada arsitektur mobile menggunakan Flutter, pemrograman mikrokontroler untuk sensor IoT, serta pengembangan backend dengan PHP. Kombinasi ini memungkinkan saya membangun ekosistem digital yang utuh—mulai dari perangkat keras di lapangan hingga antarmuka aplikasi yang mengolah datanya. Saya juga menggunakan teknologi seperti React dan Next.js sebagai pelengkap untuk efisiensi pengembangan frontend.",
    "about.journey.title": "Perjalanan Profesional",
    "about.tech.title": "Tech Stack Saya",
    "about.connect.title": "Mari Terhubung",
    "about.connect.desc": "Tertarik untuk berkolaborasi atau memiliki ide proyek? Mari kita bicarakan.",
    "about.connect.name": "Nama Anda",
    "about.connect.email": "email@anda.com",
    "about.connect.message": "Pesan Anda...",
    "about.connect.send": "Kirim Pesan",
    "portfolio.title": "Karya Saya.",
    "portfolio.desc": "Koleksi karya terbaru saya di Aplikasi Mobile, Pengembangan Web, dan Sistem IoT.",
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
