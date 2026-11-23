export interface SubMenuItem {
  title: string;
  description?: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  subItems?: SubMenuItem[];
}

/**
 * Items whose href is "#" are services that do not have a page yet.
 * They are kept here so they can be switched on by setting a real href,
 * but they are never rendered as links (see `withPages`).
 */
export const navLinks: NavItem[] = [
  {
    label: "Services",
    href: "#",
    subItems: [
      {
        title: "House Moving",
        description: "Home relocation UAE, best house movers.",
        href: "/house-movers-in-dubai",
      },
      {
        title: "Villa Moving",
        description:
          "Villa movers Dubai, villa moving company, luxury villa movers.",
        href: "/villa-movers-in-dubai",
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
        title: "Affordable Moving",
        description:
          "Budget movers Dubai, cheap moving services, low-cost relocation.",
        href: "/affordable-movers-in-dubai",
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

export const withPages = (items?: SubMenuItem[]) =>
  (items ?? []).filter((item) => item.href !== "#");
