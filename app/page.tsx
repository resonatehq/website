import { Roboto } from "next/font/google";
import Logo from "@/components/Logo";
import Code from "@/components/Code";
import Card from "@/components/Card";
import InstallationGuide from "@/components/InstallationGuide";
import CodeGuide from "@/components/CodeGuide";

const amarante = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen bg-white overflow-hidden">
      {/* Nav */}
      <nav className="border-zinc-200 bg-white px-4 lg:px-10">
        <div className="flex flex-wrap items-center justify-between mx-auto py-5">
          <a
            href="https://resonatehq.io"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <img src="/images/echo-logo.svg" alt="Resonate Logo" width="32px" />
            <span className="font-medium text-2xl whitespace-nowrap">
              Resonate HQ
            </span>
          </a>
          <div className="flex items-center space-x-4">
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
      <div className="flex flex-row justify-center w-full">
        <div className="text-zinc-900 w-full max-w-[1600px] px-4 lg:px-10">
          {/* Hero */}
          <section className="overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="mx-auto flex flex-col items-center space-y-10 lg:pb-48 md:pb-24 pt-16">
                <div className="text-center">
                  <h1
                    className={`text-4xl font-bold tracking-tight sm:text-8xl ${amarante.className}`}
                  >
                    Distributed
                  </h1>
                  <h1
                    className={`text-4xl font-bold tracking-tight sm:text-8xl ${amarante.className}`}
                  >
                    Async Await
                  </h1>
                  <p className="mt-3 font-light text-2xl">
                    A{" "}
                    <span className={`mx-2 ${amarante.className}`}>
                      dead simple
                    </span>{" "}
                    cloud programming model.
                  </p>
                  <p className="mt-2 font-light text-xl">
                    <a href="https://github.com/resonatehq">Open source</a>.{" "}
                    <a href="https://github.com/resonatehq/durable-promise-specification">
                      Open specification
                    </a>
                    .
                  </p>
                  <a href="https://discord.gg/rkRbrDsp">
                    <button className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-900 text-white hover:bg-zinc-500">
                      Join the Discord Community
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Installation */}
          <InstallationGuide />

          {/* Code example */}
          <CodeGuide />

          {/* Features */}

          {/* Functions & Promises */}
          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center">
                <div className="lg:pt-48 md:mt-24 pb-12">
                  <p className={`text-zinc-900 text-xl font-light`}>
                    Concurrent, distributed, and durable
                  </p>
                  <h2 className="text-3xl md:text-5xl pb-2">
                    <span className={amarante.className}>Promises</span> and{" "}
                    <span className={amarante.className}>Functions</span>
                  </h2>

                  <p className="text-xl font-light">
                    Distributed Async Await
                    <span className={`mx-2 ${amarante.className}`}>
                      extends
                    </span>
                    the async await programming model
                  </p>

                  <p className="text-xl font-light">
                    <span className={`mx-2 ${amarante.className}`}>beyond</span>
                    the boundaries of a single process.
                  </p>

                  <p className="text-xl font-light mt-2">
                    Distributed computing becomes a
                    <span className={`mx-2 ${amarante.className}`}>
                      first-class
                    </span>
                    citizen.
                  </p>
                  <a href="https://docs.resonatehq.io/">
                    <button className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-900 text-white hover:bg-zinc-500">
                      Get started
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-center">
          <div className="text-zinc-900 w-full max-w-[1600px] px-4 lg:pt-24 md:pt-12 lg:pb-24 md:pb-12">
            {/* Call graph */}
            <section>
              <div className="w-full flex justify-center">
                <div className="flex flex-col text-center w-full px-4 items-center">
                  <div className="flex-1 flex mb-10 w-full max-w-[800px] items-center justify-center">
                    <img
                      src="/images/async-call-graph-vert.svg"
                      className="w-full lg:w-5/6"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* Incrementally Adopt Resonate */}
      <div className="flex flex-row justify-center w-full">
        <div className="text-zinc-900 w-full max-w-[1600px] px-4 lg:px-10">
          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl flex justify-center lg:pt-24 md:pt-12 lg:pb-24 md:pb-12">
              <div className="w-full max-w-[800px] px-4 text-center">
                <p className={`text-zinc-900 text-xl font-light`}>
                  Your App, Your Way
                </p>
                <h2 className="text-3xl md:text-5xl pb-2">Enjoy an</h2>
                <h2 className="text-3xl md:text-5xl pb-2">
                  <span className={amarante.className}>incremental path</span>
                </h2>
                <h2 className="text-3xl md:text-5xl pb-2">to adoption</h2>
                <p className="text-xl font-light">
                  Extending, instead of replacing, async await
                </p>
                <p className="text-xl font-light mt-2">
                  {" "}
                  offers you an{" "}
                  <span className={`mx-2 ${amarante.className}`}>
                    incremental transition
                  </span>{" "}
                  from the world of concurrent programming
                </p>
                <p className="text-xl font-light mt-2">
                  into the world of distributed programming.
                </p>
                <a href="https://docs.resonatehq.io">
                  <button className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-900 text-white hover:bg-zinc-500">
                    Read our docs
                  </button>
                </a>
              </div>
            </div>
          </section>

          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl flex justify-center">
              <div className="w-full max-w-[800px] px-4 flex flex-col items-center">
                <div className="flex flex-col w-full space-y-8 lg:pb-48 md:pb-24">
                  <Card
                    className="h-60 w-full"
                    title="SDK"
                    descriptionOne="Start with the"
                    descriptionTwo="Get retries, rate limiting, timeouts, cancelation, metrics, and tracing."
                    descriptionThree="No infrastructure required."
                  />
                  <Card
                    className="h-60 w-full"
                    title="Server"
                    descriptionOne="Add the"
                    descriptionTwo="Run functions for minutes, hours, days, weeks, months, or years"
                    descriptionThree="regardless of hardware or software failures."
                  />
                  <Card
                    className="h-60 w-full"
                    title="Deploy anywhere"
                    descriptionOne="Then"
                    descriptionTwo="Run on prem, on the edge, in the cloud, or go serverless."
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
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
                href="https://discord.gg/rkRbrDsp"
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
            </div>
            <p className="text-md">
              Copyright &copy; {new Date().getFullYear()} Resonate HQ, Inc.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
