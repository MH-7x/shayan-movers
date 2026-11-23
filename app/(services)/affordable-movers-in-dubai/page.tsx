import JsonLd from "@/components/JsonLd";
import ContactSection from "@/components/ContactSection";
import { FAQs } from "@/components/FAQs";
import { ReviewSection } from "@/components/Services";
import { Button } from "@/components/ui/button";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { AffordableMoversDubaiFaqs } from "@/lib/lists";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import heroImage from "@/public/Full-Service-House-Moving.jpg";
import { APP } from "@/App";
import { COMPANY_ID } from "@/lib/schema";
import {
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Home,
  MapPin,
  MessageCircle,
  PackageCheck,
  PhoneCall,
  ShieldCheck,
  Truck,
  XCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const PAGE_PATH = "/affordable-movers-in-dubai";
const PHONE_DISPLAY = "+971 54 732 6816";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Affordable Movers in Dubai | Fixed Prices from AED 800",
      desc: "Affordable movers in Dubai with fixed prices from AED 800, free quotes and no hidden fees. 20+ years, 10,000+ moves. Call or WhatsApp now.",
    },
    image: {
      path: "/Full-Service-House-Moving.jpg",
      alt: "Movers loading boxes into a truck while a customer reviews a quote on a tablet",
    },
    path: PAGE_PATH,
  },
});

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "20+", label: "years of experience" },
  { value: "10,000+", label: "moves completed" },
  { value: "857", label: "Google reviews" },
  { value: "Open", label: "7 days a week" },
];

const benefits = [
  {
    title: "A fixed price in writing",
    desc: "Before the truck arrives, you get a written quote. It covers the crew, the truck, packing materials, loading and unloading. If your move stays the same, the price stays the same.",
    icon: <ClipboardCheck className="w-8 h-8" />,
  },
  {
    title: "No hidden fees",
    desc: "Everything we charge for is listed in the quote. If you add something on the day, like extra furniture or a second stop, we tell you the new price first and wait for your yes. There's no surprise on the final bill.",
    icon: <CircleDollarSign className="w-8 h-8" />,
  },
  {
    title: "Careful handling",
    desc: "Cheap shouldn't mean careless. Our affordable movers in Dubai wrap furniture in thick blankets and pack your things in proper boxes, bubble wrap and packing paper. Glass, electronics and heavy sofas are a normal part of the day for our crews, and they know how to carry them up stairs and through tight lifts.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "Short notice and weekends, seven days a week",
    desc: "We work every day of the week. If you need to move soon, call or WhatsApp and we'll tell you what's available. Weekends fill up fast, so book one to two weeks ahead if you can.",
    icon: <CalendarClock className="w-8 h-8" />,
  },
];

const priceGuide = [
  { size: "Studio", price: "From AED 800" },
  { size: "1 to 2 bedroom apartment", price: "AED 1,200 to 1,800" },
  { size: "3 bedroom apartment", price: "AED 1,800 to 2,500" },
  { size: "Villa", price: "From AED 2,500" },
];

const included = [
  "A crew sized for your move",
  "A truck sized for your move",
  "Packing materials: boxes, bubble wrap, packing paper and blankets",
  "Loading and unloading",
  "Dismantling and reassembling furniture",
  "Delivery and placing items in your new home",
];

const priceFactors = [
  "How much you're moving",
  "Which floor you're on, and whether there's a lift",
  "How far apart the two addresses are, and how close the truck can park",
  "Extra services, like storage",
  "The date. Busy days and last-minute bookings can limit what we can offer, so we confirm the price for your date in the quote.",
];

