
import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/80ebba77-6367-4afe-8df8-90a75d2cb736.jpg', alt: 'Roof repair inspection', dataAiHint: 'roof inspection' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/f25e3424-7af9-417a-ad7f-3bd870d09883.jpg', alt: 'Roof repair materials', dataAiHint: 'roofing tools' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/0369a1d0-56e4-4b97-9b0a-5d2cb0c7cc43.jpg', alt: 'Damaged roof section', dataAiHint: 'damaged roof' },
];

export default function RoofRepairPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    STORM-RESISTANT ROOF REPAIRS IN FORT WORTH
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    We're prepared for all kinds of weather with full-service residential roof repair and restoration services.
                </p>
            </div>
        </section>

        <section className="w-full pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 items-start gap-12">
                    <div className="space-y-6">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/fb1989f6-2cdd-48ea-96de-fa90d1ec2fe1.jpg"
                                alt="Roof Repair"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="roof repair work"
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
                                Roof Repair
                            </h2>
                            <p className="content-description">
                                Prepare your home for the worst conditions with a professional FORT WORTH roofing company. At Good Guys, we quell the storm with immediate solutions to your weather damage. As a roof repair and roof restoration company, we're ready to tackle the most extreme damage with care. This includes free inspections and price estimates, detailed insurance claims assistance, and an unwavering dedication to putting our customers first. Learn why our expertise makes us stand out among local roof repair companies.
                            </p>
                            <h3 className="content-heading uppercase pt-4">
                                Customer-First FORT WORTH Roof Repair Services
                            </h3>
                             <p className="content-description">
                                Only a FORT WORTH roof repair specialist can provide the all-around solutions you need to protect your home. We're a team of licensed and insured experts who can restore all types of roofing materials, including asphalt shingles, metal, tile, and more. We specialize in solutions for: hail damage, wind damage, wood rot, and water leaks.
                            </p>
                        </div>
                    </div>

                    <div className="sticky top-24">
                       <GetStarted subtitle="Don't wait for a small leak to become a big problem. Get your free repair estimate today!" />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
