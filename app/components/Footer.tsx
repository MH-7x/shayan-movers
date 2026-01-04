import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";
// Assuming your shadcn button is at this path as per instructions

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--brand-color)] rounded-lg flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-xl font-bold text-[var(--heading-color)]">
                Shayan Movers
              </span>
            </div>
            <p className="text-[#404040] text-sm leading-relaxed max-w-xs">
              Professional moving services you can trust. We handle your
              belongings with care, making your transition seamless and
              stress-free.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-[var(--brand-color)] hover:bg-orange-50 transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-[var(--brand-color)] hover:bg-orange-50 transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-[var(--brand-color)] hover:bg-orange-50 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-[var(--brand-color)] hover:bg-orange-50 transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--heading-color)] font-bold text-base mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                "Residential Moving",
                "Commercial Moving",
                "Packing Services",
                "Storage Solutions",
                "International Shipping",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-[#404040] hover:text-[var(--brand-color)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[var(--heading-color)] font-bold text-base mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              {[
                "Help Center",
                "Safety Information",
                "Terms of Service",
                "Privacy Policy",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-[#404040] hover:text-[var(--brand-color)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-[var(--heading-color)] font-bold text-base mb-6">
              Stay Updated
            </h4>
            <div className="flex items-center gap-3 text-sm text-[#404040]">
              <MapPin
                size={16}
                className="text-[var(--brand-color)] shrink-0"
              />
              <span>123 Moving St, Logistics City, 45678</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#404040]">
              <Phone size={16} className="text-[var(--brand-color)] shrink-0" />
              <span>+971 547326816</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Shayan Movers. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-[var(--brand-color)] transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-[var(--brand-color)] transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-[var(--brand-color)] transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
