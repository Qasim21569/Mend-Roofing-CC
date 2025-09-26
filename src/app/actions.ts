"use server";

import { contactFormSchema } from "@/lib/schemas";

export async function submitContactForm(data: unknown) {
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }
  
  // In a real app, you would process the data, e.g., send an email, save to a database.
  console.log("New contact form submission:", result.data);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, data: result.data };
}
