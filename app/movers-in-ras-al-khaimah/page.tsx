import JsonLd from "@/components/JsonLd";
import ContactSection from "@/components/ContactSection";
import { ReviewSection } from "@/components/Services";
import { Button } from "@/components/ui/button";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { CheckCircle2, Landmark, MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  ClipboardCheck,
  PackageCheck,
  Truck,
  MapPin,
  Home,
} from "lucide-react";
import { FAQs } from "@/components/FAQs";
import { RAKFaqs } from "@/lib/lists";
import CTA from "@/components/CTA";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers in Ras Al Khaimah | Permit Support & Free Quote",
      desc: "Trusted movers in Ras Al Khaimah for villas, apartments & offices. We handle Al Hamra/Mina Al Arab permits & EtihadWE clearance. Call +971 54 732 6816 now!",
    },
    image: {
      path: "/movers-in-ras-al-khaimah.jpg",
      alt: "Movers and Packers in Ras Al Khaimah",
    },
    path: "/movers-in-ras-al-khaimah",
  },
});

const choiceList = [
  {
    title: "Transparent Pricing",
    desc: "Unlike many movers in Ras Al Khaimah, our quotes are fixed. You won’t see 'surprise charges' for bubble wrap or stairs on moving day. ",
  },
  {
    title: "Community Expertise",
    desc: "We know the gate rules for Al Hamra Village, Mina Al Arab, and Al Marjan Island inside out. We help you get your permits so your move isn't blocked at the gate.",
  },
  {
    title: "Full-Service Care",
    desc: "We don't just drop boxes. Our team handles washing machine disconnection, bed reassembly, and even curtain fixing in your new home",
  },
];

const servicesList = [
  {
    title: "Apartment & Studio Moving",
    desc: (
      <>
        Moving into Julfar Towers or Al Marjan Island? High-rise moves require
        elevator booking and strict timing. We use specialized floor protection
        and padding to ensure we meet building management standards.
      </>
    ),
    img: {
      src: "/Office-Commercial-Moving-Ajman.jpg",
    },
    href: "#contact-section",
  },
  {
    title: "Office & Commercial Relocation",
    desc: (
      <>
        Minimize your business downtime. Our office movers rak team handles IT
        infrastructure, server moving, and cubicle dismantling with precision.
        We also offer weekend moves to keep your business running smoothly.
      </>
    ),
    img: {
      src: "/Furniture-Movers-Assembly-Ajman.jpg",
    },
    href: "#contact-section",
  },
  {
    title: "Villa Movers in Ras Al Khaimah",
    desc: (
      <>
        Moving a large villa requires strategy. We use premium packing materials
        like corrugated sheets and stretch film to protect your marble floors
        and delicate banisters. <br />
        We are the preferred house movers and packers in ras al khaimah for
        large-scale residential relocations.
      </>
    ),
    img: {
      src: "/House-Villa-Movers-in-Ajman.jpg",
    },
    href: "#contact-section",
  },
];

const steps = [
  {
    id: 1,
    title: "Survey & Quote",
    description:
      "We provide a free video or on-site survey to give you an accurate price.",
    icon: <ClipboardCheck className="w-8 h-8" />,
    color: "bg-(--brand-color)",
  },
  {
    id: 2,
    title: "Professional Packing",
    description:
      "Everything from clothes to crystals is wrapped in heavy-duty boxes.",
    icon: <PackageCheck className="w-8 h-8" />,
    color: "bg-(--brand-color)",
  },
  {
    id: 3,
    title: "Secure Loading",
    description:
      "Our covered, insulated trucks protect your furniture from the UAE heat.",
    icon: <Truck className="w-8 h-8" />,
    color: "bg-(--brand-color)",
  },
  {
    id: 4,
    title: "Safe Transport",
    description:
      "Our fleet is GPS-tracked so we know exactly where your belongings are.",
    icon: <MapPin className="w-8 h-8" />,
    color: "bg-(--brand-color)",
  },
  {
    id: 5,
    title: "Unpacking & Setup",
    description:
      "We make your beds and mount your TVs so you can sleep comfortably.",
    icon: <Home className="w-8 h-8" />,
    color: "bg-(--brand-color)",
  },
];

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(RAKFaqs));

