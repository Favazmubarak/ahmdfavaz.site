import React from "react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full max-w-5xl px-6 py-24 mx-auto text-white"
    >
      <h2 className="mb-6 text-3xl font-bold text-blue-400 md:text-4xl">
        About Me
      </h2>

      <p className="max-w-3xl leading-relaxed text-gray-300">
        I build clean systems and solve practical problems using modern web
        technologies. I focus on delivering things that actually work in the
        real world, not just something that looks good on paper. I enjoy making
        products that feel smooth, fast, and predictable.
      </p>

      <div className="grid gap-10 mt-10 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-blue-300">
            What I Do
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              Full-stack development with React, Next.js, Node.js
            </li>

            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              REST API and database design
            </li>

            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              Clean UI and smooth user experience
            </li>

            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              Problem solving, optimization, workflow automation
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-blue-300">
            Tech Stack
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              React, Next.js, Tailwind CSS
            </li>

            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              Node.js, Express, MongoDB
            </li>

            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              PostgreSQL, Prisma, Firebase
            </li>

            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              Git, Docker, Linux
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
