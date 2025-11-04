"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar as CalendarIcon, Loader2, Star } from "lucide-react";
import { format } from "date-fns";
import Image from "next/image";

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
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Calendar } from "./ui/calendar";

const getStartedSchema = z.object({
  fullName: z.string().min(1, "Full Name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Invalid phone number."),
  fullAddress: z.string().min(1, "Full Address is required."),
  requestAppointment: z.boolean().default(false),
  appointmentDate: z.date().optional(),
  appointmentTime: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type."),
  projectDescription: z.string().optional(),
  terms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions.",
  }),
}).refine(data => {
    if (data.requestAppointment) {
        return !!data.appointmentDate && !!data.appointmentTime;
    }
    return true;
}, {
    message: "Date and time are required for an appointment.",
    path: ["appointmentDate"],
});


type GetStartedFormValues = z.infer<typeof getStartedSchema>;

const projectTypes = [
  "Roof Installation",
  "Roof Repair",
  "Commercial Roofing",
  "Storm Damage",
  "Siding",
  "Gutters",
  "Windows",
  "Other",
];

const timeSlots = [
    "Early Morning",
    "Morning",
    "Noon",
    "Afternoon",
    "Early Evening",
    "Evening"
];

type GetStartedProps = {
  subtitle?: string;
};

