"use client";

import { ContactFormSection } from "@/components/contact-form-section";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="hero-heading uppercase">
              Maintaining a durable roof in Southeast Texas can be challenging...
            </h1>
            <p className="hero-description max-w-3xl mx-auto">
              The region faces scorching summers, strong winds, heavy rain, and hailstorms that can take a toll on your home's first line of defense. At Mend Roofing, we understand these unique challenges and provide the expertise you need to protect your investment.
            </p>
            <div className="bg-card rounded-lg shadow-lg p-6 md:p-8 my-8 space-y-4">
              <p className="text-lg md:text-xl text-foreground font-semibold">
                Led by <strong className="text-primary">Zach Garza</strong>, Mend Roofing specializes in premium-quality roof repair and replacement throughout Southeast Texas.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 w-full sm:w-auto"
                >
                  <Link href="tel:3462363652">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (346) 236-3652
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground">
                  For a <strong className="text-foreground">FREE</strong> roof inspection and estimate
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-base md:text-lg text-muted-foreground">
                  <strong className="text-foreground">Serving:</strong> Cypress and Spring
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="content-heading uppercase mb-6">
                Our Value Proposition
              </h2>
              <p className="hero-description text-xl md:text-2xl leading-relaxed">
                We specialize in crafting tailored roofing solutions to boost protection and enhance efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Get answers to common questions about our roofing services
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem 
                value="item-1" 
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg md:text-xl font-semibold text-foreground pr-4">
                    Are you licensed and insured?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground text-base md:text-lg">
                  Yes, we maintain state-required licensing and are fully insured up to $2,000,000. Additionally, we carry third-party policies with Directorii and Google Guarantee to provide you with extra peace of mind.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2" 
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg md:text-xl font-semibold text-foreground pr-4">
                    Will insurance cover roof replacement?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground text-base md:text-lg">
                  Typically, insurance covers roof replacement when damage results from uncontrollable causes such as hailstorm, windstorm, hurricane, or fire. We can help assess your damage and work with your insurance company to determine coverage eligibility.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3" 
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg md:text-xl font-semibold text-foreground pr-4">
                    Do you offer financing?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground text-base md:text-lg">
                  Yes, we offer great financing and payment options to make your roofing project more affordable. Our team works with you to find a payment plan that fits your budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4" 
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg md:text-xl font-semibold text-foreground pr-4">
                    How to get a quote?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground text-base md:text-lg">
                  You can get a free roofing estimate by calling us at <strong className="text-foreground">(346) 236-3652</strong> or by filling out our online contact form below. We'll schedule a convenient time to inspect your roof and provide a detailed, no-obligation estimate.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                Contact Us Today
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <p className="text-lg text-muted-foreground">Call us directly:</p>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-6"
                >
                  <Link href="tel:3462363652">
                    <Phone className="mr-2 h-5 w-5" />
                    (346) 236-3652
                  </Link>
                </Button>
              </div>
              <p className="text-base text-muted-foreground">
                Or fill out the form below and we'll get back to you promptly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />
    </div>
  );
}
