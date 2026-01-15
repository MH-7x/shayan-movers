import CTA from "@/components/CTA";
import Styles from "./styles";
import { ReviewSection } from "@/components/Services";
import Image from "next/image";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "About Shayan Movers | Trusted Moving Company in UAE",
      desc: "Learn about Shayan Movers - 20+ years moving homes and offices across Dubai, Sharjah, and Abu Dhabi. Real office in Sharjah. No hidden fees. Call now.",
    },
    image: {
      path: "/shayan-movers.svg",
      alt: "shayan movers and packers",
    },
    path: "/about-us",
  },
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-(--neutral-color)">
      <Styles />
      {/* Hero Section */}
      <section className="bg-linear-to-br from-(--neutral-color) to-white mt-32 py-20 px-4 grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:w-11/12 mx-auto">
        <div>
          <h1
            className="font-bold mb-6"
            style={{ color: "var(--heading-color)" }}
          >
            About Shayan Movers
          </h1>
          <p
            className="text-2xl font-semibold mb-4"
            style={{
              color: "var(--brand-color)",
              fontSize: "1.2rem !important",
            }}
          >
            We Move People and Their Belongings Across the UAE
          </p>
          <p
            className="max-w-3xl leading-relaxed"
            style={{ color: "var(--text-color)" }}
          >
            Moving is rarely easy. There&apos;s the packing, the heavy lifting,
            the coordination, and the worry about whether everything will arrive
            in one piece.
          </p>
          <p
            className="max-w-3xl leading-relaxed"
            style={{ color: "var(--text-color)" }}
          >
            We&apos;ve been doing this for over 20 years, and we understand what
            matters to you.
          </p>
        </div>
        <div className="md:h-[450px] h-96 relative rounded-2xl overflow-hidden">
          <Image
            src={"/shayan-movers.svg"}
            alt="About Shayan Movers"
            fill
            className="object-contain rounded-2xl"
            loading="eager"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="font-bold mb-6"
                style={{ color: "var(--heading-color)" }}
              >
                Our Story
              </h2>
              <p
                className="mb-4 leading-relaxed"
                style={{ color: "var(--text-color)" }}
              >
                Shayan Movers started with a simple idea: treat people&apos;s
                belongings the way we&apos;d want our own things treated. That
                means using proper packing materials, taking care with fragile
                items, and showing up when we say we will.
              </p>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-color)" }}
              >
                We&apos;re based in Sharjah, but we work throughout Dubai, Abu
                Dhabi, and the rest of the UAE. Our office is at Al Estiqlal
                Street in Abu Shagara—not a P.O. box, not just a phone number.
                You can visit us if you need to.
              </p>
            </div>
            <div
              className="rounded-lg md:p-8 py-8 px-3"
              style={{ backgroundColor: "var(--neutral-color)" }}
            >
              <div className="space-y-6">
                <div className="flex items-start">
                  <div
                    className="rounded-full p-3 mr-4"
                    style={{ backgroundColor: "var(--brand-color)" }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: "var(--heading-color)" }}
                    >
                      20+ Years
                    </h3>
                    <p
                      style={{
                        color: "var(--text-color)",
                        fontSize: "1rem !important",
                      }}
                    >
                      Of trusted moving services
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div
                    className="rounded-full p-3 mr-4"
                    style={{ backgroundColor: "var(--brand-color)" }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: "var(--heading-color)" }}
                    >
                      10,000+
                    </h3>
                    <p
                      style={{
                        color: "var(--text-color)",
                        fontSize: "1rem !important",
                      }}
                    >
                      Successful moves completed
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div
                    className="rounded-full p-3 mr-4"
                    style={{ backgroundColor: "var(--brand-color)" }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: "var(--heading-color)" }}
                    >
                      7 Days
                    </h3>
                    <p
                      style={{
                        color: "var(--text-color)",
                        fontSize: "1rem !important",
                      }}
                    >
                      Available every day of the week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "var(--neutral-color)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-bold mb-5 text-center"
            style={{ color: "var(--heading-color)" }}
          >
            What We Actually Do
          </h2>
          <p
            className="text-center mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-color)" }}
          >
            We handle residential and commercial moves. That includes:
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div
                className="rounded-full w-12 h-12 flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--brand-color)" }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3
                className="font-semibold mb-3"
                style={{ color: "var(--heading-color)" }}
              >
                Homes & Apartments
              </h3>
              <p
                style={{
                  color: "var(--text-color)",
                  fontSize: "1rem !important",
                }}
              >
                From studio flats to five-bedroom villas. Full packing,
                wrapping, and reassembly services.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div
                className="rounded-full w-12 h-12 flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--brand-color)" }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3
                className="font-semibold mb-3"
                style={{ color: "var(--heading-color)" }}
              >
                Offices
              </h3>
              <p
                style={{
                  color: "var(--text-color)",
                  fontSize: "1rem !important",
                }}
              >
                Desks, computers, filing cabinets. Evening and weekend moves
                available.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div
                className="rounded-full w-12 h-12 flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--brand-color)" }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3
                className="font-semibold mb-3"
                style={{ color: "var(--heading-color)" }}
              >
                Special Items
              </h3>
              <p
                style={{
                  color: "var(--text-color)",
                  fontSize: "1rem !important",
                }}
              >
                Pianos, artwork, antiques. Extra care and specialized packing
                techniques.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div
                className="rounded-full w-12 h-12 flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--brand-color)" }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3
                className="font-semibold mb-3"
                style={{ color: "var(--heading-color)" }}
              >
                Storage
              </h3>
              <p
                style={{
                  color: "var(--text-color)",
                  fontSize: "1rem !important",
                }}
              >
                Secure facilities for temporary storage until your new place is
                ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-bold mb-12 text-center"
            style={{ color: "var(--heading-color)" }}
          >
            Why People Call Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="border-l-4 pl-6 py-4"
              style={{ borderColor: "var(--brand-color)" }}
            >
              <h3
                className="font-semibold mb-3"
                style={{ color: "var(--heading-color)" }}
              >
                We Answer Quickly
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-color)" }}
              >
                When you call or WhatsApp, we typically respond within 10
                minutes with a quote. We ask about the size of your place, what
                needs to be moved, and where you&apos;re going. Then we give you
                a price.
              </p>
            </div>
            <div
              className="border-l-4 pl-6 py-4"
              style={{ borderColor: "var(--brand-color)" }}
            >
              <h3
                className="font-semibold mb-3"
                style={{ color: "var(--heading-color)" }}
              >
                The Price is the Price
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-color)" }}
              >
                What we quote is what you pay. We don&apos;t add surprise fees
                on moving day because you have a heavy sofa or live on the fifth
                floor. If there&apos;s something that would affect the cost, we
                ask about it upfront.
              </p>
            </div>
            <div
              className="border-l-4 pl-6 py-4"
              style={{ borderColor: "var(--brand-color)" }}
            >
              <h3
                className="font-semibold mb-3"
                style={{ color: "var(--heading-color)" }}
              >
                Right Equipment
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-color)" }}
              >
                Thick moving blankets to protect furniture. Proper dollies and
                straps. A truck that actually fits what you need to move. Basic
                things, but they matter.
              </p>
            </div>
            <div
              className="border-l-4 pl-6 py-4"
              style={{ borderColor: "var(--brand-color)" }}
            >
              <h3
                className="font-semibold mb-3"
                style={{ color: "var(--heading-color)" }}
              >
                Experienced Team
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-color)" }}
              >
                These aren&apos;t temporary workers we hired yesterday. Our crew
                has experience dismantling beds, wrapping glass tables, and
                navigating tight staircases. They&apos;ve done this thousands of
                times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Approach */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "var(--neutral-color)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-bold mb-6 text-center"
            style={{ color: "var(--heading-color)" }}
          >
            Our Approach to Safety
          </h2>
          <p
            className="text-center mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-color)" }}
          >
            Your belongings matter to you, so they matter to us. Here&apos;s how
            we protect them:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--brand-color)" }}
              >
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-color)" }}
              >
                Fragile items get wrapped in bubble wrap and marked clearly
              </p>
            </div>
            <div className="text-center">
              <div
                className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--brand-color)" }}
              >
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-color)" }}
              >
                Glass and mirrors get cardboard corner protection
              </p>
            </div>
            <div className="text-center">
              <div
                className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--brand-color)" }}
              >
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-color)" }}
              >
                Electronics are packed with extra padding in proper boxes
              </p>
            </div>
            <div className="text-center">
              <div
                className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--brand-color)" }}
              >
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-color)" }}
              >
                Furniture gets covered with thick blankets and secured
              </p>
            </div>
            <div className="text-center">
              <div
                className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--brand-color)" }}
              >
                <span className="text-white text-2xl font-bold">5</span>
              </div>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-color)" }}
              >
                Heavy items loaded first to prevent shifting during transport
              </p>
            </div>
            <div className="text-center">
              <div
                className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--brand-color)" }}
              >
                <span className="text-white text-2xl font-bold">6</span>
              </div>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-color)" }}
              >
                Guidance through building permits and regulations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-bold mb-12 text-center"
            style={{ color: "var(--heading-color)" }}
          >
            Coverage Across the UAE
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3
                className="font-semibold mb-4"
                style={{ color: "var(--brand-color)" }}
              >
                Dubai
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  color: "var(--text-color)",
                  fontSize: "1rem !important",
                }}
              >
                Dubai Marina, JBR, Downtown, Business Bay, Deira, Jumeirah,
                Silicon Oasis, and surrounding areas
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3
                className="font-semibold mb-4"
                style={{ color: "var(--brand-color)" }}
              >
                Sharjah
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  color: "var(--text-color)",
                  fontSize: "1rem !important",
                }}
              >
                Al Nahda, Muwaileh, Al Majaz, Al Khan, and all neighborhoods
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3
                className="font-semibold mb-4"
                style={{ color: "var(--brand-color)" }}
              >
                Abu Dhabi
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  color: "var(--text-color)",
                  fontSize: "1rem !important",
                }}
              >
                Al Reem Island, Khalifa City, Yas Island, and the wider capital
                region
              </p>
            </div>
          </div>
          <p
            className="text-center mt-8 leading-relaxed"
            style={{ color: "var(--text-color)" }}
          >
            We also serve the Northern Emirates: Ajman, Ras Al Khaimah, Al Ain,
            and other areas
          </p>
        </div>
      </section>

      {/* What We&apos;re Not */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "var(--neutral-color)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-bold mb-8 text-center"
            style={{ color: "var(--heading-color)" }}
          >
            What We&apos;re Not
          </h2>
          <div className="space-y-6">
            <p
              className="leading-relaxed"
              style={{ color: "var(--text-color)" }}
            >
              We&apos;re not the cheapest option in the UAE. Some companies
              charge less, and if price is your only concern, you might find a
              better deal elsewhere.
            </p>
            <p
              className="leading-relaxed"
              style={{ color: "var(--text-color)" }}
            >
              We&apos;re not the fanciest option either. We don&apos;t have a
              glossy corporate office or wear uniforms with gold embroidery.
              We&apos;re a working moving company.
            </p>
            <p
              className="leading-relaxed font-semibold text-center text-xl mt-8"
              style={{
                color: "var(--brand-color)",
                fontSize: "1.25rem !important",
              }}
            >
              What we are is reliable. We show up on time, do what we said
              we&apos;d do, and handle problems when they come up.
            </p>
          </div>
        </div>
      </section>
      <ReviewSection />
      <CTA />
    </div>
  );
}
