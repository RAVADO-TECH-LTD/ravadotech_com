"use client";

import { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react";

type RemoteLottieProps = {
  src: string;
  className?: string;
  ariaLabel?: string;
};

export default function RemoteLottie({
  src,
  className,
  ariaLabel = "Animation",
}: RemoteLottieProps) {
  const [animationData, setAnimationData] = useState<unknown | null>(null);
  const [hasError, setHasError] = useState(false);

  const lottieOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData,
    };
  }, [animationData]);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function load() {
      try {
        setHasError(false);
        const res = await fetch(src, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(`Failed to fetch Lottie: ${res.status}`);
        }
        const json = (await res.json()) as unknown;
        if (!cancelled) {
          setAnimationData(json);
        }
      } catch (e) {
        if (!cancelled) {
          setHasError(true);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [src]);

  if (hasError) {
    return (
      <div
        className={className}
        role="img"
        aria-label={ariaLabel}
        title="Animation failed to load"
      />
    );
  }

  if (!animationData) {
    return (
      <div
        className={className}
        role="img"
        aria-label={ariaLabel}
        title="Loading animation"
      />
    );
  }

  return (
    <div className={className} role="img" aria-label={ariaLabel}>
      <Lottie {...lottieOptions} />
    </div>
  );
}
