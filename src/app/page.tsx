// src/app/page.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="font-heading text-4xl font-bold">
          Welcome to Philosophia
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Exploring complex philosophical ideas through visual storytelling.
          Join me on a journey through the great ideas that shape our
          understanding of ourselves and the world around us.
        </p>
      </div>

      {/* Featured Comic */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle>Featured Comic</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-64 h-64">
              <div
                className="w-full h-full bg-cover bg-center rounded-lg"
                style={{ backgroundImage: "url('/images/Nietzsche.jpg')" }}
              />
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-semibold">
                Becoming Who You Are: A Journey Through Self-Overcoming
              </h3>
              <p className="text-gray-600">
                Explore Nietzsche's philosophy of self-overcoming through
                ancient wisdom, modern struggles, and timeless truths. This
                chapter examines the concept of authentic self-creation and the
                challenges of finding one's own path.
              </p>
              <Link
                href="/comics/nietzsche-becoming"
                className="inline-flex items-center text-blue-500 hover:text-blue-700"
              >
                Read Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Comics Collection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Browse through our collection of philosophical comics exploring
              various thinkers and their ideas.
            </p>
            <Link
              href="/comics"
              className="inline-flex items-center text-blue-500 hover:text-blue-700"
            >
              View Comics <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Philosophers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Learn about the philosophers featured in our comics and their key
              contributions to human thought.
            </p>
            <Link
              href="/characters"
              className="inline-flex items-center text-blue-500 hover:text-blue-700"
            >
              Meet the Thinkers <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>About the Artist</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Discover the story behind Philosophia and its mission to make
              philosophy more accessible through visual storytelling.
            </p>
            <Link
              href="/artist"
              className="inline-flex items-center text-blue-500 hover:text-blue-700"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Mission Statement */}
      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            At Philosophia, we believe that complex philosophical ideas should
            be accessible to everyone. Through the medium of comics, we bridge
            the gap between academic philosophy and visual storytelling,
            creating engaging narratives that bring profound ideas to life.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
