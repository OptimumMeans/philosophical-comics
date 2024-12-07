// src/components/comic/ComicViewer.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ComicPage } from "./ComicPage";
import { HTMLMotionProps } from "framer-motion";

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
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (!pages || pages.length === 0) {
    return <div>No pages to display</div>;
  }

  const motionProps: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.3 },
  };

  return (
    <div className="relative min-h-[600px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          {...motionProps}
          style={{ marginBottom: "4rem" }}
        >
          <ComicPage {...pages[currentPage]} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="p-2 rounded-full bg-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="text-sm text-gray-600">
          Page {currentPage + 1} of {pages.length}
        </div>
        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className="p-2 rounded-full bg-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
