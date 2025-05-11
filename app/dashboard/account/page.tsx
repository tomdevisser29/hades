import AccountSettings from "@/components/account-settings";
import Breadcrumbs from "@/components/breadcrumbs";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const breadcrumbs = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Account" },
];

export default async function Account() {
  const session = await auth();
  if (!session?.user?.email) {
    redirect("/login");
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { gitlabToken: true },
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
        <AccountSettings initialToken={user?.gitlabToken ?? ""} />
      </main>
    </>
  );
}
