import ContactSection from "@/components/ContactSection";
import CTA from "@/components/CTA";
import { FAQs } from "@/components/FAQs";
import { ReviewSection } from "@/components/Services";
import { Button } from "@/components/ui/button";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { OfficeMoversDubai } from "@/lib/lists";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import heroImage from "@/public/office-movers-in-dubai.jpg";
import {
  Boxes,
  Building2Icon,
  CalendarClock,
  ChevronsDownIcon,
  ClipboardCheck,
  Headset,
  Home,
  Landmark,
  MessageCircle,
  NotebookPenIcon,
  NotepadTextIcon,
  PackageCheck,
  PhoneCall,
  School,
  ShieldCheck,
  Store,
  Truck,
  UserStarIcon,
  WalletIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Office Movers in Dubai – Office Relocation Services Dubai",
      desc: "Looking for reliable office movers in Dubai? We offer professional office relocation, packing, and storage services in Dubai. Get a free quote or Call +971 54 732 6816 now!",
    },
    image: {
      path: "/office-movers-in-dubai.jpg",
      alt: "Office Movers in Dubai",
    },
    path: "/office-movers-in-dubai",
  },
});

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WhyChooseUs = () => {
  const features: Feature[] = [
    {
      title: "Licensed & Insured",
      description:
        "We are fully licensed by Dubai authorities. Our services are insured, so you can rest easy knowing your assets are protected during the move.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "24/7 Flexible Scheduling",
      description:
        "Business doesn't always stop. We offer moves during nights and weekends so you don't lose precious working hours.",
      icon: <CalendarClock className="w-8 h-8" />,
    },
    {
      title: "Minimize Downtime:",
      description:
        "We work efficiently to get your office set up in the new spot as fast as possible. Our goal is a simple, quick transition.",
      icon: <ChevronsDownIcon className="w-8 h-8" />,
    },
    {
      title: "Experienced Team",
      description:
        "Our movers and packers are trained specifically for office environments. We know how to handle electronics, sensitive files, and heavy furniture.",
      icon: <UserStarIcon className="w-8 h-8" />,
    },
    {
      title: "Tailored Moving Plans",
      description:
        "Every office is different. We create a customized strategy based on your specific layout and requirements.",
      icon: <NotebookPenIcon className="w-8 h-8" />,
    },
    {
      title: "One-Stop Service",
      description:
        "From the first box packed to the last desk assembled, we handle every step. We also offer storage if your new space isn't quite ready.",
      icon: <Boxes className="w-8 h-8" />,
    },
    {
      title: "Transparent Pricing",
      description:
        "We don't like hidden fees. After an on-site visit, we give you a detailed, no-obligation quote so you know exactly what to expect.",
      icon: <WalletIcon className="w-8 h-8" />,
    },
  ];

  return (
    <section className="mt-36 px-3 ">
      <div className="md:w-11/12 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl! md:text-4xl! font-bold text-[#263238] mb-4">
            Why Choose Shayan Movers for Your Office Relocation in Dubai?
          </h2>
          <div className="w-20 h-1 bg-[#d84315] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choosing the right partner makes a difference. Here is why
            businesses trust our office moving service in Dubai
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
          <div className="bg-[#263238] md:col-span-2 p-8 rounded-xl flex flex-col justify-center items-center text-center text-white!">
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

export const servicesList = [
  {
    title: "Office Packing and Unpacking Services",
    desc: (
      <>
        Our team uses high-quality materials to pack your furniture and files
        securely. We don&apos;t just throw things in boxes; we organize them so
        unpacking is easy. <br />
      </>
    ),
    img: {
      src: "/Office-Packing-Unpacking-Services.jpg",
      alt: "Office Packing and Unpacking Services",
    },
    href: "/",
  },
  {
    title: "Furniture & Equipment Transportation",
    desc: (
      <>
        We have a fleet of GPS-tracked trucks designed to move office assets
        safely. Whether it’s ergonomic chairs or heavy conference tables, we
        transport them across Dubai with care.
      </>
    ),
    img: {
      src: "/Furniture-Equipment-Transportation.jpg",
      alt: "Furniture & Equipment Transportation",
    },
    href: "/",
  },
  {
    title: "IT Equipment Relocation",
    desc: (
      <>
        Servers, computers, and printers are expensive and sensitive. As an
        experienced office relocation company, we use specialized handling
        techniques to prevent damage or data loss during the move.
      </>
    ),
    img: {
      src: "/IT-Equipment-Relocation.jpg",
      alt: "IT Equipment Relocation",
    },
    href: "/",
  },
  {
    title: "Storage Solutions",
    desc: (
      <>
        If you are downsizing or waiting for renovations, we offer secure
        short-term and long-term storage for your office furniture and
        documents.
      </>
    ),
    img: {
      src: "/Storage-Solutions-Office.jpg",
      alt: "Storage Solutions for Office Furniture",
    },
    href: "/",
  },
  {
    title: "Furniture Reassembly & Setup",
    desc: (
      <>
        Our crew includes handymen who can take apart cubicles and desks and put
        them back together at your new location. We make sure the layout matches
        your new floor plan perfectly.
      </>
    ),
    img: {
      src: "/Furniture-Reassembly-Setup.jpg",
      alt: "Office Furniture Reassembly and Setup",
    },
    href: "/",
  },
  {
    title: "Specialized Junk Removal",
    desc: (
      <>
        Moving is a great time to clear out old clutter. We can help dispose of
        old office furniture or items you no longer need, leaving your old space
        clean.
      </>
    ),
    img: {
      src: "/Specialized-Junk-Removal-Office.jpg",
      alt: "Specialized Junk Removal",
    },
    href: "/",
  },
];

const steps = [
  {
    id: 1,
    title: "Free Consultation & Quote",
    description:
      "We visit your office to see what needs to be moved and give you a clear price.",
    icon: <ClipboardCheck className="w-8 h-8" />,
    color: "bg-(--brand-color)",
  },
  {
    id: 2,
    title: "Detailed Move Planning",
    description: "We create a timeline that works for your business schedule.",
    icon: <NotepadTextIcon className="w-8 h-8" />,
    color: "bg-(--brand-color)",
  },
  {
    id: 3,
    title: "Packing & Labeling",
    description:
      "Our team packs and labels every box by department, making the setup much faster.",
    icon: <PackageCheck className="w-8 h-8" />,
    color: "bg-(--brand-color)",
  },
  {
    id: 4,
    title: "Transportation",
    description:
      "We use our GPS-tracked trucks to move your items safely to the new address.",
    icon: <Truck className="w-8 h-8" />,
    color: "bg-(--brand-color)",
  },

  {
    id: 5,
    title: "Unloading & Setup",
    description:
      "We unpack, assemble furniture, and clear away all the packing debris.",
    icon: <Home className="w-8 h-8" />,
    color: "bg-(--brand-color)",
  },
  {
    id: 6,
    title: "Post-Move Support",
    description:
      "We do a final walkthrough to make sure you are happy with where everything is placed.",
    icon: <Headset className="w-8 h-8" />,
    color: "bg-(--brand-color)",
  },
];

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(OfficeMoversDubai));
const OfficeMoversPage = () => {
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
                Office Movers in Dubai - Commercial Moving Services
              </h1>
              <p className="mx-auto mb-3 max-w-4xl text-lg text-[#636262]">
                Moving an office is a big task that needs careful planning. At
                Shayan Movers, we specialize as professional office movers in
                Dubai, helping businesses move to new locations without the
                usual stress.
              </p>
              <p className="mx-auto mb-5 max-w-4xl text-lg text-[#636262] lg:mb-8">
                We understand that your equipment, documents, and furniture are
                vital to your work, so we handle everything with care.
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
                alt="Office Movers in Dubai"
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
          title="Get A Quote From Office Movers in Dubai"
          desc={
            <>
              <p>
                Our team focuses on office relocation exclusively within Dubai.
                We know the local building regulations, the best routes to avoid
                traffic, and how to get the necessary permits.
              </p>
              <p>
                Whether you are a small startup or a large corporation, we
                provide the support you need to get back to work quickly.
              </p>
            </>
          }
        />
        <ReviewSection />
        <WhyChooseUs />

        <section className="mt-36 md:px-0 px-3">
          <h2 className="text-center md:text-5xl! text-4xl!">
            Comprehensive <br /> Office Relocation Services
          </h2>
          <p className="mt-3 text-center">
            We offer a full range of services to cover every part of your move.
          </p>
          <div className="w-full md:max-w-11/12 mx-auto my-20 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-10">
            {servicesList.map((service, i) => (
              <div key={i}>
                <div className="w-full  h-80 relative z-0 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.img.src}
                    alt={service.img.alt}
                    fill
                    className="absolute object-cover object-center"
                  />
                </div>
                <div className="w-11/12 mx-auto rounded-2xl shadow-lg shadow-neutral-100 bg-white/90 min-h-32 z-10 transform -translate-y-10 py-5 px-3 ">
                  <Link href={service.href}>
                    <h3 className=" text-xl! font-bold! b1 text-center">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="b-text mt-3 md:text-base text-sm! text-center">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="new-features" className="py-8  sm:py-10 lg:py-16">
          <div className="px-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="leading-tight md:text-5xl! text-4xl!">
                Tailored Solutions for <br className="hidden md:block" /> Every
                Business
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
                We adapt our approach based on who you are:
              </p>
            </div>
            <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:gap-0 xl:mt-24">
              <div className="md:p-8 lg:p-14 flex flex-col md:border-r md:border-gray-200 justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                  <Store className="text-3xl" />
                </div>
                <h3 className="mt-12 text-xl! font-bold">
                  Small & Medium Businesses:
                </h3>
                <p className="mt-5 text-base text-gray-600">
                  We focus on cost-effective moves that get you into your new
                  space without breaking the budget.
                </p>
              </div>

              <div className="md:p-8 lg:p-14 md:border-b md:border-gray-200 flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                  <Building2Icon className="text-3xl" />
                </div>
                <h3 className="mt-12 text-xl! ">Tech & IT Companies</h3>
                <p className="mt-5 text-base text-gray-600">
                  We prioritize the safe handling of high-end tech and minimize
                  the time your servers are offline.
                </p>
              </div>

              <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                  <School className="text-3xl" />
                </div>
                <h3 className="mt-12 text-xl! font-bold">
                  Schools & Educational Institutions
                </h3>
                <p className="mt-5 text-base text-gray-600">
                  We have experience moving libraries, labs, and classrooms,
                  ensuring everything stays in the right order.
                </p>
              </div>

              <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                  <Landmark className="text-3xl" />
                </div>
                <h3 className="mt-12 text-xl! font-bold">
                  Government & Corporate Offices
                </h3>
                <p className="mt-5 text-base text-gray-600">
                  We have the manpower and logistics to handle large-scale moves
                  while following all official regulations
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Our Office Moving Process
              </h2>
              <p className="text-lg text-slate-600 ">
                From the first quote to the final setup, we handle every detail
                of your move across the UAE.
              </p>
            </div>

            {/* Process Steps */}
            <div className="relative">
              {/* Connecting Line (Desktop) */}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
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
        <section className="mt-36 max-w-5xl mx-auto md:p-10 px-3">
          <h2 className="md:text-4xl! text-3xl!">
            Office Relocation Checklist
          </h2>
          <div className="mt-3 w-7/12 h-1 bg-(--brand-color) rounded-3xl" />
          <div className="mt-5">
            <p className="mb-5">Use this list to help stay organized:</p>
            <ol className="list-item list-inside space-y-2">
              <li>1. Start your planning at least 3 months before the move.</li>
              <li>2. Create a full inventory of everything you own.</li>
              <li>
                3. Pick a &quot;move coordinator&quot; in your office to be the
                main point of contact.
              </li>
              <li>4. Label all boxes clearly on at least two sides.</li>
              <li>
                5. Back up all digital data before the IT equipment is moved.
              </li>
              <li>
                6. Get all building permissions and NOCs ready for the move
                date.
              </li>
              <li>
                7. Update your address on your website, Google profile, and with
                your bank.
              </li>
            </ol>
          </div>
        </section>
        <FAQs faqs={OfficeMoversDubai} />
        <CTA />
      </main>
    </>
  );
};

export default OfficeMoversPage;
