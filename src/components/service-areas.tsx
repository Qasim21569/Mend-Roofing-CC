
import { Button } from "./ui/button";
import Link from "next/link";

const apiKey = "AIzaSyBm0LkkTim0WuseYwItow8Cs71QC077VOc";
const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Fort+Worth,TX&center=32.7555,-97.3308&zoom=10`;

export function ServiceAreas() {
    return (
        <section className="bg-destructive text-white py-16 sm:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="hero-heading text-white uppercase">WE QUELL THE STORM</h2>
                </div>
                <div className="bg-white text-foreground p-8 shadow-2xl rounded-lg">
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                className="w-full h-full border-0"
                                src={mapSrc}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-sm font-bold text-destructive uppercase mb-2" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>SERVICE AREAS</p>
                            <h3 className="text-3xl font-bold text-gray-800 uppercase mb-4" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                                YOUR TRUSTED FORT WORTH ROOFER
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                The harsh Texas weather can quickly take its toll on local homes. But as a family-owned roofer, Good Guys knows what you need to stay strong. Get in touch with an expert roofer in your neighborhood to schedule an in-home inspection or to receive free same-day pricing.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild className="bg-destructive hover:bg-destructive/90">
                                    <Link href="#get-started">GET A FREE ESTIMATE</Link>
                                </Button>
                                <Button asChild variant="outline" className="text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white">
                                    <Link href="/service-areas">VIEW ALL CITIES</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
