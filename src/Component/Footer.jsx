import React from "react";
import { motion } from "framer-motion";

export default function WaveFooter() {
  // Animation variants
  const contentVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="relative bg-slate-900 text-white pt-16 pb-10 overflow-hidden">
      {/* Wave Animation */}
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-24 z-10"
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            fill="#0f172a"
            d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,218.7C672,235,768,245,864,224C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </motion.div>

      {/* Footer Content with Animation */}
      <motion.div
        variants={contentVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-20 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Logo */}
        <motion.div
          variants={itemVariant}
          className="flex items-center gap-3 text-cyan-400 font-semibold text-xl"
        >
          <span>Mamundeep ❤️</span>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          variants={itemVariant}
          className="text-sm text-gray-300 text-center md:text-right"
        >
          <p> Developed by Mamuni and Dipun ❤️</p>
          <p className="mt-1">© 2025 Fakir Nayak. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
