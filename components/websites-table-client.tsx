"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  Site as PrismaSite,
  Error as PrismaError,
  User as PrismaUser,
} from "@prisma/client";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { SortableTableColumnHeader } from "@/components/sortable-table-column-header";
import UserCard from "./user-card";

type SiteWithUsers = PrismaSite & {
  errors: PrismaError[];
  users: PrismaUser[];
};

const columns: ColumnDef<SiteWithUsers>[] = [
  {
    accessorKey: "url",
    header: ({ column }) => (
      <SortableTableColumnHeader column={column} title="URL" />
    ),
  },
  {
    id: "totalErrors",
    header: ({ column }) => (
      <SortableTableColumnHeader column={column} title="Total errors" />
    ),
    accessorFn: (row) => row.errors?.length ?? 0,
    cell: ({ getValue }) => getValue(),
  },
  {
    id: "last60Minutes",
    header: ({ column }) => (
      <SortableTableColumnHeader column={column} title="Last 60 minutes" />
    ),
    accessorFn: (row) =>
      row.errors?.filter(
        (error: PrismaError) =>
          new Date(error.timestamp) >= new Date(Date.now() - 60 * 60 * 1000)
      ).length ?? 0,
    cell: ({ getValue }) => getValue(),
  },
  {
    id: "last24Hours",
    header: ({ column }) => (
      <SortableTableColumnHeader column={column} title="Last 24 hours" />
    ),
    accessorFn: (row) =>
      row.errors?.filter(
        (error: PrismaError) =>
          new Date(error.timestamp) >=
          new Date(Date.now() - 24 * 60 * 60 * 1000)
      ).length ?? 0,
    cell: ({ getValue }) => getValue(),
  },
  {
    id: "exceptions",
    header: ({ column }) => (
      <SortableTableColumnHeader column={column} title="Exceptions" />
    ),
    accessorFn: (row) =>
      row.errors?.filter((error: PrismaError) => error.type === "exception")
        .length ?? 0,
    cell: ({ getValue }) => getValue(),
  },
  {
    id: "assigned",
    header: "Assigned",
    cell: ({ row }) => {
      const users = row.original.users;
      if (!users || users.length === 0) {
        return "-";
      }
      return (
        <div className="flex -space-x-2">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const site = row.original;

      return (
        <div className="flex justify-end pr-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link href={`/dashboard/websites/${site.id}`}>
                <DropdownMenuItem className="hover:cursor-pointer">
                  View site
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export default function WebsitesTableClient({
  data,
}: {
  data: SiteWithUsers[];
}) {
  return <DataTable columns={columns} data={data} searchFilter="url" />;
}
