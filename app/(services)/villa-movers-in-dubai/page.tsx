import JsonLd from "@/components/JsonLd";
import ContactSection from "@/components/ContactSection";
import { FAQs } from "@/components/FAQs";
import { ReviewSection } from "@/components/Services";
import { Button } from "@/components/ui/button";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { VillaMoversDubaiFaqs } from "@/lib/lists";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import heroImage from "@/public/villa-movers-in-dubai.jpg";
import { APP } from "@/App";
import { COMPANY_ID } from "@/lib/schema";
import {
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Home,
  MapPin,
  MessageCircle,
  Package,
  PackageCheck,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  TreePine,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const PAGE_PATH = "/villa-movers-in-dubai";
const PHONE_DISPLAY = "+971 54 732 6816";
const TEL_URL = "tel:+971547326816";
const WHATSAPP_URL = "https://wa.me/971547326816";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Villa Movers in Dubai | Shayan Movers & Packers",
      desc: "Villa movers in Dubai with 20+ years' experience. Packing, furniture dismantling & safe transport. Free quote in 10 minutes. Call or WhatsApp Shayan Movers.",
    },
    image: {
      path: "/villa-movers-in-dubai.jpg",
      alt: "Movers loading wrapped furniture and wooden crates onto trucks outside a villa",
    },
    path: PAGE_PATH,
  },
});

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */

/** Visible marker for content the owner still has to supply. */
function Placeholder({
  children,
  inline = false,
}: {
  children: ReactNode;
  inline?: boolean;
}) {
  const classes =
    "border-2 border-dashed border-amber-500 bg-amber-50 text-amber-900 font-medium";
  if (inline) {
    return (
      <span
        className={`${classes} inline-block rounded px-2 py-0.5 text-xs align-middle`}
      >
        [PLACEHOLDER: {children}]
      </span>
    );
  }
  return (
    <div role="note" className={`${classes} rounded-xl p-4 text-sm`}>
      [PLACEHOLDER: {children}]
    </div>
  );
}

const linkClass = "text-(--brand-color) underline underline-offset-2";

function CallButton({ children }: { children: ReactNode }) {
  return (
    <Button asChild size={"lg"}>
      <a href={TEL_URL}>{children}</a>
    </Button>
  );
}

