"use client";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  gitlabToken: z.string(),
});

export default function AccountSettings({
  initialToken,
}: {
  initialToken: string;
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gitlabToken: initialToken,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch("/api/account/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      toast("Updated account settings", {
        description: "You succesfully updated your GitLab token",
      });
      router.refresh();
    } else {
      const errorText = await res.text();
      toast("Failed to update your GitLab token: " + errorText);
      console.error("Failed to save token", await res.text());
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="gitlabToken"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitLab token</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your personal access token"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is used to retrieve code and generate fixes.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update settings</Button>
      </form>
    </Form>
  );
}
