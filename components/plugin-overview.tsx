"use client";

import * as React from "react";
import { EyeIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { JsonValue } from "@/app/generated/prisma/runtime/library";
import { Badge } from "@/components/ui/badge";

type Plugin = {
  slug?: string;
  Author?: string;
  AuthorName?: string;
  AuthorUri?: string;
  Description?: string;
  Name?: string;
  Network?: boolean;
  PluginUri?: string;
  RequiresPhp?: string;
  RequiresPlugins?: string;
  RequiresWp?: string;
  TextDomain?: string;
  Title?: string;
  UpdateUri?: string;
  Version?: string;
};

export default function PluginOverview({
  plugins,
}: {
  plugins: JsonValue | undefined;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const pluginList =
    plugins && typeof plugins === "object"
      ? Object.entries(plugins as Record<string, Plugin>).map(
          ([slug, data]) => ({ ...data, slug })
        )
      : [];
  console.log(plugins);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2 relative"
    >
      <CollapsibleTrigger asChild>
        <div className="flex items-center justify-between w-full">
          <strong className="text-foreground">
            Active plugins:{" "}
            <Badge variant="secondary">
              {pluginList.length} <EyeIcon />
            </Badge>
          </strong>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-2 absolute w-full">
        {pluginList.map((item, index) => (
          <div
            key={index}
            className="rounded-md border px-4 py-2 text-sm shadow-sm bg-white"
          >
            <div className="flex flex-col gap-1">
              <span className="font-medium strong text-foreground flex gap-1">
                {item.Name}{" "}
                <Badge variant="outline" className="font-mono">
                  {item.Version}
                </Badge>
              </span>
              <span className="text-muted-foreground text-xs font-normal">
                {item.Description}
              </span>
            </div>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
