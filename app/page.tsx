"use client";
import AboutSection from "@/components/AboutSection";
import ContactPage from "@/components/ContactPage";
import { HeroSection } from "@/components/HomeSection";
import { Navbar } from "@/components/Navbar";
import React from "react";
import ClickSpark from "../components/ClickSpark";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={25}
        sparkCount={8}
        duration={300}
      >
        <Navbar />
        <HeroSection />
        <div className="bg-[#050914] w-full">
          <AboutSection />
          <ContactPage />
        </div>
      </ClickSpark>
    </div>
  );
}