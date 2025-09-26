
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";


const offerFormSchema = z.object({
  fullName: z.string().min(1, "Full Name is required."),
  phone: z.string().min(10, "Invalid phone number."),
  email: z.string().email("Invalid email address."),
  address: z.string().min(1, "Full Address is required."),
  terms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

type OfferFormValues = z.infer<typeof offerFormSchema>;

export function OfferForm({ offerTitle }: { offerTitle: string }) {
    const { toast } = useToast();
    const form = useForm<OfferFormValues>({
        resolver: zodResolver(offerFormSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            address: "",
            terms: false,
        },
    });

    const { isSubmitting } = form.formState;

    async function onSubmit(data: OfferFormValues) {
        console.log("Offer Inquiry:", { offerTitle, ...data });
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast({
            title: "Inquiry Sent!",
            description: "Thank you! We've received your inquiry and will be in touch shortly.",
        });
        form.reset();
    }

    return (
        <Card>
            <CardContent className="p-6">
                <h3 className="text-xl font-bold text-center mb-4">Learn More About This Offer</h3>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl><Input placeholder="Full Name" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl><Input placeholder="Phone" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl><Input placeholder="Email" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl><Input placeholder="Full Address" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="terms"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                                <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <p className="text-xs font-normal text-muted-foreground">
                                        By checking this box, I authorize Good Guys to contact me.
                                    </p>
                                    <FormMessage />
                                </div>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg" disabled={isSubmitting}>
                            {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "Submit Inquiry"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
