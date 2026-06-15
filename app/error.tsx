"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black/50 backdrop-blur-sm p-4">
      <div className="glass-panel p-8 rounded-2xl max-w-md w-full text-center space-y-4">
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto" />
        <h2 className="text-2xl font-bold text-white">Something went wrong!</h2>
        <p className="text-gray-400 text-sm">
          An unexpected error occurred. We have been notified and are looking into it.
        </p>
        <button
          onClick={() => reset()}
          className="mt-4 px-6 py-2 bg-accent-blue/20 hover:bg-accent-blue/40 text-accent-blue border border-accent-blue/30 rounded-full transition-colors font-medium"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
