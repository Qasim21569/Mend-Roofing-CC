
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
      number: "1",
      title: "Contact Us",
      description: [
        "Call directly at (346) 236-3652 or (281) 305-3162",
        "Fill out contact form"
      ]
    },
    {
      value: "step-2",
      number: "2",
      title: "Schedule an Appointment",
      description: [
        "Chat to understand situation and needs",
        "Pick a Date and Time to meet with Roof Expert"
      ]
    },
    {
      value: "step-3",
      number: "3",
      title: "Work Performed",
      description: [
        "100% customer satisfaction guaranteed",
        "Over 100+ 5-star reviews"
      ]
    }
];

const logoUrl = "/Mend Logo/Mend-Roofing-Logo-white-border-10px.webp";

export function OurProcess() {
    return (
        <section className="py-16 sm:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                        WHAT ARE THE NEXT STEPS?
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {processSteps.map((step, index) => (
                        <div key={step.value} className="relative">
                            {/* Connection Line (not for last item) */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-primary z-0" style={{ width: 'calc(100% - 48px)', marginLeft: '24px' }} />
                            )}
                            <div className="relative bg-card rounded-lg shadow-lg p-8 text-center">
                                <div className="w-24 h-24 mx-auto mb-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                                    <span className="text-4xl font-bold" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                                    {step.title}
                                </h3>
                                <ul className="text-left space-y-2 text-muted-foreground">
                                    {step.description.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

