
"use client";

import { GetStarted } from "@/components/get-started";
import Image from "next/image";
import { CheckCircle2, Shield, DollarSign, Clock, Home, Phone, AlertTriangle, CheckCircle, FileCheck, Award, Building2, MapPin, Star, Wind, TrendingUp, CalendarDays, Sparkles, Droplets, Sun, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/original/f8b1adf1-9c4a-433a-bc38-df2ab404bf3a.jpg', alt: 'Roof restoration in progress', dataAiHint: 'roof restoration work' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/original/df3180c9-46cd-4079-a576-999c381033bc.jpg', alt: 'Roof cleaning and restoration', dataAiHint: 'roof cleaning' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/original/8a216c8a-4dcb-4c2f-afb7-8fcc472adb61.jpg', alt: 'Restored commercial roof', dataAiHint: 'restored roof' },
];

const benefits = [
    {
        title: "Cost-Effective Solution",
        description: "A smart alternative to full replacement, our roof restoration services offer affordable upgrades without sacrificing quality.",
        icon: DollarSign
    },
    {
        title: "Improved Energy Efficiency",
        description: "Our protective roof coatings and reflective roof coatings help reduce heat absorption, improving indoor comfort and lowering energy costs.",
        icon: TrendingUp
    },
    {
        title: "Enhanced Curb Appeal",
        description: "Whether you're refreshing shingles, tiles, or metal panels, aesthetic roof upgrades give your property a clean, modern look.",
        icon: Sparkles
    },
    {
        title: "Increased Durability",
        description: "Repairs and roof waterproofing strengthen your system for long-lasting, durable roofing solutions.",
        icon: Shield
    },
    {
        title: "Leak Prevention",
        description: "Targeted repair and roof sealing address weak points to eliminate water entry and future damage.",
        icon: Droplets
    }
];

const services = [
    {
        name: "Roof Inspection & Assessment",
        description: "We perform detailed evaluations to detect structural issues and recommend effective repairs.",
        icon: FileCheck
    },
    {
        name: "Roof Cleaning & Debris Removal",
        description: "Our team removes dirt, algae, moss, and provides debris removal from roof surfaces to restore their original appearance.",
        icon: Wrench
    },
    {
        name: "Roof Repairs",
        description: "From shingle repair to structural fixes, we restore your roof's strength and integrity.",
        icon: Home
    },
    {
        name: "Sealing & Waterproofing",
        description: "We apply high-performance roof waterproofing systems and sealants to protect against rain, leaks, and moisture.",
        icon: Shield
    },
    {
        name: "Repainting & Recoating",
        description: "Our finishing process includes roof repainting and roof recoating using UV-resistant, weatherproof coatings.",
        icon: Sparkles
    },
    {
        name: "Tile Roof Restoration",
        description: "Professional restoration for tile roofing systems to extend lifespan and enhance appearance.",
        icon: Award
    },
    {
        name: "Metal Roof Restoration",
        description: "Expert restoration services for metal roofing to maintain durability and performance.",
        icon: Building2
    },
    {
        name: "Shingle Repair",
        description: "Comprehensive shingle repair services to address damage and restore protection.",
        icon: Home
    }
];

const serviceAreas = [
    "Spring",
    "Tomball",
    "Katy",
    "The Woodlands",
    "Conroe",
    "Magnolia",
    "Montgomery",
    "Pearland",
    "San Antonio",
    "Midtown",
    "Galleria/Uptown",
    "Heights",
    "Montrose",
    "Sugar Land",
    "Pasadena",
    "Downtown Houston",
    "Clear Lake"
];

const faqs = [
    {
        question: "Are you licensed and insured?",
        answer: "Yes, we carry all state-required licensing and are fully insured up to $2,000,000. We also have third-party policies with Directorii and Google Guarantee for extra peace of mind for our customers."
    }
];

