// src/components/shared/Layout.tsx
"use client";
import React from "react";
import ComicLayout from "./ComicLayout";
import { usePathname } from "next/navigation";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const is404 = pathname === "/404" || pathname === "/not-found";

  if (is404) {
    return <div className="relative min-h-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen">
      <ComicLayout />
      {children}
    </div>
  );
};

export default RootLayout;
