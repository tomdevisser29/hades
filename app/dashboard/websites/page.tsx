import Breadcrumbs from "@/components/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import prisma from "@/lib/prisma";
import WebsitesTableClient from "@/components/websites-table-client";

const breadcrumbs = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Websites" },
];

export default async function Page() {
  const data = await prisma.site.findMany({
    orderBy: { id: "desc" },
    include: {
      errors: true,
      users: true,
    },
  });

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <WebsitesTableClient data={data} />
      </main>
    </>
  );
}
