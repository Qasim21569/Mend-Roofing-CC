import { GetStarted } from "@/components/get-started";
import Image from "next/image";
import { CheckCircle2, Shield, DollarSign, Phone, Award, CheckCircle, FileCheck, Building2, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/9882058c-d1bb-47c5-8b81-9eb17540436e.jpg', alt: 'Asphalt shingle installation', dataAiHint: 'asphalt shingle construction' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/359bf895-15d8-4d94-a6f7-2ad7b2a3819e.jpg', alt: 'Asphalt shingle materials', dataAiHint: 'asphalt shingle materials' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/1dadfda2-0d66-430b-9850-5135138f67ac.jpg', alt: 'Completed asphalt shingle roof', dataAiHint: 'asphalt shingle roof completed' },
];

const shingleTypes = [
    "Three-tab asphalt shingles",
    "Dimensional asphalt shingles",
    "Luxury asphalt shingles",
    "Fiberglass asphalt shingles",
    "CertainTeed Luxury Shingles",
];

const serviceAreas = [
    "Spring",
    "Cypress",
    "Tomball",
    "Katy",
    "Houston",
    "The Woodlands"
];

const asphaltServices = [
    "Asphalt shingle roof installation",
    "Asphalt shingle roof replacement",
    "Asphalt shingle repair",
    "New roof installation",
    "Roofing installation Spring",
];

