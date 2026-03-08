import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata = {
    title: "Do Not Sell My Personal Information – Ravado Tech",
    description:
        "Exercise your right to opt out of the sale or sharing of your personal information under the CCPA/CPRA.",
};

export default function DoNotSellPage() {
    return (
        <main className="relative flex min-h-screen flex-col bg-white">
            <Navbar />

            <article className="mx-auto w-full max-w-3xl px-6 sm:px-10 pt-28 pb-24 flex flex-col gap-10">
                {/* Header */}
                <header className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-black">Do Not Sell or Share My Personal Information</h1>
                    <p className="text-sm text-gray-500">
                        Effective Date: 24 February 2026 &middot; Last Updated: 8 March 2026
                    </p>
                </header>

                {/* ── Overview ── */}
                <Section title="Your Right to Opt Out">
                    <p>
                        Under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), California residents have the right to opt out of the &quot;sale&quot; or &quot;sharing&quot; of their personal information.
                    </p>
                    <p>
                        <strong>Ravado Tech Ltd does not sell your personal information for monetary consideration.</strong> However, like many app publishers, some of our free applications may share device identifiers (such as advertising IDs) with third-party advertising partners for the purpose of delivering relevant advertisements. Under the broad definitions of the CCPA/CPRA, this may be considered a &quot;sale&quot; or &quot;share&quot; of personal information.
                    </p>
                </Section>

                {/* ── What Data May Be Shared ── */}
                <Section title="What Data May Be Shared">
                    <p>If you have not opted out, the following categories of data may be shared with advertising partners:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Device identifiers</strong> — Android Advertising ID or Apple IDFA.</li>
                        <li><strong>Usage data</strong> — app interaction events and general engagement metrics.</li>
                        <li><strong>Approximate location</strong> — derived from IP address (not precise GPS location).</li>
                    </ul>
                    <p>
                        This data is used solely for advertising measurement, attribution, and delivering contextual or personalised ads. For a full list of our advertising partners, see our <a href="/advertising-partners" className="underline underline-offset-2 hover:text-black transition-colors">Advertising Partners</a> page.
                    </p>
                </Section>

                {/* ── How to Opt Out ── */}
                <Section title="How to Opt Out">
                    <p>You can opt out of the sale or sharing of your personal information through any of the following methods:</p>

                    <h3 className="text-base font-bold text-black">1. Device-Level Settings</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Android</strong> — go to Settings &gt; Google &gt; Ads &gt; &quot;Delete advertising ID&quot; or &quot;Opt out of Ads Personalisation&quot;.</li>
                        <li><strong>iOS</strong> — go to Settings &gt; Privacy &amp; Security &gt; Tracking &gt; disable &quot;Allow Apps to Request to Track&quot;.</li>
                    </ul>

                    <h3 className="text-base font-bold text-black mt-4">2. In-App Consent</h3>
                    <p>
                        Where applicable, our apps present a consent prompt at first launch or in the app settings. You can decline personalised advertising at that point or change your preference at any time in the app&apos;s settings menu.
                    </p>

                    <h3 className="text-base font-bold text-black mt-4">3. Contact Us Directly</h3>
                    <p>
                        You can submit an opt-out request by emailing us at <a href="mailto:support@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">support@ravadotech.com</a> with the subject line <strong>&quot;Do Not Sell My Information&quot;</strong>. Please include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Your name and email address associated with your account (if applicable).</li>
                        <li>The name of the application(s) you use.</li>
                        <li>Your device type (Android or iOS).</li>
                    </ul>
                    <p>
                        We will process your request within 15 business days.
                    </p>
                </Section>

                {/* ── What Happens After Opt-Out ── */}
                <Section title="What Happens After You Opt Out">
                    <ul className="list-disc pl-6 space-y-1">
                        <li>We will stop sharing your device identifiers with advertising partners for personalised advertising purposes.</li>
                        <li>You may still see advertisements in our free apps, but they will be contextual (non-personalised).</li>
                        <li>Opting out does not affect data processing that is not considered a &quot;sale&quot; or &quot;share&quot; under the CCPA/CPRA (e.g. analytics for improving our Services).</li>
                        <li>Your use of the Services will not be affected — we do not discriminate against users who exercise their privacy rights.</li>
                    </ul>
                </Section>

                {/* ── Global Privacy Control ── */}
                <Section title="Global Privacy Control (GPC)">
                    <p>
                        We respect the Global Privacy Control (GPC) signal. If your browser or device sends a GPC signal, we will treat it as a valid opt-out request for the sale or sharing of personal information associated with that browser or device.
                    </p>
                </Section>

                {/* ── Authorised Agents ── */}
                <Section title="Authorised Agents">
                    <p>
                        You may designate an authorised agent to submit an opt-out request on your behalf. The agent must provide written proof of authorisation signed by you, or a valid power of attorney. We may contact you directly to verify the request.
                    </p>
                </Section>

                {/* ── Related Policies ── */}
                <Section title="Related Policies">
                    <ul className="list-disc pl-6 space-y-1">
                        <li><a href="/privacy-policy" className="underline underline-offset-2 hover:text-black transition-colors">Privacy Policy</a></li>
                        <li><a href="/cookie-policy" className="underline underline-offset-2 hover:text-black transition-colors">Cookie Policy</a></li>
                        <li><a href="/advertising-partners" className="underline underline-offset-2 hover:text-black transition-colors">Advertising Partners</a></li>
                        <li><a href="/privacy-request" className="underline underline-offset-2 hover:text-black transition-colors">Privacy Request</a></li>
                    </ul>
                </Section>

                {/* ── Contact ── */}
                <Section title="Contact Us">
                    <p>If you have questions about this page or your opt-out rights, please contact us:</p>
                    <address className="not-italic text-sm text-gray-700 leading-relaxed pl-4 border-l-2 border-gray-200 mt-2">
                        <strong>Ravado Tech Ltd</strong><br />
                        71-75 Shelton Street, Covent Garden<br />
                        London, WC2H 9JQ, United Kingdom<br /><br />
                        General Support: <a href="mailto:support@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">support@ravadotech.com</a><br />
                        Legal Enquiries: <a href="mailto:legal@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">legal@ravadotech.com</a>
                    </address>
                </Section>

                {/* Copyright */}
                <p className="text-center text-xs text-gray-400 pt-4 border-t border-gray-200">
                    © {new Date().getFullYear()} RAVADO TECH LTD. All rights reserved.
                </p>
            </article>

            <Footer />
        </main>
    );
}

/* ─── Reusable section wrapper ─── */
function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col gap-3">
            <h2 className="text-lg font-bold text-black">{title}</h2>
            <div className="text-sm text-gray-700 leading-relaxed flex flex-col gap-3">
                {children}
            </div>
        </section>
    );
}
