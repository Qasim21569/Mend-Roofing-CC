
import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { GetStarted } from '@/components/get-started';
import { ServicesGrid } from '@/components/services-grid';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Gallery } from '@/components/gallery';
import { Testimonials } from '@/components/testimonials';
import { Offers } from '@/components/offers';
import { ServiceAreas } from '@/components/service-areas';
import { OurProcess } from '@/components/our-process';
import { AboutUs } from '@/components/about-us';
import { Blog } from '@/components/blog';
import { CommunityInvolvement } from '@/components/community-involvement';

export const metadata: Metadata = {
  title: "Good Guys | Expert Roofing Services",
  description: "Your trusted roofing experts for residential and commercial roof repair, installation, and maintenance.",
  keywords: "roofing, roof repair, roof installation, commercial roofing, Good Guys",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <GetStarted />
      <ServicesGrid />
      <Testimonials />
      <Offers />
      <WhyChooseUs />
      <Gallery />
      <ServiceAreas />
      <OurProcess />
      <AboutUs />
      <Blog />
      <CommunityInvolvement />
    </div>
  );
}
