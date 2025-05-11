"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { JsonValue } from "@prisma/client/runtime/library";

type TraceLine = {
  file?: string;
  line?: number;
  function?: string;
  class?: string;
  type?: string;
  args?: string[];
};

export default function ErrorBacktrace({
  backtrace,
}: {
  backtrace: JsonValue | undefined;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const trace = Array.isArray(backtrace) ? (backtrace as TraceLine[]) : [];
  const filteredTrace = trace.filter((t) => !t.function?.startsWith("charon_"));
  const [first, ...rest] = filteredTrace;

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <CollapsibleTrigger asChild>
        <div className="flex items-center justify-between gap-2 w-full">
          <h2 className="text-2xl font-bold">Error backtrace</h2>
          <Button variant="outline" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </div>
      </CollapsibleTrigger>

      {first && (
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground text-xs">
              {first.file ?? "unknown"}:{first.line ?? "?"}
            </span>
            <span className="font-medium">
              {[first.class, first.type, first.function]
                .filter(Boolean)
                .join("")}
              ({first.args?.join(", ") ?? ""})
            </span>
          </div>
        </div>
      )}

      <CollapsibleContent className="space-y-2">
        {rest.map((item, index) => (
          <div
            key={index}
            className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm"
          >
            <div className="flex flex-col">
              <span className="text-muted-foreground text-xs">
                {item.file ?? "unknown"}:{item.line ?? "?"}
              </span>
              <span className="font-medium">
                {[item.class, item.type, item.function]
                  .filter(Boolean)
                  .join("")}
                ({item.args?.join(", ") ?? ""})
              </span>
            </div>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
