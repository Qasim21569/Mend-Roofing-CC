
import { Button } from "@/components/ui/button";
import { SendMessageForm } from "@/components/send-message-form";
import { Facebook } from "lucide-react";
import Link from "next/link";

const apiKey = "AIzaSyBm0LkkTim0WuseYwItow8Cs71QC077VOc";
const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Fort+Worth,TX&center=32.7555,-97.3308&zoom=10`;

export default function ContactPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
                <div className="mb-12">
                    <h1 className="hero-heading uppercase">
                        CONTACT US
                    </h1>
                </div>
                <div className="w-full max-w-2xl">
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={mapSrc}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="mt-8 text-center space-y-4">
                        <h3 className="content-heading uppercase">HEADQUARTERS GOOD GUYS</h3>
                        <address className="text-sm not-italic text-muted-foreground space-y-1">
                            <p>Fort Worth, Texas (Serving Tarrant, Johnson, and Parker counties)</p>
                            <p>817-233-4524</p>
                            <Link href="#" className="flex items-center justify-center gap-2 hover:text-primary">
                                <Facebook className="h-4 w-4" />
                                <span>Facebook</span>
                            </Link>
                        </address>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-sm mx-auto">
                        <SendMessageForm>
                            <Button>SEND MESSAGE</Button>
                        </SendMessageForm>
                        <Button asChild>
                            <a href="https://www.google.com/maps/search/?api=1&query=Fort+Worth,TX" target="_blank" rel="noopener noreferrer">
                                GET DIRECTIONS
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
