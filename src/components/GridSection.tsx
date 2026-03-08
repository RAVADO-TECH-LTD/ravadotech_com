import Link from "next/link";

export default function GridSection() {
    return (
        <section
            id="grid-cta"
            className="relative w-full overflow-hidden py-32 flex items-center justify-center"
            style={{ backgroundColor: "#00e5ff" }}
        >
            {/* White grid overlay */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.40) 2px, transparent 2px), linear-gradient(to bottom, rgba(255,255,255,0.40) 2px, transparent 2px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 text-center px-6">
                <h2 className="text-[clamp(2.8rem,8vw,6rem)] font-normal leading-[1] tracking-tight text-black">
                    Apps that help you everyday.
                </h2>
                <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-semibold text-black/90 max-w-xl leading-relaxed">
                    Modern, Easy to use &ndash; anytime &ndash; everywhere
                </p>
                <Link
                    href="/about-us"
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-lg font-semibold text-white shadow-lg transition-opacity hover:opacity-75"
                >
                    About us
                </Link>
            </div>
        </section>
    );
}
