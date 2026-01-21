"use client";
import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaChevronDown,
  FaArrowUp,
} from "react-icons/fa";

export function Navbar() {
  const menuItems = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];
  const [hovered, setHovered] = useState<string | null>(null);
  const [showConnect, setShowConnect] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [glowPosition, setGlowPosition] = useState(0);

  /* ✅ NEW: scroll-to-top button state */
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Auto-hide connect popup after 2 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showConnect) {
      timer = setTimeout(() => setShowConnect(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [showConnect]);

  // Auto-hide mobile menu after 2 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showMobileMenu) {
      timer = setTimeout(() => setShowMobileMenu(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [showMobileMenu]);

  // Animate glow when hovering menu items
  useEffect(() => {
    if (hovered) {
      const interval = setInterval(() => {
        setGlowPosition((prev) => (prev + 1) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  /* ✅ NEW: detect scroll position */
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenuItemClick = (item: string) => {
    if (item === "CONTACT") {
      setShowConnect(!showConnect);
    } else {
      console.log(`Navigate to ${item}`);
    }
  };

  /* ✅ NEW: scroll to top handler */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar-glass relative top-6 left-1/2 -translate-x-1/2 px-4 py-2 justify-between items-center bg-transparent backdrop-blur-xl border-1 border-cyan-800/40 rounded-full shadow-xl text-white w-[80%] max-w-3xl z-50 overflow-visible transition-all duration-300 hidden sm:flex">
        {hovered && (
          <div className="absolute inset-0 rounded-full pointer-events-none" />
        )}

        <div className="z-10 text-lg font-semibold tracking-wide text-cyan-400 pl-2 font_science">
          AHMD
        </div>

        <ul className="z-10 flex gap-2 text-sm">
          {menuItems.map((item) => (
            <li
              key={item}
              className="relative px-3 py-2 cursor-pointer group"
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleMenuItemClick(item)}
            >
              <span className="relative z-10 transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="relative z-10">
          <div
            className={`
              absolute right-0 mt-12 w-45 
              bg-transparent backdrop-blur-lg border border-cyan-400/10
              rounded-2xl shadow-lg p-4 flex flex-col gap-2 text-white text-sm
              transition-all duration-500
              ${
                showConnect
                  ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                  : "opacity-0 -translate-y-4 pointer-events-none scale-95"
              }
            `}
          >
            <a className="flex items-center gap-3 px-3 py-2 hover:bg-gray-500/20 rounded-lg">
              <FaEnvelope className="text-red-500/80" />
              <span>Email</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 hover:bg-gray-500/20 rounded-lg">
              <FaWhatsapp className="text-green-500" />
              <span>WhatsApp</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 hover:bg-gray-500/20 rounded-lg">
              <FaPhoneAlt className="text-cyan-500" />
              <span>Call</span>
            </a>
          </div>
        </div>

        <div className="w-8"></div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="navbar-glass relative top-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-transparent backdrop-blur-xl border-1 border-cyan-800/40 rounded-full shadow-xl text-white w-[90%] max-w-xs z-50 transition-all duration-300 flex sm:hidden">
        <div className="relative w-full flex items-center justify-center">
          <div className="text-lg font-semibold tracking-wide text-cyan-400 font_science">
            AHMD
          </div>

          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="absolute right-0 p-1"
          >
            <FaChevronDown
              className={`transition-transform duration-300 ${
                showMobileMenu ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`
            absolute top-full left-0 right-0 mt-3 
            bg-transparent backdrop-blur-lg border border-cyan-400/10
            rounded-2xl shadow-lg p-4 flex flex-col gap-2 text-white text-sm
            transition-all duration-500
            ${
              showMobileMenu
                ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                : "opacity-0 -translate-y-4 pointer-events-none scale-95"
            }
          `}
        >
          {menuItems
            .filter((item) => item !== "CONTACT")
            .map((item) => (
              <button
                key={item}
                onClick={() => {
                  handleMenuItemClick(item);
                  setShowMobileMenu(false);
                }}
                className="px-3 py-2 transition-all duration-200 rounded-lg hover:bg-gray-500/20 text-left hover:text-cyan-400"
              >
                {item}
              </button>
            ))}

          <div className="border-t border-cyan-400/20 mt-2 pt-2">
            <p className="px-3 py-1 text-xs text-cyan-400/60 font-semibold">
              CONTACT
            </p>
            <a className="flex items-center gap-3 px-3 py-2 hover:bg-gray-500/20 rounded-lg">
              <FaEnvelope className="text-red-500/80" /> Email
            </a>
            <a className="flex items-center gap-3 px-3 py-2 hover:bg-gray-500/20 rounded-lg">
              <FaWhatsapp className="text-green-500" /> WhatsApp
            </a>
            <a className="flex items-center gap-3 px-3 py-2 hover:bg-gray-500/20 rounded-lg">
              <FaPhoneAlt className="text-cyan-500" /> Call
            </a>
          </div>
        </div>
      </nav>

      
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`
          fixed bottom-6 right-6 z-50
          h-11 w-11 flex items-center justify-center
          rounded-full
          backdrop-blur-xl
          bg-cyan-800/60 border border-cyan-400/30
          text-cyan-300 shadow-xl
          transition-all duration-500 ease-in-out
          hover:bg-cyan-500/70 hover:scale-110
          ${
            showScrollTop
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95 pointer-events-none"
          }
        `}
      >
        <FaArrowUp />
      </button>
    </>
  );
}

