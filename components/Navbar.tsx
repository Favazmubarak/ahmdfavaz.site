"use client";
import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export function Navbar() {
  const menuItems = ["HOME", "ABOUT", "PROJECTS"];
  const [hovered, setHovered] = useState<string | null>(null);
  const [showConnect, setShowConnect] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarHovered, setNavbarHovered] = useState(false);

  // Auto-hide connect popup after 2 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showConnect) {
      timer = setTimeout(() => setShowConnect(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [showConnect]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const isExpanded = !scrolled || navbarHovered;

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        onMouseEnter={() => setNavbarHovered(true)}
        onMouseLeave={() => setNavbarHovered(false)}
        className={`
          fixed inset-x-0 z-50 mx-auto
          flex items-center
          backdrop-blur-xl
          border border-cyan-800/40
          shadow-xl
          rounded-full
          transition-all duration-700 ease-in-out
          ${
            isExpanded
              ? "top-6 max-w-3xl px-6 py-3 justify-between"
              : "top-6 max-w-[8rem] px-6 py-3 justify-center"
          }
          hidden sm:flex
        `}
      >
        {/* Logo */}
        <div className="z-10 text-lg font-semibold tracking-wide text-cyan-400 transition-all duration-700">
          AHMD
        </div>

        {/* Center menu items */}
        <ul
          className={`
            flex gap-2 text-sm transition-all duration-700 ease-in-out
            ${
              isExpanded
                ? "opacity-100 scale-100 w-auto"
                : "opacity-0 scale-95 pointer-events-none w-0 overflow-hidden"
            }
          `}
        >
          {menuItems.map((item) => (
            <li
              key={item}
              className="relative px-3 py-2 cursor-pointer group whitespace-nowrap"
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="relative z-10 transition-all duration-300 text-white group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Connect Button */}
        <div
          className={`
            relative z-10 transition-all duration-700 ease-in-out
            ${
              isExpanded
                ? "opacity-100 scale-100 w-auto"
                : "opacity-0 scale-95 pointer-events-none w-0 overflow-hidden"
            }
          `}
        >
          <button
            onClick={() => setShowConnect(true)}
            onMouseEnter={() => setHovered("connect")}
            onMouseLeave={() => setHovered(null)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-cyan-800/50 hover:bg-cyan-500/50 border-0 rounded-full whitespace-nowrap text-white"
          >
            <span>Connect Me</span>
            <FaChevronDown
              className={`text-sm transition-transform duration-300 ${
                showConnect ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Glass popup card */}
          <div
            className={`
              absolute right-0 mt-5 w-48
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
            <a
              href="mailto:yourmail@example.com"
              className="flex items-center gap-3 px-3 py-2 transition-all duration-200 border border-transparent rounded-lg hover:bg-cyan-500/20 group"
            >
              <FaEnvelope className="text-red-400" />
              <span>Email</span>
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 transition-all duration-200 border border-transparent rounded-lg hover:bg-cyan-500/20 group"
            >
              <FaWhatsapp className="text-green-400" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 px-3 py-2 transition-all duration-200 border border-transparent rounded-lg hover:bg-cyan-500/20 group"
            >
              <FaPhoneAlt className="text-cyan-400" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="fixed top-0 right-0 z-50 p-4 sm:hidden mobile-menu-container">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-3 text-white transition-all duration-300 border rounded-lg bg-gray-900/80 backdrop-blur-lg border-cyan-800/40 hover:bg-cyan-800/50"
        >
          {mobileMenuOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={`
            absolute right-0 mt-4 w-64
            bg-transparent  border border-cyan-800/40
            rounded-2xl shadow-2xl overflow-hidden
            transition-all duration-500 ease-in-out
            ${
              mobileMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto max-h-96"
                : "opacity-0 -translate-y-4 pointer-events-none max-h-0"
            }
          `}
        >
          {/* Logo in mobile menu */}
          <div className="px-6 py-4 border-b border-cyan-800/40">
            <div className="text-2xl font-semibold tracking-wide text-cyan-400 text-center">
              AHMD
            </div>
          </div>

          {/* Menu Items */}
          <ul className="py-2">
            {menuItems.map((item) => (
              <li
                key={item}
                className="px-6 py-3 transition-all duration-200 cursor-pointer hover:bg-cyan-800/30 hover:text-cyan-400"
              >
                <span className="text-white">{item}</span>
              </li>
            ))}
          </ul>

          {/* Connect Section */}
          <div className="px-6 py-4 border-t border-cyan-800/40">
            <div className="mb-2 text-xs font-semibold tracking-wider text-cyan-400">
              CONNECT WITH ME
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:yourmail@example.com"
                className="flex items-center gap-3 px-3 py-2 text-sm text-white transition-all duration-200 rounded-lg hover:bg-cyan-800/30"
              >
                <FaEnvelope className="text-red-400" />
                <span>Email</span>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 text-sm text-white transition-all duration-200 rounded-lg hover:bg-cyan-800/30"
              >
                <FaWhatsapp className="text-green-400" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 px-3 py-2 text-sm text-white transition-all duration-200 rounded-lg hover:bg-cyan-800/30"
              >
                <FaPhoneAlt className="text-cyan-400" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
