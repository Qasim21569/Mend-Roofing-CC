import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: "/images/siding/repair/repair1.png", alt: "Siding repair inspection" },
    { src: "/images/siding/repair/repair2.png", alt: "Siding repair in progress" },
    { src: "/images/siding/repair/repair3.png", alt: "Siding damage close-up" },
    { src: "/images/siding/repair/repair4.png", alt: "Completed siding repair" },
];

export default function SidingRepairPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    PRECISION SIDING REPAIRS IN FORT WORTH
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    There's no team more committed to getting you the premium siding repairs you need to weather the next storm.
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
                                Siding Repair
                            </h2>
                            <p className="content-description">
                                Has your siding sustained damage from a recent storm or as a result of wear and tear? Get started on your siding repair project right away with top-tier products and services from Good Guys Roofing in Fort Worth.
                            </p>
                            <p className="content-description">
                                With over 15 years of experience, our family-owned business is one of the most qualified teams in the region. We're proud to be recognized by the Better Business Bureau with an accreditation and an A+ rating for excellence.
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
