"use client";

import React from "react";
import { motion } from "framer-motion";

const contacts = [
  {
    name: "Email",
    value: "bogdansamf20@gmail.com",
    link: "mailto:bogdansamf20@gmail.com",
  },
  {
    name: "WhatsApp",
    value: "+34 637 28 13 12",
    link: "https://wa.me/34637281312",
  },
  {
    name: "Telegram",
    value: "@programju",
    link: "https://t.me/programju",
  },
  {
    name: "Instagram",
    value: "@programju",
    link: "https://www.instagram.com/programju/",
  },
  {
    name: "X (Twitter)",
    value: "@BogdanEditor",
    link: "https://x.com/BogdanEditor",
  },
  {
    name: "Discord",
    value: "@bohdan_50014",
    link: "https://discord.com/users/bohdan_50014",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative px-6 py-32 text-white font-montserrat"
    >
    

      <div className="max-w-5xl mx-auto text-center">

        {/* TITLE */}
        <motion.p
          className="text-white/40 text-xs uppercase tracking-[0.3em] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Contact
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-semibold tracking-[-1px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Let’s work{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            together
          </span>
        </motion.h2>

        <motion.p
          className="mt-6 text-white/50 max-w-md mx-auto text-sm md:text-base"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Got a project or idea? Reach out through any platform below.
          I usually respond within 24 hours.
        </motion.p>

        {/* CONTACT GRID */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-purple-500/40 transition"
            >
              <p className="text-white/40 text-sm mb-2">
                {contact.name}
              </p>

              <p className="text-white text-lg font-medium group-hover:text-purple-400 transition">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA BUTTON (добавил для конверсии) */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <a
            href="mailto:bogdansamf20@gmail.com"
            className="inline-block px-8 py-4 rounded-full bg-purple-500 hover:bg-purple-600 transition font-medium shadow-lg shadow-purple-500/20"
          >
            Start a Project
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;