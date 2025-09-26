"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CloudLightning, Loader2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { stormReportSchema, type StormReportValues } from "@/lib/schemas";

export function StormReport() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<StormReportValues>({
    resolver: zodResolver(stormReportSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      terms: false,
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(data: StormReportValues) {
    console.log("Storm report submission:", data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Report Requested!",
      description: "We've received your request and will send your report shortly.",
    });
    form.reset();
    setIsOpen(false);
  }

  return (
    <>
      <div className="fixed bottom-4 left-4 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="mb-2 w-[calc(100vw-2rem)] max-w-sm"
            >
              <Card className="flex flex-col max-h-[80vh]">
                <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground p-4">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-lg">Get Instant Input on Condition of Your Roof</h3>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/10" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </CardHeader>
                <CardContent className="p-6 bg-white dark:bg-card overflow-y-auto">
                   <p className="text-sm text-muted-foreground mb-6">Don't be fooled by a roof that looks unaffected. Our free tool can tell you the exact dates and how many times your roof was hit by extreme weather.</p>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField control={form.control} name="fullName" render={({ field }) => ( <FormItem><FormControl><Input placeholder="Full Name" {...field} /></FormControl><FormMessage /></FormItem> )} />
                        <FormField control={form.control} name="email" render={({ field }) => ( <FormItem><FormControl><Input placeholder="Email" {...field} /></FormControl><FormMessage /></FormItem> )} />
                        <FormField control={form.control} name="phone" render={({ field }) => ( <FormItem><FormControl><Input placeholder="Phone" {...field} /></FormControl><FormMessage /></FormItem> )} />
                        <FormField control={form.control} name="address" render={({ field }) => ( <FormItem><FormControl><Input placeholder="Address" {...field} /></FormControl><FormMessage /></FormItem> )} />
                        
                        <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Get Instant Report"
                          )}
                        </Button>

                         <FormField
                            control={form.control}
                            name="terms"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                                <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel className="text-xs font-normal text-muted-foreground">
                                    By checking this box, I authorize Good Guys LLC to send me marketing calls and text messages at the number provided above, including by using an autodialer or a prerecorded message. I understand that I am not required to give this authorization as a condition of doing business with Good Guys LLC.
                                    </FormLabel>
                                    <FormMessage />
                                </div>
                                </FormItem>
                            )}
                            />
                      </form>
                    </Form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          size="icon"
          className="rounded-full w-16 h-16 shadow-lg bg-accent hover:bg-accent/90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <CloudLightning className="h-8 w-8" />}
        </Button>
      </div>
    </>
  );
}
