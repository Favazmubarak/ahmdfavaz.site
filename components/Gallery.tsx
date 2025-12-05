import { useState } from "react";
import { Menu, Send, Facebook, Instagram, Music } from "lucide-react";
import CircularGallery from "./CircularGallery";

export default function ContactPage() {
  return (
    <div className="h-fit bg-gradient-to-b from-black via-cyan-400/20 to-black relative overflow-hidden">
      <div style={{ height: "400px", position: "relative", bottom: "0" }}>
        <CircularGallery
          bend={0}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </div>
  );
}
