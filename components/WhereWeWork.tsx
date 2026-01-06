import { JSX } from "react";
import {
  MapPin,
  Building2,
  Landmark,
  Globe,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";

interface LocationType {
  id: string;
  city: string;
  description: string;
  icon: JSX.Element;
  color: string;
  areas: string[];
}

// --- Data Structure ---
const locations: LocationType[] = [
  {
    id: "dubai",
    city: "Dubai",
    description: "Serving the heart of the UAE with rapid delivery.",
    icon: <Building2 className="w-6 h-6 " />,
    color: "bg-(--neutral-color) text-(--brand-color)",
    areas: [
      "Dubai Marina",
      "JBR",
      "Downtown Dubai",
      "Business Bay",
      "JVC",
      "Silicon Oasis",
      "Deira",
      "Bur Dubai",
      "Al Barsha",
      "Jumeirah",
      "Palm Jumeirah",
    ],
  },
  {
    id: "sharjah",
    city: "Sharjah",
    description: "Our home base. Fast and reliable local service.",
    icon: <MapPin className="w-6 h-6 " />,
    color: "bg-(--neutral-color) text-(--brand-color)",
    areas: [
      "Al Nahda",
      "Muwaileh",
      "Al Majaz",
      "Al Khan",
      "Bu Shaghara",
      "Hay Al Qasimiah", // Added your HQ area for completeness
    ],
  },
  {
    id: "abudhabi",
    city: "Abu Dhabi",
    description: "Extensive coverage across the capital.",
    icon: <Landmark className="w-6 h-6 " />,
    color: "bg-(--neutral-color) text-(--brand-color)",
    areas: ["Al Reem Island", "Khalifa City", "Yas Island"],
  },
  {
    id: "northern",
    city: "Northern Emirates",
    description: "Connecting the wider UAE region.",
    icon: <Globe className="w-6 h-6 " />,
    color: "bg-(--neutral-color) text-(--brand-color)",
    areas: ["Ajman", "Ras Al Khaimah", "Fujairah"],
  },
];

// --- Sub-Component: Location Card ---
const LocationCard = ({ location }: { location: LocationType }) => (
  <div className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 overflow-hidden">
    {/* Decorative background element */}
    <div
      className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20 transition-transform group-hover:scale-110 bg-(--brand-color)`}
    />

    <div className="relative z-10">
      <div
        className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 ${location.color}`}
      >
        {location.icon}
      </div>

      <h3 className="text-2xl! font-bold! mb-2">Movers in {location.city}</h3>
      <p className="text-sm  mb-6">{location.description}</p>

      <div className="space-y-3">
        <h4 className="text-xs! font-semibold! uppercase tracking-wider text-gray-400">
          Key Areas
        </h4>
        <ul className="grid grid-cols-2 gap-y-2">
          {location.areas.map((area, index) => (
            <li key={index} className="flex items-start text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// --- Main Component ---
export const WhereWeWork = () => {
  return (
    <section className="mt-30 py-16 ">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--brand-color) text-(--neutral-color) text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            <span>Service Coverage</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Where We <span className="text-(--brand-color)">Work</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From our headquarters in Sharjah to the skyscrapers of Dubai and the
            capital of Abu Dhabi. We cover all major areas in the UAE, ensuring
            your furniture reaches you wherever you are.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 lg:gap-8">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>

        {/* Bottom CTA / Trust Indicator */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-slate-900">
              Don&apos;t see your area listed?
            </h4>
            <p className=" mt-1">
              We likely still cover it! Contact us to confirm delivery options.
            </p>
          </div>
          <Button variant={"secondary"} size={"lg"} wtsBtn className="py-6">
            Check Availability <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};
