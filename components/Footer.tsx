import { Github, Mail, Instagram, Linkedin } from "lucide-react";
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
          <div className="flex items-center justify-center gap-6 md:gap-8 pb-4 md:pb-0 md:pr-6 w-full md:w-auto">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-foreground/10 hover:scale-110">
              <Github className="w-5 h-5 text-foreground/70" />
            </Link>
            <Link href="https://www.linkedin.com/in/bilalalihsan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-foreground/10 hover:scale-110">
              <Linkedin className="w-5 h-5 text-foreground/70" />
            </Link>
            <Link href="mailto:contact@example.com" className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-foreground/10 hover:scale-110">
              <Mail className="w-5 h-5 text-foreground/70" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-foreground/10 hover:scale-110">
              <Instagram className="w-5 h-5 text-foreground/70" />
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
