import { GetStarted } from "@/components/get-started";
import Image from "next/image";
import { Shield, DollarSign, Star, ClipboardCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const whyChooseUsPoints = [
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "High-Quality Materials",
      description: "We've chosen durable siding materials that are ideal for heavy impact, high UV exposure, and hurricane-grade winds.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-accent" />,
      title: "Tailored Financing Plans",
      description: "We'll help you receive long-lasting services that are still affordable, with access to flexible financing options.",
    },
    {
      icon: <Star className="h-8 w-8 text-accent" />,
      title: "Top-Rated Siding Installers",
      description: "Our customer-centric approach to remodeling makes us the BBB-accredited and A+ rated choice for comprehensive improvements.",
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-accent" />,
      title: "Easy Siding Inspections",
      description: "Get a head start on property damage with a free siding inspection and same-day price estimate.",
    },
];

const awards = [
    { src: "/images/siding/hero-logo1.png", alt: "Siding Partner Logo 1" },
    { src: "/images/siding/hero-logo2.png", alt: "Siding Partner Logo 2" },
    { src: "/images/siding/hero-logo3.png", alt: "Siding Partner Logo 3" },
];

export default function SidingPage() {
    return (
      <div className="flex flex-col">
        <section id="home" className="relative w-full bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 items-center gap-8 min-h-[calc(80vh-120px)] py-12">
                    <div className="space-y-6 text-foreground">
                        <div className="flex items-center gap-1">
                            <Star className="w-8 h-8 text-gray-300 fill-gray-300" />
                            <Star className="w-8 h-8 text-gray-300 fill-gray-300" />
                            <Star className="w-8 h-8 text-gray-300 fill-gray-300" />
                        </div>
                        <h1 className="hero-heading uppercase">
                            Durable Siding Solutions in Fort Worth
                        </h1>
                        <p className="hero-description max-w-md">
                            We'll defend your exterior with storm-resistant siding services personalized to your unique weather challenges.
                        </p>
                        <div className="flex items-center gap-4 overflow-x-auto py-4">
                            {awards.map((award, index) => (
                                <Image key={index} src={award.src} alt={award.alt} width={100} height={100} className="object-contain h-16 w-auto" />
                            ))}
                        </div>
                    </div>

                    <div className="relative w-full h-64 lg:h-full min-h-[300px] lg:min-h-[500px]">
                        <Image
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                            src="/images/siding/siding-hero-section.png"
                            alt="Siding installation services"
                            fill
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
                    <Image
                        src="/images/siding/why-choose-us.png"
                        alt="Siding installation team"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            Why Choose Us
                        </h2>
                        <h3 className="text-2xl font-bold tracking-tight text-primary">
                            Enhanced Fort Worth Siding Replacement
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            At Good Guys Roofing, we make sure your entire exterior is ready for the force of hurricane-grade weather. As a local Fort Worth siding company, we combine resistant materials with trusted craftsmen to deliver reliable results every time. Our family-owned business is here to make property protection a step easier as we quell the storm on your behalf.
                        </p>
                    </div>
                    <div className="space-y-6">
                        {whyChooseUsPoints.map((point, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0">{point.icon}</div>
                                <div>
                                    <h3 className="text-lg font-semibold">{point.title}</h3>
                                    <p className="text-muted-foreground">{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                     <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
                        <Link href="#get-started">Get Your Free Estimate</Link>
                    </Button>
                </div>
                </div>
            </div>
        </section>

        <GetStarted subtitle="Refresh your home's look—use inspection credit. Schedule your siding estimate!" />
      </div>
    );
}
