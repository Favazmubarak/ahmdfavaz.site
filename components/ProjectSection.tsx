import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Code,
  Zap,
  Cpu,
  Database,
  Layers,
} from "lucide-react";

export default function MyWorksPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <section className="text-center relative mb-20">
          <h2
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white tracking-[-0.04em] uppercase"
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            My Works
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Explore my latest projects showcasing modern web development,
            innovative solutions, and clean design principles that bring
            ideas to life with cutting-edge technologies.
          </p>
        </section>
      </div>
    </div>
  );
}
