// src/app/comics/nietzsche-becoming/page.tsx
"use client";

import { ComicViewer } from "@/components/comic/ComicViewer";
import { ComicQuote } from "@/components/comic/ComicQuote";

export default function NietzscheBecomingPage() {
  // Comic content configuration
  const pages = [
    {
      pageNumber: 1,
      title: "The Question of Authenticity",
      panels: [
        // Panel 1: Opening quote from Bettcher
        <div key="1-1" className="relative aspect-square">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100" />
          <ComicQuote
            text="We trans people live an 'everyday' shot through with perplexity, shot through with WTF questions."
            author="Talia Mae Bettcher"
            work="What is Trans Philosophy?"
          />
        </div>,

        // Panel 2: Confucius quote for contrast
        <div key="1-2" className="relative aspect-square">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100" />
          <ComicQuote
            text="At fifteen I set my heart on learning; at thirty I took my stand..."
            author="Confucius"
            work="The Analects"
          />
        </div>,
      ],
    },
    // Additional pages would be added here following the same structure
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Becoming Who You Are: A Journey Through Self-Overcoming
        </h1>
        <p className="text-gray-600">
          A philosophical exploration through Nietzsche and (maybe, if I update
          this after submitting) other great thinkers
        </p>
      </div>

      <ComicViewer pages={pages} />

      {/* References Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">References</h2>
        <div className="space-y-2 text-gray-600">
          <p>Bettcher, T. M. (2019). What is Trans Philosophy?</p>
          <p>Confucius. (2003). The Analects.</p>
          {/* Add other references as needed */}
        </div>
      </div>
    </div>
  );
}
