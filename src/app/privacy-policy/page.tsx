import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata = {
    title: "Privacy Policy – Ravado Tech",
    description:
        "Privacy Policy for Ravado Tech Ltd — how we collect, use, and protect your personal data across our mobile applications and services.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="relative flex min-h-screen flex-col bg-white">
            <Navbar />

            <article className="mx-auto w-full max-w-3xl px-6 sm:px-10 pt-28 pb-24 flex flex-col gap-10">
                {/* Header */}
                <header className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-black">Privacy Policy</h1>
                    <p className="text-sm text-gray-500">
                        Effective Date: 24 February 2026 &middot; Last Updated: 8 March 2026
                    </p>
                </header>

                {/* ── Introduction ── */}
                <Section title="1. Introduction">
                    <p>
                        Ravado Tech Ltd (&quot;Ravado Tech&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a private limited company registered in England and Wales (Company No. 17051903) with its registered office at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom.
                    </p>
                    <p>
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you use our mobile applications, websites, and related services (collectively, the &quot;Services&quot;). It applies to all users worldwide and is designed to comply with:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>The UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018</li>
                        <li>The EU General Data Protection Regulation (EU GDPR)</li>
                        <li>The California Consumer Privacy Act (CCPA) / California Privacy Rights Act (CPRA)</li>
                        <li>Google Play Developer Programme Policies</li>
                        <li>Apple App Store Review Guidelines and Apple Developer Program License Agreement</li>
                        <li>The Children&apos;s Online Privacy Protection Act (COPPA)</li>
                    </ul>
                    <p>
                        By accessing or using our Services you acknowledge that you have read and understood this Privacy Policy. If you do not agree, please do not use our Services.
                    </p>
                </Section>

                {/* ── Data Controller ── */}
                <Section title="2. Data Controller">
                    <p>
                        The data controller responsible for your personal data is:
                    </p>
                    <address className="not-italic text-sm text-gray-700 leading-relaxed pl-4 border-l-2 border-gray-200">
                        <strong>Ravado Tech Ltd</strong><br />
                        71-75 Shelton Street, Covent Garden<br />
                        London, WC2H 9JQ, United Kingdom<br />
                        Email: <a href="mailto:support@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">support@ravadotech.com</a>
                    </address>
                </Section>

                {/* ── Information We Collect ── */}
                <Section title="3. Information We Collect">
                    <h3 className="text-base font-bold text-black">3.1 Information You Provide Directly</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Account information</strong> — name, email address, username, password, and profile picture when you create an account.</li>
                        <li><strong>Contact information</strong> — details you submit when contacting support or completing forms.</li>
                        <li><strong>User-generated content</strong> — any content, feedback, or communications you submit through the Services.</li>
                        <li><strong>Transaction information</strong> — purchase or subscription records processed through Google Play or the Apple App Store (we do not collect or store payment card details).</li>
                    </ul>

                    <h3 className="text-base font-bold text-black mt-4">3.2 Information Collected Automatically</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Device information</strong> — device model, operating system and version, unique device identifiers (e.g. Android Advertising ID, Apple IDFA), language, and time zone.</li>
                        <li><strong>Usage data</strong> — app interaction events, feature usage, session duration, crash reports, and performance diagnostics.</li>
                        <li><strong>Network information</strong> — IP address, mobile carrier, and connection type.</li>
                        <li><strong>Cookies &amp; similar technologies</strong> — on our websites we may use cookies, pixels, and local storage for analytics and essential functionality. See our <a href="/cookie-policy" className="underline underline-offset-2 hover:text-black transition-colors">Cookie Policy</a> for details.</li>
                    </ul>

                    <h3 className="text-base font-bold text-black mt-4">3.3 Information from Third Parties</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Platform providers</strong> — Google Play and Apple may share limited account or transaction data with us in accordance with their policies.</li>
                        <li><strong>Analytics providers</strong> — we receive aggregated analytics and crash-reporting data from services such as Google Analytics for Firebase and Crashlytics.</li>
                        <li><strong>Advertising partners</strong> — if applicable, advertising networks may provide us with anonymised or pseudonymised performance data. See our <a href="/advertising-partners" className="underline underline-offset-2 hover:text-black transition-colors">Advertising Partners</a> page.</li>
                    </ul>
                </Section>

                {/* ── How We Use Your Information ── */}
                <Section title="4. How We Use Your Information">
                    <p>We process your personal data only where we have a lawful basis to do so. The primary bases and purposes are:</p>
                    <table className="w-full text-sm border border-gray-200 mt-2">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="border-b border-gray-200 px-4 py-2 font-bold">Purpose</th>
                                <th className="border-b border-gray-200 px-4 py-2 font-bold">Lawful Basis</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-gray-700">
                            <tr><td className="px-4 py-2">Provide, maintain, and improve the Services</td><td className="px-4 py-2">Contract / Legitimate Interest</td></tr>
                            <tr><td className="px-4 py-2">Create and manage your account</td><td className="px-4 py-2">Contract</td></tr>
                            <tr><td className="px-4 py-2">Process in-app purchases and subscriptions</td><td className="px-4 py-2">Contract</td></tr>
                            <tr><td className="px-4 py-2">Send transactional communications (e.g. receipts, support replies)</td><td className="px-4 py-2">Contract</td></tr>
                            <tr><td className="px-4 py-2">Send promotional communications (only with your consent)</td><td className="px-4 py-2">Consent</td></tr>
                            <tr><td className="px-4 py-2">Analyse usage and improve app performance</td><td className="px-4 py-2">Legitimate Interest</td></tr>
                            <tr><td className="px-4 py-2">Detect, prevent, and address fraud, abuse, or security issues</td><td className="px-4 py-2">Legitimate Interest / Legal Obligation</td></tr>
                            <tr><td className="px-4 py-2">Comply with legal obligations and respond to lawful requests</td><td className="px-4 py-2">Legal Obligation</td></tr>
                            <tr><td className="px-4 py-2">Display contextual or personalised advertising (where applicable)</td><td className="px-4 py-2">Consent / Legitimate Interest</td></tr>
                        </tbody>
                    </table>
                </Section>

                {/* ── Sharing & Disclosure ── */}
                <Section title="5. Sharing and Disclosure of Information">
                    <p>We do not sell your personal data. We may share data with the following categories of recipients:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Service providers</strong> — trusted vendors who perform services on our behalf (hosting, analytics, customer support) under contractual data-protection obligations.</li>
                        <li><strong>Platform operators</strong> — Google and Apple receive certain data as part of the normal operation of Android and iOS.</li>
                        <li><strong>Advertising partners</strong> — where you have consented, we may share device identifiers with advertising networks for measurement and attribution.</li>
                        <li><strong>Legal and regulatory authorities</strong> — when required by law, court order, or to protect the rights, property, or safety of Ravado Tech, our users, or the public.</li>
                        <li><strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of assets, your data may be transferred to the successor entity.</li>
                    </ul>
                </Section>

                {/* ── International Transfers ── */}
                <Section title="6. International Data Transfers">
                    <p>
                        Your data may be transferred to and processed in countries outside the UK and the European Economic Area (EEA). Where such transfers occur, we ensure appropriate safeguards are in place, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Standard Contractual Clauses (SCCs) approved by the UK Information Commissioner&apos;s Office and the European Commission.</li>
                        <li>Adequacy decisions where the destination country provides an adequate level of data protection.</li>
                        <li>Binding Corporate Rules or other recognised mechanisms.</li>
                    </ul>
                </Section>

                {/* ── Data Retention ── */}
                <Section title="7. Data Retention">
                    <p>
                        We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, to comply with legal obligations, to resolve disputes, and to enforce our agreements. When data is no longer required, we securely delete or anonymise it.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Account data</strong> — retained for the lifetime of your account and up to 30 days after deletion request, unless longer retention is required by law.</li>
                        <li><strong>Analytics data</strong> — aggregated and anonymised within 26 months of collection.</li>
                        <li><strong>Support correspondence</strong> — retained for up to 3 years after the last interaction.</li>
                        <li><strong>Legal and compliance records</strong> — retained as required by applicable law (typically 6–7 years).</li>
                    </ul>
                </Section>

                {/* ── Data Security ── */}
                <Section title="8. Data Security">
                    <p>
                        We implement industry-standard technical and organisational measures to protect your data against unauthorised access, alteration, disclosure, or destruction. These include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Encryption in transit (TLS/SSL) and at rest where applicable.</li>
                        <li>Access controls and role-based permissions for personnel.</li>
                        <li>Regular security assessments and vulnerability testing.</li>
                        <li>Incident response and breach notification procedures.</li>
                    </ul>
                    <p>
                        While we strive to protect your data, no method of transmission or storage is completely secure. We cannot guarantee absolute security.
                    </p>
                </Section>

                {/* ── Your Rights ── */}
                <Section title="9. Your Rights">
                    <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
                        <li><strong>Rectification</strong> — request correction of inaccurate or incomplete data.</li>
                        <li><strong>Erasure</strong> — request deletion of your personal data (&quot;right to be forgotten&quot;).</li>
                        <li><strong>Restriction</strong> — request that we restrict processing of your data in certain circumstances.</li>
                        <li><strong>Data portability</strong> — receive your data in a structured, machine-readable format.</li>
                        <li><strong>Objection</strong> — object to processing based on legitimate interests, including profiling.</li>
                        <li><strong>Withdraw consent</strong> — where processing is based on consent, withdraw it at any time without affecting the lawfulness of prior processing.</li>
                        <li><strong>Non-discrimination</strong> — (California residents) we will not discriminate against you for exercising your CCPA/CPRA rights.</li>
                    </ul>
                    <p>
                        To exercise any of these rights, please contact us at <a href="mailto:support@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">support@ravadotech.com</a> or visit our <a href="/privacy-request" className="underline underline-offset-2 hover:text-black transition-colors">Privacy Request</a> page. We will respond within 30 days (or the period required by applicable law).
                    </p>
                </Section>

                {/* ── Children's Privacy ── */}
                <Section title="10. Children&rsquo;s Privacy">
                    <p>
                        Our Services are not directed to children under the age of 13 (or the applicable minimum age in your jurisdiction). We do not knowingly collect personal data from children under this age. If we become aware that we have inadvertently collected data from a child, we will take steps to delete it promptly.
                    </p>
                    <p>
                        If you believe a child has provided us with personal data, please contact us immediately at <a href="mailto:support@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">support@ravadotech.com</a>.
                    </p>
                    <p>
                        Where any of our applications are specifically designed for or directed at children, we will create a separate, dedicated privacy policy for that application and comply fully with COPPA, UK Age Appropriate Design Code, and the relevant platform&apos;s families policies.
                    </p>
                </Section>

                {/* ── Third-Party Services ── */}
                <Section title="11. Third-Party Services and SDKs">
                    <p>
                        Our applications may integrate third-party services and software development kits (SDKs) that collect data independently. These may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Google Firebase</strong> — analytics, crash reporting, push notifications, and remote configuration.</li>
                        <li><strong>Google AdMob / Ad Manager</strong> — advertising services (where applicable).</li>
                        <li><strong>Apple StoreKit</strong> — in-app purchase processing.</li>
                        <li><strong>RevenueCat</strong> — subscription management (where applicable).</li>
                    </ul>
                    <p>
                        These third parties operate under their own privacy policies. We encourage you to review them. We are not responsible for the practices of third-party services.
                    </p>
                </Section>

                {/* ── Advertising ── */}
                <Section title="12. Advertising">
                    <p>
                        Some of our free applications may display advertisements served by third-party ad networks. These networks may use device identifiers and usage data to deliver personalised or contextual ads.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>You can opt out of personalised advertising by adjusting your device settings (Android: Settings &gt; Google &gt; Ads; iOS: Settings &gt; Privacy &amp; Security &gt; Tracking).</li>
                        <li>You can also visit our <a href="/do-not-sell" className="underline underline-offset-2 hover:text-black transition-colors">Do Not Sell</a> page to opt out of the sale or sharing of your data for advertising purposes.</li>
                    </ul>
                    <p>
                        For a list of our advertising partners, visit our <a href="/advertising-partners" className="underline underline-offset-2 hover:text-black transition-colors">Advertising Partners</a> page.
                    </p>
                </Section>

                {/* ── App-Specific Permissions ── */}
                <Section title="13. App Permissions">
                    <p>
                        Our mobile applications may request access to certain device features or data. We only request permissions that are necessary for the app&apos;s core functionality. Common permissions include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Internet access</strong> — required for all online features.</li>
                        <li><strong>Storage</strong> — to save user preferences or cache data locally.</li>
                        <li><strong>Camera / Photos</strong> — only if the app includes image capture or selection features.</li>
                        <li><strong>Notifications</strong> — to send push notifications (with your permission).</li>
                    </ul>
                    <p>
                        You can manage or revoke permissions at any time through your device settings. Revoking certain permissions may limit the functionality of the app.
                    </p>
                </Section>

                {/* ── Account Deletion ── */}
                <Section title="14. Account Deletion">
                    <p>
                        In compliance with Google Play and Apple App Store requirements, you may request deletion of your account and associated data at any time through:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>The in-app account settings (where available).</li>
                        <li>Our <a href="/delete-my-account" className="underline underline-offset-2 hover:text-black transition-colors">Delete My Account</a> page.</li>
                        <li>Emailing <a href="mailto:support@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">support@ravadotech.com</a>.</li>
                    </ul>
                    <p>
                        Upon receiving your request, we will delete or anonymise your personal data within 30 days, except where retention is required by law.
                    </p>
                </Section>

                {/* ── Do Not Track ── */}
                <Section title="15. &ldquo;Do Not Track&rdquo; Signals">
                    <p>
                        Some browsers transmit &quot;Do Not Track&quot; (DNT) signals. There is currently no universal standard for how companies should respond to DNT signals. We do not currently respond to DNT signals but honour opt-out preferences you set via our <a href="/cookie-settings" className="underline underline-offset-2 hover:text-black transition-colors">Cookie Settings</a> and device-level advertising controls.
                    </p>
                </Section>

                {/* ── California Residents ── */}
                <Section title="16. Additional Disclosures for California Residents">
                    <p>
                        If you are a California resident, you have additional rights under the CCPA/CPRA:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Right to Know</strong> — you may request details about the categories and specific pieces of personal information we have collected, the sources, business purposes, and third parties with whom we have shared it.</li>
                        <li><strong>Right to Delete</strong> — you may request deletion of your personal information, subject to certain exceptions.</li>
                        <li><strong>Right to Opt-Out</strong> — you may opt out of the &quot;sale&quot; or &quot;sharing&quot; of your personal information (as defined under the CCPA/CPRA).</li>
                        <li><strong>Right to Correct</strong> — you may request correction of inaccurate personal information.</li>
                        <li><strong>Right to Limit Use of Sensitive Personal Information</strong> — where applicable.</li>
                    </ul>
                    <p>
                        We do not sell personal information for monetary consideration. Where we share identifiers with advertising partners for cross-context behavioural advertising, this may constitute a &quot;sale&quot; or &quot;share&quot; under the CCPA/CPRA. You may opt out via our <a href="/do-not-sell" className="underline underline-offset-2 hover:text-black transition-colors">Do Not Sell</a> page.
                    </p>
                </Section>

                {/* ── Changes to This Policy ── */}
                <Section title="17. Changes to This Privacy Policy">
                    <p>
                        We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. When we make material changes, we will:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Update the &quot;Last Updated&quot; date at the top of this page.</li>
                        <li>Notify you via in-app notification, email, or a prominent notice on our website as appropriate.</li>
                    </ul>
                    <p>
                        We encourage you to review this Privacy Policy periodically.
                    </p>
                </Section>

                {/* ── Contact Us ── */}
                <Section title="18. Contact Us">
                    <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                    <address className="not-italic text-sm text-gray-700 leading-relaxed pl-4 border-l-2 border-gray-200 mt-2">
                        <strong>Ravado Tech Ltd</strong><br />
                        71-75 Shelton Street, Covent Garden<br />
                        London, WC2H 9JQ, United Kingdom<br /><br />
                        General Support: <a href="mailto:support@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">support@ravadotech.com</a><br />
                        Legal Enquiries: <a href="mailto:legal@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">legal@ravadotech.com</a>
                    </address>
                    <p>
                        You also have the right to lodge a complaint with your local data protection authority. In the UK, this is the <strong>Information Commissioner&apos;s Office (ICO)</strong> — <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">ico.org.uk</a>.
                    </p>
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
