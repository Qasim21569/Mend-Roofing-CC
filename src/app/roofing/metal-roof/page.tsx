
import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/7940de81-59b9-4cb2-a5ee-38128f265676.jpg', alt: 'Metal roof detail', dataAiHint: 'red metal' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/f8c1c91c-43f0-4b60-89bb-f47c11a56879.jpg', alt: 'Another angle of metal roof', dataAiHint: 'gray metal' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/d4fbf2b0-76b7-4c10-80e6-77a898a46790.jpg', alt: 'Close-up of metal roof shingles', dataAiHint: 'metal shingles' },
];

export default function MetalRoofPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    PREMIUM METAL ROOFING IN Houston, TX
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    Defend your home with a long-lasting roof installation engineered by prioritizing energy efficiency and all-around resistance.
                </p>
            </div>
        </section>

        <section className="w-full pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 items-start gap-12">
                    <div className="space-y-6">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/1efb853b-8219-42ee-b99c-926bfdcadcf9.jpg"
                                alt="Premium Metal Roof"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="metal roof house"
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
                                        data-ai-hint={image.dataAiHint}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 pt-6">
                            <h2 className="content-heading uppercase">
                                METAL ROOFS
                            </h2>
                            <p className="content-description">
                                Are you looking for long-lasting roof protection? At US Roofing, we install durable solutions that keep your home covered with resilience year after year. As a family-owned Houston, TX roofing company, we specialize in dependable residential metal roofing that combines endurance with curb appeal. Our metal roofers bring 15+ years of experience to your home to make sure every installation is handled with precision.
                            </p>
                            <h3 className="content-heading uppercase pt-4">
                                COMPLETE Houston, TX ROOF METAL ROOF INSTALLATION SERVICES
                            </h3>
                             <p className="content-description">
                                A metal roof installation is an investment in the long-term protection of your home. At Good Guys, we offer a variety of metal roofing options, including standing seam and exposed fastener systems, to provide superior durability, energy efficiency, and weather resistance. Our expert team ensures a flawless installation, giving you a beautiful and long-lasting roof that can withstand the harsh Texas climate for decades.
                            </p>
                        </div>
                    </div>

                    <div className="sticky top-24">
                       <GetStarted subtitle="Durable. Stylish. Save $1,000 on a metal roof replacement today. Get your metal roof estimate!" />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
