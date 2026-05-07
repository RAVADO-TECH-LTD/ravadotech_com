import Image from "next/image";
import RemoteLottie from "./RemoteLottie";
import styles from "./GridSection.module.css";
import { TELEGRAM_CONTACT, WHATSAPP_CONTACT } from "@/lib/contact";

const PUBLISHED_APPS = [
    {
        name: "KeepPlay",
        imageSrc:
            "https://res.cloudinary.com/destej60y/image/upload/v1778157200/app2_zrdwbd.webp",
        href: "https://play.google.com/store/apps/details?id=com.keepplayengine.loyaltyapp",
    },
    {
        name: "Dragon Silence",
        imageSrc:
            "https://res.cloudinary.com/destej60y/image/upload/v1778157200/app3_bvenm7.webp",
        href: "https://play.google.com/store/apps/details?id=com.shhhsilen.cedragdr",
    },
    {
        name: "Speaker Cleaner",
        imageSrc:
            "https://res.cloudinary.com/destej60y/image/upload/v1778157200/app4_hjm7vf.webp",
        href: "https://play.google.com/store/apps/details?id=com.ravadotech.speakercleaner",
    },
    {
        name: "Dynasty Fallen",
        imageSrc:
            "https://res.cloudinary.com/destej60y/image/upload/v1778157200/app5_wzox65.webp",
        href: "https://play.google.com/store/apps/details?id=com.dyn.dyn.astyfa.llen",
    },
    {
        name: "Betmatch",
        imageSrc:
            "https://res.cloudinary.com/destej60y/image/upload/v1778157131/app1_dhqure.webp",
        href: "https://play.google.com/store/apps/details?id=com.egg.polarity.tap.flip",
    },
];

