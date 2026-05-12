import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fluxential.com"),
  title: {
    default:
      "Fluxential | AI Automation Agency Los Angeles",
    template: "%s | Fluxential",
  },
  description:
    "Fluxential helps Los Angeles businesses automate operations with AI systems, AI agents, workflow automation, and intelligent growth infrastructure.",
  keywords: [
    "AI automation agency Los Angeles",
    "AI workflow automation Los Angeles",
    "AI consulting Los Angeles",
    "AI business automation California",
    "AI agents for businesses",
    "AI systems agency",
    "workflow automation company",
  ],
  alternates: {
    canonical: "https://fluxential.com",
  },
  openGraph: {
    title: "Fluxential | AI Automation Agency Los Angeles",
    description:
      "Fluxential helps Los Angeles businesses automate operations with AI systems, AI agents, workflow automation, and intelligent growth infrastructure.",
    url: "https://fluxential.com",
    siteName: "Fluxential",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fluxential AI Automation Agency Los Angeles",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fluxential | AI Automation Agency Los Angeles",
    description:
      "Fluxential helps Los Angeles businesses automate operations with AI systems, AI agents, workflow automation, and intelligent growth infrastructure.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}