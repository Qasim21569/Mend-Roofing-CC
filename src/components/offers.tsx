
import { offerData } from "@/lib/offer-data";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

const logoUrl = "/Mend Logo/Mend-Roofing-Logo-white-border-10px.webp";


export function Offers() {
  const offersToShow = offerData.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
            <div>
                <p className="text-sm text-primary font-semibold" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>EXCLUSIVE OFFERS</p>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>LIMITED TIME OFFERS</h2>
            </div>
          <Button asChild variant="outline">
            <Link href="/about/offers">VIEW ALL OFFERS</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offersToShow.map((offer) => (
              <Card key={offer.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative w-full aspect-[16/9] bg-gray-900 flex items-center justify-center p-4">
                  <div className="relative h-24 w-full">
                     <Image
                        src={logoUrl}
                        alt="Good Guys Logo"
                        layout="fill"
                        objectFit="contain"
                     />
                  </div>
                   <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                     <h2 className="text-2xl font-bold text-white uppercase" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                       {offer.title}
                     </h2>
                   </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col bg-white">
                  <p className="font-bold uppercase text-primary">{offer.subtitle}</p>
                  <p className="content-description flex-1 mt-2 text-sm text-gray-700">{offer.description}</p>
                  <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90">
                    <Link href={`/about/offers/${offer.slug}`}>{offer.linkText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
      </div>
    </section>
  );
}
