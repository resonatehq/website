import { amarante } from "@/styles/fonts";
import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Features() {
  return (
    <div className="flex flex-col max-w-screen bg-white overflow-hidden">
      {/* Nav */}
      <NavBar />

      <div className="flex flex-row justify-center w-full">
        <div className="text-zinc-900 w-full max-w-[1600px] px-4 lg:px-10">
          {/* Hero */}
          <section className="overflow-hidden">
            <div className="mx-auto flex flex-col items-center pb-24 pt-16">
              <div className="text-center">
                <h1
                  className={`text-5xl font-bold tracking-tight sm:text-8xl ${amarante.className}`}
                >
                  Features
                </h1>

                <p className="mt-2 font-light text-xl">
                  What you get when you use{" "}
                  <span className={`mx-2 ${amarante.className}`}>Resonate</span>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Sequential programming model */}
          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center">
                <div className="lg:pt-24 md:pt-24 pb-12">
                  <h2 className="text-3xl md:text-5xl pb-2">
                    Sequential{" "}
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
                  <a href="https://docs.resonatehq.io/evaluate/features/sequential-programming-model">
                    <button className="mt-6 inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-900 text-white hover:bg-zinc-500">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Incremental adoption */}
          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center">
                <div className="lg:pt-24 md:pt-24 pb-12">
                  <h2 className="text-3xl md:text-5xl pb-2">
                    <span className={amarante.className}>Incremental</span>{" "}
                    adoption
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
                  <a href="https://docs.resonatehq.io/evaluate/features/incremental-adoption">
                    <button className="mt-6 inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-900 text-white hover:bg-zinc-500">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Failure detection and recovery */}
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
                  <a href="https://docs.resonatehq.io/concepts/failure-detection-and-recovery">
                    <button className="mt-6 inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-900 text-white hover:bg-zinc-500">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Test suite */}
          {/* <section>
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
          </section> */}
          <div className="lg:pt-48 md:pt-24 pb-12"></div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
