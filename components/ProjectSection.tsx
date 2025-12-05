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
import CircularGallery from "./CircularGallery";

export default function MyWorksPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [floatingIcons, setFloatingIcons] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#013242] via-[#001015] to-[#00080b] relative overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center relative mb-20">
          <h2
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
              My Works
            </span>
          </h2>
          <p className="text-blue-200/80 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore my latest projects showcasing modern web development,
            <br />
            innovative solutions, and clean design principles that bring
            <br />
            ideas to life with cutting-edge technologies.
          </p>
        </section>
      </div>

    </div>
  );
}
