
import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/03309fbe-de39-4fb6-a389-eaa280a6a534.jpg', alt: 'Roof type 1', dataAiHint: 'asphalt shingles' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/74b5bf00-84de-4632-914b-3622bbe18af5.jpg', alt: 'Roof type 2', dataAiHint: 'metal roof' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/667db814-077d-4039-b2c4-accf60568d4c.JPG', alt: 'Roof type 3', dataAiHint: 'tile roof' },
];

export default function RoofTypesPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    PRECISION-BASED ROOFING IN Houston, TX
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    Customizing your roof is easy when you have access to the industry's leading products covered by advanced warranties.
                </p>
            </div>
        </section>

        <section className="w-full pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 items-start gap-12">
                    <div className="space-y-6">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/b77cc554-44e4-48ff-8aaf-e361fb4876de.jpg"
                                alt="Various commercial roof types"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="roof valley"
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
                                Roof Types
                            </h2>
                            <p className="content-description">
                                Protecting your home isn't as simple as a new roof installation. At US Roofing, we find ways to keep your family safe with endurance-based roofing services in Houston, TX. We quell the storm with weather-resistant products that can be fully customized so that you can achieve better exterior performance and desirable curb appeal. Whether it's time to schedule reliable roof repairs or a residential roof replacement, we'll make sure your exterior is covered with top-of-the-line materials backed by manufacturer warranties.
                            </p>
                            <h3 className="content-heading uppercase pt-4">
                                COST-EFFECTIVE Houston, TX ASPHALT SHINGLES
                            </h3>
                             <p className="content-description">
                                You deserve access to top-performing solutions at any budget. Since 2012, our family-owned Houston, TX roofing company has specialized in top-rated materials for every home. Our Houston, TX asphalt shingles are a cost-effective way to get long-term protection that's still stylish.
                            </p>
                        </div>
                    </div>

                    <div className="sticky top-24">
                       <GetStarted subtitle="Explore your perfect roof—and earn referral rewards doing it. Get your roof estimate today!" />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
