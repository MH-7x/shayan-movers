"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { BREADCRUMBS_BY_PATH } from "@/lib/breadcumbs";
import JsonLd from "@/components/JsonLd";

/**
 * Breadcrumb trail for the current route: visible navigation plus BreadcrumbList
 * JSON-LD from the same data. Reads the path with usePathname(), so the root
 * layout does not need request headers and pages can be statically rendered.
 */
export function PageBreadcrumbs({ siteUrl }: { siteUrl: string }) {
  const pathname = usePathname() || "/";
  const items = BREADCRUMBS_BY_PATH[pathname.replace(/\/$/, "") || "/"];

  // A trail with only "Home" adds nothing.
  if (!items || items.length < 2) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${siteUrl}${item.url}`,
    })),
  };

  return (
    <>
      <JsonLd json={jsonLd} />
      <nav
        aria-label="Breadcrumb"
        className="absolute top-34 left-0 z-10 w-full px-4 md:px-10"
      >
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-1 text-sm text-gray-600">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url || "home"} className="flex items-center gap-x-1">
                {isLast ? (
                  <span aria-current="page" className="font-medium">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url || "/"}
                    className="hover:text-(--brand-color) underline-offset-2 hover:underline"
                  >
                    {item.name}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight aria-hidden="true" className="h-4 w-4" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
