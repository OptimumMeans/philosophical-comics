// src/app/comics/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import RootLayout from "@/components/shared/Layout";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Philosophia",
  description: "Exploring philosophical concepts through visual storytelling in comic-strip form.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
