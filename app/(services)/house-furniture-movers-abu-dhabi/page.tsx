import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BoxesIcon,
  CheckCircle2,
  CircleDollarSign,
  Globe,
  Landmark,
  MapPin,
  Medal,
  MessageCircle,
  MessageCircleWarningIcon,
  PhoneCall,
  ShieldCheck,
  Star,
} from "lucide-react";
import Image from "next/image";
import heroImage from "@/public/house-furniture-movers-abu-dhabi.jpg";
import ContactSection from "@/components/ContactSection";

interface Feature {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}
const WhyChooseUs = () => {
  const features: Feature[] = [
    {
      title: "Licensed & Insured Moving Services",
      description: (
        <>
          <p>
            We are fully licensed by the Abu Dhabi Municipality. This means we
            follow all local laws and safety standards. We also provide
            insurance for your belongings.
          </p>{" "}
          <p>
            If something goes wrong, you are covered. We believe in being honest
            about our policies so you can feel at ease.
          </p>
        </>
      ),
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Experienced Furniture Moving Specialists",
      description: (
        <>
          <p>
            Our team has spent years working as house furniture movers in Abu
            Dhabi. We have seen it all—from narrow stairwells to strict building
            security.
          </p>
          <p>
            We know how to handle delicate items like antiques, large
            electronics, and heavy sofas. We also understand the paperwork and
            access permits required by most Abu Dhabi communities.
          </p>
        </>
      ),
      icon: <Medal className="w-8 h-8" />,
    },
    {
      title: "Comprehensive Packing Solutions",
      description: (
        <>
          <p>
            We use high-quality materials to protect your things. This includes
            thick moving boxes, bubble wrap, and protective blankets.We don’t
            just throw things in a box.
          </p>
          <p>
            {" "}
            We use a labeling system so you know exactly where your kitchen
            items or bedroom clothes are when you arrive.
          </p>
        </>
      ),
      icon: <BoxesIcon className="w-8 h-8" />,
    },
    {
      title: "Transparent & Competitive Pricing",
      description: (
        <>
          <p>
            No one likes surprise charges. We give you a clear, detailed quote
            before we start. The price we agree on is the price you pay.
          </p>
          <p>
            We offer different packages to fit different budgets, and we always
            try to keep our rates fair.
          </p>
        </>
      ),
      icon: <CircleDollarSign className="w-8 h-8" />,
    },
    {
      title: "Modern Fleet & Equipment",
      description: (
        <>
          <p>
            {" "}
            Our trucks are clean, well-maintained, and come in various sizes. We
            use GPS tracking so we always know where your furniture is.
          </p>
          <p>
            {" "}
            Our team uses professional tools like dollies, ramps, and heavy-duty
            straps to ensure everything is secure during the drive.
          </p>
        </>
      ),
      icon: <Star className="w-8 h-8" />,
    },
  ];

  return (
    <section className="mt-36 px-3 ">
      <div className="md:w-11/12 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl! md:text-5xl! max-w-4xl mx-auto font-bold text-[#263238] mb-4">
            Why Choose Us as Your Abu Dhabi House Movers and Packers
          </h2>
          <div className="max-w-[70%] h-1 bg-[#d84315] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Choosing the right team for house shifting in Abu Dhabi makes all
            the difference. You need people who show up on time and know how to
            handle a heavy wardrobe or a fragile mirror.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div className="text-gray-600">{feature.description}</div>
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

import React, { JSX, ReactNode } from "react";
import { Truck, Box, Building2, Wrench } from "lucide-react";
import { ReviewSection } from "@/components/Services";

// Interface for type safety
interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  src: string;
  // Optional list for detailed items like the packing section
  details?: { label: string; text: string }[];
}

const services: ServiceItem[] = [
  {
    title: "Furniture Packing & Protection",
    description:
      "Furniture is often the most expensive thing in a home. We use special techniques for different items:",
    icon: Box,
    src: "/Furniture-Packing-Protection.jpg",
    details: [
      {
        label: "Leather Sofas",
        text: "Wrapped in breathable materials to prevent sweat or tears.",
      },
      {
        label: "Glass Tables",
        text: "Covered in thick foam and placed in custom crates.",
      },
      {
        label: "Wardrobes",
        text: "Wrapped in stretch film to keep doors shut and surfaces scratch-free.",
      },
      {
        label: "Electronics",
        text: "Padded and boxed in their original style containers or heavy-duty electronics boxes.",
      },
    ],
  },
  {
    title: "Apartment & Villa Moving",
    description:
      "Moving an apartment in a high-rise is different from moving a villa.",
    icon: Building2,
    src: "/Apartment-Villa-Moving.jpg",
    details: [
      {
        label: "Apartments",
        text: "We handle elevator bookings and parking for the truck.",
      },
      {
        label: "Villas",
        text: "We manage the larger volume of items and ensure garden furniture or outdoor equipment is handled properly.",
      },
    ],
  },
  {
    title: "Full-Service House Moving",
    description:
      'This is our "do-it-all" option. We come to your home, pack everything, load the truck, drive to your new place, and set everything up. It is the best choice if you want a move where you don\'t have to lift a finger.',
    icon: Truck,
    src: "/Full-Service-House-Moving.jpg",
  },
  {
    title: "Furniture Dismantling & Reassembly",
    description:
      "Most large furniture, like bed frames and dining tables, needs to be taken apart to move safely. Our team brings their own tools to dismantle your furniture and put it back together exactly as it was in your new home. This service is included in our standard quotes.",
    icon: Wrench,
    src: "/Furniture-Dismantling-Reassembly.jpg",
  },
  {
    title: "Specialty Item Moving",
    description:
      "Do you have a piano, a pool table, or a heavy safe? These items need special care. We have the equipment and the strength to move heavy or awkward items without damaging your floors or the items themselves.",
    icon: ShieldCheck,
    src: "/Specialty-Item-Moving.jpg",
  },
];

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
      {/* Image Placeholder */}
      <div className="w-full md:h-96 h-72.5 bg-gray-200 relative group overflow-hidden">
        <Image
          src={service.src}
          alt={service.title}
          fill
          className="object-cover"
        />
        {/* Simulate an image overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-black/20 transition-all duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Icon & Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-(--neutral-color) text-(--brand-color) rounded-lg shrink-0">
            <service.icon className="w-6 h-6" />
          </div>
          <h3 className="md:text-2xl! text-xl! font-bold! text-gray-900 leading-tight">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
          {service.description}
        </p>

        {/* Detailed List (if applicable) */}
        {service.details && (
          <ul className="pt-4 grid md:grid-cols-2 grid-cols-1 gap-y-3 border-t border-gray-100">
            {service.details.map((item, index) => (
              <li key={index} className="flex flex-col text-sm">
                <span className="font-semibold text-gray-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--brand-color) shrink-0"></span>
                  {item.label}:
                </span>
                <span className="text-gray-500 pl-3.5 mt-0.5">{item.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
function MovingServices() {
  return (
    <section className="mt-36">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl! md:text-4xl! font-extrabold tracking-tight mb-4">
            Our Complete House Furniture Moving Services in Abu Dhabi
          </h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of services to cover every part of your move.
            You can pick exactly what you need.
          </p>
          <div className="mt-6 h-1 w-24 bg-(--brand-color) mx-auto rounded-full"></div>
        </div>

        {/* Services Grid - Using Masonry-like grid for varied heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Call to Action (Optional) */}
      </div>
    </section>
  );
}

interface LocationType {
  id: string;
  city: string;
  description: string;
  icon: JSX.Element;
  color: string;
  areas: ReactNode[];
}

const locations: LocationType[] = [
  {
    id: "Island-Communities",
    city: "Island Communities",
    description: "Serving the heart of the UAE with rapid delivery.",
    icon: <Building2 className="w-6 h-6 " />,
    color: "bg-(--neutral-color) text-(--brand-color)",
    areas: [
      <>
        <b>Al Reem Island:</b>{" "}
        <p>Expert at navigating high-rise building rules.</p>
      </>,
      <>
        <b>Yas Island:</b>{" "}
        <p>Fast service for the many villas and apartments here.</p>
      </>,
      <>
        <b>Saadiyat Island:</b> <p>Careful handling for luxury homes.</p>
      </>,
      <>
        <b>Al Maryah Island</b>{" "}
        <p>Professional moves for the city’s business hub.</p>
      </>,
    ],
  },
  {
    id: "Abu-Dhabi-Residential-Areas",
    city: "Popular Residential Areas",
    description: "Serving the Popular Residential Areas in Abu Dhabi",
    icon: <Landmark className="w-6 h-6 " />,
    color: "bg-(--neutral-color) text-(--brand-color)",
    areas: [
      <>
        <b>Al Reef:</b>{" "}
        <p>Frequent moves for both the villas and the downtown apartments.</p>
      </>,
      <>
        <b>Khalifa City:</b> <p> Efficient shifting for large family villas.</p>
      </>,
      <>
        <b>MBZ City:</b> <p> Reliable transport for residential relocations.</p>
      </>,
      <>
        <b>Masdar City</b> <p> Eco-friendly and organized moving solutions.</p>
      </>,
    ],
  },
  {
    id: "Central-Abu-Dhabi-and-Outer-Areas",
    city: "Central Abu Dhabi & Outer Areas",
    description: "Serving the Central Abu Dhabi & Outer Areas in Abu Dhabi",
    icon: <Landmark className="w-6 h-6 " />,
    color: "bg-(--neutral-color) text-(--brand-color)",
    areas: [
      <>
        <b>Tourist Club Area </b>{" "}
      </>,
      <>
        <b>Corniche </b>{" "}
      </>,
      <>
        <b>Al Ain, Baniyas </b>{" "}
      </>,
      <>
        <b>Shakhbout City </b>{" "}
      </>,
    ],
  },
];
const LocationCard = ({ location }: { location: LocationType }) => (
  <div className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 overflow-hidden">
    {/* Decorative background element */}
    <div
      className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20 transition-transform group-hover:scale-110 bg-(--brand-color)`}
    />

    <div className="relative z-10">
      <div
        className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 ${location.color}`}
      >
        {location.icon}
      </div>

      <h3 className="text-2xl! font-bold! mb-2">{location.city}</h3>
      <p className="text-sm  mb-6">{location.description}</p>

      <div className="space-y-3">
        <h4 className="text-xs! font-semibold! uppercase tracking-wider text-gray-400">
          Key Areas
        </h4>
        <ul className="flex flex-col gap-y-2">
          {location.areas.map((area, index) => (
            <li key={index} className="flex items-start text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
              <div className="flex md:flex-row flex-col">{area}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

import { Phone, CheckCircle } from "lucide-react";
import Link from "next/link";
import { FAQs } from "@/components/FAQs";
import { AbuDhabiHouseMoversFaqs } from "@/lib/lists";
import CTA from "@/components/CTA";

interface PricingTier {
  name: string;
  priceRange: string;
  description: string;
  features: string[];
}

const PricingCard = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: "Studio Apartment",
      priceRange: "AED 600 - AED 900",
      description: "Ideal for minimal furniture",
      features: [
        "Basic furniture moving",
        "Local transport",
        "Loading & unloading",
      ],
    },
    {
      name: "1-Bedroom Apartment",
      priceRange: "AED 1,000 - AED 1,400",
      description: "Includes standard packing",
      features: [
        "All studio features",
        "Standard packing materials",
        "Basic furniture disassembly",
      ],
    },
    {
      name: "2-Bedroom Apartment",
      priceRange: "AED 1,600 - AED 2,200",
      description: "Full team and larger truck",
      features: [
        "All 1-bedroom features",
        "Full moving team",
        "Larger transport vehicle",
        "Priority scheduling",
      ],
    },
    {
      name: "3-Bedroom Villa",
      priceRange: "AED 2,500 - AED 3,500",
      description: "Comprehensive villa move",
      features: [
        "All 2-bedroom features",
        "Multiple team coordination",
        "Advanced packing materials",
        "Extended service hours",
      ],
    },
    {
      name: "4+ Bedroom Villa",
      priceRange: "Custom Quote",
      description: "Comprehensive villa move",
      features: [
        "Site visit assessment",
        "Customized moving plan",
        "Premium packing service",
        "Dedicated project manager",
      ],
    },
  ];

  return (
    <div className=" mt-36 px-3 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl max-w-xl mx-auto">
            House Furniture Moving Pricing in{" "}
            <span className="text-(--brand-color)">Abu Dhabi</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in fair prices for hard work. While every move is
            different, here is a general idea of what to expect for a local move
            within Abu Dhabi.
          </p>
        </div>

        {/* Image Placeholder */}

        {/* Pricing Section */}
        <div className="mb-16">
          <h3 className="text-3xl! font-bold text-gray-900 text-center mb-12">
            Estimated <span className="text-(--brand-color)">Price Ranges</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`
                  bg-white rounded-xl shadow-lg p-6 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl
                  ${
                    tier.name.includes("4+")
                      ? "border-yellow-400 transform lg:col-span-2 xl:col-span-1"
                      : "border-transparent hover:border-(--brand-color)"
                  }
                `}
              >
                {/* Tier Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-(--neutral-color) rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">
                      {index === 0
                        ? "🏢"
                        : index === 1
                        ? "🏠"
                        : index === 2
                        ? "🏢"
                        : index === 3
                        ? "🏡"
                        : "🏰"}
                    </span>
                  </div>
                </div>

                <h4 className="text-xl! font-bold text-gray-900 text-center mb-2">
                  {tier.name}
                </h4>

                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-(--brand-color)">
                    {tier.priceRange}
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    {tier.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Special Note for Custom Quote */}
                {tier.name.includes("4+") && (
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-800 text-center">
                      Contact us for a custom quote based on a site visit
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Note Section */}
        <div className="bg-yellow-50 rounded-xl p-6 mb-12 border border-yellow-200 max-w-2xl mx-auto">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600">
                  <MessageCircleWarningIcon />
                </span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-yellow-800">
                <strong>Please note:</strong> Prices change based on the amount
                of packing materials used and any special items like pianos.{" "}
                <Link
                  href={
                    "https://wa.me/+971547326816?text=I%20Come%20From%20Your%20Website%20and%20I%20Need%20Moving%20Services"
                  }
                  className="underline text-(--brand-color)"
                >
                  Get Accurate Price!
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}

        {/* Additional Image Placeholders */}
      </div>
    </div>
  );
};

const HouseFurnitureMoversAbuDhabi = () => {
  return (
    <main className=" mt-32">
      <section className="relatve">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
            <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
              Professional House Furniture Movers in Abu Dhabi .
            </h1>
            <p className="mx-auto mb-5 max-w-4xl text-lg text-[#636262] lg:mb-8">
              Moving your home is one of the biggest changes you can make. If
              you are looking for reliable house furniture movers in Abu Dhabi,
              Shayan Movers is here to help.
            </p>

            <div className="flex justify-center gap-x-4">
              <Button size={"lg"} callBtn>
                <PhoneCall /> Call Now
              </Button>
              <Button variant={"secondary"} size={"lg"} wtsBtn>
                <MessageCircle /> Quote On WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto h-112.5 rounded-2xl bg-white ">
            <Image
              src={heroImage}
              placeholder="blur"
              loading="eager"
              fill
              alt="House Furniture Movers in Abu Dhabi"
              className="object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-(--brand-color)"></div>
          </div>
        </div>

        <img
          alt="Line Svg"
          src={"/lines-1.svg"}
          className="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto"
        />
        <img
          alt="Line Svg"
          src={"/lines-1.svg"}
          className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block"
        />
      </section>
      <ContactSection
        title="Get A Quote From House Movers in Abu Dhabi"
        desc={
          <>
            <p>
              We focus on making your move easy and stress-free. As one of the
              best house movers in Abu Dhabi, we handle everything from small
              studio apartments to large family villas.
            </p>
            <p>
              Whether you are moving to a new flat in Al Reem Island or a villa
              in Saadiyat Island, our team knows the city well.{" "}
            </p>
          </>
        }
      />
      <section className="mt-36 max-w-5xl mx-auto md:p-10 px-3 border-l-2 border-(--brand-color)">
        <div className="flex flex-col gap-y-3 mt-5 md:max-w-4xl">
          <p>
            We offer complete house shifting services in Abu Dhabi that cover
            every step of the journey.
          </p>
          <p>
            Our house movers and packers in Abu Dhabi don&apos;t just move
            boxes; we take care of your furniture as if it were our own.
          </p>
          <p>
            We have years of experience navigating the specific building rules
            and traffic patterns of the UAE capital. Our goal is simple: to get
            your belongings to your new home safely and on time.
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
      </section>
      <WhyChooseUs />
      <ReviewSection />
      <MovingServices />
      <section className="md:px-0 px-3 mt-36 max-w-2xl mx-auto ">
        <h2 className="mb-16 text-3xl! font-bold lg:text-4xl! ">
          Our House Furniture Moving Process in Abu Dhabi
        </h2>

        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-(--brand-color)">
                1
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 "></div>
          </div>
          <div className="pt-1 pb-8">
            <h3 className="mb-2 text-xl! font-bold">
              Step 1: Free In-Home or Virtual Survey
            </h3>
            <p className="text">
              First, we need to see what we are moving. We can come to your home
              or do a video call. We look at the size of your furniture and
              check for any tricky items. This helps us give you an accurate
              price.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-(--brand-color)">
                2
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 "></div>
          </div>
          <div className="pt-1 pb-8">
            <h3 className="mb-2 text-xl! font-bold">
              Step 2: Detailed Quote & Planning
            </h3>
            <p className="text">
              After the survey, we send you a quote. It lists everything
              included so there are no questions later. Once you agree, we pick
              a date that works for you.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-(--brand-color)">
                3
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 "></div>
          </div>
          <div className="pt-1 pb-8">
            <h3 className="mb-2 text-xl! font-bold">
              Step 3: Professional Packing{" "}
            </h3>
            <p className="text">
              On moving day, our team arrives with all the supplies. We work
              room by room. We make sure fragile items are double-wrapped and
              everything is boxed securely.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-(--brand-color)">
                4
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 "></div>
          </div>
          <div className="pt-1 pb-8">
            <h3 className="mb-2 text-xl! font-bold">
              Step 4: Safe Loading & Transport
            </h3>
            <p className="text">
              We load the truck carefully. We put the heaviest items on the
              bottom and use straps to stop things from sliding. Our drivers
              know the best routes in Abu Dhabi to avoid heavy traffic and
              bumps.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-(--brand-color)">
                5
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 "></div>
          </div>
          <div className="pt-1 pb-8">
            <h3 className="mb-2 text-xl! font-bold">
              Step 5: Unloading & Placement
            </h3>
            <p className="text">
              When we reach your new home, we don’t just drop boxes in the
              hallway. We put each box and piece of furniture in the specific
              room you want. We take care not to scuff the walls or scratch the
              new floors.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-(--brand-color)">
                6
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 "></div>
          </div>
          <div className="pt-1 pb-8">
            <h3 className="mb-2 text-xl! font-bold">
              Step 6: Unpacking & Setup
            </h3>
            <p className="text">
              If you chose our unpacking service, we help you get settled. We
              reassemble your beds, set up your wardrobes, and take away all the
              empty boxes and packing trash.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-30 py-16 ">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--brand-color) text-(--neutral-color) text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              <span>Service Coverage</span>
            </div>
            <h2 className="text-4xl! md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Areas We Serve in{" "}
              <span className="text-(--brand-color)">Abu Dhabi</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We work across the entire emirate. If you live in Abu Dhabi, we
              can reach you.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 lg:gap-8">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>

          {/* Bottom CTA / Trust Indicator */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-slate-900">
                Don&apos;t see your area listed?
              </h4>
              <p className=" mt-1">
                We likely still cover it! Contact us to confirm delivery
                options.
              </p>
            </div>
            <Button variant={"secondary"} size={"lg"} wtsBtn className="py-6">
              Check Availability <ArrowRight />
            </Button>
          </div>
        </div>
      </section>
      <PricingCard />
      <section className="mt-36 max-w-5xl mx-auto md:p-10 px-3">
        <h2 className="md:text-4xl! text-3xl!">
          Tips for a Smooth House Move in Abu Dhabi
        </h2>
        <div className="mt-3 w-7/12 h-1 bg-(--brand-color) rounded-3xl" />
        <div className="flex flex-col gap-y-3 mt-5 md:max-w-4xl">
          <p>
            A little bit of planning goes a long way. Here is some advice from
            our team:
          </p>
        </div>

        <ol className="list-inside space-y-2 mt-5">
          <li>
            <b> 1. Book Early:</b> Abu Dhabi is busy. Try to book your movers at
            least two weeks in advance, especially for weekends.
          </li>
          <li>
            <b>2. Clear the Clutter:</b> Don&apos;t pay to move things you
            don&apos;t need. Sell or donate old clothes and furniture before you
            pack.
          </li>
          <li>
            <b>3. Notify Security:</b> Many buildings in Al Reem or Al Raha need
            an &quot;Entry Permit&quot; for movers. Check with your building
            manager a few days before.
          </li>
          <li>
            <b>4. The Essentials Box:</b> Pack a bag with things you need for
            the first night—like chargers, toothbrushes, and a change of
            clothes. Keep this with you in your car.
          </li>
          <li>
            <b>5. Measure Twice:</b> Make sure your large sofa will fit through
            the door of your new apartment!
          </li>
        </ol>
        <div className="flex mt-5 gap-x-3">
          <Button callBtn>
            <PhoneCall /> Call Now
          </Button>
          <Button callBtn variant={"secondary"}>
            <MessageCircle /> Quote On WhatsApp
          </Button>
        </div>
      </section>
      <FAQs faqs={AbuDhabiHouseMoversFaqs} />
      <CTA />
    </main>
  );
};

export default HouseFurnitureMoversAbuDhabi;
