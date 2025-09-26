
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "./ui/button";
import Link from "next/link";

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-home'));

  return (
    <section id="gallery" className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-8">
            <div className="max-w-xl">
                <p className="content-heading uppercase tracking-widest text-destructive mb-2">GALLERY</p>
                <h2 className="hero-heading text-primary mb-4">
                    STRENGTHENING YOUR ROOF
                </h2>
                <p className="content-description text-muted-foreground">
                    We're your partner in long-lasting transformations that leave you better protected against extreme weather conditions.
                </p>
            </div>
            <Button asChild variant="outline" className="mt-6 md:mt-0 shrink-0">
                <Link href="/gallery">VIEW ALL GALLERIES</Link>
            </Button>
        </div>
        <div className="mt-12">
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
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
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
  );
}
