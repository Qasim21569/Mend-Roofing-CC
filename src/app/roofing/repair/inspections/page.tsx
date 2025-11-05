
"use client";

import { GetStarted } from "@/components/get-started";
import Image from "next/image";
import { CheckCircle2, Shield, DollarSign, Clock, Home, Phone, AlertTriangle, CheckCircle, FileCheck, Award, Building2, MapPin, Star, Wind, TrendingUp, CalendarDays, Wrench, Droplets, Zap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/80ebba77-6367-4afe-8df8-90a75d2cb736.jpg', alt: 'Roof inspection', dataAiHint: 'roof inspection' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/f25e3424-7af9-417a-ad7f-3bd870d09883.jpg', alt: 'Roof inspection tools', dataAiHint: 'inspection tools' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/0369a1d0-56e4-4b97-9b0a-5d2cb0c7cc43.jpg', alt: 'Roof assessment', dataAiHint: 'roof assessment' },
];

const inspectionServices = [
    {
        name: "Shingle & Tile Condition Assessments",
        description: "Identify cracks, curling, missing shingles, and wear.",
        icon: Home
    },
    {
        name: "Flashing & Sealant Evaluations",
        description: "Inspect flashing, skylights, chimneys, and vents to prevent leaks.",
        icon: Shield
    },
    {
        name: "Structural Integrity Analysis",
        description: "Full roof check for sagging areas, soft spots, or decking issues.",
        icon: Building2
    },
    {
        name: "Gutter & Drainage Inspection",
        description: "Ensure water flows correctly and prevents damage.",
        icon: Droplets
    },
    {
        name: "Storm & Hail Damage Inspections",
        description: "Document storm damage for repairs and insurance claims.",
        icon: Wind
    },
    {
        name: "Pre-Sale & Real Estate Roof Inspections",
        description: "Provide accurate inspection reports for home buyers and sellers.",
        icon: FileCheck
    }
];

const whyMatter = [
    {
        title: "Catch Issues Early",
        description: "Identify small problems before they become expensive repairs.",
        icon: AlertTriangle
    },
    {
        title: "Storm Damage Detection",
        description: "Inspections uncover hidden hail and wind damage.",
        icon: Wind
    },
    {
        title: "Extend Roof Lifespan",
        description: "Regular inspections help maximize the life of your roof.",
        icon: TrendingUp
    },
    {
        title: "Stay Insurance & Warranty Compliant",
        description: "Ensure compliance with policies and warranties.",
        icon: Shield
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
        answer: "Yes, we carry all state-required licensing and are fully insured up to $2,000,000. We also have third-party policies with Directorii and Google Guarantee for extra peace of mind."
    },
    {
        question: "Does insurance cover my roof replacement?",
        answer: "Insurance coverage for roof replacement depends on the cause of damage and your specific policy. We can help assess damage and work with your insurance company to determine coverage. Storm damage, hail, and wind damage are typically covered, while normal wear and tear may not be."
    },
    {
        question: "Can I finance my roof replacement?",
        answer: "Yes, we offer flexible financing options to make your roof replacement affordable. Our team works with you to find a payment plan that fits your budget, with various financing options available for qualified customers."
    },
    {
        question: "How can I get a roofing estimate?",
        answer: "You can call (346) 236-3652 or fill out the online contact form to request a free roofing estimate. Our team will assess your roof and provide a detailed quote."
    }
];

export default function RoofInspectionsPage() {
    return (
      <div className="flex flex-col bg-background">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="hero-heading uppercase">
                        FAST, RELIABLE, & TRUSTWORTHY HOUSTON ROOFING COMPANY
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 uppercase">
                        Roof Inspection Services in Houston, TX
                    </h2>
                    <p className="hero-description max-w-4xl mx-auto mt-4">
                        Protecting your home or business starts with a strong, well-maintained roof. At Mend Roofing, we provide detailed roof inspection services across Houston and surrounding areas. Our inspections identify small issues before they turn into costly repairs, helping you extend the life of your roof.
                    </p>
                    <p className="hero-description max-w-4xl mx-auto mt-4">
                        Whether you need a routine maintenance check, storm damage assessment, or inspection before buying or selling property, our licensed team is here to help. As a trusted roofing contractor in Houston, we also provide expert recommendations when roof replacement or repairs are necessary.
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
                                Free roof inspection: (346) 236-3652
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
                                src="https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/fb1989f6-2cdd-48ea-96de-fa90d1ec2fe1.jpg"
                                alt="Roof Inspection Services in Houston, TX"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="roof inspection"
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
                       <GetStarted subtitle="Schedule your comprehensive roof inspection today. Get your free assessment!" />
                    </div>
                </div>
            </div>
        </section>

        {/* Comprehensive Roof Inspection Services Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Comprehensive Roof Inspection Services
                    </h2>
                    <p className="content-description text-center">
                        Our residential and commercial roof inspections provide a complete evaluation of your roofing system, including:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {inspectionServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                                    <h3 className="content-heading uppercase mb-3 text-sm">{service.name}</h3>
                                    <p className="content-description text-sm">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-md mt-8">
                        <p className="content-description">
                            If damage is found, the team offers guidance on the best next steps, including repairs or replacements when necessary.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Why Roof Inspections Matter Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Why Roof Inspections Matter
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {whyMatter.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                                    <h3 className="content-heading uppercase mb-3">{item.title}</h3>
                                    <p className="content-description text-sm">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center mb-8">
                        <h2 className="content-heading uppercase text-2xl mb-4">
                            FAQ Highlights
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
                                24285 Katy Fwy Suite 300-18, Katy, TX 77494, United States
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
                                24624 Interstate 45 200, Spring, TX 77386
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
                                Roof Expert will ask questions to understand your situation and pick a date/time
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-md">
                            <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h3 className="content-heading uppercase mb-3">3. Quality Work</h3>
                            <p className="content-description text-sm">
                                Work Performed—100% customer satisfaction, over 100+ 5-star reviews
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