export default function GridSection() {
    return (
        <>
            <section
                id="grid-cta"
                className={`relative w-full overflow-hidden py-32 flex items-center justify-center ${styles.section}`}
            >
                {/* White grid overlay */}
                <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 ${styles.gridOverlay}`}
                />

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
                        {/* LEFT */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-[clamp(3rem,8vw,6.5rem)] font-normal leading-[0.95] tracking-tight text-black">
                                Google Play Console
                            </h2>
                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-center lg:justify-end">
                            <a
                                href="https://play.google.com/store/apps/dev?id=5615586096995119277"
                                className={`group block w-full max-w-2xl ${styles.playBadgeLink}`}
                                rel="noopener noreferrer"
                                target="_blank"
                                aria-label="Open Ravado Tech developer page on Google Play"
                            >
                                <div
                                    className={`relative w-full overflow-hidden rounded-2xl bg-black/5 shadow-2xl ${styles.imageWrap} ${styles.playBadge}`}
                                >
                                    <Image
                                        src="https://res.cloudinary.com/destej60y/image/upload/v1771346830/Store_Google_Play_Type_Dark_Language_English_1_buber3.svg"
                                        alt="Google Play Console"
                                        fill
                                        sizes="(min-width: 1024px) 50vw, 92vw"
                                        className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.01]"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="rent-cta"
                className={`relative w-full overflow-hidden py-28 flex items-center justify-center ${styles.sectionPurple}`}
            >
                {/* White grid overlay */}
                <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 ${styles.gridOverlay}`}
                />

                {/* Content */}
                <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
                    <h2 className="text-[clamp(2.6rem,7vw,5.5rem)] font-normal leading-[0.98] tracking-tight text-white">
                        Looking for Console to <span className="underline underline-offset-8">Rent</span>?
                    </h2>
                    <p className="mt-5 text-[clamp(1.25rem,2.8vw,1.8rem)] font-semibold text-white leading-relaxed">
                        Do you want to publish your{" "}
                        <span className="underline underline-offset-4">App</span> or{" "}
                        <span className="underline underline-offset-4">Game</span> ?
                    </p>
                </div>
            </section>

            <section
                id="published-apps"
                className={`relative w-full overflow-hidden py-28 flex items-center justify-center ${styles.sectionNeonGreen}`}
            >
                <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 ${styles.gridOverlay}`}
                />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-[clamp(2.6rem,7vw,5.5rem)] font-normal leading-[0.95] tracking-tight text-black">
                            Published Apps & Customers
                        </h2>
                        <p className="mt-5 text-[clamp(1.1rem,2vw,1.45rem)] font-semibold leading-relaxed text-black/70">
                            Real apps already live on Google Play through Ravado Tech.
                        </p>
                    </div>

                    <div className={`mt-12 ${styles.appsGrid}`}>
                        {PUBLISHED_APPS.map((app, index) => (
                            <a
                                key={app.href}
                                href={app.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.appCard} ${index % 2 === 1 ? styles.appCardOffset : ""}`}
                                aria-label={`Open ${app.name} on Google Play`}
                            >
                                <div className={styles.appImageFrame}>
                                    <Image
                                        src={app.imageSrc}
                                        alt={`${app.name} preview`}
                                        fill
                                        sizes="(min-width: 1280px) 220px, (min-width: 640px) 42vw, 78vw"
                                        className="object-contain p-4"
                                    />
                                </div>
                                <div className={styles.appCardMeta}>
                                    <span>{app.name}</span>
                                    <span aria-hidden>↗</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="dashboard-screenshot"
                className={`relative w-full overflow-hidden py-28 flex items-center justify-center ${styles.sectionGreen}`}
            >
                {/* White grid overlay */}
                <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 ${styles.gridOverlay}`}
                />

                {/* Content */}
                <div className="relative z-10 w-full mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center">
                    <h2 className="text-center text-[clamp(2.25rem,6vw,4.25rem)] font-normal leading-none tracking-tight text-black">
                        Recent Dashboard Screenshot
                    </h2>

                    <div className={`mt-10 ${styles.screenshotContainer}`}>
                        <Image
                            src="https://res.cloudinary.com/destej60y/image/upload/v1778105434/Screenshot_2026-05-07_001008_eypphm.png"
                            alt="Recent Dashboard Screenshot"
                            width={2200}
                            height={1400}
                            className="h-auto w-full rounded-[28px] shadow-2xl ring-1 ring-black/10"
                            priority={false}
                        />
                    </div>
                </div>
            </section>

            <section
                id="console-registration-2022"
                className={`relative w-full overflow-hidden py-28 flex items-center justify-center ${styles.sectionOrange}`}
            >
                {/* White grid overlay */}
                <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 ${styles.gridOverlay}`}
                />

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center">
                    <h2 className="text-center text-[clamp(2.1rem,5.5vw,4rem)] font-normal leading-none tracking-tight text-black">
                        Console Registraion Year{" "}
                        <span className="underline underline-offset-8">2022</span>
                    </h2>

                    <div className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                        <Image
                            src="https://res.cloudinary.com/destej60y/image/upload/v1778105863/Google-Play-Console-Invoice-2022-RAVADO_1_-1_w4dtw6.png"
                            alt="Console Registration 2022 - Document 1"
                            width={1600}
                            height={2200}
                            className="h-auto w-full rounded-3xl shadow-2xl ring-1 ring-black/10"
                        />
                        <Image
                            src="https://res.cloudinary.com/destej60y/image/upload/v1778105862/Google-Play-Console-Invoice-2022-RAVADO_1_-2_fmehzg.png"
                            alt="Console Registration 2022 - Document 2"
                            width={1600}
                            height={2200}
                            className="h-auto w-full rounded-3xl shadow-2xl ring-1 ring-black/10"
                        />
                        <Image
                            src="https://res.cloudinary.com/destej60y/image/upload/v1778106035/WhatsApp_Image_2026-05-07_at_12.16.09_AM_nhb7x6.jpg"
                            alt="Console Registration 2022 - Screenshot"
                            width={1600}
                            height={2200}
                            className="h-auto w-full rounded-3xl shadow-2xl ring-1 ring-black/10"
                        />
                    </div>
                </div>
            </section>

            <section
                id="draft-access"
                className={`relative w-full overflow-hidden py-28 flex items-center justify-center ${styles.sectionYellow}`}
            >
                {/* White grid overlay */}
                <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 ${styles.gridOverlay}`}
                />

                {/* Content */}
                <div className="relative z-10 w-full mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center">
                    <h2 className="text-center text-[clamp(2.05rem,5.5vw,4.1rem)] font-normal leading-none tracking-tight text-black">
                        You will get{" "}
                        <span className="underline underline-offset-8">Draft Access</span>
                        {" "}and{" "}
                        <span className="underline underline-offset-8">Permissions</span>
                    </h2>

                    <div className={`mt-10 ${styles.screenshotContainer}`}>
                        <Image
                            src="https://res.cloudinary.com/destej60y/image/upload/v1778106457/Screenshot_2026-05-07_002713_owbjkj.png"
                            alt="Draft Access and Permissions"
                            width={2200}
                            height={1400}
                            className="h-auto w-full rounded-[32px] shadow-2xl ring-1 ring-black/10"
                            priority={false}
                        />
                    </div>
                </div>
            </section>

            <section
                id="velocity"
                className={`relative w-full overflow-hidden py-28 flex items-center justify-center ${styles.sectionNeonGreen}`}
            >
                {/* White grid overlay */}
                <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 ${styles.gridOverlay}`}
                />

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
                        {/* LEFT — lottie */}
                        <div className="flex justify-center lg:justify-start">
                            <RemoteLottie
                                src="https://res.cloudinary.com/destej60y/raw/upload/v1778106979/velocity_z0ullp.json"
                                ariaLabel="Velocity animation"
                                className="w-[min(85vw,520px)] aspect-square rounded-[28px] bg-white/20 shadow-2xl ring-1 ring-black/10 p-4"
                            />
                        </div>

                        {/* RIGHT — text */}
                        <div className="text-center lg:text-left">
                            <ul className="inline-block text-left list-disc pl-6 space-y-6">
                                <li className="text-[clamp(2.6rem,6vw,5rem)] font-normal leading-[0.95] tracking-tight text-black">
                                    No testers required
                                </li>
                                <li className="text-[clamp(2.6rem,6vw,5rem)] font-normal leading-[0.95] tracking-tight text-black">
                                    Get your App Live in 1 Day
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="cta"
                className={`relative w-full overflow-hidden py-28 flex items-center justify-center ${styles.sectionPurple}`}
            >
                {/* White grid overlay */}
                <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 ${styles.gridOverlay}`}
                />

                {/* Content */}
                <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
                    <h2 className="text-[clamp(2.4rem,6vw,4.6rem)] font-normal leading-none tracking-tight text-white">
                        Get Started Now
                    </h2>

                    <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6">
                        <CtaButton
                            label={TELEGRAM_CONTACT.label}
                            href={TELEGRAM_CONTACT.href}
                            iconSrc={TELEGRAM_CONTACT.iconSrc}
                            subLabel={TELEGRAM_CONTACT.value}
                            actionLabel="Message on Telegram"
                        />
                        <CtaButton
                            label={WHATSAPP_CONTACT.label}
                            href={WHATSAPP_CONTACT.href}
                            iconSrc={WHATSAPP_CONTACT.iconSrc}
                            subLabel="Chat on WhatsApp"
                            actionLabel="Start WhatsApp Chat"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

function CtaButton({
    href,
    label,
    iconSrc,
    subLabel,
    actionLabel,
}: {
    href: string;
    label: string;
    iconSrc: string;
    subLabel: string;
    actionLabel: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex-1 ${styles.ctaCard}`}
        >
            <span className={styles.ctaGlow} aria-hidden />
            <div className="relative z-10 flex items-center gap-4 sm:gap-5">
                <span className={styles.ctaIconWrap}>
                    <Image
                        src={iconSrc}
                        alt={`${label} icon`}
                        width={40}
                        height={40}
                        className="h-10 w-10 sm:h-11 sm:w-11"
                    />
                </span>
                <div className="min-w-0 flex-1">
                    <div className={styles.ctaEyebrow}>{label}</div>
                    <div className={styles.ctaAction}>{actionLabel}</div>
                    <div className={styles.ctaSubLabel}>{subLabel}</div>
                </div>
                <span className={styles.ctaArrow} aria-hidden>
                    →
                </span>
            </div>
        </a>
    );
}
