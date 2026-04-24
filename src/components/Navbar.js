"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    const offset = 80;

    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="text-lg font-semibold text-white">
          Bohdan | Video Editor
        </div>

        <div className="hidden md:flex space-x-10 text-sm">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-white/60 hover:text-white transition"
            >
              {link.name}
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="md:hidden p-6 flex flex-col space-y-4">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
                className="text-white/70"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;