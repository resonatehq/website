import { amarante } from "@/styles/fonts";
import Image from "next/image";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import InstallationGuide from "@/components/InstallationGuide";
import CodeGuide from "@/components/CodeGuide";
import VideoEmbed from "@/components/VideoEmbed";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen bg-white overflow-hidden">
      {/* Nav */}
      <NavBar />

      <div className="flex flex-row justify-center w-full">
        <div className="text-zinc-900 w-full max-w-[1200px] px-4 lg:px-10">
          {/* Hero */}
          <section className="overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="mx-auto flex flex-col items-center lg:pb-48 md:pb-24 pt-16">
                <div className="text-center">
                  <h1
                    className={`text-5xl font-bold tracking-tight sm:text-8xl ${amarante.className}`}
                  >
                    Distributed
                  </h1>
                  <h1
                    className={`text-5xl font-bold tracking-tight sm:text-8xl ${amarante.className}`}
                  >
                    Async Await
                  </h1>
                  <p className="mt-3 font-light text-2xl">
                    A{" "}
                    <span className={`mx-2 ${amarante.className}`}>
                      durable execution
                    </span>{" "}
                    framework.
                  </p>
                  <p className="mt-3 font-light text-2xl">
                    A{" "}
                    <span className={`mx-2 ${amarante.className}`}>
                      dead simple
                    </span>{" "}
                    cloud programming model.
                  </p>
                  <p className="mt-3 font-light text-xl">
                    <a href="https://github.com/resonatehq">Open source</a>.{" "}
                    <a href="https://github.com/resonatehq/durable-promise-specification">
                      Open specification
                    </a>
                    .
                  </p>

                  <a href="https://resonatehq.io/discord">
                    <button className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-900 text-white hover:bg-zinc-500">
                      Join the Discord Community
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <VideoEmbed />
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

                  <p className="text-xl mt-3 font-light">
                    Distributed Async Await
                    <span className={`mx-2 ${amarante.className}`}>
                      extends
                    </span>
                    the async await programming model
                  </p>

                  <p className="text-xl mt-3 font-light">
                    <span className={`mx-2 ${amarante.className}`}>beyond</span>
                    the boundaries of a single process.
                  </p>

                  <p className="text-xl font-light mt-3">
                    Distributed computing becomes a
                    <span className={`mx-2 ${amarante.className}`}>
                      first-class
                    </span>
                    citizen.
                  </p>
                  <a href="/features">
                    <button className="mt-6 inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-900 text-white hover:bg-zinc-500">
                      Explore the features
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
                    <Image
                      src="/images/async-call-graph-vert.svg"
                      className="w-full lg:w-5/6"
                      alt="Async Call Graph"
                      width="1521"
                      height="1881"
                      layout="responsive"
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
                <p className="mt-3 text-xl font-light">
                  Extending, instead of replacing, async await
                </p>
                <p className="text-xl font-light mt-3">
                  {" "}
                  offers you an
                  <span className={`mx-2 ${amarante.className}`}>
                    incremental transition
                  </span>
                  from the world of concurrent programming
                </p>
                <p className="text-xl font-light mt-3">
                  into the world of distributed programming.
                </p>
                <a href="https://docs.resonatehq.io">
                  <button className="mt-6 inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-900 text-white hover:bg-zinc-500">
                    Get started
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
                    descriptionThree=""
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
