import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: "/images/siding/types/types1.png", alt: "Siding type sample 1" },
    { src: "/images/siding/types/types2.png", alt: "Siding type sample 2" },
    { src: "/images/siding/types/types3.png", alt: "Siding type sample 3" },
    { src: "/images/siding/types/types4.png", alt: "Siding type sample 4" },
];

export default function SidingTypesPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    REMARKABLE SELECTION OF TOP SIDING TYPES IN FORT WORTH
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    Our team offers beautiful and durable siding options to suit the requirements and preferences of every homeowner
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
                                Siding Types
                            </h2>
                            <p className="content-description">
                                Planning a siding remodel has never been easier than with Good Guys Roofing. With over 15 years of experience in the industry, we're one of the most qualified teams in Fort Worth. Our dedicated siding experts can help you find the right siding type, style, and material for your home.
                            </p>
                            <p className="content-description">
                                Whether you're interested in improving curb appeal and/or weather resistance, our products are the right fit for your goals. As a BBB-accredited and A+ rated business, we go above and beyond to provide our customers with tailored solutions. Rely on us for efficient and detail-oriented siding remodeling across Texas.
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
