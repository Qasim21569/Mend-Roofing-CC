
import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { GetStarted } from '@/components/get-started';
import { Services } from '@/components/services';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Gallery } from '@/components/gallery';
import { Testimonials } from '@/components/testimonials';

export const metadata: Metadata = {
  title: "Good Guys | Roofing Services",
  description: "Your trusted roofing experts for residential and commercial roof repair, installation, and maintenance.",
  keywords: "roofing, roof repair, roof installation, commercial roofing, Good Guys",
};

export default function RoofingPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <GetStarted />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
    </div>
  );
}
