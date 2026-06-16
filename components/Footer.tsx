import { Github, Mail, Instagram } from "lucide-react";
import Link from "next/link";
import { LanguageToggleUI } from "./LanguageToggleUI";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="w-full mt-auto py-6 md:py-12 border-t border-foreground/5 bg-background/30 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-foreground/60 text-sm font-medium">
          &copy; {currentYear} Bilal Al Ihsan. All rights reserved.
        </p>
        <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-foreground/10 w-[90%] md:w-auto mx-auto md:mx-0 md:ml-auto gap-y-4 md:gap-y-0">
          <div className="flex items-center justify-center gap-4 md:gap-6 pb-4 md:pb-0 md:pr-6 w-full md:w-auto">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-foreground/5 border border-foreground/5 hover:bg-accent-teal/10 hover:border-accent-teal/20 hover:scale-110 transition-all duration-300 group">
              <Github className="w-5 h-5 text-foreground/70 group-hover:text-accent-teal transition-colors" />
            </Link>
            <Link href="mailto:contact@example.com" className="p-3 rounded-full bg-foreground/5 border border-foreground/5 hover:bg-accent-coral/10 hover:border-accent-coral/20 hover:scale-110 transition-all duration-300 group">
              <Mail className="w-5 h-5 text-foreground/70 group-hover:text-accent-coral transition-colors" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-foreground/5 border border-foreground/5 hover:bg-accent-yellow/10 hover:border-accent-yellow/20 hover:scale-110 transition-all duration-300 group">
              <Instagram className="w-5 h-5 text-foreground/70 group-hover:text-accent-yellow transition-colors" />
            </Link>
          </div>
          <div className="flex items-center justify-center pt-0 pb-0 md:pt-0 md:pl-6 w-full md:w-auto">
            <LanguageToggleUI />
          </div>
        </div>
      </div>
    </footer>
  );
}
