
"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GetStarted } from "@/components/get-started";
import { Minus, Plus, Search } from "lucide-react";

const faqData = {
    "PAINTING QUESTIONS": [
        {
            question: "What types of exterior painting services do you offer?",
            answer: "We specialize in exterior residential painting and exterior commercial painting, using high-quality materials for lasting results."
        },
        {
            question: "What types of exterior painting services do you offer?",
            answer: "Exterior painting cost depends on the size, condition, and materials of the building. We provide clear, custom estimates for every project."
        },
        {
            question: "Do you handle prep work like pressure washing or repairs?",
            answer: "Yes. Surface prep is included to ensure the paint adheres properly and lasts longer."
        },
        {
            question: "What makes you different from other exterior painting contractors?",
            answer: "We're a licensed, experienced exterior painting contractor offering full project management, premium materials, and attention to detail."
        },
        {
            question: "Do you paint James Hardie® siding?",
            answer: "Yes. We are trained to paint James Hardie® fiber cement siding using manufacturer-recommended materials and methods."
        },
        {
            question: "Do you offer financing for painting projects?",
            answer: "Yes. We offer flexible financing through GreenSky, along with in-house options for qualified customers."
        }
    ],
    "ROOFING QUESTIONS": [
        {
            question: "What types of roofing services does US Roofing offer in Augusta and Savannah, GA?",
            answer: "At US Roofing, we provide comprehensive roofing services for both homes and businesses in Augusta and Savannah, GA. Whether you need a simple repair or a full roof replacement, our expert team delivers high-quality work using premium materials."
        }
    ]
};

export default function FaqsPage() {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (value: string) => {
        setOpenItems(prev => 
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    return (
        <div className="flex flex-col bg-background">
            <section className="w-full py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12">
                        <h1 className="hero-heading uppercase">
                            FREQUENTLY ASKED QUESTIONS
                        </h1>
                    </div>
                    <div className="grid lg:grid-cols-3 items-start gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="relative">
                                <Input placeholder="Search questions" className="pr-10" />
                                <Button variant="ghost" size="icon" className="absolute top-1/2 right-1 -translate-y-1/2 h-8 w-8">
                                    <Search className="h-4 w-4" />
                                </Button>
                            </div>
                            <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="w-full">
                                {Object.entries(faqData).map(([category, faqs]) => (
                                    <div key={category} className="mb-8">
                                        <h2 className="content-heading mb-4 uppercase">{category}</h2>
                                        {faqs.map((faq, index) => {
                                            const itemValue = `${category}-${index}`;
                                            const isOpen = openItems.includes(itemValue);
                                            return (
                                                <AccordionItem value={itemValue} key={itemValue} className="border-b">
                                                    <AccordionTrigger onClick={() => toggleItem(itemValue)} className="text-left hover:no-underline">
                                                        <div className="flex items-center justify-between w-full">
                                                            <span>{faq.question}</span>
                                                            {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                                        </div>
                                                    </AccordionTrigger>
                                                    <AccordionContent className="pt-2 pb-4 text-muted-foreground">
                                                        {faq.answer}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            );
                                        })}
                                    </div>
                                ))}
                            </Accordion>
                        </div>
                        <div className="sticky top-24">
                           <GetStarted />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const CustomAccordionTrigger = ({ children, onClick, isOpen }: { children: React.ReactNode, onClick: () => void, isOpen: boolean }) => (
    <div className="flex items-center justify-between w-full py-4 font-medium cursor-pointer" onClick={onClick}>
        <span className="flex-1 text-left">{children}</span>
        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
    </div>
);
