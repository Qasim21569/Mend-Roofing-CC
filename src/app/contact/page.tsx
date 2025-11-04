"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Phone, MapPin, Calendar, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { FaqSection } from "@/components/faq-section";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const apiKey = "AIzaSyBm0LkkTim0WuseYwItow8Cs71QC077VOc";
const katyMapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=24285+Katy+Fwy+Suite+300-18+Katy+TX+77494&zoom=15`;
const katyDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=24285+Katy+Fwy+Suite+300-18+Katy+TX+77494`;

const serviceAreas = [
  "Spring", "Tomball", "Katy", "The Woodlands", "Conroe",
  "Magnolia", "Montgomery", "Pearland", "San Antonio",
  "Midtown", "Galleria/Uptown", "Heights", "Montrose",
  "Sugar Land", "Pasadena", "Downtown Houston", "Clear Lake"
];

export default function ContactPage() {
  const [selectedLocation, setSelectedLocation] = useState<"houston" | "austin">("houston");
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      zipCode: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(data: ContactFormValues) {
    const result = await submitContactForm(data);
    if (result.success) {
      toast({
        title: "Form Submitted!",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
      });
    }
  }

    return (
      <div className="flex flex-col bg-background">
      {/* Location Selection Section */}
      {/* <section className="w-full py-8 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-center text-lg font-semibold text-foreground mb-6">
              Choose your location
            </h2>
            <div className="flex gap-4 justify-center">
              <Button
                variant={selectedLocation === "houston" ? "default" : "outline"}
                onClick={() => setSelectedLocation("houston")}
                className={selectedLocation === "houston" ? "bg-primary text-white" : ""}
                size="lg"
              >
                HOUSTON
              </Button>
              <Button
                variant={selectedLocation === "austin" ? "default" : "outline"}
                onClick={() => setSelectedLocation("austin")}
                className={selectedLocation === "austin" ? "bg-primary text-white" : ""}
                size="lg"
              >
                AUSTIN
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Us Section */}
        <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="hero-heading uppercase mb-6">
                        CONTACT US
                    </h1>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:346-236-3652" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                  (346) 236-3652
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <address className="text-base text-muted-foreground not-italic">
                  24285 Katy Fwy Suite 300-18, Katy, TX 77494, United States
                </address>
              </div>
            </div>
                </div>

          {/* Map Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full aspect-video">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                  src={katyMapSrc}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
              <div className="p-6 bg-card">
                <p className="text-sm text-muted-foreground mb-4">
                  24285 Katy Fwy Suite 300-18, Katy, TX 77494, USA
                </p>
                <Button asChild className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90">
                  <a href={katyDirectionsUrl} target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Next Steps Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                WHAT ARE THE NEXT STEPS?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Contact Us</h3>
                  <p className="text-muted-foreground mb-2">Call us directly at</p>
                  <a href="tel:346-236-3652" className="text-primary font-semibold hover:underline">
                    (346) 236-3652
                  </a>
                  <p className="text-muted-foreground mt-2">or fill out our contact form</p>
                </div>

                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Schedule an Appointment</h3>
                  <p className="text-muted-foreground mb-2">When we chat, we'll ask questions to help us understand your needs</p>
                  <p className="text-muted-foreground">Pick a Date and Time to meet with a Roof Expert</p>
                </div>

                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Work Performed</h3>
                  <p className="text-muted-foreground mb-2">100% customer satisfaction guaranteed</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2 text-sm font-semibold text-foreground">100+ 5-star reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Email <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Phone <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Zip code</FormLabel>
                        <FormControl>
                          <Input placeholder="77001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How can we help?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="resize-none"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Schedule Free Inspection!"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          {/* Consent & Legal Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-muted rounded-lg p-6 md:p-8 space-y-4 text-sm text-muted-foreground">
              <p>
                By submitting this form, I agree to be contacted by Mend Roofing even if I'm on a Do Not Call List. I agree to this contact from Mend Roofing by email, phone call, or text message at my contact information provided above. I understand that this contact may be generated by an automated technology such as an automated phone dialing system and may use prerecorded voice or messaging. I understand that my agreement to the foregoing is not a condition to purchase any products or services from Mend Roofing.
              </p>
              <p>
                By submitting this form, I also consent to receive SMS messages from Mend Roofing. I understand that message and data rates may apply, and that I may reply STOP to opt-out of future messaging or HELP for assistance. Message frequency may vary. See our <Link href="#" className="underline text-primary hover:text-primary/80">Privacy Policy</Link> and <Link href="#" className="underline text-primary hover:text-primary/80">Terms & Conditions</Link> for more details.
              </p>
            </div>
          </div>

          {/* Areas We Serve Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                Areas We Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We proudly offer services to a wide range of locations, with a focus on:
              </p>
            </div>
            <div className="px-8 md:px-16">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {serviceAreas.map((area, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <div className="text-center p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors h-full">
                        <p className="text-foreground font-medium">{area}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 md:-left-12" />
                <CarouselNext className="-right-4 md:-right-12" />
              </Carousel>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <FaqSection />
          </div>

          {/* General Company Statement */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mend Roofing offers full-scale residential and commercial roofing services across the Houston, TX area. We are certified at the highest levels in the roofing industry. We provide roof repair, replacements, installation, maintenance, and more!
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/blog" className="text-muted-foreground hover:text-primary transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Cookies Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/roofing" className="text-muted-foreground hover:text-primary transition-colors">
                      Residential Roofing
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/financing" className="text-muted-foreground hover:text-primary transition-colors">
                      Financing
                    </Link>
                  </li>
                  <li>
                    <Link href="/commercial-roofing" className="text-muted-foreground hover:text-primary transition-colors">
                      Commercial Roofing
                            </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Office Details Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                Office Details
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Katy Office</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <a href="tel:346-236-3652" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                        (346) 236-3652
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <address className="text-muted-foreground not-italic">
                        24285 Katy Fwy Suite 300-18<br />
                        Katy, TX 77494, United States
                        </address>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Spring Office</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <a href="tel:281-305-3162" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                        (281) 305-3162
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <address className="text-muted-foreground not-italic">
                        24624 Interstate 45 200<br />
                        Spring, TX 77386, United States
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center pt-8 border-t border-border">
                <p className="text-lg font-semibold text-foreground">
                  Office Hours: <span className="text-primary">24 Hours</span>
                </p>
              </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
