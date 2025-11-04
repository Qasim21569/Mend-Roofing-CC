
import { GetStarted } from "@/components/get-started";
import Image from "next/image";
import { CheckCircle2, Shield, DollarSign, Clock, Home, Phone, AlertTriangle, CheckCircle, FileCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/9882058c-d1bb-47c5-8b81-9eb17540436e.jpg', alt: 'Roof work in progress', dataAiHint: 'roof construction' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/359bf895-15d8-4d94-a6f7-2ad7b2a3819e.jpg', alt: 'Roofing materials', dataAiHint: 'roofing materials' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/1dadfda2-0d66-430b-9850-5135138f67ac.jpg', alt: 'Completed roof', dataAiHint: 'new roof' },
];

const signsOfReplacement = [
    "Missing or cracked shingles",
    "Water leaks or water stains in your attic",
    "Roof age of 20+ years",
    "Sagging or drooping roof deck",
    "Granules in gutters (shingle deterioration)",
    "Curled or buckled shingles",
    "Visible daylight through roof boards",
    "Moss or algae growth",
    "Increased energy bills",
    "Storm damage (hail, wind, hurricanes)"
];

const pricingFactors = [
    "Roof size and square footage",
    "Material choice (asphalt, metal, tile)",
    "Roof pitch and complexity",
    "Existing damage extent",
    "Local permits and codes",
    "Removal of old roofing",
    "Waste disposal",
];

const materials = [
    {
        name: "Asphalt Shingles",
        description: "Most popular choice, cost-effective, variety of colors and styles"
    },
    {
        name: "Metal Roofing",
        description: "Durable, energy-efficient, long-lasting, weather-resistant"
    },
    {
        name: "Tile Roofing",
        description: "Premium option, excellent durability, classic aesthetic"
    }
];

