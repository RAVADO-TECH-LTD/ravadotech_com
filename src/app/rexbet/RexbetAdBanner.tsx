"use client";

import { useEffect, useRef } from "react";

const adScriptUrl =
  "https://js.thrncdn1.com/javascript.php?prefix=EtgF4_wjobVutv7iXV6HvmNd7ZgqdRLk&media=695&campaign=1";

export default function RexbetAdBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    container.innerHTML = "";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = adScriptUrl;

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[728px]"
      suppressHydrationWarning
    />
  );
}
