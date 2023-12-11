import { Amarante } from "next/font/google";
import Logo from "@/components/Logo";
import Code from "@/components/Code";

const amarante = Amarante({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="flex flex-row justify-center w-screen bg-white overflow-hidden">
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
                className="text-lg hover:text-[#FF6663]"
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
                  className="bx bx-md bxl-github text-bright-gray-950 hover:text-[#FF6663]"
                  style={{ verticalAlign: "middle" }}
                ></i>
              </a>
            </div>
          </div>
        </nav>

        <section>
          <div className="relative overflow-hidden">
            <div className="mx-auto flex flex-col lg:flex-row pb-80 pt-16 sm:pb-40 lg:pb-48">
              <div className="flex-auto place-self-center mr-10 mb-4 lg:mb-0">
                <h1
                  className={`text-4xl font-bold tracking-tight sm:text-8xl ${amarante.className}`}
                >
                  Durable Async Await
                </h1>
                <p className="mt-3 text-xl">
                  A <span className={amarante.className}>dead simple</span>{" "}
                  programming model for modern applications
                </p>
                <button className="mt-4 inline-flex items-center justify-center rounded-md px-2.5 py-1 bg-bright-gray-950 text-white hover:bg-[#FF6663]">
                  <Logo className="fill-white w-8 h-8 mr-2" />
                  Join our Slack
                </button>
              </div>

              <Code />
            </div>
          </div>
          <img
            src="/images/echo.png"
            className="fixed bottom-0 right-0 w-40 h-40"
            alt="Echo"
          />
        </section>

        {/* What is... */}
        <section className="bg-bright-gray-600 text-center text-white">
          <div className="container max-w-4xl mx-auto p-16">
            <h2 className="text-3xl md:text-5xl pb-4">
              What is Durable Async Await?
            </h2>
            <p className="text-xl md:text-2xl pb-4">
              same programming model, better guarantees
            </p>
            <img
              src="/images/process.png"
              className="mx-auto my-16"
              alt="Durable Async Await"
            />
            <p className="text-xl">
              Durable async await are functions and promises that maintain
              progress in durable storage.
            </p>
          </div>
        </section>
        {/* Your app */}
        <section className="dark:bg-dark-gray-900 dark:text-white">
          <div className="container max-w-4xl mx-auto p-16">
            <h2 className="text-3xl md:text-5xl text-center pb-4">
              Your app, your way
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 text-center pb-12">
              Resonate has an incremental path to adoption
            </p>

            <h2 className="text-2xl mb-4">1. Resonate Library</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Get retries, rate limiting, timeouts, cancelation, metrics, and
              tracing. No infrastructure required.
            </p>

            <h2 className="text-2xl mb-4">
              2. Resonate Library + Resonate Server
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Run functions for minutes, hours, days, weeks, month, or years,
              regardless of interruptions.
            </p>

            <h2 className="text-2xl mb-4">
              3. Resonate Library + Resonate Server + Resonate Workers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Run on prem, on the edge, in the cloud, or go serverless.
            </p>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-dark-gray-800 dark:text-white p-8 flex flex-col items-center">
          <div className="pb-6">
            <a
              href="https://twitter.com/resonatehqio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resonate Twitter"
            >
              <i className="bx bx-sm bxl-twitter px-4 text-link"></i>
            </a>
            <a
              href="https://join.slack.com/t/resonatehqcommunity/shared_invite/zt-22h6iu4m8-2Tl9M25IZduNU_sBcPteMg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resonate Slack"
            >
              <i className="bx bx-sm bxl-slack px-4 text-link"></i>
            </a>
            <a
              href="https://github.com/resonatehq/resonate"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resonate GitHub"
            >
              <i className="bx bx-sm bxl-github px-4 text-link"></i>
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
