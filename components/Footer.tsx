"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const currentPath = usePathname(); // Get the current path
  return (
    <footer className="bg-white p-8 flex flex-col items-center">
      {currentPath !== "/subscribe" && (
        <a
          href="/subscribe"
          className="mb-12 text-white border bg-zinc-900 border-zinc-900 hover:bg-white hover:text-zinc-900 rounded-full px-5 py-2 lg:px-6 lg:py-2.5"
        >
          Subscribe
        </a>
      )}
      <div className="pb-6">
        <a
          href="https://twitter.com/resonatehqio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resonate HQ Twitter"
        >
          <i className="bx bx-sm bxl-twitter px-4 text-zinc-900 hover:text-zinc-900"></i>
        </a>
        <a
          href="https://resonatehq.io/discord"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resonate HQ Discord"
        >
          <i className="bx bx-sm bxl-discord px-4 text-zinc-900 hover:text-zinc-900"></i>
        </a>
        <a
          href="https://github.com/resonatehq/resonate"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resonate HQ GitHub"
        >
          <i className="bx bx-sm bxl-github px-4 text-zinc-900 hover:text-zinc-900"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/resonatehqio"
          rel="noopener noreferrer"
          aria-label="Resonate HQ LinkedIn"
        >
          <i className="bx bx-sm bxl-linkedin px-4 text-zinc-900 hover:text-zinc-900"></i>
        </a>
      </div>
      <p className="text-md">
        Copyright &copy; {new Date().getFullYear()} Resonate HQ, Inc.
      </p>
    </footer>
  );
};

export default Footer;
