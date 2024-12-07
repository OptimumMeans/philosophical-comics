// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="font-body text-gray-800">Could not find the requested page or Philosopher</p>
      <Link href="/" className="text-blue-500 hover:text-blue-600">
        Return Home
      </Link>
    </div>
  );
}
