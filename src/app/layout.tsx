// Layout Changes (src/app/layout.tsx)
import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import RootLayout from "@/components/shared/Layout";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-cormorant-garamond", // Add variable property
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-source-sans-3", // Add variable property
});

export const metadata: Metadata = {
  title: "Philosophia",
  description:
    "Exploring philosophical concepts through visual storytelling in comic-strip form.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${sourceSans3.variable} font-body`}
      >
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