function WhatsAppButton({
  children,
  variant = "secondary",
}: {
  children: ReactNode;
  variant?: "secondary" | "outline";
}) {
  return (
    <Button asChild variant={variant} size={"lg"}>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const stats: {
  value: string;
  label: string;
  labelFirst?: boolean;
}[] = [
  { value: "20+", label: "years" },
  { value: "10,000+", label: "moves" },
  { value: "857", label: "Google reviews" },
  { value: "10 minutes", label: "Quotes in", labelFirst: true },
];

const relocationTypes = [
  {
    title: "Full villa relocation",
    desc: "We move villas of every size, from small two-bedroom villas to large homes with six or seven bedrooms. A small villa can be done in a day. Bigger homes can take a full day or two, depending on how much you own and how far apart the two addresses are.",
    img: {
      src: "/Apartment-Villa-Moving.jpg",
      alt: "Movers in uniform carrying garden furniture at a villa in Dubai",
    },
  },
  {
    title: "Luxury villa moving",
    desc: "Marble tables, large mirrors, artwork, chandeliers, a piano. We wrap each piece by hand and use custom crating where a piece needs it. If you own items you want insured separately, tell us at the survey and we'll plan around them.",
    img: {
      src: "/Furniture-Packing-Protection.jpg",
      alt: "Mover wrapping a leather sofa in protective cloth and stretch film beside a glass table",
    },
  },
  {
    title: "Family villa relocation",
    desc: "Families have the most stuff and the least free time. We pack room by room and label every box with the room it belongs to. If you ask, we set up beds first, so everyone can sleep at the new villa on the first night.",
    img: {
      src: "/Unpacking-Setup.jpg",
      alt: "Two movers mounting a TV and hanging curtains in a living room with labelled boxes",
    },
  },
  {
    title: "Villa to villa and inter-emirate moves",
    desc: "Moving from one villa in Dubai to another? Or to Sharjah, Ajman, Abu Dhabi, Al Ain or Ras Al Khaimah? We do local and inter-emirate villa moves, and the price is quoted for the whole job.",
    img: {
      src: "/Secure-Loading-Transportation.jpg",
      alt: "Movers carrying a sofa down a ramp from a moving truck outside a villa",
    },
  },
];

const completeServices = [
  {
    title: "Villa packing and wrapping",
    desc: "We bring cartons, bubble wrap, packing paper and thick blankets. Glass, crockery and artwork are wrapped one piece at a time, and fragile boxes are marked so they are loaded where nothing can crush them.",
    icon: <Package className="w-8 h-8" />,
  },
  {
    title: "Furniture dismantling and reassembly",
    desc: "Beds, wardrobes, dining tables, wall units and desks are taken apart, with screws bagged and labelled. We put everything back together in the new villa, in the room you choose.",
    icon: <Wrench className="w-8 h-8" />,
  },
  {
    title: "Loading and transport",
    desc: "We send trucks sized to your inventory. For larger villas that means 7-ton and 10-ton trucks, and more than one truck when the load needs it.",
    icon: <Truck className="w-8 h-8" />,
  },
  {
    title: "Unpacking and furniture placement",
    desc: "We carry boxes to the right rooms, unpack what you want unpacked, and place furniture where you want it. Empty cartons and packing paper can leave with us.",
    icon: <Home className="w-8 h-8" />,
  },
  {
    title: "Storage with pickup",
    desc: "If your new villa isn't ready, we collect your furniture, store it short or long term, and deliver it when you're ready.",
    icon: <Warehouse className="w-8 h-8" />,
  },
  {
    title: "Post-move cleaning",
    desc: "We clean the villa you're leaving, so it's ready for handover and your deposit inspection. We can also clean the new villa before the furniture goes in.",
    icon: <Sparkles className="w-8 h-8" />,
  },
];

const challenges = [
  {
    title: "Gated community access and move permits",
    desc: "Most villa communities want a permit before a moving truck enters. We apply for it, and the permit section below explains how it works.",
    icon: <FileText className="w-8 h-8" />,
  },
  {
    title: "Friday, holiday and prayer-time rules",
    desc: "Many communities restrict moves on Fridays and public holidays, and some limit hours around prayer times. We check the rules for your community and pick a date and start time that fit.",
    icon: <CalendarClock className="w-8 h-8" />,
  },
  {
    title: "Multi-floor villas and large furniture",
    desc: "Big wardrobes, solid wood beds and marble tables don't fit down a staircase in one piece. We dismantle what can be dismantled and wrap the rest before it moves.",
    icon: <Building2 className="w-8 h-8" />,
  },
  {
    title: "Driveway, parking and truck loading",
    desc: "Villa streets can be narrow, and some communities limit where trucks can park. We ask about access at both addresses at the survey, so the truck size and crew fit the space you have.",
    icon: <Truck className="w-8 h-8" />,
  },
  {
    title: "Garden, outdoor and pool items",
    desc: "Outdoor furniture, loungers, barbecues, planters and pool accessories all go on the truck. Fixed pool equipment such as pumps should be disconnected by a pool technician first. We can move it once it's disconnected.",
    icon: <TreePine className="w-8 h-8" />,
  },
  {
    title: "Short-notice dates",
    desc: "Plans change, and so do move dates. Call us even if your date is close, and we'll tell you honestly what we can do.",
    icon: <ClipboardCheck className="w-8 h-8" />,
  },
];

const permits = [
  {
    title: "Emaar communities",
    desc: "This covers Arabian Ranches, Dubai Hills Estate, The Springs, The Meadows and Emirates Hills. Permits can be requested through the Sakani portal or the Emaar One app, and you'll need your Emirates ID and Ejari.",
  },
  {
    title: "Dubai Properties communities",
    desc: "The move-out permit is issued only once community service fees are paid, and it's best to submit the request at least two business days before the move. The request also needs the moving company's name and a supervisor's contact number, which we provide.",
  },
  {
    title: "Nakheel communities",
    desc: "Nakheel asks for documents such as a passport copy and your Emirates ID. This applies to Palm Jumeirah and Jumeirah Park, among others.",
  },
  {
    title: "Landlord NOC",
    desc: "If you rent, you may need a No Objection Certificate from your landlord. You give it to the building or community management or security. Ask your landlord early, because it's the most common reason for a delayed move.",
  },
];

const steps = [
  {
    title: "Free quote.",
    desc: "Call or send us a WhatsApp message with your community, villa size and date.",
    icon: <ClipboardCheck className="w-8 h-8" />,
  },
  {
    title: "Survey and plan.",
    desc: "We look at the villa, check access and permit rules, and give you a fixed price.",
    icon: <MapPin className="w-8 h-8" />,
  },
  {
    title: "Packing.",
    desc: "The crew packs, wraps and dismantles, room by room.",
    icon: <Package className="w-8 h-8" />,
  },
  {
    title: "Safe transport.",
    desc: "We load carefully and drive to the new villa.",
    icon: <Truck className="w-8 h-8" />,
  },
  {
    title: "Unloading and setup.",
    desc: "We place furniture, reassemble beds and wardrobes, and unpack what you asked for.",
    icon: <Home className="w-8 h-8" />,
  },
];

const carefulItems = [
  "Outdoor and garden furniture, loungers, barbecues and planters",
  "Majlis and Arabic seating sets",
  "Chandeliers, pendant lights, mirrors and large paintings",
  "Pianos and other musical instruments, with custom crating",
  "Safes",
  "Pool and outdoor equipment",
  "Large appliances, including fridges, washing machines and ovens",
  "Home theatre and TV setups",
];

const communities = [
  {
    title: "Arabian Ranches",
    desc: "An Emaar community, so we apply for the Emaar permit and confirm the move time with the community office.",
  },
  {
    title: "Dubai Hills Estate",
    desc: "Also Emaar. We plan the truck route and parking before the move.",
  },
  {
    title: "Palm Jumeirah",
    desc: "A Nakheel community. Access to the fronds needs planning, so we confirm the permit and truck size in advance.",
  },
  {
    title: "Emirates Hills",
    desc: "Large homes with a lot of furniture and art. We survey first and send the right crew size.",
  },
  {
    title: "The Springs and The Meadows",
    desc: "Emaar communities with many similar villas, and many families moving at the same time of year. Book early.",
  },
  {
    title: "Damac Hills",
    desc: "We check the move rules with the community office and arrange the permit.",
  },
  {
    title: "Mirdif",
    desc: "We move villas in Mirdif and nearby areas, and confirm street parking before the truck arrives.",
  },
];

const moveOutChecklist = [
  "Check your tenancy contract for the notice period and give notice.",
  "Ask your landlord for the NOC.",
  "Pay any community service fees, since move-out permits depend on it.",
  "Book your movers and the permit.",
  "Disconnect appliances and arrange final utility readings.",
  "Clean the villa and walk through it with the landlord or agent.",
];

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/* ------------------------------------------------------------------ */

// The visible FAQ shows an insurance-terms placeholder under the last answer.
// The schema uses the plain answers only, so no placeholder text reaches search engines.
const FaqsSchema = generateFAQSchema(
  convertFaqsForSchema(VillaMoversDubaiFaqs),
);

const faqsForDisplay = VillaMoversDubaiFaqs.map((faq, index, all) =>
  index === all.length - 1
    ? {
        question: faq.question,
        answer: (
          <>
            <p>{faq.answer}</p>
          </>
        ),
      }
    : faq,
);

const ServiceSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Villa moving in Dubai",
  serviceType: "Villa moving and packing services",
  description:
    "Villa movers in Dubai: packing, furniture dismantling, safe transport, permits and setup at the new villa.",
  url: `${APP.url}${PAGE_PATH}`,
  areaServed: { "@type": "City", name: "Dubai" },
  provider: { "@id": COMPANY_ID },
});

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const VillaMoversDubai = () => {
  return (
    <>
      <JsonLd json={ServiceSchema} />
      <JsonLd json={FaqsSchema} />

      <main className="mt-32">
        {/* ---------------------------- Hero ---------------------------- */}
        <header>
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16">
              <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
                Villa movers in Dubai: safe packing, moving and setup for every
                villa
              </h1>
              <p className="mx-auto mb-8 max-w-4xl text-lg text-[#636262]">
                Moving out of a villa is a bigger job than most people expect.
                More rooms, more furniture, a garden, a driveway, and a
                community office that wants a permit before the truck arrives.
                Shayan Movers and Packers are villa movers in Dubai who handle
                all of it: packing, dismantling, transport, permits and setup at
                the new place. We have 20+ years of experience and more than
                10,000 moves behind us. After a free survey you get a fixed
                price, and you can have a first quote on WhatsApp in about 10
                minutes.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <CallButton>
                  <PhoneCall /> Call {PHONE_DISPLAY}
                </CallButton>
                <WhatsAppButton>
                  <MessageCircle /> Get a quote on WhatsApp
                </WhatsAppButton>
              </div>

              <ul
                aria-label="Shayan Movers at a glance"
                className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center"
              >
                {stats.map((stat) => (
                  <li
                    key={stat.label}
                    className="rounded-xl bg-white border border-gray-100 shadow-sm px-3 py-4"
                  >
                    {stat.labelFirst && (
                      <span className="block text-sm text-gray-600">
                        {stat.label}
                      </span>
                    )}
                    <strong className="block text-2xl md:text-3xl font-black text-(--brand-color)">
                      {stat.value}
                    </strong>
                    {!stat.labelFirst && (
                      <span className="block text-sm text-gray-600">
                        {stat.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative max-w-6xl mx-auto md:h-112.5 h-80 rounded-2xl bg-white">
              <Image
                src={heroImage}
                placeholder="blur"
                preload
                fill
                sizes="(min-width: 1152px) 1152px, 100vw"
                alt="Movers loading wrapped furniture and wooden crates onto trucks outside a villa"
                className="object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-(--brand-color)"></div>
            </div>
          </div>

          <img
            alt=""
            aria-hidden="true"
            src={"/lines-1.svg"}
            className="absolute hidden  bottom-0 left-0 right-auto top-auto -z-10 sm:inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto"
          />
          <img
            alt=""
            aria-hidden="true"
            src={"/lines-1.svg"}
            className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block "
          />
        </header>

        {/* ------------------------ Contact + form ---------------------- */}
        <ContactSection
          title="Get a Free Quote From Villa Movers in Dubai"
          desc={
            <p>
              After a free survey you get a fixed price, and you can have a
              first quote on WhatsApp in about 10 minutes.
            </p>
          }
        />

        {/* ---------------------- Professional villa movers ------------- */}
        <section
          aria-labelledby="professional-villa-movers"
          className="max-w-7xl mx-auto mt-36 px-3 lg:px-6"
        >
          <div className="text-center mb-14">
            <h2
              id="professional-villa-movers"
              className="max-w-3xl mx-auto md:text-5xl text-4xl!"
            >
              Professional villa movers and packers in Dubai
            </h2>
            <p className="mt-3 max-w-4xl mx-auto">
              A villa move is not an apartment move with more boxes. You have
              two or three floors, a garage, a store room, a majlis, a garden,
              and often a maid&apos;s room full of things you forgot you owned.
              We plan from a survey of your villa, so truck size, crew size and
              hours are decided before moving day. That is how we keep a move
              from running late into the night.
            </p>
            <p className="mt-3 max-w-4xl mx-auto">
              Moving a flat or a smaller home, or an office? See our{" "}
              <Link href="/house-movers-in-dubai" className={linkClass}>
                house movers in Dubai
              </Link>{" "}
              and{" "}
              <Link href="/office-movers-in-dubai" className={linkClass}>
                office movers in Dubai
              </Link>{" "}
              pages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10">
            {relocationTypes.map((item) => (
              <article key={item.title}>
                <div className="w-full h-80 relative z-0 overflow-hidden rounded-t-lg">
                  <Image
                    src={item.img.src}
                    alt={item.img.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="absolute object-cover object-center"
                  />
                </div>
                <div className="w-11/12 mx-auto rounded-2xl shadow-lg shadow-neutral-100 bg-white/90 min-h-32 z-10 transform -translate-y-10 py-5 px-4 mb-2">
                  <h3 className="text-xl! font-bold! b1 text-center">
                    {item.title}
                  </h3>
                  <p className="b-text mt-3 md:text-base text-sm! text-center">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* -------------------- Complete villa services ----------------- */}
        <section
          aria-labelledby="complete-services"
          className="max-w-7xl mx-auto mt-28 px-3 lg:px-6"
        >
          <div className="text-center mb-12">
            <h2
              id="complete-services"
              className="max-w-3xl mx-auto md:text-5xl text-4xl!"
            >
              Complete villa moving services under one roof
            </h2>
            <p className="mt-3 max-w-3xl mx-auto">
              Book one service or all of them. Handling packing, moving and
              cleaning through one company means one person to call if something
              changes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completeServices.map((service) => (
              <article
                key={service.title}
                className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-orange-50 text-(--brand-color) group-hover:bg-(--brand-color) group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl! font-bold text-(--heading-color) mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* --------------------------- Challenges ----------------------- */}
        <section
          aria-labelledby="challenges"
          className="max-w-7xl mx-auto mt-36 px-3 lg:px-6"
        >
          <div className="text-center mb-12">
            <h2
              id="challenges"
              className="max-w-4xl mx-auto md:text-5xl text-4xl!"
            >
              Villa moving challenges in Dubai and how we handle them
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((item) => (
              <article
                key={item.title}
                className="bg-white p-8 rounded-xl border border-gray-100 border-t-4 border-t-(--brand-color) shadow-sm"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-orange-50 text-(--brand-color)">
                  {item.icon}
                </div>
                <h3 className="text-xl! font-bold text-(--heading-color) mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ------------------------------ Cost -------------------------- */}
        <section
          aria-labelledby="villa-moving-cost-in-dubai"
          className="max-w-5xl mx-auto mt-36 px-3"
        >
          <div className="text-center mb-12">
            <h2
              id="villa-moving-cost-in-dubai"
              className="md:text-5xl text-4xl! scroll-mt-36"
            >
              Villa moving cost in Dubai
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Villa moving prices depend on how much you own and how long the
              job takes, not just the number of bedrooms. These are estimates
              for local moves within Dubai, in AED.
            </p>
          </div>

          <div className="overflow-hidden bg-white shadow-xl rounded-2xl border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full min-w-136 text-left border-collapse">
                <caption className="sr-only">
                  Estimated villa moving prices in Dubai, in AED
                </caption>
                <thead>
                  <tr className="bg-(--heading-color) text-white">
                    <th
                      scope="col"
                      className="p-5 font-semibold text-sm! uppercase tracking-wider"
                    >
                      Villa size
                    </th>
                    <th
                      scope="col"
                      className="p-5 font-semibold text-sm! uppercase tracking-wider"
                    >
                      Estimated price (AED)
                    </th>
                    <th
                      scope="col"
                      className="p-5 font-semibold text-sm! uppercase tracking-wider"
                    >
                      Typical time
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <th scope="row" className="p-5 font-medium text-slate-900">
                      Small villa (2 to 3 bedrooms)
                    </th>
                    <td className="p-5 text-(--brand-color) font-bold">
                      From 2,500
                    </td>
                    <td className="p-5 text-gray-600">4 to 8 hours</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <th scope="row" className="p-5 font-medium text-slate-900">
                      4-bedroom villa
                    </th>
                    <td className="p-5 text-(--brand-color) font-bold">
                      3,000 to 4,500
                    </td>
                    <td className="p-5 text-gray-600">8 to 10 hours</td>
                  </tr>
                  <tr className="bg-white">
                    <th scope="row" className="p-5 font-medium text-slate-900">
                      5-bedroom villa
                    </th>
                    <td className="p-5 text-(--brand-color) font-bold">
                      4,500 to 6,000+
                    </td>
                    <td className="p-5 text-gray-600">10 to 12+ hours</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <th scope="row" className="p-5 font-medium text-slate-900">
                      6 bedrooms and above
                    </th>
                    <td className="p-5 text-(--brand-color) font-bold">
                      Quoted after survey
                    </td>
                    <td className="p-5 text-gray-600">Full day or more</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-xl! font-bold mb-3">
                What changes the price
              </h3>
              <p className="text-gray-700">
                Volume is the biggest factor. After that come the distance
                between the two addresses, access at each end (floors, lifts,
                parking), the packing service you choose, and extras such as
                storage or cleaning.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-xl! font-bold mb-3">What&apos;s included</h3>
              <p className="text-gray-700">
                Packing materials, loading, transport, unloading and furniture
                reassembly are part of the quote. Storage, post-move cleaning
                and special crating are priced separately, and we list them in
                the quote before you agree.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-xl! font-bold mb-3">
                How to keep the cost down
              </h3>
              <p className="text-gray-700">
                Sell, donate or throw away what you won&apos;t use before the
                survey. Fewer items means a smaller truck and fewer hours. And
                get a quote from us before you book anyone, because our price is
                fixed and you know what you&apos;ll pay.
              </p>
            </div>
          </div>
        </section>

        {/* ----------------------------- Permits ------------------------ */}
        <section
          aria-labelledby="permits"
          className="max-w-6xl mx-auto mt-36 px-3"
        >
          <div className="text-center mb-12">
            <h2
              id="permits"
              className="max-w-4xl mx-auto md:text-5xl text-4xl!"
            >
              Move-in and move-out permits for villa communities in Dubai
            </h2>
            <p className="mt-3 max-w-3xl mx-auto">
              Most master communities need a permit for both the move out and
              the move in. The rules differ by developer. We arrange permits for
              Emaar, Nakheel and Dubai Properties communities. Tell us your
              community and your date, and we&apos;ll tell you which documents
              we need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {permits.map((permit) => (
              <article
                key={permit.title}
                className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-20 bg-(--brand-color)" />
                <div className="relative z-10">
                  <h3 className="text-2xl! font-bold mb-3">{permit.title}</h3>
                  <p className="text-gray-700">{permit.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ----------------------------- Process ------------------------ */}
        <section
          aria-labelledby="process"
          className="max-w-7xl mx-auto mt-36 px-3 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 id="process" className="md:text-5xl text-4xl!">
              Our 5-step villa moving process
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <li key={step.title} className="group flex flex-col items-center">
                <div className="w-16 h-16 bg-(--brand-color) text-white rounded-full flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {step.icon}
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center flex-1 w-full transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                    Step 0{index + 1}
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">{step.title}</strong>{" "}
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ------------------------- Items with care -------------------- */}
        <section
          aria-labelledby="careful-items"
          className="max-w-6xl mx-auto mt-36 px-3"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-112">
              <Image
                src="/Specialty-Item-Moving.jpg"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Four movers lifting a grand piano on a wheeled dolly with straps"
                className="object-cover"
              />
            </div>
            <div>
              <h2 id="careful-items" className="md:text-4xl! text-3xl! mb-6">
                Villa items we move with extra care
              </h2>
              <ul className="space-y-3">
                {carefulItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-(--brand-color) shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-medium">
                If you have something unusual, tell us at the survey and
                we&apos;ll plan for it.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------- Communities --------------------- */}
        <section
          aria-labelledby="communities"
          className="max-w-7xl mx-auto mt-36 px-3 lg:px-6"
        >
          <div className="text-center mb-12">
            <h2
              id="communities"
              className="max-w-3xl mx-auto md:text-5xl text-4xl!"
            >
              Villa communities we serve across Dubai
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community) => (
              <article
                key={community.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <MapPin className="w-6 h-6 text-(--brand-color) mb-3" />
                <h3 className="text-xl! font-bold mb-2">{community.title}</h3>
                <p className="text-gray-700">{community.desc}</p>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center max-w-3xl mx-auto">
            Moving from or to another emirate? See our pages for{" "}
            <Link href="/movers-in-sharjah" className={linkClass}>
              movers in Sharjah
            </Link>
            ,{" "}
            <Link href="/movers-and-packers-abu-dhabi" className={linkClass}>
              movers and packers in Abu Dhabi
            </Link>
            ,{" "}
            <Link href="/movers-in-ajman" className={linkClass}>
              movers in Ajman
            </Link>
            ,{" "}
            <Link href="/movers-in-al-ain" className={linkClass}>
              movers in Al Ain
            </Link>{" "}
            and{" "}
            <Link href="/movers-in-ras-al-khaimah" className={linkClass}>
              movers in Ras Al Khaimah
            </Link>
            .
          </p>
        </section>

        {/* ----------------------------- Why us ------------------------- */}
        <section
          aria-labelledby="why-us"
          className="max-w-4xl mx-auto mt-36 px-3"
        >
          <div className="text-center mb-10">
            <h2 id="why-us" className="md:text-5xl text-4xl!">
              Why homeowners hire Shayan Movers as their villa movers in Dubai
            </h2>
          </div>

          <ul className="space-y-4">
            {[
              "20+ years of experience and more than 10,000 moves completed.",
              "A fixed price. The price we quote is the price you pay, with no hidden fees.",
              "Quotes in about 10 minutes, and a free survey for exact pricing.",
              "Support 24/7, seven days a week.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
              >
                <CheckCircle2 className="w-6 h-6 text-(--brand-color) shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
            <li className="flex items-start gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <ShieldCheck className="w-6 h-6 text-(--brand-color) shrink-0 mt-0.5" />
              <span>
                Cover for damage or loss during the move. Ask us for the details
                for your move.{" "}
              </span>
            </li>
            <li className="flex items-start gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <PackageCheck className="w-6 h-6 text-(--brand-color) shrink-0 mt-0.5" />
              <span>
                One company for packing, moving, permits, storage and cleaning.
              </span>
            </li>
          </ul>
        </section>

        {/* ----------------------------- Reviews ------------------------ */}
        <section
          aria-labelledby="reviews"
          className="max-w-6xl mx-auto mt-36 px-3"
        >
          <div className="text-center mb-10">
            <h2
              id="reviews"
              className="max-w-3xl mx-auto md:text-5xl text-4xl!"
            >
              What customers say about our villa movers in Dubai
            </h2>
            <p className="mt-3 max-w-3xl mx-auto">
              We have 857 Google reviews, and many come from villa moves.{" "}
            </p>
          </div>

          <ReviewSection hideTitle />
        </section>

        {/* ----------------------------- Checklist ---------------------- */}
        <section
          aria-labelledby="checklist"
          className="max-w-5xl mx-auto mt-36 px-3"
        >
          <div className="text-center mb-12">
            <h2 id="checklist" className="md:text-5xl text-4xl!">
              Villa moving checklist and tips
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
              <h3 className="text-2xl! font-bold mb-3">
                When to book villa movers
              </h3>
              <p className="text-gray-700">
                Two to four weeks ahead is a good target. It leaves time for the
                survey, the permit and the landlord NOC. Summer and holiday
                weekends fill up early. But customers also book us at short
                notice, so call even if your date is close.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
              <h3 className="text-2xl! font-bold mb-4">
                Villa move-out checklist
              </h3>
              <ul className="space-y-3">
                {moveOutChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-(--brand-color) shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
              <h3 className="text-2xl! font-bold mb-3">
                Common villa moving mistakes
              </h3>
              <p className="text-gray-700">
                Waiting to ask for the NOC. Forgetting the garage, store room
                and garden when estimating volume. Leaving appliances connected.
                And not labelling boxes by room, which makes the first week much
                harder.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------ FAQs -------------------------- */}
        <FAQs
          faqs={faqsForDisplay}
          title="Villa movers in Dubai: frequently asked questions"
        />

        {/* ---------------------------- Final CTA ----------------------- */}
        <section
          aria-labelledby="final-quote"
          className="mt-32 bg-(--heading-color) px-3 md:px-20 py-20 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2
              id="final-quote"
              className="md:text-4xl! text-3xl! font-black text-white!"
            >
              Get a free quote from villa movers in Dubai
            </h2>
            <p className="text-(--neutral-color) mt-4">
              Tell us your community, the size of your villa and your move date.
              We&apos;ll reply with a price you can plan around.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CallButton>
                <PhoneCall /> Call {PHONE_DISPLAY}
              </CallButton>
              <WhatsAppButton variant="outline">
                <MessageCircle /> WhatsApp us for a free quote
              </WhatsAppButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default VillaMoversDubai;
