// src/app/artist/page.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ArtistPage() {
  return (
    <div className="w-full space-y-8">
      <h1 className="text-3xl font-bold mb-6">The Artist</h1>

      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-96 h-64 rounded-lg overflow-hidden">
              <img
                src="/images/silfra.JPG"
                alt="Cameron Curtis"
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Cameron Curtis</h3>
                <p className="text-gray-700">
                  Philosophy Student & Comic Creator
                </p>
                <p className="text-gray-700 mt-2">
                  I'm a philosophy student exploring the universe of visual
                  storytelling and philosophical concepts. Through comics, I aim
                  to make complex philosophical ideas more accessible and
                  engaging with the masses that stumble upon this website.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Education</h3>
                <p className="text-gray-700">Comp-Sci Transfer Pathway</p>
                <p className="text-gray-600 text-sm">North Hennepin Community College</p>
                <p className="text-gray-600 text-sm">Brooklyn Park, Minnesota</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Project Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Visual Philosophy</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Making philosophical concepts accessible through visual
                  storytelling. 
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Educational Comics</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Creating engaging educational content that bridges philosophy
                  and art with tech.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="flex gap-4">
              <a
                href="mailto:cameron@aerviz.co"
                className="text-blue-500 hover:text-blue-700"
              >
                Email
              </a>
              <a
                href="https://twitter.com/OptimumMeans"
                className="text-blue-500 hover:text-blue-700"
              >
                Twitter
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
