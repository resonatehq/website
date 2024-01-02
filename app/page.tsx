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
                src="/images/logo-dark.svg"
                alt="Resonate Logo"
                width="60px"
              />
              <span className="font-medium text-2xl whitespace-nowrap">
                Resonate
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
                  Durable Async Await
                </h1>
                <p className="mt-3 text-xl">
                  A <span className={amarante.className}>dead simple</span>{" "}
                  programming model for modern applications
                </p>
                <a href="https://join.slack.com/t/resonatehqcommunity/shared_invite/zt-22h6iu4m8-2Tl9M25IZduNU_sBcPteMg">
                  <button className="mt-4 inline-flex items-center justify-center rounded-md px-2.5 py-1 bg-bright-gray-950 text-white hover:bg-link">
                    <Logo className="fill-white w-8 h-8 mr-2" />
                    Join our Slack
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
              src="/images/echo.png"
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
                <p className={`text-link ${amarante.className}`}>
                  A new programming paradigm
                </p>
                <h2 className="text-3xl md:text-5xl pb-2">
                  What is{" "}
                  <span className={amarante.className}>
                    Durable Async Await
                  </span>
                  ?
                </h2>
                <p>
                  Durable async await are functions and promises that maintain
                  progress in durable storage.
                </p>
                <a href="https://github.com/resonatehq/website/issues/1">
                  <button className="mt-4 inline-flex items-center justify-center rounded-md px-2.5 py-1 bg-bright-gray-950 text-white hover:bg-link">
                    <Logo className="fill-white w-8 h-8 mr-2" />
                    Learn More
                  </button>
                </a>
              </div>

              <div className="flex-1 flex mt-20 items-center justify-center">
                <img
                  src="/images/process-navy.png"
                  className="w-full lg:w-5/6"
                />
              </div>
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
                  Durable async await are functions and promises that maintain
                  progress in durable storage.
                </p>
                <a href="https://docs.resonatehq.io">
                  <button className="mt-4 inline-flex items-center justify-center rounded-md px-2.5 py-1 bg-bright-gray-950 text-white hover:bg-link">
                    <Logo className="fill-white w-8 h-8 mr-2" />
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
                  description="Run functions for minutes, hours, days, weeks, month, or years, regardless of interruptions."
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
              aria-label="Resonate Twitter"
            >
              <i className="bx bx-sm bxl-twitter px-4 text-bright-gray-950 hover:text-link"></i>
            </a>
            <a
              href="https://join.slack.com/t/resonatehqcommunity/shared_invite/zt-22h6iu4m8-2Tl9M25IZduNU_sBcPteMg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resonate Slack"
            >
              <i className="bx bx-sm bxl-slack px-4 text-bright-gray-950 hover:text-link"></i>
            </a>
            <a
              href="https://github.com/resonatehq/resonate"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resonate GitHub"
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
