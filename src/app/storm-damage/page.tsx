import { GetStarted } from "@/components/get-started";
import Image from "next/image";
import { Shield, AlertTriangle, LifeBuoy, Star, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const whyChooseUsPoints = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-accent" />,
      title: "Rapid Storm Response",
      description: "Fast inspections, emergency dry-ins, and guided claims support to minimize damage.",
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Certified Restoration",
      description: "Experienced, insured, and warranty-backed workmanship for long-term protection.",
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-accent" />,
      title: "Insurance Assistance",
      description: "We help document damages and coordinate the claims process from start to finish.",
    },
];

const awards = [
    { src: "https://www.usroofing.us/img/logos/masterelite.png", alt: "GAF Master Elite" },
    { src: "https://www.usroofing.us/img/logos/expertise.png", alt: "Expertise.com Best Roofers in Augusta 2020" },
    { src: "https://www.usroofing.us/img/logos/bbb.png", alt: "BBB Accredited Business" },
    { src: "https://www.usroofing.us/img/logos/gaf.png", alt: "GAF" },
];

export default function StormDamagePage() {
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
                            Full-Coverage Storm Restoration in Fort Worth
                        </h1>
                        <p className="hero-description max-w-md">
                            Bring expert care to your roofing system with skilled restoration specialists trained in hurricane-strength damage.
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
                            src="/images/storm-damage/hero-storm-damage.png"
                            alt="Storm damage restoration"
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
                        src="/images/storm-damage/why-storm-damage.png"
                        alt="Storm response team"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Your Trusted Storm Damage Partner
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        From hail to high winds, we help you navigate the chaos with clear communication, dependable timelines, and top-tier installation standards.
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


