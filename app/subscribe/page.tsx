import { amarante } from "@/styles/fonts";
import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MailchimpForm from "@/components/MailchimpForm";

const benefits = [
  "Product release annoucements",
  "Notification of blog posts",
  "Webinar sign up offers",
  "Access to new tutorials",
  "And more!",
];

export default function Features() {
  return (
    <div className="flex flex-col max-w-screen bg-white overflow-hidden">
      {/* Nav */}
      <NavBar />

      <div className="flex flex-row justify-center w-full">
        <div className="text-zinc-900 w-full max-w-[1600px] px-4 lg:px-10">
          {/* Hero */}
          <section className="overflow-hidden">
            <div className="mx-auto flex flex-col items-center pt-16">
              <div className="text-center">
                <h1
                  className={`text-5xl font-bold tracking-tight sm:text-8xl ${amarante.className}`}
                >
                  Subscribe
                </h1>

                <p className="mt-2 font-light text-xl">
                  What do you get when you{" "}
                  <span className={`mx-2 ${amarante.className}`}>
                    subscribe to Resonate HQ
                  </span>
                  ?
                </p>
                <div className="text-left mt-12 px-12">
                  <ul className="list-disc list-inside text-zinc-900">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="text-xl mt-3 font-light">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <MailchimpForm />

      <Footer />
    </div>
  );
}
