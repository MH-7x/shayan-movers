import { Gift, LucideListChecks, Play, Truck } from "lucide-react";
import Image from "next/image";
import React from "react";

const Process = () => {
  return (
    <section className="mt-32 md:w-11/12 mx-auto md:px-0 px-3">
      <div className="flex items-end justify-between flex-wrap md:gap-0 gap-y-10">
        <div>
          <p className="b2 md:text-lg font-medium">How It Works</p>
          <h2 className="md:text-5xl text-3xl font-black  mt-4">
            Our 3-Step Moving Process
          </h2>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="w-14 h-14 rounded-full bg-(--brand-color) flex items-center justify-center">
            <Play className="text-white" />
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
          <p className=" text-center ">
            Call or WhatsApp us at +971 54 732 6816. Tell us what you are
            moving.
          </p>
          <Image
            className="absolute md:block hidden -right-[38%] top-1/5"
            width={200}
            height={200}
            src={"/arrow.png"}
            alt=""
            aria-hidden="true"
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
          <p className=" text-center ">
            Our team arrives on time. We pack everything securely and load the
            truck.
          </p>
          <Image
            className="absolute md:block hidden -right-[38%] top-1/5"
            width={200}
            height={200}
            src={"/arrow.png"}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="flex items-center justify-center flex-col gap-y-3">
          <div className="w-24 h-24 border-2 rounded-full border-(--brand-color) flex items-center justify-center bg-white">
            {" "}
            <Gift width={35} height={35} strokeWidth={1.5} className="" />
          </div>
          <h3 className="font-medium  md:text-2xl! text-xl! mt-5">Settle In</h3>
          <p className=" text-center ">
            We deliver, unpack, and reassemble your furniture. You check
            everything, and we are done.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
