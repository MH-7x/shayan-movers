// lib/breadcrumbs.ts

export type BreadcrumbItem = { name: string; url: string };

export const SITE_URL = process.env.APP_URL || "https://shayanmovers.ae";

/* ======================
   HOME
====================== */

export const breadcrumbs_home: BreadcrumbItem[] = [
  { name: "Home", url: "" },
];

/* ======================
   STATIC PAGES
====================== */

export const breadcrumbs_aboutUs: BreadcrumbItem[] = [
  { name: "Home", url: "" },
  { name: "About Us", url: "/about-us" },
];

export const breadcrumbs_privacyPolicy: BreadcrumbItem[] = [
  { name: "Home", url: "" },
  { name: "Privacy Policy", url: "/privacy-policy" },
];

export const breadcrumbs_termsAndConditions: BreadcrumbItem[] = [
  { name: "Home", url: "" },
  { name: "Terms and Conditions", url: "/terms-and-conditions" },
];

export const breadcrumbs_contactUs: BreadcrumbItem[] = [
  { name: "Home", url: "" },
  { name: "Contact Us", url: "/contact-us" },
];

/* ======================
   CITY / SERVICE PAGES
====================== */

export const breadcrumbs_moversInAjman: BreadcrumbItem[] = [
  { name: "Home", url: "" },
  { name: "Movers & Packers in Ajman", url: "/movers-in-ajman" },
];

export const breadcrumbs_moversInAlAin: BreadcrumbItem[] = [
  { name: "Home", url: "" },
  { name: "Movers & Packers in Al Ain", url: "/movers-in-al-ain" },
];

export const breadcrumbs_moversInRAK: BreadcrumbItem[] = [
  { name: "Home", url: "" },
  {
    name: "Movers & Packers in Ras Al Khaimah",
    url: "/movers-in-ras-al-khaimah",
  },
];

export const breadcrumbs_moversInSharjah: BreadcrumbItem[] = [
  { name: "Home", url: "" },
  { name: "Movers & Packers in Sharjah", url: "/movers-in-sharjah" },
];

export const breadcrumbs_houseFurnitureMoversAbuDhabi: BreadcrumbItem[] = [
  { name: "Home", url: "" },
  {
    name: "House & Furniture Movers in Abu Dhabi",
    url: "/house-furniture-movers-abu-dhabi",
  },
];

export const breadcrumbs_houseMoversDubai: BreadcrumbItem[] = [
  { name: "Home", url: "" },
  { name: "House Movers in Dubai", url: "/house-movers-in-dubai" },
];

export const breadcrumbs_officeMoversDubai: BreadcrumbItem[] = [
  { name: "Home", url: "" },
  { name: "Office Movers in Dubai", url: "/office-movers-in-dubai" },
];
export const breadcrumbs_affordableMoversDubai: BreadcrumbItem[] = [
  { name: "Home", url: "" },
  {
    name: "Affordable Movers in Dubai",
    url: "/affordable-movers-in-dubai",
  },
];
export const breadcrumbs_villaMoversDubai: BreadcrumbItem[] = [
  { name: "Home", url: "" },
  { name: "Villa Movers in Dubai", url: "/villa-movers-in-dubai" },
];
export const breadcrumbs_AbuDhabiMovers: BreadcrumbItem[] = [
  { name: "Home", url: "" },
  { name: "Movers and Packers Abu Dhabi", url: "/movers-and-packers-abu-dhabi" },
];

/* ======================
   PATH → BREADCRUMB MAP
====================== */

export const BREADCRUMBS_BY_PATH: Record<string, BreadcrumbItem[]> = {
  "/": breadcrumbs_home,
  "/contact-us": breadcrumbs_contactUs,
  "/about-us": breadcrumbs_aboutUs,
  "/privacy-policy": breadcrumbs_privacyPolicy,
  "/terms-and-conditions": breadcrumbs_termsAndConditions,
  "/movers-in-ajman": breadcrumbs_moversInAjman,
  "/movers-in-al-ain": breadcrumbs_moversInAlAin,
  "/movers-in-ras-al-khaimah": breadcrumbs_moversInRAK,
  "/movers-in-sharjah": breadcrumbs_moversInSharjah,
  "/house-furniture-movers-abu-dhabi":
    breadcrumbs_houseFurnitureMoversAbuDhabi,
  "/house-movers-in-dubai": breadcrumbs_houseMoversDubai,
  "/office-movers-in-dubai": breadcrumbs_officeMoversDubai,
  "/villa-movers-in-dubai": breadcrumbs_villaMoversDubai,
  "/affordable-movers-in-dubai": breadcrumbs_affordableMoversDubai,
  "/movers-and-packers-abu-dhabi": breadcrumbs_AbuDhabiMovers,
};
