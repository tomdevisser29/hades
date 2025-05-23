"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Error as PrismaError } from "@/app/generated/prisma/client";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { SortableTableColumnHeader } from "@/components/sortable-table-column-header";

const columns: ColumnDef<PrismaError>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.original.type;
      return (
        <Badge variant={type === "exception" ? "default" : "secondary"}>
          {type}
        </Badge>
      );
    },
  },
  {
    accessorKey: "site.url",
    header: "Site",
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => {
      const msg = row.original.message;
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>{msg.length > 40 ? msg.slice(0, 40) + "..." : msg}</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>{msg}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    accessorKey: "timestamp",
    header: ({ column }) => (
      <SortableTableColumnHeader column={column} title="Timestamp" />
    ),
    cell: ({ row }) => {
      const value = row.original.timestamp;
      return (
        <span suppressHydrationWarning>
          {new Date(value).toLocaleString("nl-NL", {
            dateStyle: "short",
            timeStyle: "medium",
          })}
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const error = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={`/dashboard/errors/${error.id}`}>
              <DropdownMenuItem className="hover:cursor-pointer">
                View error
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/websites/${error.siteId}`}>
              <DropdownMenuItem className="hover:cursor-pointer">
                View website
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Mark as resolved</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function ErrorsTableClient({ data }: { data: PrismaError[] }) {
  return <DataTable columns={columns} data={data} searchFilter="message" />;
}
