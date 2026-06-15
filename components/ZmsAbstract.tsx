"use client";

import { motion } from "framer-motion";

export default function ZmsAbstract() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden flex items-center justify-center opacity-30 dark:opacity-40">
      <motion.svg
        viewBox="0 0 1000 800"
        className="w-[150vw] h-[150vh] max-w-none text-accent-teal dark:text-accent-teal"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="zms-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8" /> {/* Deep Blue */}
            <stop offset="50%" stopColor="#9333EA" stopOpacity="0.8" /> {/* Purple */}
            <stop offset="100%" stopColor="#0D9488" stopOpacity="0.8" /> {/* Teal */}
          </linearGradient>
          <filter id="zms-glow">
            <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Continuous Z-m-S Abstract Path */}
        <motion.path
          d="M 100 250 
             C 400 250, 250 550, 150 550 
             C 500 550, 450 350, 500 450 
             C 550 550, 550 350, 600 450 
             C 650 550, 650 350, 700 450 
             C 750 550, 850 250, 750 200 
             C 600 150, 650 450, 750 500 
             C 850 550, 900 700, 700 750
             C 500 800, 400 600, 550 650"
          stroke="url(#zms-gradient)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#zms-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 5, ease: "easeInOut" }}
        />
        
        {/* Secondary thinner decorative line looping around */}
        <motion.path
          d="M 0 400
             C 300 200, 600 800, 800 400
             C 1000 0, 300 100, 200 600
             C 100 1000, 900 800, 1000 600"
          stroke="url(#zms-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 6, ease: "easeInOut", delay: 1 }}
        />
      </motion.svg>
    </div>
  );
}
