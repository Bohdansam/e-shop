"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    const offset = 80;

    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 text-white font-montserrat"
    >

      <div className="max-w-5xl mx-auto text-center">

        {/* SMALL LABEL */}
        <motion.p
          className="text-white/50 text-sm mb-6 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Cinematic Video Editor
        </motion.p>

        {/* HEADLINE */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight tracking-[-2px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I craft{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            high-impact
          </span>
          <br />
          video edits
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          className="mt-6 text-white/60 max-w-lg mx-auto text-sm sm:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Clean, engaging and designed to hold attention.
          I help brands and creators stand out through editing.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => scrollToSection("portfolio")}
            className="px-6 py-3 rounded-full bg-purple-500 hover:bg-purple-600 transition font-medium shadow-lg shadow-purple-500/20"
          >
            View Work
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/80 hover:text-white transition"
          >
            Contact Me
          </button>
        </motion.div>

        {/* STATUS */}
        <motion.div
          className="mt-16 text-white/40 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Available for freelance work
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;