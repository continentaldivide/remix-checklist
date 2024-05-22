import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import WowheadScript from "./_components/WowheadScript";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remix Checklist",
  description: "Keep track of your rewards in Mists of Pandaria: Remix",
  openGraph: {
    title: "Remix Checklist",
    description: "Keep track of your rewards in Mists of Pandaria: Remix",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <WowheadScript />
      <body className={dmSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
