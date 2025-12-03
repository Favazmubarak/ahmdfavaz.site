"use client";
import { AboutSection } from "@/components/AboutSection";
import ContactPage from "@/components/ContactPage";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import PortfolioPage from "@/components/ProjectSection";
import React from "react";
// import Silk from "../components/Silk";
import LightRays from '../components/LightRays';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      {/* HERO WITH STICKY BACKGROUND IMAGE */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute w-full h-screen">
  <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
</div>

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
        <ContactPage />
      </div>
    </div>
  );
}
