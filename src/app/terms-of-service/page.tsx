import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata = {
    title: "Terms of Service – Ravado Tech",
    description:
        "Terms of Service for Ravado Tech Ltd — the rules and conditions governing the use of our mobile applications and services.",
};

export default function TermsOfServicePage() {
    return (
        <main className="relative flex min-h-screen flex-col bg-white">
            <Navbar />

            <article className="mx-auto w-full max-w-3xl px-6 sm:px-10 pt-28 pb-24 flex flex-col gap-10">
                {/* Header */}
                <header className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-black">Terms of Service</h1>
                    <p className="text-sm text-gray-500">
                        Effective Date: 24 February 2026 &middot; Last Updated: 8 March 2026
                    </p>
                </header>

                {/* ── 1. Acceptance ── */}
                <Section title="1. Acceptance of Terms">
                    <p>
                        These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;you&quot; or &quot;User&quot;) and <strong>Ravado Tech Ltd</strong> (&quot;Ravado Tech&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a private limited company registered in England and Wales (Company No. 17051903), with its registered office at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom.
                    </p>
                    <p>
                        By downloading, installing, accessing, or using any of our mobile applications, websites, or related services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms. If you do not agree, you must not use the Services.
                    </p>
                </Section>

                {/* ── 2. Eligibility ── */}
                <Section title="2. Eligibility">
                    <p>
                        You must be at least 13 years of age (or the minimum age required in your jurisdiction) to use our Services. If you are under 18 (or the age of majority in your jurisdiction), you represent that your parent or legal guardian has reviewed and agreed to these Terms on your behalf.
                    </p>
                    <p>
                        By using the Services, you represent and warrant that you have the legal capacity to enter into a binding agreement.
                    </p>
                </Section>

                {/* ── 3. Changes to Terms ── */}
                <Section title="3. Changes to These Terms">
                    <p>
                        We reserve the right to modify these Terms at any time. When we make material changes, we will update the &quot;Last Updated&quot; date and, where appropriate, notify you via in-app notification, email, or a prominent notice on our website. Your continued use of the Services after any changes constitutes your acceptance of the updated Terms.
                    </p>
                </Section>

                {/* ── 4. Account Registration ── */}
                <Section title="4. Account Registration">
                    <p>
                        Some Services may require you to create an account. When you do, you agree to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Provide accurate, current, and complete information.</li>
                        <li>Maintain and promptly update your account information.</li>
                        <li>Keep your password secure and confidential.</li>
                        <li>Accept responsibility for all activity that occurs under your account.</li>
                        <li>Notify us immediately at <a href="mailto:support@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">support@ravadotech.com</a> if you suspect unauthorised access.</li>
                    </ul>
                    <p>
                        We reserve the right to suspend or terminate accounts that violate these Terms or that have been inactive for an extended period.
                    </p>
                </Section>

                {/* ── 5. Licence ── */}
                <Section title="5. Licence to Use the Services">
                    <p>
                        Subject to your compliance with these Terms, Ravado Tech grants you a limited, non-exclusive, non-transferable, revocable licence to download, install, and use our applications on devices that you own or control, solely for your personal, non-commercial purposes.
                    </p>
                    <p>This licence does not allow you to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Copy, modify, distribute, sell, lease, or sublicence any part of the Services.</li>
                        <li>Reverse-engineer, decompile, or disassemble the software.</li>
                        <li>Remove, alter, or obscure any proprietary notices or labels.</li>
                        <li>Use the Services for any unlawful or unauthorised purpose.</li>
                    </ul>
                </Section>

                {/* ── 6. User Conduct ── */}
                <Section title="6. User Conduct">
                    <p>You agree not to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Use the Services to violate any applicable law or regulation.</li>
                        <li>Harass, abuse, threaten, or intimidate other users.</li>
                        <li>Upload or transmit viruses, malware, or any harmful code.</li>
                        <li>Attempt to gain unauthorised access to our systems, servers, or networks.</li>
                        <li>Interfere with or disrupt the integrity or performance of the Services.</li>
                        <li>Use automated systems (bots, scrapers, crawlers) to access the Services without our prior written consent.</li>
                        <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity.</li>
                        <li>Exploit the Services for any commercial purpose without our express authorisation.</li>
                    </ul>
                </Section>

                {/* ── 7. User Content ── */}
                <Section title="7. User Content">
                    <p>
                        You may be able to submit, post, or share content through the Services (&quot;User Content&quot;). You retain ownership of your User Content, but by submitting it you grant Ravado Tech a worldwide, royalty-free, non-exclusive, sublicensable licence to use, reproduce, modify, adapt, publish, and display such content solely for the purpose of operating and improving the Services.
                    </p>
                    <p>You represent and warrant that:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>You own or have the necessary rights to submit the User Content.</li>
                        <li>Your User Content does not infringe the intellectual property, privacy, or other rights of any third party.</li>
                        <li>Your User Content does not contain unlawful, defamatory, obscene, or otherwise objectionable material.</li>
                    </ul>
                    <p>
                        We reserve the right to remove any User Content that violates these Terms or that we find objectionable, at our sole discretion and without prior notice.
                    </p>
                </Section>

                {/* ── 8. In-App Purchases & Subscriptions ── */}
                <Section title="8. In-App Purchases and Subscriptions">
                    <p>
                        Some of our Services may offer in-app purchases or subscriptions processed through the Google Play Store or Apple App Store. By making a purchase, you agree to the payment terms of the applicable platform.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Pricing</strong> — all prices are displayed in the app and include applicable taxes as determined by the platform.</li>
                        <li><strong>Billing</strong> — recurring subscriptions are billed automatically at the start of each billing cycle unless cancelled before the renewal date.</li>
                        <li><strong>Cancellation</strong> — you may cancel a subscription at any time through your Google Play or Apple App Store account settings. Cancellation takes effect at the end of the current billing period.</li>
                        <li><strong>Refunds</strong> — refund requests are governed by the policies of Google Play or the Apple App Store. Please refer to the respective platform for details.</li>
                        <li><strong>Free trials</strong> — if a free trial is offered, it will convert to a paid subscription at the end of the trial period unless cancelled beforehand.</li>
                    </ul>
                </Section>

                {/* ── 9. Intellectual Property ── */}
                <Section title="9. Intellectual Property">
                    <p>
                        All content, features, functionality, trademarks, logos, and other intellectual property in or related to the Services are and remain the exclusive property of Ravado Tech Ltd or its licensors. These Terms do not grant you any right, title, or interest in such intellectual property except for the limited licence described in Section 5.
                    </p>
                    <p>
                        If you believe that content on our Services infringes your intellectual property rights, please contact us at <a href="mailto:legal@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">legal@ravadotech.com</a> with a detailed description of the alleged infringement.
                    </p>
                </Section>

                {/* ── 10. Third-Party Services ── */}
                <Section title="10. Third-Party Services and Links">
                    <p>
                        The Services may contain links to or integrations with third-party websites, services, or content that are not owned or controlled by Ravado Tech. We are not responsible for the availability, accuracy, content, or practices of third-party services. Your use of any third-party service is at your own risk and subject to that third party&apos;s terms and privacy policy.
                    </p>
                </Section>

                {/* ── 11. Disclaimers ── */}
                <Section title="11. Disclaimers">
                    <p>
                        THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                    </p>
                    <p>
                        We do not warrant that the Services will be uninterrupted, error-free, secure, or free of viruses or other harmful components. Your use of the Services is at your sole risk.
                    </p>
                </Section>

                {/* ── 12. Limitation of Liability ── */}
                <Section title="12. Limitation of Liability">
                    <p>
                        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, RAVADO TECH LTD, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES ARISING OUT OF OR IN CONNECTION WITH:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Your use of or inability to use the Services.</li>
                        <li>Any unauthorised access to or alteration of your data.</li>
                        <li>Any third-party conduct or content on the Services.</li>
                        <li>Any other matter relating to the Services.</li>
                    </ul>
                    <p>
                        Our total aggregate liability to you for all claims arising from or relating to the Services shall not exceed the amount you have paid us in the twelve (12) months preceding the event giving rise to the claim, or £100, whichever is greater.
                    </p>
                    <p>
                        Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law, including liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation.
                    </p>
                </Section>

                {/* ── 13. Indemnification ── */}
                <Section title="13. Indemnification">
                    <p>
                        You agree to indemnify, defend, and hold harmless Ravado Tech Ltd and its directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with your use of the Services, your violation of these Terms, or your violation of any rights of a third party.
                    </p>
                </Section>

                {/* ── 14. Termination ── */}
                <Section title="14. Termination">
                    <p>
                        We may suspend or terminate your access to the Services at any time, with or without cause and with or without notice, if we reasonably believe you have violated these Terms. Upon termination:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Your licence to use the Services is immediately revoked.</li>
                        <li>You must cease all use of the Services and delete all copies of our applications.</li>
                        <li>Provisions that by their nature should survive termination (including Sections 7, 9, 11, 12, 13, 16, and 17) will remain in effect.</li>
                    </ul>
                    <p>
                        You may terminate your account at any time by contacting us at <a href="mailto:support@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">support@ravadotech.com</a> or via the <a href="/delete-my-account" className="underline underline-offset-2 hover:text-black transition-colors">Delete My Account</a> page.
                    </p>
                </Section>

                {/* ── 15. App Store Terms ── */}
                <Section title="15. App Store Supplemental Terms">
                    <p>
                        If you access our Services through the Apple App Store or Google Play Store, the following additional terms apply:
                    </p>
                    <h3 className="text-base font-bold text-black">Apple App Store</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>These Terms are between you and Ravado Tech Ltd, not Apple Inc. Apple has no obligation to provide maintenance or support for the Services.</li>
                        <li>In the event of any failure of the Services to conform to any applicable warranty, you may notify Apple and Apple will refund the purchase price (if any). To the maximum extent permitted by law, Apple has no other warranty obligation.</li>
                        <li>Apple is not responsible for addressing any claims relating to the Services or your use thereof.</li>
                        <li>Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them.</li>
                    </ul>
                    <h3 className="text-base font-bold text-black mt-4">Google Play Store</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>These Terms are between you and Ravado Tech Ltd, not Google LLC.</li>
                        <li>Google is not responsible for the Services or any claims arising from your use of them.</li>
                        <li>You agree to comply with the Google Play Terms of Service in addition to these Terms.</li>
                    </ul>
                </Section>

                {/* ── 16. Governing Law ── */}
                <Section title="16. Governing Law and Dispute Resolution">
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict-of-law principles.
                    </p>
                    <p>
                        Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales. However, nothing in this section limits your right to bring proceedings in the courts of your country of residence if required by applicable consumer protection law.
                    </p>
                    <p>
                        If you are an EU consumer, you may also be entitled to use the European Commission&apos;s Online Dispute Resolution platform at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">ec.europa.eu/consumers/odr</a>.
                    </p>
                </Section>

                {/* ── 17. General Provisions ── */}
                <Section title="17. General Provisions">
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Entire Agreement</strong> — these Terms, together with our <a href="/privacy-policy" className="underline underline-offset-2 hover:text-black transition-colors">Privacy Policy</a> and any supplemental terms, constitute the entire agreement between you and Ravado Tech regarding the Services.</li>
                        <li><strong>Severability</strong> — if any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.</li>
                        <li><strong>Waiver</strong> — our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</li>
                        <li><strong>Assignment</strong> — you may not assign or transfer your rights under these Terms without our prior written consent. We may assign our rights and obligations without restriction.</li>
                        <li><strong>Force Majeure</strong> — we shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including natural disasters, pandemics, war, terrorism, strikes, or government actions.</li>
                        <li><strong>Notices</strong> — we may provide notices to you via in-app notifications, email, or posting on our website. You may send notices to us at <a href="mailto:legal@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">legal@ravadotech.com</a>.</li>
                    </ul>
                </Section>

                {/* ── 18. Contact Us ── */}
                <Section title="18. Contact Us">
                    <p>If you have any questions about these Terms of Service, please contact us:</p>
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
