import { APP } from "@/App";
import ContactSection from "@/components/ContactSection";
import CTA from "@/components/CTA";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { Clock, MapPin, Phone } from "lucide-react";

const contacts = [
  {
    icon: <MapPin className="w-6 h-6 text-darkBlue" strokeWidth={1.2} />,
    title: "Our Office",
    desc: "Al Estiqlal Street, Abu Shagara - Sharjah",
  },
  {
    icon: <Phone className="w-6 h-6 text-darkBlue" strokeWidth={1.2} />,
    title: "Call Us",
    desc: APP.phone,
  },

  {
    icon: <Clock className="w-6 h-6 text-darkBlue" strokeWidth={1.2} />,
    title: "Work Hours",
    desc: "Open 24/7, Service Any Time",
  },
];

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Contact Shayan Movers | Homes & Office Relocation Services",
      desc: "Contact Shayan Movers — trusted residential movers across the UAE, including Dubai & Abu Dhabi. Call or WhatsApp for a free quote.",
    },
    path: "/contact-us",
    image: {
      path: "/contact-us.jpg",
      alt: "Contact Us - Shayan Movers",
    },
  },
});
const ContactUsPage = () => {
  return (
    <main className="mt-32 overflow-hidden">
      <ContactSection
        cta
        title="Contact Shayan Movers & Packers in Dubai"
        desc={
          <>
            <p>
              Looking for experienced and affordable movers and packers in Dubai
              to move your home, apartment or office? Contact us and leave the
              stressful work to us.
            </p>
            <p>
              We have more than 20 years of experience in moving homes and
              offices across the UAE.
            </p>
          </>
        }
        h1
      />
      <section className="mt-32 ">
        <div className="text-center mb-12">
          <h2 className="md:text-5xl text-3xl font-black b1">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl py-6 px-3 hover:shadow-lg transition"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-(--brand-color) mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg! font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 whitespace-pre-line">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
};

export default ContactUsPage;
