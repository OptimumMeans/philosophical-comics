import React from "react";
import Link from "next/link";
import Image from "next/image";

const ComicLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header / Nav */}
      <nav className="flex justify-between items-center mb-16">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg font-medium">Philosophia</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/comics" className="text-gray-600 hover:text-gray-900">
            Comics
          </Link>
          <Link
            href="/characters"
            className="text-gray-600 hover:text-gray-900"
          >
            Characters
          </Link>
          <Link href="/artist" className="text-gray-600 hover:text-gray-900">
            Artist
          </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex">
        {/* Left Sidebar Profile */}
        <aside className="w-64 pr-8">
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <div className="relative w-32 h-32 mb-4">
              <Image
                src="/images/headshot.jpeg"
                alt="Cameron Curtis"
                fill
                className="rounded-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <h2 className="text-xl font-bold mb-2">Cameron Curtis</h2>
            <p className="text-gray-600 text-sm mb-4">
              Philosophy Student, Comic Creator
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Comp-Sci Transfer Pathway
            </p>

            {/* Location & Links */}
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

        {/* Main Content */}
        <main className="flex-1">
          <h2 className="text-gray-800 text-xl font-semibold mb-6">
            Recent comics
          </h2>

          {/* Comic Entry */}
          <div className="space-y-6">
            <div className="comic-entry">
              <Link
                href="/comics/nietzsche-becoming"
                className="text-blue-500 hover:text-blue-700 text-lg block mb-2"
              >
                Becoming Who You Are: A Journey Through Self-Overcoming
              </Link>
              <p className="text-gray-600">
                Explore Nietzsche&apos;s philosophy of self-overcoming through
                ancient wisdom, modern struggles, and timeless truths
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ComicLayout;
