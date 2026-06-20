"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { key: "nav.home" as const, href: "/" },
  { key: "nav.portfolio" as const, href: "/portfolio" },
  { key: "nav.about" as const, href: "/about" },
];

import { useLanguage } from "@/app/providers";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <header className="fixed top-6 inset-x-0 z-50 px-4 md:px-6 lg:px-8 w-full">
        <nav className="relative w-full max-w-7xl mx-auto rounded-full bg-white/5 dark:bg-white/[0.03] backdrop-blur-[24px] saturate-[1.2] shadow-[inset_0_0_12px_rgba(255,255,255,0.2),_0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.08),_0_10px_30px_rgba(0,0,0,0.4)] border border-white/20 md:border-[1.5px] md:border-white/40 dark:border-white/10 md:dark:border-white/20 transition-all duration-300">
          
          {/* Natural Corner Highlights (Masked Border & Inner Glow) */}
          <div 
            className="absolute -inset-[1px] md:-inset-[1.5px] pointer-events-none rounded-full border border-white/60 md:border-[2px] md:border-white/90 dark:border-white/30 md:dark:border-white/60 mix-blend-overlay shadow-[inset_0_0_12px_rgba(255,255,255,0.3)] md:shadow-[inset_0_0_24px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.1)] md:dark:shadow-[inset_0_0_24px_rgba(255,255,255,0.2)]"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 260px 50px at 5% 0%, black 0%, transparent 100%), radial-gradient(ellipse 180px 50px at 95% 0%, black 0%, transparent 100%), radial-gradient(ellipse 320px 40px at 45% 100%, black 0%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse 260px 50px at 5% 0%, black 0%, transparent 100%), radial-gradient(ellipse 180px 50px at 95% 0%, black 0%, transparent 100%), radial-gradient(ellipse 320px 40px at 45% 100%, black 0%, transparent 100%)'
            }}
          ></div>

          {/* Nav Content */}
          <div className="relative z-10 w-full px-6 md:px-8 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-accent-teal transition-colors duration-300">
                  Bilal<span className="text-accent-teal group-hover:text-foreground dark:group-hover:text-accent-teal transition-colors duration-300">.</span>
                </span>
              </Link>
            </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === "/portfolio" && pathname.startsWith("/projects/"));
            return (
              <Link
                key={link.key}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                  isActive 
                    ? "bg-accent-teal/10 text-accent-teal font-semibold shadow-[inset_0_0_0_1px_rgba(20,184,166,0.2)]" 
                    : "text-foreground/70 hover:text-foreground hover:bg-white/5 dark:hover:bg-white/[0.05] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.2)] dark:hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_2px_rgba(255,255,255,0.1)]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {t(link.key)}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-white/5 dark:hover:bg-white/[0.05] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.2)] dark:hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_2px_rgba(255,255,255,0.1)] transition-all duration-300"
              aria-label="Toggle theme"
            >
              {currentTheme === "dark" ? <Sun className="w-5 h-5 text-accent-yellow" /> : <Moon className="w-5 h-5 text-accent-teal" />}
            </button>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/5 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
            </button>
          </div>
        </div>
          </div>
        </nav>
      </header>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 w-11/12 max-w-sm bg-white/5 dark:bg-white/[0.03] backdrop-blur-[24px] saturate-[1.2] shadow-[inset_0_0_12px_rgba(255,255,255,0.2),_0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.08),_0_10px_30px_rgba(0,0,0,0.4)] border border-white/20 dark:border-white/10 rounded-3xl p-4 z-40 overflow-hidden"
          >
            {/* Natural Corner Highlights (Masked Border & Inner Glow) */}
            <div 
              className="absolute -inset-[1px] pointer-events-none rounded-3xl border border-white/60 dark:border-white/30 mix-blend-overlay shadow-[inset_0_0_12px_rgba(255,255,255,0.3)] dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.1)]"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse 160px 40px at 0% 0%, black 0%, transparent 100%), radial-gradient(ellipse 120px 40px at 100% 0%, black 0%, transparent 100%), radial-gradient(ellipse 240px 40px at 45% 100%, black 0%, transparent 100%)',
                maskImage: 'radial-gradient(ellipse 160px 40px at 0% 0%, black 0%, transparent 100%), radial-gradient(ellipse 120px 40px at 100% 0%, black 0%, transparent 100%), radial-gradient(ellipse 240px 40px at 45% 100%, black 0%, transparent 100%)'
              }}
            ></div>
            
            <div className="relative z-10 flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href === "/portfolio" && pathname.startsWith("/projects/"));
                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-2xl text-center font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-accent-teal/10 text-accent-teal font-semibold shadow-[inset_0_0_0_1px_rgba(20,184,166,0.2)]"
                        : "text-foreground/80 hover:text-foreground hover:bg-white/5 dark:hover:bg-white/[0.05] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.2)] dark:hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_2px_rgba(255,255,255,0.1)]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {t(link.key)}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
