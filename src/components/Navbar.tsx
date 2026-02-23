"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close menu on route change / outside click isn't needed for simple sites,
    // but lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
                {/* Logo */}
                <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
                    <Image
                        src="https://res.cloudinary.com/destej60y/image/upload/v1771802057/RAVADOTECH-LOGO-OnlyR_e3gzqu.png"
                        alt="Ravado Tech Logo"
                        width={44}
                        height={44}
                        className="h-11 w-auto object-contain"
                        priority
                    />
                    <span className="text-lg tracking-wide text-black">
                        Ravado Tech
                    </span>
                </Link>

                {/* Desktop links */}
                <ul className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-sm text-black transition-opacity hover:opacity-60"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger */}
                <button
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    <span
                        className={`block h-[2px] w-6 rounded-full bg-black transition-all duration-300 ${menuOpen ? "translate-y-[8px] rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block h-[2px] w-6 rounded-full bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-[2px] w-6 rounded-full bg-black transition-all duration-300 ${menuOpen ? "-translate-y-[8px] -rotate-45" : ""
                            }`}
                    />
                </button>
            </nav>

            {/* Mobile drawer */}
            <div
                className={`overflow-hidden bg-white transition-all duration-300 ease-in-out md:hidden ${menuOpen ? "max-h-64 border-t border-black/10" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col px-6 py-4">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="block py-3 text-base text-black transition-opacity hover:opacity-60"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
