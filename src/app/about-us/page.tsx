import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata = {
    title: "About Us – Ravado Tech",
    description:
        "Ravado Tech builds modern, advanced, and useful-by-design mobile applications that help users every day, everywhere.",
};

const PILLARS = [
    {
        title: "Modern",
        body: "We craft apps with the latest technologies and design systems — always current, never outdated.",
    },
    {
        title: "Advanced",
        body: "Under the hood, every product is built with precision engineering and thoughtful architecture.",
    },
    {
        title: "Useful by Design",
        body: "Features earn their place. Every interaction is intentional, frictionless, and centred on real user needs.",
    },
];

export default function AboutUsPage() {
    return (
        <main className="relative flex min-h-screen flex-col">
            <Navbar />

            <section className="relative flex flex-1 flex-col items-center justify-center min-h-screen overflow-hidden">
                {/* Background */}
                <Image
                    src="https://res.cloudinary.com/destej60y/image/upload/v1773012589/background_14_n2edjr.png"
                    alt="About Us background"
                    fill
                    className="pointer-events-none object-cover object-center"
                    priority
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-10 px-6 pt-32 pb-24 text-center w-full max-w-5xl mx-auto">
                    {/* Headline */}
                    <h1 className="text-[clamp(3.5rem,9vw,7rem)] font-normal leading-[0.95] tracking-tight text-black">
                        About us.
                    </h1>

                    {/* Mission statement */}
                    <p className="text-[clamp(1rem,2vw,1.2rem)] font-bold text-black max-w-2xl leading-relaxed">
                        We are Ravado Tech. We build modern, advanced, and useful-by-design mobile applications
                        that help users every day, everywhere.
                    </p>

                    {/* Pillars */}
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
                        {PILLARS.map((p) => (
                            <div
                                key={p.title}
                                className="rounded-2xl bg-[#1a1a1a] px-7 py-8 flex flex-col items-center gap-3 shadow-2xl text-center"
                            >
                                <span className="block h-0.75 w-10 rounded-full bg-[#00e6e6]" />
                                <h3 className="text-lg font-bold tracking-wide text-white">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-[#ccc] leading-relaxed">{p.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
