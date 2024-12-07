// src/app/characters/page.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function CharactersPage() {
  return (
    <div className="w-full space-y-8">
      <h1 className="text-3xl font-bold mb-6">Philosophical Characters</h1>

      <Card>
        <CardHeader>
          <CardTitle>Friedrich Wilhelm Nietzsche</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-96 h-78 rounded-lg overflow-hidden">
              <img
                src="/images/Nietzsche.jpg"
                alt="Friedrich Nietzsche"
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Life & Times</h3>
                <p className="text-gray-700">
                  (15 October 1844 – 25 August 1900)
                </p>
                <p className="text-gray-700 mt-2">
                  German philosopher, cultural critic, composer, poet, and
                  philologist whose work has exerted a profound influence on
                  modern philosophy and Western thought.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Key Concepts</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Will to Power</li>
                  <li>Eternal Recurrence</li>
                  <li>Übermensch</li>
                  <li>Master-Slave Morality</li>
                  <li>Perspectivism</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Featured Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">
                  Thus Spoke Zarathustra (1883-1885)
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  His philosophical novel presenting the concept of the
                  Übermensch and eternal recurrence.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Beyond Good and Evil (1886)</h4>
                <p className="text-gray-600 text-sm mt-2">
                  A critique of traditional morality and truth-seeking.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Related Comics</h3>
            <Link
              href="/comics/nietzsche-becoming"
              className="text-blue-500 hover:text-blue-700"
            >
              Becoming Who You Are: A Journey Through Self-Overcoming
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
