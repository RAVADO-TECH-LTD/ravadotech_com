import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { CONTACT_ITEMS } from "@/lib/contact";

export const metadata = {
  title: "Contact – Ravado Tech",
  description: "Get in touch with the Ravado Tech team.",
};

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />

      {/* ── Hero section ── */}
      <section className="relative flex flex-1 flex-col overflow-hidden min-h-svh">
        {/* Background image */}
        <Image
          src="https://res.cloudinary.com/destej60y/image/upload/v1773012589/background_14_n2edjr.png"
          alt="Contact background"
          fill
          className="pointer-events-none object-cover object-center"
          priority
        />

        {/* Content */}
        <div className="relative z-10 flex min-h-svh w-full flex-col">
          {/* Spacer for fixed navbar */}
          <div className="h-16 shrink-0" />

          <div className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-16 pb-16">
            <div className="flex flex-col items-center gap-5 text-center pt-10 sm:pt-14">
              <h1 className="text-[clamp(2.75rem,9vw,7rem)] font-normal leading-[0.95] tracking-tight text-black">
                Get in touch.
              </h1>
              <p className="text-[clamp(1rem,2.8vw,1.25rem)] font-bold text-black max-w-md leading-relaxed">
                We&apos;d love to hear from you.
              </p>

              {/* Contact card */}
              <div className="mt-2 w-full max-w-xl rounded-2xl bg-[#1a1a1a] px-5 py-6 sm:px-10 sm:py-10 flex flex-col items-center gap-5 sm:gap-6 shadow-2xl">
                <h2 className="text-lg sm:text-xl font-bold tracking-wide text-white">
                  Contact Information
                </h2>
                {/* Cyan underline accent */}
                <span className="block h-0.75 w-16 rounded-full bg-[#00e6e6]" />

                <div className="grid w-full gap-4 sm:gap-5">
                  {CONTACT_ITEMS.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-2 w-full"
                    >
                      <span className="text-xs font-bold tracking-widest text-[#aaa] uppercase">
                        {item.label}
                      </span>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="mt-1 w-full rounded-xl bg-white px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-bold text-black transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e6e6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]"
                        title={item.value}
                      >
                        <span className="flex w-full items-center justify-center gap-3">
                          <Image
                            src={item.iconSrc}
                            alt={`${item.label} icon`}
                            width={24}
                            height={24}
                            className="shrink-0"
                          />
                          <span className="min-w-0 break-all text-center leading-snug">
                            {item.value}
                          </span>
                        </span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
