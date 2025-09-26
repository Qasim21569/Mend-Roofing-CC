
import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: "https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/2ac826a8-2598-4a2d-91ef-00d2fce21155.jpg", alt: "Exterior painting main image", dataAiHint: "house exterior painting" },
    { src: "https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/e753ca02-9426-432a-aa38-5f74ffb68a3d.jpg", alt: "Painting detail", dataAiHint: "painting brush" },
    { src: "https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/d239a155-7cb8-47ea-81c1-29df99e1d8d1.jpg", alt: "Painter on a ladder", dataAiHint: "painter ladder" },
    { src: "https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/9f54cce9-61ac-4a87-aa02-54d3dd8d7e65.jpg", alt: "Freshly painted wall", dataAiHint: "painted wall" },
];

export default function ExteriorPaintingPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    REPUTABLE EXTERIOR PAINTING SERVICES IN FORT WORTH
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    Our team is here to help you upgrade your home's exterior with a beautiful paint job that turns heads.
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
                                EXTERIOR PAINTING COMPANY
                            </h2>
                            <p className="content-description">
                                Does your home need a fresh coat of paint? Whether you're looking for a modern refresh or a durable coating, we have you covered. At Good Guys, we specialize in house painting in Fort Worth, focused on lasting quality. Our family-owned business has been trusted by countless homeowners over the years to improve the look and feel of their homes. You can count on our team, knowing we're BBB-accredited and A+ rated for professionalism and integrity. Our top-tier products and services provide peace of mind every step of the way.
                            </p>
                             <h3 className="content-heading uppercase pt-4">
                                SKILLED EXTERIOR HOUSE PAINTERS
                            </h3>
                            <p className="content-description">
                                A quality paint job is about more than just color. It’s about professional-grade application, high-quality materials, and a dedicated team. Our skilled exterior house painters in Fort Worth are committed to delivering flawless results that not only look great but also provide long-lasting protection for your home.
                            </p>
                        </div>
                    </div>

                    <div className="sticky top-24">
                       <GetStarted subtitle="Get a full exterior refresh this season. Book your exterior painting today!" />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
