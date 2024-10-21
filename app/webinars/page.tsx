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
                  Webinars
                </h1>

                <p className="mt-2 font-light text-xl">
                  Sign up for our upcoming webinars.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center">
                <div className="lg:pt-24 md:pt-24 pb-12">
                  <h2 className="text-3xl md:text-5xl pb-2">
                    November <span className={amarante.className}>6th</span>{" "}
                    2024
                  </h2>

                  <p className="text-xl mt-3 font-light">
                    Join us for an hour long
                    <span className={`mx-2 ${amarante.className}`}>
                      deep dive
                    </span>
                    into the Resonate Python SDK.
                  </p>

                  <p className="text-xl mt-3 font-light">
                    10:00 AM - 11:00 AM
                    <span className={`mx-2 ${amarante.className}`}>PST</span>
                  </p>
                </div>

                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeDkOJAGgDkw-KHMF9CT6Kqo2qxj8T1RtmI2PjyAKQiiXc-xw/viewform?embedded=true"
                  width="640"
                  height="974"
                  style={{ border: "none" }}
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </section>

          <div className="lg:pt-48 md:pt-24 pb-12"></div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
