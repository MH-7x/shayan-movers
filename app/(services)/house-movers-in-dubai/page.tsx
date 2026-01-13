import { Button } from "@/components/ui/button";
import {
  Building2,
  CheckCircle,
  CircleDollarSign,
  Clock,
  Landmark,
  MessageCircle,
  PhoneCall,
  UserStar,
  Verified,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import heroImage from "@/public/best-house-mover-in-dubai.jpg";
import ContactSection from "@/components/ContactSection";
import { ReviewSection } from "@/components/Services";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "House Movers in Dubai | Trusted Movers & Packers UAE ",
      desc: "Looking for reliable house movers in Dubai? Shayan Movers offers affordable house shifting services across UAE. 24/7 support. Call +971 54 732 6816 now!",
    },
    image: {
      path: "/best-house-mover-in-dubai.jpg",
      alt: "House Movers in Dubai",
    },
    path: "/house-movers-in-dubai",
  },
});

export const choiceList = [
  {
    title: "Professional Packing",
    desc: "We use quality materials to keep your items safe.",
  },
  {
    title: "Secure Transport",
    desc: "Our trucks are clean and well-maintained.",
  },
  {
    title: "Furniture Assembly",
    desc: "We take it apart and put it back together correctly.",
  },
  {
    title: "Post-Move Cleanup",
    desc: "We don't leave a mess behind. ",
  },
];

import {
  ClipboardCheck,
  Package,
  Wrench,
  Truck,
  Home,
  Info,
  CheckCircle2,
  ThermometerSun,
  MapPin,
} from "lucide-react";
import Process from "@/components/Process";
import { FAQs } from "@/components/FAQs";
import { HouseMoversDubaiFaqs } from "@/lib/lists";
import CTA from "@/components/CTA";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import Script from "next/script";

