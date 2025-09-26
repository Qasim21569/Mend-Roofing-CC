
import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/original/f8b1adf1-9c4a-433a-bc38-df2ab404bf3a.jpg', alt: 'Commercial roof work in progress' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/original/df3180c9-46cd-4079-a576-999c381033bc.jpg', alt: 'Commercial roofing materials' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/original/8a216c8a-4dcb-4c2f-afb7-8fcc472adb61.jpg', alt: 'Large commercial roof' },
];

export default function CommercialRoofReplacementPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary uppercase">
                    COMMERCIAL ROOF REPLACEMENTS IN FORT WORTH
                </h1>
                 <p className="max-w-4xl mx-auto text-muted-foreground md:text-lg mt-4">
                    We'll work closely with you to choose a new roofing system that covers it all—from better storm protection to enhanced warranty coverage.
                </p>
            </div>
        </section>

        <section className="w-full pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 items-start gap-12">
                    <div className="space-y-6">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/original/83910682-4fce-48ad-8354-961d59094c90.jpg"
                                alt="Commercial Roof Replacement"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="commercial building construction"
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
                                        data-ai-hint="roofing work"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4 pt-6">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                                COMMERCIAL ROOF REPLACEMENT
                            </h2>
                            <p className="text-muted-foreground text-base">


                                Your roofing system plays an essential role in keeping your business safe. If your exterior is aged, storm damaged, or worn out, it's time to consider professional FORT WORTH commercial roof services. Good Guys Roofing is a commercial roofing company with 15+ years of experience and a Better Business Bureau accreditation, earning us the title of "Best Roofer in FORT WORTH." We're prepared to enhance the integrity of your building with comprehensive roof replacement services that help you feel confident in your property's ability to stay strong.

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
