"use client";
import { useState } from "react";
import { Roboto } from "next/font/google";

const amarante = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

interface Tab {
  label: string;
  command: string;
}

interface InstallationSectionProps {
  title: string;
  tabs: Tab[];
}

const InstallationSection: React.FC<InstallationSectionProps> = ({
  title,
  tabs,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className="overflow-hidden py-10">
      <div className="mx-auto max-w-[800px] px-4 lg:px-10">
        {/* Title for the section */}
        <p className={`text-zinc-900 font-light text-center text-xl`}>
          Install the
        </p>
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

        {/* Command field and copy button */}
        <div className="relative flex justify-center items-center bg-zinc-900 text-white p-4">
          <div className="flex-1 text-md font-mono">
            {tabs[selectedTab].command}
          </div>
          <button
            className="px-2 py-2 text-white hover:text-zinc-500"
            onClick={() =>
              navigator.clipboard.writeText(tabs[selectedTab].command)
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
        </div>
      </div>
    </section>
  );
};

const InstallationGuide = () => {
  const sdkTabs = [
    { label: "TypeScript", command: "npm install @resonatehq/sdk" },
    // Add more tabs here if needed
  ];

  const serverTabs = [
    { label: "macOS", command: "brew install resonate" },
    {
      label: "Linux",
      command:
        "curl -Lo resonate_linux_x86_64.tar.gz https://github.com/your-repo/releases/download/v1.0.0/resonate_linux_x86_64.tar.gz && curl -Lo resonate_linux_x86_64.tar.gz.sha256 https://github.com/your-repo/releases/download/v1.0.0/resonate_linux_x86_64.tar.gz.sha256 && sha256sum -c resonate_linux_x86_64.tar.gz.sha256",
    },
    // { label: "Windows", command: "choco install resonate" },
    // Add more tabs here if needed
  ];

  return (
    <>
      <InstallationSection title="SDK" tabs={sdkTabs} />
      <InstallationSection title="Server" tabs={serverTabs} />
    </>
  );
};

export default InstallationGuide;
