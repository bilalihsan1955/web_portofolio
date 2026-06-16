"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function GlobalLoader() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling while the loading screen is active
  useEffect(() => {
    if (isAppLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isAppLoading]);

  return (
    <AnimatePresence>
      {isAppLoading && (
        <motion.div
          key="global-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground flex items-baseline animate-pulse">
            Bilal<span className="text-accent-teal">.</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
