"use client";

import { useState, useEffect } from "react";
import { ChevronDown, X, TimerResetIcon, Mail, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { navLinks, withPages } from "@/lib/navLinks";

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
          <span className="flex items-center gap-1.5">
            <TimerResetIcon size={14} />
            Available 24/7
          </span>
          <a
            href="mailto:shayanmovers.ae@gmail.com"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-(--brand-color) transition-colors"
          >
            <Mail size={14} />
            shayanmovers.ae@gmail.com
          </a>
          <Link
            href="tel:+971547326816"
            className="flex items-center gap-1.5 cursor-pointer hover:text-(--brand-color)"
          >
            <PhoneCall size={14} />
            <span>+971 54 732 6816</span>
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto md:px-6 px-3 md:py-0 py-3 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Placeholder Logo */}
          <Link
            href={"/"}
            title="Logo"
            className="md:w-52 w-36 md:h-16 h-10  relative"
          >
            <Image
              src={"/shayan-movers-logo.svg"}
              fill
              alt={"Shayan Movers Company Logo"}
              loading="eager"
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8 h-full md:ml-10">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="group relative h-full flex items-center"
              >
                {link.subItems ? (
                  <button
                    type="button"
                    aria-haspopup="true"
                    className="flex items-center gap-1 text-[15px] font-semibold text-(--heading-color) hover:text-(--brand-color) transition-colors py-7 cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown
                      aria-hidden="true"
                      size={14}
                      className="group-hover:rotate-180 group-focus-within:rotate-180 transition-transform duration-200"
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-[15px] font-semibold text-(--heading-color) hover:text-(--brand-color) transition-colors py-7"
                  >
                    {link.label}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {link.subItems && (
                  <div className="absolute top-full left-0 w-96 bg-white border border-gray-100 shadow-xl rounded-xl p-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200 ease-out z-50">
                    <div className="grid gap-2">
                      {withPages(link.subItems).map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          className="p-3 hover:bg-orange-50 rounded-lg transition-colors group/item block"
                        >
                          <p className="text-sm font-bold text-(--heading-color) group-hover/item:text-(--brand-color)">
                            {sub.title}
                          </p>
                        </Link>
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
          <div>
            <Button variant="secondary" callBtn className="hidden md:block">
              Call Now
            </Button>
          </div>
          <Button
            className=" text-white text-shadow-2xs bg-[#25D366] hover:bg-[#25D366]/90 hidden md:block"
            wtsBtn
          >
            WhatsApp Us
          </Button>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="lg:hidden p-2 text-(--heading-color)"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X aria-hidden="true" size={28} />
            ) : (
              <Image alt="" src={"/menu.svg"} width={28} height={28} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-17.25 bg-white z-40 transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <div className="flex flex-col">
                  {link.subItems ? (
                    <span className="text-lg font-bold text-(--heading-color) mb-4">
                      {link.label}
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-lg font-bold text-(--heading-color)"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                  {link.subItems ? (
                    <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-orange-100">
                      {withPages(link.subItems).map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          className="text-gray-600 hover:text-(--brand-color)"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
