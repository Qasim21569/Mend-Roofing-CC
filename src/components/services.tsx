import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home, Wrench, Building2, Layers, CloudRain, PanelTop } from "lucide-react";

const services = [
  {
    icon: <Home className="h-10 w-10 text-accent" />,
    title: "Roof Installation",
    description: "Expert installation of new roofs with a variety of materials to suit your home and budget.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-accent" />,
    title: "Roof Repair",
    description: "Prompt and reliable repairs for leaks, storm damage, and wear and tear to protect your property.",
  },
  {
    icon: <Building2 className="h-10 w-10 text-accent" />,
    title: "Commercial Roofing",
    description: "Specialized roofing solutions for businesses, including flat roofs and industrial-grade materials.",
  },
  {
    icon: <Layers className="h-10 w-10 text-accent" />,
    title: "Siding",
    description: "Enhance and protect your property with our durable and attractive siding installation services.",
  },
  {
    icon: <CloudRain className="h-10 w-10 text-accent" />,
    title: "Gutters",
    description: "Professional gutter installation and maintenance to ensure proper drainage and prevent water damage.",
  },
  {
    icon: <PanelTop className="h-10 w-10 text-accent" />,
    title: "Windows",
    description: "Upgrade your home's energy efficiency and curb appeal with our high-quality window replacements.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-card py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a comprehensive range of roofing and exterior services to meet all your needs.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center p-6 text-center transition-transform hover:scale-105 hover:shadow-lg">
              <CardHeader className="items-center p-0">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
