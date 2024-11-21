"use client";
import React from "react";
import Image from "next/image";

const ScrollingGraphs = () => {
  const svgs = [
    "/images/website-call-graph-0.svg",
    "/images/website-call-graph-1.svg",
    "/images/website-call-graph-2.svg",
    "/images/website-call-graph-3.svg",
    "/images/website-call-graph-4.svg",
    "/images/website-call-graph-3.svg",
    "/images/website-call-graph-2.svg",
    "/images/website-call-graph-1.svg",
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="flex animate-scroll">
        {/* Combine SVGs into a single continuous loop */}
        {[...svgs, ...svgs].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Graph ${index + 1}`}
            className="h-auto w-1/4 mx-auto" // Dynamically size each graph
            height="512"
            width="512"
          />
        ))}
      </div>

      {/* Tailwind animation styles */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-200%);
          }
        }
        .animate-scroll {
          animation: scroll 45s linear infinite;
          width: calc(120%); /* Smooth looping of combined content */
        }
      `}</style>
    </div>
  );
};

export default ScrollingGraphs;
