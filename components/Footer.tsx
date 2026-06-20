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
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 dark:bg-white/[0.03] backdrop-blur-[24px] saturate-[1.2] shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/20 md:border-[1.5px] md:border-white/40 dark:border-white/10 md:dark:border-white/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 overflow-hidden group">
              <div className="absolute -inset-[1px] md:-inset-[1.5px] pointer-events-none rounded-full border border-white/60 md:border-[2px] md:border-white/90 dark:border-white/30 md:dark:border-white/60 mix-blend-overlay shadow-[inset_0_0_8px_rgba(255,255,255,0.3)] md:shadow-[inset_0_0_12px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] md:dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.2)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{ WebkitMaskImage: 'radial-gradient(ellipse 20px 10px at 15% 0%, black 0%, transparent 100%), radial-gradient(ellipse 20px 10px at 85% 0%, black 0%, transparent 100%), radial-gradient(ellipse 30px 10px at 50% 100%, black 0%, transparent 100%)', maskImage: 'radial-gradient(ellipse 20px 10px at 15% 0%, black 0%, transparent 100%), radial-gradient(ellipse 20px 10px at 85% 0%, black 0%, transparent 100%), radial-gradient(ellipse 30px 10px at 50% 100%, black 0%, transparent 100%)' }}></div>
              <Github className="w-4 h-4 text-foreground/80 relative z-10 group-hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/bilalalihsan" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 dark:bg-white/[0.03] backdrop-blur-[24px] saturate-[1.2] shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/20 md:border-[1.5px] md:border-white/40 dark:border-white/10 md:dark:border-white/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 overflow-hidden group">
              <div className="absolute -inset-[1px] md:-inset-[1.5px] pointer-events-none rounded-full border border-white/60 md:border-[2px] md:border-white/90 dark:border-white/30 md:dark:border-white/60 mix-blend-overlay shadow-[inset_0_0_8px_rgba(255,255,255,0.3)] md:shadow-[inset_0_0_12px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] md:dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.2)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{ WebkitMaskImage: 'radial-gradient(ellipse 20px 10px at 15% 0%, black 0%, transparent 100%), radial-gradient(ellipse 20px 10px at 85% 0%, black 0%, transparent 100%), radial-gradient(ellipse 30px 10px at 50% 100%, black 0%, transparent 100%)', maskImage: 'radial-gradient(ellipse 20px 10px at 15% 0%, black 0%, transparent 100%), radial-gradient(ellipse 20px 10px at 85% 0%, black 0%, transparent 100%), radial-gradient(ellipse 30px 10px at 50% 100%, black 0%, transparent 100%)' }}></div>
              <Linkedin className="w-4 h-4 text-foreground/80 relative z-10 group-hover:text-foreground transition-colors" />
            </Link>
            <Link href="mailto:contact@example.com" className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 dark:bg-white/[0.03] backdrop-blur-[24px] saturate-[1.2] shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/20 md:border-[1.5px] md:border-white/40 dark:border-white/10 md:dark:border-white/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 overflow-hidden group">
              <div className="absolute -inset-[1px] md:-inset-[1.5px] pointer-events-none rounded-full border border-white/60 md:border-[2px] md:border-white/90 dark:border-white/30 md:dark:border-white/60 mix-blend-overlay shadow-[inset_0_0_8px_rgba(255,255,255,0.3)] md:shadow-[inset_0_0_12px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] md:dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.2)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{ WebkitMaskImage: 'radial-gradient(ellipse 20px 10px at 15% 0%, black 0%, transparent 100%), radial-gradient(ellipse 20px 10px at 85% 0%, black 0%, transparent 100%), radial-gradient(ellipse 30px 10px at 50% 100%, black 0%, transparent 100%)', maskImage: 'radial-gradient(ellipse 20px 10px at 15% 0%, black 0%, transparent 100%), radial-gradient(ellipse 20px 10px at 85% 0%, black 0%, transparent 100%), radial-gradient(ellipse 30px 10px at 50% 100%, black 0%, transparent 100%)' }}></div>
              <Mail className="w-4 h-4 text-foreground/80 relative z-10 group-hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 dark:bg-white/[0.03] backdrop-blur-[24px] saturate-[1.2] shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/20 md:border-[1.5px] md:border-white/40 dark:border-white/10 md:dark:border-white/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 overflow-hidden group">
              <div className="absolute -inset-[1px] md:-inset-[1.5px] pointer-events-none rounded-full border border-white/60 md:border-[2px] md:border-white/90 dark:border-white/30 md:dark:border-white/60 mix-blend-overlay shadow-[inset_0_0_8px_rgba(255,255,255,0.3)] md:shadow-[inset_0_0_12px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] md:dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.2)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{ WebkitMaskImage: 'radial-gradient(ellipse 20px 10px at 15% 0%, black 0%, transparent 100%), radial-gradient(ellipse 20px 10px at 85% 0%, black 0%, transparent 100%), radial-gradient(ellipse 30px 10px at 50% 100%, black 0%, transparent 100%)', maskImage: 'radial-gradient(ellipse 20px 10px at 15% 0%, black 0%, transparent 100%), radial-gradient(ellipse 20px 10px at 85% 0%, black 0%, transparent 100%), radial-gradient(ellipse 30px 10px at 50% 100%, black 0%, transparent 100%)' }}></div>
              <Instagram className="w-4 h-4 text-foreground/80 relative z-10 group-hover:text-foreground transition-colors" />
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
