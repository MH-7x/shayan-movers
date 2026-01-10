import ContactSection from "@/components/ContactSection";
import CTA from "@/components/CTA";
import { FAQs } from "@/components/FAQs";
import Process from "@/components/Process";
import { ReviewSection } from "@/components/Services";
import { Button } from "@/components/ui/button";
import { AlAinFaqs } from "@/lib/lists";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import {
  Check,
  CheckCircle,
  CheckCircle2,
  Landmark,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers in Al Ain – Shayan Movers & Packers in Al Ain",
      desc: "Looking for reliable movers in Al Ain? Shayan Movers offers professional moving & packing, 24/7 service, and free quotes. Call +971 54 732 6816 now!",
    },
    image: {
      path: "/movers-in-al-ain.jpg",
      alt: "Movers and Packers in al ain",
    },
    path: "/movers-in-al-ain",
  },
});

const choiceList = [
  {
    title: "Licensed & Insured",
    desc: "A legal, registered company with AED 1,000 damage protection.",
  },
  {
    title: "24/7 Support",
    desc: "You can reach us any time via phone or online chat.",
  },
  {
    title: "Transparent Pricing",
    desc: "We give you a clear rate with no hidden fees or 'surprise' costs.",
  },
  {
    title: "Experienced Team",
    desc: "Our crew includes in-house carpenters who handle heavy lifting and furniture fixing.",
  },
  {
    title: "Local Knowledge",
    desc: "We know Al Ain’s neighborhoods, from Al Yahar to Al Maqam, including the best routes to avoid traffic.",
  },
];

