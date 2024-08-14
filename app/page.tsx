import { Roboto } from "next/font/google";
import Logo from "@/components/Logo";
import Code from "@/components/Code";
import Card from "@/components/Card";

const amarante = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="flex flex-row justify-center max-w-screen bg-white overflow-hidden">
      <div className="text-bright-gray-950 w-full max-w-[1600px] px-4 lg:px-10">
        {/* Nav */}
        <nav className="border-gray-200 bg-white">
          <div className="flex flex-wrap items-center justify-between mx-auto py-5">
            <a
              href="https://resonatehq.io"
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <img
                src="/images/echo-logo.svg"
                alt="Resonate Logo"
                width="32px"
              />
              <span className="font-medium text-2xl whitespace-nowrap">
                Resonate HQ
              </span>
            </a>
            <div className="flex items-center space-x-4">
              <a
                href="https://docs.resonatehq.io"
                className="text-lg hover:text-link"
              >
                Docs
              </a>
              <a
                href="https://blog.resonatehq.io"
                className="text-lg hover:text-link"
              >
                Blog
              </a>
              <a
                href="https://resonatehq.io/subscribe"
                target="_blank"
                className="text-lg hover:text-link"
              >
                <button className="rounded-3xl px-3 py-0.5 bg-bright-gray-950 text-white hover:bg-link">
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
                  className="bx bx-md bxl-github text-bright-gray-950 hover:text-link"
                  style={{ verticalAlign: "middle" }}
                ></i>
              </a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="overflow-hidden">
          <div className="relative overflow-hidden">
            <div className="mx-auto flex flex-col space-y-10 lg:space-y-0 lg:flex-row pb-80 pt-16 sm:pb-40 lg:pb-48">
              <div className="flex-1 place-self-center mr-10 mb-4 lg:mb-0">
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
                <p className="mt-3 text-2xl">
                  A <span className={amarante.className}>dead simple</span>{" "}
                  cloud programming model.
                </p>
                <p className="mt-2 text-xl">
                  <a href="https://github.com/resonatehq">Open source</a>.{" "}
                  <a href="https://github.com/resonatehq/durable-promise-specification">
                    Open specification
                  </a>
                  .
                </p>

                <a href="https://discord.gg/rkRbrDsp">
                  <button className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 bg-bright-gray-950 text-white hover:bg-link">
                    Join our Discord
                  </button>
                </a>
              </div>

              <Code />
            </div>
          </div>
          <a
            href="https://github.com/resonatehq/website/issues/1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Echo"
          >
            <img
              src="/images/echo-peek.png"
              className="fixed bottom-0 right-0 w-40 h-40 z-10"
              alt="Echo"
            />
          </a>
        </section>

        {/* What is Durable Async Await */}
        <section>
          <div className="w-full max-w-screen sm:max-w-screen-2xl  flex">
            <div className="flex flex-col text-center w-full px-4 mb-24 lg:space-x-10 items-center">
              <div className="">
                <p className={`text-link text-xl`}>
                  Concurrent, distributed, and durable
                </p>
                <h2 className="text-3xl md:text-5xl pb-2">
                  <span className={amarante.className}>Promises</span> and{" "}
                  <span className={amarante.className}>Functions</span>
                </h2>
                <a href="https://docs.resonatehq.io/">
                  <button className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 bg-bright-gray-950 text-white hover:bg-link">
                    Get started
                  </button>
                </a>
              </div>

              <div className="flex-1 flex mt-10 mb-10 items-center justify-center">
                <img
                  src="/images/distributed-async-await.png"
                  className="w-full lg:w-5/6"
                />
              </div>

              <p>
                Distributed Async Await extends the async await programming
                model beyond the boundaries of a single process and makes
                distributed computing a first-class citizen.
              </p>
            </div>
          </div>
        </section>

        {/* Incrementally Adopt Resonate */}
        <section>
          <div className="w-full max-w-screen sm:max-w-screen-2xl  flex">
            <div className="flex flex-col lg:flex-row w-full px-4 mb-24 lg:space-x-10 items-center">
              <div className="">
                <p className={`text-link ${amarante.className}`}>
                  Your App, Your Way
                </p>
                <h2 className="text-3xl md:text-5xl pb-2">
                  Resonate has an{" "}
                  <span className={amarante.className}>incremental path</span>{" "}
                  to adoption
                </h2>
                <p>
                  By extending instead of replacing async await, we have created
                  an incremental transition from the world of concurrent
                  programming into the world of distributed programming
                </p>
                <a href="https://docs.resonatehq.io">
                  <button className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 bg-bright-gray-950 text-white hover:bg-link">
                    Read our docs
                  </button>
                </a>
              </div>
              <div className="flex flex-col">
                <Card
                  className="mt-8 relative overflow-hidden flex flex-col text-start"
                  title="1. Resonate Library"
                  description="Get retries, rate limiting, timeouts, cancelation, metrics, and tracing. No infrastructure required."
                />

                <Card
                  className="mt-8 relative overflow-hidden flex flex-col text-start"
                  title="2. Resonate Library + Resonate Server"
                  description="Run functions for minutes, hours, days, weeks, month, or years, regardless of hardware or software failures."
                />

                <Card
                  className="mt-8 relative overflow-hidden flex flex-col text-start"
                  title="3. Resonate Library + Resonate Server + Resonate Workers"
                  description="Run on prem, on the edge, in the cloud, or go serverless."
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
              <i className="bx bx-sm bxl-twitter px-4 text-bright-gray-950 hover:text-link"></i>
            </a>
            <a
              href="https://discord.gg/rkRbrDsp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resonate HQ Discord"
            >
              <i className="bx bx-sm bxl-discord px-4 text-bright-gray-950 hover:text-link"></i>
            </a>
            <a
              href="https://github.com/resonatehq/resonate"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resonate HQ GitHub"
            >
              <i className="bx bx-sm bxl-github px-4 text-bright-gray-950 hover:text-link"></i>
            </a>
          </div>
          <p className="text-md">
            Copyright &copy; {new Date().getFullYear()} Resonate HQ, Inc.
          </p>
        </footer>
      </div>
    </div>
  );
}
