// components/NavBar.tsx
import React from "react";

const NavBar: React.FC = () => {
  return (
    <div>
      <div className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-center py-3">
        <a
          href="https://forms.gle/KzDddSfk5SPZ9Ckq6"
          className="text-lg font-bold hover:underline"
        >
          Join the Resonate Python SDK Waitlist! 🚀
        </a>
      </div>
      <nav className="border-zinc-200 bg-white px-4 lg:px-10">
        <div></div>
        <div className="flex flex-wrap items-center justify-between mx-auto py-5">
          <a
            href="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
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
              href="https://resonatehq.io/discord"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resonate HQ Discord"
            >
              <i
                className="bx bx-md bxl-discord text-zinc-900 hover:text-zinc-900"
                style={{ verticalAlign: "middle" }}
              ></i>
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
    </div>
  );
};

export default NavBar;
