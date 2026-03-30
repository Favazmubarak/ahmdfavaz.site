"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link2, Phone } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [navWidth, setNavWidth] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  // Measure navbar width so we can calculate exact right-aligned x offset
  useEffect(() => {
    if (!navRef.current) return;
    const ro = new ResizeObserver(() => {
      if (navRef.current) setNavWidth(navRef.current.offsetWidth);
    });
    ro.observe(navRef.current);
    setNavWidth(navRef.current.offsetWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setShowMore(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Always: position left:50%, then translate x to position it.
  // center  → x = -50% of navWidth  (true center)
  // right   → x = 50vw - navWidth - 16px  (right-aligned with 16px margin)
  // We compute pixel values so the spring animates a single number cleanly.
  const getTargetX = () => {
    if (typeof window === "undefined" || navWidth === 0) return 0;
    if (scrolled) {
      return -(navWidth / 2); // center
    } else {
      // right edge: left:50% means we're at center, push right to (50vw - navWidth - 16)
      return window.innerWidth / 2 - navWidth - 16;
    }
  };

  const rawX = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 30, mass: 0.6 });

  useEffect(() => {
    rawX.set(getTargetX());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled, navWidth]);

  // Recalculate on window resize
  useEffect(() => {
    const onResize = () => rawX.set(getTargetX());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled, navWidth]);

  const navItems = ["Home", "About", "Work", "Contact"];

  const font: React.CSSProperties = { fontFamily: "'Inter', system-ui, -apple-system, sans-serif" };

  return (
    <>
      {/* ── Top-left AF branding — fades out on scroll ── */}
      <motion.div
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -6 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-2 left-0 z-[100] flex items-center gap-2.5 px-5 py-[18px] pointer-events-none select-none"
        style={font}
      >
        <span style={{ ...font, color: "#fff", fontWeight: 800, fontSize: "25px", letterSpacing: "-0.02em" }}>
          AF
        </span>
        <span className="w-[5px] h-[5px] rounded-full bg-emerald-400 shrink-0" />
        <div className="flex flex-col gap-[2px]">
          <span style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, color: "rgba(255,255,255,0.45)", lineHeight: 1 }}>
            Software Developer
          </span>
          <span style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, color: "#34d399", lineHeight: 1 }}>
            Building The Future
          </span>
        </div>
      </motion.div>

      {/* ── Navbar — always left:50%, x-transform moves it right or center ── */}
      <motion.nav
        ref={navRef}
        style={{ x, left: "50%", fontFamily: font.fontFamily }}
        className="fixed top-6 z-[100]"
      >
        <div
          className="flex items-center rounded-full border border-white/[0.08]"
          style={{
            background: "rgba(18, 18, 18, 0.72)",
            backdropFilter: "blur(0px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: "6px",
            gap: "5px",
            boxShadow: "0 2px 20px rgba(0,0,0,2.35), inset 0 0.5px 0 rgba(255,255,255,0.02)",
            whiteSpace: "nowrap",
          }}
        >
          {navItems.map((item) => (
            <NavItem key={item} label={item} active={item === "Home"} />
          ))}

          {/* More */}
          <div ref={moreRef} className="relative">
            <button
              onClick={() => setShowMore((v) => !v)}
              className="flex items-center rounded-full transition-colors duration-150"
              style={{
                padding: "6px 13px",
                fontSize: "13.5px",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                lineHeight: 1,
                gap: "4px",
                color: showMore ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)",
                background: showMore ? "rgba(255,255,255,0.08)" : "transparent",
                border: "none",
                cursor: "pointer",
                ...font,
              }}
            >
              More
              <motion.svg
                width="10" height="10" viewBox="0 0 10 10" fill="none"
                animate={{ rotate: showMore ? 180 : 0 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                style={{ display: "block" }}
              >
                <path d="M1.5 3.5L5 7L8.5 3.5" stroke="currentColor" strokeWidth="1.4"
                  strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </button>

            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: -4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -4 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full right-0 mt-2 w-[288px] rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(12, 12, 12, 0.97)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
                    transformOrigin: "top right",
                    ...font,
                  }}
                >
                  <div style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>

                    {/* Links header */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", borderRadius: "10px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Link2 size={14} style={{ color: "rgba(255,255,255,0.65)" }} />
                      </div>
                      <div>
                        <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "13px", fontWeight: 600, lineHeight: 1, marginBottom: "3px" }}>Links</p>
                        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px" }}>Socials &amp; Profiles</p>
                      </div>
                    </div>

                    {/* Social grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                      {[
                        { href: "https://github.com/yourhandle", icon: <FaGithub size={13} />, label: "GitHub", color: "rgba(255,255,255,0.55)" },
                        { href: "https://linkedin.com/in/yourhandle", icon: <FaLinkedin size={13} />, label: "LinkedIn", color: "#60a5fa" },
                        { href: "https://instagram.com/yourhandle", icon: <FaInstagram size={13} />, label: "Instagram", color: "#f472b6" },
                        { href: "mailto:favazkoppath10@gmail.com", icon: <FaEnvelope size={13} />, label: "Email", color: "#f87171" },
                      ].map(({ href, icon, label, color }) => (
                        <DropdownLink key={label} href={href} icon={icon} label={label} iconColor={color} font={font} />
                      ))}
                    </div>

                    <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "2px 0" }} />
                    <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "0 2px" }}>Contact</p>

                    <DropdownContact
                      href="https://wa.me/917510363359?text=Hi%2C%20I%20am%20interested%20in%20hiring%20you."
                      icon={<FaWhatsapp size={14} />}
                      iconColor="#34d399"
                      title="WhatsApp"
                      sub="+91 7510363359"
                      font={font}
                      external
                    />
                    <DropdownContact
                      href="tel:+917510363359"
                      icon={<Phone size={14} />}
                      iconColor="#22d3ee"
                      title="Call Me"
                      sub="+91 7510363359"
                      font={font}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.1)", margin: "0 2px", flexShrink: 0 }} />

          {/* Book a Call */}
          <BookCallBtn font={font} />
        </div>
      </motion.nav>
    </>
  );
}

