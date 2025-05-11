import Breadcrumbs from "@/components/breadcrumbs";
import ErrorsTableClient from "@/components/errors-table-client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Error as PrismaError } from "@prisma/client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import prisma from "@/lib/prisma";
import WebsiteActionsDropdown from "@/components/website-actions-dropdown";
import { auth } from "@/auth";
import AssignToSite from "@/components/assign-to-site-button";
import { redirect } from "next/navigation";
import UserCard from "@/components/user-card";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  const { id } = await params;

  if (!session?.user?.email) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user?.id) {
    redirect("/login");
  }

  const site = await prisma.site.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      errors: true,
      users: true,
    },
  });

  const errors = await prisma.error.findMany({
    orderBy: { timestamp: "desc" },
    where: {
      siteId: parseInt(id),
    },
    include: {
      site: true,
    },
  });

  const breadcrumbs = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Websites", href: "/dashboard/websites" },
    { name: site?.url || "" },
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
          <h1 className="font-bold text-4xl">{site?.url}</h1>
          <p className="text-muted-foreground">
            {"First registered at " +
              site?.registeredAt?.toLocaleString("nl-NL", {
                dateStyle: "short",
                timeStyle: "medium",
              })}
          </p>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-8 p-4">
        <section className="flex gap-4 items-center">
          <div className="flex gap-2">
            <AssignToSite
              siteId={parseInt(id)}
              userId={user.id}
              isAssigned={Boolean(site?.users.find((u) => u.id === user.id))}
            />
            <WebsiteActionsDropdown />
          </div>
          <Separator orientation="vertical" />
          <h2 className="font-semibold text-md">Assigned users</h2>
          <div>
            {site?.users.length ? (
              site?.users.map((user) => {
                return <UserCard key={user.id} user={user} />;
              })
            ) : (
              <p className="">No users assigned</p>
            )}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Quick overview</h2>
          <div className="grid md:grid-cols-3 gap-2">
            <Card>
              <CardHeader>Last 60 minutes</CardHeader>
              <CardContent className="text-3xl font-semibold">
                {errors?.filter(
                  (error: PrismaError) =>
                    new Date(error.timestamp) >=
                    new Date(Date.now() - 60 * 60 * 1000)
                ).length ?? 0}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>Fatal errors</CardHeader>
              <CardContent className="text-3xl font-semibold">
                {errors?.filter(
                  (error: PrismaError) => error.type === "exception"
                ).length ?? 0}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>Total errors</CardHeader>
              <CardContent className="text-3xl font-semibold">
                {errors?.length ?? 0}
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Error list</h2>
          <ErrorsTableClient data={errors} />
        </section>
      </main>
    </>
  );
}
