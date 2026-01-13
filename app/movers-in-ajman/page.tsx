import ContactSection from "@/components/ContactSection";
import { ReviewSection } from "@/components/Services";
import { Button } from "@/components/ui/button";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { CheckCircle2, Landmark, MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers in Ajman | Shyan Movers & Packers",
      desc: "Looking for reliable movers in Ajman? Shayan Movers offers top-rated house & office moving services in Ajman. Get a free quote today – licensed, insured, & 24/7 support.",
    },
    image: {
      path: "/movers-in-ajman.jpg",
      alt: "Movers and Packers in Ajman",
    },
    path: "/movers-in-ajman",
  },
});

import { ShieldCheck, MapPin, Tag, Clock } from "lucide-react";
import Link from "next/link";
import Process from "@/components/Process";
import { FAQs } from "@/components/FAQs";
import { AjmanFaqs } from "@/lib/lists";
import CTA from "@/components/CTA";
import Script from "next/script";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";

const features = [
  {
    title: "Licensed & Insured",
    description:
      "We are fully licensed Ajman movers. Your furniture and electronics are protected by UAE-standard insurance, giving you peace of mind.",
    icon: ShieldCheck,
    highlight: true, // This mimics the purple card in your reference image
  },
  {
    title: "Local Expertise",
    description:
      "We have been serving the Ajman community for years. We know the best routes to avoid traffic and the specific parking regulations in areas like Al Jurf and Al Rawda.",
    icon: MapPin,
    highlight: false,
  },
  {
    title: "Fair & Honest Pricing",
    description:
      "No one likes hidden fees. We provide transparent, upfront quotes so you know exactly what you are paying for.",
    icon: Tag,
    highlight: false,
  },
  {
    title: "Available 24/7",
    description:
      "Plans change, and sometimes you need to move quickly. You can call or WhatsApp us any time—we are here when Ajman calls.",
    icon: Clock,
    highlight: false,
  },
];
const servicesList = [
  {
    title: "House & Villa Movers in Ajman",
    desc: (
      <>
        Moving a family home requires a lot of coordination. Our team handles
        everything from packing fragile items to moving heavy appliances. <br />{" "}
        We specialize as house movers in Ajman, ensuring your villa or apartment
        is relocated without a scratch.
      </>
    ),
    img: {
      src: "/House-Villa-Movers-in-Ajman.jpg",
    },
    href: "/house-movers-in-dubai",
  },
  {
    title: "Office & Commercial Moving",
    desc: (
      <>
        Business downtime costs money. Our office movers in Ajman work
        efficiently to get your desks, servers, and files moved quickly so you
        can get back to work. <br /> We offer flexible scheduling, including
        weekend moves, to minimize disruption.
      </>
    ),
    img: {
      src: "/Office-Commercial-Moving-Ajman.jpg",
    },
    href: "/office-movers-in-dubai",
  },
  {
    title: "Furniture Movers & Assembly",
    desc: (
      <>
        Taking apart a large bed or a complex wardrobe can be frustrating. Our
        experts are skilled furniture movers who handle disassembly and
        reassembly. <br /> We make sure your sofa, dining table, and bedroom
        sets are set up perfectly in your new home.
      </>
    ),
    img: {
      src: "/Furniture-Movers-Assembly-Ajman.jpg",
    },
    href: "/",
  },
  {
    title: "Packing & Unpacking Services",
    desc: (
      <>
        If you don&apos;t have time to pack, let us do it. We use high-quality
        bubble wrap, sturdy boxes, and custom crates for delicate items. <br />{" "}
        Our packing services in Ajman include unpacking at your new place, so
        you can settle in faster.
      </>
    ),
    img: {
      src: "/Packing-Unpacking-Services-Ajman.jpg",
      alt: "Cheap Movers and Packers in Abu Dhabi",
    },
    href: "/",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Text Content */}
          <div className="text-left">
            <h4 className="text-gray-500 font-medium text-lg! mb-2 uppercase tracking-wide">
              About Us
            </h4>
            <h2 className="text-4xl! lg:text-5xl! mb-6">
              Why Choose Shayan Movers in Ajman
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We know you have many choices when looking for movers in Ajman.
              Here is why local residents and businesses trust us.
            </p>

            <Button size={"lg"} wtsBtn>
              Get A Quote
            </Button>
          </div>

          {/* RIGHT COLUMN: 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-8 rounded-2xl transition-transform duration-300 hover:-translate-y-1 ${
                  feature.highlight
                    ? "bg-(--brand-color) text-white shadow-xl"
                    : "bg-gray-50 text-gray-900 hover:shadow-md"
                }`}
              >
                {/* Icon Container */}
                <div
                  className={`flex items-center justify-center w-14 h-14 rounded-lg mb-6 ${
                    feature.highlight
                      ? "bg-white/20 text-white"
                      : "bg-indigo-100 text-(--brand-color)"
                  }`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>

                <h3
                  className={`text-xl! font-bold mb-3 ${
                    feature.highlight ? "text-white!" : ""
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`text-sm! ${
                    feature.highlight ? "text-indigo-100" : "text-gray-500"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const FaqsSchema = generateFAQSchema(convertFaqsForSchema(AjmanFaqs));
const page = () => {
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
              Movers in Ajman – Shayan Movers and Packers
            </h1>
            <p className="mt-5">
              Moving home is a big deal. Whether you are moving across the
              street in Al Nuaimia or relocating your business to the Ajman Free
              Zone, you need a team that shows up on time and handles your
              belongings with care.
            </p>
            <p className="mt-2">
              Shayan Movers is a professional moving company serving Ajman and
              the surrounding Emirates. We make sure your move is smooth, safe,
              and stays on schedule.
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
            src={"/movers-in-ajman.jpg"}
            alt="Movers and Packers in Ajman"
            fill
            loading="eager"
            className="object-cover -z-1"
          />
        </section>
        <ContactSection
          title="Get A Quote From Best Movers in Ajman"
          desc={
            <>
              <p>
                Shayan Movers and Packers in Ajman is known for its reliable and
                professional moving services. We offer a wide range of moving
                services to help you move your belongings from one place to
                another safely and efficiently.
              </p>
              <p className="mt-1">
                So Contact Us Now, Share your detail about moving and we will
                give you quote within 10 mins.
              </p>
            </>
          }
        />
        <ReviewSection />
        <WhyChooseUsSection />
        <section className="mt-36 md:px-0 px-3">
          <h2 className="text-center md:text-5xl! text-4xl!">
            Our Ajman Moving Services
          </h2>
          <p className="mt-3 text-center">
            We provide a full range of services to cover every part of your
            move.
          </p>
          <div className="w-full max-w-6xl mx-auto my-20 grid md:grid-cols-2 grid-cols-1 gap-x-10">
            {servicesList.map((service, i) => (
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
              Service Areas in Ajman
            </h2>
            <p className="  mb-8">
              We provide moving services throughout the entire city and
              surrounding districts, including:
            </p>

            <div className="space-y-3">
              <ul className="grid grid-cols-1 gap-y-2">
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p className="font-semibold">Al Nuaimia & Al Khan</p>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p className="font-semibold">Al Jurf & Al Raqaib</p>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p className="font-semibold">Al Mowaihat & Al Tallah</p>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p className="font-semibold">Ajman Corniche & Garden City</p>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p className="font-semibold">Masfout & Manama</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <FAQs faqs={AjmanFaqs} />
        <CTA />
      </main>
    </>
  );
};

export default page;
