import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, withPages } from "@/lib/navLinks";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="w-56 h-16 relative">
              <Image
                src={"/shayan-movers-logo.svg"}
                fill
                alt={"Shayan Movers Company Logo"}
                className="object-contain"
              />
            </div>
            <p className="text-[#404040] text-sm! leading-relaxed max-w-xs">
              Shayan Movers is a leading provider of Fast and affordable movers
              in Dubai & Sharjah. We pack, move, and set up your furniture
              safely and securely.
            </p>
            <div className="flex items-center gap-3 text-sm text-[#404040]">
              <MapPin size={16} className="text-(--brand-color) shrink-0" />
              <address
                style={{
                  fontStyle: "normal",
                }}
              >
                Al Estiqlal St Abu Shagara, Sharjah
              </address>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#404040]">
              <Phone size={16} className="text-(--brand-color) shrink-0" />
              <Link href={"tel:+971547326816"}>+971 54 732 6816</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-(--heading-color) font-bold text-xl mb-6">Services</p>
            <ul className="space-y-4">
              {withPages(navLinks[0].subItems).map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#404040] hover:text-(--brand-color) transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="text-(--heading-color) font-bold text-xl mb-6">Locations</p>
            <ul className="space-y-4">
              {withPages(navLinks[1].subItems).map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#404040] hover:text-(--brand-color) transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <p className="text-(--heading-color) font-bold text-xl mb-6">More Pages</p>
            <ul className="space-y-4">
              {[
                { title: "About Us", href: "/about-us" },
                { title: "Contact Us", href: "/contact-us" },
                { title: "Sitemap", href: "/sitemap.xml" },
                { title: "Privacy Policy", href: "/privacy-policy" },
                { title: "Terms and Conditions", href: "/terms-and-conditions" },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#404040] hover:text-(--brand-color) transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-700">
            © {new Date().getFullYear()} Shayan Movers. All rights reserved.
            Design and development by{" "}
            <a
              href="https://github.com/MH-7x"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="text-(--brand-color) hover:underline"
            >
              Mashal Huraira
            </a>
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-700 hover:text-(--brand-color) transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm text-gray-700 hover:text-(--brand-color) transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-sm text-gray-700 hover:text-(--brand-color) transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
