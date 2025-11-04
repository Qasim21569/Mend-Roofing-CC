
import { Home, Building, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const services = [
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: "Residential Roofing",
    description: "Expert repair and installation services for residential properties. We handle everything from minor repairs to complete roof replacements, ensuring your home is protected with quality materials and professional craftsmanship."
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Commercial Roofing",
    description: "Energy-efficient roofing solutions for commercial buildings. Our team specializes in commercial roofing systems that reduce energy costs while providing superior protection for your business property."
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: "Specialized Roofing",
    description: "Premium options including roof coating, slate roofs, metal roofing, and multi-family roofing solutions. We offer specialized services tailored to your unique needs and property requirements."
  },
];

export function CoreServices() {
  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
            Our Core Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


