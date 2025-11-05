
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const serviceAreas = [
    'Houston, TX',
    'Arlington',
    'Grand Prairie',
    'Burleson',
    'Keller',
    'North Richland Hills',
    'Mansfield',
    'Hurst',
    'Grapevine',
    'Azle',
    'Other'
];

const customerServiceFormSchema = z.object({
  fullName: z.string().min(1, "Full Name is required."),
  phone: z.string().min(10, "Invalid phone number."),
  email: z.string().email("Invalid email address."),
  address: z.string().min(1, "Full Address is required."),
  serviceArea: z.string().min(1, "Please select a service area."),
  comments: z.string().optional(),
  terms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

type CustomerServiceFormValues = z.infer<typeof customerServiceFormSchema>;

export function CustomerServiceForm() {
    const { toast } = useToast();
    const form = useForm<CustomerServiceFormValues>({
        resolver: zodResolver(customerServiceFormSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            address: "",
            serviceArea: "",
            comments: "",
            terms: false,
        },
    });

    const { isSubmitting } = form.formState;

    async function onSubmit(data: CustomerServiceFormValues) {
        console.log("Customer Service Inquiry:", data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast({
            title: "Message Sent!",
            description: "Thank you! We've received your message and will be in touch shortly.",
        });
        form.reset();
    }

    return (
        <Card>
            <CardHeader className="text-left">
                <CardTitle>HOW CAN WE HELP YOU?</CardTitle>
                <CardDescription>
                    We are here to help answer any questions, comments or concerns you may have. Send us a message and we will respond as soon as we can.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-left">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl><Input placeholder="555-555-5555" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl><Input placeholder="email@example.com" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Address</FormLabel>
                                    <FormControl><Input placeholder="Full Address" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="serviceArea"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Service Area</FormLabel>
                                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Service Area" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {serviceAreas.map(area => (
                                                <SelectItem key={area} value={area}>{area}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="comments"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Comments</FormLabel>
                                    <FormControl>
                                        <Textarea
                                        placeholder="Your comments..."
                                        className="resize-none"
                                        {...field}
                                        />
                                    </FormControl>
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
                                        By checking this box, I authorize Good Guys to contact me and agree to the terms and privacy policy.
                                    </p>
                                    <FormMessage />
                                </div>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg" disabled={isSubmitting}>
                            {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "SEND MESSAGE"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
