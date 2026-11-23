import JsonLd from "@/components/JsonLd";
import ContactSection from "@/components/ContactSection";
import CTA from "@/components/CTA";
import { FAQs } from "@/components/FAQs";
import Process from "@/components/Process";
import { ReviewSection } from "@/components/Services";
import { Button } from "@/components/ui/button";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { AbuDhabiFaqs } from "@/lib/lists";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { CheckCircle2, Landmark, MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const choiceList = [
  {
    title: "We respond fast",
    desc: "When you message us, you won't wait for hours. We usually reply within 5 to 10 minutes to give you a quote or answer your questions.",
  },
  {
    title: "Furniture expertise",
    desc: "Because we have deep roots in the furniture industry, we don't just 'carry' items. This means we disassemble and reassemble your beds, cabinets, and tables correctly.",
  },
  {
    title: "No hidden fees",
    desc: "The price we give you is the price you pay. We believe in being honest about costs from the start.",
  },
  {
    title: "Safety first",
    desc: " We use high-quality bubble wrap and thick blankets. And if something does go wrong, we offer a warranty on our services to give you peace of mind.",
  },
];

const servicesList = [
  {
    title: "House Movers Abu Dhabi",
    desc: (
      <>
        Moving your family is personal. Our house moving companies in Abu Dhabi
        team treats your items like their own. <br /> We pack your kitchenware,
        clothes, and electronics with care so nothing breaks during the drive.
      </>
    ),
    img: {
      src: "/home-movers-in-abu-dhabi.jpg",
      alt: "House Movers Abu Dhabi",
    },
    href: "/house-furniture-movers-abu-dhabi",
  },
  {
    title: "Villa Movers in Abu Dhabi",
    desc: (
      <>
        Shifting a large villa requires a big team and a clear plan. We provide
        enough staff and trucks to get your villa moved in a single day whenever
        possible. <br /> This includes specialized handling for outdoor
        furniture and garden items.
      </>
    ),
    img: {
      src: "/villa-movers-in-abu-dhabi.jpg",
      alt: "Villa Movers in Abu Dhabi",
    },
    href: "/house-furniture-movers-abu-dhabi",
  },
  {
    title: "Professional Office Relocation",
    desc: (
      <>
        Business doesn&apos;t stop just because you&apos;re moving. We work
        quickly to move your desks, chairs, and IT equipment so your team can
        get back to work. <br /> We are one of the most efficient furniture
        moving companies in Abu Dhabi for commercial clients.
      </>
    ),
    img: {
      src: "/office-relocation-in-abu-dhabi.jpg",
      alt: "Professional Office Relocation",
    },
    href: "#contact-section",
  },
  {
    title: "Cheap Movers and Packers in Abu Dhabi",
    desc: (
      <>
        You don&apos;t have to spend a fortune to get a professional service. We
        offer affordable shifting services that fit your budget. <br /> We keep
        our prices low by staying efficient and local.
      </>
    ),
    img: {
      src: "/cheap-movers-in-abu-dhabi.jpg",
      alt: "Cheap Movers and Packers in Abu Dhabi",
    },
    href: "#contact-section",
  },
];

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers and Packers Abu Dhabi | Shayan Movers",
      desc: "Looking for reliable movers and packers in Abu Dhabi? Shayan Movers offers stress-free shifting services for homes and offices. Get a free quote today!",
    },
    image: {
      path: "/movers-and-packers-abu-dhabi.jpg",
      alt: "Movers and Packers Abu Dhabi",
    },
    path: "/movers-and-packers-abu-dhabi",
  },
});

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(AbuDhabiFaqs));

