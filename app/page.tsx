"use client";
import { AboutSection } from "@/components/AboutSection";
import ContactPage from "@/components/ContactPage";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import PortfolioPage from "@/components/ProjectSection";
import React from "react";

export default function Home() {
  return (
      <div className="w-full min-h-screen">

      {/* HERO WITH STICKY BACKGROUND IMAGE */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* Background Image */}
        <div
          className="
          absolute inset-0 
          bg-cover bg-center bg-no-repeat
          max-sm:bg-[center_top]
          "
          style={{ backgroundImage: "url('/ww.png')" }}
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50 max-sm:bg-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col h-full px-6 md:px-12">
          <Navbar />

          <div className="flex flex-col justify-between flex-grow mt-30">
            <HeroSection />
          </div>
        </div>
      </section>

      {/* AFTER HERO → NORMAL WHITE/BLACK BACKGROUND */}
      <div className="bg-[#050914] w-full">
        <AboutSection />
        <PortfolioPage />
        <ContactPage/>
      </div>

    </div>
  );
}
