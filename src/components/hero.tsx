"use client";

import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-12 md:pt-8 md:pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-br from-white via-[#F8F9FA] to-accent/10">
      {/* Background Pattern - Hidden on mobile for performance */}
      <div className="hidden md:block absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-16">
          {/* Left Side - Content */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6 order-1 lg:order-1">
            <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary leading-tight">
              Trusted Roofing Company for Roof Replacements, Repairs & New Installations
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-primary font-semibold">
              Affordable & Reliable Roofing Services in Houston & Austin
            </p>
            
            <p className="text-secondary/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              We provide expert roofing services for residential and commercial properties throughout Houston and Austin. From storm damage repairs to complete roof replacements, our certified team delivers quality craftsmanship you can trust.
            </p>

            {/* Certification Badges */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap pt-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 relative">
                <Image
                  src="/certain-tee.png"
                  alt="CertainTeed SELECT ShingleMaster"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 relative">
                <Image
                  src="/bbb.png"
                  alt="BBB Accredited Business"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 relative">
                <Image
                  src="/gaf-master-elite.png"
                  alt="GAF Master Elite Contractor"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <button className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto font-semibold">
                <a href="tel:3462363652"> Call: (346) 236-3652</a>
              </button>
              <button className="bg-secondary hover:bg-secondary/90 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto font-semibold">
                <a href="#contact">Get Free Estimate</a>
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative order-2 lg:order-2">
            <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <Image
                src="/home-hero-image.png"
                alt="Mend Roofing professional service - Houston roofing company"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
