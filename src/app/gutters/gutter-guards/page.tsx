
import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/ed070e30-e6e3-42b5-93f0-1ac2eeeac6c6.jpg', alt: 'Gutter guard on a roof', dataAiHint: 'gutter guard' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/6a2ead8a-d672-400b-9e88-14cddfe9d959.jpg', alt: 'Gutter guard close up', dataAiHint: 'gutter mesh' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/ddfce865-e3db-41d5-8f81-e1cec35226f1.jpg', alt: 'Gutter with guard', dataAiHint: 'clean gutter' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/671e9400-3f3d-4f7c-8c31-d572efff71b8.jpg', alt: 'Another gutter guard view', dataAiHint: 'gutter guard installation' },
];

export default function GutterGuardsPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    GO-TO GUTTER GUARD SOLUTIONS IN FORT WORTH
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    Our team has a solution that can keep leaves and debris from clogging your gutters every year.
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
                                Gutter Guards
                            </h2>
                            <p className="content-description">
                                Are you fed up with your gutters clogging every year? The solution could be as simple as a gutter guard installation from our team. At Good Guys, we have over 15 years of experience in the roofing and gutter industry. Our Fort Worth gutter guard installers can help you find the right solution for your home.
                            </p>
                             <p className="content-description">
                                When it comes to something as important as your exterior, you need a team that's willing to go above and beyond. That team is Good Guys, with a BBB-accreditation and an A+ rating for excellence. As a family-owned and operated business, we prioritize customer service during every remodel. Enjoy clear communication and tailored solutions when working with our team on your gutter guards.
                            </p>
                        </div>
                    </div>

                    <div className="sticky top-24">
                       <GetStarted subtitle="No more clogs. Earn loyalty points + inspection credit. Request gutter guard install!" />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
