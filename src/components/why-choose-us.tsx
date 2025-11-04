
import Image from "next/image";
import { Award, DollarSign, Handshake, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "CUSTOMER-CENTRIC SERVICE",
      description: "Our family-owned business puts your best interest at the top of everything we do, earning us a BBB accreditation and A+ rating.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "STRESS-FREE ROOFING",
      description: "We'll handle every step of your home remodel, from providing free same-day pricing to assisting with insurance claims.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "FLEXIBLE FINANCING PLANS",
      description: "Make your emergency restoration or exterior update even easier by utilizing financing plans tailored to your budget.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "WARRANTY COVERAGE",
      description: "We cover your roofing project with enhanced manufacturer warranties to build years of additional peace of mind.",
    },
];

const backgroundImage = "https://images.unsplash.com/photo-1512428237937-2051466863b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const houseImage = "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export function WhyChooseUs() {
  return (
    <section className="relative bg-background">
      <div className="container mx-auto grid lg:grid-cols-2">
        <div className="relative text-primary-foreground py-16 px-4 md:px-12">
            <div 
                className="absolute inset-0 bg-primary z-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                }}
            ></div>
            <div className="relative z-10">
                <h1 className="hero-heading uppercase text-white mb-2">WHY CHOOSE US</h1>
                <h2 className="content-heading uppercase tracking-widest text-white mb-4">
                    Protective Fort Worth Roofing Company
                </h2>
                <p className="content-description text-primary-foreground/80 mb-8 max-w-lg">
                    At Mend Roofing Remodeling, we take pride in strengthening properties in our community against extreme weather conditions. We're here to make the roof replacement, storm damage restoration, and home exterior remodeling as easy as possible. Work with a highly trained team of local professionals that make us the "Best Roofer in Fort Worth".
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-white text-foreground">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="bg-destructive text-destructive-foreground rounded-full p-3">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-sm font-bold uppercase" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>{feature.title}</h3>
                                </div>
                                <p className="text-xs text-muted-foreground mt-4">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-0">
          <Image
            src={houseImage}
            alt="Beautiful modern home with a well-maintained roof"
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 0, 50vw"
            data-ai-hint="residential house"
          />
        </div>
      </div>
    </section>
  );
}
