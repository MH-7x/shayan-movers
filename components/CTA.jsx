import { APP } from "../App";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
const CTA = () => {
  return (
    <section className="mt-32 bg-(--heading-color) md:px-20 px-3 md:py-0 pt-16 items-center md:gap-0 gap-y-10 min-h-96 grid md:grid-cols-2 relative overflow-hidden">
      <div>
        <h2 className="md:text-4xl! text-3xl! font-black text-white!">
          Ready To Get Moving? Get Free Quote Now
        </h2>
        <p className="text-(--neutral-color) mt-4">
          Stop stressing about your relocation. Call us now, and we&apos;ll
          handle everything. Call or WhatsApp us today to get a free quote from
          the leading movers and packers in the UAE.
        </p>
        <Link href={`${`tel:${APP.phone}`}`}>
          {" "}
          <Button size={"lg"} className="mt-6">
            {" "}
            CALL TO MOVERS : <span>(+971) 547326816</span>
          </Button>
        </Link>
      </div>
      <div className="z-20 relative md:h-[420px] h-96">
        <Image
          src={"/cta-image.png"}
          alt="cta image"
          fill
          className="absolute object-contain object-center"
        />
      </div>
      <div className="absolute inset-y-0 right-0 w-1/2 bg-(--brand-color) origin-top-right transform -skew-x-[45deg] -mr-[500px] " />
    </section>
  );
};

export default CTA;
