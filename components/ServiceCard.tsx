import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const ServiceCard = ({
  image,
  href,
  desc,
  title,
}: {
  image: { src: string; alt: string };
  href: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="max-w-96">
      <div className="w-full h-72 relative z-0 overflow-hidden rounded-t-lg">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
          className="absolute object-cover object-center"
        />
      </div>
      <div className="w-11/12 mx-auto rounded-2xl shadow-lg shadow-neutral-100 bg-white/90 min-h-32 z-10 transform -translate-y-10 py-5 px-3 ">
        <Link href={href}>
          <h3 className="text-xl! font-semibold b1 text-center">{title}</h3>
        </Link>
        <p className="b-text mt-3 text-sm text-center md:line-clamp-3 line-clamp-4">
          {desc}
        </p>
        <div className="flex items-center justify-start gap-x-5 w-full mt-5">
          <Button size={"sm"}>Get A Quote</Button>
          <Link
            href={href}
            title={title}
            className="text-sm text-(--brand-color) underline underline-offset-1"
          >
            Service Details..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
