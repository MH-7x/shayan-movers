import { headers } from "next/headers";
import { BREADCRUMBS_BY_PATH, SITE_URL } from "@/lib/breadcumbs";

export type BreadcrumbItem = {
  name: string;
  url: string;
};

type Props = {
  items: BreadcrumbItem[];
  siteUrl?: string;
};

function Breadcrumbs({ items, siteUrl = "" }: Props) {
  if (!items || items.length === 0) return null;

  const itemListElement = items.map((it, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: it.name,
    item: it.url.startsWith("http") ? it.url : `${siteUrl}${it.url}`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

export async function PageBreadcrumbs() {
  const headersList = headers();

  // This always reflects the CURRENT route (no hard refresh needed)
  const pathname = (await headersList).get("x-pathname") || "";

  const items = BREADCRUMBS_BY_PATH[pathname];

  if (!items) return null;

  return <Breadcrumbs items={items} siteUrl={SITE_URL} />;
}
