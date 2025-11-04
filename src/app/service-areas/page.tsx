
"use client";

import { GetStarted } from "@/components/get-started";

const serviceAreas = [
    'Spring',
    'Katy',
    'The Woodlands',
    'Tomball',
    'Conroe',
    'Cypress',
    'Magnolia',
    'Montgomery',
    'Pearland',
    'Sugar Land',
    'Pasadena',
    'Downtown Houston',
    'Midtown Houston',
    'Galleria / Uptown',
    'Heights',
    'Montrose',
    'Clear Lake',
];

export default function ServiceAreasPage() {
    const apiKey = "AIzaSyBm0LkkTim0WuseYwItow8Cs71QC077VOc";
    
    const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Houston,TX&center=29.7604,-95.3698&zoom=10`;

    return (
        <div className="flex flex-col bg-background">
            <section className="w-full py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary uppercase">
                        TRUSTED ROOFING SERVICES ACROSS HOUSTON & SOUTHEAST TEXAS
                    </h1>
                    <p className="max-w-4xl mx-auto text-muted-foreground md:text-lg mt-4">
                        Mend Roofing proudly serves homeowners and businesses throughout the Houston area with expert roof repair, replacement, and installation services. GAF Certified and fully insured.
                    </p>
                </div>
            </section>

            <section className="w-full pb-16 md:pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 items-start gap-12">
                        <div className="space-y-6">
                            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src={mapSrc}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className="space-y-4 pt-6">
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                                    SERVICE AREAS
                                </h2>
                                <div className="columns-1 md:columns-2 text-muted-foreground space-y-2">
                                    {serviceAreas.map((area) => (
                                        <p key={area} className="mb-2">{area}</p>
                                    ))}
                                </div>
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

