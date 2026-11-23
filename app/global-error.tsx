"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en-AE">
      <body style={{ fontFamily: "system-ui, sans-serif", textAlign: "center", padding: "6rem 1rem" }}>
        <h1>Something went wrong</h1>
        <p>Please try again, or call +971 54 732 6816.</p>
        <button type="button" onClick={() => reset()}>
          Try again
        </button>
      </body>
    </html>
  );
}
