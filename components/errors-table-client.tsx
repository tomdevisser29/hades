"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Error as PrismaError } from "@/app/generated/prisma/client";
import { ErrorsTable } from "@/components/errors-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

const columns: ColumnDef<PrismaError>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "site",
    header: "Site",
  },
  {
    accessorKey: "message",
    header: "Message",
  },
  {
    accessorKey: "timestamp",
    header: "Timestamp",
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
            <DropdownMenuItem>
              <Link href={`/dashboard/errors/${error.id}`}>View error</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>View site</DropdownMenuItem>
            <DropdownMenuItem>Mark as resolved</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function ErrorsTableClient({ data }: { data: PrismaError[] }) {
  return <ErrorsTable columns={columns} data={data} />;
}