export default function RoofRestorationPage() {
    return (
      <div className="flex flex-col bg-background">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="hero-heading uppercase">
                        ROOF RESTORATION SERVICES IN HOUSTON, TX
                    </h1>
                    <p className="hero-description max-w-4xl mx-auto mt-4">
                        At Mend Roofing, we provide expert roof restoration services designed to extend roof lifespan, enhance durability, and improve overall roof aesthetics. Whether your roof has aged over time or suffered storm related damage, our team delivers professional roof restoration tailored to your home or business.
                    </p>
                    <p className="hero-description max-w-4xl mx-auto mt-4">
                        We proudly serve as a roofing contractor in Katy and a trusted roofing company across Houston, Spring, Cypress, Tomball, and The Woodlands. If you're looking for roof installation near me or a dependable roofing contractor Spring, Mend Roofing offers the experience and service you can trust.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
                        <div className="bg-card p-4 rounded-lg shadow-md text-center">
                            <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-2" />
                            <p className="content-description font-semibold">Licensed, Insured & Certified</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg shadow-md text-center">
                            <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                            <p className="content-description font-semibold">100% Satisfaction Guaranteed</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg shadow-md text-center">
                            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                            <p className="content-description font-semibold">Free Estimates 7 Days A Week</p>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                            <Link href="tel:3462363652">
                                <Phone className="mr-2 h-5 w-5" />
                                Free Estimate (346) 236-3652
                            </Link>
                        </Button>
                        <p className="text-sm text-muted-foreground">
                            Fill out below and we'll get back to you asap
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Main Content Section with Images */}
        <section className="w-full pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 items-start gap-12">
                    <div className="space-y-6">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/original/83910682-4fce-48ad-8354-961d59094c90.jpg"
                                alt="Roof Restoration in Houston, TX"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="roof restoration"
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
                                        data-ai-hint={image.dataAiHint}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="sticky top-24">
                       <GetStarted subtitle="Transform your roof with professional restoration services. Get your free estimate today!" />
                    </div>
                </div>
            </div>
        </section>

        {/* What is Roof Restoration Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        What is Roof Restoration?
                    </h2>
                    <p className="content-description text-center">
                        Roof restoration is a comprehensive process that includes roof inspection and assessment, cleaning, repairs, roof sealing, and finishing with roof repainting or roof recoating. It's a cost-effective roof restoration option that helps prevent further damage, boosts curb appeal, and improves energy-efficient roofing performance through the application of reflective roof coatings and UV resistant roof coatings.
                    </p>
                    <p className="content-description text-center">
                        Homeowners considering roof installation Spring or exploring alternatives to a full replacement can benefit from this smart approach.
                    </p>
                </div>
            </div>
        </section>

        {/* Benefits of Roof Restoration Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Benefits of Roof Restoration
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                                    <h3 className="content-heading uppercase mb-3">{benefit.title}</h3>
                                    <p className="content-description text-sm">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-md mt-8">
                        <p className="content-description">
                            If you're unsure whether you need a restoration or a full roofing installation in Spring, our inspection services can guide you toward the right solution.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Comprehensive Roof Restoration Services Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Comprehensive Roof Restoration Services
                    </h2>
                    <p className="content-description text-center">
                        We offer full service residential roof restoration and commercial roof restoration for all roofing systems, including tile roof restoration, metal roof restoration, and shingle repair:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                                    <h3 className="content-heading uppercase mb-3 text-sm">{service.name}</h3>
                                    <p className="content-description text-xs">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>

        {/* Why Choose Mend Roofing Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Why Choose Mend Roofing for Roof Restoration?
                    </h2>
                    <p className="content-description text-center">
                        As local roofing experts with years of industry experience, Mend Roofing provides professional roof restoration backed by quality workmanship and superior materials. We focus on long-term value through storm damage, roof restoration, preventative maintenance, and energy savings.
                    </p>
                    <p className="content-description text-center">
                        We proudly serve Spring, Cypress, Tomball, Katy, Houston, and The Woodlands, offering expert solutions that meet the needs of both residential and commercial clients. Whether you're looking for a roofing company in Houston, Cypress, or The Woodlands or comparing options for roof installation Spring we bring trusted service and results you can count on.
                    </p>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center mb-8">
                        <h2 className="content-heading uppercase text-2xl mb-4">
                            FAQ Highlight
                        </h2>
                        <p className="content-description">
                            Have questions about our services? We're here to help! Contact us anytime, and our expert team will provide the answers and support you need.
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem 
                                key={index} 
                                value={`item-${index}`} 
                                className="border border-border rounded-lg px-6 bg-card"
                            >
                                <AccordionTrigger className="text-left hover:no-underline py-6">
                                    <span className="text-lg md:text-xl font-semibold text-foreground pr-4">
                                        {faq.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-6 text-muted-foreground text-base md:text-lg">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>

        {/* Service Areas Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6 justify-center">
                        <MapPin className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Areas We Serve
                        </h2>
                    </div>
                    <p className="content-description text-center">
                        We proudly serve the following areas:
                    </p>
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                        {serviceAreas.map((area, index) => (
                            <div key={index} className="bg-card p-4 rounded-lg shadow-sm text-center">
                                <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                                <span className="content-description font-semibold">{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Information Section */}
        <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold uppercase" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                        Contact Information
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <a href="tel:3462363652" className="text-4xl font-bold hover:opacity-80 transition-opacity flex items-center justify-center gap-3">
                                <Phone className="h-10 w-10" />
                                (346) 236-3652
                            </a>
                            <p className="text-lg opacity-90 mt-2">
                                Main Office - Katy
                            </p>
                            <p className="text-sm opacity-75">
                                Address: 24285 Katy Fwy Suite 300-18, Katy, TX 77494, United States
                            </p>
                        </div>
                        <div className="pt-4 border-t border-primary-foreground/20">
                            <a href="tel:2813053162" className="text-2xl font-bold hover:opacity-80 transition-opacity flex items-center justify-center gap-3">
                                <Phone className="h-8 w-8" />
                                (281) 305-3162
                            </a>
                            <p className="text-lg opacity-90 mt-2">
                                Spring Office
                            </p>
                            <p className="text-sm opacity-75">
                                Address: 24624 Interstate 45 200, Spring, TX 77386, United States
                            </p>
                        </div>
                        <div className="pt-4">
                            <p className="text-lg opacity-90">
                                Office hours: 24 Hours
                            </p>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-primary-foreground/20">
                        <p className="text-sm opacity-75 max-w-3xl mx-auto">
                            By submitting this form, I agree to be contacted by Mend Roofing even if I'm on a Do Not Call List. I agree to this contact from Mend Roofing by email, phone call, or text message at my contact information provided above. I understand that this contact may be generated by an automated technology such as an automated phone dialing system and may use prerecorded voice or messaging. I understand that my agreement to the foregoing is not a condition to purchase any products or services from Mend Roofing.
                        </p>
                        <p className="text-sm opacity-75 mt-4 max-w-3xl mx-auto">
                            By submitting this form, I also consent to receive SMS messages from Mend Roofing. I understand that message and data rates may apply, and that I may reply STOP to opt-out of future messaging or HELP for assistance. Message frequency may vary. See our <Link href="#" className="underline hover:opacity-80">Privacy Policy</Link> and <Link href="#" className="underline hover:opacity-80">Terms & Conditions</Link> for more details.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Next Steps Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <h2 className="content-heading uppercase text-2xl">
                        Next Steps
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-card p-6 rounded-lg shadow-md">
                            <FileCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h3 className="content-heading uppercase mb-3">1. Contact Mend Roofing</h3>
                            <p className="content-description text-sm">
                                Contact Mend Roofing by phone or contact form to get started
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-md">
                            <CalendarDays className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h3 className="content-heading uppercase mb-3">2. Schedule Appointment</h3>
                            <p className="content-description text-sm">
                                Roof Expert will ask questions and set a date/time for your inspection
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-md">
                            <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h3 className="content-heading uppercase mb-3">3. Quality Work</h3>
                            <p className="content-description text-sm">
                                Work performed with 100% satisfaction, over 100+ 5-star reviews
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                            <Link href="tel:3462363652">
                                <Phone className="mr-2 h-5 w-5" />
                                Get Started Today
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}

