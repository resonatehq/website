"use client";
import React, { useState } from "react";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      {/* Announcement Bar */}
      {/* <div className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-center py-3">
        <a
          href="https://forms.gle/KzDddSfk5SPZ9Ckq6"
          className="text-lg font-bold hover:underline"
        >
          Join the Resonate Python SDK Waitlist! 🚀
        </a>
      </div> */}

      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200">
        {/* Logo */}
        <div className="flex justify-center py-4">
          <a href="/" className="flex items-center">
            <Image
              src="/images/echo-logo.svg"
              alt="Resonate Logo"
              height={40}
              width={40}
              className="max-h-[40px]"
            />
          </a>
        </div>

        {/* Menu Button (Mobile) */}
        <div className="flex justify-center lg:hidden mb-3">
          <button
            onClick={toggleMenu}
            className="pb-2 pl-2 pr-2 text-slate-700 hover:text-zinc-400"
          >
            {isMenuOpen ? (
              <span className="text-3xl font-bold">&times;</span> // Close Menu (X)
            ) : (
              <span className="text-3xl font-bold">&#9776;</span> // Hamburger Icon (3 lines)
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:flex-row lg:justify-center lg:space-x-8 text-center py-4`}
        >
          {/* Navigation Items */}
          <a
            href="/features"
            className="block py-2 lg:py-0 text-lg font-light text-slate-700 hover:text-slate-500 cursor-pointer"
          >
            Features
          </a>
          <a
            href="https://docs.resonatehq.io"
            className="block py-2 lg:py-0 text-lg font-light text-slate-700 hover:text-slate-500 cursor-pointer"
          >
            Docs
          </a>
          <a
            href="https://blog.resonatehq.io"
            className="block py-2 lg:py-0 text-lg font-light text-slate-700 hover:text-slate-500 cursor-pointer"
          >
            Blog
          </a>
          <a
            href="/webinars"
            className="block py-2 lg:py-0 text-lg font-light text-slate-700 hover:text-slate-500 cursor-pointer"
          >
            Webinars
          </a>
          <a
            href="/how-it-works"
            className="block py-2 lg:py-0 text-lg font-light text-slate-700 hover:text-slate-500 cursor-pointer"
          >
            How it works
          </a>
          <a
            href="https://resonatehq.io/discord"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resonate HQ Discord"
            className="block py-2 lg:py-0 text-lg font-light text-slate-700 hover:text-slate-500 cursor-pointer"
          >
            Discord
          </a>
          <a
            href="https://github.com/resonatehq/resonate"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resonate GitHub"
            className="block py-2 lg:py-0 text-lg font-light text-slate-700 hover:text-slate-500 cursor-pointer"
          >
            GitHub
          </a>
          <a
            href="/subscribe"
            className="block py-2 lg:py-0 text-lg font-light text-slate-700 hover:text-slate-500 cursor-pointer"
          >
            Subscribe
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
