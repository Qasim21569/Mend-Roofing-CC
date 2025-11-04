
"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const processSteps = [
    {
      value: "step-1",
      title: "CONVENIENT INSPECTION",
      description: "Begin with a free same-day inspection to assess exterior damage, review personalized product options, and receive helpful guidance on your entire project."
    },
    {
      value: "step-2",
      title: "COMPLETE INSTALLATION",
      description: "We combine professional-grade materials with tailored designs to build an exterior that’s not only durable, but is also ready to elevate your curb appeal."
    },
    {
      value: "step-3",
      title: "NOTICEABLE RESULTS",
      description: "Your exterior deserves more than like-new—it’s fully restored with a comprehensive renovation backed by incredible manufacturer warranties."
    }
];

const logoUrl = "/Mend Logo/Mend-Roofing-Logo-white-border-10px.webp";

export function OurProcess() {
    return (
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center p-8">
                             <Image
                                src={logoUrl}
                                alt="Our Process"
                                width={400}
                                height={150}
                                className="object-contain"
                            />
                        </div>
                         <div>
                            <p className="content-heading uppercase text-destructive mb-2">OUR PROCESS</p>
                            <h2 className="hero-heading text-primary mb-4">
                                THE EFFICIENT WAY TO RESTORE YOUR HOME
                            </h2>
                            <p className="content-description text-muted-foreground">
                                Whether you need prompt storm damage restoration or an exterior refresh, we carry out every project with a customer-centric process. We'll handle every step, so you never have to lift a finger. Then, we'll leave you with years of protected craftsmanship ready to stand the test of time.
                            </p>
                        </div>
                    </div>
                     <div>
                        <Accordion type="single" collapsible defaultValue="step-1" className="w-full">
                            {processSteps.map((step, index) => (
                                <AccordionItem key={step.value} value={step.value} className="border-b mb-2">
                                    <AccordionTrigger className="bg-white text-foreground hover:no-underline rounded-md p-0 data-[state=closed]:rounded-md transition-all border">
                                        <div className="flex items-center w-full">
                                            <div className="bg-destructive text-destructive-foreground p-4 rounded-l-md">
                                                <span className="font-bold text-lg" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>STEP {index + 1}</span>
                                            </div>
                                            <span className="font-semibold px-4 flex-1 text-left">{step.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-white p-4 rounded-b-md border-x border-b">
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

