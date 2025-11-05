import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: "/images/storm-damage/Hail-damage/hail-damage1.png", alt: "Hail damage inspection" },
    { src: "/images/storm-damage/Hail-damage/hail-damage2.png", alt: "Roof impact damage" },
    { src: "/images/storm-damage/Hail-damage/hail-damage3.png", alt: "Siding hail damage" },
    { src: "/images/storm-damage/Hail-damage/hail-damage4.png", alt: "Hail damage restoration" },
];

export default function HailDamagePage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    HAIL DAMAGE ROOF REPAIRS IN Houston, TX
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    We restore all types of impact-related damage with weather-resistant materials from industry-leading brands.
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
                                Hail Damage Roof and Siding Restoration
                            </h2>
                            <p className="content-description">
                                Many hailstorms occur without warning, but still leave behind a destructive path. From cracking your asphalt shingles to tearing roof membranes, the impact of roof hail damage can compromise the structural integrity of your building. As a full-service Houston, TX roofing company, Good Guys Roofing is prepared to restore all signs of roof hail damage.
                            </p>
                            <p className="content-description">
                                Since 2012, Good Guys Roofing has been trusted by homeowners and businesses to restore damage swiftly. We’ll guide you through the Houston, TX hail damage roof repair process so that you always have access to a professional. This is our way of making sure our community recovers fully with minimal stress.
                            </p>
                        </div>
                    </div>

                    <div className="sticky top-24">
                       <GetStarted subtitle="See how recent weather has impacted your roof and siding today" />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}


