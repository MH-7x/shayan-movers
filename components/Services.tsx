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
      alt: "Home moving services for apartments and villas",
    },
    href: "/services/home-moving",
    title: "Home Moving",
    desc: "We pack and move studio apartments, 1–5 bedroom homes, and villas. From kitchen items to furniture, electronics, and personal belongings, everything is packed using proper protective materials.",
  },
  {
    image: {
      src: "/office-relocation-in-uae.jpg",
      alt: "Office relocation and business moving services",
    },
    href: "/services/office-relocation",
    title: "Office Relocation",
    desc: "We minimize business downtime by carefully moving desks, computers, files, and equipment. After-hours and weekend moves are available when needed.",
  },
  {
    image: {
      src: "/packing-services-dubai.jpg",
      alt: "Professional packing services with boxes and bubble wrap",
    },
    href: "/services/packing-services",
    title: "Packing Services",
    desc: "Short on time? Our team handles complete packing using high-quality boxes, bubble wrap, and packing paper to keep your items safe.",
  },
  {
    image: {
      src: "/furniture-assembly-services-in-dubai.jpg",
      alt: "Furniture dismantling and assembly services",
    },
    href: "/services/furniture-assembly",
    title: "Furniture Assembly",
    desc: "Large furniture is professionally dismantled before moving and reassembled at your new location with proper tools and care.",
  },
  {
    image: {
      src: "/storage-services-in-dubai.jpg",
      alt: "Secure storage solutions for household items",
    },
    href: "/services/storage-solutions",
    title: "Storage Solutions",
    desc: "Need temporary storage? Our secure facilities are available for both short-term and long-term storage requirements.",
  },
  {
    image: {
      src: "/piano-movers.jpg",
      alt: "Special handling for pianos, antiques, and fragile items",
    },
    href: "/services/special-items",
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
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Jenkins",
    time: "1 month ago",
    star: 5,
    review:
      "I highly recommend them! They packed my glass items securely and delivered everything to my new apartment without a single scratch.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    time: "2 days ago",
    star: 5,
    review:
      "Booked them on short notice, and they were incredibly accommodating. Great service at a very reasonable price compared to other quotes I received.",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  {
    name: "Jessica Lee",
    time: "2 months ago",
    star: 5,
    review:
      "Used their service for our office relocation and was impressed by their speed. They dismantled and reassembled the desks perfectly.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mohammed Tariq",
    time: "1 week ago",
    star: 5,
    review:
      "Best moving experience I've had so far. The guys were hardworking and finished the job way ahead of schedule.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Elena Rostova",
    time: "4 months ago",
    star: 5,
    review:
      "They helped me move a heavy sofa to the 5th floor without any complaints. Truly excellent service and very friendly staff!",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    name: "David Miller",
    time: "3 days ago",
    star: 5,
    review:
      "From the initial quote to the final box, the communication was top-notch. Will definitely use Shayan Movers again for my next move.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Fatima Khalil",
    time: "5 weeks ago",
    star: 5,
    review:
      "I was worried about my electronics, but they wrapped everything perfectly. Professional service that doesn't break the bank.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "James O'Connor",
    time: "2 months ago",
    star: 5,
    review:
      "Fast, efficient, and friendly team. They took all the hassle out of moving day and placed the furniture exactly where I wanted it.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Priya Singh",
    time: "6 days ago",
    star: 5,
    review:
      "Excellent experience with Shayan Movers! They arrived exactly on time and treated my belongings as if they were their own.",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
  },
];

export function ReviewSection() {
  return (
    <section className="mt-36 max-w-6xl md:px-0 px-3  mx-auto">
      <div className="flex items-center justify-center text-center flex-col">
        <h2 className=" whitespace-normal wrap-break-word">
          What Our Customers Says
        </h2>

        <div className="flex gap-x-1 mt-5">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star key={i} className="text-yellow-500 fill-yellow-500" />
            ))}
        </div>
        <p className="mt-2 font-medium">857 Google Reviews</p>
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
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <GoogleReviewCard review={{ ...review }} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
