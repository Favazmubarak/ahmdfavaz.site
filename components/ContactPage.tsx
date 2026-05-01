"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

const MaskedLargeTitle = ({ text, italicText = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="overflow-hidden py-4">
      <motion.h2
        initial={{ y: "110%" }}
        animate={isInView ? { y: 0 } : { y: "110%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-[-0.11em] uppercase leading-[0.8] text-white flex flex-wrap items-baseline gap-x-8"
      >
        <span>{text}</span>
        {italicText && (
          <span className="text-white/20 italic font-serif tracking-normal normal-case lg:text-[8rem]" style={{ fontFamily: "'Playfair Display', serif" }}>
            {italicText}
          </span>
        )}
      </motion.h2>
    </div>
  );
};

export default function ContactPage() {
  return (
    <section className="relative w-full bg-black py-32 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-32">
          <p className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-12">Get in touch //</p>
          <MaskedLargeTitle text="LET'S" italicText="work" />
          <MaskedLargeTitle text="TOGETHER" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pb-32 border-b border-white/5">
          {/* Email */}
          <div className="group">
            <p className="text-white/20 uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Email me</p>
            <a href="mailto:favazkoppath10@gmail.com" className="text-2xl md:text-3xl font-medium text-white/60 group-hover:text-cyan-400 transition-all duration-500 block relative overflow-hidden">
               <span className="block group-hover:-translate-y-full transition-transform duration-500">favazkoppath10@gmail.com</span>
               <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-500">Say Hello <ArrowUpRight className="inline ml-2" /></span>
            </a>
          </div>

          {/* Call */}
          <div className="group">
            <p className="text-white/20 uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Call me</p>
            <a href="tel:+917510363359" className="text-2xl md:text-3xl font-medium text-white/60 group-hover:text-cyan-400 transition-all duration-500 block relative overflow-hidden">
               <span className="block group-hover:-translate-y-full transition-transform duration-500">+91 7510363359</span>
               <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-500">Let's talk <ArrowUpRight className="inline ml-2" /></span>
            </a>
          </div>

          {/* Location */}
          <div className="group">
            <p className="text-white/20 uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Location</p>
            <div className="text-2xl md:text-3xl font-medium text-white/60 group-hover:text-cyan-400 transition-all duration-500 block">
               Ernakulam, Kerala <br />
               <span className="text-sm text-white/20 uppercase tracking-widest font-bold">India</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-20 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex gap-10">
            <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">Instagram</a>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/10">
            © 2024 Favaz Mubarak • Crafting Digital Experiences
          </div>
        </div>
      </div>
    </section>
  );
}