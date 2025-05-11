import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BellOffIcon,
  FileWarningIcon,
  MessageSquareShareIcon,
  MoreVerticalIcon,
  UserPlusIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorActionsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="lg" variant="outline">
          <MoreVerticalIcon />
          Actions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side="bottom"
        align="start"
        sideOffset={4}
      >
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BellOffIcon />
            Ignore this error
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MessageSquareShareIcon />
            Share with colleague
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileWarningIcon />
            Escalate this error
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserPlusIcon />
            Assign developer to website
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
