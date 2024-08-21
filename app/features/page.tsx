import { Roboto } from "next/font/google";
import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";

const amarante = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Features() {
  return (
    <div className="flex flex-col max-w-screen bg-white overflow-hidden">
      {/* Nav */}
      <NavBar />

      <div className="flex flex-row justify-center w-full">
        <div className="text-zinc-900 w-full max-w-[1600px] px-4 lg:px-10">
          {/* Hero */}
          <section className="overflow-hidden">
            <div className="mx-auto flex flex-col items-center lg:pb-24 md:pb-12 pt-16">
              <div className="text-center">
                <h1
                  className={`text-4xl font-bold tracking-tight sm:text-8xl ${amarante.className}`}
                >
                  Features
                </h1>

                <p className="mt-2 font-light text-xl">
                  What you get when you use{" "}
                  <span className={`mx-2 ${amarante.className}`}>
                    Resonate HQ
                  </span>
                  .
                </p>
              </div>
            </div>
            <img
              src="/images/echo-peek.png"
              className="fixed bottom-0 right-0 w-40 h-40 z-10 ask-echo"
              alt="Echo"
            />
          </section>

          {/* Failure detection and mitigation */}
          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center">
                <div className="lg:pt-24 md:pt-24 pb-12">
                  <h2 className="text-3xl md:text-5xl pb-2">
                    Cloud{" "}
                    <span className={amarante.className}>
                      programming model
                    </span>
                  </h2>

                  <p className="text-xl mt-3 font-light">
                    Write
                    <span className={`mx-2 ${amarante.className}`}>
                      linear code
                    </span>{" "}
                    that directly maps to your business logic.
                  </p>

                  <p className="text-xl mt-3 font-light">
                    Distribute functions to
                    <span className={`mx-2 ${amarante.className}`}>scale</span>
                    with throughput.
                  </p>
                  <a href="https://docs.resonatehq.io/">
                    <button className="mt-6 inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-900 text-white hover:bg-zinc-500">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Failure detection and mitigation */}
          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center">
                <div className="lg:pt-24 md:pt-24 pb-12">
                  <h2 className="text-3xl md:text-5xl pb-2">
                    <span className={amarante.className}>
                      Failure detection
                    </span>{" "}
                    and <span className={amarante.className}>recovery</span>
                  </h2>

                  <p className="text-xl mt-3 font-light">
                    Configurable
                    <span className={`mx-2 ${amarante.className}`}>
                      timeouts
                    </span>
                    for promise resolution.
                  </p>

                  <p className="text-xl mt-3 font-light">
                    Configurable
                    <span className={`mx-2 ${amarante.className}`}>
                      retries
                    </span>
                    for execution failures.
                  </p>
                  <a href="https://docs.resonatehq.io/">
                    <button className="mt-6 inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-900 text-white hover:bg-zinc-500">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Local or Remote storage */}
          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center">
                <div className="lg:pt-24 md:pt-24 pb-12">
                  <h2 className="text-3xl md:text-5xl pb-2">
                    Remote storage{" "}
                    <span className={amarante.className}>on demand</span>
                  </h2>

                  <p className="text-xl mt-3 font-light">
                    Low latecy
                    <span className={`mx-2 ${amarante.className}`}>
                      local storage
                    </span>
                    by default.
                  </p>

                  <p className="text-xl mt-3 font-light">
                    Configurable
                    <span className={`mx-2 ${amarante.className}`}>
                      remote storage
                    </span>
                    to survive hard crashes.
                  </p>
                  <a href="https://docs.resonatehq.io/">
                    <button className="mt-6 inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-900 text-white hover:bg-zinc-500">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Test suite */}
          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center">
                <div className="lg:pt-24 md:pt-24 pb-12">
                  <h2 className="text-3xl md:text-5xl pb-2">
                    System{" "}
                    <span className={amarante.className}>behavior tests</span>
                  </h2>

                  <p className="text-xl mt-3 font-light">
                    Standard component
                    <span className={`mx-2 ${amarante.className}`}>
                      mockability.
                    </span>
                  </p>
                  <p className="text-xl mt-3 font-light">
                    Verifiable system behavior with
                    <span className={`mx-2 ${amarante.className}`}>
                      Deterministic Simulation Testing.
                    </span>
                  </p>

                  <a href="https://docs.resonatehq.io/">
                    <button className="mt-6 inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-900 text-white hover:bg-zinc-500">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="lg:pt-48 md:pt-24 pb-12"></div>

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
