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
        <nav className="w-full max-w-7xl mx-auto rounded-full px-6 md:px-8 py-4 bg-white/[0.02] dark:bg-white/[0.02] backdrop-blur-2xl border border-black/[0.05] dark:border-white/[0.05] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex justify-between items-center transition-all duration-300">
          <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight text-foreground hover:text-accent-teal transition-colors">
            Bilal.
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
                className={`relative px-4 py-2 rounded-full text-base font-medium transition-colors ${
                  isActive 
                    ? "bg-accent-teal/10 text-accent-teal font-semibold" 
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
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
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors focus:outline-none"
              aria-label="Toggle Theme"
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
        </nav>
      </header>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 w-11/12 max-w-sm bg-white/[0.02] dark:bg-white/[0.02] backdrop-blur-2xl border border-black/[0.05] dark:border-white/[0.05] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-4 z-40"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href === "/portfolio" && pathname.startsWith("/projects/"));
                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-2xl text-center font-medium transition-colors ${
                      isActive
                        ? "bg-accent-teal/10 text-accent-teal font-semibold"
                        : "text-foreground hover:bg-foreground/5"
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
