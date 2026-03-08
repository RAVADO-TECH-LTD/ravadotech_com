"use client";

import { useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function CookieSettingsPage() {
    const openKlaro = useCallback(() => {
        if (window.klaro?.show) {
            window.klaro.show(undefined, true);
        }
    }, []);

    useEffect(() => {
        // Give Klaro a moment to initialise, then auto-open the modal
        const timer = setTimeout(openKlaro, 400);
        return () => clearTimeout(timer);
    }, [openKlaro]);

    return (
        <main className="relative flex min-h-screen flex-col bg-white">
            <Navbar />

            <article className="mx-auto w-full max-w-3xl px-6 sm:px-10 pt-28 pb-24 flex flex-col gap-10">
                <header className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-black">Cookie Settings</h1>
                    <p className="text-sm text-gray-500">
                        Manage your cookie preferences below. Changes take effect immediately.
                    </p>
                </header>

                <section className="flex flex-col gap-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                        We use cookies and similar technologies to provide essential website functionality, analyse traffic, and deliver relevant advertisements. You can choose which categories of cookies to allow.
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        Click the button below to open the consent manager and update your preferences. For more information, please read our{" "}
                        <a href="/cookie-policy" className="underline underline-offset-2 hover:text-black transition-colors">Cookie Policy</a>.
                    </p>

                    <button
                        type="button"
                        onClick={openKlaro}
                        className="mt-2 self-start rounded-lg bg-black px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-80"
                    >
                        Open Cookie Preferences
                    </button>
                </section>

                {/* Info cards */}
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <InfoCard
                        title="Essential"
                        description="Always active. Required for the website to function — security, consent storage, and session management."
                        always
                    />
                    <InfoCard
                        title="Analytics"
                        description="Help us understand how visitors use our site so we can improve the experience. Powered by Google Analytics & Firebase."
                    />
                    <InfoCard
                        title="Advertising"
                        description="Used to deliver and measure relevant advertisements in our free applications via Google AdMob."
                    />
                </section>

                <section className="flex flex-col gap-3 border-t border-gray-200 pt-6">
                    <h2 className="text-lg font-bold text-black">Related</h2>
                    <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                        <li><a href="/cookie-policy" className="underline underline-offset-2 hover:text-black transition-colors">Cookie Policy</a></li>
                        <li><a href="/privacy-policy" className="underline underline-offset-2 hover:text-black transition-colors">Privacy Policy</a></li>
                        <li><a href="/do-not-sell" className="underline underline-offset-2 hover:text-black transition-colors">Do Not Sell My Personal Information</a></li>
                    </ul>
                </section>

                <p className="text-center text-xs text-gray-400 pt-4 border-t border-gray-200">
                    © {new Date().getFullYear()} RAVADO TECH LTD. All rights reserved.
                </p>
            </article>

            <Footer />
        </main>
    );
}

function InfoCard({
    title,
    description,
    always,
}: {
    title: string;
    description: string;
    always?: boolean;
}) {
    return (
        <div className="rounded-xl border border-gray-200 p-5 flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-black">{title}</h3>
                {always && (
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                        Always on
                    </span>
                )}
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
        </div>
    );
}
