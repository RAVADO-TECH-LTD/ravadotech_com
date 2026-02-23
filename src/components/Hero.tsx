import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative w-full min-h-screen overflow-hidden bg-white"
        >
            {/* Background – full bleed */}
            <Image
                src="https://res.cloudinary.com/destej60y/image/upload/v1771806028/28_hmcjdf.png"
                alt="Hero background"
                fill
                className="pointer-events-none object-cover object-center"
                priority
            />

            {/* Full-height content wrapper */}
            <div className="relative z-10 min-h-screen w-full flex flex-col">

                {/* Spacer for fixed navbar */}
                <div className="h-16 shrink-0" />

                {/* Two-column grid — grows to fill remaining height */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16">

                    {/* LEFT — slogan, vertically centered */}
                    <div className="flex flex-col justify-center items-center lg:items-start gap-5 text-center lg:text-left py-12 lg:py-0">
                        <h1 className="text-[clamp(4.5rem,11vw,10rem)] font-normal leading-[0.95] tracking-tight text-black">
                            <span className="whitespace-nowrap">Useful by</span><br />design.
                        </h1>
                        <p className="text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-black/75 max-w-sm">
                            Modern, high-quality mobile apps for real users.
                        </p>
                    </div>

                    {/* RIGHT — phone, pinned to bottom of section */}
                    <div className="hidden lg:flex items-end justify-center lg:justify-end">
                        <Image
                            src="https://res.cloudinary.com/destej60y/image/upload/v1771804366/phone-with-logo-cyan-bg-R2_rzyyaq.png"
                            alt="Ravado Tech app on mobile"
                            width={520}
                            height={700}
                            className="object-contain drop-shadow-2xl w-auto"
                            style={{ height: "min(75vh, 680px)", maxWidth: "100%" }}
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Scroll-down indicator */}
            <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce">
                <Image
                    src="https://res.cloudinary.com/destej60y/image/upload/v1770937287/scroll_apbrab.png"
                    alt="Scroll down"
                    width={40}
                    height={40}
                    className="h-16 w-auto object-contain opacity-80"
                />
            </div>
        </section>
    );
}
