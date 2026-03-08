import Image from "next/image";
import Link from "next/link";
import { Linkedin, Youtube } from "lucide-react";

function XLogo({ size = 16 }: { size?: number }) {
    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

/* ─── link data ─────────────────────────────────────────── */
const COMPANY_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Imprint", href: "/imprint" },
];

const PRIVACY_TOOLS_LINKS = [
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Do Not Sell", href: "/do-not-sell" },
    { label: "Delete My Account", href: "/delete-my-account" },
    { label: "Cookie Settings", href: "/cookie-settings" },
];

const PRIVACY_BAR_LINKS = [
    { label: "Privacy Summary", href: "/privacy-summary" },
    { label: "Privacy for Parents", href: "/privacy-for-parents" },
    { label: "Advertising Partners", href: "/advertising-partners" },
    { label: "Privacy Request", href: "/privacy-request" },
    { label: "Transparency", href: "/transparency" },
];

const SOCIAL = [
    {
        label: "LinkedIn",
        href: "https://linkedin.com/",
        Icon: Linkedin,
    },
    {
        label: "X",
        href: "https://x.com/",
        Icon: XLogo,
    },
    {
        label: "YouTube",
        href: "https://youtube.com/",
        Icon: Youtube,
    },
];

/* ─── sub-components ────────────────────────────────────── */
function LinkColumn({
    title,
    links,
}: {
    title: string;
    links: { label: string; href: string }[];
}) {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                {title}
            </h3>
            <ul className="flex flex-col gap-2">
                {links.map((l) => (
                    <li key={l.href}>
                        <Link
                            href={l.href}
                            className="text-sm text-white/80 underline-offset-4 decoration-white/50 transition-all hover:text-white hover:underline"
                        >
                            {l.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ─── main Footer ───────────────────────────────────────── */
export default function Footer() {
    return (
        <footer className="w-full bg-black text-white">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-16 flex flex-col gap-12">

                {/* TOP ROW — brand + nav columns */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

                    {/* Brand + store badges — spans 2 cols on lg */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {/* Logo + name */}
                        <Link href="/" className="flex items-center gap-3 self-start">
                            <Image
                                src="https://res.cloudinary.com/destej60y/image/upload/q_auto,f_auto/v1772926636/RavadoTechLtd-only-logo-black_ng7at8.png"
                                alt="Ravado Tech Logo"
                                width={44}
                                height={44}
                                className="h-11 w-auto object-contain invert"
                            />
                            <span className="text-lg tracking-wide font-semibold text-white">
                                Ravado Tech
                            </span>
                        </Link>

                        {/* Slogan */}
                        <p className="text-sm text-white/90 tracking-wide">
                            Apps Useful by design. Try them today and see the difference.
                        </p>

                        {/* App-store badges (display only) */}
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <a
                                href="https://play.google.com/store/apps/dev?id=5615586096995119277"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Get it on Google Play"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://res.cloudinary.com/destej60y/image/upload/v1771346830/Store_Google_Play_Type_Dark_Language_English_1_buber3.svg"
                                    alt="Get it on Google Play"
                                    className="h-12 w-auto object-contain transition-opacity hover:opacity-75"
                                    draggable={false}
                                />
                            </a>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://res.cloudinary.com/destej60y/image/upload/v1771346829/Store_App_Store_Type_Dark_Language_English_mqfkz7.svg"
                                alt="Download on the App Store"
                                className="h-12 w-auto object-contain"
                                draggable={false}
                            />
                        </div>
                    </div>

                    {/* Nav columns */}
                    <LinkColumn title="Company" links={COMPANY_LINKS} />
                    <LinkColumn title="Legal" links={LEGAL_LINKS} />
                    <LinkColumn title="Privacy Tools" links={PRIVACY_TOOLS_LINKS} />
                </div>

                {/* DIVIDER */}
                <hr className="border-white/10" />

                {/* PRIVACY BAR */}
                {/* <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
                    {PRIVACY_BAR_LINKS.map((l, i) => (
                        <span key={l.href} className="flex items-center gap-4">
                            <Link
                                href={l.href}
                                className="text-xs text-white/80 underline-offset-4 decoration-white/50 transition-all hover:text-white hover:underline"
                            >
                                {l.label}
                            </Link>
                            {i < PRIVACY_BAR_LINKS.length - 1 && (
                                <span className="text-white/80 text-xs select-none">|</span>
                            )}
                        </span>
                    ))}
                </div> */}

                {/* BOTTOM ROW — copyright + socials */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-white/80">
                        © 2026 RAVADO TECH LTD. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        {SOCIAL.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/70 transition-all hover:border-white/50 hover:bg-white/15 hover:text-white"
                            >
                                <Icon size={16} strokeWidth={1.8} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* ADDRESS — centred */}
                <p className="text-center text-xs text-white/80 tracking-wide">
                    RAVADO TECH LTD. 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom.
                </p>

            </div>
        </footer>
    );
}
