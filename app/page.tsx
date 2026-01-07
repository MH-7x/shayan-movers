import ContactSection from "@/components/ContactSection";
import { HomeFaqs } from "@/lib/lists";
import { ReviewSection, Services } from "@/components/Services";
import { WhereWeWork } from "@/components/WhereWeWork";
import MovingCostsComponent from "@/components/MovingCost";
import { FAQs } from "@/components/FAQs";
import CTA from "@/components/CTA";
import HeroSection from "@/components/HeroSection";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Trusted Movers and Packers in Dubai | Shayan Movers",
      desc: "Fast and affordable movers in Dubai &amp; Sharjah. We pack, move, and set up your furniture safely and securely. Call +971 54 732 6816 for a free quote today.",
    },
    image: {
      path: "/shayan-movers-packers.jpg",
      alt: "Shayan Movers and Packers in Dubai",
    },
    path: "",
  },
});

const HomePage = () => {
  return (
    <main className="mt-32 overflow-hidden">
      <HeroSection />
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
      <ReviewSection />
      <Services />
      <Process />
      <WhyChooseUs />

      <WhereWeWork />

      <MovingCostsComponent />
      <FAQs faqs={HomeFaqs} />
      <CTA />
    </main>
  );
};

export default HomePage;
