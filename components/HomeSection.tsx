"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Layers, ArrowRight } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [badgeIndex, setBadgeIndex] = useState(0);

  const badges = [
    { label: "Say hi on LinkedIn", icon: <FaLinkedin size={12} />, color: "#60a5fa", href: "https://linkedin.com/in/favazmubarak" },
    { label: "Say hi on WhatsApp", icon: <FaWhatsapp size={12} />, color: "#34d399", href: "https://wa.me/917510363359?text=Hi!" },
  ];

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Rotate badge every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % badges.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentBadge = badges[badgeIndex];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&family=Playfair+Display:ital,wght@1,400;1,500&display=swap');
        @keyframes badge-pulse {
          0%, 100% { box-shadow: 0 0 0 0 transparent; }
          50% { box-shadow: 0 0 0 4px var(--badge-color-glow, rgba(255,255,255,0.04)); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .rotating-border-badge {
          position: relative;
          overflow: hidden;
          z-index: 0;
        }
        .rotating-border-badge::before {
          content: "";
          position: absolute;
          z-index: -2;
          inset: -300%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 150deg,
            var(--badge-color, #60a5fa) 180deg,
            rgba(255, 255, 255, 0.9) 210deg,
            var(--badge-color, #60a5fa) 240deg,
            transparent 270deg
          );
          animation: rotate 3s linear infinite;
        }
        .rotating-border-badge::after {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 1px;
          background: rgba(0, 0, 0, 0.9);
          border-radius: 9999px;
        }
        .rotating-border-badge > * {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

        <div className="flex flex-col items-center text-center w-full px-6">
          {/* Animated pill badge — above FAVAZ, like parthh.in */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            href={currentBadge.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full text-white/70 text-xs font-medium
              border border-transparent transition-all duration-300 group rotating-border-badge"
            style={{
              "--badge-color": currentBadge.color,
              "--badge-color-glow": `${currentBadge.color}33`,
              backdropFilter: "blur(8px)",
              animation: "badge-pulse 3s ease-in-out infinite",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.01em",
              boxShadow: `0 0 20px ${currentBadge.color}15`,
            } as any}
          >
            <span style={{ color: currentBadge.color, transition: "color 0.4s" }}>
              {currentBadge.icon}
            </span>
            <span
              className="transition-all duration-400"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              {currentBadge.label}
            </span>
            <ArrowRight size={11} className="text-white/30 group-hover:translate-x-0.5 transition-transform duration-200" />
          </motion.a>

          {/* FAVAZ */}
          <h1
            className="text-white leading-none select-none w-full text-center flex justify-center items-center overflow-hidden"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(5rem, 17vw, 18rem)",
              fontWeight: 900,
              letterSpacing: "-0.11em",
              lineHeight: 0.85,
            }}
          >
            {"FAVAZ".split("").map((char, index) => (
              <span 
                key={index} 
                className={`relative inline-block py-2 ${
                  (index >= 1 && index <= 3) ? "-mx-[0.06em]" : "-mx-[0.03em]"
                } ${
                  index === 0 ? "mr-[0.04em]" : index === 3 ? "mr-[0.08em]" : ""
                }`}
              >
                <motion.span
                  initial={{ y: "100%" }}
                  animate={mounted ? { y: 0 } : { y: "100%" }}
                  transition={{
                    duration: 1.5,
                    delay: 1.6 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 flex flex-col items-center gap-1"
          >
            <p
              className="text-[#49494f] uppercase"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.7rem, 1.2vw, 1.1rem)",
                letterSpacing: "0.3em",
                fontWeight: 600,
              }}
            >
              I design and build products that
            </p>
            <p
              className="text-white"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
                lineHeight: 1.1,
              }}
            >
              deliver real impact.
            </p>
          </motion.div>

          {/* Download CV */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            href="/IND AHAMMED FAVAZ SOFTWARE DEVELOPER CV.pdf"
            download="AHAMMED FAVAZ SOFTWARE-DEVELOPER CV.pdf"
            className="mt-10 group inline-flex items-center gap-3 px-5 py-2.5 rounded-full
              border border-white/20 text-white text-sm font-medium
              hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="relative w-6 h-6 grid place-items-center bg-white text-black
              rounded-full overflow-hidden group-hover:bg-black group-hover:text-white transition-colors duration-300">
              <svg viewBox="0 0 14 15" fill="currentColor" width="9"
                className="absolute transition-transform duration-300 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]">
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
              </svg>
              <svg viewBox="0 0 14 15" fill="currentColor" width="9"
                className="absolute transition-transform duration-300 delay-100
                  -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0">
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
              </svg>
            </span>
            Download CV
          </motion.a>
        </div>

        {/* Bottom-left: Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-8 left-10 sm:left-14 flex flex-col items-center gap-2 text-center"
        >
          <MapPin size={16} className="text-green-400" strokeWidth={1.5} />
          <div>
            <p className="text-white text-[10px] font-bold tracking-[0.18em] uppercase leading-none">Based in Ernakulam,</p>
            <p className="text-white/40 text-[10px] tracking-[0.18em] uppercase mt-1">Kerala</p>
          </div>
        </motion.div>

        {/* Bottom-right: Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-8 right-10 sm:right-14 flex flex-col items-center gap-2 text-center"
        >
          <Layers size={16} className="text-blue-400" strokeWidth={1.5} />
          <div>
            <p className="text-white text-[10px] font-bold tracking-[0.18em] uppercase leading-none">Software Developer,</p>
            <p className="text-white/40 text-[10px] tracking-[0.18em] uppercase mt-1">&amp; Full Stack</p>
          </div>
        </motion.div>

      </section>
    </>
  );
}