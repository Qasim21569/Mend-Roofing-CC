
import { GetStarted } from "@/components/get-started";
import Image from "next/image";
import { Star } from "lucide-react";

const awards = [
    { src: 'https://www.usroofing.us/img/logos/bbb.png', alt: 'BBB Accredited Business' },
    { src: 'https://www.usroofing.us/img/logos/sherwin-williams.png', alt: 'Sherwin-Williams' },
    { src: 'https://www.usroofing.us/img/logos/behr.png', alt: 'Behr' },
];

export default function PaintingPage() {
    return (
      <div className="flex flex-col">
        <section id="home" className="relative w-full bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 items-center gap-8 min-h-[calc(80vh-120px)] py-12">
                    <div className="space-y-6 text-foreground">
                        <div className="flex items-center gap-1">
                            <Star className="w-8 h-8 text-gray-300 fill-gray-300" />
                            <Star className="w-8 h-8 text-gray-300 fill-gray-300" />
                            <Star className="w-8 h-8 text-gray-300 fill-gray-300" />
                        </div>
                        <h1 className="hero-heading uppercase">
                            PROPERTY REFRESH: FORT WORTH PAINTING SERVICES
                        </h1>
                        <p className="hero-description max-w-md">
                            Our professional painting services stay strong against wear for years of beautiful coverage.
                        </p>
                        <div className="flex items-center gap-4 overflow-x-auto py-4">
                            {awards.map((award, index) => (
                                <Image key={index} src={award.src} alt={award.alt} width={100} height={100} className="object-contain h-12 w-auto" />
                            ))}
                        </div>
                    </div>

                    <div className="relative w-full h-64 lg:h-full min-h-[300px] lg:min-h-[500px]">
                        <Image
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                            src="https://www.usroofing.us/img/page/hero-siding.jpg"
                            alt="Painting services"
                            fill
                            priority
                            data-ai-hint="painted house exterior"
                        />
                    </div>
                </div>
            </div>
        </section>
        
        <GetStarted subtitle="Paint your home, earn rewards, and boost curb appeal. Schedule a painting estimate!" />
      </div>
    );
}
