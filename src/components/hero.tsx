"use client";

import { ShieldCheck, DollarSign, Award, Home } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

const heroFormSchema = z.object({
  fullName: z.string().min(1, "Full Name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Invalid phone number."),
  zipCode: z.string().min(5, "Zip code is required."),
  howCanWeHelp: z.string().optional(),
  terms: z.boolean().refine(val  => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

type HeroFormValues = z.infer<typeof heroFormSchema>;

const trustBadges = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    text: "Fully Licensed, Insured & Certified Roofing Company"
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    text: "Affordable Payment Options Available"
  },
  {
    icon: <Award className="h-6 w-6" />,
    text: "Peace of Mind: Workmanship Warranties"
  },
  {
    icon: <Home className="h-6 w-6" />,
    text: "Locally Owned Small Business"
  },
];

const heroImage = "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export function Hero() {
  const { toast } = useToast();
  
  const form = useForm<HeroFormValues>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      zipCode: "",
      howCanWeHelp: "",
      terms: false,
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(data: HeroFormValues) {
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Form Submitted!",
      description: "We've received your request and will be in touch shortly.",
    });
    form.reset();
  }

  return (
    <section id="home" className="relative w-full overflow-hidden min-h-[70vh] lg:min-h-[80vh]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Roofing services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Left Side - Content */}
          <div className="space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Trusted Roofing Company for Roof Replacements, Repairs & New Installations
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Affordable & Reliable Roofing Services in Houston, TX
            </p>
            
            {/* Trust Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-primary shrink-0 mt-1">
                    {badge.icon}
                  </div>
                  <p className="text-white text-sm md:text-base">{badge.text}</p>
                </div>
              ))}
            </div>

            {/* Body Copy */}
            <p className="text-white/80 max-w-lg">
              We provide expert roofing services for residential and commercial properties throughout Houston and Southeast Texas. From storm damage repairs to complete roof replacements, our certified team delivers quality craftsmanship you can trust.
            </p>

            {/* Primary CTA */}
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
              <Link href="tel:3462363652">Call Now!</Link>
            </Button>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                GET A FREE ESTIMATE ON YOUR HOME REPAIRS
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full Name" {...field} className="rounded-md" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Email" {...field} className="rounded-md" />
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
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Phone" {...field} className="rounded-md" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Zip code</FormLabel>
                        <FormControl>
                          <Input placeholder="Zip code" {...field} className="rounded-md" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="howCanWeHelp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How can we help?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project"
                            className="resize-none rounded-md"
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
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-xs text-muted-foreground">
                            By submitting this form, you consent to receive marketing calls and text messages at the number provided, including by using an autodialer or prerecorded message. You are not required to give this consent as a condition of doing business with Mend Roofing. Message and data rates may apply. You can opt-out at any time by replying STOP. View our <Link href="#" className="underline">Privacy Policy</Link> and <Link href="#" className="underline">Terms of Use</Link>.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit"
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
