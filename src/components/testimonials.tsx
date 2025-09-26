
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

const testimonials = [
  {
    name: "Michael R.",
    location: "Fort Worth (Tarrant)",
    avatarId: "testimonial-avatar1",
    quote: "Good Guys replaced our roof after the last hail storm. The entire process was seamless, from the initial inspection to dealing with our insurance. The crew was professional, fast, and left our property spotless. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah and Tom L.",
    location: "Arlington (Tarrant)",
    avatarId: "testimonial-avatar2",
    quote: "We had new siding and gutters installed, and the transformation is incredible. The team was so meticulous with every detail. Our house looks brand new, and we've already noticed a difference in our energy bills.",
    rating: 4.5,
  },
  {
    name: "David Chen",
    location: "Grand Prairie",
    avatarId: "testimonial-avatar1",
    quote: "The team was fantastic. They repaired our storm-damaged roof quickly and worked directly with our insurance company, which was a huge relief. The quality of work is top-notch.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    location: "Burleson (Johnson / Tarrant)",
    avatarId: "testimonial-avatar2",
    quote: "I couldn't be happier with our new metal roof. It looks amazing, and the crew was so respectful of our property during the installation. It's a huge upgrade for our home.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-1 text-yellow-400">
            {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} fill="currentColor" className="w-5 h-5" />)}
            {halfStar && <StarHalf key="half" fill="currentColor" className="w-5 h-5" />}
            {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" />)}
        </div>
    );
};

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="max-w-xl">
                <p className="content-heading uppercase tracking-widest text-primary-foreground/80 mb-2">TESTIMONIALS</p>
                <h2 className="hero-heading text-primary-foreground mb-4">
                    HEAR FROM LOCAL CUSTOMERS
                </h2>
                <p className="content-description text-primary-foreground/80">
                    Learn why homeowners and businesses across the area turn to US Roofing for full-scale remodeling projects and attentive customer service.
                </p>
            </div>
            <Button asChild variant="outline" className="mt-6 md:mt-0 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary shrink-0">
                <Link href="/about/reviews">READ ALL TESTIMONIALS</Link>
            </Button>
        </div>
        <Carousel
            opts={{
              align: "start",
              loop: testimonials.length > 2,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => {
                const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
                return (
                  <CarouselItem key={index} className="md:basis-1/2 pl-4">
                    <div className="p-1 h-full">
                        <Card className="h-full flex flex-col bg-card text-card-foreground">
                            <CardContent className="p-6 flex-grow flex flex-col justify-between">
                                <blockquote className="text-muted-foreground mb-6 flex-grow">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    {avatarImage && (
                                        <Avatar>
                                            <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} />
                                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    )}
                                    <div className="flex-grow">
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                    </div>
                                    <div className="shrink-0">
                                        <StarRating rating={testimonial.rating} />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="text-primary-foreground border-primary-foreground/50 hover:text-primary-foreground -left-12 bg-transparent hover:bg-transparent" />
            <CarouselNext className="text-primary-foreground border-primary-foreground/50 hover:text-primary-foreground -right-12 bg-transparent hover:bg-transparent" />
          </Carousel>
      </div>
    </section>
  );
}
