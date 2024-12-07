// src/app/comics/nietzsche-becoming/page.tsx
"use client";

import { ComicViewer } from "@/components/comic/ComicViewer";
import { ComicQuote } from "@/components/comic/ComicQuote";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function NietzscheBecomingPage() {
  const pages = [
    // Title Page
    {
      pageNumber: 0,
      title: "Title Page",
      panels: [
        <div
          key="title"
          className="col-span-2 h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-100 to-blue-100"
        >
          <h1 className="text-4xl font-bold mb-4">Becoming Who You Are</h1>
          <h2 className="text-2xl mb-8">A Journey Through Self-Overcoming</h2>
          <div className="text-lg text-gray-700 mt-4">
            A Philosophical Comic Exploring Nietzsche's Concept of Self-Creation
          </div>
        </div>,
      ],
    },

    // Page 1: The Question of Authenticity
    {
      pageNumber: 1,
      title: "The Question of Authenticity",
      panels: [
        <div
          key="1-1"
          className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 p-6 flex flex-col justify-between"
        >
          <div className="text-xl font-bold mb-4">External Pressures</div>
          <div className="relative flex-1 border-2 border-gray-300 rounded-lg p-4">
            {/* Placeholder for illustration of societal masks/pressures */}
            <div className="absolute inset-0 bg-gray-100 opacity-20" />
            <div className="relative z-10">Society's Expectations</div>
          </div>
        </div>,
        <div
          key="1-2"
          className="aspect-square bg-gradient-to-br from-purple-50 to-blue-50 p-6"
        >
          <ComicQuote
            text="We trans people live an 'everyday' shot through with perplexity, shot through with WTF questions."
            author="Talia Mae Bettcher"
            work="What is Trans Philosophy?"
          />
        </div>,
      ],
    },

    // Page 2: The Journey Begins
    {
      pageNumber: 2,
      title: "The Journey Begins",
      panels: [
        <div
          key="2-1"
          className="aspect-square bg-gradient-to-r from-green-50 to-blue-50 p-6 flex flex-col"
        >
          <div className="text-xl font-bold mb-4">The Path of Learning</div>
          <ComicQuote
            text="At fifteen I set my heart on learning; at thirty I took my stand..."
            author="Confucius"
            work="The Analects"
          />
        </div>,
        <div
          key="2-2"
          className="aspect-square bg-gradient-to-r from-blue-50 to-green-50 p-6"
        >
          <div className="text-xl font-bold mb-4">The Will to Power</div>
          <div className="relative flex-1 border-2 border-gray-300 rounded-lg p-4">
            {/* Placeholder for illustration of inner strength */}
            <div className="absolute inset-0 bg-gray-100 opacity-20" />
            <div className="relative z-10">Internal Growth</div>
          </div>
        </div>,
      ],
    },

    // Page 3: Breaking From Convention
    {
      pageNumber: 3,
      title: "Breaking From Convention",
      panels: [
        <div
          key="3-1"
          className="aspect-square bg-gradient-to-r from-yellow-50 to-red-50 p-6"
        >
          <div className="text-xl font-bold mb-4">Breaking Free</div>
          <div className="flex flex-col space-y-4">
            <div className="flex-1 border-2 border-gray-300 rounded-lg p-4">
              Questioning Inherited Values
            </div>
          </div>
        </div>,
        <div
          key="3-2"
          className="aspect-square bg-gradient-to-r from-red-50 to-yellow-50 p-6"
        >
          <div className="text-xl font-bold mb-4">Creating New Values</div>
          <ComicQuote
            text="When the great Tao declines, virtue of humanity and righteousness shall arise."
            author="Lao Tzu"
            work="Tao Te Ching"
          />
        </div>,
      ],
    },

    // Page 4: The Process of Becoming
    {
      pageNumber: 4,
      title: "The Process of Becoming",
      panels: [
        <div
          key="4-1"
          className="aspect-square bg-gradient-to-r from-indigo-50 to-purple-50 p-6"
        >
          <div className="text-xl font-bold mb-4">Metamorphosis</div>
          <ComicQuote
            text="One is not born, but rather becomes..."
            author="Simone de Beauvoir"
            work="The Second Sex"
          />
        </div>,
        <div
          key="4-2"
          className="aspect-square bg-gradient-to-r from-purple-50 to-indigo-50 p-6"
        >
          <div className="text-xl font-bold mb-4">Self-Creation</div>
          <div className="relative flex-1 border-2 border-gray-300 rounded-lg p-4">
            {/* Placeholder for butterfly emergence imagery */}
            <div className="absolute inset-0 bg-gray-100 opacity-20" />
            <div className="relative z-10">Emergence</div>
          </div>
        </div>,
      ],
    },

    // Page 5: Integration and Synthesis
    {
      pageNumber: 5,
      title: "Integration and Synthesis",
      panels: [
        <div
          key="5-1"
          className="aspect-square bg-gradient-to-r from-teal-50 to-blue-50 p-6"
        >
          <div className="text-xl font-bold mb-4">Multiple Paths</div>
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className="border-2 border-gray-300 rounded-lg p-2">
              Eastern
            </div>
            <div className="border-2 border-gray-300 rounded-lg p-2">
              Western
            </div>
            <div className="border-2 border-gray-300 rounded-lg p-2">
              Ancient
            </div>
            <div className="border-2 border-gray-300 rounded-lg p-2">
              Modern
            </div>
          </div>
        </div>,
        <div
          key="5-2"
          className="aspect-square bg-gradient-to-r from-blue-50 to-teal-50 p-6"
        >
          <div className="text-xl font-bold mb-4">Synthesis</div>
          <div className="flex flex-col space-y-4 h-full">
            <div className="flex-1 border-2 border-gray-300 rounded-lg p-4">
              Finding One's Own Way
            </div>
          </div>
        </div>,
      ],
    },

    // Page 6: References & Further Reading
    {
      pageNumber: 6,
      title: "References & Further Reading",
      panels: [
        <div key="ref" className="col-span-2 p-6 bg-gray-50">
          <h3 className="text-xl font-bold mb-4">References</h3>
          <ul className="space-y-2">
            <li>Bettcher, T. M. (2019). What is Trans Philosophy?</li>
            <li>Confucius. The Analects.</li>
            <li>Lao Tzu. Tao Te Ching.</li>
            <li>de Beauvoir, Simone. The Second Sex.</li>
            <li>Nietzsche, Friedrich. Thus Spoke Zarathustra.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6 mb-4">Further Reading</h3>
          <ul className="space-y-2">
            <li>
              Exploring themes of authenticity and self-creation in philosophy
            </li>
            <li>The influence of Eastern thought on Western philosophy</li>
            <li>Contemporary perspectives on identity and becoming</li>
          </ul>
        </div>,
      ],
    },
  ];

  return (
    <div className="w-full">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About This Chapter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            This philosophical comic explores the concept of becoming one's
            authentic self through the lens of various philosophical traditions,
            centered on Nietzsche's idea of self-overcoming and creation of
            values.
          </p>
        </CardContent>
      </Card>

      <div className="w-full">
        <ComicViewer pages={pages} />
      </div>
    </div>
  );
}
