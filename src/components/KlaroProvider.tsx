"use client";

import { useEffect } from "react";

/*
 * Klaro cookie-consent configuration for Ravado Tech.
 * Docs: https://klaro.org/docs/integration/annotated-config
 *
 * Klaro is loaded via CDN script tag so that the UMD bundle
 * sets window.klaro in the global fallback path, giving us
 * reliable access to .setup() and .show() everywhere.
 */
const klaroConfig = {
    version: 1,
    elementID: "klaro",
    storageMethod: "cookie",
    storageName: "klaro",
    cookieDomain: ".ravadotech.com",
    cookieExpiresAfterDays: 365,
    privacyPolicy: "/privacy-policy",

    /* Appearance */
    htmlTexts: true,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,

    translations: {
        en: {
            consentModal: {
                title: "Cookie Settings",
                description:
                    "We use cookies and similar technologies to improve your experience, analyse traffic, and serve relevant ads. You can choose which services you allow below. For more details, see our <a href='/cookie-policy'>Cookie Policy</a>.",
            },
            consentNotice: {
                title: "Cookie Consent",
                description:
                    "We use cookies to enhance your browsing experience and analyse site traffic. You can manage your preferences or accept all cookies.",
                changeDescription:
                    "Our cookie settings have changed since your last visit. Please review and update your preferences.",
                learnMore: "Manage cookies",
            },
            purposes: {
                essential: {
                    title: "Essential",
                    description: "Required for the website to function properly.",
                },
                analytics: {
                    title: "Analytics",
                    description: "Help us understand how visitors interact with our website.",
                },
                advertising: {
                    title: "Advertising",
                    description: "Used to deliver relevant advertisements.",
                },
            },
            ok: "Accept All",
            decline: "Decline All",
            save: "Save Preferences",
        },
    },

    services: [
        {
            name: "essential",
            title: "Essential Cookies",
            description: "Strictly necessary cookies that enable core functionality such as security, consent storage, and accessibility. These cannot be disabled.",
            purposes: ["essential"],
            required: true,
            default: true,
            cookies: [
                ["klaro", "/", ".ravadotech.com"],
            ],
        },
        {
            name: "google-analytics",
            title: "Google Analytics",
            description: "Helps us understand how visitors interact with our apps and website by collecting anonymous usage statistics.",
            purposes: ["analytics"],
            default: false,
            cookies: [
                ["_ga", "/", ".ravadotech.com"],
                ["_gid", "/", ".ravadotech.com"],
                ["_gat", "/", ".ravadotech.com"],
            ],
        },
        {
            name: "firebase",
            title: "Google Firebase",
            description: "Analytics, crash reporting, and performance monitoring for our mobile applications.",
            purposes: ["analytics"],
            default: false,
        },
        {
            name: "google-ads",
            title: "Google AdMob / Ad Manager",
            description: "Delivers personalised or contextual advertisements in our free applications.",
            purposes: ["advertising"],
            default: false,
        },
    ],
};

// Expose config on window so klaro's auto-init can find it
declare global {
    interface Window {
        klaroConfig?: typeof klaroConfig;
        klaro?: {
            show: (config?: unknown, modal?: boolean) => void;
            getManager: (config?: unknown) => unknown;
        };
    }
}

export default function KlaroProvider() {
    useEffect(() => {
        // Set the config on window for klaro's auto-init
        window.klaroConfig = klaroConfig;

        // Load klaro JS via script tag (UMD sets window.klaro)
        const script = document.createElement("script");
        script.src = "https://cdn.kiprotect.com/klaro/v0.7/klaro.js";
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // Load Klaro CSS
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdn.kiprotect.com/klaro/v0.7/klaro.min.css";
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return null;
}
