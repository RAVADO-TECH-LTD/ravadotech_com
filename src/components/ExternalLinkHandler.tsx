"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    ExternalLink?: {
      postMessage: (url: string) => void;
    };
  }
}

function isExternalHref(href: string) {
  if (
    href.startsWith("#") ||
    href.startsWith("/") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return false;
  }

  try {
    return (
      new URL(href, window.location.href).origin !== window.location.origin
    );
  } catch {
    return false;
  }
}

function markExternalLinks(root: ParentNode = document) {
  root.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((link) => {
    const href = link.getAttribute("href");

    if (!href || !isExternalHref(href)) {
      return;
    }

    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

let fallbackWindowOpen: typeof window.open | null = null;

function openOutsideApp(url: string) {
  if (window.ExternalLink?.postMessage) {
    window.ExternalLink.postMessage(url);
    return;
  }

  (fallbackWindowOpen ?? window.open).call(
    window,
    url,
    "_blank",
    "noopener,noreferrer",
  );
}

export default function ExternalLinkHandler() {
  useEffect(() => {
    markExternalLinks();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            markExternalLinks(node);
          }
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        "a[href]",
      );
      const href = link?.getAttribute("href");

      if (!link || !href || !isExternalHref(href)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      openOutsideApp(link.href);
    };

    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target;

      if (!(form instanceof HTMLFormElement)) {
        return;
      }

      const action = form.getAttribute("action") || window.location.href;

      if (!isExternalHref(action) && form.target.toLowerCase() !== "_blank") {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      openOutsideApp(new URL(action, window.location.href).href);
    };

    const handleMessage = (event: MessageEvent) => {
      if (
        typeof event.data !== "object" ||
        event.data === null ||
        event.data.type !== "external-link" ||
        typeof event.data.url !== "string"
      ) {
        return;
      }

      openOutsideApp(new URL(event.data.url, window.location.href).href);
    };

    const originalOpen = window.open;
    fallbackWindowOpen = originalOpen;
    window.open = function openExternalWindow(url) {
      if (url) {
        openOutsideApp(new URL(url.toString(), window.location.href).href);
      }

      return null;
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("submit", handleSubmit, true);
    window.addEventListener("message", handleMessage);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("submit", handleSubmit, true);
      window.removeEventListener("message", handleMessage);
      window.open = originalOpen;
      fallbackWindowOpen = null;
    };
  }, []);

  return null;
}
