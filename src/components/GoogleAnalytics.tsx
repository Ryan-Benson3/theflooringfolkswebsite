"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface GoogleAnalyticsProps {
  measurementId: string;
}

/**
 * Google Analytics 4 component for The Flooring Folks.
 * Tracks page views on every route change using Next.js App Router.
 *
 * Usage: Place <GoogleAnalytics measurementId="G-XXXXXXXXXX" /> in layout.tsx
 */
export default function GoogleAnalytics({
  measurementId,
}: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views on route changes
  useEffect(() => {
    if (!measurementId || measurementId === "G-XXXXXXXXXX") return;

    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");

    window.gtag?.("config", measurementId, {
      page_path: url,
    });
  }, [pathname, searchParams, measurementId]);

  // Don't render scripts if no real measurement ID is set
  if (!measurementId || measurementId === "G-XXXXXXXXXX") {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
