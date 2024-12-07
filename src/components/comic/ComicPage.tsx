// src/components/comic/ComicPage.tsx
import { ComicPanel } from "./ComicPanel";

interface ComicPageProps {
  pageNumber: number;
  title: string;
  panels: React.ReactNode[];
}

export function ComicPage({ pageNumber, title, panels }: ComicPageProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        Page {pageNumber}: {title}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {panels.map((panel, index) => (
          <ComicPanel key={index} delay={index * 0.2}>
            {panel}
          </ComicPanel>
        ))}
      </div>
    </div>
  );
}
