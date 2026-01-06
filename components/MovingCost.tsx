import React from "react";
import {
  Truck,
  Home,
  MapPin,
  Box,
  Layers,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";

const MovingCostsComponent: React.FC = () => {
  return (
    <section className="w-full mt-36 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center py-2 px-3 mb-4 bg-(--brand-color) rounded-full text-(--neutral-color)">
            <Calculator size={20} className="mr-2" />
            <span className="text-sm! font-semibold tracking-wide uppercase">
              Pricing Transparency
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Moving Costs
          </h2>
          <p className="text-lg mx-auto">
            No hidden fees. We believe in honest pricing tailored to your
            specific moving needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
          {/* Left Column: Cost Factors */}

          {/* Right Column: Average Costs Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-(--brand-color)"></div>
            <div className="p-8">
              <h3 className="text-xl! font-bold! text-center mb-2">
                Average Cost Estimates
              </h3>
              <p className="text-sm text-gray-500 mb-6 text-center">
                Estimated range for local moves
              </p>

              <div className="space-y-4">
                {[
                  { label: "Studio apartment", price: "Starting from AED 800" },
                  {
                    label: "1-2 bedroom apartment",
                    price: "AED 1,200 - 1,800",
                  },
                  { label: "3-bedroom apartment", price: "AED 1,800 - 2,500" },
                  { label: "Villa", price: "AED 2,500 and upwards" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-(--neutral-color) transition-colors duration-200 border border-transparent text-sm hover:border-(--brand-color)"
                  >
                    <span className="font-medium text-gray-700 mb-1 sm:mb-0">
                      {item.label}
                    </span>
                    <span className="font-bold text-(--heading-color)">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Inside Card */}
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-600 mb-4 text-sm">
                  Contact us for an accurate quote based on your specific needs.
                </p>
                <Button
                  wtsBtn
                  className="w-full py-3 px-6 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
          <div className="p-8 border border-gray-100 flex flex-col justify-center h-full">
            <h3 className="text-2xl! font-bold  mb-6 flex items-center">
              <Truck className="w-6 h-6 text-(--brand-color) mr-3" />
              What affects your price?
            </h3>
            <ul className="space-y-6">
              {[
                { icon: Home, text: "The size of your home or office" },
                { icon: Box, text: "How much stuff you have (Volume)" },
                { icon: MapPin, text: "The distance between locations" },
                {
                  icon: Layers,
                  text: "Extra services (packing, storage, assembly)",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mr-4 border border-gray-100">
                    <item.icon className="w-5 h-5 text-(--brand-color)" />
                  </div>
                  <span className="mt-2 text-gray-700 font-medium">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingCostsComponent;
