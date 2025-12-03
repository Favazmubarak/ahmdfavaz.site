"use client";
import React, { useState, useEffect } from "react";
import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaChevronDown } from "react-icons/fa";

export function Navbar() {
  const menuItems = ["HOME", "ABOUT ME", "PROJECTS"];
  const [hovered, setHovered] = useState<string | null>(null);
  const [showConnect, setShowConnect] = useState(false);
  const [glowPosition, setGlowPosition] = useState(0);

  // Auto-hide connect popup after 2 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showConnect) {
      timer = setTimeout(() => setShowConnect(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [showConnect]);

  // Animate glow when hovering menu items
  useEffect(() => {
    if (hovered) {
      const interval = setInterval(() => {
        setGlowPosition((prev) => (prev + 1) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <>
      <style jsx>{`
        @keyframes neon-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(0, 255, 255, 0.5),
                        0 0 10px rgba(0, 255, 255, 0.5),
                        0 0 15px rgba(0, 255, 255, 0.5),
                        0 0 20px rgba(0, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.8),
                        0 0 20px rgba(0, 255, 255, 0.8),
                        0 0 30px rgba(0, 255, 255, 0.6),
                        0 0 40px rgba(0, 255, 255, 0.4);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes border-glow {
          0% { opacity: 0; transform: rotate(0deg) scale(1.5); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: rotate(180deg) scale(1.5); }
        }

          .navbar-glass:hover {
            animation: neon-glow 10s ease-in-out infinite;
          }

          .float-animation {
            animation: float 2s ease-in-out;
          }
      `}</style>

      <nav className="navbar-glass fixed top-6 left-1/2 -translate-x-1/2 px-4 py-2 flex justify-between items-center bg-black/40 backdrop-blur-xl border-1  border-cyan-800/40 rounded-full shadow-xl text-white w-[80%] max-w-3xl z-50 relative overflow-visible transition-all duration-300 hidden sm:flex ">
        {/* Animated border glow on hover */}
        {hovered && (
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            // style={{
            //   // background: `conic-gradient(from ${glowPosition}deg, transparent 0%, rgba(0, 255, 255, 0.6) 10%, transparent 20%)`,
            //   // animation: 'border-glow 2s linear infinite'
            // }}
          />
        )}

        {/* Logo */}
        <div className="z-10 text-lg font-semibold tracking-wide text-cyan-400">
          Ahmd
        </div>

        {/* Center menu items */}
        <ul className="z-10 flex gap-3 text-sm">
          {menuItems.map((item) => (
            <li
              key={item}
              className="relative px-3 py-2 cursor-pointer group"
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered(null)}
            >
           

              <span className="relative z-10 transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Connect Button */}
        <div className="relative z-10">
          <button
            onClick={() => setShowConnect(true)}
            onMouseEnter={() => setHovered("connect")}
            onMouseLeave={() => setHovered(null)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-cyan-800/50 hover:bg-cyan-500/50 border-0 rounded-full ]"
          >
            <span>Connect Me</span>
            <FaChevronDown className={`text-sm transition-transform duration-300 ${showConnect ? 'rotate-180' : ''}`} />
          </button>

          {/* Glass popup card with floating animation */}
         <div
            className={`
              absolute right-0 mt-5 w-45 
              bg-black/60 backdrop-blur-lg border border-cyan-400/10
              rounded-2xl shadow-lg p-4  flex flex-col gap-2 text-white text-sm
              transition-all duration-500
              ${
                showConnect
                  ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                  : "opacity-0 -translate-y-4 pointer-events-none scale-95"
              }
            `}
          >
            <a
              href="mailto:yourmail@example.com"
              className="flex items-center gap-3 px-3 py-2 transition-all duration-200 border border-transparent rounded-lg hover:bg-gray-500/20 group"
            >
              <FaEnvelope className="text-red-500/80" /> 
              <span>Email</span>
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              className="flex items-center gap-3 px-3 py-2 transition-all duration-200 border border-transparent rounded-lg hover:bg-gray-500/20 group"
            >
              <FaWhatsapp className="text-green-500" /> 
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 px-3 py-2 transition-all duration-200 border border-transparent rounded-lg hover:bg-gray-500/20 group"
            >
              <FaPhoneAlt className="text-blue-500" /> 
              <span>Call</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}