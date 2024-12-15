// src/app/comics/nietzsche-becoming/page.tsx
"use client";

import { ComicViewer } from "@/components/comic/ComicViewer";
import { ComicQuote } from "@/components/comic/ComicQuote";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function NietzscheBecomingPage() {
  const pages = [
    // Title Page
    {
      pageNumber: 0,
      title: "Becoming Who You Are: A Journey Through Self-Overcoming",
      panels: [
        <div
          key="0-1"
          className="col-span-2 border-4 border-black p-8 bg-gradient-to-br from-purple-100 to-blue-100"
        >
          <div className="flex flex-col justify-between">
            <div className="text-center mb-4">
              <h1 className="font-heading text-4xl font-bold">
                Becoming Who You Are
              </h1>
              <h2 className="text-xl italic">
                A Journey Through Self-Overcoming
              </h2>
            </div>

            <div className="w-full mb-8">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-auto max-w-2xl mx-auto"
              >
                {/* Mountain Symbolism */}
                <path
                  d="M 0 400 L 150 100 L 250 300 L 400 150 L 400 400 Z"
                  fill="none"
                  stroke="black"
                  strokeWidth="4"
                  className="drop-shadow-lg"
                />

                {/* Nietzsche Profile */}
                <g transform="translate(150, 150)">
                  <path
                    d="M 0 0 Q 50 -20 100 0 Q 75 50 50 100 Q 25 50 0 0"
                    fill="none"
                    stroke="black"
                    strokeWidth="3"
                  />
                  <circle
                    cx="50"
                    cy="30"
                    r="25"
                    fill="none"
                    stroke="black"
                    strokeWidth="3"
                  />
                  <path
                    d="M 25 35 Q 50 45 75 35"
                    fill="none"
                    stroke="black"
                    strokeWidth="3"
                  />
                </g>

                {/* Eternal Return */}
                <circle
                  cx="200"
                  cy="200"
                  r="160"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
                <path
                  d="M 200 40 A 160 160 0 0 1 360 200"
                  fill="none"
                  stroke="black"
                  strokeWidth="4"
                />
                <path
                  d="M 355 195 L 360 200 L 355 205"
                  fill="none"
                  stroke="black"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2 italic">"Become who you are"</p>
              <p className="text-sm">
                A Visual Exploration of Eternal Recurrence, Will to Power, and
                the Übermensch
              </p>
            </div>
          </div>
        </div>,
        <div
          key="0-2"
          className="col-span-2 border-4 border-black p-6 bg-gradient-to-br from-gray-50 to-blue-50"
        >
          <div className="flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-4">Created With</h3>
              <ul className="text-sm space-y-1">
                <li>Inkscape - Vector Graphics</li>
                <li>TypeScript & React</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Original Images</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded p-2">
                  <img
                    src="/images/original.jpg"
                    alt="Original Nietzsche portrait"
                    className="w-full h-48 object-contain"
                  />
                  <p className="text-xs mt-1 text-gray-600">
                    Original Portrait
                  </p>
                </div>
                <div className="bg-gray-100 rounded p-2">
                  <img
                    src="/images/comic1.png"
                    alt="Comic panel process"
                    className="w-full h-48 object-contain"
                  />
                  <p className="text-xs mt-1 text-gray-600">
                    Panel Development
                  </p>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-600 mt-4">
              <p>Created: November-December 2024</p>
              <p>For: Intro to Philosophy Final</p>
            </div>
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
          className="col-span-2 border-4 border-black p-4 bg-white"
        >
          <div className="relative">
            <img
              src="/images/comic1.png"
              alt="Nietzsche contemplating in mirror"
              className="w-full mb-4"
            />
          </div>
        </div>,
        <div
          key="1-2"
          className="aspect-square border-4 border-black p-6 bg-white"
        >
          <div className="h-full flex flex-col space-y-6">
            <h3 className="text-xl font-bold text-gray-800">
              Philosophical Reflections
            </h3>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-blue-600 font-semibold">Tao Te Ching</h4>
                <p className="text-sm italic mt-1">
                  "He who overcomes others is strong; He who overcomes himself
                  has the will of power."
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-blue-600 font-semibold">The Analects</h4>
                <p className="text-sm italic mt-1">
                  "At fifteen I set my heart on learning; at thirty I took my
                  stand; at forty I came to be free from doubts..."
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-blue-600 font-semibold">Bettcher</h4>
                <p className="text-sm italic mt-1">
                  "What is it to philosophize from underneath the theory, on the
                  other side of theory?"
                </p>
              </div>
            </div>
          </div>
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
          className="col-span-2 border-4 border-black p-4 bg-white"
        >
          <div className="relative">
            <img
              src="/images/comic2.png"
              alt="The journey of self-discovery and learning"
              className="w-full mb-4"
            />
          </div>
        </div>,
        <div
          key="2-2"
          className="aspect-square border-4 border-black p-6 bg-white"
        >
          <div className="h-full flex flex-col space-y-6">
            <h3 className="text-xl font-bold text-gray-800">
              Philosophical Reflections
            </h3>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-blue-600 font-semibold">
                  Nietzsche's Will to Power
                </h4>
                <p className="text-sm italic mt-1">
                  "And life itself told me this secret: 'Behold,' it said, 'I am
                  that which must overcome itself again and again.'"
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-blue-600 font-semibold">
                  The True Meaning
                </h4>
                <p className="text-sm italic mt-1">
                  "The will to power is not about dominating others, but about
                  mastering oneself."
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-blue-600 font-semibold">Ancient Wisdom</h4>
                <p className="text-sm italic mt-1">
                  "What is good? All that heightens the feeling of power, the
                  will to power, power itself in man."
                </p>
              </div>
            </div>
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
          className="col-span-2 border-4 border-black p-4 bg-white"
        >
          <div className="relative">
            <img
              src="/images/comic3.png"
              alt="Breaking free from conventional thinking"
              className="w-full mb-4"
            />
          </div>
        </div>,
        <div
          key="3-2"
          className="aspect-square border-4 border-black p-6 bg-white"
        >
          <div className="h-full flex flex-col space-y-6">
            <h3 className="text-xl font-bold text-gray-800">
              Philosophical Reflections
            </h3>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-blue-600 font-semibold">
                  Breaking From Convention
                </h4>
                <p className="text-sm italic mt-1">
                  "The surest way to corrupt a youth is to instruct him to hold
                  in higher esteem those who think alike than those who think
                  differently." - Nietzsche, The Dawn (1881)
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-blue-600 font-semibold">
                  The Dawn of New Values
                </h4>
                <p className="text-sm italic mt-1">
                  "When the great Tao declines, virtue of humanity and
                  righteousness shall arise." - Lao Tzu, Tao Te Ching
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-blue-600 font-semibold">
                  The Individual's Struggle
                </h4>
                <p className="text-sm italic mt-1">
                  "The individual has always had to struggle to keep from being
                  overwhelmed by the tribe." - Nietzsche, Beyond Good and Evil
                  (1886)
                </p>
              </div>
            </div>
          </div>
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
          className="col-span-2 border-4 border-black p-4 bg-white"
        >
          <div className="relative">
            <img
              src="/images/comic4.png"
              alt="The process of transformation and becoming"
              className="w-full mb-4"
            />
          </div>
        </div>,
        <div
          key="4-2"
          className="aspect-square border-4 border-black p-6 bg-white"
        >
          <div className="h-full flex flex-col space-y-6">
            <h3 className="text-xl font-bold text-gray-800">
              Philosophical Reflections
            </h3>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-blue-600 font-semibold">
                  Resistance and Recovery
                </h4>
                <p className="text-sm italic mt-1">
                  "To recover ourselves and our meaning, we must rise above a
                  state of denial and embrace the histories of resistance that
                  can transform our worldviews." - bell hooks, Black Looks
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-blue-600 font-semibold">
                  Active Transformation
                </h4>
                <p className="text-sm italic mt-1">
                  "Resistance is the tension between subjectification and active
                  subjectivity, that minimal sense of agency required for the
                  oppressing-resisting relation being an active one." - Toward a
                  Decolonial Feminism
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-blue-600 font-semibold">
                  The Path Forward
                </h4>
                <p className="text-sm italic mt-1">
                  "The greatest weight: What, if some day or night a demon were
                  to steal after you into your loneliest loneliness and say to
                  you... would you not throw yourself down and gnash your teeth
                  and curse the demon who spoke thus?" - Nietzsche, The Gay
                  Science
                </p>
              </div>
            </div>
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
          className="col-span-2 border-4 border-black p-4 bg-white"
        >
          <div className="relative">
            <img
              src="/images/comic5.png"
              alt="The integration of different philosophical paths"
              className="w-full mb-4"
            />
          </div>
        </div>,
        <div
          key="5-2"
          className="aspect-square border-4 border-black p-6 bg-white"
        >
          <div className="h-full flex flex-col space-y-6">
            <h3 className="text-xl font-bold text-gray-800">
              Philosophical Reflections
            </h3>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-blue-600 font-semibold">
                  Shared Knowledge
                </h4>
                <p className="text-sm italic mt-1">
                  "The passing from mouth to mouth, from hand to hand of lived
                  practices, values, beliefs, ontologies, space-times, and
                  cosmologies constitutes one." - Revolutionary Renegades
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-blue-600 font-semibold">
                  Breaking Convention
                </h4>
                <p className="text-sm italic mt-1">
                  "Breaking with conventional racist paradigms, they create
                  alternative texts that are not solely reactions." - bell
                  hooks, Black Looks
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-blue-600 font-semibold">Final Synthesis</h4>
                <p className="text-sm italic mt-1">
                  "You have your way. I have my way. As for the right way, the
                  correct way, and the only way, it does not exist." -
                  Nietzsche, Thus Spoke Zarathustra
                </p>
              </div>
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
          <CardTitle>About This Comic</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            This philosophical comic explores the concept of becoming one's
            authentic self through the lens of various philosophical traditions,
            centered on Nietzsche's idea of self-overcoming and creation of
            values.
          </p>
          <br></br>
          <p className="text-gray-700">
            I chose a collage style approach, taking various images and
            converting them to a bitmap trace for artistic effect.
          </p>
        </CardContent>
      </Card>

      <div className="w-full">
        <ComicViewer pages={pages} />
      </div>
    </div>
  );
}
