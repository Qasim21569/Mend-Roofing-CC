
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";

const reviewSchema = z.object({
  rating: z.number().min(1, "Rating is required."),
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  location: z.string().min(1, "Service location is required."),
  service: z.string().optional(),
  title: z.string().min(1, "Review title is required."),
  review: z.string().min(1, "Review is required.").max(1500, "Review must be 1500 characters or less."),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

const serviceLocations = ["Fort Worth", "Arlington", "Grand Prairie", "Other"];
const serviceTypes = [
  "Roof Installation",
  "Roof Repair",
  "Commercial Roofing",
  "Siding",
  "Gutters",
  "Painting",
  "Other",
];

export function ReviewForm({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const { toast } = useToast();

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: 0,
      name: "",
      email: "",
      location: "",
      service: "",
      title: "",
      review: "",
      terms: false,
    },
  });

  const { isSubmitting } = form.formState;
  const reviewLength = form.watch("review")?.length || 0;

  async function onSubmit(data: ReviewFormValues) {
    console.log("New Review Submission:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Review Submitted!",
      description: "Thank you for your feedback.",
    });
    form.reset();
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[525px] max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle>Rate and Write Your Review</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <ScrollArea className="px-6" style={{ height: 'calc(90vh - 200px)' }}>
              <div className="space-y-4">
                  <div className="space-y-2">
                  <FormLabel>Hover to rate!</FormLabel>
                  <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                          key={star}
                          className={cn(
                          "h-8 w-8 cursor-pointer text-gray-300 transition-colors",
                          (hoverRating >= star || form.getValues("rating") >= star) && "text-yellow-400"
                          )}
                          fill="currentColor"
                          onClick={() => form.setValue("rating", star, { shouldValidate: true })}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                      />
                      ))}
                  </div>
                  <FormField control={form.control} name="rating" render={() => <FormMessage />} />
                  </div>

                  <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>What is your name?</FormLabel>
                      <FormControl>
                          <Input placeholder="Full Name" {...field} />
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
                      <FormLabel>What is your email address?</FormLabel>
                      <FormControl>
                          <Input placeholder="Email Address" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />

                  <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>What service location did you use?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                          <SelectTrigger>
                              <SelectValue placeholder="Select Location" />
                          </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                          {serviceLocations.map((loc) => (
                              <SelectItem key={loc} value={loc}>
                              {loc}
                              </SelectItem>
                          ))}
                          </SelectContent>
                      </Select>
                      <FormMessage />
                      </FormItem>
                  )}
                  />

                  <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>What service are you reviewing? (optional)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                          <SelectTrigger>
                              <SelectValue placeholder="Select Service" />
                          </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                          {serviceTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                              {type}
                              </SelectItem>
                          ))}
                          </SelectContent>
                      </Select>
                      <FormMessage />
                      </FormItem>
                  )}
                  />

                  <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Write a title for your review.</FormLabel>
                      <FormControl>
                          <Input placeholder="Review Title" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />

                  <FormField
                  control={form.control}
                  name="review"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>How was your experience?</FormLabel>
                      <FormControl>
                          <Textarea
                          placeholder="Write Review"
                          className="resize-none"
                          {...field}
                          />
                      </FormControl>
                      <div className="text-xs text-muted-foreground text-right">
                          Character Count: {reviewLength} / 1500
                      </div>
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
                          By checking this box, I authorize Good Guys to send me marketing calls and text messages at the number provided above...
                          </p>
                          <FormMessage />
                      </div>
                      </FormItem>
                  )}
                  />
              </div>
            </ScrollArea>
            <DialogFooter className="p-6 pt-4 border-t">
              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                  <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Posting...
                  </>
              ) : (
                  "POST REVIEW"
              )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
