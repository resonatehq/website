import { Rubik_Wet_Paint } from 'next/font/google';

const rubik = Rubik_Wet_Paint({ weight: "400", subsets: ['latin'], display: 'swap' })

export default function Home() {
  return (
    <>
    
    {/* Nav */}
    <nav className="border-gray-200 border-b">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <a href="https://resonatehq.io" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src="/images/logo.svg" alt="Resonate Logo" width="40px" />
          <span className="font-bold whitespace-nowrap">Resonate</span>
        </a>
        <div className="flex items-center space-x-4">
          <a href="https://docs.resonatehq.io">docs</a>
          <a href="https://github.com/resonatehq/resonate" target="_blank" rel="noopener noreferrer" aria-label="Resonate GitHub">
            <i className="bx bx-md bxl-github" style={{verticalAlign: "middle"}}></i>
          </a>
        </div>
      </div>
    </nav>

    {/* Design phase */}
    <section>
      <div className="container max-w-4xl mx-auto p-8">
        <div className="border border-gray-200 bg-bright-gray-50 rounded-lg p-4">
          <p className="text-xl pb-4">
            Resonate is in the <strong>Design Phase</strong>
          </p>
          <p className="pb-4">
            Our code base is constantly evolving as we are exploring Resonate&apos;s programming model. If you are passionate about a <span className={rubik.className}>dead simple</span> developer experience, join us on this journey of discovery and share your thoughts.
          </p>
          <div className="flex items-center justify-end">
            <button className="bg-bright-gray-500 hover:bg-bright-gray-600 text-white py-2 px-4 rounded-lg text-xl">
              <a href="https://join.slack.com/t/resonatehqcommunity/shared_invite/zt-22h6iu4m8-2Tl9M25IZduNU_sBcPteMg" target="_blank" rel="noopener noreferrer" aria-label="Resonate Slack">
                Join our slack <i className="bx bx-sm bxl-slack" style={{verticalAlign: "middle"}}></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Header and logo */}
    <section className="text-center">
      <div className="container max-w-4xl mx-auto p-16">
        <h1 className="text-4xl sm:text-5xl md:text-7xl pb-4">
          Durable Async Await
        </h1>
        <p className="text-xl md:text-2xl">
          a <span className={rubik.className}>dead simple</span> programming model for modern applications
        </p>
        <a href="https://github.com/resonatehq/website/issues/1" target="_blank">
          <img src="/images/echo-more.png" className="mx-auto my-10" alt="Echo" />
        </a>
      </div>
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
        <img src="/images/process.png" className="mx-auto my-16" alt="Durable Async Await" />
        <p className="text-xl">
          Durable async await are functions and promises that maintain progress in durable storage.
        </p>
      </div>
    </section>

    {/* Your app */}
    <section>
      <div className="container max-w-4xl mx-auto p-16">
        <h2 className="text-3xl md:text-5xl text-center pb-4">
          Your app, your way
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 text-center pb-12">
          Resonate has an incremental path to adoption
        </p>

        <h2 className="text-2xl mb-4">
          1. Resonate Library
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Get retries, rate limiting, timeouts, cancelation, metrics, and tracing. No infrastructure required.
        </p>

        <h2 className="text-2xl mb-4">
          2. Resonate Library + Resonate Server
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Run functions for minutes, hours, days, weeks, month, or years, regardless of interruptions.
        </p>

        <h2 className="text-2xl mb-4">
          3. Resonate Library + Resonate Server + Resonate Workers
        </h2>
        <p className="text-xl text-gray-600">
          Run on prem, on the edge, in the cloud, or go serverless.
        </p>

      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-50 p-8 flex flex-col items-center">
      <div className="pb-6">
        <a href="https://twitter.com/resonatehqio" target="_blank" rel="noopener noreferrer" aria-label="Resonate Twitter">
          <i className="bx bx-sm bxl-twitter px-4 text-link"></i>
        </a>
        <a href="https://join.slack.com/t/resonatehqcommunity/shared_invite/zt-22h6iu4m8-2Tl9M25IZduNU_sBcPteMg" target="_blank" rel="noopener noreferrer" aria-label="Resonate Slack">
          <i className="bx bx-sm bxl-slack px-4 text-link"></i>
        </a>
        <a href="https://github.com/resonatehq/resonate" target="_blank" rel="noopener noreferrer" aria-label="Resonate GitHub">
          <i className="bx bx-sm bxl-github px-4 text-link"></i>
        </a>
      </div>
      <p className="text-md">Copyright &copy; {new Date().getFullYear()} Resonate HQ, Inc.</p>
    </footer>

  </>

  )
}