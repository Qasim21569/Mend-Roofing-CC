
"use client";

import { GetStarted } from "@/components/get-started";
import Image from "next/image";
import { CheckCircle2, Shield, DollarSign, Clock, Home, Phone, AlertTriangle, CheckCircle, FileCheck, Award, Building2, MapPin, Star, Wind, TrendingUp, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/original/f8b1adf1-9c4a-433a-bc38-df2ab404bf3a.jpg', alt: 'Commercial roof work in progress', dataAiHint: 'commercial roof construction' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/original/df3180c9-46cd-4079-a576-999c381033bc.jpg', alt: 'Commercial roofing materials', dataAiHint: 'roofing materials' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/original/8a216c8a-4dcb-4c2f-afb7-8fcc472adb61.jpg', alt: 'Large commercial roof', dataAiHint: 'commercial roof' },
];

const trustBadges = [
    { name: "RCAT", description: "Roofing Contractors Association of Texas" },
    { name: "Directorii.com", description: "Verified Professional Directory" },
    { name: "Conklin Roofing Systems", description: "Certified Installer" },
    { name: "GAF Certified Contractor", description: "Master Elite Certification" },
];

const whyMendRoofing = [
    {
        title: "Top-of-the-line Professionals",
        description: "Experienced team with industry expertise"
    },
    {
        title: "Industry-leading Warranties",
        description: "Comprehensive protection for your investment"
    },
    {
        title: "Trusted Local Houston Roofing Company",
        description: "Serving the community with integrity"
    }
];

const services = [
    {
        name: "Asphalt Shingle Roof Replacement",
        description: "Cost-effective solution with a wide range of styles and colors for commercial applications",
        icon: Building2
    },
    {
        name: "Metal Roof Replacement",
        description: "Durable, energy-efficient, and weather-resistant option for long-lasting protection",
        icon: Shield
    },
    {
        name: "Tile Roof Replacement",
        description: "Long-lasting, excellent insulation properties, and significant energy savings",
        icon: Award
    },
    {
        name: "Flat Roof Replacement",
        description: "Ideal for commercial buildings, sleek design, and functional performance",
        icon: Home
    },
    {
        name: "Storm Damaged Roof Replacement",
        description: "Fast, reliable service for severe weather impact restoration",
        icon: Wind
    },
    {
        name: "Energy Efficient Roofing Upgrades",
        description: "Reduce utility costs and increase comfort with modern roofing solutions",
        icon: TrendingUp
    }
];

const signsOfReplacement = [
    "Frequent leaks/water damage",
    "Missing, cracked, or curled shingles",
    "Sagging/soft spots",
    "Mold, moss, excessive wear",
    "High energy bills, poor roof insulation",
    "Roof age exceeding 20–30 years"
];

const pricingFactors = [
    "Roof size and complexity",
    "Material selection",
    "Structural repairs",
    "Local permits and codes",
    "Removal of old roofing",
    "Waste disposal",
    "Accessibility and logistics"
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
    "Houston - Midtown",
    "Houston - Galleria/Uptown",
    "Houston - Heights",
    "Houston - Montrose",
    "Sugar Land",
    "Pasadena",
    "Houston - Downtown",
    "Clear Lake"
];

const faqs = [
    {
        question: "What residential roofing options are available for Spring, TX?",
        answer: "For Spring, TX, we recommend asphalt shingles, metal, and tile roofing. Each option offers different benefits in terms of durability, energy efficiency, and cost. Our team will help you choose the best option based on your specific needs and budget."
    },
    {
        question: "What is the typical duration for a residential roofing project?",
        answer: "Most residential roofing projects in Spring are completed in 1–2 days, depending on the size and complexity of the job. We work efficiently while maintaining the highest quality standards and will provide you with a detailed timeline during your consultation."
    },
    {
        question: "Do you offer free estimates for residential roofing services in Spring?",
        answer: "Yes, we offer free, no-obligation assessments and estimates for homeowners throughout the Spring area. Contact us to schedule your free roof inspection and detailed estimate."
    },
    {
        question: "How do you determine if I need a roof repair or replacement?",
        answer: "Our licensed roofing professionals conduct a comprehensive roof inspection to assess your roof's condition. We evaluate factors such as age, extent of damage, material condition, and structural integrity to provide an honest recommendation on whether repair or replacement is the best solution."
    },
    {
        question: "What warranties are included with roof replacement?",
        answer: "Our roofing systems include both manufacturer warranties on materials and our own workmanship guarantee. This provides comprehensive protection and peace of mind for your investment."
    }
];

