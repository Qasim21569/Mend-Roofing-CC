
import { Button } from "@/components/ui/button";
import { Home, Building, CloudDrizzle, Droplets, Rows, Paintbrush } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Home className="h-10 w-10 text-destructive" />,
    title: "RESIDENTIAL ROOFING",
    description: "Home roofers protect your family while enhancing your curb appeal with asphalt, metal, and synthetic tile options.",
    href: "/roofing"
  },
  {
    icon: <Building className="h-10 w-10 text-destructive" />,
    title: "COMMERCIAL ROOFING",
    description: "Commercial roofing experts can enhance all types of specialty exteriors with metal, EPDM, TPO, and modified bitumen materials.",
    href: "/commercial-roofing",
  },
  {
    icon: <CloudDrizzle className="h-10 w-10 text-destructive" />,
    title: "STORM DAMAGE RESTORATION",
    description: "We'll help you recover from hurricane-strength storms with full insurance claims assistance and transparent inspections.",
    href: "/storm-damage"
  },
  {
    icon: <Droplets className="h-10 w-10 text-destructive" />,
    title: "GUTTER INSTALLATION",
    description: "A seamless gutter installation and leaf guard protection can make your exterior more efficient, especially during times of heavy rainfall.",
    href: "/gutters"
  },
  {
    icon: <Rows className="h-10 w-10 text-destructive" />,
    title: "SIDING",
    description: "Our Augusta and Savannah siding company can add longevity to your exterior with complete repairs and replacements customized to your home.",
    href: "/siding"
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-destructive" />,
    title: "PAINTING",
    description: "We'll refresh the interior and exterior of your property with high-quality painting services.",
    href: "/painting"
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-background py-16 sm:py-24">
       <div className="relative">
         <div className="bg-destructive text-destructive-foreground py-16 sm:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center">
                    
                </div>
            </div>
         </div>
        <div className="container mx-auto px-4 md:px-6 -mt-32 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-card shadow-lg">
            {services.map((service, index) => (
                <div key={service.title} className="group p-8 border-b border-r border-border transition-colors hover:bg-destructive">
                    <div className="flex flex-col items-start text-left h-full">
                        <div className="mb-4 text-destructive group-hover:text-white transition-colors">{service.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-white transition-colors" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>{service.title}</h3>
                        <p className="mb-6 flex-grow text-muted-foreground group-hover:text-destructive-foreground/80 transition-colors">{service.description}</p>
                        <Button asChild variant='outline' className="bg-transparent border-gray-800 text-gray-800 group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary-foreground transition-colors">
                        <Link href={service.href}>LEARN MORE</Link>
                        </Button>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