const services: {
  title: string;
  desc: ReactNode;
  img: { src: string; alt: string };
}[] = [
  {
    title: "Apartment and studio moving",
    desc: (
      <>
        We move studios, one to five bedroom apartments and townhouses. We pack,
        load, drive, unload and set up at the other end. For more detail, see
        our{" "}
        <Link
          href="/house-movers-in-dubai"
          className="text-(--brand-color) underline underline-offset-2"
        >
          house and apartment movers in Dubai
        </Link>{" "}
        page.
      </>
    ),
    img: {
      src: "/home-moving-in-dubai.jpg",
      alt: "Movers carrying boxes from a truck outside a Dubai villa",
    },
  },
  {
    title: "Villa moving",
    desc: "Villas take more time and more hands, so we plan the crew and truck size around the number of rooms and floors. Tell us about the garage, the storeroom and any heavy items when you ask for a quote, so the price is right from the start.",
    img: {
      src: "/Apartment-Villa-Moving.jpg",
      alt: "Movers in uniform inside a high-rise corridor and carrying garden furniture at a villa",
    },
  },
  {
    title: "Office moving",
    desc: (
      <>
        We move desks, computers, files and equipment. We can work after hours
        or on weekends, so your team loses less working time. Read more about
        our{" "}
        <Link
          href="/office-movers-in-dubai"
          className="text-(--brand-color) underline underline-offset-2"
        >
          office movers in Dubai
        </Link>
        .
      </>
    ),
    img: {
      src: "/office-movers-in-dubai.jpg",
      alt: "Office chairs wrapped in plastic film next to packed boxes",
    },
  },
  {
    title: "Packing, unpacking and furniture dismantling",
    desc: "We pack with boxes, bubble wrap and packing paper. Beds, wardrobes and tables are taken apart and put back together. Pianos, artwork, antiques and other fragile items get custom packing and crating.",
    img: {
      src: "/Professional-Packing-Services.jpg",
      alt: "Two movers wrapping a glass vase in bubble wrap in a kitchen",
    },
  },
  {
    title: "Short-term and long-term storage",
    desc: "If your new place isn't ready, we can store your things for a few days or a few months. When you're ready, we deliver them to you.",
    img: {
      src: "/storage-services-in-dubai.jpg",
      alt: "Wooden storage crates stacked in a warehouse while a worker checks a tablet",
    },
  },
  {
    title: "Dubai to Abu Dhabi, Sharjah and other emirates",
    desc: (
      <>
        We also move between emirates. See our pages for{" "}
        <Link
          href="/movers-and-packers-abu-dhabi"
          className="text-(--brand-color) underline underline-offset-2"
        >
          Abu Dhabi
        </Link>
        ,{" "}
        <Link
          href="/movers-in-sharjah"
          className="text-(--brand-color) underline underline-offset-2"
        >
          Sharjah
        </Link>
        ,{" "}
        <Link
          href="/movers-in-ajman"
          className="text-(--brand-color) underline underline-offset-2"
        >
          Ajman
        </Link>
        ,{" "}
        <Link
          href="/movers-in-ras-al-khaimah"
          className="text-(--brand-color) underline underline-offset-2"
        >
          Ras Al Khaimah
        </Link>{" "}
        and{" "}
        <Link
          href="/movers-in-al-ain"
          className="text-(--brand-color) underline underline-offset-2"
        >
          Al Ain
        </Link>
        .
      </>
    ),
    img: {
      src: "/Secure-Loading-Transportation.jpg",
      alt: "Movers carrying a sofa down a ramp from a moving truck",
    },
  },
];

const savingTips: { lead: string; rest: string }[] = [
  {
    lead: "Declutter first.",
    rest: "Fewer items means a smaller truck and less time. Sell, donate or throw away what you don't need before we arrive.",
  },
  {
    lead: "Pack the low-value things yourself,",
    rest: "like books, clothes and kitchen items. Leave glass, electronics and furniture to us.",
  },
  {
    lead: "Pick a weekday if you can.",
    rest: "Weekends are busier. If your date is flexible, ask us which day works best.",
  },
  {
    lead: "Book early.",
    rest: "For weekend moves, one to two weeks ahead is best.",
  },
  {
    lead: "Sort out your building permit early,",
    rest: "so your move doesn't get pushed back.",
  },
  {
    lead: "Compare quotes.",
    rest: "Ask two or three movers for written quotes and check what each one includes.",
  },
];

const whatToCheck = [
  "A written quote that lists what's included",
  "A company licence (ours is available on request)",
  "Insurance that covers damage or loss",
  "Recent reviews from real customers",
  "Clear payment terms",
  "Quick, direct answers when you ask questions",
];

const redFlags = [
  "A quote over the phone with no questions about your move",
  "A request for a large payment before any work starts",
  "No company name, no licence and no way to check either",
  "A price far below every other quote. The difference usually shows up as extras later.",
  "Hourly pricing with no estimate of how many hours",
  "No reviews, or reviews that all sound the same",
];

