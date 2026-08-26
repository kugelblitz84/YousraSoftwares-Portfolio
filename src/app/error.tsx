"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main">
      <section className="soft-grid section-pad shell pt-36 text-center sm:pt-44">
        <p className="eyebrow">Unexpected error</p>
        <h1 className="balance mx-auto mt-4 max-w-3xl font-display text-5xl font-bold sm:text-6xl">
          Something went wrong on our side.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg font-neue leading-relaxed text-zinc-500 dark:text-zinc-400">
          The page could not finish loading. Trying again usually resolves it. If
          the problem continues, we would like to hear about it.
        </p>
        {error.digest && (
          <p className="mt-4 text-xs tracking-[.16em] text-zinc-400 uppercase">
            Reference {error.digest}
          </p>
        )}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => retry()}
            className="btn-primary focus-ring inline-flex items-center rounded-full px-7 py-3.5 text-sm text-white"
          >
            Try again
          </button>
          <Link
            href="/"
            className="focus-ring inline-flex items-center rounded-full border border-zinc-200 px-7 py-3.5 text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-300 dark:hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
