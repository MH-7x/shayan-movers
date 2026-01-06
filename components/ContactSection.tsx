import {
  AlarmCheck,
  Medal,
  PackageCheckIcon,
  TimerResetIcon,
  Truck,
} from "lucide-react";

import { ReactNode } from "react";
import QuoteForm from "./QuoteForm";

const ContactSection = ({
  title,
  desc,
  cta,
  h1,
}: {
  title?: string;
  desc?: ReactNode;
  cta?: boolean;
  h1?: boolean;
}) => {
  return (
    <section
      id="contact-section"
      className={`md:w-11/12 ${
        cta ? "mt-10" : "mt-32"
      } mx-auto grid md:grid-cols-2 md:gap-x-16 gap-y-16 items-center md:px-0 px-3`}
    >
      <div>
        {h1 ? (
          <h1 className=" font-black md:text-5xl text-3xl">
            {title ? title : "Best House Moving Company in Dubai, UAE"}
          </h1>
        ) : (
          <h2 className=" font-black md:text-5xl text-3xl!">
            {title ? title : "Best House Moving Company in Dubai, UAE"}
          </h2>
        )}
        <div className="md:mt-8 mt-5 b-text">
          {desc ? (
            desc
          ) : (
            <>
              <p>
                Founded in 2018, our team of 50+ trained packers and movers
                delivers stress-free house shifting services across Dubai, Abu
                Dhabi, Sharjah, and Ajman.
              </p>
              <p>
                As experienced movers and packers in the UAE, we handle
                everything from apartment moves to villa relocations with care
                and efficiency
              </p>
            </>
          )}
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5 md:px-0 px-5">
          <div className="bg-white hover:bg-(--brand-color)/10 transition-colors duration-500 text-(--headline-color) drop-shadow-lg flex rounded-2xl flex-col items-center justify-center gap-y-4 p-6">
            <Medal className="w-10 h-10 b2" />
            <p className="  font-medium text-center">20+ Years Experience</p>
          </div>
          <div className="bg-(--brand-color) text-white drop-shadow-lg flex rounded-2xl flex-col items-center justify-center gap-y-4 p-6">
            <Truck className="w-10 h-10 " />
            <p className="  font-medium text-center">10k+ Moves Completed</p>
          </div>
          <div className="bg-white hover:bg-(--brand-color)/10 transition-colors duration-500 text-(--headline-color) drop-shadow-lg flex rounded-2xl flex-col items-center justify-center gap-y-4 p-6">
            <TimerResetIcon className="w-10 h-10 b2" />
            <p className="  font-medium text-center">7 Days a Week</p>
          </div>
        </div>
      </div>
      <QuoteForm />
    </section>
  );
};

export default ContactSection;