/* ── Small sub-components to keep JSX clean ── */

function NavItem({ label, active }: { label: string; active: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: active ? "7px 16px" : "6px 13px",
        fontSize: active ? "14px" : "13.5px",
        fontWeight: active ? 600 : 400,
        letterSpacing: active ? "-0.02em" : "-0.01em",
        lineHeight: 1,
        borderRadius: "999px",
        border: "none",
        cursor: "pointer",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        transition: "background 0.15s, color 0.15s",
        color: active ? "#000" : hovered ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.6)",
        background: active ? "#fff" : hovered ? "rgba(255,255,255,0.08)" : "transparent",
      }}
    >
      {label}
    </button>
  );
}

function BookCallBtn({ font }: { font: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="https://wa.me/917510363359?text=Hi%2C%20I%20want%20to%20book%20a%20call%20with%20you."
      target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...font,
        padding: "7px 16px",
        fontSize: "13.5px",
        fontWeight: 500,
        letterSpacing: "-0.01em",
        lineHeight: 1,
        borderRadius: "999px",
        border: "1px solid rgba(255,255,255,0.25)",
        textDecoration: "none",
        transition: "background 0.2s, color 0.2s, border-color 0.2s",
        color: hovered ? "#000" : "#fff",
        background: hovered ? "#fff" : "transparent",
        borderColor: hovered ? "#fff" : "rgba(255,255,255,0.25)",
        whiteSpace: "nowrap",
        cursor: "pointer",
        display: "inline-block",
      }}
    >
      Book a Call
    </a>
  );
}

function DropdownLink({ href, icon, label, iconColor, font }: {
  href: string; icon: React.ReactNode; label: string; iconColor: string; font: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...font,
        display: "flex", alignItems: "center", gap: "8px",
        padding: "9px 10px", borderRadius: "10px",
        background: hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
        textDecoration: "none", transition: "background 0.15s",
        color: iconColor,
      }}
    >
      {icon}
      <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "12px" }}>{label}</span>
    </a>
  );
}

function DropdownContact({ href, icon, iconColor, title, sub, font, external }: {
  href: string; icon: React.ReactNode; iconColor: string;
  title: string; sub: string; font: React.CSSProperties; external?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...font,
        display: "flex", alignItems: "center", gap: "10px",
        padding: "10px 12px", borderRadius: "10px",
        background: hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
        textDecoration: "none", transition: "background 0.15s",
        color: iconColor,
      }}
    >
      {icon}
      <div>
        <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "13px", fontWeight: 500, lineHeight: 1, marginBottom: "2px" }}>{title}</p>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px" }}>{sub}</p>
      </div>
    </a>
  );
}