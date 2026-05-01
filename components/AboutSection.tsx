"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Sparkles, ArrowUpRight, Mail, MapPin, Globe, Zap, Layers, Cpu } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const RubiksCube = () => {
  return (
    <div className="relative w-32 h-32 perspective-[1000px]">
      <motion.div
        animate={{
          rotateY: [0, 90, 180, 270, 360],
          rotateX: [12, 25, 12, -5, 12],
          rotateZ: [0, 10, -10, 5, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-full h-full relative transform-style-3d"
      >
        {[...Array(27)].map((_, i) => {
          const x = (i % 3) - 1;
          const y = (Math.floor(i / 3) % 3) - 1;
          const z = Math.floor(i / 9) - 1;
          return (
            <div key={i} className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4 transform-style-3d" style={{ transform: `translate3d(${x * 33}px, ${y * 33}px, ${z * 33}px)` }}>
              {[
                { r: "rotateY(0deg)", z: "16px" },
                { r: "rotateY(90deg)", z: "16px" },
                { r: "rotateY(180deg)", z: "16px" },
                { r: "rotateY(-90deg)", z: "16px" },
                { r: "rotateX(90deg)", z: "16px" },
                { r: "rotateX(-90deg)", z: "16px" },
              ].map((face, fi) => (
                <div key={fi} className="absolute inset-0 bg-[#0a0a0a] border-[0.5px] border-white/10 rounded-[2px] overflow-hidden" style={{ transform: `${face.r} translateZ(${face.z})`, backfaceVisibility: "hidden" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-40" />
                  {fi === 0 && x === 1 && y === -1 && <div className="absolute top-1 right-1 w-1 h-1 bg-cyan-400/30 rounded-full blur-[1px]" />}
                </div>
              ))}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

const BentoCard = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-[40px] bg-[#0c0c0c] border border-white/5 p-8 hover:bg-[#0e0e0e] transition-all duration-500 group ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function AboutSection() {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.4], [10, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&display=swap');
      `}</style>
      <section 
        ref={containerRef} 
        className="relative w-full min-h-screen bg-black py-24 px-6 md:px-12 lg:px-24 overflow-hidden z-10"
      >
        {mounted && (
          <motion.div 
            style={{ rotateX, scale, perspective: "1200px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1400px] mx-auto relative z-10"
          >
            {/* Identity Card */}
            <BentoCard className="md:col-span-1 md:row-span-2 flex flex-col justify-between min-h-[600px]">
              <div className="z-10">
                <h3 className="text-4xl xl:text-5xl font-bold tracking-[-0.11em] uppercase leading-none text-white">
                  Favaz <span className="text-white/30 italic font-serif lowercase" style={{ fontFamily: "'Playfair Display', serif" }}>Mubarak</span>
                </h3>
                <div className="flex items-center gap-2 mt-6 text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">
                   <MapPin size={12} className="text-cyan-500/40" /> 
                   <span>ERNAKULAM, IN</span>
                   <span className="w-1 h-1 rounded-full bg-white/10" />
                   <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center"><RubiksCube /></div>
              <div className="flex justify-center items-center gap-10 pt-8 border-t border-white/5">
                 <a href="#"><FaLinkedin size={22} className="text-white/20 hover:text-cyan-400 transition-colors" /></a>
                 <a href="#"><FaGithub size={22} className="text-white/20 hover:text-white transition-colors" /></a>
                 <a href="#"><FaXTwitter size={22} className="text-white/20 hover:text-blue-400 transition-colors" /></a>
              </div>
            </BentoCard>

            {/* Core Card (Wide) */}
            <BentoCard className="md:col-span-2 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-cyan-400/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
                 <Sparkles size={12} /> Digital Craftsmanship
              </div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.11em] uppercase leading-[0.9] text-white mb-10">
                 Interfaces <br />
                 <span className="text-white/30 italic font-serif lowercase" style={{ fontFamily: "'Playfair Display', serif" }}>you can feel.</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                 {["Motion", "Type", "Feedback", "Craft"].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold text-white/30 tracking-[0.2em] uppercase">
                      {tag}
                    </span>
                 ))}
              </div>
            </BentoCard>

            {/* Availability Card */}
            <BentoCard className="md:col-span-1 flex flex-col justify-between">
               <div className="flex justify-between items-start">
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
                 </div>
                 <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full"><span className="text-[8px] font-bold uppercase text-emerald-400 tracking-widest">Active</span></div>
               </div>
               <div>
                 <h3 className="text-xl font-bold text-white uppercase tracking-tighter mb-4">Let's build <br /> something real.</h3>
                 <a href="mailto:hello@favaz.in" className="text-white/20 text-xs font-bold hover:text-white transition-colors">hello@favaz.in</a>
               </div>
            </BentoCard>

            {/* Tech Card */}
            <BentoCard className="md:col-span-2 flex flex-col justify-between">
               <div className="grid grid-cols-2 gap-10">
                  <div>
                     <p className="text-[10px] font-bold text-white/10 uppercase tracking-[0.4em] mb-6">Expertise //</p>
                     <h3 className="text-3xl font-bold text-white tracking-tighter uppercase">High <br /> Logic</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                     <div className="flex items-center gap-3 text-white/20 text-[10px] font-bold uppercase tracking-widest border-b border-white/5 pb-2">
                        <Zap size={12} className="text-cyan-400/40" /> Performance
                     </div>
                     <div className="flex items-center gap-3 text-white/20 text-[10px] font-bold uppercase tracking-widest border-b border-white/5 pb-2">
                        <Layers size={12} className="text-blue-400/40" /> Aesthetics
                     </div>
                     <div className="flex items-center gap-3 text-white/20 text-[10px] font-bold uppercase tracking-widest">
                        <Cpu size={12} className="text-emerald-400/40" /> Efficiency
                     </div>
                  </div>
               </div>
            </BentoCard>

            {/* Global Card */}
            <BentoCard className="md:col-span-2 group/global">
               <div className="flex justify-between items-end h-full">
                  <div>
                     <p className="text-[10px] font-bold text-white/10 uppercase tracking-[0.3em] mb-4">Connectivity //</p>
                     <h3 className="text-3xl font-bold text-white tracking-tighter uppercase">Global <br /> Mindset</h3>
                  </div>
                  <div className="text-right">
                     <span className="text-5xl font-bold text-white/5 tracking-tighter block group-hover/global:text-cyan-400/10 transition-colors">GMT +5:30</span>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-cyan-400/5 to-transparent pointer-events-none" />
            </BentoCard>

          </motion.div>
        )}
      </section>
    </>
  );
}
