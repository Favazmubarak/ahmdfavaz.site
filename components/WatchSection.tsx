"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Copy, Check } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const WatchCanvas = dynamic(
  () => import("./WatchScene").then((m) => m.WatchCanvas),
  { ssr: false }
);

const RubiksCube = dynamic(
  () => import("./RubiksCube").then((m) => m.RubiksCube),
  { ssr: false, loading: () => <div className="w-full h-full bg-[#080808]" /> }
);

function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <>{time} IST</>;
}

function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 text-[11px] text-white/30 hover:text-white/60 transition-colors mt-2 group"
    >
      {copied ? <Check size={10} className="text-green-400" /> : <Copy size={10} />}
      {copied ? "Copied!" : "Tap to copy email"}
    </button>
  );
}

export default function WatchSection() {
  const rowHeight = 460; 
  const gap = 8; 
  const clockRadius = 230; 
  const socketTop = rowHeight + (gap / 2);

  return (
    <section className="w-full bg-[#000000] py-24 px-12 font-sans overflow-hidden">
      <div className="max-w-[1300px] mx-auto relative">
        
        {/* ROW 1: TRIPLE CARD GRID - EXACT REFERENCE ALIGNMENT */}
        <div className={`flex flex-wrap md:flex-nowrap gap-[${gap}px] h-auto md:h-[${rowHeight}px] w-full relative z-10`}>
          
          {/* Card 1 (LEFT) - Profile */}
          <div className="w-full md:w-[23%] bg-[#080808] rounded-[32px] pl-[28px] pr-[20px] py-[40px] flex flex-col justify-between border border-white/[0.05] relative overflow-hidden group">
            {/* Subtle Diagonal Sheen */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-white text-3xl tracking-tighter leading-none mb-1 flex items-baseline gap-1.5">
                <span className="font-bold uppercase">FAVAZ</span> 
                <span className="text-white/40 italic font-light text-3xl" style={{ fontFamily: "'Instrument Serif', serif" }}>mubarak</span>
              </h3>
              <div className="mt-2.5 flex items-center gap-1.5 opacity-40">
                <MapPin size={9} />
                <p className="text-[8.5px] uppercase tracking-[0.2em] font-bold">
                  ERNAKULAM, IN · <LiveClock />
                </p>
              </div>
            </div>
            
            {/* Rubik's Cube Container - Perfectly Centered */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-8">
               <div className="w-[110%] h-[110%] scale-100 opacity-90 transition-opacity group-hover:opacity-100">
                  <RubiksCube />
               </div>
            </div>

            {/* Social Icons - Centered with Divider like reference */}
            <div className="relative z-10 w-full pt-6 border-t border-white/[0.03]">
              <div className="flex items-center justify-center gap-6">
                {[
                  { icon: <FaLinkedin size={14} />, href: "#" },
                  { icon: <FaGithub size={14} />, href: "#" },
                  { icon: <FaXTwitter size={13} />, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/40 transition-all duration-300 bg-black/20"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 (MIDDLE) - Philosophy */}
          <div 
            className="w-full md:w-[50%] bg-[#080808] rounded-[32px] p-[40px] flex flex-col justify-between border border-white/[0.05] relative overflow-hidden"
            style={{ 
              height: `${rowHeight}px`,
              maskImage: `radial-gradient(circle ${clockRadius}px at 50% 100%, transparent 99%, black 100%)`,
              WebkitMaskImage: `radial-gradient(circle ${clockRadius}px at 50% 100%, transparent 99%, black 100%)`
            }}
          >
            {/* Top Bar */}
            <div className="flex justify-between items-start relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40">
                  <ArrowUpRight size={12} className="rotate-45" />
                </div>
                <span className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-bold">DETAIL-DRIVEN UI</span>
              </div>
              <div className="flex items-center gap-1 text-white/20">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold">PHILOSOPHY</span>
                <span className="text-xs">+</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-10 relative z-10 pb-20">
              <div className="max-w-[280px]">
                <h2 className="text-white font-bold text-5xl tracking-tight leading-none">
                  Interfaces
                </h2>
                <p className="text-white/40 text-3xl italic font-light mt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  you can feel.
                </p>
                <p className="text-white/20 text-[11px] mt-6 leading-relaxed">
                  I sweat spacing, timing, and feedback — the tiny stuff.
                </p>
              </div>

              <div className="flex flex-col items-end gap-6">
                {/* Tags */}
                <div className="flex gap-2">
                  {["Motion", "Type", "Feedback", "Craft"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full border border-white/10 text-[9px] text-white/40 uppercase tracking-widest hover:border-white/30 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Micro-interaction note */}
                <div className="text-right max-w-[160px]">
                  <h4 className="text-white font-bold text-[11px] uppercase tracking-wider mb-2">Micro-interactions</h4>
                  <p className="text-white/20 text-[9px] leading-relaxed italic">
                    Subtle movement that confirms intent — never distracting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 (RIGHT) - Let's Build Something */}
          <div className="w-full md:w-[27%] h-full bg-[#080808] rounded-[32px] p-[40px] flex flex-col justify-between border border-white/[0.05] relative overflow-hidden group">
            <div className="flex justify-between items-start relative z-10">
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </div>
              <div className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold">Available for work</span>
              </div>
            </div>

            <div className="relative z-10 mt-12">
               <h2 className="text-white font-bold text-3xl tracking-tight leading-none uppercase">
                 Let&apos;s build<br/>something
               </h2>
               <p className="text-white/30 text-xl italic font-light mt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
                 that actually works.
               </p>
            </div>

            <div className="relative z-10 w-full pt-8 space-y-8">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors cursor-pointer group/mail">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/mail:border-white/20">
                     <ArrowUpRight size={12} className="text-white/40" />
                  </div>
                  <span className="text-lg font-medium tracking-tight">hello@favaz.in</span>
                </div>
                <span className="text-[8px] text-white/20 uppercase tracking-[0.3em] font-bold">TAP TO COPY EMAIL</span>
              </div>

              <button className="w-full bg-white text-black py-4 rounded-2xl text-[11px] uppercase tracking-[0.2em] font-black hover:bg-white/90 transition-all flex items-center justify-center gap-2 group-hover:scale-[0.98]">
                CONNECT NOW <ArrowUpRight size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* THE GIANT CLOCK SOCKET */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
          style={{ top: `${socketTop}px` }}
        >
           <div className="relative w-[460px] h-[460px] rounded-full bg-black flex items-center justify-center border border-white/[0.08] shadow-[0_0_180px_rgba(0,0,0,1)] pointer-events-auto">
              <WatchCanvas />
              <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-[20px] h-[1px] bg-white/10" />
              <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[20px] h-[1px] bg-white/10" />
           </div>
        </div>

        {/* ROW 2: TWO CARDS */}
        <div className={`flex flex-wrap md:flex-nowrap gap-[${gap}px] h-auto md:h-[520px] w-full pt-[${gap}px] relative z-10`}>
          
          {/* Card 4 (LEFT) */}
          <div 
            className="w-full md:w-1/2 bg-[#0d0d0d] rounded-[24px] p-[56px] flex flex-col justify-between border border-white/[0.05] relative overflow-hidden"
            style={{ 
              height: `520px`,
              maskImage: `radial-gradient(circle ${clockRadius}px at 100% 0%, transparent 99%, black 100%)`,
              WebkitMaskImage: `radial-gradient(circle ${clockRadius}px at 100% 0%, transparent 99%, black 100%)`
            }}
          >
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white/[0.015] font-black text-[320px] select-none tracking-tighter">WORLD</span>
             </div>
             <div className="relative z-10">
                <span className="text-[13px] text-teal-500 font-bold tracking-widest uppercase mb-10 block">AVAILABLE GLOBALLY</span>
                <h3 className="text-white font-black text-6xl md:text-7xl tracking-tighter leading-none">
                  Adaptable across<br/>time zones
                </h3>
             </div>
             <div className="relative z-10 flex gap-20 mt-auto">
                <div className="flex flex-col">
                   <span className="text-[16px] text-white/50 font-black uppercase tracking-widest">IST India</span>
                   <span className="text-[12px] text-white/20 uppercase">GMT +5:30</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-[16px] text-white/50 font-black uppercase tracking-widest">Remote</span>
                   <span className="text-[12px] text-white/20 uppercase">Worldwide</span>
                </div>
             </div>
          </div>

          {/* Card 5 (RIGHT) */}
          <div 
            className="w-full md:w-1/2 bg-gradient-to-br from-[#1a1025] to-[#0a0a0a] rounded-[24px] p-[56px] flex flex-col justify-between border border-white/[0.05] overflow-hidden group relative"
            style={{ 
              height: `520px`,
              maskImage: `radial-gradient(circle ${clockRadius}px at 0% 0%, transparent 99%, black 100%)`,
              WebkitMaskImage: `radial-gradient(circle ${clockRadius}px at 0% 0%, transparent 99%, black 100%)`
            }}
          >
             <div className="flex justify-between items-start">
                <div>
                   <h3 className="text-white font-black text-7xl tracking-tighter leading-none">
                      Founder of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Rune</span>
                   </h3>
                   <p className="text-white/20 text-[13px] font-bold mt-8 tracking-[0.5em] uppercase">
                      DIGITAL EXPERIENCES
                   </p>
                </div>
             </div>
             <div className="relative flex-1 mt-16">
                <div className="absolute right-0 bottom-[-100px] w-72 h-[480px] bg-black border border-white/10 rounded-[4rem] transform rotate-6 transition-transform duration-700 group-hover:rotate-0 shadow-2xl" />
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
