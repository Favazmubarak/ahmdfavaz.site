import React from "react";

export function HeroSection() {
  return (
    <section className="w-full mt-20 text-left text-white hidden sm:block">
      <div className="flex gap-2 ">
        {/* <h1 className="text-2xl font_science font-light">Hello, I am</h1> */}
      </div>

      <div className=" gap-5 ">
        {/* <h1 className="text-5xl leading-tight font_science">I'm</h1> */}
        {/* <h1 className="font_science text-cyan-400 text-5xl leading-tight tracking-tighter font-light ">
          I am
        </h1> */}
        <h1 className=" font_Right text-cyan-300 text-8xl   ">Ahammed</h1>
        <h1 className="font_Right text-white text-9xl   ">Favaz k m</h1>
      </div>
      <p className=" left-0max-w-sm mx-auto mt-6 text-sm text-white font_science font-light">
        Hello, my name is Ahammed Favaz,nice to meet you I would like to <br />{" "}
        welcome you with my personal portfolio
      </p>

      <div className="flex justify-start gap-4 mt-8 ">
        <button
          className="group inline-flex items-center gap-3 font-semibold rounded-full 
         px-6 py-3 text-white bg-transparent cursor-pointer 
         transition-colors duration-300 hover:bg-transparent overflow-hidden"
        >
          <span
            className="relative w-[25px] h-[25px] grid place-items-center bg-white text-black
           rounded-full overflow-hidden group-hover:bg-black group-hover:text-white"
          >
            <svg
              viewBox="0 0 14 15"
              fill="currentColor"
              width="10"
              className="transition-transform duration-300 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
            >
              <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
            </svg>

            <svg
              viewBox="0 0 14 15"
              fill="currentColor"
              width="10"
              className="absolute transition-transform duration-300 delay-100 
             -translate-x-[150%] translate-y-[150%] 
             group-hover:translate-x-0 group-hover:translate-y-0"
            >
              <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
            </svg>
          </span>
          Download CV
        </button>
      </div>
    </section>
  );
}
