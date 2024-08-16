"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Roboto } from "next/font/google";

const amarante = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const CodeSection = ({ title, tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className="overflow-hidden py-10">
      <div className="mx-auto max-w-[800px] px-4 lg:px-10">
        {/* Title for the section */}
        <p className={`text-zinc-900 font-light text-center text-xl`}>Write</p>
        <h2 className="text-3xl md:text-5xl pb-2 mb-8 text-center">
          <span className={amarante.className}>{title}</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-left mb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 border-b-2 ${
                selectedTab === index
                  ? "border-light-blue-500"
                  : "border-transparent"
              } text-lg font-light hover:text-zinc-500`}
              onClick={() => setSelectedTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code Example and Copy Button */}
        <div className="relative bg-zinc-900 text-white py-4">
          {/* Copy Button */}
          <button
            className="absolute top-4 right-4 px-2 py-2 text-white hover:text-zinc-500"
            onClick={() =>
              navigator.clipboard.writeText(tabs[selectedTab].code)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M4 20V10h10l.002 10zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10z" />
            </svg>
          </button>

          {/* Code Block */}
          <div className="overflow-auto w-full">
            <SyntaxHighlighter
              language="typescript"
              style={nord}
              showLineNumbers={false}
              customStyle={{
                background: "rgb(24 24 27)",
                padding: "0px",
                borderRadius: 0,
              }}
            >
              {tabs[selectedTab].code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;
