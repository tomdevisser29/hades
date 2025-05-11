import Breadcrumbs from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckIcon } from "lucide-react";

import PluginOverview from "@/components/plugin-overview";
import ErrorBacktrace from "@/components/error-backtrace";
import ErrorActionsDropdown from "@/components/error-actions-dropdown";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

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
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const error = await prisma.error.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      site: true,
    },
  });

  const breadcrumbs = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Errors", href: "/dashboard/errors" },
    { name: error?.type || "" },
  ];

  return (
    <>
      <header className="shrink-0">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="flex flex-col p-4 gap-2">
          <h1 className="font-bold text-4xl">{error?.type}</h1>
          <p className="text-xl">{error?.message}</p>
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

        <Separator />

        <section>
          <div className="flex flex-row items-center justify-between gap-2 mb-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold">Site information</h2>
              <p className="text-muted-foreground">
                At the time the error occured.
              </p>
            </div>
            {error?.siteId && (
              <Button asChild variant="outline" size="sm">
                <Link href={`/dashboard/websites/${error.siteId}`}>
                  View site in Hades
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-muted-foreground">
            <div>
              <strong className="text-foreground">Domain:</strong>{" "}
              {error?.site.url}
            </div>
            <div>
              <strong className="text-foreground">PHP Version:</strong>{" "}
              {error?.phpVersion}
            </div>
            <div>
              <strong className="text-foreground">WP Version:</strong>{" "}
              {error?.wpVersion}
            </div>
            <div>
              <strong className="text-foreground">Timestamp:</strong>{" "}
              {error?.timestamp?.toLocaleString("nl-NL", {
                dateStyle: "short",
                timeStyle: "medium",
              })}
            </div>
            <div>
              <strong className="text-foreground">Theme:</strong>{" "}
              {isThemeObject(error?.wpTheme)
                ? `${error.wpTheme.name} (${error.wpTheme.version})`
                : "Unknown"}
            </div>
            <PluginOverview plugins={error?.wpPlugins} />
          </div>
        </section>

        <Separator />

        <section>
          {error?.backtrace && <ErrorBacktrace backtrace={error?.backtrace} />}
        </section>
      </main>
    </>
  );
}
