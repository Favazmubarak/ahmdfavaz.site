"use client";
import React from "react";

export default function AboutSection() {
  return (
    
    <section className="relative w-full h-screen bg-gradient-to-b from-[#0a0a0a] via-[#000a0e] to-[#013242]  text-white overflow-hidden py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* LEFT SIDE TEXT */}
        <div className="lg:w-1/2">
          <p className="text-cyan-400 font-medium tracking-wide mb-4 ">
            About Me
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-8 bunge">
            Turning ideas into
            <br />
            seamless applications.
          </h1>
          <a
            href="https://wa.me/917510363359?text=Hi%2C%20I%20am%20interested%20in%20hiring%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 px-6 py-3 rounded-full border border-white/20 flex items-center gap-3 hover:bg-white hover:text-black transition cursor-pointer w-fit"
          >
            Hire Me Now
            <svg
              width="18"
              height="18"
              fill="currentColor"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
            </svg>
          </a>
        </div>

        {/* RIGHT SIDE DESCRIPTION */}
        <div className="lg:w-1/2 max-w-xl">
          <p className="text-[15px] leading-relaxed text-gray-300 mt-10 mb-5 font-sans font-light">
            Hi, I'm Ahmd Favaz. I'm a{" "}
            <b className="font-bold">Software Developer</b>focused on building
            reliable, user-centered web applications. I work across the stack,
            combining clean UI development with solid backend engineering to
            deliver fast, stable, and practical solutions. I enjoy turning real
            problems into well-designed products that feel intuitive, perform
            smoothly, and scale with real use.
          </p>
        </div>
      </div>


    </section>
  );
}
