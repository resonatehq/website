"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const languages = [
    { name: "Python", logo: "/images/python.svg" },
    { name: "TypeScript", logo: "/images/typescript.svg" },
  ];
  const [currentLang, setCurrentLang] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Change language every 3 seconds with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Trigger fade out
      setTimeout(() => {
        setCurrentLang((prevLang) => (prevLang + 1) % languages.length);
        setIsFading(false); // Trigger fade in
      }, 1000); // Duration of the fade-out effect
    }, 6000);
    return () => clearInterval(interval); // Cleanup on unmount
  });

  return (
    <section className="overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="text-slate-700 mx-auto flex flex-col items-center pb-6 pt-6 sm:pt-24">
          <div className="text-center">
            {/* Smaller text on one line */}
            <h1
              className={`text-xl sm:text-4xl font-light tracking-tight pb-12`}
            >
              Add <span className="md:ml-3 md:mr-3 font-bold">scalability</span>{" "}
              and <span className="md:ml-3 md:mr-3 font-bold">reliability</span>{" "}
              to
            </h1>

            {/* Language with fade effect */}
            <div className="relative inline-block mb-12">
              <h1 className="text-4xl font-light tracking-tight sm:text-8xl">
                <span
                  className={`transition-opacity duration-1000 ${
                    isFading ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {languages[currentLang].name}
                </span>
              </h1>
              {/* Logo positioned at the bottom right */}
              <Image
                src={languages[currentLang].logo}
                alt={`${languages[currentLang].name} Logo`}
                className={`absolute bottom-[-10px] right-[-40px] w-8 transition-opacity duration-1000 ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
                width="512"
                height="512"
              />
            </div>

            <p className="mt-3 font-light text-xl sm:text-2xl">
              Build with the language you love. ♥️
            </p>
            <p className="mt-3 mb-12 font-light text-xl sm:text-2xl">
              Adopt platform-level recovery and coordination.
            </p>
            <a href="https://docs.resonatehq.io/get-started">
              <button className="mt-4 inline-flex items-center justify-center rounded-md text-xl px-6 py-2 bg-stone-900 text-white hover:bg-stone-700">
                Get started
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
