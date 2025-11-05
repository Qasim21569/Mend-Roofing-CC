"use client";

import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-white via-[#F8F9FA] to-accent/10">
      {/* Background Pattern - Hidden on mobile for performance */}
      <div className="hidden md:block absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Shapes - Reduced on mobile */}
      <div className="hidden md:block absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="hidden md:block absolute -bottom-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="hidden lg:block absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-16">
          {/* Left Side - Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-1">
            <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-secondary leading-tight uppercase">
              Trusted Roofing Company for Roof Replacements, Repairs & New Installations
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-secondary/70 leading-relaxed max-w-2xl">
              We provide expert roofing services for residential and commercial properties throughout Houston and Southeast Texas. From storm damage repairs to complete roof replacements, our certified team delivers quality craftsmanship you can trust.
            </p>

            {/* Certification Badges */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap pt-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/jackpot-jungle-c1020.firebasestorage.app/o/badge1.png?alt=media&token=your-token"
                  alt="Owens Corning Preferred Contractor"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/jackpot-jungle-c1020.firebasestorage.app/o/badge2.png?alt=media&token=your-token"
                  alt="CertainTeed SELECT ShingleMaster"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/jackpot-jungle-c1020.firebasestorage.app/o/badge3.png?alt=media&token=your-token"
                  alt="BBB Accredited Business"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 relative bg-[#C8102E] flex items-center justify-center p-2">
                <span className="text-white font-bold text-2xl sm:text-3xl">GAF</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative order-2 lg:order-2 lg:scale-105">
            <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl ring-2 sm:ring-4 ring-primary/10 hover:ring-primary/20 transition-all duration-300 group">
              <Image
                src="/home-hero-image.png"
                alt="Mend Roofing professional service - Houston roofing company"
                width={800}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            
            {/* Decorative elements - Hidden on small screens */}
            <div className="hidden md:block absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="hidden md:block absolute -top-8 -left-8 w-48 h-48 bg-accent/30 rounded-full blur-3xl -z-10" />
            <div className="hidden lg:block absolute top-1/2 -right-4 w-32 h-32 border-4 border-primary/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
