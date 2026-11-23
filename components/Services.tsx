"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServiceCard from "./ServiceCard";
import { Star } from "lucide-react";
import GoogleReviewCard from "./GoogleReviewCard";

const serviceList = [
  {
    image: {
      src: "/home-moving-in-dubai.jpg",
      alt: "Home moving services for apartments and houses",
    },
    href: "/house-movers-in-dubai",
    title: "Home Moving",
    desc: "We pack and move studio apartments and 1–5 bedroom homes. From kitchen items to furniture, electronics, and personal belongings, everything is packed using proper protective materials.",
  },
  {
    image: {
      src: "/Apartment-Villa-Moving.jpg",
      alt: "Movers in uniform carrying garden furniture at a villa in Dubai",
    },
    href: "/villa-movers-in-dubai",
    title: "Villa Moving",
    desc: "We move villas of every size, from small two-bedroom villas to large homes with six or seven bedrooms. Packing, dismantling, transport, permits and setup at the new place.",
  },
  {
    image: {
      src: "/office-relocation-in-uae.jpg",
      alt: "Office relocation and business moving services",
    },
    href: "/office-movers-in-dubai",
    title: "Office Relocation",
    desc: "We minimize business downtime by carefully moving desks, computers, files, and equipment. After-hours and weekend moves are available when needed.",
  },
  {
    image: {
      src: "/packing-services-dubai.jpg",
      alt: "Professional packing services with boxes and bubble wrap",
    },
    href: "/house-movers-in-dubai",
    title: "Packing Services",
    desc: "Short on time? Our team handles complete packing using high-quality boxes, bubble wrap, and packing paper to keep your items safe.",
  },
  {
    image: {
      src: "/furniture-assembly-services-in-dubai.jpg",
      alt: "Furniture dismantling and assembly services",
    },
    href: "/house-movers-in-dubai",
    title: "Furniture Assembly",
    desc: "Large furniture is professionally dismantled before moving and reassembled at your new location with proper tools and care.",
  },
  {
    image: {
      src: "/storage-services-in-dubai.jpg",
      alt: "Secure storage solutions for household items",
    },
    href: "/affordable-movers-in-dubai",
    title: "Storage Solutions",
    desc: "Need temporary storage? Our secure facilities are available for both short-term and long-term storage requirements.",
  },
  {
    image: {
      src: "/piano-movers.jpg",
      alt: "Special handling for pianos, antiques, and fragile items",
    },
    href: "/villa-movers-in-dubai",
    title: "Special Items",
    desc: "Pianos, artwork, antiques, and fragile items receive extra care with custom packing and crating for maximum protection.",
  },
];

export function Services() {
  return (
    <section className="mt-36 md:px-0 px-3">
      <h2 className="text-center md:text-5xl! text-4xl!">
        Our Moving Services in UAE
      </h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto my-20"
      >
        <CarouselContent>
          {serviceList.map((service, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <ServiceCard {...service} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselNext />
        <CarouselPrevious /> */}
      </Carousel>
    </section>
  );
}

const googleReviews = [
  {
    name: "Ahmed Al-Mansouri",
    time: "3 weeks ago",
    star: 5,
    review:
      "Shayan Movers made my move completely stress-free and handled all my furniture with great care. The team was punctual, polite, and very professional throughout the process.",
    image: "/ava/32.jpg",
  },
  {
    name: "Sarah Jenkins",
    time: "1 month ago",
    star: 5,
    review:
      "I highly recommend them! They packed my glass items securely and delivered everything to my new apartment without a single scratch.",
    image: "/ava/44.jpg",
  },
  {
    name: "Rahul Verma",
    time: "2 days ago",
    star: 5,
    review:
      "Booked them on short notice, and they were incredibly accommodating. Great service at a very reasonable price compared to other quotes I received.",
    image: "/ava/86.jpg",
  },
  {
    name: "Jessica Lee",
    time: "2 months ago",
    star: 5,
    review:
      "Used their service for our office relocation and was impressed by their speed. They dismantled and reassembled the desks perfectly.",
    image: "/ava/68.jpg",
  },
  {
    name: "Mohammed Tariq",
    time: "1 week ago",
    star: 5,
    review:
      "Best moving experience I've had so far. The guys were hardworking and finished the job way ahead of schedule.",
    image: "/ava/22.jpg",
  },
  {
    name: "Elena Rostova",
    time: "4 months ago",
    star: 5,
    review:
      "They helped me move a heavy sofa to the 5th floor without any complaints. Truly excellent service and very friendly staff!",
    image: "/ava/90.jpg",
  },
  {
    name: "David Miller",
    time: "3 days ago",
    star: 5,
    review:
      "From the initial quote to the final box, the communication was top-notch. Will definitely use Shayan Movers again for my next move.",
    image: "/ava/54.jpg",
  },
  {
    name: "Fatima Khalil",
    time: "5 weeks ago",
    star: 5,
    review:
      "I was worried about my electronics, but they wrapped everything perfectly. Professional service that doesn't break the bank.",
    image: "/ava/29.jpg",
  },
  {
    name: "James O'Connor",
    time: "2 months ago",
    star: 5,
    review:
      "Fast, efficient, and friendly team. They took all the hassle out of moving day and placed the furniture exactly where I wanted it.",
    image: "/ava/11.jpg",
  },
  {
    name: "Priya Singh",
    time: "6 days ago",
    star: 5,
    review:
      "Excellent experience with Shayan Movers! They arrived exactly on time and treated my belongings as if they were their own.",
    image: "/ava/19.jpg",
  },
];

export function ReviewSection({ hideTitle = false }: { hideTitle?: boolean }) {
  return (
    <section
      aria-label={hideTitle ? "Google reviews" : undefined}
      className={`${hideTitle ? "mt-16" : "mt-36"} max-w-6xl md:px-0 px-3  mx-auto`}
    >
      <div className="flex items-center justify-center text-center flex-col">
        {!hideTitle && (
          <h2 className=" whitespace-normal md:text-5xl text-4xl! wrap-break-word">
            What Our Customers Say
          </h2>
        )}

        <div
          className={`flex md:flex-row flex-col gap-3 ${
            hideTitle ? "" : "mt-5"
          } items-center justify-center`}
        >
          <div className="flex gap-x-1 ">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="text-yellow-500 fill-yellow-500" />
              ))}
          </div>
          <p className="font-medium">857 Google Reviews</p>
        </div>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="max-w-5xl mx-auto mt-10"
      >
        <CarouselContent>
          {googleReviews.map((review, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 select-none"
            >
              <GoogleReviewCard review={{ ...review }} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
