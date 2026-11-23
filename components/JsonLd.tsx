/**
 * Renders JSON-LD as a plain <script> so it is present in the server HTML.
 * `<` is escaped so injected strings cannot close the script tag.
 */
export default function JsonLd({ json }: { json: string | object }) {
  const text = typeof json === "string" ? json : JSON.stringify(json);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: text.replace(/</g, "\u003c") }}
    />
  );
}
