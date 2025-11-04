
import Image from "next/image";
import { Wrench, Palette, MapPin, CreditCard } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Expert Roofing Services",
      description: "Our team brings precision and expertise to every roofing project. With years of combined experience, we ensure every installation, repair, and replacement is completed with meticulous attention to detail and industry best practices."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Customized Roofing Solutions",
      description: "We specialize in TPO roofing, slate roofs, and multi-family roofing services. Our customized approach ensures that each project is tailored to your specific needs, property type, and budget requirements."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Local Expertise You Can Trust",
      description: "As a locally owned and operated business, we understand the unique roofing challenges in Houston and Southeast Texas. Our deep knowledge of local weather patterns and building codes ensures your roof is built to last."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Financing Made Easy",
      description: "We believe quality roofing should be accessible. That's why we offer flexible financing options to make your roofing project affordable. Our team works with you to find a payment plan that fits your budget."
    },
];

const backgroundImage = "https://images.unsplash.com/photo-1512428237937-2051466863b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const houseImage = "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export function WhyChooseUs() {
  return (
    <section className="relative bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
            Why Choose Mend Roofing?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
                <Card key={index} className="bg-card border-0 shadow-lg">
                    <CardContent className="p-6">
                        <div className="flex justify-center mb-4 text-primary">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 text-center" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                            {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base text-center">
                            {feature.description}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
