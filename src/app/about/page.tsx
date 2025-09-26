
import { GetStarted } from "@/components/get-started";
import Image from "next/image";

const logoUrl = "https://firebasestorage.googleapis.com/v0/b/jackpot-jungle-c1020.firebasestorage.app/o/GOODGUYS3.png?alt=media&token=1e778559-5ca2-4999-b705-015633edea42";

const images = [
    { src: logoUrl, alt: 'Good Guys Logo 1' },
    { src: logoUrl, alt: 'Good Guys Logo 2' },
    { src: logoUrl, alt: 'Good Guys Logo 3' },
    { src: logoUrl, alt: 'Good Guys Logo 4' },
];

export default function AboutUsPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h1 className="hero-heading uppercase">
                    LEARN ABOUT OUR TRUSTED FAMILY BUSINESS IN FORT WORTH
                </h1>
                 <p className="hero-description max-w-4xl mx-auto mt-4">
                    Our exterior remodeling company has been the go-to choice for property owners across the region for years.
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
                                At Good Guys, we're more than an exterior remodeling company; we're a family-owned and operated business with over 15 years of experience. We proudly serve Fort Worth and the surrounding areas with the highest quality products and services in the industry. Over the years, we've built a reputation for delivering high-quality craftsmanship, honest service, and reliable results for homeowners and businesses alike.
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
