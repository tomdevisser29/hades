import Breadcrumbs from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";

import ErrorBacktrace from "@/components/error-backtrace";
import ErrorActionsDropdown from "@/components/error-actions-dropdown";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import prisma from "@/lib/prisma";
import { CheckIcon } from "lucide-react";

function isThemeObject(
  value: unknown
): value is { name: string; version: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    "name" in value &&
    "version" in value
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const error = await prisma.error.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  const breadcrumbs = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Errors", href: "/dashboard/errors" },
    { name: error?.type || "" },
  ];

  return (
    <>
      <header className="shrink-0 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="flex flex-col p-4">
          <h1 className="font-bold text-xl">{error?.type}</h1>
          <p className="">{error?.message}</p>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-8 p-4">
        <section className="flex gap-2">
          <Button size="lg">
            <CheckIcon />
            Mark as resolved
          </Button>
          <ErrorActionsDropdown />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm text-muted-foreground">
          <div>
            <strong className="text-foreground">PHP Version:</strong>{" "}
            {error?.phpVersion}
          </div>
          <div>
            <strong className="text-foreground">WP Version:</strong>{" "}
            {error?.wpVersion}
          </div>
          <div>
            <strong className="text-foreground">Theme:</strong>{" "}
            {isThemeObject(error?.wpTheme)
              ? `${error.wpTheme.name} (${error.wpTheme.version})`
              : "Unknown"}
          </div>
          <div>
            <strong className="text-foreground">Timestamp:</strong>{" "}
            {error?.timestamp?.toLocaleString("nl-NL", {
              dateStyle: "short",
              timeStyle: "medium",
            })}
          </div>
        </section>

        <section>
          <ErrorBacktrace backtrace={error?.backtrace} />
        </section>
      </main>
    </>
  );
}
