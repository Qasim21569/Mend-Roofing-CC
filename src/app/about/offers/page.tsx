
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { offerData } from "@/lib/offer-data";

const logoUrl = "https://firebasestorage.googleapis.com/v0/b/jackpot-jungle-c1020.firebasestorage.app/o/GOODGUYS3.png?alt=media&token=1e778559-5ca2-4999-b705-015633edea42";

export default function OffersPage() {
  return (
    <div className="flex flex-col bg-background">
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="hero-heading uppercase">
              GOOD GUYS OFFERS
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerData.map((offer) => (
              <Card key={offer.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative w-full aspect-[16/9] bg-gray-100 flex items-center justify-center p-4">
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
                <CardContent className="p-6 flex-1 flex flex-col">
                  <p className="content-description flex-1">{offer.description}</p>
                  <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90">
                    <Link href={`/about/offers/${offer.slug}`}>{offer.linkText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
