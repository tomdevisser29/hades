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
  gitlabRepository: z.string(),
});

export default function GitLabRepositoryForm({
  initialRepository,
  siteId,
}: {
  initialRepository: string;
  siteId: string;
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gitlabRepository: initialRepository,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch(`/api/sites/${siteId}/repository`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      toast("Updated site settings", {
        description: "You succesfully added your GitLab repository",
      });
      router.refresh();
    } else {
      const errorText = await res.text();
      toast("Failed to add your GitLab repository: " + errorText);
      console.error("Failed to add repository", await res.text());
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="gitlabRepository"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitLab repository</FormLabel>
              <FormControl>
                <Input
                  placeholder="git@gitlab.com:yourgroup/yoursite.git"
                  type="text"
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
        <Button type="submit">
          {initialRepository
            ? "Update GitLab repository"
            : "Link GitLab repository"}
        </Button>
      </form>
    </Form>
  );
}
