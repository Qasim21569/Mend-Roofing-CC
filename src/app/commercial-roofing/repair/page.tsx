
import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/e52d1f47-5bf9-4712-a0e5-c7c647f02fce.JPG', alt: 'Commercial roof work in progress' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/c01070a0-0485-4d06-b793-5c56892a4729.JPG', alt: 'Commercial roofing materials' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/1981ca31-3c32-4c6b-ac31-27426a0274c6.JPG', alt: 'Large commercial roof' },
];

export default function CommercialRoofRepairPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary uppercase">
                    COMMERCIAL ROOF REPAIRS IN Houston, TX
                </h1>
                 <p className="max-w-4xl mx-auto text-muted-foreground md:text-lg mt-4">
                    We respond quickly to your call to provide professional inspections, cost estimates, and insurance claims assistance.
                </p>
            </div>
        </section>

        <section className="w-full pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 items-start gap-12">
                    <div className="space-y-6">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/657498aa-b49b-4d46-8f68-bd950977c417.JPG"
                                alt="Commercial Roof Repair"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="commercial building maintenance"
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
                                COMMERCIAL ROOF REPAIR
                            </h2>
                            <p className="text-muted-foreground text-base">
                                Don't let commercial roof repairs stop you from running an efficient business. At Good Guys, we offer complete roof repair services that don't interrupt operations so you can focus on what matters most. Our Houston, TX commercial roofing company has 15+ years of combined experience, making us a leader in precise solutions. Learn how we quell the storm with high-quality materials backed by strong manufacturer warranties.
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