export default function AsphaltShinglesPage() {
    return (
      <div className="flex flex-col bg-background">
        {/* Hero/Introduction Section */}
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="hero-heading uppercase">
                        ASPHALT SHINGLE ROOFING IN SPRING, THE WOODLANDS & GREATER HOUSTON
                    </h1>
                    <p className="hero-description max-w-4xl mx-auto mt-4">
                        At Mend Roofing, we specialize in asphalt shingle roofing, the most popular and cost-effective roofing solution for homeowners across Spring, The Woodlands, and Greater Houston area. Whether you need a new roof, asphalt shingle repair, or a full asphalt shingle roof replacement, our experienced team provides high-quality craftsmanship using top tier materials. We ensure every project delivers long lasting protection and curb appeal with expert level asphalt shingle installation. If you're searching for roof installation near me or a trusted roofing contractor Spring, Mend Roofing has the reliable service you need.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                            <Link href="tel:3462363652">
                                <Phone className="mr-2 h-5 w-5" />
                                Call (346) 236-3652
                            </Link>
                        </Button>
                        <p className="text-sm text-muted-foreground">
                            For a <strong className="text-foreground">FREE</strong> asphalt shingle roofing estimate
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
                                alt="Asphalt Shingle Roofing in Spring, TX"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="asphalt shingle installation"
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
                       <GetStarted subtitle="Transform your home with quality asphalt shingle roofing. Get your free estimate today!" />
                    </div>
                </div>
            </div>
        </section>

        {/* Asphalt Shingle Benefits & Product Options Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Why Choose Asphalt Shingles?
                    </h2>
                    <p className="content-description text-center">
                        Asphalt shingles are a top choice for residential roofing due to their affordability, durability, and design versatility. Available in a wide variety of colors and styles including three-tab asphalt shingles, dimensional asphalt shingles, and luxury asphalt shingles they offer exceptional protection against the elements while enhancing your home's curb appeal. We also offer premium materials like fiberglass asphalt shingles and trusted products such as CertainTeed Luxury Shingles. For homeowners needing roof installation Spring or expert roofing installation Spring, asphalt shingles provide the ideal balance of performance and style.
                    </p>
                    <div className="bg-card p-6 rounded-lg shadow-md mt-6">
                        <h3 className="content-heading uppercase mb-4 text-center">
                            Available Asphalt Shingle Types
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {shingleTypes.map((type, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="content-description">{type}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-card p-6 rounded-lg shadow-md text-center">
                            <DollarSign className="h-12 w-12 text-primary mx-auto mb-3" />
                            <h3 className="content-heading uppercase mb-2">Affordable</h3>
                            <p className="content-description text-sm">Cost-effective roofing solution</p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-md text-center">
                            <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
                            <h3 className="content-heading uppercase mb-2">Durable</h3>
                            <p className="content-description text-sm">Long-lasting protection</p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-md text-center">
                            <Star className="h-12 w-12 text-primary mx-auto mb-3" />
                            <h3 className="content-heading uppercase mb-2">Versatile Design</h3>
                            <p className="content-description text-sm">Wide variety of colors and styles</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Service Areas & Contractor Credentials Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6 justify-center">
                        <MapPin className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Service Areas & Contractor Credentials
                        </h2>
                    </div>
                    <p className="content-description text-center">
                        We provide a full range of asphalt roofing services across Texas, including asphalt shingle roofing in Spring, The Woodlands, and Greater Houston area:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        {serviceAreas.map((area, index) => (
                            <div key={index} className="bg-card p-4 rounded-lg shadow-sm text-center">
                                <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                                <span className="content-description font-semibold">{area}</span>
                            </div>
                        ))}
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-md mt-8">
                        <p className="content-description mb-4">
                            With years of proven experience, we use only high quality asphalt shingles and industry best practices to deliver roofing systems built to last. As a reliable asphalt shingle roofing contractor, Mend Roofing proudly serves Spring, The Woodlands, and Greater Houston area with exceptional service and trusted results. Whether you're planning a new install or need a quick roofing company for asphalt shingles, we've got you covered.
                        </p>
                        <p className="content-description">
                            We also serve Spring, Cypress, Tomball, Katy, Houston, and The Woodlands making us your go to choice when looking for a roofing contractor Spring with a strong reputation.
                        </p>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-md">
                        <h3 className="content-heading uppercase mb-4">
                            Our Asphalt Shingle Services Include:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {asphaltServices.map((service, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="content-description">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Licensing, Insurance, & Trust Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <Shield className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Licensing, Insurance, & Trust
                        </h2>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                        <p className="content-description text-lg">
                            Yes, we carry all state-required licensing and are fully insured up to $2,000,000. We also have third-party policies with Directorii and Google Guarantee for extra peace of mind for our customers.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Insurance & Financing Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6 justify-center">
                        <DollarSign className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Insurance & Financing
                        </h2>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-card p-6 rounded-lg shadow-md">
                            <h3 className="content-heading uppercase mb-3">Insurance Coverage</h3>
                            <p className="content-description">
                                Insurance will typically cover a roof replacement if significant damage is caused by something outside your control, such as a hailstorm, windstorm, hurricane, or fire.
                            </p>
                        </div>
                        <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                            <h3 className="content-heading uppercase mb-3">Flexible Financing Options</h3>
                            <p className="content-description">
                                Yes, we offer great financing and payment options to ensure that you can get your roof replaced without taking on a huge financial burden.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <h2 className="content-heading uppercase text-2xl">
                        Get Your Free Asphalt Shingle Roofing Estimate
                    </h2>
                    <p className="content-description text-lg">
                        Call us at (346) 236-3652 or fill out our online contact form to request a free roofing estimate. We'll assess your roof and provide a detailed quote.
                    </p>
                    <div className="bg-card p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                        <p className="content-description mb-6">
                            Get started today with a free asphalt shingle roofing consultation. Our experts will evaluate your needs and provide you with an honest assessment and detailed estimate.
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

        {/* Customer Support Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <h2 className="content-heading uppercase text-2xl">
                        Customer Support
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
                    <div className="flex flex-col items-center gap-4">
                        <div>
                            <p className="text-sm opacity-90 mb-2">Contact Information:</p>
                            <a href="tel:3462363652" className="text-4xl font-bold hover:opacity-80 transition-opacity flex items-center justify-center gap-3">
                                <Phone className="h-10 w-10" />
                                (346) 236-3652
                            </a>
                        </div>
                        <p className="text-lg opacity-90">
                            Serving Spring, The Woodlands, Greater Houston, Cypress, Tomball, Katy & Houston
                        </p>
                    </div>
                    <div className="pt-8 border-t border-primary-foreground/20">
                        <p className="text-sm opacity-75 max-w-3xl mx-auto">
                            By submitting this form, I agree to be contacted by Mend Roofing even if I'm on a Do Not Call List. I agree to this contact from Mend Roofing by email, phone call, or text message at my contact information provided above. I understand that this contact may be generated by an automated technology such as an automated phone dialing system and may use prerecorded voice or messaging. I understand that my agreement to the foregoing is not a condition to purchase any products or services from Mend Roofing.
                        </p>
                        <p className="text-sm opacity-75 mt-4 max-w-3xl mx-auto">
                            By submitting this form, I also consent to receive SMS messages from Mend Roofing. I understand that message and data rates may apply, and that I may reply STOP to opt-out of future messaging or HELP for assistance. Message frequency may vary. See our <Link href="#" className="underline hover:opacity-80">Privacy Policy</Link> and <Link href="#" className="underline hover:opacity-80">Terms & Conditions</Link> for more details.
                        </p>
                        <p className="text-sm opacity-75 mt-4 max-w-3xl mx-auto">
                            By submitting this form, you consent to share your information with one authorized local provider. You agree to receive SMS updates from Mend Roofing and its representative. Message frequency may vary. Standard message and data rates may apply. Reply HELP for assistance or STOP to unsubscribe. See our <Link href="#" className="underline hover:opacity-80">Privacy Policy</Link> and <Link href="#" className="underline hover:opacity-80">Terms & Conditions</Link> for more details.
                        </p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
