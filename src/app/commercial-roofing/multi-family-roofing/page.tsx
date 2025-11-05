
"use client";

import { GetStarted } from "@/components/get-started";
import Image from "next/image";
import { CheckCircle2, Shield, DollarSign, Clock, Home, Phone, AlertTriangle, CheckCircle, FileCheck, Award, Building2, MapPin, Star, Wind, TrendingUp, CalendarDays, Users, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/original/f8b1adf1-9c4a-433a-bc38-df2ab404bf3a.jpg', alt: 'Multi-family roofing installation', dataAiHint: 'multi-family roofing work' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/original/df3180c9-46cd-4079-a576-999c381033bc.jpg', alt: 'Multi-family roofing materials', dataAiHint: 'roofing materials' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/original/8a216c8a-4dcb-4c2f-afb7-8fcc472adb61.jpg', alt: 'Completed multi-family roof', dataAiHint: 'multi-family roof' },
];

const trustBadges = [
    { name: "RCAT", description: "Roofing Contractors Association of Texas" },
    { name: "Directorii.com", description: "Verified Professional Directory" },
    { name: "Conklin", description: "40 Years Roofing Systems" },
    { name: "GAF Certified Residential Roofing Contractor", description: "Master Elite Certification" },
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

const services = [
    {
        name: "Multi-Family Roof Installation",
        description: "Expert roofing for apartments, condominiums, and townhomes using premium, long-lasting materials designed for performance and protection. Perfect for property owners exploring roof installation Spring or new roofing installation Spring projects across multi-unit residences.",
        icon: Home
    },
    {
        name: "Multi-Family Roof Repair",
        description: "Quick, professional multi-family roof repair for leaks, storm damage, and general wear ideal for maintaining roofing for multi-unit properties and ensuring tenant safety.",
        icon: Wrench
    },
    {
        name: "Multi-Family Roof Replacement",
        description: "Cost-effective multi-family roof replacement that upgrades aging systems with energy-efficient and weather-resistant roofing materials. Ideal for improving older structures and increasing overall performance.",
        icon: TrendingUp
    },
    {
        name: "Multi-Family Roof Maintenance",
        description: "Scheduled multi-family roof maintenance and inspections to catch small issues early and extend the life of your roof. An essential service for long-term building performance.",
        icon: FileCheck
    }
];

const benefits = [
    {
        title: "Enhanced Property Protection",
        description: "Our storm restoration roofing and weather-resistant roofing systems ensure long-term durability for every building in your portfolio.",
        icon: Shield
    },
    {
        title: "Energy Efficiency",
        description: "We use materials and techniques that enhance roof insulation solutions, helping reduce heating and cooling costs across the property.",
        icon: TrendingUp
    },
    {
        title: "Curb Appeal & Value",
        description: "Professionally installed and maintained roofs improve curb appeal and serve as smart property value roofing solutions for owners and HOAs.",
        icon: Star
    },
    {
        title: "Minimal Disruption",
        description: "Our team provides low disruption roofing services, working efficiently to respect your residents' comfort and daily routine key for apartment and condo communities.",
        icon: Users
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

export default function MultiFamilyRoofingPage() {
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
                        Multi-Family Roofing Services in Houston, TX
                    </h2>
                    <p className="hero-description max-w-4xl mx-auto mt-4">
                        At Mend Roofing, we specialize in multi-family roofing services, delivering high-performance solutions for apartments, condominiums, townhomes, and other multi-unit properties. Whether you're managing one building or an entire complex, our experienced team installs durable roofing systems that protect residents, improve efficiency, and add lasting value to your investment.
                    </p>
                    <p className="hero-description max-w-4xl mx-auto mt-4">
                        If you're searching for roof installation near me or a reliable roofing contractor Spring, our team is ready to serve your multi-unit project with precision and professionalism.
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
                                alt="Multi-Family Roofing in Houston, TX"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="multi-family roofing"
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
                       <GetStarted subtitle="Protect your multi-unit property with professional roofing. Get your free estimate today!" />
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Comprehensive Multi-Family Roofing Services Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Comprehensive Multi-Family Roofing Services
                    </h2>
                    <p className="content-description text-center">
                        We offer a full range of multi-family roofing solutions tailored to the unique needs of residential communities:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                                    <h3 className="content-heading uppercase mb-3">{service.name}</h3>
                                    <p className="content-description text-sm">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Benefits of Our Multi-Family Roofing Services
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
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
                            For those needing roofing installation Spring or roof installation near me with a focus on quality, dependability, and tenant-friendly execution, Mend Roofing is your trusted choice.
                        </p>
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
                            Any Questions? Check out our FAQ's
                        </h2>
                        <h3 className="content-heading uppercase text-xl mb-4">
                            FAQ Highlights
                        </h3>
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

