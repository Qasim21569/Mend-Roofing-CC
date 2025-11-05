
import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/c9f4fbba-499b-4bfb-8b86-92cde7408cf5.jpg', alt: 'Roof type 1' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/56fdd841-792e-4643-95f7-4571288e6c15.jpg', alt: 'Roof type 2' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/172815af-8aba-4f03-9493-91d4055194d5.JPG', alt: 'Roof type 3' },
];

export default function CommercialRoofTypesPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary uppercase">
                    COMMERCIAL ROOF TYPES IN Houston, TX
                </h1>
                 <p className="max-w-4xl mx-auto text-muted-foreground md:text-lg mt-4">
                    We specialize in resilient roof materials that help protect the integrity and storm defense of your property.
                </p>
            </div>
        </section>

        <section className="w-full pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 items-start gap-12">
                    <div className="space-y-6">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/722e7e6e-43c7-4100-b2fa-6d06300e8944.JPG"
                                alt="Various commercial roof types"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="commercial building aerial"
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
                                        data-ai-hint="roofing material"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4 pt-6">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                                COMMERCIAL ROOF TYPES
                            </h2>
                            <p className="text-muted-foreground text-base">
                                Choosing the right roofing material is crucial for the longevity and performance of your commercial property. At Good Guys, we offer a wide range of commercial roofing systems to meet the diverse needs of Houston, TX businesses. Our experienced team will help you select the best option based on your building's structure, budget, and local climate challenges. From durable metal roofing to energy-efficient TPO and PVC systems, we provide expert installation and high-quality materials to ensure your investment is protected for years to come.
                            </p>
                        </div>
                    </div>

                    <div className="sticky top-24">
                       <GetStarted />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
