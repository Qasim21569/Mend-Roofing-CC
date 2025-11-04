
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we carry all state-required licensing and are fully insured up to $2,000,000. We also have third-party policies with Directorii and Google Guarantee for extra peace of mind for our customers."
  },
  {
    question: "Does insurance cover my roof replacement?",
    answer: "Insurance coverage for roof replacement depends on the cause of damage and your specific policy. We can help assess damage and work with your insurance company to determine coverage. Storm damage, hail, and wind damage are typically covered, while normal wear and tear may not be."
  },
  {
    question: "Can I finance my roof replacement?",
    answer: "Yes, we offer flexible financing options to make your roof replacement affordable. Our team works with you to find a payment plan that fits your budget, with various financing options available for qualified customers."
  },
  {
    question: "How can I get a roofing estimate?",
    answer: "You can get a free estimate by calling us at (346) 236-3652 or (281) 305-3162, or by filling out our contact form. We'll schedule a convenient time to inspect your roof and provide a detailed, no-obligation estimate."
  },
];

export function FaqSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
              Any Questions? Check out our FAQ's
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions about our services? We're here to help! Contact us anytime, and our expert team will provide the answers and support you need.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg md:text-xl font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground text-base md:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/about/faqs">More FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


