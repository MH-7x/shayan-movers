import { APP } from "@/App";

/** Stable entity id shared by every page-level Service schema. */
export const COMPANY_ID = `${APP.url}/#movingcompany`;
export const WEBSITE_ID = `${APP.url}/#website`;

const SERVED_PLACES = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Al Ain",
];

/** Site-wide business entity. Only facts that are already visible on the site. */
export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": COMPANY_ID,
      name: APP.name,
      url: APP.url,
      telephone: "+971 54 732 6816",
      email: APP.email,
      logo: `${APP.url}/icons/android-chrome-512x512.png`,
      image: `${APP.url}/shayan-movers-packers.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Al Estiqlal Street, Abu Shagara",
        addressLocality: "Sharjah",
        addressCountry: "AE",
      },
      areaServed: SERVED_PLACES.map((name) => ({ "@type": "City", name })),
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: APP.url,
      name: APP.name,
      inLanguage: "en-AE",
      publisher: { "@id": COMPANY_ID },
    },
  ],
};
