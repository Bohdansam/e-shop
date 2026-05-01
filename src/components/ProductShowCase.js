"use client";

import React from "react";
import { motion } from "framer-motion";

const videos = {
  long: [
  {
    title: "YouTube Documentary",
    url: "https://www.youtube.com/embed/PwRO0MEMcVs",
  },
  {
    title: "Client Brand Story",
    url: "https://www.youtube.com/embed/y6bU6ourpp4",
  },
  {
    title: "Full Case Study",
    url: "https://www.youtube.com/embed/0l7ws2GfcMg",
  },
],
  short: [
    {
      title: "Daniel Bitton Shorts",
      url: "https://www.youtube.com/embed//BztC8i8kY8o?feature=share",
    },
    {
      title: "Nathan Shorts",
      url: "https://www.youtube.com/embed/PnfZfBbcjX8?feature=share",
    },
  ],
};

const VideoCard = ({ video }) => {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-video w-full">
        <iframe
          src={video.url}
          title={video.title}
          className="w-full h-full"
          allowFullScreen
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition">
        <p className="text-base md:text-lg font-medium tracking-wide text-white">
          {video.title}
        </p>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="relative px-6 py-28 text-white font-montserrat"
    >

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-20">
          <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-1px] leading-tight">
            Selected{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
              Work
            </span>
          </h2>

          <p className="mt-4 text-white/50 max-w-md text-sm md:text-base leading-relaxed">
            A collection of cinematic edits crafted to hold attention, tell
            stories, and convert viewers into engagement.
          </p>
        </div>

        {/* LONG FORM */}
       {/* LONG FORM */}
<div className="mb-24">
  <h3 className="text-2xl md:text-3xl font-medium mb-8">
    Long Form Videos
  </h3>

  {/* первые 2 */}
  <div className="grid md:grid-cols-2 gap-8 mb-8">
    {videos.long.slice(0, 2).map((video, index) => (
      <VideoCard key={index} video={video} />
    ))}
  </div>

  {/* третье — на всю ширину */}
  <div className="max-w-3xl mx-auto">
    <VideoCard video={videos.long[2]} />
  </div>
</div>

        {/* SHORT FORM */}
        <div>
          <h3 className="text-2xl md:text-3xl font-medium mb-8">
            Short Form Videos
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {videos.short.map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;