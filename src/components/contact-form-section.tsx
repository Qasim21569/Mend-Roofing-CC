
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import Link from "next/link";

const services = [
  "Roof Installation",
  "Roof Repair",
  "Commercial Roofing",
  "Siding",
  "Gutters",
  "Windows",
  "Other",
];

export function ContactFormSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(data: ContactFormValues) {
    const result = await submitContactForm(data);
    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
      });
    }
  }

  return (
    <section id="contact" className="bg-muted py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                Get A Free Estimate
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready to start your next project? Fill out the form below and one of our experts will get in touch with you.
              </p>
            </div>
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
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
                        <FormControl>
                          <Input placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service of Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map(service => (
                            <SelectItem key={service} value={service}>{service}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How can we help? (optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="text-xs text-muted-foreground space-y-2 p-4 bg-muted rounded-md">
                  <p>
                    <strong>Consent & TCPA Compliance:</strong> By submitting this form, you consent to receive marketing calls and text messages from Mend Roofing at the number provided above, even if you are on a Do Not Call List. You authorize us to contact you using automated dialing systems, prerecorded messages, and/or text messages for marketing and service-related purposes.
                  </p>
                  <p>
                    <strong>SMS Messaging:</strong> By providing your phone number, you consent to receive SMS text messages from Mend Roofing. Message and data rates may apply. You understand that consent is not a condition of purchase or service.
                  </p>
                  <p>
                    <strong>Opt-Out Options:</strong> You can opt-out of receiving calls or text messages at any time by replying <strong>STOP</strong> to any text message or <strong>HELP</strong> for more information. You may also opt-out by contacting us directly at (346) 236-3652. Message and data rates may apply based on your carrier plan.
                  </p>
                  <p>
                    You are not required to give this consent as a condition of doing business with Mend Roofing. View our <Link href="#" className="underline text-primary hover:text-primary/80">Privacy Policy</Link> and <Link href="#" className="underline text-primary hover:text-primary/80">Terms & Conditions</Link> for more information.
                  </p>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
