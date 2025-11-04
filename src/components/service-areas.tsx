
import { Button } from "./ui/button";
import Link from "next/link";

const apiKey = "AIzaSyBm0LkkTim0WuseYwItow8Cs71QC077VOc";
const springMapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=24624+Interstate+45+200+Spring+TX+77386&zoom=15`;
const katyMapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=24285+Katy+Fwy+Suite+300-18+Katy+TX+77494&zoom=15`;

const serviceAreas = [
  "Spring", "Tomball", "Katy", "The Woodlands", "Conroe",
  "Magnolia", "Montgomery", "Pearland", "San Antonio",
  "Midtown", "Galleria/Uptown", "Heights", "Montrose",
  "Sugar Land", "Pasadena", "Downtown Houston", "Clear Lake"
];

export function ServiceAreas() {
    return (
        <section className="bg-background py-16 sm:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                        Areas We Serve
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We proudly offer services to a wide range of locations, with a focus on
                    </p>
                </div>

                {/* Service Areas Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
                    {serviceAreas.map((area, index) => (
                        <div key={index} className="text-center p-4 bg-card rounded-lg border border-border">
                            <p className="text-foreground font-medium">{area}</p>
                        </div>
                    ))}
                </div>

                {/* Location Blocks with Maps */}
                <div className="space-y-12">
                    {/* Spring Location */}
                    <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                                    Spring Location
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Phone</p>
                                        <a href="tel:2813053162" className="text-lg font-semibold text-primary hover:underline">
                                            (281) 305-3162
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Address</p>
                                        <p className="text-foreground">
                                            24624 Interstate 45 200<br />
                                            Spring, TX 77386
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-96 lg:h-full">
                                <iframe
                                    className="w-full h-full border-0"
                                    src={springMapSrc}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Katy Location */}
                    <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                                    Katy Location
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Phone</p>
                                        <a href="tel:3462363652" className="text-lg font-semibold text-primary hover:underline">
                                            (346) 236-3652
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Address</p>
                                        <p className="text-foreground">
                                            24285 Katy Fwy Suite 300-18<br />
                                            Katy, TX 77494
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-96 lg:h-full">
                                <iframe
                                    className="w-full h-full border-0"
                                    src={katyMapSrc}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
