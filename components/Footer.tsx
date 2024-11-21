import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white p-8 flex flex-col items-center">
      <div className="flex flex-wrap justify-center space-x-4 px-4 py-2 mb-8 items-center">
        <a
          href="/features"
          className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
        >
          Features
        </a>
        <a
          href="https://docs.resonatehq.io"
          className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
        >
          Docs
        </a>
        <a
          href="https://blog.resonatehq.io"
          className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
        >
          Blog
        </a>
        <a
          href="/webinars"
          className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
        >
          Webinars
        </a>
        <a
          href="/how-it-works"
          className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
        >
          How it works
        </a>
        <a
          href="/subscribe"
          className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
        >
          Subscribe
        </a>
        <a
          href="/privacy-policy"
          className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
        >
          Privacy Policy
        </a>
        <a
          href="/terms-and-conditions"
          className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
        >
          Terms and Conditions
        </a>
      </div>

      <div className="pb-6">
        <a
          href="https://twitter.com/resonatehqio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resonate HQ Twitter"
        >
          <i className="bx bx-sm bxl-twitter px-4 text-slate-700 hover:text-slate-500 cursor-pointer"></i>
        </a>
        <a
          href="https://resonatehq.io/discord"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resonate HQ Discord"
        >
          <i className="bx bx-sm bxl-discord px-4 text-slate-700 hover:text-slate-500 cursor-pointer"></i>
        </a>
        <a
          href="https://github.com/resonatehq/resonate"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resonate HQ GitHub"
        >
          <i className="bx bx-sm bxl-github px-4 text-slate-700 hover:text-slate-500 cursor-pointer"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/resonatehqio"
          rel="noopener noreferrer"
          aria-label="Resonate HQ LinkedIn"
        >
          <i className="bx bx-sm bxl-linkedin px-4 text-slate-700 hover:text-slate-500 cursor-pointer"></i>
        </a>
      </div>
      <p className="text-md">
        Copyright &copy; {new Date().getFullYear()} Resonate HQ, Inc.
      </p>
    </footer>
  );
};

export default Footer;
