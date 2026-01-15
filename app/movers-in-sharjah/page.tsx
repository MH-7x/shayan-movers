import ContactSection from "@/components/ContactSection";
import { ReviewSection } from "@/components/Services";
import { Button } from "@/components/ui/button";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { CheckCircle2, Landmark, MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers in Sharjah | Top-Rated Moving Company in Sharjah",
      desc: "Looking for reliable movers in Sharjah? Shayan Movers offers professional packing and moving for homes and offices. Licensed, insured, and 24/7 service.",
    },
    image: {
      path: "/movers-in-sharjah.jpg",
      alt: "Movers and Packers in sharjah",
    },
    path: "/movers-in-sharjah",
  },
});

import React from "react";
import {
  ShieldCheck,
  CircleDollarSign,
  PackageCheck,
  Headset,
  Star,
} from "lucide-react";
import Link from "next/link";
import Process from "@/components/Process";
import { FAQs } from "@/components/FAQs";
import { SharjahFaqs } from "@/lib/lists";
import CTA from "@/components/CTA";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import Script from "next/script";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WhyChooseUs = () => {
  const features: Feature[] = [
    {
      title: "Experienced Professional Team",
      description:
        "Our crew is trained and wears uniforms. They know how to handle fragile items and expensive furniture with care.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Transparent Pricing",
      description:
        "We give you a clear, fixed quote. There are no hidden fees or surprise costs. We even offer free on-site estimates.",
      icon: <CircleDollarSign className="w-8 h-8" />,
    },
    {
      title: "No-Damage Guarantee",
      description:
        "We use the best packing materials, including thick bubble wrap. If any item is damaged, we will replace it.",
      icon: <PackageCheck className="w-8 h-8" />,
    },
    {
      title: "24/7 Support",
      description:
        "You will have a dedicated coordinator. Reach us anytime via WhatsApp or phone to book or ask questions.",
      icon: <Headset className="w-8 h-8" />,
    },
    {
      title: "Trust & Reputation",
      description:
        "With thousands of moves completed across the UAE, we show up on time and do the job right.",
      icon: <Star className="w-8 h-8" />,
    },
  ];

  return (
    <section className="mt-36 px-3 ">
      <div className="md:w-11/12 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl! md:text-5xl! font-bold text-[#263238] mb-4">
            Why Choose Shayan Movers?
          </h2>
          <div className="w-20 h-1 bg-[#d84315] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We know you have many choices when it comes to a Sharjah moving
            company. Here is why people trust us with their belongings:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 inline-block p-3 rounded-lg bg-orange-50 text-[#d84315] group-hover:bg-[#d84315] group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl! font-bold text-[#263238] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

          {/* Call to Action Card (Optional 6th Slot for Balance) */}
          <div className="bg-[#263238] p-8 rounded-xl flex flex-col justify-center items-center text-center text-white!">
            <h3 className="text-2xl! text-white! font-bold mb-4">
              Ready to Move?
            </h3>
            <p className="mb-6 opacity-90">
              Get your free, no-obligation quote in minutes.
            </p>
            <Button wtsBtn> Get Free Estimate</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "House & Villa Moving in Sharjah",
    desc: (
      <>
        Moving a whole house is a lot of work. Our house movers Sharjah team
        handles villas and homes of all sizes. <br /> We don&apos;t just move
        boxes; we dismantle your furniture, pack it safely, transport it, and
        put it all back together in your new home.
      </>
    ),
    img: {
      src: "/House-Villa-Moving-Sharjah.jpg",
    },
    href: "/house-movers-in-dubai",
  },
  {
    title: "Apartment & Studio Moving",
    desc: (
      <>
        If you are moving a flat, you need speed and efficiency. Our apartment
        movers Sharjah service is perfect for studios and apartments. <br /> We
        are used to handling building security, parking limits, and elevators to
        ensure a same-day move when needed.
      </>
    ),
    img: {
      src: "/Apartment-Studio-Moving-Sharjah.jpg",
    },
    href: "/house-movers-in-dubai",
  },
  {
    title: "Office & Commercial Moving",
    desc: (
      <>
        Business owners need to avoid downtime. Our office movers Sharjah team
        works fast to get your business back up and running. <br /> We securely
        transport IT equipment, servers, and office furniture, offering
        overnight or weekend moves for zero interruption.
      </>
    ),
    img: {
      src: "/Office-Commercial-Moving-Sharjah.jpg",
    },
    href: "/office-movers-in-dubai",
  },
  {
    title: "Furniture Moving & Assembly",
    desc: (
      <>
        Don&apos;t stress about heavy lifting or complicated manuals. Our
        furniture movers Sharjah service includes taking apart and reassembling
        everything. <br /> We use the right tools to ensure your wardrobes,
        beds, and sofas look perfect in your new space.
      </>
    ),
    img: {
      src: "/Furniture-Moving-Assembly-Sharjah.jpg",
    },
    href: "/",
  },
  {
    title: "Packing & Wrapping Services",
    desc: (
      <>
        Good packing is the secret to a safe move. We use premium bubble wrap,
        strong cartons, and stretch film. <br /> Our trained packers label every
        box by room and can even help you unpack everything at your new
        location.
      </>
    ),
    img: {
      src: "/Packing-Wrapping-Services-Sharjah.jpg",
    },
    href: "/",
  },
  {
    title: "Storage & Warehousing",
    desc: (
      <>
        If your new home isn&apos;t ready yet, we have a solution. We offer
        climate-controlled storage in Sharjah monitored 24/7 by CCTV. <br /> Our
        units are fully insured and available for both short-term and long-term
        needs.
      </>
    ),
    img: {
      src: "/Storage-Warehousing-Sharjah.jpg",
    },
    href: "/",
  },
  {
    title: "Local & Inter-Emirate Moving",
    desc: (
      <>
        We are experts in Sharjah, but we also handle moves across the UAE.
        <br /> Whether you need Sharjah to Dubai movers or are heading to Abu
        Dhabi, we handle all the logistics and inter-emirate permits smoothly.
      </>
    ),
    img: {
      src: "/Local-Inter-Emirate-Moving-Sharjah.jpg",
    },
    href: "/",
  },
];

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(SharjahFaqs));

