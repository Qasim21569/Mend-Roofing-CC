
import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/1c8117a3-c734-497d-8b8b-a0213be15b93.jpg', alt: 'Seamless gutter corner', dataAiHint: 'gutter corner' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/c2124354-3645-4baa-aeaf-83239ab8a4b1.jpg', alt: 'Rain gutter on house', dataAiHint: 'house gutter' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/baedd0eb-228e-4897-a7ff-83ede7b57faa.jpg', alt: 'Close-up of seamless gutter', dataAiHint: 'gutter closeup' },
];

export default function SeamlessGuttersPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    PROFESSIONALLY INSTALLED SEAMLESS GUTTERS IN FORT WORTH
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    Our expert gutter installers provide high-performance, seamless gutter solutions tailored to your home's specific dimensions.
                </p>
            </div>
        </section>

        <section className="w-full pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 items-start gap-12">
                    <div className="space-y-6">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/64d8bc84-0942-410e-9899-1eeb8cd02cc4.jpg"
                                alt="Seamless Gutter Installation"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="seamless gutter"
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
                                SEAMLESS GUTTERS
                            </h2>
                            <p className="content-description">
                                At Good Guys, we're a family-owned and operated gutter company offering the highest quality exterior remodeling services in the region. Our business has been trusted since 2012 to provide dependable installations using top-tier products. Over the years, we're proud to have earned recognition as a top business with an accreditation and an A+ rating from the Better Business Bureau.
                            </p>
                        </div>
                    </div>

                    <div className="sticky top-24">
                       <GetStarted subtitle="Upgrade to seamless and save with referral rewards. Get a seamless gutter estimate!" />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
