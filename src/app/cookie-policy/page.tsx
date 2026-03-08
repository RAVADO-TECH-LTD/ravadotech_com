import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata = {
    title: "Cookie Policy – Ravado Tech",
    description:
        "Learn how Ravado Tech Ltd uses cookies and similar technologies across its websites and mobile applications.",
};

export default function CookiePolicyPage() {
    return (
        <main className="relative flex min-h-screen flex-col bg-white">
            <Navbar />

            <article className="mx-auto w-full max-w-3xl px-6 sm:px-10 pt-28 pb-24 flex flex-col gap-10">
                {/* Header */}
                <header className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-black">Cookie Policy</h1>
                    <p className="text-sm text-gray-500">
                        Effective Date: 24 February 2026 &middot; Last Updated: 8 March 2026
                    </p>
                </header>

                {/* ── 1. What Are Cookies ── */}
                <Section title="1. What Are Cookies?">
                    <p>
                        Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, provide a better user experience, and supply reporting information to site operators. Similar technologies include pixels, web beacons, and local storage.
                    </p>
                </Section>

                {/* ── 2. How We Use Cookies ── */}
                <Section title="2. How We Use Cookies">
                    <p>
                        Ravado Tech Ltd (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies on our website (<a href="https://ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">ravadotech.com</a>) for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Essential functionality</strong> — enabling core features such as security, consent management, and accessibility.</li>
                        <li><strong>Performance and analytics</strong> — understanding how visitors interact with our website so we can improve it.</li>
                        <li><strong>Advertising</strong> — delivering and measuring the effectiveness of relevant advertisements across our free applications.</li>
                    </ul>
                </Section>

                {/* ── 3. Types of Cookies We Use ── */}
                <Section title="3. Types of Cookies We Use">
                    <table className="w-full text-sm border border-gray-200 mt-2">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="border-b border-gray-200 px-4 py-2 font-bold">Category</th>
                                <th className="border-b border-gray-200 px-4 py-2 font-bold">Purpose</th>
                                <th className="border-b border-gray-200 px-4 py-2 font-bold">Duration</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-gray-700">
                            <tr>
                                <td className="px-4 py-2 font-semibold">Essential</td>
                                <td className="px-4 py-2">Enable core site functionality, store your cookie consent preferences (Klaro), and maintain session security.</td>
                                <td className="px-4 py-2">Session – 1 year</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-semibold">Analytics</td>
                                <td className="px-4 py-2">Collect anonymous statistics about page visits, session duration, and user behaviour via Google Analytics and Firebase.</td>
                                <td className="px-4 py-2">Up to 26 months</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-semibold">Advertising</td>
                                <td className="px-4 py-2">Deliver and measure advertisements via Google AdMob / Ad Manager. These cookies may track browsing activity across sites.</td>
                                <td className="px-4 py-2">Up to 13 months</td>
                            </tr>
                        </tbody>
                    </table>
                </Section>

                {/* ── 4. Specific Cookies ── */}
                <Section title="4. Specific Cookies We Set">
                    <table className="w-full text-sm border border-gray-200 mt-2">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="border-b border-gray-200 px-4 py-2 font-bold">Cookie Name</th>
                                <th className="border-b border-gray-200 px-4 py-2 font-bold">Provider</th>
                                <th className="border-b border-gray-200 px-4 py-2 font-bold">Category</th>
                                <th className="border-b border-gray-200 px-4 py-2 font-bold">Expiry</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-gray-700">
                            <tr>
                                <td className="px-4 py-2 font-mono text-xs">klaro</td>
                                <td className="px-4 py-2">Ravado Tech (Klaro)</td>
                                <td className="px-4 py-2">Essential</td>
                                <td className="px-4 py-2">1 year</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-mono text-xs">_ga</td>
                                <td className="px-4 py-2">Google Analytics</td>
                                <td className="px-4 py-2">Analytics</td>
                                <td className="px-4 py-2">2 years</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-mono text-xs">_gid</td>
                                <td className="px-4 py-2">Google Analytics</td>
                                <td className="px-4 py-2">Analytics</td>
                                <td className="px-4 py-2">24 hours</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-mono text-xs">_gat</td>
                                <td className="px-4 py-2">Google Analytics</td>
                                <td className="px-4 py-2">Analytics</td>
                                <td className="px-4 py-2">1 minute</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-xs text-gray-500 mt-1">
                        Third-party advertising cookies may vary depending on the ad network. See our <a href="/advertising-partners" className="underline underline-offset-2 hover:text-black transition-colors">Advertising Partners</a> page for details.
                    </p>
                </Section>

                {/* ── 5. Managing Your Preferences ── */}
                <Section title="5. Managing Your Cookie Preferences">
                    <p>You can control which non-essential cookies we use in several ways:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>
                            <strong>Klaro Consent Manager</strong> — when you first visit our website a consent banner is displayed. You can accept or decline categories of cookies. You can change your preferences at any time by visiting our{" "}
                            <a href="/cookie-settings" className="underline underline-offset-2 hover:text-black transition-colors">Cookie Settings</a> page.
                        </li>
                        <li>
                            <strong>Browser settings</strong> — most browsers allow you to block or delete cookies through their settings. Note that blocking essential cookies may impair site functionality.
                        </li>
                        <li>
                            <strong>Device settings</strong> — on mobile devices you can limit ad tracking (Android: Settings &gt; Google &gt; Ads; iOS: Settings &gt; Privacy &amp; Security &gt; Tracking).
                        </li>
                    </ul>
                </Section>

                {/* ── 6. Third-Party Cookies ── */}
                <Section title="6. Third-Party Cookies">
                    <p>
                        Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. The relevant third parties include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Google LLC</strong> — Google Analytics, Firebase, AdMob / Ad Manager.</li>
                    </ul>
                    <p>
                        These third parties process data under their own privacy policies. We encourage you to review them:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">Google Privacy Policy</a></li>
                        <li><a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">How Google Uses Cookies</a></li>
                    </ul>
                </Section>

                {/* ── 7. Legal Basis ── */}
                <Section title="7. Legal Basis for Cookie Use">
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Essential cookies</strong> — set under our legitimate interest to operate the website securely. No consent is required.</li>
                        <li><strong>Analytics and advertising cookies</strong> — set only after you provide consent via our Klaro consent manager, in accordance with the UK GDPR, EU GDPR, and the Privacy and Electronic Communications Regulations 2003 (PECR).</li>
                    </ul>
                </Section>

                {/* ── 8. Do Not Track ── */}
                <Section title='8. "Do Not Track" and GPC Signals'>
                    <p>
                        We respect the Global Privacy Control (GPC) signal. If your browser sends a GPC signal, we treat it as an opt-out of non-essential cookies and advertising-related tracking. Standard &quot;Do Not Track&quot; browser signals are honoured via our consent management settings.
                    </p>
                </Section>

                {/* ── 9. Changes ── */}
                <Section title="9. Changes to This Cookie Policy">
                    <p>
                        We may update this Cookie Policy from time to time. When we do, we will update the &quot;Last Updated&quot; date at the top and, where appropriate, notify you via our consent banner or website notice.
                    </p>
                </Section>

                {/* ── 10. Contact ── */}
                <Section title="10. Contact Us">
                    <p>If you have questions about our use of cookies, please contact us:</p>
                    <address className="not-italic text-sm text-gray-700 leading-relaxed pl-4 border-l-2 border-gray-200 mt-2">
                        <strong>Ravado Tech Ltd</strong><br />
                        71-75 Shelton Street, Covent Garden<br />
                        London, WC2H 9JQ, United Kingdom<br /><br />
                        Email: <a href="mailto:support@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">support@ravadotech.com</a>
                    </address>
                </Section>

                {/* Related */}
                <Section title="Related Policies">
                    <ul className="list-disc pl-6 space-y-1">
                        <li><a href="/privacy-policy" className="underline underline-offset-2 hover:text-black transition-colors">Privacy Policy</a></li>
                        <li><a href="/do-not-sell" className="underline underline-offset-2 hover:text-black transition-colors">Do Not Sell My Personal Information</a></li>
                        <li><a href="/cookie-settings" className="underline underline-offset-2 hover:text-black transition-colors">Cookie Settings</a></li>
                    </ul>
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
