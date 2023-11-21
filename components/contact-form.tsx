"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(4, {
    message: "Name must be at least 4 characters.",
  }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().optional(),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // send email
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/email", values);
      toast.success("Thank You For Contacting Us", {
        description: "Our team will contact you within 2 hours.",
      });
      form.reset();
    } catch (error) {
      toast.error("Sorry Something Went Wrong:(");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Name</FormLabel>
              <FormControl>
                <Input size="lg" placeholder="John Doe" {...field} />
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
              <FormLabel className="text-base">Email</FormLabel>
              <FormControl>
                <Input size="lg" placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">
                Message{" "}
                <span className="text-muted-foreground font-light">
                  (optional)
                </span>{" "}
              </FormLabel>
              <FormControl>
                <Textarea
                  size="lg"
                  minRows={10}
                  placeholder="Enter your message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          fullWidth
          size="lg"
          color="primary"
          type="submit"
          isLoading={isLoading}
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
