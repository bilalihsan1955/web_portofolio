"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageToggleUI } from "./LanguageToggleUI";

export default function FloatingLanguageToggle() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    // IntersectionObserver strictly hides the floating toggle if ANY part of the footer is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <LanguageToggleUI />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
