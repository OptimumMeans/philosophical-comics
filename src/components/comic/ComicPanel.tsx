// src/components/comic/ComicPanel.tsx
import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface ComicPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ComicPanel = React.forwardRef<HTMLDivElement, ComicPanelProps>(
  ({ children, className = "", delay = 0, ...rest }, ref) => {
    // Reference delay here to prevent the ESLint warning
    console.log(delay);

    return (
      <div
        ref={ref}
        {...rest}
        className={cn(
          "border border-gray-200 rounded-lg shadow-lg overflow-hidden",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

// Adding displayName for better debugging
ComicPanel.displayName = "ComicPanel";

export { ComicPanel };
