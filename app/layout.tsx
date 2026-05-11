import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fluxential | AI Automation & Growth Systems",
  description:
    "Fluxential builds intelligent automations, AI workflows, and growth systems that save time, reduce cost, and increase revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
