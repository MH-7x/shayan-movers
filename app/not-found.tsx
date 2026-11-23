import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Page Not Found | Shayan Movers and Packers",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/house-movers-in-dubai", label: "House movers in Dubai" },
  { href: "/villa-movers-in-dubai", label: "Villa movers in Dubai" },
  { href: "/office-movers-in-dubai", label: "Office movers in Dubai" },
  { href: "/affordable-movers-in-dubai", label: "Affordable movers in Dubai" },
  { href: "/movers-and-packers-abu-dhabi", label: "Movers in Abu Dhabi" },
  { href: "/movers-in-sharjah", label: "Movers in Sharjah" },
  { href: "/contact-us", label: "Contact us" },
];

export default function NotFound() {
  return (
    <main className="mt-32 px-3 py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-black">Page not found</h1>
      <p className="mt-4 max-w-xl mx-auto text-lg text-[#636262]">
        The page you are looking for does not exist or has moved. Try one of our
        service pages below, or get a free quote.
      </p>
      <ul className="mt-8 flex flex-wrap justify-center gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-block rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm border border-gray-100 hover:text-(--brand-color)"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
