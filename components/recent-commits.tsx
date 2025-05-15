import { fetchRecentCommits } from "@/lib/gitlab";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { Site as PrismaSite } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/card";
import UserCard from "@/components/user-card";

interface GitLabCommit {
  title: string;
  authorName: string;
  authorEmail: string;
  date: string;
  shortId: string;
}

export default async function RecentCommits({ site }: { site: PrismaSite }) {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
    select: {
      gitlabToken: true,
    },
  });

  const match = site?.gitlabRepository?.match(/git@([^:]+):(.+)\.git/);
  let commits: GitLabCommit[] = [];

  if (match && user?.gitlabToken) {
    const [, , repoPath] = match;
    commits = await fetchRecentCommits(repoPath, user?.gitlabToken);
  } else {
    console.error("Invalid GitLab repository URL:", site.gitlabRepository);
  }

  const authorEmails = commits.map((c) => c.authorEmail);
  const users = await prisma.user.findMany({
    where: {
      email: { in: authorEmails },
    },
  });

  return (
    <div className="py-4 flex flex-col gap-2">
      {commits.length ? (
        commits.map((commit) => {
          const user = users.find((u) => u.email === commit.authorEmail);
          return (
            <Card key={commit.shortId} className="p-2 rounded-sm shadow-none">
              <CardContent className="px-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-semibold">{commit.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {new Date(commit.date).toLocaleString()}
                    </p>
                  </div>
                  {user ? (
                    <UserCard key={user.id} user={user} />
                  ) : (
                    <div className="text-xs text-muted-foreground">
                      {commit.authorEmail}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <p>No commits found. Have you linked a GitLab repository?</p>
      )}
    </div>
  );
}