export default function CommercialRoofReplacementPage() {
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
                        Professional Roof Replacement in Houston, TX
                    </h2>
                    <p className="hero-description max-w-4xl mx-auto mt-4">
                        Mend Roofing specializes in professional roof replacement for homes and commercial properties in Spring, The Woodlands, and Greater Houston.
                    </p>
                    <p className="hero-description max-w-4xl mx-auto mt-4">
                        Services cover damage by storms, aging roofs, and upgrades for durability and energy efficiency.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
                        <div className="bg-card p-4 rounded-lg shadow-md text-center">
                            <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-2" />
                            <p className="content-description font-semibold">Licensed, insured, certified</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg shadow-md text-center">
                            <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                            <p className="content-description font-semibold">100% satisfaction guaranteed</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg shadow-md text-center">
                            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                            <p className="content-description font-semibold">Free estimates 7 days a week</p>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                            <Link href="tel:3462363652">
                                <Phone className="mr-2 h-5 w-5" />
                                Free Estimate at (346) 236-3652
                            </Link>
                        </Button>
                        <p className="text-sm text-muted-foreground">
                            Online contact form for quick response
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
                                alt="Commercial Roof Replacement in Houston, TX"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="commercial building construction"
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
                       <GetStarted subtitle="Your new commercial roof is $1,000 off this season. Claim your roof replacement deal!" />
                    </div>
                </div>
            </div>
        </section>

        {/* Trust Badges Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Trust Badges
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trustBadges.map((badge, index) => (
                            <div key={index} className="bg-card p-6 rounded-lg shadow-md text-center">
                                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                                <h3 className="content-heading uppercase mb-2">{badge.name}</h3>
                                <p className="content-description text-sm">{badge.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Why Mend Roofing Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Why Mend Roofing
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

        {/* Reliable Roof Replacement Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Reliable Roof Replacement
                    </h2>
                    <p className="content-description text-center">
                        A strong, reliable roof is essential to safeguarding your commercial property from the elements. Mend Roofing offers expert evaluations and customized roof replacement solutions.
                    </p>
                    <p className="content-description text-center">
                        We provide comprehensive roof inspections, material choices, and design options for a seamless experience from start to finish.
                    </p>
                </div>
            </div>
        </section>

        {/* Storm Restoration Expertise Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <Wind className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Storm Restoration Expertise
                        </h2>
                    </div>
                    <p className="content-description text-lg">
                        Our experienced roofers have extensive storm restoration knowledge and are equipped to handle severe weather damage quickly and effectively.
                    </p>
                </div>
            </div>
        </section>

        {/* Comprehensive Roof Replacement Services Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Comprehensive Roof Replacement Services
                    </h2>
                    <p className="content-description text-center">
                        Services for both residential and commercial properties using premium materials:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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

        {/* Affordable Roof Replacement Options Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <DollarSign className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Affordable Roof Replacement Options
                        </h2>
                    </div>
                    <p className="content-description">
                        We believe that quality roofing should be accessible for homeowners and businesses. That's why we offer transparent pricing and flexible financing options.
                    </p>
                    <div className="bg-card p-6 rounded-lg shadow-md mt-6">
                        <h3 className="content-heading uppercase mb-4">
                            Factors affecting cost:
                        </h3>
                        <ul className="space-y-2">
                            {pricingFactors.map((factor, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="content-description">{factor}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                        <p className="content-description font-semibold mb-2">
                            Flexible Financing Available
                        </p>
                        <p className="content-description">
                            We offer financing plans to make your roof replacement project affordable. Contact us to learn more about our financing options and get a free estimate.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Signs You Need a Roof Replacement Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <AlertTriangle className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Signs You Need a Roof Replacement
                            </h2>
                    </div>
                    <p className="content-description">
                        If you're unsure when to replace your commercial roof, watch for the following signs:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        {signsOfReplacement.map((sign, index) => (
                            <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="content-description">{sign}</span>
                            </div>
                        ))}
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-md mt-8">
                        <p className="content-description">
                            If you notice any of these issues, contact Mend Roofing for a free roof inspection and an honest, professional assessment.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Frequently Asked Questions
                    </h2>
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
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6 justify-center">
                        <MapPin className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Service Areas
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
                                24624 Interstate 45 200, Spring, TX 77386, United States
                            </p>
                        </div>
                        <div className="pt-4">
                            <p className="text-lg opacity-90">
                                Office hours: 24 Hours
                            </p>
                            <p className="text-lg opacity-90 mt-2">
                                Serving Spring, The Woodlands & Greater Houston Area
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
                            <h3 className="content-heading uppercase mb-3">1. Contact Us</h3>
                            <p className="content-description text-sm">
                                Contact Mend Roofing by phone or contact form to get started
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-md">
                            <CalendarDays className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h3 className="content-heading uppercase mb-3">2. Schedule Appointment</h3>
                            <p className="content-description text-sm">
                                A Roof Expert will understand your needs and set a date/time for your inspection
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
