import { Rubik_Wet_Paint } from 'next/font/google';

const rubik = Rubik_Wet_Paint({ weight: "400", subsets: ['latin'], display: 'swap' })

export default function Home() {
  return (
    <>
    
    <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://resonatehq.io" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/logo.png" alt="logo" />
          <span className="self-center text-2xl whitespace-nowrap dark:text-white">Resonate</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="https://blog.resonatehq.io" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">blog</a>
            </li>
            <li>
              <a href="https://docs.resonatehq.io" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">docs</a>
            </li>
            <li>
              <a href="https://github.com/resonatehq" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <img src="/images/github.png" alt="github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section className="px-5 pt-20">
      <div className="container max-w-4xl mx-auto">
        <div className="border p-4 rounded-lg" style={{ backgroundColor: "rgb(246, 247, 249)", borderColor: "rgb(129, 143, 175)" }}>
          <div>
            <div className="text-color text-xl">
              Resonate is in the <b>Design Phase</b>
            </div>
            <div className="text-color my-4">
              Our code base is constantly evolving as we are exploring Resonate&apos;s programming model. If you are passionate about a <span className={rubik.className}>dead simple</span> developer experience, join us on this journey of discovery and share your thoughts.
            </div>
            <div className="text-color text-xl">
              <button className="py-3 px-6 rounded-lg text-white resonate-button"><a href="https://join.slack.com/t/resonatehqcommunity/shared_invite/zt-22h6iu4m8-2Tl9M25IZduNU_sBcPteMg">Join our Slack</a></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="px-5 py-20">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl text-center">
          Durable Async Await
        </h2>
        <div className="text-xl md:text-2xl my-5">
          a <span className={rubik.className}>dead simple</span> programming model for modern applications
        </div>
        <div className="mt-10">
          <a href="https://github.com/resonatehq/website/issues/1">
            <img className="mx-auto" src="/images/echo-more.png" alt="Echo" />
          </a>
        </div>
      </div>
    </section>

    <section style={{ color: '#ffffff', backgroundColor: '#4c597d' }} className="px-5 py-20 text-white">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl text-center">
          What is Durable Async Await?
        </h2>
        <div className="text-2xl md:text-2xl my-5 text-center">
          same programming model, better guarantees
        </div>
        <img className="mx-auto my-16" src="/images/process.png" alt="Durable Async Await" />
        <p className="text-xl text-center">
          Durable Async Await are Functions and Promises, that maintain progress in durable storage.
        </p>
      </div>
    </section>

    <section className="px-5 py-20">

      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl text-center">
          Your app, your way
        </h2>
        <div className="text-2xl md:text-2xl my-10 text-gray-600 text-center">
          Resonate has an incremental path to adoption
        </div>
      </div>

      <div className="container max-w-4xl mx-auto">
        <h2 className="text-2xl mb-8">
          1. Resonate Library
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Get retries, rate limiting, timeouts, cancelation, metrics, and tracing. No infrastructure required.
        </p>
      </div>

      <div className="container max-w-4xl mx-auto ">
        <h2 className="text-2xl mb-8">
          2. Resonate Library + Resonate Server
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Run functions for minutes, hours, days, weeks, month, or years, regardless of interruptions.
        </p>
      </div>

      <div className="container max-w-4xl mx-auto ">
        <h2 className="text-2xl mb-8">
          3. Resonate Library + Resonate Server + Resonate Workers
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Run on prem, on the edge, in the cloud, or go serverless.
        </p>
      </div>

    </section>

    <section style={{ color: '#ffffff', backgroundColor: '#4c597d' }} className="px-5 py-20 text-white">
      <h2 className="text-3xl md:text-5xl text-center">
        <a href="https://join.slack.com/t/resonatehqcommunity/shared_invite/zt-22h6iu4m8-2Tl9M25IZduNU_sBcPteMg">Join our Slack</a>
      </h2>
    </section>

    <div className="bg-white border-gray-200 dark:bg-gray-900 border-t" >
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        Copyright © 2023 Resonate HQ, Inc. All rights reserved.
      </div>
    </div>

  </>

  )
}