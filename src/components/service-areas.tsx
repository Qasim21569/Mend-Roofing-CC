"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

const locations = [
  {
    name: "Spring Location",
    phone: "(281) 305-3162",
    address: "24624 Interstate 45 200, Spring, TX 77386",
  },
  {
    name: "Katy Location",
    phone: "(346) 236-3652",
    address: "24285 Katy Fwy Suite 300-18, Katy, TX 77494",
  },
  {
    name: "The Woodlands",
    phone: "(832) 555-7890",
    address: "123 Woodlands Blvd, The Woodlands, TX 77380",
  },
];

export default function ServiceAreasCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 3000 }),
  ]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-800"
          style={{ fontFamily: '"Stardos Stencil", system-ui' }}
        >
          Areas We Serve
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {locations.map((loc, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full md:w-[70%] lg:w-[60%] px-4"
              >
                <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-200 hover:shadow-xl transition-all">
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: '"Stardos Stencil", system-ui' }}
                  >
                    {loc.name}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong> {loc.phone}
                  </p>
                  <p className="text-gray-600">
                    <strong>Address:</strong> {loc.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
