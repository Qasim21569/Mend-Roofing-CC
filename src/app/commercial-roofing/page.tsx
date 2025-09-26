import { GetStarted } from "@/components/get-started";
import Image from "next/image";
import { CheckCircle, Shield, Star, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const whyChooseUsPoints = [
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Industry-Leading Warranties",
      description: "We stand behind our work with robust warranties that cover both materials and labor, giving you long-term peace of mind."
    },
    {
        icon: <Shield className="h-8 w-8 text-accent" />,
        title: "Fully Licensed & Insured",
        description: "Our teams are fully licensed and insured, ensuring your project is handled professionally and safely from start to finish."
    },
    {
        icon: <Users className="h-8 w-8 text-accent" />,
        title: "Expert Team",
        description: "Our certified and experienced roofers specialize in commercial projects, delivering quality craftsmanship every time."
    },
];

const awards = [
    { src: 'https://www.usroofing.us/img/logos/masterelite.png', alt: 'GAF Master Elite' },
    { src: 'https://www.usroofing.us/img/logos/expertise.png', alt: 'Expertise.com Best Roofers in Augusta 2020' },
    { src: 'https://www.usroofing.us/img/logos/bbb.png', alt: 'BBB Accredited Business' },
    { src: 'https://www.usroofing.us/img/logos/gaf.png', alt: 'GAF' },
];

export default function CommercialRoofingPage() {
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
                        <h1 className="hero-heading">
                            EXPERT FORT WORTH
                            <br />
                            COMMERCIAL
                            <br />
                            ROOFING SERVICES
                        </h1>
                        <p className="hero-description max-w-md">
                            We help all types of local businesses protect their vulnerable exteriors with full-scale commercial roofing solutions.
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
                            src="https://www.usroofing.us/img/page/hero-commercial.jpg"
                            alt="Commercial roofing project"
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
                        src="https://picsum.photos/seed/comm-why/600/800"
                        alt="Commercial roofing team"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        data-ai-hint="roofing team"
                    />
                </div>
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Your Trusted Commercial Roofing Partner
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        At Good Guys, we understand the unique challenges of commercial roofing. We are committed to providing durable, cost-effective solutions that protect your investment and minimize disruption to your operations.
                    </p>
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

        <GetStarted />
      </div>
    );
  }