export default function RoofReplacementPage() {
    return (
      <div className="flex flex-col bg-background">
        {/* Hero/Introduction Section */}
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="hero-heading uppercase">
                        PROFESSIONAL ROOF REPLACEMENT SERVICES IN SPRING, THE WOODLANDS & GREATER HOUSTON
                    </h1>
                    <p className="hero-description max-w-4xl mx-auto mt-4">
                        At Mend Roofing, we specialize in professional roof replacement services designed to protect and enhance your home or commercial property. Whether your roof has been damaged by a storm, is showing signs of aging, or you're planning an upgrade to a more durable and energy-efficient roofing system, our team of experienced roofing professionals is here to deliver dependable, high-quality results in Spring, The Woodlands and Greater Houston area and Roof Installation Spring, TX.
                    </p>
                    <p className="hero-description max-w-4xl mx-auto mt-4">
                        A strong, reliable roof is essential to safeguarding your property from the elements. As a trusted roofing contractor in Spring, we offer expert evaluations and customized roof replacement solutions to ensure your new roofing system is durable, energy-efficient, and built to withstand Texas weather conditions.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                            <Link href="tel:3462363652">
                                <Phone className="mr-2 h-5 w-5" />
                                Call (346) 236-3652
                            </Link>
                        </Button>
                        <p className="text-sm text-muted-foreground">
                            For a <strong className="text-foreground">FREE</strong> roof inspection and estimate
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
                                src="https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/975d091a-9998-4b48-bf85-3857e5373af3.jpg"
                                alt="Roof Replacement in Spring, TX"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="residential roof aerial"
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
                       <GetStarted subtitle="Your new roof is $1,000 off this season. Claim your roof replacement deal!" />
                    </div>
                </div>
            </div>
        </section>

        {/* Process/Service Overview Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Our Roof Replacement Process
                    </h2>
                    <p className="content-description text-center">
                        Our licensed roofing professionals begin with a comprehensive roof inspection to determine whether a full replacement is necessary. We then walk you through material choices, design options, and the roofing installation process in Spring to provide a seamless experience from start to finish.
                    </p>
                    <p className="content-description">
                        We deliver complete roof replacement services in Spring, The Woodlands and Greater Houston for both residential and commercial properties, using industry best practices and premium roofing materials tailored to your specific needs:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-card p-6 rounded-lg shadow-md text-center">
                            <FileCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h3 className="content-heading uppercase mb-2">Comprehensive Inspection</h3>
                            <p className="content-description text-sm">Thorough evaluation of your roof's condition</p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-md text-center">
                            <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h3 className="content-heading uppercase mb-2">Material Selection</h3>
                            <p className="content-description text-sm">Expert guidance on the best materials for your home</p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-md text-center">
                            <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h3 className="content-heading uppercase mb-2">Professional Installation</h3>
                            <p className="content-description text-sm">Quality craftsmanship from start to finish</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Pricing & Financing Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <DollarSign className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Affordable Roof Replacement Pricing & Financing
                        </h2>
                    </div>
                    <p className="content-description">
                        We believe that every homeowner and business should have access to quality roofing. That's why we offer affordable roof replacement in Spring, The Woodlands and Greater Houston with transparent pricing and flexible financing solutions.
                    </p>
                    <div className="bg-card p-6 rounded-lg shadow-md mt-6">
                        <h3 className="content-heading uppercase mb-4">
                            The total roof replacement cost depends on several important factors:
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

        {/* Signs You Need Replacement Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <AlertTriangle className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Signs You Need Roof Replacement
                        </h2>
                    </div>
                    <p className="content-description">
                        If you're unsure when to replace a roof, watch for the following signs:
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
                            If you notice any of these issues, contact Mend Roofing for a free roof inspection in Spring, The Woodlands and Greater Houston area and an honest, professional assessment.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Material Recommendations Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-2xl text-center">
                        Roofing Material Recommendations
                    </h2>
                    <p className="content-description text-center">
                        We recommend roofing materials like asphalt shingles, metal, or tile based on your home's style, budget, and Spring's weather conditions.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        {materials.map((material, index) => (
                            <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                                <h3 className="content-heading uppercase mb-3">{material.name}</h3>
                                <p className="content-description text-sm">{material.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Timeline & Completion Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <Clock className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Timeline & Completion
                        </h2>
                    </div>
                    <p className="content-description text-lg">
                        Most residential roofs in Spring are completed in 1–2 days, depending on the size and scope of the job
                    </p>
                    <div className="bg-card p-6 rounded-lg shadow-md max-w-2xl mx-auto">
                        <p className="content-description">
                            Our team works efficiently while maintaining the highest quality standards. We'll provide you with a detailed timeline during your consultation and keep you updated throughout the project.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Inspection Criteria Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <FileCheck className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            What We Look For During Inspection
                        </h2>
                    </div>
                    <p className="content-description">
                        We look for issues like leaks, missing shingles, or age-related wear to help you decide between repair and replacement.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-card p-6 rounded-lg shadow-md">
                            <h3 className="content-heading uppercase mb-3">Structural Issues</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="content-description text-sm">Sagging or drooping roof deck</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="content-description text-sm">Visible daylight through roof boards</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="content-description text-sm">Water damage to structural elements</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-md">
                            <h3 className="content-heading uppercase mb-3">Material Condition</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="content-description text-sm">Missing or cracked shingles</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="content-description text-sm">Granule loss and shingle deterioration</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="content-description text-sm">Curled or buckled shingles</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Warranty Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <Award className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Warranty Protection
                        </h2>
                    </div>
                    <p className="content-description text-lg">
                        Absolutely. Our roofing systems include both manufacturer warranties and our own workmanship guarantee for added peace of mind.
                    </p>
                    <div className="bg-card p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6 text-left">
                            <div>
                                <Shield className="h-10 w-10 text-primary mb-4" />
                                <h3 className="content-heading uppercase mb-2">Manufacturer Warranty</h3>
                                <p className="content-description text-sm">
                                    Coverage on materials from leading roofing manufacturers
                                </p>
                            </div>
                            <div>
                                <Award className="h-10 w-10 text-primary mb-4" />
                                <h3 className="content-heading uppercase mb-2">Workmanship Guarantee</h3>
                                <p className="content-description text-sm">
                                    Our commitment to quality installation and customer satisfaction
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Free Assessment/CTA Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <h2 className="content-heading uppercase text-2xl">
                        Free Assessment & Estimate
                    </h2>
                    <p className="content-description text-lg">
                        Yes, we offer free, no-obligation assessments and estimates for homeowners throughout the Spring area.
                    </p>
                    <div className="bg-card p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                        <p className="content-description mb-6">
                            Get started today with a free roof inspection. Our experts will evaluate your roof's condition and provide you with an honest assessment and detailed estimate.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                                <Link href="tel:3462363652">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call (346) 236-3652
                                </Link>
                            </Button>
                            <p className="text-sm text-muted-foreground">
                                or fill out the form above
                            </p>
                        </div>
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
                    <div className="flex flex-col items-center gap-4">
                        <a href="tel:3462363652" className="text-4xl font-bold hover:opacity-80 transition-opacity flex items-center gap-3">
                            <Phone className="h-10 w-10" />
                            (346) 236-3652
                        </a>
                        <p className="text-lg opacity-90">
                            Serving Spring, The Woodlands & Greater Houston Area
                        </p>
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
      </div>
    );
}
