"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="mt-32 px-3 py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-black">Something went wrong</h1>
      <p className="mt-4 max-w-xl mx-auto text-lg text-[#636262]">
        Please try again. If the problem continues, call us on +971 54 732 6816.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-md bg-(--brand-color) px-6 py-2 font-semibold text-white"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-md bg-(--heading-color) px-6 py-2 font-semibold text-white"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
