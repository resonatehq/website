import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white p-8 flex flex-col items-center">
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
          target="_blank"
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