const AlAinPage = () => {
  return (
    <main className="md:mt-30.25 mt-17.5 ">
      <section className=" bg-(--neutral-color)/75 md:pl-56 pl-3 md:pr-72 pr-3 py-14 flex items-center justify-start relative overflow-hidden">
        <div className="md:border-l-4 py-8 md:pl-5 border-(--heading-color) z-1">
          <h1 className="text-(--brand-color)! md:text-4xl! text-3xl!">
            Movers in Al Ain – Shayan Movers and Packers
          </h1>
          <p className="mt-5">
            Moving your home or office is a big task, and finding the right help
            makes all the difference. Shayan Movers has been a trusted name in
            the UAE for over 20 years.
          </p>
          <p className="mt-2">
            We are a fully licensed team of professional movers in Al Ain
            dedicated to making your relocation simple and stress-free.
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
          src={"/movers-in-al-ain.jpg"}
          alt="Movers and Packers in Al Ain"
          fill
          loading="eager"
          className="object-cover -z-1"
        />
      </section>
      <ContactSection
        title="Get A Quote From Best Movers in Al Ain"
        desc={
          <>
            <p>
              Whether you need the best movers and packers in Al Ain for a small
              apartment or house movers in Al Ain for a large villa, we provide
              quick quotes and door-to-step service.
            </p>
            <p className="mt-1">
              So Contact Us Now, Share your detail about moving and we will give
              you quote within 10 mins.
            </p>
          </>
        }
      />
      <ReviewSection />
      <section className="overflow-hidden md:px-0 px-3 mt-36 py-5">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl! font-semibold ">
                  Professional House & Villa Moving in Al Ain
                </h2>

                <p className="mt-6  text-gray-600">
                  Moving a family is different from moving a business. We offer
                  custom solutions for house movers and packers in Al Ain,
                  focusing on the safety of your personal items.
                </p>
                <p className="mt-2  text-gray-600">
                  From packing your kitchenware to transporting heavy furniture,
                  we handle every step.
                </p>
                <dl className="mt-5 max-w-xl space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pr-5">
                    <h3 className=" text-base! block">
                      {" "}
                      <CheckCircle
                        size={18}
                        className="inline text-(--brand-color)"
                      />{" "}
                      Quality packing:
                    </h3>
                    <p className="inline">
                      We use thick blankets and sturdy boxes for all items.
                    </p>
                  </div>
                  <div className="relative pr-5">
                    <h3 className=" text-base! block">
                      {" "}
                      <CheckCircle
                        size={18}
                        className="inline text-(--brand-color)"
                      />{" "}
                      Disassembly & Assembly:
                    </h3>
                    <p className="inline">
                      We take apart your furniture and put them back together.
                    </p>
                  </div>
                  <div className="relative pr-5">
                    <h3 className=" text-base! block">
                      {" "}
                      <CheckCircle
                        size={18}
                        className="inline text-(--brand-color)"
                      />{" "}
                      Door-to-door service:
                    </h3>
                    <p className="inline">You don’t have to lift a finger.</p>
                  </div>
                </dl>
              </div>
              <Button wtsBtn className="mt-5">
                Contact Us For House & Villa Moving
              </Button>
            </div>
            <div className="rounded-xl shadow-lg ring-1 ring-gray-400/10 w-full md:-ml-4 lg:ml-0 bg-gray-100 lg:h-auto md:h-96 relative h-80 overflow-hidden">
              <Image
                src={"/Professional-House-Villa-Moving-Al-Ain.jpg"}
                alt="Professional House & Villa Moving — Al Ain"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden md:px-0 px-3 mt-36 py-5">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="rounded-xl shadow-lg ring-1 ring-gray-400/10 w-full md:-ml-4 lg:ml-0 bg-gray-100 lg:h-auto md:h-96 relative h-80 overflow-hidden">
              <Image
                src={"/Expert-Furniture-Movers-Al-Ain.jpg"}
                alt="Expert Furniture Movers — Al Ain"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl! font-semibold ">
                  Expert Furniture Movers in Al Ain
                </h2>

                <p className="mt-6  text-gray-600">
                  Heavy or delicate furniture requires more than just strength;
                  it requires the right tools. As experienced furniture movers
                  in Al Ain, we use piano trolleys, lifters, and specialized
                  padding to protect your investment.
                </p>
                <p className="mt-2  text-gray-600">
                  We don&apos;t just move boxes; we ensure your sofas,
                  mattresses, and antiques arrive without a scratch.
                </p>
                <dl className="mt-5 max-w-xl space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pr-5">
                    <h3 className=" text-base! block">
                      {" "}
                      <CheckCircle
                        size={18}
                        className="inline text-(--brand-color)"
                      />{" "}
                      Sofa & Cabinet Moving:
                    </h3>
                    <p className="inline">
                      Wrapped and secured to prevent tears or dents.
                    </p>
                  </div>
                  <div className="relative pr-5">
                    <h3 className=" text-base! block">
                      {" "}
                      <CheckCircle
                        size={18}
                        className="inline text-(--brand-color)"
                      />{" "}
                      Mattress Protection:{" "}
                    </h3>
                    <p className="inline">
                      We use clean covers to keep your bedding hygienic.
                    </p>
                  </div>
                  <div className="relative pr-5">
                    <h3 className=" text-base! block">
                      <CheckCircle
                        size={18}
                        className="inline text-(--brand-color)"
                      />{" "}
                      Antique & Artwork Handling:{" "}
                    </h3>
                    <p className="inline">
                      Special care for high-value or fragile items.
                    </p>
                  </div>
                </dl>
              </div>
              <Button wtsBtn className="mt-5">
                Contact Us For Furniture Moving
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden md:px-0 px-3 mt-36 py-5">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl! font-semibold ">
                  Trusted Office & Commercial Moves in Al Ain
                </h2>

                <p className="mt-6  text-gray-600">
                  We understand that for businesses, time is money. Our
                  commercial movers in Al Ain work around your
                  schedule—including evenings and weekends—to minimize your
                  downtime.
                </p>
                <p className="mt-2  text-gray-600">
                  We’ve helped clinics in Al Shola and offices in Al Ain City
                  move their IT equipment and sensitive documents safely.
                </p>
                <dl className="mt-5 max-w-xl space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative">
                    <h3 className=" text-base! block">
                      <CheckCircle
                        size={18}
                        className="inline text-(--brand-color)"
                      />{" "}
                      Move Coordination:{" "}
                    </h3>
                    <p className="inline">
                      A dedicated person to manage the logistics.
                    </p>
                  </div>
                  <div className="relative">
                    <h3 className=" text-base! block">
                      <CheckCircle
                        size={18}
                        className="inline text-(--brand-color)"
                      />{" "}
                      IT Equipment:{" "}
                    </h3>
                    <p className="inline">
                      Careful packing and transport of computers and servers.
                    </p>
                  </div>
                  <div className="relative">
                    <h3 className=" text-base! block">
                      <CheckCircle
                        size={18}
                        className="inline text-(--brand-color)"
                      />{" "}
                      Office Furniture:{" "}
                    </h3>
                    <p className="inline">
                      Quick assembly so your team can get back to work.
                    </p>
                  </div>
                </dl>
              </div>
              <Button wtsBtn className="mt-5">
                Contact Us For Office Relocation
              </Button>
            </div>
            <div className="rounded-xl shadow-lg ring-1 ring-gray-400/10 w-full md:-ml-4 lg:ml-0 bg-gray-100 lg:h-auto md:h-96 relative h-80 overflow-hidden">
              <Image
                src={"/Trusted-Office-Commercial-Moves-Al-Ain.jpg"}
                alt="Trusted Office & Commercial Moves — Al Ain"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" pb-6 mt-36">
        <div className="max-w-7xl mx-auto px-3  sm:p-6 lg:p-8">
          <div className="container mx-auto ">
            <div className="mb-16 text-center">
              <h2 className="max-w-3xl mx-auto md:text-5xl! text-3xl!">
                Why Choose Us – Best Movers and Packers in Al Ain
              </h2>
            </div>

            <div className="flex flex-wrap my-12">
              {choiceList.map((choice, index) => (
                <div
                  key={index}
                  className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 md:p-8 p-5"
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

          <h2 className="text-3xl! font-bold! mb-2">Areas Covered in Al Ain</h2>
          <p className="  mb-8">
            We serve every corner of the city. Whether you are in a quiet suburb
            or the city center, we can reach you.
          </p>

          <div className="space-y-3">
            <ul className="grid grid-cols-1 gap-y-2">
              <li className="flex items-start  text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                <p className="font-semibold">
                  Al Jimi:{" "}
                  <span className="font-normal">
                    Residential communities and villas
                  </span>
                </p>
              </li>
              <li className="flex items-start  text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                <p className="font-semibold">
                  Al Hili:{" "}
                  <span className="font-normal">
                    Downtown apartments and family houses.
                  </span>
                </p>
              </li>
              <li className="flex items-start  text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                <p className="font-semibold">
                  Zakher & Al Salamat:{" "}
                  <span className="font-normal">Suburban moving services.</span>
                </p>
              </li>
              <li className="flex items-start  text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
                <p className="font-semibold">
                  Al Yahar, Al Ameriya, and Al Maqam
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <FAQs faqs={AlAinFaqs} />
      <CTA />
    </main>
  );
};

export default AlAinPage;