const steps = [
  {
    title: "Get a quote.",
    icon: <ClipboardCheck className="w-8 h-8" />,
    desc: (
      <>
        Call or WhatsApp us on{" "}
        <a
          href={`tel:${APP.phone}`}
          className="font-medium text-(--brand-color) underline underline-offset-2"
        >
          {PHONE_DISPLAY}
        </a>
        . Tell us the size of your home, where you&apos;re moving from and to,
        and your date. We usually reply within 10 minutes.
      </>
    ),
  },
  {
    title: "Confirm in writing.",
    icon: <ShieldCheck className="w-8 h-8" />,
    desc: "We send the price and what's included. You confirm the date.",
  },
  {
    title: "We pack and move.",
    icon: <Truck className="w-8 h-8" />,
    desc: "The crew arrives at the agreed time, wraps and packs your things, loads the truck and drives to your new address.",
  },
  {
    title: "We unpack and set up.",
    icon: <Home className="w-8 h-8" />,
    desc: "We unload, put your furniture back together and check with you that everything is in place. You pay once the work is done.",
  },
];

const areas = [
  "Dubai Marina and JBR",
  "Downtown Dubai and Business Bay",
  "Jumeirah Village Circle (JVC)",
  "Dubai Silicon Oasis",
  "Deira and Bur Dubai",
  "Al Barsha",
  "Jumeirah and Palm Jumeirah",
];

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/* ------------------------------------------------------------------ */

const FaqsSchema = generateFAQSchema(
  convertFaqsForSchema(AffordableMoversDubaiFaqs)
);

const ServiceSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Affordable movers in Dubai",
  serviceType: "Moving and packing services",
  description:
    "Affordable movers in Dubai with fixed prices from AED 800, free quotes and no hidden fees.",
  url: `${APP.url}${PAGE_PATH}`,
  areaServed: { "@type": "City", name: "Dubai" },
  provider: { "@id": COMPANY_ID },
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "AED",
      minPrice: 800,
    },
  },
});

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const AffordableMoversDubai = () => {
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
                Affordable movers in Dubai: fixed prices, no hidden fees
              </h1>
              <p className="mx-auto mb-3 max-w-4xl text-lg text-[#636262]">
                Looking for affordable movers in Dubai? Shayan Movers and
                Packers moves apartments, villas and offices across the city,
                with prices that start from AED 800. You get the price in
                writing before we start, and you pay after the work is done.
              </p>
              <p className="mx-auto mb-8 max-w-4xl text-lg text-[#636262]">
                We&apos;ve been in this business for over 20 years and have
                completed more than 10,000 moves. This page explains how our
                affordable movers in Dubai work, what you pay and what you get
                for it. If you&apos;d rather skip the reading, send us a
                WhatsApp message with your move details. We usually reply with
                a quote within 10 minutes.
              </p>

              <ul
                aria-label="Shayan Movers at a glance"
                className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 text-center"
              >
                {stats.map((stat) => (
                  <li
                    key={stat.label}
                    className="rounded-xl bg-white border border-gray-100 shadow-sm px-3 py-4"
                  >
                    <strong className="block text-2xl md:text-3xl font-black text-(--brand-color)">
                      {stat.value}
                    </strong>
                    <span className="block text-sm text-gray-600">
                      {stat.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap justify-center gap-4">
                <Button size={"lg"} callBtn>
                  <PhoneCall /> Call {PHONE_DISPLAY}
                </Button>
                <Button variant={"secondary"} size={"lg"} wtsBtn>
                  <MessageCircle /> WhatsApp for a free quote
                </Button>
              </div>
            </div>

            <div className="relative max-w-6xl mx-auto md:h-112.5 h-80 rounded-2xl bg-white">
              <Image
                src={heroImage}
                placeholder="blur"
                preload
                fill
                sizes="(min-width: 1152px) 1152px, 100vw"
                alt="Movers loading boxes into a truck while a customer reviews a quote on a tablet"
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
          title="Get a Free Quote From Affordable Movers in Dubai"
          desc={
            <>
              <p>
                You get the price in writing before we start, and you pay after
                the work is done.
              </p>
              <p>We usually reply with a quote within 10 minutes.</p>
            </>
          }
        />

        {/* ------------------------- Why choose ------------------------- */}
        <section
          aria-labelledby="why-choose"
          className="max-w-7xl mx-auto mt-36 px-3 lg:px-6"
        >
          <div className="text-center mb-10">
            <h2
              id="why-choose"
              className="max-w-3xl mx-auto md:text-5xl text-4xl!"
            >
              Why choose our affordable movers in Dubai?
            </h2>
            <p className="mt-3 max-w-4xl mx-auto">
              If you searched for cheap movers and packers in Dubai, you
              probably want two things: a low price and no surprises on moving
              day. That&apos;s what we aim for on every job.
            </p>
          </div>

          <div className="flex flex-col md:flex-row pt-6">
            <div className="mr-0 md:mr-8 mb-6 md:mb-0 md:w-1/3 relative rounded-2xl overflow-hidden h-96 md:h-auto md:min-h-96">
              <Image
                src="/movers-and-packers-dubai.jpg"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                alt="Mover in a red uniform carrying a stack of moving boxes"
                className="object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="w-full sm:w-1/2 mb-4 px-2">
                  <div className="h-full py-4 px-6 border border-(--brand-color) border-t-0 border-l-0 rounded-br-xl bg-white/60">
                    <div className="mb-3 inline-block p-3 rounded-lg bg-orange-50 text-(--brand-color)">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl! font-bold mb-3">
                      {benefit.title}
                    </h3>
                    <p>{benefit.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------- Costs -------------------------- */}
        <section
          aria-labelledby="costs"
          className="max-w-5xl mx-auto mt-36 px-3"
        >
          <div className="text-center mb-12">
            <h2 id="costs" className="md:text-5xl text-4xl!">
              How much do affordable movers in Dubai cost?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              A local move with us starts from AED 800 for a studio and from AED
              2,500 for a villa. The table below shows our 2026 prices. When you
              compare affordable movers in Dubai, ask every company what its
              price includes, not just the number.
            </p>
          </div>

          <h3 className="text-2xl! md:text-3xl! text-center mb-6">
            Our 2026 price guide
          </h3>

          <div className="overflow-hidden bg-white shadow-xl rounded-2xl border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <caption className="sr-only">
                  Our 2026 price guide for local moves in Dubai
                </caption>
                <thead>
                  <tr className="bg-(--heading-color) text-white">
                    <th
                      scope="col"
                      className="p-5 font-semibold text-sm! uppercase tracking-wider"
                    >
                      Property size
                    </th>
                    <th
                      scope="col"
                      className="p-5 font-semibold text-sm! uppercase tracking-wider"
                    >
                      Local move price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {priceGuide.map((row, index) => (
                    <tr
                      key={row.size}
                      className={`hover:bg-orange-50/60 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <th
                        scope="row"
                        className="p-5 font-medium text-slate-900"
                      >
                        {row.size}
                      </th>
                      <td className="p-5 text-(--brand-color) font-bold">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto flex flex-col gap-y-4 text-gray-700">
            <p>
              These prices are for moves inside Dubai. The exact figure depends
              on how much you&apos;re moving and where, and you&apos;ll see it
              in writing before you book. Moving costs are easier to plan when
              you know the number early, so ask for your quote as soon as you
              have a date.
            </p>
            <p>
              Most studios and one-bedroom flats take three to five hours. A
              two-bedroom usually takes six to eight. Large villas can take a
              day or two.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/Furniture-Dismantling-Reassembly.jpg"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  alt="Mover dismantling a wooden table with a set of tools while a customer watches"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl! font-bold mb-3">
                  What&apos;s included in every quote
                </h3>
                <p className="mb-4">
                  Here&apos;s what the price from our affordable movers in Dubai
                  covers:
                </p>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-(--brand-color) shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-2xl! font-bold mb-3">
                  What can change the price
                </h3>
                <p className="mb-4">Your price can go up or down depending on:</p>
                <ul className="space-y-3">
                  {priceFactors.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  If anything changes, we tell you before we do the work. You
                  never find out at the end.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-2xl! font-bold mb-3">
                  How and when you pay
                </h3>
                <p>
                  You pay after the move is finished, not before. We accept all
                  the usual payment methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------- Services ------------------------ */}
        <section
          aria-labelledby="services"
          className="mt-36 md:px-0 px-3"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 id="services" className="md:text-5xl text-4xl!">
              Our affordable moving services in Dubai
            </h2>
            <p className="mt-3">
              Every move gets the same fixed-price approach, whether it&apos;s a
              studio or a whole villa. These are the services our affordable
              movers in Dubai offer most.
            </p>
          </div>

          <div className="w-full md:max-w-11/12 mx-auto mt-20 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-10">
            {services.map((service) => (
              <article key={service.title}>
                <div className="w-full h-80 relative z-0 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.img.src}
                    alt={service.img.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="absolute object-cover object-center"
                  />
                </div>
                <div className="w-11/12 mx-auto rounded-2xl shadow-lg shadow-neutral-100 bg-white/90 min-h-32 z-10 transform -translate-y-10 py-5 px-3">
                  <h3 className="text-xl! font-bold! b1 text-center">
                    {service.title}
                  </h3>
                  <p className="b-text mt-3 md:text-base text-sm! text-center">
                    {service.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center max-w-3xl mx-auto mt-4 font-medium">
            Not sure which service fits your move? Message us and describe what
            you have. We&apos;ll tell you what you need and what it costs.
          </p>
        </section>

        {/* ------------------------- Keeping prices low ----------------- */}
        <section
          aria-labelledby="low-prices"
          className="max-w-7xl mx-auto mt-36 px-3 lg:px-6"
        >
          <div className="text-center mb-10">
            <h2
              id="low-prices"
              className="max-w-3xl mx-auto md:text-5xl text-4xl!"
            >
              How we keep prices low without cutting corners
            </h2>
            <p className="mt-3 max-w-3xl mx-auto">
              A low price only works if the move still goes well. Here&apos;s
              how our affordable movers in Dubai keep prices down, and what we
              don&apos;t touch.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-auto lg:min-h-96">
              <Image
                src="/Specialty-Item-Moving.jpg"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Four movers lifting a grand piano on a wheeled dolly with straps"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 justify-center">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 border-l-4 border-l-(--brand-color)">
                <p>
                  To keep the price down, we match the crew and the truck to
                  your move, so you don&apos;t pay for space or people you
                  don&apos;t need. We quote the whole job at once, so
                  there&apos;s no back and forth over extras. And we answer on
                  WhatsApp quickly, which saves everyone time.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 border-l-4 border-l-(--heading-color)">
                <p>
                  <strong>What we don&apos;t cut:</strong> insurance for damage
                  or loss, proper packing materials, a crew that knows how to
                  handle furniture, and a written quote that lists what you&apos;re
                  paying for. Some movers drop these to reach a lower number. We
                  don&apos;t.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Saving ------------------------- */}
        <section
          aria-labelledby="saving"
          className="max-w-5xl mx-auto mt-36 px-3"
        >
          <div className="text-center mb-10">
            <h2 id="saving" className="md:text-5xl text-4xl!">
              Ways to save more on your move in Dubai
            </h2>
            <p className="mt-3">
              You can lower your cost further with a few simple steps:
            </p>
          </div>

          <ul className="grid md:grid-cols-2 gap-5">
            {savingTips.map((tip) => (
              <li
                key={tip.lead}
                className="flex items-start gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
              >
                <CheckCircle2 className="w-6 h-6 text-(--brand-color) shrink-0 mt-0.5" />
                <p>
                  <strong className="text-(--heading-color)">{tip.lead}</strong>{" "}
                  {tip.rest}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center font-medium max-w-3xl mx-auto">
            The lowest number isn&apos;t always the best deal. The best deal from
            affordable movers in Dubai is the one with no extra charges later.
          </p>
        </section>

        {/* ------------------------ Choosing / red flags ---------------- */}
        <section
          aria-labelledby="choosing"
          className="max-w-6xl mx-auto mt-36 px-3"
        >
          <div className="text-center mb-10">
            <h2
              id="choosing"
              className="max-w-3xl mx-auto md:text-5xl text-4xl!"
            >
              How to choose affordable movers in Dubai (and spot red flags)
            </h2>
            <p className="mt-3 max-w-3xl mx-auto">
              Price is only one part of the decision. Choosing affordable movers
              in Dubai takes a few minutes of checking, and it can save you a
              lot of trouble.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 border-t-4 border-t-green-500">
              <h3 className="text-2xl! font-bold mb-4">What to check</h3>
              <ul className="space-y-3">
                {whatToCheck.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 border-t-4 border-t-red-500">
              <h3 className="text-2xl! font-bold mb-4">Red flags</h3>
              <ul className="space-y-3">
                {redFlags.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ----------------------------- Trust -------------------------- */}
        <section
          aria-labelledby="trust"
          className="max-w-5xl mx-auto mt-36 px-3"
        >
          <div className="text-center mb-10">
            <h2 id="trust" className="md:text-5xl text-4xl!">
              Can affordable movers in Dubai be trusted?
            </h2>
            <p className="mt-3">
              Affordable movers in Dubai can be trusted when they show proof.
              Here&apos;s ours.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <div className="inline-block p-3 rounded-lg bg-orange-50 text-(--brand-color) mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl! md:text-3xl! font-bold mb-4">
              Licence and insurance
            </h3>
            <div className="flex flex-col gap-y-4">
              <p>
                We&apos;re a registered company. Our trade licence details are
                available on request, and you&apos;re welcome to ask for them
                before you book.
              </p>
              <p>
                Our work is covered by insurance for damage or loss. If
                something is damaged, tell us and we&apos;ll go through the
                claim with you.
              </p>
            </div>
          </div>

          <div className="text-center mt-14">
            <h3 className="text-2xl! md:text-3xl! font-bold mb-3">
              What our customers say
            </h3>
            <p>
              We have 857 Google reviews. Read what customers say about their
              moves below, and judge for yourself.
            </p>
          </div>
          <ReviewSection hideTitle />
        </section>

        {/* ---------------------------- Process ------------------------- */}
        <section
          aria-labelledby="process"
          className="max-w-7xl mx-auto mt-36 px-3 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 id="process" className="md:text-5xl text-4xl!">
              Our simple 4-step moving process
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Here&apos;s how a move with our affordable movers in Dubai works
              from start to finish.
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* ------------------------------ Areas ------------------------- */}
        <section
          aria-labelledby="areas"
          className="max-w-6xl mx-auto mt-36 px-3"
        >
          <div className="text-center mb-10">
            <h2
              id="areas"
              className="max-w-3xl mx-auto md:text-5xl text-4xl!"
            >
              Dubai areas we serve and building move rules
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20 bg-(--brand-color)" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 rounded-xl mb-4 bg-(--brand-color)/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="mb-5">
                  Our affordable movers in Dubai work across the city, including
                  these areas:
                </p>
                <ul className="grid grid-cols-1 gap-y-3">
                  {areas.map((area) => (
                    <li key={area} className="flex items-start text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-(--brand-color) mr-2 mt-0.5 shrink-0" />
                      <b>{area}</b>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 pt-5">
                  If your area isn&apos;t on the list, message us and
                  we&apos;ll confirm.
                </p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20 bg-(--heading-color)" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 rounded-xl mb-4 bg-(--heading-color)/10">
                  <PackageCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl! md:text-3xl! font-bold mb-4">
                  Permits and documents
                </h3>
                <div className="flex flex-col gap-y-4">
                  <p>
                    Most Dubai buildings ask for a move-in or move-out permit
                    from building management or the developer, such as Emaar,
                    Nakheel or Dubai Properties. Apply two to five days before
                    your move. You&apos;ll usually need your tenancy contract,
                    your Ejari and a copy of your passport. Some buildings also
                    ask for a no-objection certificate (NOC) when you move out.
                    Rules differ from building to building, so check with yours
                    before you book.
                  </p>
                  <p>
                    On the day, keep jewellery, cash and passports with you.
                    Work pauses briefly for Friday prayers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------ FAQs -------------------------- */}
        <FAQs
          faqs={AffordableMoversDubaiFaqs}
          title="FAQs about affordable movers in Dubai"
        />

        {/* ----------------------------- Final CTA ---------------------- */}
        <section
          aria-labelledby="final-quote"
          className="mt-32 bg-(--heading-color) px-3 md:px-20 py-20 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2
              id="final-quote"
              className="md:text-4xl! text-3xl! font-black text-white!"
            >
              Get your free quote from affordable movers in Dubai
            </h2>
            <p className="text-(--neutral-color) mt-4">
              Ready to book affordable movers in Dubai? Tell us what you&apos;re
              moving, where from, where to and when. We&apos;ll send a fixed
              price in writing, usually within 10 minutes. You pay after the
              move, not before.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size={"lg"} callBtn>
                <PhoneCall /> Call {PHONE_DISPLAY}
              </Button>
              <Button variant={"outline"} size={"lg"} wtsBtn>
                <MessageCircle /> WhatsApp for a free quote
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AffordableMoversDubai;
