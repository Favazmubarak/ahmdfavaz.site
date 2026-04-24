"use client";
import AboutSection from "@/components/AboutSection";
import ContactPage from "@/components/ContactPage";
import { HeroSection } from "@/components/HomeSection";
import { Navbar } from "@/components/Navbar";
import React from "react";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <div className="bg-[#050914] w-full">
        <AboutSection />
        <ContactPage />
      </div>
    </div>
  );
}