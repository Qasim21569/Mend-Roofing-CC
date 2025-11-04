
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const videoPlaceholder = "/Mend Logo/Mend-Roofing-Logo-white-border-10px.webp";

export function AboutUs() {
    return (
        <section className="py-16 sm:py-24 bg-destructive text-destructive-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                            <Image 
                                src={videoPlaceholder} 
                                alt="Mend Roofing - Houston roofing contractor" 
                                fill
                                className="object-contain bg-black p-4"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="content-heading uppercase text-destructive-foreground/80 mb-2">ABOUT US</p>
                        <h2 className="hero-heading text-white mb-4">
                            LOCAL HOUSTON ROOFERS
                        </h2>
                        <p className="content-description text-destructive-foreground/80 mb-8">
                            Led by Zach Garza, Mend Roofing delivers dependable roof repair and replacement services in Southeast Texas, utilizing premium materials to safeguard homes against harsh weather conditions. With over 20 years of combined experience, we're a GAF Certified roofing company recognized for exceptional customer satisfaction. We pride ourselves on accountability, transparency, and alignment with our clients' needs.
                        </p>
                        <div className="flex gap-4">
                            <Button asChild className="bg-white text-black hover:bg-gray-200">
                                <Link href="#get-started">GET A FREE ESTIMATE</Link>
                            </Button>
                            <Button asChild variant="outline" className="bg-white border-white text-black hover:bg-gray-200">
                                <Link href="/about">LEARN MORE</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