export function GetStarted({ subtitle }: GetStartedProps) {
  const { toast } = useToast();
  const pathname = usePathname();

  const form = useForm<GetStartedFormValues>({
    resolver: zodResolver(getStartedSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      fullAddress: "",
      requestAppointment: false,
      projectType: "",
      projectDescription: "",
      terms: false,
    },
  });

  useEffect(() => {
    if (
      pathname === '/commercial-roofing' ||
      pathname === '/commercial-roofing/replacement' ||
      pathname === '/commercial-roofing/repair' ||
      pathname === '/commercial-roofing/types'
    ) {
      form.setValue('projectType', 'Commercial Roofing');
    }
    if (
      pathname === '/storm-damage' ||
      pathname === '/storm-damage/insurance-claims' ||
      pathname === '/storm-damage/home-insurance-claims' ||
      pathname === '/storm-damage/hail-damage' ||
      pathname === '/storm-damage/hurricane-damage'
    ) {
      form.setValue('projectType', 'Storm Damage');
    }
    if (
      pathname === '/siding' ||
      pathname === '/siding/replacement' ||
      pathname === '/siding/repair' ||
      pathname === '/siding/types' ||
      pathname === '/siding/replacement-costs' ||
      pathname === '/siding-replacement-cost'
    ) {
      form.setValue('projectType', 'Siding');
    }
  }, [pathname, form]);

  const { isSubmitting } = form.formState;

  const requestAppointment = useWatch({
      control: form.control,
      name: "requestAppointment"
  })

  async function onSubmit(data: GetStartedFormValues) {
    // This is a temporary handler, you can replace it with your own logic.
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Form Submitted!",
      description: "We've received your request and will be in touch shortly.",
    });
    form.reset();
  }

  return (
    <section id="get-started" className="bg-primary text-primary-foreground py-12 relative z-10 mx-4 md:mx-8 lg:mx-0 rounded-lg shadow-2xl my-16 lg:my-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" className="h-8 w-8"><path d="M32.582 370.734C15.127 336.291 5.12 297.425 5.12 256c0-41.426 10.007-80.291 27.462-114.735C74.705 57.484 161.047 0 261.12 0c69.12 0 126.836 25.367 171.287 66.793l-73.31 73.309c-26.763-25.135-60.276-38.168-97.977-38.168-66.56 0-123.113 44.917-143.36 105.426-5.12 15.36-8.146 31.65-8.146 48.64 0 16.989 3.026 33.28 8.146 48.64l-.303.232h.303c20.247 60.51 76.8 105.426 143.36 105.426 34.443 0 63.534-9.31 86.341-24.67 27.23-18.152 45.382-45.148 51.433-77.032H261.12v-99.142h241.105c3.025 16.757 4.654 34.211 4.654 52.364 0 77.963-27.927 143.592-76.334 188.276-42.356 39.098-100.305 61.905-169.425 61.905-100.073 0-186.415-57.483-228.538-141.032v-.233z" fill="#fff"/></svg>
                <div>
                    <div className="flex text-yellow-400">
                        <Star fill="currentColor" className="w-5 h-5" />
                        <Star fill="currentColor" className="w-5 h-5" />
                        <Star fill="currentColor" className="w-5 h-5" />
                        <Star fill="currentColor" className="w-5 h-5" />
                        <Star fill="currentColor" className="w-5 h-5" />
                    </div>
                    <p className="text-xs mt-1">
                        4.8 out of 5 <br/>
                        Out of 291 Google Reviews
                    </p>
                </div>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              GET STARTED TODAY!
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-md">
              {subtitle ?? "Save $1,000 on your full commercial roof replacement. Request your custom estimate!"}
            </p>
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
                <Link href="#contact">GET A FREE ESTIMATE</Link>
            </Button>
          </div>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-4">
                        <FormField control={form.control} name="fullName" render={({ field }) => ( <FormItem><FormControl><Input placeholder="Full Name" {...field} className="bg-white text-gray-900 placeholder:text-gray-500" /></FormControl><FormMessage /></FormItem> )} />
                        <FormField control={form.control} name="email" render={({ field }) => ( <FormItem><FormControl><Input placeholder="Email Address" {...field} className="bg-white text-gray-900 placeholder:text-gray-500" /></FormControl><FormMessage /></FormItem> )} />
                        <FormField control={form.control} name="phone" render={({ field }) => ( <FormItem><FormControl><Input placeholder="Phone Number" {...field} className="bg-white text-gray-900 placeholder:text-gray-500" /></FormControl><FormMessage /></FormItem> )} />
                        <FormField control={form.control} name="fullAddress" render={({ field }) => ( <FormItem><FormControl><Input placeholder="Full Address" {...field} className="bg-white text-gray-900 placeholder:text-gray-500" /></FormControl><FormMessage /></FormItem> )} />
                    </div>
                    <div className="space-y-4">
                         <FormField
                            control={form.control}
                            name="requestAppointment"
                            render={({ field }) => (
                            <FormItem>
                                 <Button
                                    type="button"
                                    onClick={() => field.onChange(!field.value)}
                                    className={cn(
                                        "w-full justify-center text-sm font-normal",
                                        field.value ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-white text-gray-900 hover:bg-gray-100"
                                    )}
                                    >
                                    Book now
                                </Button>
                            </FormItem>
                            )}
                        />
                        {requestAppointment && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="appointmentDate"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                        <Popover>
                                            <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal bg-white text-gray-900 hover:bg-white hover:text-gray-900",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                                >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date < new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                            />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="appointmentTime"
                                    render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="bg-white text-gray-900">
                                            <SelectValue placeholder="Time" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {timeSlots.map(time => (
                                                <SelectItem key={time} value={time}>{time}</SelectItem>
                                            ))}
                                        </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </>
                        )}
                        <FormField
                            control={form.control}
                            name="projectType"
                            render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-white text-gray-900">
                                    <SelectValue placeholder="PROJECT TYPE" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {projectTypes.map(type => (
                                    <SelectItem key={type} value={type}>{type}</SelectItem>
                                    ))}
                                </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                            )}
                        />

                        <FormField
                        control={form.control}
                        name="projectDescription"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Textarea
                                placeholder="Project Description"
                                className="resize-none bg-white text-gray-900 placeholder:text-gray-500"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                </div>

                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-4">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} className="border-white data-[state=checked]:bg-accent data-[state=checked]:border-accent" />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-xs font-normal text-primary-foreground/70">
                        By checking this box, I authorize Mend Roofing to send me marketing calls and text messages at the number provided above, including by using an autodialer or a prerecorded message. I understand that I am not required to give this authorization as a condition of doing business with Mend Roofing. By checking this box, I am also agreeing to Mend Roofing's <Link href="#" className="underline">Terms of Use</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 border border-black" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
