
import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: "https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/bba172a5-13a2-4d33-af2b-1a0c84c2b90a.jpg", alt: "Interior painting main image", dataAiHint: "living room interior" },
    { src: "https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/adb6a66c-0574-46cb-9530-f4430e220b7e.jpg", alt: "Painting detail", dataAiHint: "paint roller" },
    { src: "https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/c501e197-6ff4-4dcd-a8c3-04c8a2d469f0.jpg", alt: "Painter at work", dataAiHint: "painter working" },
    { src: "https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/0d51386d-8b62-47d3-b9c8-7528c55a50a0.jpg", alt: "Freshly painted room", dataAiHint: "painted room" },
];

export default function InteriorPaintingPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    PRECISION INTERIOR PAINTING SERVICES IN FORT WORTH
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    Our interior painters provide personalized solutions to help each homeowner reach their goals, without compromise.
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
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint={images[0].dataAiHint}
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
                                        data-ai-hint={image.dataAiHint}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 pt-6">
                            <h2 className="content-heading uppercase">
                                INTERIOR PAINTING COMPANY
                            </h2>
                            <p className="content-description">
                                Remodeling your interior with fresh paint is a great way to modernize your home without breaking the bank. At Good Guys, we specialize in professional interior painting services in Fort Worth. Our BBB-accredited, A+ rated, and family-owned business has been trusted by local homeowners to deliver outstanding services since 2012.
                            </p>
                            <p className="content-description">
                                Whether you're having your home painted for yourself or to boost your home's appeal when selling, our team has the solution. We offer great products, quick painting, and clean job sites. Our goal is to help you achieve a more beautiful home interior that will last over the years.
                            </p>
                        </div>
                    </div>

                    <div className="sticky top-24">
                       <GetStarted subtitle="Interior upgrade? Use loyalty rewards. Request your interior painting estimate!" />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
