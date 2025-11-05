"use client";

import { ShieldCheck, DollarSign, Award, Home } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const trustBadges = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    text: "Fully Licensed, Insured & Certified Roofing Company"
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    text: "Affordable Payment Options Available"
  },
  {
    icon: <Award className="h-6 w-6" />,
    text: "Peace of Mind: Workmanship Warranties"
  },
  {
    icon: <Home className="h-6 w-6" />,
    text: "Locally Owned Small Business"
  },
];

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
          <div className="space-y-4 sm:space-y-5 lg:space-y-6 order-1 lg:order-1">
            <h1 className="hero-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-secondary leading-tight mb-2">
              Trusted Roofing Company for Roof Replacements, Repairs & New Installations
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-primary font-bold">
              Affordable & Reliable Roofing Services in Houston, TX
            </p>
            
            {/* Trust Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-4 bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border border-accent/20">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="text-primary shrink-0 mt-0.5 sm:mt-1 bg-primary/10 p-1.5 sm:p-2 rounded-lg">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                      {badge.icon}
                    </div>
                  </div>
                  <p className="text-secondary text-xs sm:text-sm md:text-base font-medium leading-snug">{badge.text}</p>
                </div>
              ))}
            </div>

            {/* Body Copy */}
            <p className="text-secondary/70 text-sm sm:text-base md:text-lg leading-relaxed">
              We provide expert roofing services for residential and commercial properties throughout Houston and Southeast Texas. From storm damage repairs to complete roof replacements, our certified team delivers quality craftsmanship you can trust.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                <Link href="tel:3462363652">
                  📞 Call: (346) 236-3652
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                <Link href="#contact">Get Free Estimate</Link>
              </Button>
            </div>

            {/* Trust Line - Stacked on mobile */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-3 sm:pt-4 text-xs sm:text-sm text-secondary/60">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                <span className="font-semibold">GAF Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                <span className="font-semibold">$2M Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">⭐⭐⭐⭐⭐</span>
                <span className="font-semibold">100+ Reviews</span>
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
