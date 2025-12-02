import React from "react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Smart Task Manager",
      desc: "A clean task system with reminders, smart filters, and fast UI built with React and Firebase.",
      tech: ["React", "Firebase", "Tailwind"],
    },
    {
      title: "E-Commerce Dashboard",
      desc: "Analytics, order control, user tracking and product management. Designed for performance and clarity.",
      tech: ["Next.js", "MongoDB", "Chart.js"],
    },
    {
      title: "Portfolio Builder",
      desc: "A simple builder that lets users generate a personal website instantly using templates.",
      tech: ["Node.js", "Express", "Prisma"],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full max-w-6xl px-6 py-24 mx-auto text-white"
    >
      <h2 className="mb-6 text-3xl font-bold text-blue-400 md:text-4xl">
        Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 transition-all duration-300 border  bg-white/5 border-white/10 rounded-2xl backdrop-blur-xl hover:bg-white/10"
          >
            <h3 className="mb-3 text-xl font-semibold text-blue-300">
              {p.title}
            </h3>

            <p className="mb-4 text-sm leading-relaxed text-gray-300">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs text-blue-300 border rounded-md  bg-blue-600/20 border-blue-600/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
