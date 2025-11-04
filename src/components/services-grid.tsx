
import { Button } from "@/components/ui/button";
import { Wrench, Building2, CloudDrizzle, HardHat } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: <Wrench className="h-12 w-12" />,
    title: "Roof Repair",
    description: "Expert repair services to fix leaks, damage, and extend the life of your roof.",
    href: "/roofing/repair",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <Building2 className="h-12 w-12" />,
    title: "Roof Replacement",
    description: "Complete roof replacement services using premium materials and expert craftsmanship.",
    href: "/roofing/replacement",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <CloudDrizzle className="h-12 w-12" />,
    title: "Storm Damage",
    description: "Comprehensive storm damage restoration with insurance claim assistance.",
    href: "/storm-damage",
    image: "https://images.unsplash.com/photo-1512428237937-2051466863b7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <HardHat className="h-12 w-12" />,
    title: "Commercial Roofing",
    description: "Energy-efficient commercial roofing solutions for businesses and properties.",
    href: "/commercial-roofing",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in crafting tailored roofing solutions to boost protection and enhance efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  {service.icon}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {service.description}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/roofing">All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
