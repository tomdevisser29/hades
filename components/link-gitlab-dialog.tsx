import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import GitLabRepositoryForm from "@/components/gitlab-repository-form";

export default async function LinkGitLabDialog({
  initialRepository,
  siteId,
}: {
  initialRepository: string | null | undefined;
  siteId: string;
}) {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      gitlabToken: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  {
    return (
      user.gitlabToken && (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="lg"
              variant="default"
              className="bg-[#e24329] hover:bg-[#fc6d26]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"></path>
              </svg>
              {initialRepository ? initialRepository : "Link GitLab repository"}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Link your GitLab repository</DialogTitle>
              <DialogDescription>
                By linking GitLab, we can suggest fixes and show the code where
                the errors occur.
              </DialogDescription>
            </DialogHeader>
            <GitLabRepositoryForm
              siteId={siteId}
              initialRepository={initialRepository ?? ""}
            />
          </DialogContent>
        </Dialog>
      )
    );
  }
}
