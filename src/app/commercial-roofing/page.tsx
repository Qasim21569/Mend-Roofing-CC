
"use client";

import { GetStarted } from "@/components/get-started";
import Image from "next/image";
import { CheckCircle2, Shield, DollarSign, Clock, Home, Phone, AlertTriangle, CheckCircle, FileCheck, Award, Building2, MapPin, Star, Wind, TrendingUp, CalendarDays, Wrench, Droplets, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/80ebba77-6367-4afe-8df8-90a75d2cb736.jpg', alt: 'Commercial roof repair', dataAiHint: 'commercial roof repair' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/f25e3424-7af9-417a-ad7f-3bd870d09883.jpg', alt: 'Commercial roofing work', dataAiHint: 'roofing work' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/0369a1d0-56e4-4b97-9b0a-5d2cb0c7cc43.jpg', alt: 'Commercial roof inspection', dataAiHint: 'roof inspection' },
];

const trustBadges = [
    { name: "RCAT", description: "Roofing Contractors Association of Texas" },
    { name: "Directorii.com", description: "$20,000 guarantee" },
    { name: "Conklin Roofing Systems", description: "Certified Installer" },
    { name: "GAF Certified Residential Roofing Contractor", description: "Master Elite Certification" },
    { name: "GAF: American Owned", description: "Creating American Jobs" },
];

const whyMendRoofing = [
    {
        title: "Top of the Line Professionals",
        description: "Experienced team with industry expertise"
    },
    {
        title: "Industry-Leading Warranties",
        description: "Comprehensive protection for your investment"
    },
    {
        title: "A Local Katy Roofing Company You Can Trust",
        description: "Serving the community with integrity"
    }
];

const repairTypes = [
    {
        name: "Asphalt Shingle Roof Repair",
        description: "Asphalt shingles are durable but may wear out or become damaged. Services include:",
        services: [
            "Replacing damaged shingles",
            "Fixing loose nails",
            "Ensuring proper alignment to prevent future issues"
        ],
        icon: Home
    },
    {
        name: "Flat Roof Repair",
        description: "For TPO (thermoplastic polyolefin) or single-ply membranes:",
        services: [
            "Patching small holes or cracks",
            "Replacing damaged flashing",
            "Adding protective coating to prevent future water damage"
        ],
        icon: Building2
    },
    {
        name: "Shake Roof Repair",
        description: "Shake roofs can chip or crack over time. Services include:",
        services: [
            "Removing loose or damaged shakes",
            "Installing new shakes with longer nails for stability"
        ],
        icon: Wrench
    }
];

