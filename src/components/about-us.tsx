
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const videoPlaceholder = "https://firebasestorage.googleapis.com/v0/b/jackpot-jungle-c1020.firebasestorage.app/o/GOODGUYS4.png?alt=media&token=bf7dfedc-1dd6-40ea-9b4e-89df016a0a81";

export function AboutUs() {
    return (
        <section className="py-16 sm:py-24 bg-destructive text-destructive-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                            <Image 
                                src={videoPlaceholder} 
                                alt="Good Guys local contractor" 
                                fill
                                className="object-contain bg-black p-4"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="content-heading uppercase text-destructive-foreground/80 mb-2">ABOUT US</p>
                        <h2 className="hero-heading text-white mb-4">
                            LOCAL FORT WORTH ROOFERS
                        </h2>
                        <p className="content-description text-destructive-foreground/80 mb-8">
                            Since 2012, Good Guys has made it our mission to prepare properties against severe weather. We work closely with homeowners and business managers to build lasting results, with 15+ years of industry experience. Learn how we quell the storm as a top-rated company that's always prepared with expertise, efficiency, and care.
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
