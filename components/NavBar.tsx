// components/NavBar.tsx
import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="border-zinc-200 bg-white px-4 lg:px-10">
      <div className="flex flex-wrap items-center justify-between mx-auto py-5">
        <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src="/images/echo-logo.svg" alt="Resonate Logo" width="32px" />
          <span className="font-medium text-2xl whitespace-nowrap">
            Resonate HQ
          </span>
        </a>
        <div className="flex items-center space-x-4">
          <a
            href="/features"
            className="text-lg font-light hover:text-zinc-900"
          >
            Features
          </a>
          <a
            href="https://docs.resonatehq.io"
            className="text-lg font-light hover:text-zinc-900"
          >
            Docs
          </a>
          <a
            href="https://blog.resonatehq.io"
            className="text-lg font-light hover:text-zinc-900"
          >
            Blog
          </a>
          <a
            href="https://resonatehq.io/subscribe"
            target="_blank"
            className="text-lg font-light hover:text-zinc-900"
          >
            <button className="rounded-3xl px-3 py-0.5 bg-zinc-900 text-white hover:bg-zinc-500">
              Subscribe
            </button>
          </a>
          <a
            href="https://github.com/resonatehq/resonate"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resonate GitHub"
          >
            <i
              className="bx bx-md bxl-github text-zinc-900 hover:text-zinc-900"
              style={{ verticalAlign: "middle" }}
            ></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
