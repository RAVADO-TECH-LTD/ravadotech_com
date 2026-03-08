import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export const metadata = {
    title: "Imprint – Ravado Tech",
    description: "Legal entity information and contact details for Ravado Tech Ltd.",
};

const LEGAL_ROWS = [
    { label: "Legal Entity Name", value: "RAVADO TECH LTD" },
    { label: "Trading As", value: "Ravado Tech" },
    { label: "Entity Type", value: "Private Limited Company (Ltd)" },
    { label: "Company Registration Number", value: "17051903" },
    { label: "D‑U‑N‑S© Number", value: "234606066" },
    { label: "Incorporated In", value: "England and Wales, United Kingdom" },
    {
        label: "Registered Address",
        value: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom",
    },
    { label: "Contact Email", value: "support@ravadotech.com", href: "mailto:support@ravadotech.com" },
    { label: "Website", value: "ravadotech.com", href: "https://ravadotech.com" },
];

const DEPT_CONTACTS = [
    { dept: "General Support", email: "support@ravadotech.com" },
    { dept: "Legal Enquiries", email: "legal@ravadotech.com" },
    { dept: "Office", email: "office@ravadotech.com" },
    { dept: "CEO", email: "ceo@ravadotech.com" },
    { dept: "Business", email: "business@ravadotech.com" },
];

export default function ImprintPage() {
    return (
        <main className="relative flex min-h-screen flex-col bg-white">
            <Navbar />

            <div className="mx-auto w-full max-w-3xl px-6 sm:px-10 pt-28 pb-24 flex flex-col gap-14">

                {/* Page header */}
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold text-black">Imprint</h1>
                    <p className="text-sm text-gray-500">Legal entity information and contact details</p>
                </div>

                {/* Company name banner */}
                <div className="text-center">
                    <h2 className="text-[clamp(2rem,6vw,3rem)] font-black tracking-tight text-black uppercase">
                        Ravado Tech Ltd
                    </h2>
                </div>

                {/* Legal details table */}
                <section className="flex flex-col divide-y divide-gray-200 border-y border-gray-200">
                    {LEGAL_ROWS.map((row) => (
                        <div key={row.label} className="grid grid-cols-[180px_1fr] gap-4 py-4">
                            <span className="text-sm text-gray-500 leading-snug">{row.label}</span>
                            {row.href ? (
                                <Link
                                    href={row.href}
                                    className="text-sm text-slate-700 underline underline-offset-2 hover:text-black transition-colors break-all"
                                >
                                    {row.value}
                                </Link>
                            ) : (
                                <span className="text-sm font-bold text-black">{row.value}</span>
                            )}
                        </div>
                    ))}
                </section>

                {/* Departmental contacts */}
                <section className="flex flex-col gap-6">
                    <h3 className="text-lg font-bold text-black">Departmental Contact Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 border-t border-gray-200 pt-6">
                        {DEPT_CONTACTS.map((c) => (
                            <div key={c.dept} className="flex flex-col gap-1">
                                <span className="text-sm font-bold text-black">{c.dept}</span>
                                <a
                                    href={`mailto:${c.email}`}
                                    className="text-sm text-slate-600 hover:text-black transition-colors"
                                >
                                    {c.email}
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Regulatory section */}
                <section className="flex flex-col gap-4 border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-bold text-black">Regulatory Information</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        <strong>RAVADO TECH LTD</strong> is registered with Companies House (England and Wales) under company number{" "}
                        <strong>17051903</strong>. The company is subject to the laws and regulations of England and Wales and operates as a private limited company. Our D‑U‑N‑S© Number is <strong>234606066</strong>.
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        We are committed to complying with all applicable regulations including the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, consumer protection legislation, and industry-specific standards for mobile application publishing.
                    </p>
                </section>

                {/* Copyright line */}
                <p className="text-center text-xs text-gray-400 pt-4">
                    © {new Date().getFullYear()} RAVADO TECH LTD. All rights reserved.
                </p>

            </div>

            <Footer />
        </main>
    );
}
