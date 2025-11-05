
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
    "ROOFING FAQs": [
        {
            question: "Are you licensed and insured?",
            answer: "Yes, we carry all state-required licensing and are fully insured up to $2,000,000. We also have third-party policies with Directorii and Google Guarantee for extra peace of mind for our customers."
        },
        {
            question: "Does insurance cover my roof replacement?",
            answer: "Insurance will typically cover a roof replacement if significant damage is caused by something outside your control, such as a hailstorm, windstorm, hurricane, or fire."
        },
        {
            question: "Can I finance my roof replacement?",
            answer: "Yes, we offer great financing and payment options to ensure that you can get your roof replaced without taking on a huge financial burden."
        },
        {
            question: "How can I get a roofing estimate?",
            answer: "You can call (346) 236-3652 or fill out the online contact form to request a free roofing estimate. The team will assess your roof and provide a detailed quote."
        },
        {
            question: "What roofing services does Mend Roofing offer?",
            answer: "Full-scale residential and commercial roofing services, including roof repair, replacements, installation, maintenance, and more."
        },
        {
            question: "Do you provide emergency roof repair in Houston, Austin, or McAllen?",
            answer: "Emergency roof repair services are available in Houston, Austin, and McAllen regions."
        },
        {
            question: "How do I know if I need a roof replacement or just a repair?",
            answer: "Mend Roofing will assess your roof to help you determine if a full replacement or just a repair is needed."
        },
        {
            question: "What are signs I need roof repair?",
            answer: "Signs may include leaking, missing shingles, storm damage, or other visible deterioration."
        },
        {
            question: "Is Mend Roofing licensed and insured in Texas?",
            answer: "Yes, Mend Roofing is licensed and insured in Texas as mentioned above."
        },
        {
            question: "Do you offer free roof inspections?",
            answer: "Yes, free roof inspections are available."
        },
        {
            question: "What roofing materials do you work with?",
            answer: "Mend Roofing works with a variety of roofing materials (details not provided on the page)."
        },
        {
            question: "Do you help with insurance claims for storm damage?",
            answer: "Yes, help is available for navigating insurance claims for storm damage."
        },
        {
            question: "How long does a typical roof replacement take in Austin or Houston?",
            answer: "Duration depends on the project size; details would be provided during the assessment."
        },
        {
            question: "Why choose Mend Roofing over other roofing contractors in Texas?",
            answer: "Mend Roofing offers high certification levels, third-party guarantees, over 100+ 5-star reviews, 100% satisfaction, and works across major Texas cities."
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
                        <h1 className="hero-heading uppercase text-center">
                            FREQUENTLY ASKED QUESTIONS
                        </h1>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-10">
                        <div className="space-y-8">
                            <div className="relative max-w-md mx-auto">
                                <Input placeholder="Search questions" className="pr-10" />
                                <Button variant="ghost" size="icon" className="absolute top-1/2 right-1 -translate-y-1/2 h-8 w-8">
                                    <Search className="h-4 w-4" />
                                </Button>
                            </div>
                            <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="w-full">
                                {Object.entries(faqData).map(([category, faqs]) => (
                                    <div key={category} className="mb-8">
                                        <h2 className="content-heading mb-4 uppercase text-center">{category}</h2>
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
                        <div className="max-w-2xl mx-auto">
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