const MovingServices = () => {
  const services = [
    {
      id: 1,
      title: "Pre-Move Survey & Planning",
      description:
        "We start with a free visit to your home. We look at how much stuff you have, any fragile items like antiques or electronics, and the parking situation at your building.",
      icon: <ClipboardCheck className="w-6 h-6 text-white" />,
      src: "/Pre-Move-Survey-Planning.jpg",
      tip: {
        title: "Dubai Tip",
        text: "Many buildings here need 48 to 72 hours' notice for a move. We help you coordinate with building management to get your permits and book the service elevator on time.",
        icon: <MapPin className="w-5 h-5 text-amber-600" />,
        color: "bg-amber-50 border-amber-200 text-amber-900",
      },
    },
    {
      id: 2,
      title: "Professional Packing Services",
      description:
        "Our packers use materials made for the Dubai climate. We use double-walled boxes that don’t collapse in the heat and thick bubble wrap for your glassware.",
      icon: <Package className="w-6 h-6 text-white" />,
      src: "/Professional-Packing-Services.jpg",
      list: ["Kitchenware", "Electronics", "Clothes", "Books", "Artwork"],
      tip: {
        title: "Quick Tip",
        text: "Don't pack during the hottest part of the day (12 PM – 4 PM). Let us handle the packing in the early morning when it's cooler.",
        icon: <ThermometerSun className="w-5 h-5 text-(--brand-color)" />,
        color: "bg-amber-50 border-amber-200 text-amber-900",
      },
    },
    {
      id: 3,
      title: "Furniture Disassembly & Assembly",
      description: (
        <>
          Large wardrobes and beds are hard to move in one piece. <br /> Our
          team safely dismantles your furniture and keeps all the screws and
          hardware in labeled bags. <br /> We handle IKEA sets, wooden bedroom
          furniture, and large dining tables. Once we arrive at the new place,
          we put everything back together and make sure it’s sturdy.
        </>
      ),
      icon: <Wrench className="w-6 h-6 text-white" />,
      src: "/Furniture-Disassembly-Assembly.jpg",
    },
    {
      id: 4,
      title: "Secure Loading & Transportation",
      description:
        "We use modern, GPS-tracked trucks. In Dubai, an air-conditioned truck is a must for long moves to protect leather sofas and electronics from warping.",
      icon: <Truck className="w-6 h-6 text-white" />,
      src: "/Secure-Loading-Transportation.jpg",
      list: [
        "3-ton truck: Best for studios and 1-bedroom flats",
        "7-ton to 10-ton trucks: Used for larger apartments and villas",
      ],
    },
    {
      id: 5,
      title: "Unpacking & Setup",
      description: (
        <>
          We don&apos;t just drop boxes at the door. <br /> We place every item
          in the room where it belongs. If you want us to unpack, we can do that
          too. <br />
          We also help with mounting TVs, hanging curtains, and connecting your
          fridge or washing machine.
        </>
      ),
      icon: <Home className="w-6 h-6 text-white" />,
      src: "/Unpacking-Setup.jpg",
    },
  ];

  return (
    <div className="mt-36 md:px-0 px-3">
      {/* Hero Header */}
      <section className="bg-(--heading-color)  py-24 px-3">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl! md:text-5xl font-bold mb-6 text-white! leading-tight">
            Complete House Moving Services
          </h1>
          <p className="md:text-xl text-lg text-slate-300 max-w-2xl mx-auto">
            Our services are designed to handle the hard parts of relocation.
            Here is exactly what you get when you hire us.
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-16 space-y-24">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col gap-12 md:pb-16 items-center justify-center ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image Placeholder Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                {/* Placeholder Box */}
                <div className="w-full h-80 sm:h-96 bg-gray-200 rounded-2xl shadow-xl overflow-hidden flex items-center justify-center relative">
                  <Image
                    src={service.src}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />

                  {/* Decorative Icon Badge */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-(--brand-color) rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Decorative background blob */}
                <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-(--brand-color)/50 rounded-3xl transform rotate-3 hidden lg:block"></div>
              </div>
            </div>

            {/* Content Side */}
            <div
              className={`w-full lg:w-1/2 space-y-6 ${
                index % 2 === 0 ? "md:pl-10" : ""
              }`}
            >
              <div className="flex md:flex-row flex-col md:items-center md:gap-4 gap-y-2">
                <span className="md:text-5xl text-3xl font-black text-(--brand-color)/70 select-none">
                  0{service.id}
                </span>
                <h2 className="text-3xl!">{service.title}</h2>
              </div>

              <p className="text-gray-600 ">{service.description}</p>

              {/* List Items if they exist */}
              {service.list && (
                <ul
                  className={`${
                    index === 1 ? "grid grid-cols-2 gap-y-3" : "space-y-3 mt-4"
                  }`}
                >
                  {service.list.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-(--brand-color) shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tips Section (Dubai Tip / Quick Tip) */}
              {service.tip && (
                <div
                  className={`mt-6 p-5 rounded-xl border ${service.tip.color} flex gap-4`}
                >
                  <div className="shrink-0 mt-1">{service.tip.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1 uppercase tracking-wide text-sm!">
                      {service.tip.title}
                    </h4>
                    <p className="text-sm! opacity-90 leading-relaxed">
                      {service.tip.text}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
    </div>
  );
};
const pricingData = [
  { type: "Studio Apartment", cost: "AED 800 - 1,200", duration: "3-4 hours" },
  {
    type: "1-Bedroom Apartment",
    cost: "AED 1,200 - 1,600",
    duration: "4-5 hours",
  },
  {
    type: "2-Bedroom Apartment",
    cost: "AED 1,600 - 2,200",
    duration: "5-6 hours",
  },
  {
    type: "3-Bedroom Apartment",
    cost: "AED 2,200 - 3,000",
    duration: "6-8 hours",
  },
  {
    type: "4-Bedroom Villa",
    cost: "AED 3,000 - 4,500",
    duration: "8-10 hours",
  },
  {
    type: "5-Bedroom Villa",
    cost: "AED 4,500 - 6,000+",
    duration: "10-12+ hours",
  },
];

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WhyChooseUs = () => {
  const features: Feature[] = [
    {
      title: "Fixed Pricing:",
      description:
        "The price we agree on after the survey is the price you pay. No 'surprise' fees for stairs or parking",
      icon: <CircleDollarSign className="w-8 h-8" />,
    },
    {
      title: "Verified Team",
      description:
        "Our movers are background-checked and trained. They aren't just casual laborers; they are professionals.",
      icon: <Verified className="w-8 h-8" />,
    },
    {
      title: "Dubai Expertise",
      description:
        "We know the rules for Emaar, Nakheel, and Dubai Properties buildings. We help you with the paperwork.",
      icon: <UserStar className="w-8 h-8" />,
    },
  ];

  return (
    <section className="mt-36 px-3 ">
      <div className="md:w-11/12 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl! md:text-5xl! font-bold text-[#263238] mb-4">
            What Makes Shayan Movers Different?
          </h2>
          <div className="w-20 h-1 bg-[#d84315] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Most people worry about two things: hidden costs and broken items.
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
          <div className="bg-[#263238] md:col-span-3 p-8 rounded-xl flex flex-col justify-center items-center text-center text-white!">
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

const FaqsSchema = generateFAQSchema(
  convertFaqsForSchema(HouseMoversDubaiFaqs)
);

const HouseMoversDubai = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className=" mt-32">
        <section>
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
              <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
                House Movers in Dubai – Your Trusted Moving Partner
              </h1>
              <p className="mx-auto mb-5 max-w-4xl text-lg text-[#636262] lg:mb-8">
                Moving house is a lot of work. Whether you are moving out of a
                studio apartment or relocating a large 5-bedroom villa, the
                logistics can be overwhelming.
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

            <div className="relative max-w-6xl mx-auto md:h-112.5 h-80 rounded-2xl bg-white ">
              <Image
                src={heroImage}
                placeholder="blur"
                loading="eager"
                fill
                alt="House Movers in Dubai"
                className="object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-(--brand-color)"></div>
            </div>
          </div>

          <img
            alt="Line Svg"
            src={"/lines-1.svg"}
            className="absolute hidden  bottom-0 left-0 right-auto top-auto -z-10 sm:inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto"
          />
          <img
            alt="Line Svg"
            src={"/lines-1.svg"}
            className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block "
          />
        </section>
        <ContactSection
          title="Get A Quote From House Movers in Dubai"
          desc={
            <>
              <p>
                Our team handles the heavy lifting so you don’t have to. From
                packing your first box to setting up your furniture in the new
                place, we make sure everything goes smoothly.
              </p>
              <p>
                Shayan Movers has over 20 years of experience serving Dubai,
                Sharjah, Abu Dhabi, and the rest of the UAE.
              </p>
            </>
          }
        />
        <ReviewSection />
        <section className="max-w-7xl mx-auto mt-36 px-3 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="max-w-2xl mx-auto md:text-5xl text-4xl!">
              Why Choose Our House Moving Services in Dubai?
            </h2>
            <p className="mt-3 max-w-4xl mx-auto">
              Moving your home in Dubai requires more than just a truck. You
              need a team that understands how to navigate high-rise buildings,
              deal with building security, and protect your furniture from the
              intense UAE heat.
            </p>
            <p className="mt-1 max-w-4xl mx-auto">
              We are one of the leading house movers and packers in Dubai
              because we keep things simple and honest.
            </p>
          </div>

          <div className="flex flex-col md:flex-row pt-10">
            <div className="mr-0 md:mr-8 mb-6 md:mb-0 md:w-1/3  relative rounded-2xl overflow-hidden h-96">
              <Image
                src="/house-movers-in-dubai.jpg"
                fill
                alt="movers and packers in dubai"
                className="object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
              {choiceList.map((choice, idx) => (
                <div key={idx} className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-(--brand-color) border-t-0 border-l-0 rounded-br-xl">
                    <CheckCircle className="text-(--brand-color) mb-3" />
                    <h3 className="text-2xl! font-bold text-md mb-3">
                      {choice.title}
                    </h3>
                    <p className="">{choice.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <MovingServices />
        <section className="mt-32 px-3 ">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Transparent House Moving Costs in Dubai
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We don&apos;t like hidden fees, and we know you don&apos;t
                either. The cost of your move depends on the size of your home
                and how much packing you need.
              </p>
            </div>

            <div className="overflow-hidden bg-white shadow-xl rounded-2xl border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-(--heading-color) text-white">
                      <th className="p-5 font-semibold text-sm! uppercase tracking-wider rounded-tl-lg">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-blue-400" />
                          Property Type
                        </div>
                      </th>
                      <th className="p-5 font-semibold text-sm! uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          <Wallet className="w-4 h-4 text-green-400" />
                          Estimated Cost Range
                        </div>
                      </th>
                      <th className="p-5 font-semibold text-sm! uppercase tracking-wider rounded-tr-lg">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-orange-400" />
                          Typical Duration
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pricingData.map((item, index) => (
                      <tr
                        key={index}
                        className={`hover:bg-blue-50/50 transition-colors ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                        }`}
                      >
                        <td className="p-5 font-medium text-slate-900">
                          {item.type}
                        </td>
                        <td className="p-5 text-slate-700 font-semibold">
                          {item.cost}
                        </td>
                        <td className="p-5 text-gray-600">{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 text-amber-900 rounded-lg border border-amber-100 max-w-3xl mx-auto">
              <Info className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
              <p className="text-sm">
                <span className="font-bold">Note:</span> These are estimates.
                For an exact price, call us for a free home survey.
              </p>
            </div>
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
              <Building2 className="w-6 h-6 " />
            </div>

            <h2 className="text-3xl! font-bold! mb-2">Areas We Serve</h2>
            <p className="  mb-8">
              We are based in Sharjah but we move families across all of Dubai
              and the UAE.
              <br />
              <b>Popular Dubai Neighborhoods:</b>
            </p>

            <div className="space-y-3">
              <ul className="grid grid-cols-1 gap-y-2">
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />

                  <b>Dubai Marina & JBR </b>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />

                  <b>Downtown Dubai & Business Bay </b>
                </li>
                <li className="flex items-start  text-gray-700">
                  <b>Downtown Dubai & Business Bay </b>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <b>Arabian Ranches & Dubai Hills</b>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <b>Palm Jumeirah & Al Barsha</b>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <b>Mirdif, Silicon Oasis, and International City</b>
                </li>
              </ul>
              <p className="text-sm text-gray-600 pt-3">
                We also handle Inter-Emirate moves, such as moving from Dubai to
                Abu Dhabi or Sharjah to Dubai.
              </p>
            </div>
          </div>
        </section>
        <Process />
        <WhyChooseUs />
        <FAQs faqs={HouseMoversDubaiFaqs} />
        <CTA />
      </main>
    </>
  );
};

export default HouseMoversDubai;
