"use client";

import * as React from "react";
import {
  BugIcon,
  CodeSquareIcon,
  Flame,
  LayoutDashboardIcon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { ToolSwitcher } from "@/components/tool-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { useSession } from "next-auth/react";

// This is sample data.
const data = {
  tools: [
    {
      name: "Hades",
      logo: Flame,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Errors",
      url: "/dashboard/errors",
      icon: BugIcon,
    },
    {
      title: "Websites",
      url: "/dashboard/websites",
      icon: CodeSquareIcon,
    },
  ],
};

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession();

  const user = {
    name: session?.user?.name || "Unknown",
    email: session?.user?.email || "unknown@example.com",
    avatar: session?.user?.image || "",
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ToolSwitcher tools={data.tools} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
