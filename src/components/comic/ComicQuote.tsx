// src/components/comic/ComicQuote.tsx
interface ComicQuoteProps {
  text: string;
  author: string;
  work: string;
}

export function ComicQuote({ text, author, work }: ComicQuoteProps) {
  return (
    <blockquote className="italic bg-gray-50 p-4 rounded-lg">
      <p className="mb-2">{text}</p>
      <footer className="text-sm text-gray-600">
        —{author}, <cite>{work}</cite>
      </footer>
    </blockquote>
  );
}
