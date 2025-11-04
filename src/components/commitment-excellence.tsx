
import { Button } from './ui/button';
import Link from 'next/link';

export function CommitmentExcellence() {
  return (
    <section className="bg-primary text-primary-foreground py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
            OUR COMMITMENT TO EXCELLENCE
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            At Mend Roofing, we stand behind our work with comprehensive warranties, transparent processes, and unwavering dedication to quality workmanship. We believe in building lasting relationships with our customers through honest communication, fair pricing, and exceptional service. Your satisfaction is our top priority, and we're committed to delivering roofing solutions that exceed your expectations.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
          >
            <Link href="#contact">CONTACT US</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}


