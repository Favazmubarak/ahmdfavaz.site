"use client";
import { HeroSection } from "@/components/HomeSection";
import { Navbar } from "@/components/Navbar";
import WatchSection from "@/components/WatchSection";
import React from "react";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <WatchSection />
    </div>
  );
}