const AbuDhabiPage = () => {
  return (
    <>
      <JsonLd json={FaqsSchema} />
      <main className="md:mt-30.25 mt-24 ">
        <section className=" bg-(--neutral-color)/75 md:pl-56 pl-3 md:pr-72 pr-3 py-14 flex items-center justify-start relative overflow-hidden">
          <div className="md:border-l-4 py-8 md:pl-5 border-(--heading-color) z-1">
            <h1 className="text-(--brand-color)! md:text-4xl! text-3xl!">
              Reliable Movers and Packers Abu Dhabi: Stress-Free Shifting
            </h1>
            <p className="mt-5">
              Moving to a new home or office is a big task. It’s often stressful
              and takes up a lot of time. If you are looking for movers and
              packers Abu Dhabi, Shayan Movers is here to help.
            </p>
            <p className="mt-2">
              We have been moving families and businesses across the UAE for
              years. Our goal is simple: to get your belongings from point A to
              point B safely and without any hidden costs.
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
            src={"/movers-and-packers-abu-dhabi.jpg"}
            alt="Movers and Packers Abu Dhabi"
            fill
            sizes="100vw"
            preload
            className="object-cover -z-1"
          />
        </section>
        <ContactSection
          title="Get A Quote From Best Movers in Abu Dhabi"
          desc={
            <>
              <p>
                We know that Abu Dhabi has unique building rules and busy
                streets. Whether you are moving into a high-rise on Reem Island
                or a villa in Khalifa City, our team knows exactly how to handle
                the logistics.
              </p>
              <p className="mt-1">
                So Contact Us Now, Share your detail about moving and we will
                give you quote within 10 mins
              </p>
            </>
          }
        />
        <ReviewSection />
        <section className="max-w-7xl mx-auto mt-36 px-3 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="max-w-2xl mx-auto md:text-5xl text-4xl!">
              Why People Choose Us as Their Mover in Abu Dhabi
            </h2>
            <p className="mt-3">
              There are many moving companies out there, but we do things a bit
              differently.
            </p>
          </div>

          <div className="flex flex-col md:flex-row pt-10">
            <div className="mr-0 md:mr-8 mb-6 md:mb-0 md:w-1/3  relative rounded-2xl overflow-hidden h-96">
              <Image
                src="/house-movers-in-abu-dhabi.jpg"
                fill
                alt="movers and packers in dubai"
                className="object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
              {choiceList.map((choice, idx) => (
                <div key={idx} className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-(--brand-color) border-t-0 border-l-0 rounded-br-xl">
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
        <section className="mt-36 md:px-0 px-3">
          <h2 className="text-center md:text-5xl! text-4xl!">
            Our Moving <br /> Services in Abu Dhabi
          </h2>
          <p className="mt-3 text-center">
            We handle all types of relocations. No job is too small or too large
            for our team.
          </p>
          <div className="w-full max-w-6xl mx-auto my-20 grid md:grid-cols-2 grid-cols-1 gap-x-10">
            {servicesList.map((service, i) => (
              <div key={i}>
                <div className="w-full md:h-92 h-80 relative z-0 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.img.src}
                    alt={service.img.alt}
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
                    <Button size={"sm"}>Get A Quote</Button>
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
              Serving All Areas of Abu Dhabi
            </h2>
            <p className="  mb-8">
              We have teams stationed across the city to ensure we get to you on
              time. We regularly work in:
            </p>

            <div className="space-y-3">
              <ul className="grid grid-cols-1 gap-y-2">
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p>
                    <b>Mussafah:</b> Reliable movers in Mussafah for residential
                    and industrial needs.
                  </p>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p>
                    <b>Khalifa City & MBZ City:</b> Expert villa shifting for
                    families.
                  </p>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p>
                    <b>Reem Island & Al Raha:</b> Specialized high-rise moving
                    services.
                  </p>
                </li>
                <li className="flex items-start  text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                  <p>
                    <b>Yas Island & Saadiyat:</b> Premium moving for luxury
                    homes.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Process />
        <FAQs faqs={AbuDhabiFaqs} />
        <CTA />
      </main>
    </>
  );
};

export default AbuDhabiPage;
