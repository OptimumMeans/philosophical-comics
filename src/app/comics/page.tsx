// src/app/comics/page.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Comic {
  id: string;
  title: string;
  description: string;
  philosopher: string;
  coverImage: string;
  pageCount: number;
  publishedDate: string;
  status: "published" | "coming-soon";
}

const comics: Comic[] = [
  {
    id: "nietzsche-becoming",
    title: "Becoming Who You Are: A Journey Through Self-Overcoming",
    description:
      "Explore Nietzsche's philosophy of self-overcoming through ancient wisdom, modern struggles, and timeless truths. This chapter examines the concept of authentic self-creation and the challenges of finding one's own path.",
    philosopher: "Friedrich Nietzsche",
    coverImage: "/images/Nietzsche.jpg",
    pageCount: 6,
    publishedDate: "2024",
    status: "published",
  },
  {
    id: "davis-housework",
    title:
      "The Evolution of Women's Labor: From Home Production to Modern Housework",
    description:
      "A visual exploration of Angela Davis's analysis of how industrialization transformed women's domestic labor from productive work to modern housework, examining the historical and social implications of this shift.",
    philosopher: "Angela Davis",
    coverImage: "/images/davis-placeholder.jpg",
    pageCount: 4,
    publishedDate: "Coming Soon",
    status: "coming-soon",
  },
];

export default function ComicsPage() {
  return (
    <div className="w-full space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="font-heading text-4xl font-bold">Philosophical Comics</h1>
      </div>

      <p className="text-gray-600 max-w-2xl">
        Explore complex philosophical ideas through visual storytelling. Each
        chapter examines key concepts from influential philosophers, combining
        academic rigor with accessible presentation.
      </p>

      <div className="grid gap-6">
        {comics.map((comic) => (
          <Card key={comic.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-48 h-48">
                {comic.coverImage && (
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${comic.coverImage})` }}
                  />
                )}
              </div>
              <div className="flex-1 p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl mb-2">{comic.title}</CardTitle>
                  <div className="text-sm text-gray-500">
                    by {comic.philosopher} • {comic.pageCount} pages •{" "}
                    {comic.publishedDate}
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 mb-4">{comic.description}</p>
                  {comic.status === "published" ? (
                    <Link
                      href={`/comics/${comic.id}`}
                      className="inline-flex items-center text-blue-500 hover:text-blue-700"
                    >
                      Read Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  ) : (
                    <span className="text-gray-500 italic">Coming Soon</span>
                  )}
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
