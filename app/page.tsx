import { amarante } from "@/styles/fonts";
import Image from "next/image";
import ConcurrencyGrid from "@/components/ConcurrencyGrid";
import DistributionGrid from "@/components/DistributionGrid";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import InstallationGuide from "@/components/InstallationGuide";
import CodeGuide from "@/components/CodeGuide";
import HeroSection from "@/components/HeroSection";
import ScrollingGraphs from "@/components/ScrollingGraphs";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen bg-white overflow-hidden">
      {/* Nav */}
      <NavBar />

      <div className="flex flex-row justify-center w-full">
        <div className="text-zinc-900 w-full max-w-[1100px] px-4 lg:px-10">
          {/* Hero */}
          <HeroSection />

          <section className="pt-24">
            <ConcurrencyGrid />
          </section>

          <section className="pt-24">
            <DistributionGrid />
          </section>

          <section className="overflow-hidden pt-24 lg:pt-36 pb-12">
            <div className="relative overflow-hidden">
              <div className="text-slate-700 mx-auto flex flex-col items-center">
                <div className="text-center">
                  {/* Smaller text on one line */}
                  <p className="text-xl sm:text-3xl font-light tracking-tight pb-12">
                    Built on the{" "}
                    <span className="md:ml-2 md:mr-2 font-bold">
                      Distributed Async Await
                    </span>{" "}
                  </p>

                  {/* Language with fade effect */}
                  <h2 className="mb-12 text-3xl font-light tracking-tight sm:text-6xl">
                    open specification.
                  </h2>
                  <p className="mt-3 font-light text-xl sm:text-2xl">
                    No proprietary primitives.
                  </p>
                  <p className="mt-3 mb-12 font-light text-xl sm:text-2xl">
                    Extend it to any technology stack.
                  </p>
                  <a href="https://github.com/resonatehq/durable-promise-specification">
                    <button className="mt-4 inline-flex items-center justify-center text-xl rounded-md px-6 py-2 bg-stone-900 text-white hover:bg-stone-700">
                      Read the spec
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="w-full flex justify-center">
              <div className="flex flex-col text-center w-full items-center">
                <div className="flex-1 flex w-full items-center justify-center">
                  <Image
                    src="/images/website-call-graph-5.svg"
                    className="w-full"
                    alt="Simple Call Graph"
                    width="2562"
                    height="1362"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="text-slate-700 mx-auto flex flex-col items-center mb-12 pb-36 pt-6">
                <div className="text-center">
                  {/* Smaller text on one line */}
                  <p
                    className={`text-xl sm:text-3xl font-light tracking-tight pb-12`}
                  >
                    Concurrent, distributed, and{" "}
                    <span className="md:ml-2 md:mr-2 font-bold">durable</span>{" "}
                  </p>

                  {/* Language with fade effect */}
                  <h2 className="mb-12 text-3xl font-light tracking-tight sm:text-6xl font-bold">
                    promises and functions.
                  </h2>
                  <p className="mt-3 font-light text-xl sm:text-2xl">
                    Extending the async await programming model,
                  </p>
                  <p className="mt-3 mb-12 font-light text-xl sm:text-2xl">
                    distributed computing becomes a first-class citizen.
                  </p>
                  <a href="https://docs.resonatehq.io/concepts/distributed-async-await">
                    <button className="mt-4 inline-flex items-center justify-center text-xl rounded-md px-6 py-2 bg-stone-900 text-white hover:bg-stone-700">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="flex flex-row justify-center w-full border-t border-slate-200 mb-12"></div>

      <section>
        <ScrollingGraphs />
      </section>

      <div className="flex flex-row justify-center w-full border-t border-slate-200 mt-12"></div>
      <div className="flex flex-row justify-center w-full p-4 mb-24 text-slate-700 cursor-pointer hover:underline hover:text-slate-500 underline-offset-4">
        <a href="https://docs.resonatehq.io/concepts/call-graph">
          Learn more about Call Graphs
        </a>
      </div>

      <div className="flex flex-row justify-center w-full">
        <div className="text-zinc-900 w-full max-w-[800px] px-4 lg:px-10">
          <section className="overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="text-slate-700 mx-auto flex flex-col items-center pb-24 pt-24">
                <div className="text-center">
                  <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-6xl font-light">
                    Fully decentralized.
                  </h2>
                  <p className="mt-3 font-light text-xl sm:text-2xl">
                    No central element in the technology stack.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="w-full flex justify-center">
              <div className="flex flex-col text-center w-full items-center">
                <div className="flex-1 flex w-full items-center justify-center">
                  <Image
                    src="/images/connected-nodes.svg"
                    className="w-full p-24"
                    alt="Simple Call Graph"
                    width="1002"
                    height="1082"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="text-slate-700 mx-auto flex flex-col items-center pb-24 pt-24">
                <div className="text-center">
                  <h2 className="mb-12 text-3xl font-light tracking-tight sm:text-6xl">
                    Free and open source.
                  </h2>
                  <p className="mt-3 mb-12 font-light text-xl sm:text-2xl">
                    Don&#39;t worry about vendor lock-in.
                  </p>

                  <a href="https://github.com/resonatehq/">
                    <button className="mt-4 inline-flex items-center text-xl justify-center rounded-md px-6 py-2 bg-stone-900 text-white hover:bg-stone-700">
                      Visit GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="w-full flex justify-center">
              <div className="flex flex-col text-center w-full items-center">
                <div className="flex-1 flex w-full items-center justify-center">
                  <Image
                    src="/images/sequence-of-nodes.svg"
                    className="w-full p-24"
                    alt="Simple Call Graph"
                    width="42"
                    height="1002"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="text-slate-700 mx-auto flex flex-col items-center pb-24 pt-24 mb-12">
                <div className="text-center">
                  <h2 className="mb-12 text-3xl font-light tracking-tight sm:text-6xl">
                    More than
                    <br />
                    Durable Execution.
                  </h2>

                  <p className="mt-3 font-light text-xl sm:text-2xl">
                    Durability without the complexity.
                  </p>
                  <p className="mt-3 mb-12 font-light text-xl sm:text-2xl">
                    Enjoy a dead simple programming model for the cloud.
                  </p>
                  <a href="/features">
                    <button className="mt-4 inline-flex items-center justify-center rounded-md text-xl px-6 py-2 bg-stone-900 text-white hover:bg-stone-700">
                      Checkout the features
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="flex flex-row justify-center w-full">
        <div className="text-slate-800 w-full max-w-[1600px] px-4 lg:px-10">
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
