"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative px-6 py-28 text-white font-montserrat"
    >
   

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-[-1px]">
            I turn raw footage into{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
              engaging stories
            </span>
          </h2>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="text-white/60 text-sm md:text-base leading-relaxed space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>
            I specialize in editing content that captures attention and keeps viewers watching.
            From long-form storytelling to short-form viral clips — every cut is made with intention.
          </p>

          <p>
            My focus is not just making videos look good, but making them perform.
            Whether it’s increasing retention, engagement, or conversions — I edit with purpose.
          </p>

          <p>
            Clean, modern, and cinematic — that’s the standard I bring to every project.
          </p>
        </motion.div>

      </div>

      {/* STATS */}
      <motion.div
        className="max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {[
          { value: "50+", label: "Projects" },
          { value: "2M+", label: "Views Generated" },
          { value: "3+", label: "Years Experience" },
          { value: "100%", label: "Client Satisfaction" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="text-3xl md:text-4xl font-semibold text-white">
              {item.value}
            </p>
            <p className="text-white/40 text-sm mt-2">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default AboutSection;