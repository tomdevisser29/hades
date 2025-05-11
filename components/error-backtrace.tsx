import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Site as PrismaSite } from "@prisma/client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { JsonValue } from "@prisma/client/runtime/library";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { fetchSnippet } from "@/lib/gitlab";
import { redirect } from "next/navigation";

type TraceLine = {
  file?: string;
  line?: number;
  function?: string;
  class?: string;
  type?: string;
  args?: string[];
};

export default async function ErrorBacktrace({
  backtrace,
  site,
}: {
  backtrace: JsonValue | undefined;
  site: PrismaSite;
}) {
  const trace = Array.isArray(backtrace) ? (backtrace as TraceLine[]) : [];
  const filteredTrace = trace.filter((t) => !t.function?.startsWith("charon_"));
  const [first, ...rest] = filteredTrace;
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

  let snippet = "";
  const match = site?.gitlabRepository?.match(/git@([^:]+):(.+)\.git/);
  if (
    match &&
    user?.gitlabToken &&
    site.serverPath &&
    first.file &&
    first.line
  ) {
    const [, , repoPath] = match;
    snippet = await fetchSnippet(
      repoPath,
      user?.gitlabToken,
      first.file,
      site?.serverPath,
      first.line,
      4
    );
  } else {
    console.error("Invalid GitLab repository URL:", site.gitlabRepository);
  }

  return (
    <Collapsible className="w-full space-y-2">
      <CollapsibleTrigger asChild>
        <div className="flex items-center justify-between gap-2 w-full">
          <h2 className="text-2xl font-bold">Error backtrace</h2>
          <Button variant="outline" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </div>
      </CollapsibleTrigger>

      {first && (
        <div className="rounded-md border px-4 py-4 font-mono text-sm shadow-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground text-xs">
              {first.file ?? "unknown"}:{first.line ?? "?"}
            </span>
            <span className="font-medium">
              {[first.class, first.type, first.function]
                .filter(Boolean)
                .join("")}
              ({first.args?.join(", ") ?? ""})
            </span>
            {snippet && (
              <pre className="p-4 border rounded-lg text-muted-foreground mt-2 whitespace-pre-wrap">
                {first.function
                  ? snippet.split(first.function).map((part, index, array) => (
                      <React.Fragment key={index}>
                        {part}
                        {index < array.length - 1 && (
                          <span className="font-semibold text-foreground">
                            {first.function}
                          </span>
                        )}
                      </React.Fragment>
                    ))
                  : snippet}
              </pre>
            )}
          </div>
        </div>
      )}

      <CollapsibleContent className="space-y-2">
        {rest.map((item, index) => (
          <div
            key={index}
            className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm"
          >
            <div className="flex flex-col">
              <span className="text-muted-foreground text-xs">
                {item.file ?? "unknown"}:{item.line ?? "?"}
              </span>
              <span className="font-medium">
                {[item.class, item.type, item.function]
                  .filter(Boolean)
                  .join("")}
                ({item.args?.join(", ") ?? ""})
              </span>
            </div>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
