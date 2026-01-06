import { Button } from "@/components/ui/button";
import {
  Gift,
  LucideListChecks,
  MessageCircle,
  PhoneCall,
  Play,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import ImageSrc from "@/public/shayan-movers-packers.jpg";
import Image from "next/image";

import ContactSection from "@/components/ContactSection";
import { HomeFaqs } from "@/lib/lists";
import { ReviewSection, Services } from "@/components/Services";
import { WhereWeWork } from "@/components/WhereWeWork";
import MovingCostsComponent from "@/components/MovingCost";
import { FAQs } from "@/components/FAQs";
import CTA from "@/components/CTA";

const HomePage = () => {
  return (
    <main className="mt-32">
      <section
        id="hero-section"
        className="py-20 bg-(--neutral-color) flex items-center justify-center flex-col text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d84315]/10 text-[#d84315] text-sm font-semibold">
          <Star className="size-3.5 fill-current" />
          Trusted Movers in Dubai & Sharjah
        </div>
        <h1 className=" mt-5">
          Moving Made <span className="text-[#d84315]">Simple.</span> <br />
          Safe, Fast, and Affordable.
        </h1>
        <p className="text-lg md:text-xl mt-5 max-w-4xl mx-auto lg:mx-0 leading-relaxed font-medium">
          We handle the packing, moving, and fixing so you can settle into your
          new home without the stress. Serving Dubai, Abu Dhabi, Sharjah, and
          all of the UAE.
        </p>

        <div className="flex gap-x-3 mt-8">
          <Button size={"lg"} callBtn>
            <PhoneCall /> Call Now
          </Button>
          <Button size={"lg"} wtsBtn variant={"outline"}>
            <MessageCircle /> Get A Quote On WhatsApp
          </Button>
        </div>
      </section>
      <div
        id="image"
        className="max-w-250 h-135.5 bg-red-300 mx-auto relative rounded-2xl overflow-hidden"
      >
        <Image
          src={ImageSrc}
          alt="Shayan Movers and Packers in Dubai"
          fill
          placeholder="blur"
          loading="eager"
        />
        <div className="absolute bottom-6 left-6 right-6  md:w-96 w-full bg-white/60 backdrop-blur-lg p-4 rounded-[0.625rem] shadow-lg z-20 flex items-center gap-4 border border-(--neutral-color)">
          <div className="bg-[#fdf4f1] p-3 rounded-full text-(--brand-color)">
            <Zap className="size-6" />
          </div>
          <div>
            <p className="font-bold text-[#263238]">Fast Response</p>
            <p className="text-sm text-[#404040]">Quotes within 10 minutes</p>
          </div>
        </div>
      </div>
      <ContactSection
        title="Professional Moving Services Across the UAE"
        desc={
          <>
            <p>
              Moving house is often listed as one of the most stressful things
              you can do. At Shayan Movers and Packers, we make that change.
            </p>
            <p className="mt-2">
              We are a real, registered company with a physical office in
              Sharjah, but we serve clients across Dubai and the entire UAE
              every day.
            </p>
            <p className="mt-2">
              Our team knows how to handle everything from studio apartments to
              large villas, and we treat your belongings like they&apos;re our
              own.
            </p>
          </>
        }
      />
      <Services />
      <section className="mt-32 md:w-11/12 mx-auto md:px-0 px-3">
        <div className="flex items-end justify-between flex-wrap md:gap-0 gap-y-10">
          <div>
            <p className="b2 md:text-lg font-medium">How It Works</p>
            <h2 className="md:text-5xl text-3xl font-black  mt-4">
              Our 3-Step Moving Process
            </h2>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="w-14 h-14 rounded-full b2-bg flex items-center justify-center">
              <Play className="" />
            </div>
            <p className="b-text">Video Introduction</p>
          </div>
        </div>
        <div className="mt-20  grid md:grid-cols-3 grid-cols-1 gap-16">
          <div className="flex items-center justify-center flex-col gap-y-3 relative">
            <div className="w-24 h-24 border-2 rounded-full border-(--brand-color) flex items-center justify-center bg-white">
              {" "}
              <LucideListChecks
                width={35}
                height={35}
                strokeWidth={1.5}
                className=""
              />
            </div>
            <h3 className="font-medium  md:text-2xl! text-xl! mt-5">
              Get a Quote
            </h3>
            <p className=" text-center text-sm">
              Call or WhatsApp us at +971 54 732 6816. Tell us what you are
              moving.
            </p>
            <Image
              className="absolute md:block hidden -right-[38%] top-1/5"
              width={200}
              height={200}
              src={"/arrow.png"}
              alt="right arrow"
            />
          </div>
          <div className="flex items-center justify-center flex-col gap-y-3 relative">
            <div className="w-24 h-24 border-2 rounded-full border-(--brand-color) flex items-center justify-center bg-white">
              {" "}
              <Truck width={35} height={35} strokeWidth={1.5} className="" />
            </div>
            <h3 className="font-medium  md:text-2xl! text-xl! mt-5">
              We Pack & Move
            </h3>
            <p className=" text-center text-sm">
              Our team arrives on time. We pack everything securely and load the
              truck.
            </p>
            <Image
              className="absolute md:block hidden -right-[38%] top-1/5"
              width={200}
              height={200}
              src={"/arrow.png"}
              alt="right arrow"
            />
          </div>
          <div className="flex items-center justify-center flex-col gap-y-3">
            <div className="w-24 h-24 border-2 rounded-full border-(--brand-color) flex items-center justify-center bg-white">
              {" "}
              <Gift width={35} height={35} strokeWidth={1.5} className="" />
            </div>
            <h3 className="font-medium  md:text-2xl! text-xl! mt-5">
              Settle In
            </h3>
            <p className=" text-center text-sm">
              We deliver, unpack, and reassemble your furniture. You check
              everything, and we are done.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto mt-36 px-4 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="">Why People Choose Shayan Movers</h2>
        </div>

        <div className="flex flex-col md:flex-row pt-10">
          <div className="mr-0 md:mr-8 mb-6 md:mb-0 md:w-1/3  relative rounded-2xl overflow-hidden h-96">
            <Image
              src="/movers-and-packers-dubai.jpg"
              fill
              alt="movers and packers in dubai"
              className="object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-(--brand-color) border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl! font-bold text-md mb-6">
                  No Hidden Fees
                </h3>
                <p className="text-sm">
                  The price we quote is the price you pay. We don&apos;t add
                  surprise charges on moving day.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-(--brand-color) border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl! font-bold text-md mb-6">
                  We Are Fast
                </h3>
                <p className="text-sm">
                  {" "}
                  We know you want to get it over with. We respond to quotes in
                  10 minutes and work efficiently on site.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-(--brand-color) border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl! font-bold text-md mb-6">
                  Safety First
                </h3>
                <p className="text-sm">
                  We use thick blankets and high-quality packing materials to
                  protect your belongings from scratches and dents.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-(--brand-color) border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl! font-bold text-md mb-6">Warranty</h3>
                <p className="text-sm">
                  We stand by our work. If something goes wrong, we offer a
                  warranty and returns on purchased furniture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhereWeWork />
      <ReviewSection />
      <MovingCostsComponent />
      <FAQs faqs={HomeFaqs} />
      <CTA />
    </main>
  );
};

export default HomePage;
