// src/components/shared/ComicLayout.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ComicLayout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Profile Sidebar */}
      <aside className="md:w-64">
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
          <p className="text-gray-600 text-sm mb-4">
            Comp-Sci Transfer Pathway
          </p>
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
  );
};

export default ComicLayout;
