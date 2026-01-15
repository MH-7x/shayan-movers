import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface SubMenuItem {
  title: string;
  description?: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  subItems?: SubMenuItem[];
}
const navLinks: NavItem[] = [
  {
    label: "Services",
    href: "#",
    subItems: [
      {
        title: "House & Villa Moving",
        description:
          "Villa movers Dubai, home relocation UAE, best house movers.",
        href: "/house-movers-in-dubai",
      },
      {
        title: "Office & Commercial Moving",
        description:
          "Office movers Dubai, business relocation, corporate moving services.",
        href: "/office-movers-in-dubai",
      },
      {
        title: "Furniture Moving & Assembly",
        description:
          "Furniture movers, sofa moving, handyman services, bed fixing.",
        href: "#",
      },
      {
        title: "Packing & wrapping",
        description:
          "Professional packing services, bubble wrap packing, carton boxes",
        href: "#",
      },
      {
        title: "Apartment & Studio Moving",
        description: "Studio movers, flat shifting, apartment movers near me.",
        href: "#",
      },
      {
        title: "Storage & Warehousing",
        description:
          "Short term storage Dubai, self-storage UAE, furniture storage",
        href: "#",
      },
      {
        title: "Local & Inter-Emirate Moving",
        description: "Moving from Dubai to Abu Dhabi, inter-city movers UAE.",
        href: "#",
      },
    ],
  },
  {
    label: "Areas We Serve",
    href: "#",
    subItems: [
      {
        title: "Movers and Packers in Abu Dhabi",
        href: "/movers-and-packers-abu-dhabi",
      },
      { title: "Movers and Packers in Sharjah", href: "/movers-in-sharjah" },
      { title: "Movers and Packers in Ajman", href: "/movers-in-ajman" },
      { title: "Movers and Packers in Al Ain", href: "/movers-in-al-ain" },
      {
        title: "Movers and Packers in Ras Al Khaimah",
        href: "/movers-in-ras-al-khaimah",
      },
      {
        title: "House Furniture Movers in Abu Dhabi",
        href: "/house-furniture-movers-abu-dhabi",
      },
    ],
  },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Movers", href: "/contact-us" },
];
// Assuming your shadcn button is at this path as per instructions

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
            <div className="flex items-center gap-4">
              <a
                href="#"
                title="facebook profile"
                className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-(--brand-color) hover:bg-orange-50 transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                title="twitter profile"
                className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-(--brand-color) hover:bg-orange-50 transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                title="instagram profile"
                className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-(--brand-color) hover:bg-orange-50 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                title="linkedin profile"
                className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-(--brand-color) hover:bg-orange-50 transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
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
              <Link href={"tel:+971547326816"}>+971 547326816</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-(--heading-color) font-bold! text-xl! mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {navLinks[0].subItems &&
                navLinks[0].subItems.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="text-sm text-[#404040] hover:text-(--brand-color) transition-colors"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-(--heading-color) font-bold! text-xl! mb-6">
              Locations
            </h4>
            <ul className="space-y-4">
              {navLinks[1].subItems &&
                navLinks[1].subItems.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="text-sm text-[#404040] hover:text-(--brand-color) transition-colors"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-(--heading-color) font-bold! text-xl! mb-6">
              More Pages
            </h4>
            <ul className="space-y-4">
              {[
                { title: "About Us", href: "#" },
                { title: "Contact Us", href: "/contact-us" },
                { title: "Sitemap", href: "#" },
                { title: "Privacy Policy ", href: "#" },
                { title: "Terms of Service ", href: "#" },
              ].map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="text-sm text-[#404040] hover:text-(--brand-color) transition-colors"
                  >
                    {item.title}
                  </a>
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
              rel="noopener noreferrer"
              target="_blank"
              className="text-(--brand-color) hover:underline"
            >
              Mashal Huraira
            </a>
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              className="text-sm text-gray-700 hover:text-(--brand-color) transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms-and-conditions"
              className="text-sm text-gray-700 hover:text-(--brand-color) transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-(--brand-color) transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
