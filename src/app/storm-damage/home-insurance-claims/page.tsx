import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: "/images/storm-damage/Insurance-claim/insurance-claim1.png", alt: "Insurance claim documentation" },
    { src: "/images/storm-damage/Insurance-claim/insurance-claim2.png", alt: "Adjuster inspection support" },
    { src: "/images/storm-damage/Insurance-claim/insurance-claim3.png", alt: "Storm damage assessment" },
    { src: "/images/storm-damage/Insurance-claim/insurance-claim4.png", alt: "Homeowner insurance claim help" },
];

export default function HomeInsuranceClaimsPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    ROOF DAMAGE CLAIMS IN FORT WORTH
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    We'll help you file claims professionally so that you can get approved and begin your prompt storm restoration.
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
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4 pt-6">
                            <h2 className="content-heading uppercase">
                                Home Insurance Claim Repairs
                            </h2>
                            <p className="content-description">
                                Unsure where to begin your Fort Worth storm restoration process? At Good Guys Roofing, we treat every step with precision to help you recover quickly. We know that dealing with roof damage isn't easy, so we're here to provide helpful guidance along the way. As we quell the storm, we look at the whole picture—and that begins with professional insurance roof claims.
                            </p>
                            <p className="content-description">
                                The steps following a storm can be overwhelming as high winds, heavy rain, and fallen trees cause damage to your property. At Good Guys Roofing, we're here to clean up the mess with professional storm damage services and attentive guidance through the complicated Fort Worth roof insurance claims process.
                            </p>
                        </div>
                    </div>

                    <div className="sticky top-24">
                       <GetStarted subtitle="See how recent weather has impacted your roof and siding today" />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}


