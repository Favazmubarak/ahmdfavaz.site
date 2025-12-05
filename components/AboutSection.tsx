"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-[#0a0a0a] via-[#000a0e] to-[#013242]  text-white overflow-hidden py-32 px-6 md:px-12 lg:px-24">
      {/* Floating Wireframe Icon Left */}
      {/* <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-10 top-1/3 opacity-20 hidden md:block"
      >
        <WireCube />
      </motion.div> */}

      {/* Floating Wireframe Icon Right
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute right-10 top-20 opacity-20 hidden md:block"
      >
        <WireCube />
      </motion.div> */}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* LEFT SIDE TEXT */}
        <div className="lg:w-1/2">
          <p className="text-cyan-400 font-medium tracking-wide mb-4 font_science">
            About Me
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
            I can deliver results that
            <br />
            exceed your expectations.
          </h1>

          <button className="group mt-6 px-6 py-3 rounded-full border border-white/20 flex items-center gap-3 hover:bg-white hover:text-black transition">
            Hire Me Now
            <svg
              width="18"
              height="18"
              fill="currentColor"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
            </svg>
          </button>
        </div>

        {/* RIGHT SIDE DESCRIPTION */}
        <div className="lg:w-1/2 max-w-xl">
          <p className="text-[15px] leading-relaxed text-gray-300 mt-10 mb-5 font-sans font-light">
            Hi, I'm Ahmd Favaz. I'm a software developer focused on building
            reliable, user-centered web applications. I work across the stack,
            combining clean UI development with solid backend engineering to
            deliver fast, stable, and practical solutions. I enjoy turning real
            problems into well-designed products that feel intuitive, perform
            smoothly, and scale with real use.
          </p>

          {/* METRICS
          <div className="flex items-center gap-10 md:gap-20 mt-8">
            <Metric number="312+" label="Project Complete" />
            <Metric number="281+" label="World Clients" />
            <Metric number="10+" label="Years Experience" />
          </div> */}
        </div>
      </div>

      {/* NEON STRIP
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: -100, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 w-full rotate-[-8deg] bg-cyan-400 text-black font-bold 
                   text-xl py-4 px-6 whitespace-nowrap"
      >
        BRANDING • UI/UX DESIGN • DEVELOPMENT • ICONOGRAPHY • PRODUCT DESIGN •
      </motion.div> */}
    </section>
  );
}
//   function WireCube() {
//   return (
//     <svg width="90" height="90" stroke="white" fill="none" strokeWidth="1">
//       <polygon points="45,5 80,25 80,65 45,85 10,65 10,25" />
//       <line x1="45" y1="5" x2="45" y2="45" />
//       <line x1="80" y1="25" x2="45" y2="45" />
//       <line x1="10" y1="25" x2="45" y2="45" />
//     </svg>
//   );
// }
// interface MetricProps {
//   number: string;
//   label: string;
// }

// function Metric({ number, label }: MetricProps) {
//   return (
//     <div className="flex flex-col">
//       <h2 className="text-3xl font-semibold text-[#A6FF00]">{number}</h2>
//       <p className="text-gray-400 text-sm mt-1">{label}</p>
//     </div>
//   );
// }
