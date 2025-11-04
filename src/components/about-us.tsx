
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const aboutImage = "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export function AboutUs() {
    return (
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                        <Image 
                            src={aboutImage} 
                            alt="Mend Roofing - Houston roofing contractor" 
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                            About Mend Roofing
                        </h2>
                        <div className="space-y-4 text-base md:text-lg text-muted-foreground">
                            <p>
                                <strong className="text-foreground">Led by Zach Garza</strong>, Mend Roofing delivers dependable roof repair and replacement services throughout <strong className="text-foreground">Southeast Texas</strong>, utilizing premium materials to safeguard homes against harsh weather conditions.
                            </p>
                            <p>
                                With over <strong className="text-primary text-xl">20 years combined experience</strong>, we're a <strong className="text-primary">GAF Certified</strong> roofing company recognized for exceptional customer satisfaction.
                            </p>
                            <p>
                                Our core values include <strong className="text-foreground">accountability, transparency, and alignment</strong> with our clients' needs. We combine premium products, advanced technology, and expert craftsmanship to deliver roofing solutions that stand the test of time.
                            </p>
                        </div>
                        <div className="flex gap-4 mt-8">
                            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                                <Link href="#get-started">GET A FREE ESTIMATE</Link>
                            </Button>
                            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                                <Link href="/about">LEARN MORE</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
