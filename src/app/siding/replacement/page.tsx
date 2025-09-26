import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: "/images/siding/replacement/replacement1.png", alt: "Siding replacement project" },
    { src: "/images/siding/replacement/replacement2.png", alt: "New siding installation" },
    { src: "/images/siding/replacement/replacement3.png", alt: "Siding materials and tools" },
    { src: "/images/siding/replacement/replacement4.png", alt: "Completed siding replacement" },
];

export default function SidingReplacementPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    SUPERIOR SIDING REPLACEMENT SERVICES IN FORT WORTH
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    Our team provides immense support from start to finish when helping homeowners achieve their best siding.
                </p>
            </div>
        </section>

        <section className="w-full pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 items-start gap-12">
                    <div className="space-y-6">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={images[0].src}
                                alt={images[0].alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {images.slice(1).map((image, index) => (
                                <div key={index} className="relative w-full aspect-square rounded-md overflow-hidden shadow-md">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 33vw, 15vw"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 pt-6">
                            <h2 className="content-heading uppercase">
                                Siding Replacement
                            </h2>
                            <p className="content-description">
                                Planning a siding replacement is a big deal that requires the support of a qualified siding contractor. At Good Guys Roofing, we have over 15 years of experience providing beautiful and durable siding to local homeowners. Our team specializes in efficient turnaround times, high-quality products, and great customer service.
                            </p>
                            <p className="content-description">
                                If you're looking for a team that can replace siding on a house in Fort Worth, choose our BBB-accredited and A+ rated business. We are proud to be family-owned and operated, offering clear communication every step of the way. No matter what your home improvement goals are, we will help you reach them with effective products and services.
                            </p>
                        </div>
                    </div>

                    <div className="sticky top-24">
                       <GetStarted subtitle="Refresh your home's look—use inspection credit. Schedule your siding estimate!" />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
