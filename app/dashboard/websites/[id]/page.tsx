import Breadcrumbs from "@/components/breadcrumbs";
import ErrorsTableClient from "@/components/errors-table-client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import prisma from "@/lib/prisma";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const site = await prisma.site.findUnique({
    where: {
      id: parseInt(id),
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
        <div className="flex flex-col p-4">
          <h1 className="font-bold text-xl">{site?.url}</h1>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4">
        <ErrorsTableClient data={errors} />
      </main>
    </>
  );
}
