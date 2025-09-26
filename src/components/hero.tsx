
import { Star } from 'lucide-react';
import Image from 'next/image';

const awards = [
    { src: 'https://www.usroofing.us/img/logos/masterelite.png', alt: 'GAF Master Elite' },
    { src: 'https://www.usroofing.us/img/logos/expertise.png', alt: 'Expertise.com Best Roofers in Augusta 2020' },
    { src: 'https://www.usroofing.us/img/logos/bbb.png', alt: 'BBB Accredited Business' },
    { src: 'https://www.usroofing.us/img/logos/gaf.png', alt: 'GAF' },
];

export function Hero() {
    return (
        <section id="home" className="relative w-full bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 items-center gap-8 min-h-[calc(100vh-120px)] py-12">
                    <div className="space-y-6 text-foreground">
                        <div className="flex items-center gap-1">
                            <Star className="w-8 h-8 text-gray-300 fill-gray-300" />
                            <Star className="w-8 h-8 text-gray-300 fill-gray-300" />
                            <Star className="w-8 h-8 text-gray-300 fill-gray-300" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-700">
                            STORM-RESISTANT
                            <br />
                            EXTERIOR REMODELING
                            <br />
                            IN FORT WORTH
                        </h1>
                        <p className="max-w-md text-muted-foreground">
                            We're committed to protecting your property against the humid, subtropical climate with full-scale restorations.
                        </p>
                        <div className="flex items-center gap-4 overflow-x-auto py-4">
                            {awards.map((award, index) => (
                                <Image key={index} src={award.src} alt={award.alt} width={100} height={100} className="object-contain h-16 w-auto" />
                            ))}
                        </div>
                    </div>

                    <div className="relative w-full h-auto aspect-[16/9] lg:min-h-[500px] overflow-hidden rounded-lg">
                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src="https://www.usroofing.us/img/hero-video.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
