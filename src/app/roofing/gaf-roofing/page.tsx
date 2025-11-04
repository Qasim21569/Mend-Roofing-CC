import { GetStarted } from "@/components/get-started";
import Image from "next/image";
import { CheckCircle2, Shield, DollarSign, Phone, Award, CheckCircle, FileCheck, Building2, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/9882058c-d1bb-47c5-8b81-9eb17540436e.jpg', alt: 'GAF roof installation', dataAiHint: 'GAF roof construction' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/359bf895-15d8-4d94-a6f7-2ad7b2a3819e.jpg', alt: 'GAF roofing materials', dataAiHint: 'GAF materials' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/1dadfda2-0d66-430b-9850-5135138f67ac.jpg', alt: 'Completed GAF roof', dataAiHint: 'GAF roof completed' },
];

const gafServices = [
    "GAF roof installation",
    "GAF roof replacement",
    "GAF roof repair",
    "GAF certified roofing solutions",
    "GAF warranty services",
    "GAF maintenance and inspection",
];

const serviceAreas = [
    "Spring",
    "Cypress",
    "Tomball",
    "Katy",
    "Houston",
    "The Woodlands"
];

export default function GAFRoofingPage() {
    return (
      <div className="flex flex-col bg-background">
        {/* Hero/Introduction Section */}
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="hero-heading uppercase">
                        GAF ROOFING SYSTEMS IN SPRING, CYPRESS, TOMBALL, KATY, HOUSTON & THE WOODLANDS
                    </h1>
                    <p className="hero-description max-w-4xl mx-auto mt-4">
                        At Mend Roofing, we are proud to offer GAF Roofing, one of the most trusted and reliable roofing brands in the industry. As a GAF-certified contractor, we ensure high-quality roofing solutions that enhance the durability, energy efficiency, and aesthetic appeal of your home or business.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                            <Link href="tel:3462363652">
                                <Phone className="mr-2 h-5 w-5" />
                                Call (346) 236-3652
                            </Link>
                        </Button>
                        <p className="text-sm text-muted-foreground">
                            For a <strong className="text-foreground">FREE</strong> GAF roofing estimate
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
                                alt="GAF Roofing in Spring, TX"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="GAF roof installation"
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
                       <GetStarted subtitle="Experience the quality of GAF Roofing. Get your free estimate today!" />
                    </div>
                </div>
            </div>
        </section>

        {/* GAF Brand Value Proposition Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Why Choose GAF Roofing?
                    </h2>
                    <p className="content-description text-center">
                        GAF is known for its industry-leading roofing products, offering superior protection against harsh weather conditions. With advanced technology, high durability, and a wide selection of styles, GAF roofing systems are an excellent investment for long-term property protection.
                    </p>
                    <div className="bg-card p-6 rounded-lg shadow-md mt-6">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
                                <h3 className="content-heading uppercase mb-2">Superior Protection</h3>
                                <p className="content-description text-sm">Industry-leading weather resistance</p>
                            </div>
                            <div className="text-center">
                                <Star className="h-12 w-12 text-primary mx-auto mb-3" />
                                <h3 className="content-heading uppercase mb-2">Advanced Technology</h3>
                                <p className="content-description text-sm">Cutting-edge roofing innovation</p>
                            </div>
                            <div className="text-center">
                                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                                <h3 className="content-heading uppercase mb-2">Long-Term Investment</h3>
                                <p className="content-description text-sm">Durable, high-quality materials</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Service Offerings Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-2xl text-center">
                        Comprehensive GAF Roofing Solutions
                    </h2>
                    <p className="content-description text-center">
                        We specialize in comprehensive GAF roofing solutions, including:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        {gafServices.map((service, index) => (
                            <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="content-description">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Certification & Standards Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6 justify-center">
                        <Award className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            GAF Certification & Standards
                        </h2>
                    </div>
                    <p className="content-description text-center">
                        As a GAF-certified roofing contractor, we adhere to the highest installation standards, ensuring your roof is installed correctly for maximum performance and longevity. Our team undergoes regular training to stay updated with the latest GAF roofing techniques and innovations.
                    </p>
                    <div className="bg-card p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="text-center">
                                <FileCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                                <h3 className="content-heading uppercase mb-2">GAF Certified</h3>
                                <p className="content-description text-sm">
                                    Certified contractor with proven expertise
                                </p>
                            </div>
                            <div className="text-center">
                                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                                <h3 className="content-heading uppercase mb-2">Highest Standards</h3>
                                <p className="content-description text-sm">
                                    Adherence to industry best practices
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Service Coverage Area Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6 justify-center">
                        <MapPin className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Service Coverage Areas
                        </h2>
                    </div>
                    <p className="content-description text-center">
                        Mend Roofing is proud to provide expert GAF roofing services to homeowners and businesses in Spring, Cypress, Tomball, Katy, Houston, and The Woodlands. Our local expertise and commitment to quality make us the go-to choice for premium roofing solutions in these areas.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
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

        {/* Trust & Credentials Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <Shield className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Trust & Credentials
                        </h2>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                        <p className="content-description text-lg mb-4">
                            Yes, we carry all state-required licensing and are fully insured up to $2,000,000. We also have third-party policies with Directorii and Google Guarantee for extra peace of mind for our customers.
                        </p>
                        <p className="content-description">
                            Insurance will typically cover a roof replacement if significant damage is caused by something outside your control, such as a hailstorm, windstorm, hurricane, or fire.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Financing Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6 justify-center">
                        <DollarSign className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Financing Options
                        </h2>
                    </div>
                    <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 max-w-2xl mx-auto">
                        <p className="content-description text-center">
                            Yes, we offer great financing and payment options to ensure that you can get your roof replaced without taking on a huge financial burden.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <h2 className="content-heading uppercase text-2xl">
                        Get Your Free GAF Roofing Estimate
                    </h2>
                    <p className="content-description text-lg">
                        Call us at (346) 236-3652 or fill out our online contact form to request a free roofing estimate. We'll assess your roof and provide a detailed quote.
                    </p>
                    <div className="bg-card p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                        <p className="content-description mb-6">
                            Get started today with a free GAF roofing consultation. Our experts will evaluate your needs and provide you with an honest assessment and detailed estimate.
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

        {/* Contact & Support Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <h2 className="content-heading uppercase text-2xl">
                        Contact & Support
                    </h2>
                    <p className="content-description text-lg">
                        Have questions about our services? We're here to help! Contact us anytime, and our expert team will provide the answers and support you need.
                    </p>
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
                    <div className="flex flex-col items-center gap-6">
                        <div>
                            <p className="text-sm opacity-90 mb-2">Contact Information:</p>
                            <a href="tel:3462363652" className="text-4xl font-bold hover:opacity-80 transition-opacity flex items-center justify-center gap-3">
                                <Phone className="h-10 w-10" />
                                (346) 236-3652
                            </a>
                        </div>
                        <div>
                            <p className="text-sm opacity-90 mb-2">Contact Information:</p>
                            <a href="tel:3462363652" className="text-4xl font-bold hover:opacity-80 transition-opacity flex items-center justify-center gap-3">
                                <Phone className="h-10 w-10" />
                                (346) 236-3652
                            </a>
                        </div>
                        <p className="text-lg opacity-90">
                            Serving Spring, Cypress, Tomball, Katy, Houston & The Woodlands
                        </p>
                    </div>
                    <div className="pt-8 border-t border-primary-foreground/20">
                        <p className="text-sm opacity-75 max-w-3xl mx-auto">
                            By submitting this form, I agree to be contacted by Mend Roofing even if I'm on a Do Not Call List. I agree to this contact from Mend Roofing by email, phone call, or text message at my contact information provided above. I understand that this contact may be generated by an automated technology such as an automated phone dialing system and may use prerecorded voice or messaging. I understand that my agreement to the foregoing is not a condition to purchase any products or services from Mend Roofing. See our <Link href="#" className="underline hover:opacity-80">Privacy Policy</Link> and <Link href="#" className="underline hover:opacity-80">Terms & Conditions</Link> for more details.
                        </p>
                        <p className="text-sm opacity-75 mt-4 max-w-3xl mx-auto">
                            By submitting this form, I agree to be contacted by Mend Roofing even if I'm on a Do Not Call List. I agree to this contact from Mend Roofing by email, phone call, or text message at my contact information provided above. I understand that this contact may be generated by an automated technology such as an automated phone dialing system and may use prerecorded voice or messaging. I understand that my agreement to the foregoing is not a condition to purchase any products or services from Mend Roofing. See our <Link href="#" className="underline hover:opacity-80">Privacy Policy</Link> and <Link href="#" className="underline hover:opacity-80">Terms & Conditions</Link> for more details.
                        </p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
