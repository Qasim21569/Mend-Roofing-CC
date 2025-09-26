
import { offerData } from "@/lib/offer-data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { z } from "zod";
import { OfferForm } from "./offer-form";


// This function needs to be outside the component that uses "use client"
export async function generateStaticParams() {
  return offerData.map((offer) => ({
    slug: offer.slug,
  }));
}

export default function OfferDetailPage({ params }: { params: { slug: string } }) {
    const offer = offerData.find((o) => o.slug === params.slug);

    if (!offer) {
        notFound();
    }

    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-3 items-start gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                             <h1 className="hero-heading uppercase">
                                {offer.title}
                            </h1>
                             <p className="hero-description mt-2">
                                {offer.subtitle}
                            </p>
                        </div>
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gray-100 p-8">
                             <div className="relative h-48 w-full">
                                <Image
                                    src={offer.image}
                                    alt={offer.title}
                                    fill
                                    priority
                                    className="object-contain"
                                />
                             </div>
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                                <h2 className="text-4xl font-bold text-white uppercase text-center" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                                    {offer.title}
                                </h2>
                             </div>
                        </div>
                        <div 
                            className="prose max-w-none content-description"
                            dangerouslySetInnerHTML={{ __html: offer.content }}
                        />
                    </div>

                    <div className="sticky top-24">
                       <OfferForm offerTitle={offer.title} />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
