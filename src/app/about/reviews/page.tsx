
import { GetStarted } from "@/components/get-started";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { ReviewForm } from "@/components/review-form";
import { SendMessageForm } from "@/components/send-message-form";
import Link from "next/link";

const apiKey = "AIzaSyBm0LkkTim0WuseYwItow8Cs71QC077VOc";
const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Fort+Worth,TX&center=32.7555,-97.3308&zoom=10`;

export default function ReviewsPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-3 items-start gap-12">
                    <div className="lg:col-span-1 space-y-12">
                         <h1 className="hero-heading uppercase">
                            REVIEWS
                        </h1>
                        <div className="flex flex-col items-start text-left p-8 border rounded-lg max-w-md">
                            <div className="flex text-yellow-400">
                                <Star fill="currentColor" className="w-6 h-6" />
                                <Star fill="currentColor" className="w-6 h-6" />
                                <Star fill="currentColor" className="w-6 h-6" />
                                <Star fill="currentColor" className="w-6 h-6" />
                                <Star fill="currentColor" className="w-6 h-6" />
                            </div>
                            <p className="mt-4 text-muted-foreground">
                                Your review is important to others by sharing the experience you had with us. Provide details, the more the better, and most importantly, be honest.
                            </p>
                            <ReviewForm>
                                <Button className="mt-4 bg-primary hover:bg-primary/90">
                                    WRITE A REVIEW
                                </Button>
                            </ReviewForm>
                        </div>
                    </div>

                    <div className="sticky top-24 space-y-8 lg:col-span-2">
                       <GetStarted />
                        <div>
                            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src={mapSrc}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                             <div className="mt-4 space-y-2">
                                <h3 className="content-heading uppercase">HEADQUARTERS</h3>
                                <address className="text-sm not-italic text-muted-foreground">
                                    <p>Fort Worth, Texas (Serving Tarrant, Johnson, and Parker counties)</p>
                                    <p>817-233-4524</p>
                                </address>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <SendMessageForm>
                                    <Button variant="outline">SEND MESSAGE</Button>
                                </SendMessageForm>
                                <Button asChild variant="outline">
                                    <a href="https://www.google.com/maps/search/?api=1&query=Fort+Worth,TX" target="_blank" rel="noopener noreferrer">
                                        GET DIRECTIONS
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