const SharjahPage = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />

      <main className="md:mt-30.25 mt-17.5 ">
        <section className=" bg-(--neutral-color)/75 md:pl-56 pl-3 md:pr-72 pr-3 py-14 flex items-center justify-start relative overflow-hidden">
          <div className="md:border-l-4 py-8 md:pl-5 border-(--heading-color) z-1">
            <h1 className="text-(--brand-color)! md:text-4xl! text-3xl!">
              Reliable Movers in Sharjah – Shayan Movers and Packers
            </h1>
            <p className="mt-5">
              Moving to a new place is a big step, but it doesn&apos;t have to
              be a headache. If you are looking for movers in Sharjah, Shayan
              Movers is here to help.
            </p>
            <p className="mt-2">
              We are a trusted Sharjah moving company with over 15 years of
              experience in the UAE. Our team is fully licensed and insured,
              offering 24/7 service to fit your busy schedule.
            </p>
            <div className="flex mt-5 gap-x-3">
              <Button callBtn>
                <PhoneCall /> Call Now
              </Button>
              <Button callBtn variant={"secondary"}>
                <MessageCircle /> Quote On WhatsApp
              </Button>
            </div>
          </div>
          <Image
            src={"/movers-in-sharjah.jpg"}
            alt="Movers and Packers in sharjah"
            priority
            fill
            loading="eager"
            className="object-cover -z-1"
          />
        </section>
        <ContactSection
          title="Get A Quote From Best Movers in Sharjah"
          desc={
            <>
              <p>
                Whether you are moving a small apartment or a large corporate
                office, we focus on making your relocation easy and stress-free.
                We cover every corner of Sharjah and provide door-to-door
                service across the entire UAE.
              </p>
              <p className="mt-1">
                So Contact Us Now, Share your detail about moving and we will
                give you quote within 10 mins.
              </p>
            </>
          }
        />
        <ReviewSection />
        <WhyChooseUs />
        <section className="mt-36 md:px-0 px-3">
          <h2 className="text-center md:text-5xl! text-4xl!">
            Our Sharjah Moving Services
          </h2>
          <p className="mt-3 text-center">
            We provide a full range of services to cover every part of your
            move.
          </p>
          <div className="w-full max-w-6xl mx-auto my-20 grid md:grid-cols-2 grid-cols-1 gap-x-10">
            {services.map((service, i) => (
              <div key={i}>
                <div className="w-full md:h-92 h-80 relative z-0 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.img.src}
                    alt={service.title}
                    fill
                    className="absolute object-cover object-center"
                  />
                </div>
                <div className="w-11/12 mx-auto rounded-2xl shadow-lg shadow-neutral-100 bg-white/90 min-h-32 z-10 transform -translate-y-10 py-5 px-3 ">
                  <Link href={service.href}>
                    <h3 className="md:text-2xl! text-xl! font-bold! b1 text-center">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="b-text mt-3 md:text-base text-sm! text-center">
                    {service.desc}
                  </p>
                  <div className="flex items-center justify-center gap-x-5 w-full mt-5">
                    <Button wtsBtn size={"sm"}>
                      Get A Quote
                    </Button>
                    <Link
                      href={service.href}
                      title={service.title}
                      className="text-sm text-(--brand-color) underline underline-offset-1"
                    >
                      Service Details..
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Process />
        <section className="group mt-28 relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 overflow-hidden max-w-4xl mx-auto">
          {/* Decorative background element */}
          <div
            className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20 transition-transform group-hover:scale-110 bg-(--brand-color)`}
          />

          <div className="relative z-10">
            <div
              className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 bg-(--brand-color)/20`}
            >
              <Landmark className="w-6 h-6 " />
            </div>

            <h2 className="text-3xl! font-bold! mb-2">
              Service Areas in Sharjah
            </h2>
            <p className="  mb-8">
              Our Sharjah movers serve everywhere from Al Nahda to Al Majaz. We
              cover all major neighbourhoods including:
            </p>

            <div className="space-y-3">
              <ul className="grid grid-cols-1 gap-y-2">
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p className="font-semibold">• Al Nahda & Al Taawun</p>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p className="font-semibold">• Muwaileh & University City</p>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p className="font-semibold">• Al Majaz & Al Qasimia</p>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p className="font-semibold">• Abu Shagara & Al Khan</p>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p className="font-semibold">• Industrial Areas 1–17</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mt-36 max-w-5xl mx-auto md:p-10 px-3">
          <h2 className="md:text-4xl! text-3xl!">Pricing & Free Quotes</h2>
          <div className="mt-3 w-7/12 h-1 bg-(--brand-color) rounded-3xl" />
          <div className="flex flex-col gap-y-3 mt-5 md:max-w-4xl">
            <p>
              We offer competitive rates that give you real value. Typical moves
              in Sharjah range from AED 700 to AED 4,000, depending on how much
              stuff you have and the distance.
            </p>
            <p>
              We provide free on-site estimates so you know the cost upfront.
            </p>
            <div className="flex mt-5 gap-x-3">
              <Button callBtn>
                <PhoneCall /> Call Now
              </Button>
              <Button callBtn variant={"secondary"}>
                <MessageCircle /> Quote On WhatsApp
              </Button>
            </div>
          </div>
          <h2 className="md:text-4xl! text-3xl! mt-16">
            {" "}
            Moving Tips & Checklist
          </h2>
          <div className="mt-3 w-7/12 h-1 bg-(--brand-color) rounded-3xl" />
          <div className="flex mt-5 gap-x-3">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <b> Declutter:</b> Donate or sell items you don&apos;t use
                anymore. Why pay to move things you don&apos;t need?
              </li>
              <li>
                <b>Label Boxes:</b> Mark boxes by room (e.g., &quot;Kitchen –
                Dishes&quot;). This makes unpacking much faster.
              </li>
              <li>
                <b>Keep Valuables With You:</b> Pack your documents, jewelry,
                and cash in a separate bag and keep it with you.
              </li>
              <li>
                <b>Check Utilities:</b> Make sure your SEWA and internet are
                scheduled to be transferred a few days before you move.
              </li>
              <li>
                <b>Watch the Timing:</b> Try to avoid moving on Friday
                afternoons when Sharjah traffic is at its heaviest.
              </li>
            </ul>
          </div>
        </section>
        <FAQs faqs={SharjahFaqs} />
        <CTA />
      </main>
    </>
  );
};

export default SharjahPage;
