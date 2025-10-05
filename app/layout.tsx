import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { AppProviders } from "./_components/AppProviders";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://remixchecklist.com"),
  title: "Remix Checklist",
  description: "Keep track of your rewards in Mists of Pandaria: Remix",
  openGraph: {
    title: "Remix Checklist",
    description: "Keep track of your rewards in Mists of Pandaria: Remix",
    images: [
      {
        url: "/thumbnail.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-screen overflow-x-hidden ${dmSans.className}`}>
        <AppProviders>
          {children}
          <Analytics />
        </AppProviders>
      </body>
    </html>
  );
}
