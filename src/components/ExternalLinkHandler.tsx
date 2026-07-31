"use client";

import { useEffect } from "react";

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
      window.open(link.href, "_blank", "noopener,noreferrer");
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