const whyChooseReasons = [
    {
        title: "Customer-Centered Approach",
        description: "Job complete only when customer satisfied",
        icon: CheckCircle
    },
    {
        title: "Cost-Effective Repairs",
        description: "Prompt and affordable solutions",
        icon: DollarSign
    },
    {
        title: "Experience You Can Trust",
        description: "Decades of expertise, high-quality results",
        icon: Award
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

export default function CommercialRoofingPage() {
    return (
      <div className="flex flex-col bg-background">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="hero-heading uppercase">
                        COMMERCIAL ROOFING SOLUTIONS IN HOUSTON, TX
                    </h1>
                    <p className="hero-description max-w-4xl mx-auto mt-4">
                        Roof leaks are one of the most common issues homeowners face, and they can arise from:
                    </p>
                    <div className="max-w-2xl mx-auto mt-6 space-y-2 text-left">
                        <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="content-description">Poor ventilation on flat roofs.</span>
                        </div>
                        <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="content-description">Improper installation of skylights, vents, or chimneys.</span>
                        </div>
                        <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="content-description">Cracks in decking materials or flashing.</span>
                        </div>
                    </div>
                    <p className="hero-description max-w-4xl mx-auto mt-6">
                        At Mend Roofing, we specialize in roof leak repairs, ensuring your home is protected from further water damage. We'll identify the root cause and provide long-lasting solutions to keep your roof leak-free.
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
                                Free Estimate: (346) 236-3652
                            </Link>
                        </Button>
                        <p className="text-sm text-muted-foreground">
                            Contact form available for quick inquiry
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
                                alt="Commercial Roofing Solutions in Houston, TX"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="commercial roofing"
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
                       <GetStarted subtitle="Get expert commercial roofing solutions. Schedule your free estimate today!" />
                    </div>
                </div>
            </div>
        </section>

        {/* Why Choose Mend Roofing Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Why Choose Mend Roofing
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {whyMendRoofing.map((item, index) => (
                            <div key={index} className="bg-card p-6 rounded-lg shadow-md text-center">
                                <Star className="h-10 w-10 text-primary mx-auto mb-4" />
                                <h3 className="content-heading uppercase mb-3">{item.title}</h3>
                                <p className="content-description text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Trust Badges Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Trust Badges
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {trustBadges.map((badge, index) => (
                            <div key={index} className="bg-card p-6 rounded-lg shadow-md text-center">
                                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                                <h3 className="content-heading uppercase mb-2 text-sm">{badge.name}</h3>
                                <p className="content-description text-xs">{badge.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Types of Roof Repairs Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Types of Roof Repairs We Offer
                    </h2>
                    <div className="space-y-6">
                        {repairTypes.map((repair, index) => {
                            const IconComponent = repair.icon;
                            return (
                                <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                                    <div className="flex items-start gap-4 mb-4">
                                        <IconComponent className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                                        <div className="flex-1">
                                            <h3 className="content-heading uppercase mb-2">{repair.name}</h3>
                                            <p className="content-description text-sm mb-3">{repair.description}</p>
                                            <ul className="space-y-2">
                                                {repair.services.map((service, serviceIndex) => (
                                                    <li key={serviceIndex} className="flex items-start gap-2">
                                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                        <span className="content-description text-sm">{service}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>

        {/* Emergency Roof Repairs Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6 justify-center">
                        <AlertTriangle className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Emergency Roof Repairs
                        </h2>
                    </div>
                    <p className="content-description text-center">
                        A leaky roof can lead to:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-card p-4 rounded-lg shadow-sm text-center">
                            <Droplets className="h-8 w-8 text-primary mx-auto mb-2" />
                            <p className="content-description font-semibold">Mold and mildew growth</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg shadow-sm text-center">
                            <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                            <p className="content-description font-semibold">Structural damage to property</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg shadow-sm text-center">
                            <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                            <p className="content-description font-semibold">Expensive repairs down the line</p>
                        </div>
                    </div>
                    <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 text-center mt-8">
                        <p className="content-description font-semibold mb-2">
                            Emergency service available
                        </p>
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                            <Link href="tel:3462363652">
                                <Phone className="mr-2 h-5 w-5" />
                                Call (346) 236-3652
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Commercial Roof Inspection Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <FileCheck className="h-12 w-12 text-primary mx-auto" />
                    <h2 className="content-heading uppercase text-2xl">
                        Commercial Roof Inspection
                    </h2>
                    <p className="content-description">
                        Our comprehensive commercial roof inspections help identify potential issues before they become costly problems. Schedule an inspection to ensure your commercial property is protected.
                    </p>
                </div>
            </div>
        </section>

        {/* Why Choose Mend Roofing for Roof Repair Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Why Choose Mend Roofing for Roof Repair?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {whyChooseReasons.map((reason, index) => {
                            const IconComponent = reason.icon;
                            return (
                                <div key={index} className="bg-card p-6 rounded-lg shadow-md text-center">
                                    <IconComponent className="h-10 w-10 text-primary mx-auto mb-4" />
                                    <h3 className="content-heading uppercase mb-3">{reason.title}</h3>
                                    <p className="content-description text-sm">{reason.description}</p>
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
                            <h3 className="content-heading uppercase mb-3">2. Schedule an Appointment</h3>
                            <p className="content-description text-sm">
                                Roof Expert will ask questions to understand your situation and select a date/time
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
