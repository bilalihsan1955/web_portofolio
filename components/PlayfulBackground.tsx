"use client";

import { motion } from "framer-motion";

export default function PlayfulBackground() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-[100] pointer-events-none overflow-hidden opacity-10">
      <motion.svg
        className="w-full h-full text-accent-teal"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <motion.path
          d="M -100 700 C 200 100, 400 1000, 600 500 C 800 0, 900 900, 1200 400"
          stroke="currentColor"
          strokeWidth={12}
          strokeLinecap="round"
          initial={{ pathLength: 0, y: 0 }}
          animate={{ pathLength: 1, y: [0, -20, 0] }}
          transition={{ 
            pathLength: { duration: 3.5, ease: "easeInOut" },
            y: { duration: 10, ease: "easeInOut", repeat: Infinity }
          }}
        />
      </motion.svg>
    </div>
  );
}
