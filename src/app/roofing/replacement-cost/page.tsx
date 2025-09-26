
import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/9882058c-d1bb-47c5-8b81-9eb17540436e.jpg', alt: 'Roof work in progress', dataAiHint: 'roof construction' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/359bf895-15d8-4d94-a6f7-2ad7b2a3819e.jpg', alt: 'Roofing materials', dataAiHint: 'roofing materials' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/1dadfda2-0d66-430b-9850-5135138f67ac.jpg', alt: 'Completed roof', dataAiHint: 'new roof' },
];

export default function RoofReplacementCostPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    ROOF REPLACEMENT COST IN FORT WORTH
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    Discover what impacts roof replacement costs in Fort Worth.
                </p>
            </div>
        </section>

        <section className="w-full pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 items-start gap-12">
                    <div className="space-y-6">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/975d091a-9998-4b48-bf85-3857e5373af3.jpg"
                                alt="Roof Replacement Cost"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="residential roof aerial"
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
                                Cost of Roof Replacement
                            </h2>
                            <p className="content-description">
                                Understanding the cost of roof replacement in Fort Worth, TX is essential for homeowners and commercial property owners alike. With changing weather patterns and wear over time, replacing a roof becomes a necessary investment. At Good Guys, we provide transparent pricing and quality craftsmanship tailored to the unique needs of this region.
                            </p>
                            <p className="content-description">
                                Several factors influence the cost of roof replacement in Fort Worth, TX, including roofing material, roof size, slope, structural condition, and labor costs. For example, architectural shingles cost more than standard three-tab shingles but offer greater durability. Additionally, roofing permits and disposal fees contribute to overall costs.
                            </p>
                            <h3 className="content-heading uppercase pt-4">
                                KEY BENEFITS FOR PROPERTY
                            </h3>
                             <p className="content-description">
                                A new roof is more than just a structural necessity; it's an investment in your property's value and safety. In Fort Worth, a new roof can significantly enhance your home's resilience to storms, improve energy efficiency, and boost curb appeal. With our high-quality materials and expert installation, you can enjoy peace of mind knowing your property is well-protected.
                            </p>
                        </div>
                    </div>

                    <div className="sticky top-24">
                       <GetStarted subtitle="Your new roof is $1,000 off this season. Claim your roof replacement deal!" />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
