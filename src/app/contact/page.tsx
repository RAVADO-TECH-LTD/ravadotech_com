import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata = {
    title: "Contact – Ravado Tech",
    description: "Get in touch with the Ravado Tech team.",
};

export default function ContactPage() {
    return (
        <main className="relative flex min-h-screen flex-col">
            <Navbar />

            {/* ── Hero section ── */}
            <section className="relative flex flex-1 flex-col items-center justify-center min-h-screen overflow-hidden">
                {/* Background image */}
                <Image
                    src="https://res.cloudinary.com/destej60y/image/upload/v1773012589/background_14_n2edjr.png"
                    alt="Contact background"
                    fill
                    className="pointer-events-none object-cover object-center"
                    priority
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-6 px-6 pt-28 pb-20 text-center w-full">
                    <h1 className="text-[clamp(3.5rem,9vw,7rem)] font-normal leading-[0.95] tracking-tight text-black">
                        Get in touch.
                    </h1>
                    <p className="text-[clamp(1rem,2vw,1.25rem)] font-bold text-black">
                        We&apos;d love to hear from you.
                    </p>

                    {/* Contact card */}
                    <div className="mt-4 w-full max-w-xl rounded-2xl bg-[#1a1a1a] px-10 py-10 flex flex-col items-center gap-6 shadow-2xl">
                        <h2 className="text-xl font-bold tracking-wide text-white">
                            Contact Information
                        </h2>
                        {/* Green underline accent */}
                        <span className="block h-0.75 w-16 rounded-full bg-[#00e6e6]" />

                        <div className="flex flex-col items-center gap-2 w-full">
                            <span className="text-xs font-bold tracking-widest text-[#aaa] uppercase">
                                Email
                            </span>
                            <a
                                href="mailto:office@ravadotech.com"
                                className="mt-1 inline-block rounded-full bg-white px-8 py-3 text-base font-bold text-black transition-opacity hover:opacity-75"
                            >
                                office@ravadotech.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
