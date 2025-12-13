"use client";
import AboutSection from "@/components/AboutSection";
import ContactPage from "@/components/ContactPage";
import { HeroSection } from "@/components/HomeSection";
import { Navbar } from "@/components/Navbar";
import React from "react";
import LightRays from "../components/LightRays";
import ClickSpark from "../components/ClickSpark";

export default function Home() {
  return (
    <div className="w-full min-h-screen ">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={25}
        sparkCount={8}
        duration={300}
      >
        {/* Your content here */}

        {/* HERO WITH STICKY BACKGROUND IMAGE */}
        <section className="relative w-full h-screen overflow-hidden">
          <div className="absolute w-full h-screen">
            <LightRays
              raysOrigin="top-center"
              raysColor="#0fffff"
              raysSpeed={0.3}
              lightSpread={0.3}
              rayLength={2}
              followMouse={true}
              mouseInfluence={0.3}
              noiseAmount={0}
              distortion={0}
              className="custom-rays"
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col h-full px-6 md:px-12">
            <Navbar />
            <div className="flex flex-col justify-between flex-grow mt-50">
              <HeroSection />
            </div>
          </div>
        </section>

        {/* AFTER HERO → NORMAL WHITE/BLACK BACKGROUND */}
        <div className="bg-[#050914] w-full">
          <AboutSection />
          <ContactPage />
        </div>
      </ClickSpark>
    </div>
  );
}
