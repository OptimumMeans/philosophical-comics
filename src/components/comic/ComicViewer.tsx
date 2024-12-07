// src/components/comic/ComicViewer.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ComicPage } from "./ComicPage";

interface ComicViewerProps {
  pages: {
    pageNumber: number;
    title: string;
    panels: React.ReactNode[];
  }[];
}

export function ComicViewer({ pages }: ComicViewerProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((c) => c + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((c) => c - 1);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        >
          <ComicPage {...pages[currentPage]} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="p-2 rounded-full bg-white/80 shadow-lg disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className="p-2 rounded-full bg-white/80 shadow-lg disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="mt-4 flex justify-center">
        <p className="text-sm text-gray-600">
          Page {currentPage + 1} of {pages.length}
        </p>
      </div>
    </div>
  );
}
