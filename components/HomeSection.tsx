"use client";
import React, { useEffect, useState } from "react";
import { MapPin, Layers } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Load Anton + Playfair Display from Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:ital@1&display=swap');
      `}</style>

      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

        {/* Center content */}
        <div
          className={`flex flex-col items-center text-center transition-all duration-1000 ease-out w-full px-6
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* FAVAZ — Anton, ~75% screen width */}
          <h1
            className="text-white leading-none select-none w-full text-center"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(5rem, 15vw, 18rem)",
              letterSpacing: "0.050em",
              lineHeight: 1,
            }}
          >
            FAVAZ
          </h1>

          {/* Tagline */}
          <div className="mt-6 flex flex-col items-center gap-2">
            <p
              className="text-white/40 tracking-[0.25em] uppercase"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(1.20rem, 1vw, 0.8rem)",
                letterSpacing: "0.55em",
                fontWeight: 100,
              }}
            >
              I design and build products that
            </p>
            <p
              className="text-white"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(1.6rem, 3.8vw, 3.5rem)",
                lineHeight: 1.15,
              }}
            >
              deliver real impact.
            </p>
          </div>

          {/* Download CV */}
          <a
            href="/IND AHAMMED FAVAZ SOFTWARE DEVELOPER CV.pdf"
            download="AHAMMED FAVAZ SOFTWARE-DEVELOPER CV.pdf"
            className="mt-10 group inline-flex items-center gap-3 px-5 py-2.5 rounded-full
              border border-white/20 text-white text-sm font-medium
              hover:bg-white hover:text-black transition-all duration-300"
          >
            <span
              className="relative w-6 h-6 grid place-items-center bg-white text-black
                rounded-full overflow-hidden group-hover:bg-black group-hover:text-white transition-colors duration-300"
            >
              <svg viewBox="0 0 14 15" fill="currentColor" width="9"
                className="absolute transition-transform duration-300 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]">
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
              </svg>
              <svg viewBox="0 0 14 15" fill="currentColor" width="9"
                className="absolute transition-transform duration-300 delay-100
                  -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0">
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
              </svg>
            </span>
            Download CV
          </a>
        </div>

        {/* Bottom-left: Location */}
        <div
          className={`absolute bottom-8 left-10 sm:left-14 flex flex-col items-center gap-2 text-center
            transition-all duration-1000 delay-500 ease-out
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <MapPin size={16} className="text-green-400" strokeWidth={1.5} />
          <div>
            <p className="text-white text-[10px] font-bold tracking-[0.18em] uppercase leading-none">
              Based in Ernakulam,
            </p>
            <p className="text-white/40 text-[10px] tracking-[0.18em] uppercase mt-1">Kerala</p>
          </div>
        </div>

        {/* Bottom-right: Role */}
        <div
          className={`absolute bottom-8 right-10 sm:right-14 flex flex-col items-center gap-2 text-center
            transition-all duration-1000 delay-500 ease-out
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <Layers size={16} className="text-blue-400" strokeWidth={1.5} />
          <div>
            <p className="text-white text-[10px] font-bold tracking-[0.18em] uppercase leading-none">
              Software Developer,
            </p>
            <p className="text-white/40 text-[10px] tracking-[0.18em] uppercase mt-1">&amp; Full Stack</p>
          </div>
        </div>

      </section>
    </>
  );
}