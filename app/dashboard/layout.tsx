import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="p-4">{children}</SidebarInset>
    </SidebarProvider>
  );
}
