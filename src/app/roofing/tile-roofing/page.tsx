import { GetStarted } from "@/components/get-started";
import Image from "next/image";
import { CheckCircle2, Shield, DollarSign, Clock, Home, Phone, Flame, Zap, Award, CheckCircle, FileCheck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const images = [
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/9882058c-d1bb-47c5-8b81-9eb17540436e.jpg', alt: 'Tile roof installation', dataAiHint: 'tile roof construction' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/359bf895-15d8-4d94-a6f7-2ad7b2a3819e.jpg', alt: 'Tile roofing materials', dataAiHint: 'tile materials' },
    { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/1dadfda2-0d66-430b-9850-5135138f67ac.jpg', alt: 'Completed tile roof', dataAiHint: 'tile roof completed' },
];

const tileServices = [
    "Tile roof installation",
    "Tile roof replacement",
    "Tile roof repair",
    "Clay tile roofing",
    "Concrete tile roofing",
    "Slate tile roofing",
];

const tileBenefits = [
    "Timeless and elegant design",
    "Energy efficient",
    "Unmatched durability",
    "Excellent weather resistance",
    "Fire resistant",
    "Pest resistant",
    "Long-term protection",
    "Enhanced curb appeal",
];

const tileTypes = [
    {
        name: "Clay Tile Roofing",
        description: "Classic Mediterranean style, natural material, exceptional durability"
    },
    {
        name: "Concrete Tile Roofing",
        description: "Cost-effective alternative, variety of colors, long-lasting performance"
    },
    {
        name: "Slate Tile Roofing",
        description: "Premium natural stone, unparalleled longevity, elegant aesthetic"
    }
];

export default function TileRoofingPage() {
    return (
      <div className="flex flex-col bg-background">
        {/* Hero/Introduction Section */}
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="hero-heading uppercase">
                        TILE ROOFING SERVICES IN GREATER HOUSTON, THE WOODLANDS & SPRING
                    </h1>
                    <p className="hero-description max-w-4xl mx-auto mt-4">
                        At Mend Roofing, we specialize in tile roofing, an elegant and highly durable roofing solution that enhances curb appeal while offering long term protection. Whether you need tile roof installation, tile roof replacement, or tile roof repair, our expert team delivers high quality workmanship using top tier materials. As a trusted roofing company serving Greater Houston, The Woodlands, and Spring, we ensure your home or business is protected by a roof built to last. Looking for roof installation near me or a reliable roofing contractor Spring? Mend Roofing is your trusted partner.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                            <Link href="tel:3462363652">
                                <Phone className="mr-2 h-5 w-5" />
                                Call (346) 236-3652
                            </Link>
                        </Button>
                        <p className="text-sm text-muted-foreground">
                            For a <strong className="text-foreground">FREE</strong> tile roofing estimate
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
                                alt="Tile Roofing in Spring, TX"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="tile roof installation"
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
                       <GetStarted subtitle="Transform your home with elegant tile roofing. Get your free estimate today!" />
                    </div>
                </div>
            </div>
        </section>

        {/* Product Benefits Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-center text-2xl">
                        Why Choose Tile Roofing?
                    </h2>
                    <p className="content-description text-center">
                        Tile roofing is a timeless, energy efficient roofing option that offers unmatched durability and performance. It provides excellent resistance to extreme weather, fire, and pests making it a smart investment for long term protection.
                    </p>
                    <p className="content-description">
                        With a variety of styles and materials available including clay tile roofing, concrete tile roofing, and slate tile roofing, tile roofs offer a custom look that enhances any architectural design. For homeowners searching for roofing installation in Spring, tile roofing is a stylish, high-performance choice.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                        {tileBenefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="content-description">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Experience & Material Quality Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <Award className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Experience & Material Quality
                        </h2>
                    </div>
                    <p className="content-description">
                        With over 20 years of experience, our team at Mend Roofing delivers high quality service and long lasting results. We use only the best materials to ensure your tile roof stands the test of time with long-lasting roofing materials designed for decades of performance.
                    </p>
                    <p className="content-description">
                        We build weather resistant roofing systems that stand up to Houston's harsh climate, protecting your home or commercial property from wind, rain, hail, and heat.
                    </p>
                    <div className="bg-card p-6 rounded-lg shadow-md mt-6">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                                <h3 className="content-heading uppercase mb-2">20+ Years Experience</h3>
                                <p className="content-description text-sm">Proven expertise in tile roofing</p>
                            </div>
                            <div className="text-center">
                                <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
                                <h3 className="content-heading uppercase mb-2">Premium Materials</h3>
                                <p className="content-description text-sm">Top-tier quality for lasting results</p>
                            </div>
                            <div className="text-center">
                                <Building2 className="h-12 w-12 text-primary mx-auto mb-3" />
                                <h3 className="content-heading uppercase mb-2">Weather Resistant</h3>
                                <p className="content-description text-sm">Built for Houston's climate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Energy Efficiency Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <Zap className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Energy Efficient Roofing
                        </h2>
                    </div>
                    <p className="content-description text-lg">
                        Tile roofs naturally insulate your home or building, helping reduce cooling costs year round. Our energy efficient roofing options help you save while keeping your indoor environment comfortable.
                    </p>
                    <div className="bg-card p-6 rounded-lg shadow-md max-w-2xl mx-auto">
                        <p className="content-description">
                            The natural insulating properties of tile roofing help maintain consistent indoor temperatures, reducing the strain on your HVAC system and lowering your energy bills throughout the year.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Safety Features Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <Shield className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Safety Features
                        </h2>
                    </div>
                    <p className="content-description">
                        Our fire resistant roofing and pest resistant roofing materials add an extra layer of safety and durability ideal for protecting your property from natural hazards.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-card p-6 rounded-lg shadow-md">
                            <Flame className="h-10 w-10 text-primary mb-4" />
                            <h3 className="content-heading uppercase mb-3">Fire Resistant</h3>
                            <p className="content-description text-sm">
                                Tile roofing provides superior fire resistance, offering added protection for your property and peace of mind for your family.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-md">
                            <Shield className="h-10 w-10 text-primary mb-4" />
                            <h3 className="content-heading uppercase mb-3">Pest Resistant</h3>
                            <p className="content-description text-sm">
                                Unlike other roofing materials, tile is naturally resistant to pests, termites, and rot, ensuring long-term protection.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Customization Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-2xl text-center">
                        Customize Your Tile Roof
                    </h2>
                    <p className="content-description text-center">
                        Choose from clay, concrete, or slate tile roofing in a range of colors and finishes. These elegant roofing systems can be tailored to match your home's architectural style while delivering reliable performance.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        {tileTypes.map((tile, index) => (
                            <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                                <h3 className="content-heading uppercase mb-3">{tile.name}</h3>
                                <p className="content-description text-sm">{tile.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Service Coverage Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="content-heading uppercase text-2xl text-center">
                        Complete Tile Roofing Services
                    </h2>
                    <p className="content-description text-center">
                        We offer complete tile roofing services for both residential and commercial properties, including:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        {tileServices.map((service, index) => (
                            <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="content-description">{service}</span>
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
                        <Award className="h-8 w-8 text-primary" />
                        <h2 className="content-heading uppercase text-2xl">
                            Trust & Credentials
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
                    <div className="flex items-center gap-4 mb-6">
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
                            <p className="content-description mb-4">
                                Yes, we offer great financing and payment options to ensure that you can get your roof replaced without taking on a huge financial burden.
                            </p>
                            <p className="content-description">
                                Call us at (346) 236-3652 or fill out our online contact form to request a free roofing estimate. We'll assess your roof and provide a detailed quote.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact & Support Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <h2 className="content-heading uppercase text-2xl">
                        Contact & Support
                    </h2>
                    <p className="content-description text-lg">
                        Have questions about our services? We're here to help! Contact us anytime, and our expert team will provide the answers and support you need.
                    </p>
                    <div className="bg-card p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                        <p className="content-description mb-6">
                            Get started today with a free tile roofing consultation. Our experts will evaluate your needs and provide you with an honest assessment and detailed estimate.
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
                            <a href="tel:2813053162" className="text-4xl font-bold hover:opacity-80 transition-opacity flex items-center justify-center gap-3">
                                <Phone className="h-10 w-10" />
                                (281) 305-3162
                            </a>
                        </div>
                        <p className="text-lg opacity-90">
                            Serving Greater Houston, The Woodlands & Spring Area
                        </p>
                    </div>
                    <div className="pt-8 border-t border-primary-foreground/20">
                        <p className="text-sm opacity-75 max-w-3xl mx-auto">
                            By submitting this form, I agree to be contacted by Mend Roofing even if I'm on a Do Not Call List. I agree to this contact from Mend Roofing by email, phone call, or text message at my contact information provided above. I understand that this contact may be generated by an automated technology such as an automated phone dialing system and may use prerecorded voice or messaging. I understand that my agreement to the foregoing is not a condition to purchase any products or services from Mend Roofing. See our <Link href="#" className="underline hover:opacity-80">Privacy Policy</Link> and <Link href="#" className="underline hover:opacity-80">Terms & Conditions</Link> for more details.
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
