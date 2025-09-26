"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-home'));
const apiKey = "AIzaSyBm0LkkTim0WuseYwItow8Cs71QC077VOc";
const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Fort+Worth,TX&center=32.7555,-97.3308&zoom=10`;

export default function PastProjectsPage() {
  return (
    <div className="flex flex-col bg-background">
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="hero-heading uppercase mb-8 text-center">Past Projects</h1>

          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg mb-12">
            <iframe
              className="w-full h-full border-0"
              src={mapSrc}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-12">
            <h2 className="hero-heading uppercase text-primary text-center mb-8">
              Our Past Projects
            </h2>

            {galleryImages.length > 0 ? (
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full relative"
              >
                <CarouselContent>
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="overflow-hidden">
                          <CardContent className="relative aspect-video p-0">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-105"
                              data-ai-hint={image.imageHint}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black sm:left-[-20px]" />
                <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black sm:right-[-20px]" />
              </Carousel>
            ) : (
              <div className="flex justify-center items-center h-96 border rounded-lg bg-muted/50">
                <p className="text-2xl text-muted-foreground">Coming Soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
