import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: "/images/storm-damage/Hurricane-damage/hurricane-damage1.png", alt: "Hurricane roof damage assessment" },
    { src: "/images/storm-damage/Hurricane-damage/hurricane-damage2.png", alt: "Wind damage to siding" },
    { src: "/images/storm-damage/Hurricane-damage/hurricane-damage3.png", alt: "Hurricane restoration work" },
];

export default function HurricaneDamagePage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    FORT WORTH'S HURRICANE RESTORATION COMPANY
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    We take care of our community with full-service storm restoration services and insurance claims assistance.
                </p>
            </div>
        </section>

        <section className="w-full pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 items-start gap-12">
                    <div className="space-y-6">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/images/storm-damage/why-storm-damage.png"
                                alt="Hurricane response team"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {images.map((image, index) => (
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
                                Hurricane Damage Roof & Siding Restoration
                            </h2>
                            <p className="content-description">
                                Hurricanes leave damage across their path, and you can never be too prepared for the aftermath. Good Guys Roofing is a family-owned roofing company that provides the timely solutions you need to get back on track.
                            </p>
                            <p className="content-description">
                                We’ll restore damage to your roofing system with weather-resistant services and comprehensive care that helps you recover while guiding you through the entire hurricane roof repair process. Learn how our Fort Worth storm damage company can bring integrity back to your home or business.
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


