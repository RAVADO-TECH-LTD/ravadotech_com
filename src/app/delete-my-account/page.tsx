import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata = {
    title: "Delete My Account – Ravado Tech",
    description:
        "Request the deletion of your account and personal data held by Ravado Tech Ltd.",
};

export default function DeleteMyAccountPage() {
    return (
        <main className="relative flex min-h-screen flex-col bg-white">
            <Navbar />

            <article className="mx-auto w-full max-w-3xl px-6 sm:px-10 pt-28 pb-24 flex flex-col gap-10">
                {/* Header */}
                <header className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-black">Delete My Account</h1>
                    <p className="text-sm text-gray-500">
                        Effective Date: 9 March 2026 &middot; Last Updated: 9 March 2026
                    </p>
                </header>

                {/* ── Overview ── */}
                <Section title="Your Right to Deletion">
                    <p>
                        At Ravado Tech Ltd we respect your right to control your personal data. Under applicable data-protection laws — including the UK GDPR, EU GDPR, and the California Consumer Privacy Act (CCPA/CPRA) — you may request that we permanently delete the account and personal information we hold about you.
                    </p>
                    <p>
                        This page explains what deletion means, what data is affected, and how to submit your request.
                    </p>
                </Section>

                {/* ── What Gets Deleted ── */}
                <Section title="What Data Will Be Deleted">
                    <p>When we process an account-deletion request, the following data associated with your account will be permanently removed from our active systems:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Account profile</strong> — display name, email address, avatar, and preferences.</li>
                        <li><strong>Usage data</strong> — in-app activity logs, progress, achievements, and saved settings.</li>
                        <li><strong>User-generated content</strong> — any content you created within our applications.</li>
                        <li><strong>Purchase history</strong> — records of in-app purchases tied to your account (where applicable).</li>
                        <li><strong>Device identifiers</strong> — advertising IDs and push-notification tokens linked to your account.</li>
                        <li><strong>Support correspondence</strong> — emails and chat transcripts submitted through our support channels.</li>
                    </ul>
                </Section>

                {/* ── What May Be Retained ── */}
                <Section title="What May Be Retained">
                    <p>Certain data may be retained after deletion where we have a lawful obligation or legitimate interest:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Legal &amp; regulatory records</strong> — transaction records required by tax, accounting, or anti-fraud laws (typically retained for up to 7 years).</li>
                        <li><strong>Aggregated / anonymised data</strong> — statistical data that can no longer identify you may be kept for analytics and product-improvement purposes.</li>
                        <li><strong>Backup copies</strong> — data may persist in encrypted backups for up to 90 days before being purged through our normal backup-rotation cycle.</li>
                    </ul>
                </Section>

                {/* ── How to Request ── */}
                <Section title="How to Request Account Deletion">
                    <p>You can request deletion through any of the following methods:</p>

                    <h3 className="text-base font-bold text-black">1. Email</h3>
                    <p>
                        Send an email to{" "}
                        <a href="mailto:support@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">
                            support@ravadotech.com
                        </a>{" "}
                        with the subject line <strong>&quot;Delete My Account&quot;</strong>. Please include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>The email address associated with your account.</li>
                        <li>The name of the application(s) you use.</li>
                        <li>Your device type (Android or iOS).</li>
                        <li>Any additional information that helps us locate your account.</li>
                    </ul>

                    <h3 className="text-base font-bold text-black mt-4">2. In-App Settings</h3>
                    <p>
                        Where supported, you can request deletion directly from within the app. Navigate to <strong>Settings &gt; Account &gt; Delete My Account</strong> and follow the on-screen instructions.
                    </p>

                    <h3 className="text-base font-bold text-black mt-4">3. Privacy Request Form</h3>
                    <p>
                        You may also use our <a href="/contact" className="underline underline-offset-2 hover:text-black transition-colors">Contact page</a> to submit a deletion request.
                    </p>
                </Section>

                {/* ── Verification ── */}
                <Section title="Identity Verification">
                    <p>
                        To protect your privacy, we will verify your identity before processing a deletion request. Depending on the method you use, this may involve:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Confirming ownership via the email address on file.</li>
                        <li>Sending a verification code to your registered email.</li>
                        <li>Requesting additional documentation if the account cannot be verified through standard means.</li>
                    </ul>
                    <p>
                        We will never ask you for your password via email, phone, or any other channel.
                    </p>
                </Section>

                {/* ── Processing Timeline ── */}
                <Section title="Processing Timeline">
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Acknowledgement</strong> — we will confirm receipt of your request within 3 business days.</li>
                        <li><strong>Processing</strong> — deletion will be completed within 30 days of verification.</li>
                        <li><strong>Confirmation</strong> — you will receive a final confirmation email once your data has been removed from our active systems.</li>
                        <li><strong>Backup purge</strong> — residual copies in encrypted backups will be removed within 90 days.</li>
                    </ul>
                </Section>

                {/* ── Consequences ── */}
                <Section title="What Happens After Deletion">
                    <p>Once your account is deleted:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>You will no longer be able to sign in or access any saved data, progress, or purchases tied to the account.</li>
                        <li>Active subscriptions will not be automatically cancelled — please cancel any app-store subscriptions through Google Play or the Apple App Store before requesting deletion.</li>
                        <li>If you use our apps again in the future, a new account will be created and no previous data will be available.</li>
                    </ul>
                </Section>

                {/* ── Third-Party Data ── */}
                <Section title="Third-Party Data">
                    <p>
                        Deletion requests apply to data stored on Ravado Tech&apos;s systems. Data held by third-party services (such as Google, Apple, Firebase, or advertising partners) is subject to those providers&apos; own data-deletion processes. We will, where technically feasible, forward your deletion request to relevant third-party processors.
                    </p>
                    <p>
                        For information about third-party data handling, please refer to our{" "}
                        <a href="/privacy-policy" className="underline underline-offset-2 hover:text-black transition-colors">Privacy Policy</a>.
                    </p>
                </Section>

                {/* ── Children ── */}
                <Section title="Children&rsquo;s Accounts">
                    <p>
                        If you are a parent or legal guardian and wish to request the deletion of your child&apos;s account or personal data, please contact us at{" "}
                        <a href="mailto:support@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">
                            support@ravadotech.com
                        </a>{" "}
                        with proof of your parental authority. We will prioritise such requests in accordance with COPPA and applicable child-protection regulations.
                    </p>
                </Section>

                {/* ── Related Policies ── */}
                <Section title="Related Policies">
                    <ul className="list-disc pl-6 space-y-1">
                        <li><a href="/privacy-policy" className="underline underline-offset-2 hover:text-black transition-colors">Privacy Policy</a></li>
                        <li><a href="/terms-of-service" className="underline underline-offset-2 hover:text-black transition-colors">Terms of Service</a></li>
                        <li><a href="/do-not-sell" className="underline underline-offset-2 hover:text-black transition-colors">Do Not Sell My Personal Information</a></li>
                        <li><a href="/cookie-policy" className="underline underline-offset-2 hover:text-black transition-colors">Cookie Policy</a></li>
                    </ul>
                </Section>

                {/* ── Contact ── */}
                <Section title="Contact Us">
                    <p>If you have questions about account deletion or need assistance, please contact us:</p>
                    <address className="not-italic text-sm text-gray-700 leading-relaxed pl-4 border-l-2 border-gray-200 mt-2">
                        <strong>Ravado Tech Ltd</strong><br />
                        71-75 Shelton Street, Covent Garden<br />
                        London, WC2H 9JQ, United Kingdom<br /><br />
                        General Support:{" "}
                        <a href="mailto:support@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">
                            support@ravadotech.com
                        </a><br />
                        Legal Enquiries:{" "}
                        <a href="mailto:legal@ravadotech.com" className="underline underline-offset-2 hover:text-black transition-colors">
                            legal@ravadotech.com
                        </a>
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
