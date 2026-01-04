"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Globe, User, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Navigation Data Structure
 */
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
    label: "Products",
    href: "#",
    subItems: [
      {
        title: "Application Services",
        description: "WAF, DDoS, Bot Management",
        href: "#",
      },
      {
        title: "Developer Platform",
        description: "Workers, Pages, R2 Storage",
        href: "#",
      },
      {
        title: "Network Services",
        description: "Magic Transit, WAN, Interconnect",
        href: "#",
      },
      {
        title: "Zero Trust",
        description: "Access, Gateway, Remote Browser",
        href: "#",
      },
    ],
  },
  {
    label: "Solutions",
    href: "#",
    subItems: [
      { title: "For Small Business", href: "#" },
      { title: "For Enterprise", href: "#" },
      { title: "Public Sector", href: "#" },
    ],
  },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      {/* Top Utility Bar - Desktop Only */}
      <div className="hidden lg:block border-b border-gray-100 bg-[#fdf4f1]">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-end space-x-6 text-[13px] font-medium text-[#404040]">
          <a
            href="#"
            className="flex items-center gap-1.5 hover:text-[var(--brand-color)] transition-colors"
          >
            <Headphones size={14} />
            Support
          </a>
          <a
            href="#"
            className="hover:text-[var(--brand-color)] transition-colors"
          >
            1-888-Cloud-Dev
          </a>
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-[var(--brand-color)]">
            <Globe size={14} />
            <span>English</span>
          </div>
          <a
            href="#"
            className="flex items-center gap-1.5 hover:text-[var(--brand-color)] transition-colors"
          >
            <User size={14} />
            Log In
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Placeholder Logo */}
          <a
            href="#"
            className="text-2xl font-bold tracking-tight text-[var(--heading-color)] flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-[var(--brand-color)] rounded-lg"></div>
            <span style={{ fontFamily: "var(--font-sans)" }}>TECHFLOW</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="group relative h-full flex items-center"
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-[15px] font-semibold text-[var(--heading-color)] hover:text-[var(--brand-color)] transition-colors py-7"
                >
                  {link.label}
                  {link.subItems && (
                    <ChevronDown
                      size={14}
                      className="group-hover:rotate-180 transition-transform duration-200"
                    />
                  )}
                </a>

                {/* Desktop Dropdown */}
                {link.subItems && (
                  <div className="absolute top-[100%] left-0 w-80 bg-white border border-gray-100 shadow-xl rounded-xl p-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                    <div className="grid gap-2">
                      {link.subItems.map((sub) => (
                        <a
                          key={sub.title}
                          href={sub.href}
                          className="p-3 hover:bg-orange-50 rounded-lg transition-colors group/item block"
                        >
                          <p className="text-sm font-bold text-[var(--heading-color)] group-hover/item:text-[var(--brand-color)]">
                            {sub.title}
                          </p>
                          {sub.description && (
                            <p className="text-[12px] text-gray-500 mt-0.5 line-clamp-1">
                              {sub.description}
                            </p>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Button variant="default" callBtn>
              Call Now
            </Button>
          </div>
          <Button
            className=" text-white bg-[#128C7E] hover:bg-[#128C7E]/90"
            wtsBtn
          >
            WhatsApp Us
          </Button>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-[var(--heading-color)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[80px] bg-white z-40 transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-[var(--heading-color)] mb-4">
                    {link.label}
                  </span>
                  {link.subItems ? (
                    <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-orange-100">
                      {link.subItems.map((sub) => (
                        <a
                          key={sub.title}
                          href={sub.href}
                          className="text-gray-600 hover:text-[var(--brand-color)]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 pt-10 border-t border-gray-100 flex flex-col gap-4">
            <a
              href="#"
              className="text-center py-3 font-semibold border border-gray-200 rounded-lg"
            >
              Log In
            </a>
            <a
              href="#"
              className="text-center py-3 font-semibold text-gray-500"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
