import Image from "next/image";
import { Button } from "./ui/button";
import { MessageCircle, PhoneCall, Star, Zap } from "lucide-react";
import ImageSrc from "@/public/shayan-movers-packers.jpg";
const HeroSection = () => {
  return (
    <>
      <section
        id="hero-section"
        className="md:py-20 pb-20 pt-10 bg-(--neutral-color) flex items-center md:px-0 px-3 justify-center flex-col text-center "
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

        <div className="flex gap-x-3 mt-8 items-center justify-center flex-wrap gap-y-3">
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
        className="max-w-250 md:h-135.5 h-80 mx-auto relative md:rounded-2xl overflow-hidden"
      >
        <Image
          src={ImageSrc}
          alt="Shayan Movers and Packers in Dubai"
          fill
          placeholder="blur"
          loading="eager"
          className="object-cover"
        />
        <div className="absolute md:bottom-6 -bottom-6 md:left-6 md:right-6  md:w-96 w-full bg-white/60 backdrop-blur-lg p-4 rounded-[0.625rem] shadow-lg z-20 flex items-center gap-4 border border-(--neutral-color)">
          <div className="bg-[#fdf4f1] p-3 rounded-full text-(--brand-color)">
            <Zap className="size-6" />
          </div>
          <div>
            <p className="font-bold text-[#263238]">Fast Response</p>
            <p className="text-sm text-[#404040]">Quotes within 10 minutes</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
