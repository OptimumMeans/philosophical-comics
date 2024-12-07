// src/components/shared/Layout.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ProfileSidebar = () => (
  <aside className="w-64">
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 mb-4">
        <Image
          src="/images/headshot.jpeg"
          alt="Cameron Curtis"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <h2 className="text-xl font-bold mb-2">Cameron Curtis</h2>
      <p className="text-gray-600 text-sm mb-4">
        Philosophy Student, Comic Creator
      </p>
      <p className="text-gray-600 text-sm mb-4">Comp-Sci Transfer Pathway</p>
      <div className="text-gray-600 text-sm space-y-2 text-center">
        <p>Elk River, MN</p>
        <Link
          href="mailto:cameron@aerviz.co"
          className="block hover:text-blue-500"
        >
          Email
        </Link>
        <Link
          href="https://twitter.com/OptimumMeans"
          className="block hover:text-blue-500"
        >
          Twitter
        </Link>
      </div>
    </div>
  </aside>
);

const Navigation = () => (
  <nav className="flex justify-between items-center mb-8 py-4 border-b">
    <div className="flex items-center gap-2">
      <Link href="/" className="text-lg font-medium">
        Philosophia
      </Link>
    </div>
    <div className="flex items-center gap-6">
      <Link href="/comics" className="text-gray-600 hover:text-gray-900">
        Comics
      </Link>
      <Link href="/characters" className="text-gray-600 hover:text-gray-900">
        Characters
      </Link>
      <Link href="/artist" className="text-gray-600 hover:text-gray-900">
        Artist
      </Link>
    </div>
  </nav>
);

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const is404 = pathname === "/404" || pathname === "/not-found";

  if (is404) {
    return <div className="relative min-h-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4">
      <Navigation />

      <div className="flex gap-8">
        {/* Left Sidebar */}
        <ProfileSidebar />

        {/* Main Content Area */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default RootLayout;
