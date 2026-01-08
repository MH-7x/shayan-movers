import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto mt-36 px-3 lg:px-6">
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
              <h3 className="text-2xl! font-bold text-md mb-3">
                No Hidden Fees
              </h3>
              <p className="">
                The price we quote is the price you pay. We don&apos;t add
                surprise charges on moving day.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-(--brand-color) border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl! font-bold text-md mb-3">We Are Fast</h3>
              <p className="">
                {" "}
                We know you want to get it over with. We respond to quotes in 10
                minutes and work efficiently on site.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-(--brand-color) border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl! font-bold text-md mb-3">Safety First</h3>
              <p className="">
                We use thick blankets and high-quality packing materials to
                protect your belongings from scratches and dents.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-(--brand-color) border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl! font-bold text-md mb-3">Warranty</h3>
              <p className="">
                We stand by our work. If something goes wrong, we offer a
                warranty and returns on purchased furniture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
