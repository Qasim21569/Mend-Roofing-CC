
import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const logoUrl = "/Mend Logo/Mend-Roofing-Logo-white-border-10px.webp";

const images = [
    { src: logoUrl, alt: 'Mend Roofing - Repair, Restore, Protect' },
    { src: logoUrl, alt: 'Mend Roofing Logo' },
    { src: logoUrl, alt: 'Mend Roofing Houston' },
    { src: logoUrl, alt: 'Mend Roofing Texas' },
];

export default function AboutUsPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    LEARN ABOUT MEND ROOFING - YOUR TRUSTED HOUSTON ROOFING COMPANY
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    Led by Zach Garza with over 20 years of combined experience, we're a GAF Certified roofing company serving Houston and Southeast Texas.
                </p>
            </div>
        </section>

        <section className="w-full pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 items-start gap-12">
                    <div className="space-y-6">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center p-4">
                            <Image
                                src={images[0].src}
                                alt={images[0].alt}
                                width={400}
                                height={100}
                                className="object-contain"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {images.slice(1).map((image, index) => (
                                <div key={index} className="relative w-full aspect-square rounded-md overflow-hidden shadow-md bg-gray-100 flex items-center justify-center p-2">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={100}
                                        height={25}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 pt-6">
                            <h2 className="content-heading uppercase">
                                ABOUT US
                            </h2>
                            <p className="content-description">
                                At Mend Roofing, we're more than a roofing company; we're a locally-owned business led by Zach Garza with over 20 years of combined experience. We proudly serve Houston, Spring, Katy, The Woodlands, and surrounding areas with premium roofing materials and expert craftsmanship. As a GAF Certified roofing company, fully licensed and insured up to $2,000,000, we've built our reputation on accountability, transparency, and alignment with our clients' needs. Our commitment is to deliver long-lasting roofing solutions that protect your home against harsh Texas weather.
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