const RasAlKhaimahPage = () => {
  return (
    <>
      <JsonLd json={FaqsSchema} />
      <main className="md:mt-30.25 mt-17.5 ">
        <section className=" bg-(--neutral-color)/75 md:pl-56 pl-3 md:pr-72 pr-3 py-14 flex items-center justify-start relative overflow-hidden">
          <div className="md:border-l-4 py-8 md:pl-5 border-(--heading-color) z-1">
            <h1 className="text-(--brand-color)! md:text-4xl! text-3xl!">
              Professional Movers in Ras Al Khaimah – Stress-Free Relocation
              Services
            </h1>
            <p className="mt-5">
              Moving your home or office can be a massive headache, especially
              with the heat and strict community rules in the Northern Emirates.
            </p>
            <p className="mt-2">
              If you are looking for reliable movers in Ras Al Khaimah, you need
              more than just a truck; you need a team that understands the local
              landscape.
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
            src={"/movers-in-ras-al-khaimah.jpg"}
            alt="Movers and Packers in Ras Al Khaimah"
            fill
            sizes="100vw"
            preload
            className="object-cover -z-1"
          />
        </section>

        <ContactSection
          title="Get A Quote From Ras Al Khaimah Movers"
          desc={
            <>
              <p>
                At Shayan Movers, we offer villa, apartment, and office moving
                with careful handling and insurance cover for damage or loss.
              </p>
              <p className="mt-1">
                Whether you are moving into a beachside villa in Al Hamra or a
                high-rise in Julfar Towers, we handle the packing, transport,
                and reassembly so you don&apos;t have to.
              </p>
            </>
          }
        />

        <ReviewSection />

        <section className=" pb-6 mt-36">
          <div className="max-w-7xl mx-auto px-3  sm:p-6 lg:p-8">
            <div className="container mx-auto ">
              <div className="mb-16 text-center">
                <h2 className="max-w-3xl mx-auto md:text-5xl! text-3xl!">
                  We Are the Trusted Movers and Packers in Ras Al Khaimah
                </h2>
                <p className="max-w-4xl mx-auto mt-5">
                  Most people searching for movers and packers in ras al khaimah
                  worry about two things: hidden costs and broken furniture. We
                  have built our reputation on being different.{" "}
                </p>
              </div>

              <div className="flex flex-wrap my-12">
                {choiceList.map((choice, index) => (
                  <div
                    key={index}
                    className={`w-full border-b md:w-1/2 ${
                      index === 2 ? "" : "md:border-r"
                    } lg:w-1/3 md:p-8 p-5`}
                  >
                    <div className="flex items-center mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="h-6 w-6 text-(--brand-color)"
                      >
                        <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                      </svg>
                      <h3 className="ml-4 text-xl!">{choice.title}</h3>
                    </div>
                    <p className=" text-gray-500">{choice.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-36 md:px-0 px-3">
          <h2 className="text-center md:text-5xl! text-4xl!">
            Specialized Moving Services We Offer in RAK
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
              Serving All Major Communities in RAK
            </h2>
            <p className="  mb-8">
              We provide home movers in ras al khaimah services across every
              major neighborhood:
            </p>

            <div className="space-y-3">
              <ul className="grid grid-cols-1 gap-y-2">
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p className="font-semibold">
                    Al Hamra Village:{" "}
                    <span className="font-normal">
                      Royal Breeze, Marina, and Townhouses
                    </span>
                  </p>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p className="font-semibold">
                    Mina Al Arab:{" "}
                    <span className="font-normal">
                      Granada, Malibu, and Lagoon Views
                    </span>
                  </p>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p className="font-semibold">
                    Al Marjan Island:{" "}
                    <span className="font-normal">Pacific and Bab Al Bahr</span>
                  </p>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p className="font-semibold">
                    Residential Areas:{" "}
                    <span className="font-normal">
                      Al Dhait, Al Khuzam, and Al Nakheel
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Our 5-Step{" "}
                <span className="text-(--brand-color)">Stress-Free</span>{" "}
                Process
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                From the first quote to the final setup, we handle every detail
                of your move across the UAE.
              </p>
            </div>

            {/* Process Steps */}
            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className="group flex flex-col items-center"
                  >
                    {/* Icon Circle */}
                    <div
                      className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      {step.icon}
                    </div>

                    {/* Step Content */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center flex-1 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                      <div className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                        Step 0{step.id}
                      </div>
                      <h3 className="text-xl! font-bold text-slate-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <FAQs faqs={RAKFaqs} />
        <CTA />
      </main>
    </>
  );
};

export default RasAlKhaimahPage;
