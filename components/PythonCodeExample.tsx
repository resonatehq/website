"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const code = `#app-node.py
from flask import Flask, request, jsonify
from resonate.storage.resonate_server import RemoteServer
from resonate.Resonate import Resonate
from resonate.context import Context

# Initialize Resonate Scheduler
const resonate = new Resonate(RemoteServer(url="http://localhost:8001"));

# Define your workflow
def downloadAndSummarize(ctx: Context, url: str):
    content = yield ctx.lfc(url)
    summary = yield ctx.lfc(content)
    return summary

def download(ctx: Context, url: str):
    return f"This is the downloaded content."

def summarize(ctx: Context, content: str):
    return f"This is the summary."

# Register the downloadAndSummarize function with the Resonate scheduler
resonate.register(
    name="downloadAndSummarize",
    func=downloadAndSummarize,
)

# Define a route handler for the /summarize endpoint
@app.route("/summarize", methods=["POST"])
def summarize_route_handler():
    try:
        data = request.get_json()
        if "url" not in data:
            return jsonify({"error": "URL not provided"}), 400
        url = data["url"]

        promise = resonate.run(
            f"downloadAndSummarize-{url}", downloadAndSummarize, url=url
        )

        return jsonify({"summary": promise.result()})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


def main():
    app.run(host="127.0.0.1", port=5000)
    print("Serving HTTP on port 5000...")


if __name__ == "__main__":
    main()`;

const sdkInstallTabs = [
  { label: "Rye", command: "rye add resonate-sdk" },
  { label: "Pip", command: "pip install resonate-sdk" },
];

const serverInstallTabs = [
  { label: "macOS", command: "brew install resonatehq/tap/resonate" },
];

const PythonCodeExample = () => {
  const [selectedSdkTab, setSelectedSdkTab] = useState(0); // Separate state for SDK
  const [selectedServerTab, setSelectedServerTab] = useState(0); // Separate state for Server

  return (
    <section className="overflow-hidden py-10">
      {/* SDK Installation Section */}
      <div className="mx-auto max-w-[800px] px-4 lg:px-10 mb-12 sm:mb-24">
        <p className="text-slate-700 font-light text-center text-xl">
          Install the SDK.
        </p>

        {/* Tabs */}
        <div className="flex justify-left mb-4">
          {sdkInstallTabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 border-b-2 ${
                selectedSdkTab === index
                  ? "border-light-blue-500"
                  : "border-transparent"
              } text-lg font-light text-slate-700 hover:text-slate-500`}
              onClick={() => setSelectedSdkTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Command field and copy button */}
        <div className="relative flex justify-center items-center bg-slate-700 text-white p-4">
          <div className="flex-1 text-md font-mono">
            {sdkInstallTabs[selectedSdkTab].command}
          </div>
          <button
            className="px-2 py-2 text-white hover:text-slate-500"
            onClick={() =>
              navigator.clipboard.writeText(
                sdkInstallTabs[selectedSdkTab].command
              )
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

      {/* Server Installation Section */}
      <div className="mx-auto max-w-[800px] px-4 lg:px-10 mb-12 sm:mb-24">
        <p className="text-slate-700 font-light text-center text-xl">
          Install and run the Server.
        </p>

        {/* Tabs */}
        <div className="flex justify-left mb-4">
          {serverInstallTabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 border-b-2 ${
                selectedServerTab === index
                  ? "border-light-blue-500"
                  : "border-transparent"
              } text-lg font-light text-slate-700 hover:text-slate-500`}
              onClick={() => setSelectedServerTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Command field and copy button */}
        <div className="relative flex justify-center items-center bg-slate-700 text-white p-4">
          <div className="flex-1 text-md font-mono">
            {serverInstallTabs[selectedServerTab].command}
          </div>
          <button
            className="px-2 py-2 text-white hover:text-slate-500"
            onClick={() =>
              navigator.clipboard.writeText(
                serverInstallTabs[selectedServerTab].command
              )
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

      {/* Code Example Section */}
      <div className="mx-auto max-w-[800px] px-4 lg:px-10">
        <p className="text-slate-700 font-light text-center text-xl mb-12">
          Write code.
        </p>

        <div className="relative bg-slate-700 text-white p-4">
          <button
            className="absolute top-4 right-4 px-2 py-2 text-white hover:text-slate-500"
            onClick={() => navigator.clipboard.writeText(code)}
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

          <div className="overflow-auto w-full">
            <SyntaxHighlighter
              language="python"
              style={tomorrow}
              showLineNumbers={false}
              customStyle={{
                background: "rgb(51, 65, 85)",
                padding: "0px",
                borderRadius: 0,
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
        <p className="text-slate-700 font-light text-center text-lg mt-12 mb-12">
          <a
            className="hover:underline underline-offset-4 font-light"
            href="https://docs.resonatehq.io/get-started/python-quickstart-tutorial"
          >
            Continue building an AI summarization agent with the quickstart
            tutorial.
          </a>
        </p>
      </div>
    </section>
  );
};

export default PythonCodeExample;
