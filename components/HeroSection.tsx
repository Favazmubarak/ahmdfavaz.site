import React from "react";
// import Silk from './Silk';

export function HeroSection() {
  return (
    <section className="w-full mt-40 text-center text-white hidden sm:block">
      <h1 className="text-5xl font-bold leading-tight">AHAMMED FAVAZ K M</h1>
      <p className="mt-3 text-lg tracking-wide text-blue-400">Full Stack Developer</p>
      <p className="max-w-xl mx-auto mt-6 text-sm text-gray-300">
        Crafting clean systems, solving messy problems, and turning ideas into something people can actually use.
      </p>
      <div className="flex justify-center gap-4 mt-8">
        <button className="px-6 py-3 text-sm font-medium bg-blue-600 hover:bg-blue-500 rounded-xl">Get in Touch</button>
        <button className="px-6 py-3 text-sm border border-gray-500 rounded-xl">Resume</button>
      </div>
    </section>
  );
}
